"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/sobre", label: "O escritório" },
  { href: "/areas", label: "Áreas de atuação" },
  { href: "/equipe", label: "Equipe" },
  { href: "/blog", label: "Conteúdo" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll) }, [])
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className={cn("sticky top-0 z-50 border-b transition-all", scrolled ? "border-border/80 bg-background/95 shadow-sm backdrop-blur" : "border-transparent bg-background/80 backdrop-blur-sm")}>
      <div className="hidden border-b border-border/60 bg-primary py-2 text-primary-foreground md:block"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs tracking-wide"><span>Atendimento estratégico para decisões importantes</span><span className="text-primary-foreground/75">Segunda a sexta · 9h às 18h</span></div></div>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 md:px-6" aria-label="Navegação principal">
        <Link href="/" className="group flex items-center gap-3" aria-label="Lord Perrout Advocacia - início"><span className="flex size-10 items-center justify-center border border-accent font-serif text-xl text-accent transition-transform group-hover:rotate-6">LP</span><span className="flex flex-col"><span className="font-serif text-lg font-semibold leading-none tracking-wide text-foreground">LORD PERRout</span><span className="mt-1 text-[10px] font-medium tracking-[.28em] text-muted-foreground">ADVOCACIA</span></span></Link>
        <div className="hidden items-center gap-1 lg:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className={cn("relative px-4 py-3 text-sm transition-colors hover:text-foreground", pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground")}>{item.label}{pathname.startsWith(item.href) && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-accent" />}</Link>)}<Button asChild className="ml-4 gap-2"><Link href="/contato">Fale conosco <ArrowUpRight data-icon="inline-end" /></Link></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
      </nav>
      <div className={cn("overflow-hidden border-t border-border bg-background transition-all lg:hidden", open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}><div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">{navItems.map((item) => <Link key={item.href} href={item.href} className={cn("rounded-sm px-4 py-3 text-base", pathname.startsWith(item.href) ? "bg-secondary text-primary" : "text-muted-foreground")}>{item.label}</Link>)}<Button asChild className="mt-3"><Link href="/contato"><Phone data-icon="inline-start" /> Agendar conversa</Link></Button></div></div>
    </header>
  )
}
