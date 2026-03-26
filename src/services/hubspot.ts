import { UTMParams } from '@/hooks/useUTMCapture';
import { DeviceType } from '@/utils/deviceDetection';

export interface LeadData {
  // Form fields
  mortgageType: string;
  timeline: string;
  propertyValue: string;
  fullName: string;
  phone: string;
  email?: string;

  // Tracking data
  sourceUrl: string;
  deviceType: DeviceType;
  submissionTimestamp: string;

  // UTM parameters
  utmParams: UTMParams;
}

interface HubSpotContactProperty {
  property: string;
  value: string;
}

export class HubSpotService {
  private accessToken: string;
  private baseUrl = 'https://api.hubapi.com';

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * Submit a lead to HubSpot (create or update if exists)
   */
  async submitLead(data: LeadData): Promise<void> {
    const properties = this.mapLeadDataToHubSpot(data);

    // Try to create the contact
    const createResponse = await fetch(`${this.baseUrl}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ properties }),
    });

    // If successful, return
    if (createResponse.ok) {
      return await createResponse.json();
    }

    // If conflict (409), contact exists - update it instead
    const errorData = await createResponse.json().catch(() => ({}));

    if (createResponse.status === 409 && errorData.message?.includes('Contact already exists')) {
      // Extract existing contact ID from error message
      const existingIdMatch = errorData.message.match(/Existing ID: (\d+)/);

      if (existingIdMatch) {
        const contactId = existingIdMatch[1];
        console.log(`Contact exists (ID: ${contactId}), updating instead...`);

        // Update the existing contact
        return await this.updateContact(contactId, properties);
      }

      // If we can't extract ID, search by email
      if (data.email) {
        const contact = await this.searchContactByEmail(data.email);
        if (contact) {
          console.log(`Found contact by email (ID: ${contact.id}), updating...`);
          return await this.updateContact(contact.id, properties);
        }
      }
    }

    // Other errors - throw
    throw new Error(
      `HubSpot API error: ${createResponse.status} - ${JSON.stringify(errorData)}`
    );
  }

  /**
   * Update an existing contact
   */
  private async updateContact(contactId: string, properties: Record<string, string>): Promise<void> {
    const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts/${contactId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `HubSpot update error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }

    return await response.json();
  }

  /**
   * Search for a contact by email
   */
  private async searchContactByEmail(email: string): Promise<{ id: string } | null> {
    const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                operator: 'EQ',
                value: email,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.results?.[0] || null;
  }

  /**
   * Map our lead data to HubSpot contact properties
   */
  private mapLeadDataToHubSpot(data: LeadData): Record<string, string> {
    // Split full name into first and last name
    const nameParts = data.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const properties: Record<string, string> = {
      // Standard HubSpot properties
      firstname: firstName,
      lastname: lastName,
      phone: data.phone,
      email: data.email || '',

      // Custom properties (must match internal names in HubSpot)
      mortgage_type: data.mortgageType,
      timeline: data.timeline,
      property_value: data.propertyValue,
      source_url: data.sourceUrl,
      device_type: data.deviceType,
    };

    // Add UTM parameters if present (limited to 10 custom properties on free plan)
    if (data.utmParams.utm_source) {
      properties.utm_source = data.utmParams.utm_source;
    }
    if (data.utmParams.utm_medium) {
      properties.utm_medium = data.utmParams.utm_medium;
    }
    if (data.utmParams.utm_campaign) {
      properties.utm_campaign = data.utmParams.utm_campaign;
    }
    if (data.utmParams.utm_content) {
      properties.utm_content = data.utmParams.utm_content;
    }
    // Note: utm_term and fbclid are skipped due to HubSpot free plan limit (10 custom properties)
    // if (data.utmParams.utm_term) {
    //   properties.utm_term = data.utmParams.utm_term;
    // }
    if (data.utmParams.gclid) {
      properties.gclid = data.utmParams.gclid;
    }
    // if (data.utmParams.fbclid) {
    //   properties.fbclid = data.utmParams.fbclid;
    // }

    return properties;
  }
}
