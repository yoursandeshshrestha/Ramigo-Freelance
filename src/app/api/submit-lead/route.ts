import { NextRequest, NextResponse } from 'next/server';
import { HubSpotService, LeadData } from '@/services/hubspot';

const MAX_RETRIES = 3;
const RETRY_DELAYS = [1000, 2000, 4000]; // Exponential backoff: 1s, 2s, 4s

/**
 * Submit lead to HubSpot with retry logic
 */
async function submitWithRetry(
  hubspot: HubSpotService,
  data: LeadData,
  attempt = 0
): Promise<{ success: boolean; error?: string }> {
  try {
    await hubspot.submitLead(data);
    return { success: true };
  } catch (error) {
    console.error(`HubSpot submission attempt ${attempt + 1} failed:`, error);

    // If we haven't exhausted retries, try again
    if (attempt < MAX_RETRIES - 1) {
      const delay = RETRY_DELAYS[attempt];
      console.log(`Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return submitWithRetry(hubspot, data, attempt + 1);
    }

    // All retries exhausted
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send fallback email notification when all retries fail
 */
async function sendFallbackEmail(data: LeadData, error: string): Promise<void> {
  // TODO: Implement email notification
  // For now, just log the failed submission
  console.error('=== FAILED LEAD SUBMISSION ===');
  console.error('Error:', error);
  console.error('Lead Data:', JSON.stringify(data, null, 2));
  console.error('==============================');

  // In production, you could use:
  // - SendGrid API
  // - AWS SES
  // - Resend
  // - Or any other email service
}

export async function POST(request: NextRequest) {
  try {
    const leadData: LeadData = await request.json();

    // Validate required fields
    if (!leadData.fullName || !leadData.phone || !leadData.mortgageType) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get HubSpot access token from environment
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
    if (!accessToken) {
      console.error('HUBSPOT_ACCESS_TOKEN not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize HubSpot service
    const hubspot = new HubSpotService(accessToken);

    // Submit with retry logic
    const result = await submitWithRetry(hubspot, leadData);

    if (result.success) {
      return NextResponse.json({ success: true });
    }

    // If all retries failed, send fallback email
    await sendFallbackEmail(leadData, result.error || 'Unknown error');

    // Return error to client so they can store locally
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit lead after retries',
        shouldStoreLocally: true,
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        shouldStoreLocally: true,
      },
      { status: 500 }
    );
  }
}
