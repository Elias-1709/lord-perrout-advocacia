import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, FileText, Users2, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Direito Empresarial | LORD PERROUT ADVOCACIA",
  description:
    "Consultoria jurídica empresarial completa: constituição de empresas, contratos, societário e recuperação judicial",
}

export default function EmpresarialPage() {
  const services = [
    {
      icon: Building2,
      title: "Constituição de Empresas",
      items: ["Abertura de empresas", "Escolha do tipo societário", "Registro e licenças", "Planejamento empresarial"],
    },
    {
      icon: FileText,
      title: "Contratos Comerciais",
      items: ["Elaboração de contratos", "Análise e revisão", "Negociações comerciais", "Resolução de conflitos"],
    },
    {
      icon: Users2,
      title: "Direito Societário",
      items: ["Acordo de sócios", "Entrada e saída de sócios", "Governança corporativa", "Assembleias e reuniões"],
    },
    {
      icon: TrendingUp,
      title: "Recuperação e Falência",
      items: ["Recuperação judicial", "Recuperação extrajudicial", "Falência", "Reestruturação empresarial"],
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6">
                <Link
                  href="/areas"
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                  Voltar para Áreas de Atuação
                </Link>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
                Direito Empresarial
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                Consultoria jurídica completa para empresas, desde a constituição até questões societárias complexas,
                garantindo segurança jurídica para o seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">Nossos Serviços</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Soluções jurídicas estratégicas para o crescimento do seu negócio
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title}>
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                Por Que Escolher Nossa Consultoria?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Visão Estratégica</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Análise jurídica alinhada aos objetivos de negócio, oferecendo soluções que impulsionam o
                    crescimento empresarial.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Prevenção de Riscos</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Consultoria preventiva para identificar e mitigar riscos jurídicos antes que se tornem problemas
                    reais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Agilidade e Eficiência</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Respostas rápidas e eficientes para que sua empresa não perca oportunidades de negócio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Sua empresa precisa de assessoria jurídica?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
              Entre em contato e descubra como podemos ajudar sua empresa a crescer com segurança jurídica e estratégia.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contato">Solicitar Consultoria</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
