import Image from 'next/image';
import type { CSSProperties } from 'react';

interface LogoProps {
  variant?: 'stacked' | 'wordmark';
  height?: number;
  color?: string;
  style?: CSSProperties;
}

export function Logo({ variant = 'stacked', height = 64, color, style }: LogoProps) {
  if (variant === 'wordmark') {
    const size = Math.round(height * 0.42);
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, ...style }}>
        <span style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 800, fontSize: size, letterSpacing: 'var(--ls-wordmark)', color: color || 'var(--text-heading)' }}>BRAPRI</span>
        <span style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 600, fontSize: Math.max(8, Math.round(size * 0.34)), letterSpacing: '0.34em', color: color || 'var(--text-accent)', marginTop: Math.round(size * 0.18) }}>TECNOLOGIA</span>
      </span>
    );
  }
  return (
    <Image
      src="/assets/brapri-logo-stacked.png"
      alt="BRAPRI Tecnologia"
      height={height}
      width={height}
      style={{ height, width: 'auto', display: 'block', ...style }}
      priority
    />
  );
}
