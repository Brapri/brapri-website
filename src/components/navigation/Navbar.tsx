'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/core/Button';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
  transparent?: boolean;
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', paddingBottom: 4,
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)',
        fontWeight: 600, letterSpacing: '.01em',
        color: active || hovered ? 'var(--text-heading)' : 'var(--text-muted)',
        cursor: 'pointer', transition: 'color var(--dur-fast) var(--ease-standard)',
        textDecoration: 'none',
      }}
    >
      {children}
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 1,
        background: 'var(--accent)', opacity: active ? 1 : 0,
        transition: 'opacity var(--dur-fast) var(--ease-standard)',
      }} />
    </Link>
  );
}

export function Navbar({ items, transparent = false }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', gap: 'var(--space-10)',
      height: 112, padding: '0 var(--gutter)',
      background: transparent ? 'transparent' : 'rgba(8,9,10,.72)',
      backdropFilter: transparent ? 'none' : 'var(--blur-glass)',
      WebkitBackdropFilter: transparent ? 'none' : 'var(--blur-glass)',
      borderBottom: `1px solid ${transparent ? 'transparent' : 'var(--border-hairline)'}`,
    }}>
      <Link href="/" style={{ display: 'inline-flex', cursor: 'pointer' }}>
        <Logo height={96} />
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', marginLeft: 'auto' }}>
        {items.map((it) => (
          <NavLink key={it.id} href={it.href} active={pathname === it.href || (it.href !== '/' && pathname.startsWith(it.href))}>
            {it.label}
          </NavLink>
        ))}
      </nav>
      <Button size="sm" onClick={() => router.push('/contato')}>Solicitar proposta</Button>
    </header>
  );
}
