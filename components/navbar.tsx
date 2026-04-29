"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavChild = { href: string; label: string }
type NavLink = {
  href?: string
  label: string
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [{ href: "/our-story", label: "Our Story" }],
  },
  { href: "/history", label: "History" },
  { href: "/the_ds_standard", label: "The DS Standard" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/donations", label: "Donations" },
  { href: "/contact_us", label: "Contact Us" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const triggerClass = cn(
    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap inline-flex items-center gap-1",
    "text-foreground/80 hover:text-foreground hover:bg-secondary"
  )

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
          "bg-card/80 backdrop-blur-xl shadow-lg border border-border/50",
          "rounded-full px-2 py-2"
        )}
      >
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-2 px-3">
            <Image
              src="/home_DS-SF-Logo-1.png"
              alt="DS Standard Foundation"
              width={40}
              height={40}
              className="h-8 w-auto classic:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="relative group">
                    {link.href ? (
                      <Link href={link.href} className={triggerClass}>
                        {link.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      </Link>
                    ) : (
                      <button type="button" className={triggerClass}>
                        {link.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                    )}
                    <div
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 top-full pt-3",
                        "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
                        "transition-opacity duration-200"
                      )}
                    >
                      <div className="bg-card/95 backdrop-blur-xl shadow-lg border border-border/50 rounded-2xl py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary whitespace-nowrap transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={triggerClass}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden overflow-y-auto",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center min-h-full gap-5 py-24 px-6">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className={cn(
                "flex flex-col items-center gap-2 transform transition-all duration-500",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.href ? (
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <span className="text-2xl font-medium text-foreground/60">
                  {link.label}
                </span>
              )}
              {link.children && (
                <div className="flex flex-col items-center gap-1.5">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-normal text-foreground/55 hover:text-foreground transition-colors text-center"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
