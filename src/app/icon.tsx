import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B0F1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          border: '1px solid rgba(192,168,84,0.4)',
        }}
      >
        <div
          style={{
            color: '#C0A854',
            fontSize: 21,
            fontWeight: 800,
            fontFamily: 'serif',
            lineHeight: 1,
            letterSpacing: '-1px',
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size },
  );
}
