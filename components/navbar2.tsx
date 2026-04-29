"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type NavLink = { href: string; label: string }

// V2 navbar: links only to /foo2 routes so the v2 experience stays self-contained.
const navLinks: NavLink[] = [
  { href: "/home2", label: "Home" },
  { href: "/about2", label: "About" },
  { href: "/the_ds_standard2", label: "The DS Standard" },
  { href: "/projects2", label: "Projects" },
  { href: "/products2", label: "Products" },
  { href: "/donations2", label: "Donations" },
  { href: "/contact_us2", label: "Contact Us" },
]

export function Navbar2() {
  const [_isScrolled, setIsScrolled] = useState(false)
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
          <Link href="/home2" className="flex items-center gap-2 px-3">
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={triggerClass}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center min-h-full gap-5 py-24 px-6">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className={cn(
                "flex flex-col items-center gap-2 transform transition-all duration-500",
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
