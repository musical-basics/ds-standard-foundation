"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type ThemeId = "prestige" | "classic"

type ThemeSwatch = {
  background: string
  foreground: string
  primary: string
  primaryForeground: string
  border: string
}

type ThemeOption = {
  id: ThemeId
  name: string
  tagline: string
  description: string
  swatch: ThemeSwatch
}

const themes: ThemeOption[] = [
  {
    id: "prestige",
    name: "Prestige",
    tagline: "The current site",
    description:
      "Warm parchment background, deep brown primary, and Playfair display for an editorial, museum-catalog feel.",
    swatch: {
      background: "#FAFAFA",
      foreground: "#1F1B17",
      primary: "#5A3D24",
      primaryForeground: "#FAFAFA",
      border: "#E5E2DD",
    },
  },
  {
    id: "classic",
    name: "Classic",
    tagline: "Original dsstandardfoundation.org",
    description:
      "Black background with vivid gold headings and accent panels, white body text. Same fonts and layout, restored color palette.",
    swatch: {
      background: "#000000",
      foreground: "#F5F5F2",
      primary: "#F0AC36",
      primaryForeground: "#100A02",
      border: "#5A4017",
    },
  },
]

function readThemeCookie(): ThemeId {
  if (typeof document === "undefined") return "prestige"
  const m = document.cookie.match(/(?:^|;\s*)dssf-theme=([^;]+)/)
  const v = m ? decodeURIComponent(m[1]) : "prestige"
  return v === "classic" ? "classic" : "prestige"
}

export function ThemeSelector() {
  const [active, setActive] = useState<ThemeId>("prestige")
  const [pending, setPending] = useState<ThemeId | null>(null)

  useEffect(() => {
    setActive(readThemeCookie())
  }, [])

  const apply = (id: ThemeId) => {
    if (id === active || pending) return
    setPending(id)
    const oneYear = 60 * 60 * 24 * 365
    document.cookie = `dssf-theme=${id}; path=/; max-age=${oneYear}; samesite=lax`
    window.location.reload()
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {themes.map((theme) => {
        const isActive = active === theme.id
        const isPending = pending === theme.id
        return (
          <button
            key={theme.id}
            type="button"
            onClick={() => apply(theme.id)}
            disabled={isActive || pending !== null}
            className={cn(
              "group relative text-left rounded-2xl border bg-card text-card-foreground p-6 transition-all duration-200",
              "hover:border-primary/60 hover:shadow-lg",
              "disabled:cursor-default",
              isActive ? "border-primary ring-2 ring-primary/40" : "border-border",
            )}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-[family-name:var(--font-inter)] mb-2">
                  {theme.tagline}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-3xl">
                  {theme.name}
                </h3>
              </div>
              {isActive && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium font-[family-name:var(--font-inter)]">
                  <Check className="h-3.5 w-3.5" />
                  Active
                </span>
              )}
            </div>

            {/* Swatch preview, isolated from app theme via inline styles */}
            <div
              className="rounded-xl overflow-hidden border mb-5"
              style={{ borderColor: theme.swatch.border }}
            >
              <div
                className="px-5 py-6"
                style={{
                  backgroundColor: theme.swatch.background,
                  color: theme.swatch.foreground,
                }}
              >
                <p
                  className="text-[0.6rem] uppercase tracking-[0.3em] mb-2 font-[family-name:var(--font-inter)]"
                  style={{ color: theme.swatch.primary }}
                >
                  DS Standard Foundation
                </p>
                <p className="font-[family-name:var(--font-display)] text-xl leading-tight mb-3">
                  Alternative Keyboards
                  <br />
                  <span
                    className="italic font-light"
                    style={{ color: theme.swatch.primary }}
                  >
                    That Fit Every Hand
                  </span>
                </p>
                <span
                  className="inline-block text-xs px-3 py-1.5 rounded-full font-[family-name:var(--font-inter)] font-medium"
                  style={{
                    backgroundColor: theme.swatch.primary,
                    color: theme.swatch.primaryForeground,
                  }}
                >
                  Sample button
                </span>
              </div>
              <div className="flex" style={{ borderTop: `1px solid ${theme.swatch.border}` }}>
                {[
                  theme.swatch.background,
                  theme.swatch.foreground,
                  theme.swatch.primary,
                  theme.swatch.border,
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex-1 h-6"
                    style={{ backgroundColor: c }}
                    aria-hidden
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {theme.description}
            </p>

            <div className="text-sm font-medium font-[family-name:var(--font-inter)]">
              {isActive ? (
                <span className="text-muted-foreground">Currently applied</span>
              ) : isPending ? (
                <span className="text-primary">Applying...</span>
              ) : (
                <span className="text-primary group-hover:underline">
                  Switch to {theme.name}
                </span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
