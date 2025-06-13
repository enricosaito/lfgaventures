"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl md:text-2xl">
            LFGA Ventures
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link href="/#partners" className="text-sm font-medium transition-colors hover:text-primary">
            Partners
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden md:block">
            <Button>Contact Us</Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/#how-it-works" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  How It Works
                </Link>
                <Link href="/#partners" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Partners
                </Link>
                <Link href="/#testimonials" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
                <Link href="/#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
