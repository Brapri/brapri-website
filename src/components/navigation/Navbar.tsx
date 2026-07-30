'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/core/Button';
import { Icon } from '@/components/core/Icon';

interface NavItem { id: string; label: string; href: string; }
interface NavbarProps { items: NavItem[]; transparent?: boolean; }

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
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header
        className="navbar-root"
        style={{
          position: 'sticky', top: 0, zIndex: 30,
          display: 'flex', alignItems: 'center', gap: 'var(--space-10)',
          height: 112, padding: '0 var(--gutter)',
          background: transparent ? 'transparent' : 'rgba(8,9,10,.72)',
          backdropFilter: transparent ? 'none' : 'var(--blur-glass)',
          WebkitBackdropFilter: transparent ? 'none' : 'var(--blur-glass)',
          borderBottom: `1px solid ${transparent ? 'transparent' : 'var(--border-hairline)'}`,
        }}
      >
        <Link href="/" style={{ display: 'inline-flex', cursor: 'pointer' }}>
          <span className="nav-logo-wrap"><Logo height={96} /></span>
        </Link>

        <nav className="nav-links" style={{ marginLeft: 'auto' }}>
          {items.map((it) => (
            <NavLink key={it.id} href={it.href} active={isActive(it.href)}>
              {it.label}
            </NavLink>
          ))}
        </nav>

        <span className="nav-cta">
          <Button size="sm" onClick={() => router.push('/contato')}>Solicitar proposta</Button>
        </span>

        <button
          className="nav-burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'x' : 'menu'} size={24} />
        </button>
      </header>

      {open && (
        <nav className="nav-drawer">
          {items.map((it) => (
            <Link
              key={it.id}
              href={it.href}
              className={`nav-drawer-link${isActive(it.href) ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
          <span className="nav-drawer-cta">
            <Button fullWidth size="lg" onClick={() => { router.push('/contato'); setOpen(false); }}>
              Solicitar proposta
            </Button>
          </span>
        </nav>
      )}
    </>
  );
}
