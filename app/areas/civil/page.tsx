import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Home, Scale, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Direito Civil | LORD PERROUT ADVOCACIA",
  description:
    "Atuação especializada em Direito Civil: contratos, responsabilidade civil, direito de família, sucessões e muito mais",
}

export default function CivilPage() {
  const services = [
    {
      icon: FileText,
      title: "Contratos",
      items: ["Elaboração e revisão de contratos", "Análise de cláusulas", "Negociação contratual", "Rescisões"],
    },
    {
      icon: Users,
      title: "Família e Sucessões",
      items: ["Divórcio e separação", "Inventário e partilha", "Pensão alimentícia", "Guarda de menores"],
    },
    {
      icon: Scale,
      title: "Responsabilidade Civil",
      items: ["Indenizações por danos", "Danos morais e materiais", "Acidentes de trânsito", "Reparação de prejuízos"],
    },
    {
      icon: Home,
      title: "Direitos Reais",
      items: ["Propriedade e posse", "Usucapião", "Servidões", "Direitos de vizinhança"],
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
                Direito Civil
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                Atuação especializada em todas as vertentes do Direito Civil, protegendo seus direitos pessoais,
                patrimoniais e familiares com segurança jurídica e compromisso.
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
                Soluções jurídicas completas em Direito Civil para pessoas físicas e jurídicas
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

        {/* How We Work Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">Como Atuamos</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Nossa atuação em Direito Civil é baseada em uma análise minuciosa de cada caso, buscando sempre a
                    melhor estratégia para proteger os interesses de nossos clientes.
                  </p>
                  <p>
                    Oferecemos atendimento personalizado e acompanhamento próximo em todas as etapas do processo,
                    mantendo você sempre informado sobre o andamento de sua questão jurídica.
                  </p>
                  <p>
                    Seja em questões contratuais, familiares, sucessórias ou indenizatórias, nossa equipe está preparada
                    para oferecer soluções eficazes e fundamentadas tecnicamente.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">Consultoria Preventiva</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Orientação jurídica preventiva para evitar conflitos e garantir que seus contratos e relações
                      civis estejam juridicamente seguros.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">Soluções Extrajudiciais</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Busca por acordos e mediações sempre que possível, evitando desgastes e custos desnecessários com
                      processos judiciais.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">Defesa Judicial</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Quando necessário, atuação firme e estratégica em processos judiciais, sempre focados nos melhores
                      resultados para você.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Precisa de assessoria em Direito Civil?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
              Entre em contato conosco e agende uma consulta. Nossa equipe está pronta para analisar seu caso e oferecer
              a melhor solução jurídica.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contato">Agendar Consulta</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
