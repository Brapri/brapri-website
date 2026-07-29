'use client';
import { useRef, useState, useEffect, type CSSProperties, type ReactNode, type ElementType } from 'react';

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<Element>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(e.target); } });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px', ...options });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown] as const;
}

interface RevealProps {
  variant?: 'rise' | 'fade' | 'blur' | 'draw';
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
  children: ReactNode;
  [key: string]: unknown;
}

export function Reveal({ variant = 'rise', delay = 0, as: Tag = 'div', style, children, ...rest }: RevealProps) {
  const [ref, shown] = useInView();
  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? 'true' : 'false'}
      style={{ animationDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface RevealGroupProps {
  step?: number;
  variant?: 'rise' | 'fade' | 'blur';
  style?: CSSProperties;
  children: ReactNode;
  [key: string]: unknown;
}

export function RevealGroup({ step = 90, variant = 'rise', style, children, ...rest }: RevealGroupProps) {
  return (
    <div style={style} {...rest}>
      {(Array.isArray(children) ? children : [children]).map((child, i) => (
        <Reveal key={i} variant={variant} delay={i * step} style={{ display: 'flex', flexDirection: 'column' }}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

interface RevealWordsProps {
  text: string;
  accentFrom?: number;
  style?: CSSProperties;
  wordStyle?: CSSProperties;
  accentStyle?: CSSProperties;
  delay?: number;
  step?: number;
}

export function RevealWords({ text, accentFrom, style, wordStyle, accentStyle, delay = 0, step = 70 }: RevealWordsProps) {
  const [ref, shown] = useInView({ threshold: 0.3 });
  const words = text.split(' ');
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} style={{ display: 'inline', ...style }}>
      {words.map((w, i) => {
        const accent = accentFrom !== undefined && i >= accentFrom;
        return (
          <span
            key={i}
            data-reveal="blur"
            data-shown={shown ? 'true' : 'false'}
            style={{
              display: 'inline-block', marginRight: '.28em',
              animationDelay: `${delay + i * step}ms`,
              ...wordStyle,
              ...(accent ? accentStyle : undefined),
            }}
          >
            {w}{i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </span>
  );
}
