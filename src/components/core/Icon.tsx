'use client';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { CSSProperties } from 'react';

interface IconProps {
  name: string;
  size?: number;
  strokeColor?: string;
  style?: CSSProperties;
  className?: string;
}

function toPascalCase(kebab: string): string {
  return kebab.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

export function Icon({ name, size = 18, strokeColor, style, ...rest }: IconProps) {
  const key = toPascalCase(name) as keyof typeof LucideIcons;
  const LucideIcon = LucideIcons[key] as React.ComponentType<LucideProps> | undefined;
  if (!LucideIcon) return null;
  return (
    <span aria-hidden="true" style={{ display: 'inline-flex', flex: '0 0 auto', ...style }} {...rest}>
      <LucideIcon size={size} color={strokeColor || 'currentColor'} strokeWidth={1.5} />
    </span>
  );
}
