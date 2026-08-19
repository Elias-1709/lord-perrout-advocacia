"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <AnimatedSection animation="fade-in-up" delay={0}>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-foreground">LORD PERROUT</span>
                <span className="text-xs font-medium tracking-widest text-muted-foreground">ADVOCACIA</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Excelência jurídica com ética, compromisso e transparência para proteger seus direitos.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Navigation */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/sobre" className="text-muted-foreground transition-colors hover:text-primary">
                    Sobre o Escritório
                  </Link>
                </li>
                <li>
                  <Link href="/areas" className="text-muted-foreground transition-colors hover:text-primary">
                    Áreas de Atuação
                  </Link>
                </li>
                <li>
                  <Link href="/equipe" className="text-muted-foreground transition-colors hover:text-primary">
                    Nossa Equipe
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                    Artigos
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Practice Areas */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Áreas de Atuação</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/areas/civil" className="text-muted-foreground transition-colors hover:text-primary">
                    Direito Civil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/areas/trabalhista"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link
                    href="/areas/empresarial"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Direito Empresarial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/areas/previdenciario"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Direito Previdenciário
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+551112345678"
                    className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="mt-0.5 h-4 w-4" />
                    <span>(11) 1234-5678</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@lordperrout.com.br"
                    className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="mt-0.5 h-4 w-4" />
                    <span>contato@lordperrout.com.br</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Av.+Paulista,+1000+-+São+Paulo,+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>Av. Paulista, 1000 - São Paulo, SP</span>
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {currentYear} LORD PERROUT ADVOCACIA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="transition-colors hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="transition-colors hover:text-primary">
              Termos de Uso
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="h-8 w-8 bg-transparent"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
