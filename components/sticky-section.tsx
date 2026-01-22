"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface StickySectionProps {
  children: ReactNode
  stickyContent: ReactNode
  className?: string
  reverse?: boolean
}

export function StickySection({
  children,
  stickyContent,
  className,
  reverse = false,
}: StickySectionProps) {
  return (
    <section className={cn("relative", className)}>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16",
          reverse && "lg:[direction:rtl]"
        )}
      >
        {/* Scrolling Content */}
        <div className={cn("space-y-12 lg:py-24", reverse && "lg:[direction:ltr]")}>
          {children}
        </div>

        {/* Sticky Content */}
        <div className={cn("lg:py-24", reverse && "lg:[direction:ltr]")}>
          <div className="lg:sticky lg:top-32 lg:h-fit">
            {stickyContent}
          </div>
        </div>
      </div>
    </section>
  )
}
