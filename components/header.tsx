"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/areas", label: "Áreas de Atuação" },
    { href: "/equipe", label: "Equipe" },
    { href: "/blog", label: "Artigos" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              LORD PERROUT
            </span>
            <span className="text-xs font-medium tracking-widest text-muted-foreground">ADVOCACIA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4">
            <a href="tel:+551112345678" className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(11) 1234-5678</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="relative h-6 w-6">
            <Menu
              className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-300",
                mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
              )}
            />
            <X
              className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-300",
                mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
              )}
            />
          </span>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto flex flex-col space-y-2 px-4 py-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-all",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="tel:+551112345678" className="inline-flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              (11) 1234-5678
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
