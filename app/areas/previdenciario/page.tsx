import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, User, Clock, DollarSign, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Direito Previdenciário | LORD PERROUT ADVOCACIA",
  description:
    "Assessoria em Direito Previdenciário: aposentadorias, pensões, benefícios por incapacidade e revisões do INSS",
}

export default function PrevidenciarioPage() {
  const services = [
    {
      icon: User,
      title: "Aposentadorias",
      items: [
        "Aposentadoria por idade",
        "Aposentadoria por tempo de contribuição",
        "Aposentadoria especial",
        "Aposentadoria da pessoa com deficiência",
      ],
    },
    {
      icon: Heart,
      title: "Pensões e Auxílios",
      items: ["Pensão por morte", "Auxílio-doença", "Auxílio-acidente", "Salário-maternidade"],
    },
    {
      icon: Clock,
      title: "Benefícios por Incapacidade",
      items: ["Aposentadoria por invalidez", "Auxílio-doença", "BPC/LOAS", "Perícia médica"],
    },
    {
      icon: DollarSign,
      title: "Revisões de Benefícios",
      items: [
        "Revisão de aposentadoria",
        "Revisão da vida toda",
        "Atualização de valores",
        "Restabelecimento de benefícios",
      ],
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
                Direito Previdenciário
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                Assessoria especializada em benefícios previdenciários para garantir seus direitos junto ao INSS com
                segurança e eficiência.
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
                Atuação completa em todas as modalidades de benefícios previdenciários
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

        {/* How We Help Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">Como Podemos Ajudar</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Análise de Direitos</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Avaliação completa do seu histórico contributivo para identificar o melhor benefício e o momento
                    ideal para solicitá-lo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Concessão de Benefícios</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Acompanhamento de todo o processo de solicitação junto ao INSS, incluindo recursos administrativos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Recursos e Revisões</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Contestação de benefícios negados ou revisão de valores para garantir o pagamento correto do seu
                    direito.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Planejamento Previdenciário</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Orientação estratégica para maximizar o valor do seu benefício futuro e otimizar suas contribuições.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Ações Judiciais</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Atuação firme em processos judiciais contra o INSS para garantir seus direitos previdenciários.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Acompanhamento Contínuo</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Suporte permanente durante todo o processo, mantendo você informado sobre cada etapa do seu caso.
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
              Precisa de ajuda com benefícios previdenciários?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
              Entre em contato e agende uma análise do seu caso. Vamos identificar o melhor caminho para garantir seus
              direitos.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contato">Solicitar Análise</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
