import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #170a2b 0%, #3b1170 55%, #7c3aed 100%)',
          color: '#f4efff',
          padding: '72px',
          fontSize: 32
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: '#b98cff'
            }}
          />
          <div style={{ color: '#c5b8e2' }}>{site.role}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.1, letterSpacing: -2 }}>
          Building and maintaining interfaces for enterprise-scale products.
        </div>
        <div style={{ display: 'flex', color: '#c5b8e2', fontSize: 28 }}>
          {site.name} · {site.employer} · consulting at {site.consultingAt}
        </div>
      </div>
    ),
    size
  );
}
