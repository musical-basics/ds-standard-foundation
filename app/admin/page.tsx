import type { Metadata } from "next"
import Link from "next/link"
import { ThemeSelector } from "./theme-selector"

export const metadata: Metadata = {
  title: "Admin | DS Standard Foundation",
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <header className="mb-12">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
            Admin
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl leading-[1.05] tracking-tight mb-4">
            Site theme
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Choose the active color palette for the site. The change applies immediately and persists in this browser via cookie.
          </p>
        </header>

        <section className="mb-16">
          <ThemeSelector />
        </section>

        <section className="rounded-2xl border border-border bg-card text-card-foreground p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl mb-3">
            How it works
          </h2>
          <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed list-disc pl-5">
            <li>
              Selection is stored in a <code className="font-mono text-xs">dssf-theme</code> cookie scoped to your browser.
            </li>
            <li>
              A small inline script in the document head reads the cookie before paint, so there is no flash on navigation.
            </li>
            <li>
              Both themes share the same fonts, layout, and components; only the color tokens defined in <code className="font-mono text-xs">app/globals.css</code> change.
            </li>
            <li>
              To make a theme the default for visitors who have no cookie set, change the fallback in <code className="font-mono text-xs">app/layout.tsx</code> and the <code className="font-mono text-xs">theme-prestige</code> class on the <code className="font-mono text-xs">&lt;html&gt;</code> element.
            </li>
          </ul>
        </section>

        <p className="mt-10 text-sm text-foreground/60">
          <Link href="/" className="underline-offset-4 hover:underline">
            Return to site
          </Link>
        </p>
      </main>
    </div>
  )
}
