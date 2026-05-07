import Link from "next/link";
import type { ReactNode } from "react";
import { ActionLink } from "@/app/components/action-link";
import { navigation, site } from "@/app/lib/site-data";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative layers create the warm editorial backdrop used across the site. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(154,115,77,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(27,21,16,0.08),_transparent_28%),linear-gradient(180deg,_rgba(255,250,244,0.96),_rgba(246,240,231,1))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(27,21,16,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(27,21,16,0.55)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Sticky header keeps the navigation accessible on every page. */}
      <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[rgba(246,240,231,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/accueil" className="group flex flex-col gap-0.5">
            <span className="text-lg font-semibold tracking-[0.24em] text-foreground uppercase">
              {site.name}
            </span>
            <span className="text-[0.72rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {site.role}
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Navigation principale">
            {navigation.map((item) => (
              <ActionLink key={item.href} href={item.href} variant="ghost" className="px-4 py-2">
                {item.label}
              </ActionLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ActionLink href="/contact" variant="primary">
              Planifier un échange
            </ActionLink>
          </div>

          {/* Mobile navigation uses a native disclosure for a light, dependency-free menu. */}
          <details className="group lg:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-full border border-[color:var(--border)] bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-[color:var(--accent)]">
              Menu
            </summary>
            <div className="absolute left-4 right-4 mt-3 grid gap-2 rounded-[1.5rem] border border-[color:var(--border)] bg-surface p-3 shadow-[0_18px_60px_rgba(27,21,16,0.1)] sm:left-6 sm:right-6">
              {navigation.map((item) => (
                <ActionLink key={item.href} href={item.href} variant="ghost" className="justify-start px-4 py-3">
                  {item.label}
                </ActionLink>
              ))}
              <ActionLink href="/contact" variant="primary" className="mt-1">
                Planifier un échange
              </ActionLink>
            </div>
          </details>
        </div>
      </header>

      <main id="content" className="relative mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {children}
      </main>

      {/* Footer repeats the key navigation and contact points for quick access. */}
      <footer className="border-t border-[color:var(--border)] bg-[rgba(255,250,244,0.8)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div className="max-w-lg space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-strong">{site.name}</p>
            <p className="text-base leading-7 text-[color:var(--muted)]">{site.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Navigation</p>
            <ul className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
              <Link href="mailto:bonjour@angieatelier.fr" className="transition hover:text-foreground">
                bonjour@angieatelier.fr
              </Link>
              <span>Lundi - Vendredi, 9h - 18h</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}