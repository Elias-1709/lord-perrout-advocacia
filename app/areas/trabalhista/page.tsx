import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, FileCheck, Scale, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Direito Trabalhista | LORD PERROUT ADVOCACIA",
  description:
    "Defesa especializada em Direito Trabalhista: ações trabalhistas, rescisões, acordos coletivos e consultoria preventiva",
}

export default function TrabalhistaPage() {
  const services = [
    {
      icon: Scale,
      title: "Ações Trabalhistas",
      items: ["Horas extras não pagas", "Verbas rescisórias", "Danos morais", "Acidente de trabalho"],
    },
    {
      icon: FileCheck,
      title: "Rescisões Contratuais",
      items: ["Análise de verbas rescisórias", "Homologação", "Contestação de demissões", "Acordos trabalhistas"],
    },
    {
      icon: Users,
      title: "Relações Sindicais",
      items: ["Acordos coletivos", "Convenções coletivas", "Negociações sindicais", "Dissídios coletivos"],
    },
    {
      icon: Briefcase,
      title: "Consultoria Preventiva",
      items: ["Compliance trabalhista", "Análise de contratos", "Políticas internas", "Auditorias trabalhistas"],
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
                Direito Trabalhista
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                Defesa especializada dos direitos trabalhistas de empregados e empregadores, com foco em soluções
                eficazes e estratégicas para relações de trabalho.
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
                Atuação completa em todas as áreas do Direito Trabalhista
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

        {/* For Who Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">Para Quem Atuamos</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-t-4 border-t-primary">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">Empregados</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        Defesa em ações trabalhistas buscando seus direitos não pagos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        Análise de verbas rescisórias e contestação de demissões injustas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        Orientação sobre direitos e deveres na relação de emprego
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Acompanhamento em processos de acidente de trabalho</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-secondary">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">Empregadores</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Defesa em ações trabalhistas movidas por empregados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">
                        Consultoria preventiva para evitar passivos trabalhistas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">
                        Elaboração de políticas internas e compliance trabalhista
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Auditorias e revisão de processos trabalhistas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Seus direitos trabalhistas precisam ser defendidos?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
              Entre em contato conosco. Nossa equipe possui ampla experiência em Direito Trabalhista e está pronta para
              ajudá-lo.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
