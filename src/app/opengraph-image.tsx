import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Remigo - Your Mortgage, Sorted by Mates Who Get It';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--color-sky-blue) 0%, var(--color-amber) 50%, var(--color-remigo-red) 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(57, 35, 38, 0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'rgba(248, 248, 248, 0.2)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
            position: 'relative',
          }}
        >
          {/* Logo/Brand Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'var(--color-brand-black)',
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            Remigo
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 400,
              color: 'var(--color-brand-black)',
              marginBottom: 32,
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Your Mortgage, Sorted by Mates Who Get It
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              fontSize: 28,
              color: 'var(--color-brand-black)',
              opacity: 0.9,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              90+ Lenders
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              •
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              £0 Fees
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              •
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              FCA Regulated
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
