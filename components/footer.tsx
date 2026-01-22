import Link from "next/link"
import { Facebook, Youtube } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the_ds_standard", label: "The DS Standard" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/donations", label: "Donations" },
  { href: "/contact_us", label: "Contact Us" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              DS Standard Foundation
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Setting a standard for alternatively sized keyboards recognized
              globally, so pianists may achieve their full musical potential.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="http://facebook.com/dsstandardfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLHBn-VaaOCGcGEZpA2CFBsMVP2RvcfiXb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/50 text-xs mt-6">
              600 North Brown Street
              <br />
              Titusville, Pennsylvania 16354, USA
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-background/50 text-sm text-center">
            Copyright: DS Standard Foundation Inc
          </p>
        </div>
      </div>
    </footer>
  )
}
