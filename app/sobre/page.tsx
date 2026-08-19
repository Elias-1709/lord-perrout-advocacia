"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "@/components/counter"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Target, Eye, Heart, Award, Users, Clock, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const values = [
    {
      icon: Scale,
      title: "Ética",
      description:
        "Nossa atuação é pautada por princípios éticos rigorosos, garantindo transparência e integridade em todos os processos.",
    },
    {
      icon: Award,
      title: "Excelência",
      description:
        "Compromisso com a qualidade técnica e atualização constante para oferecer as melhores soluções jurídicas.",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description:
        "Dedicação total aos interesses de nossos clientes, com acompanhamento próximo e personalizado de cada caso.",
    },
    {
      icon: Shield,
      title: "Transparência",
      description: "Comunicação clara, honesta e acessível em todas as etapas, mantendo o cliente sempre informado.",
    },
  ]

  const differentials = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e altamente qualificados em diversas áreas do direito.",
    },
    {
      icon: Clock,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção exclusiva e soluções adaptadas às suas necessidades.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Estratégias eficazes orientadas para alcançar os melhores resultados possíveis.",
    },
    {
      icon: Scale,
      title: "Atuação Estratégica",
      description: "Análise criteriosa e planejamento jurídico para decisões bem fundamentadas.",
    },
  ]

  const timeline = [
    { year: "2010", title: "Fundação", description: "Início das atividades do escritório" },
    { year: "2015", title: "Expansão", description: "Ampliação da equipe e áreas de atuação" },
    { year: "2020", title: "Reconhecimento", description: "Destaque no cenário jurídico paulista" },
    { year: "2024", title: "Consolidação", description: "Referência em excelência jurídica" },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-serif text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
                  Sobre o LORD PERROUT ADVOCACIA
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                  Um escritório comprometido com a excelência jurídica e a defesa intransigente dos direitos de nossos
                  clientes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <AnimatedSection animation="fade-in-up">
                <div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">Nossa História</h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    <p>
                      O LORD PERROUT ADVOCACIA nasceu da visão de criar um escritório que aliasse excelência técnica com
                      um atendimento verdadeiramente humanizado e comprometido com os interesses de cada cliente.
                    </p>
                    <p>
                      Ao longo dos anos, consolidamos nossa presença no mercado jurídico através de uma atuação pautada
                      pela ética, transparência e busca incansável por resultados efetivos para nossos clientes.
                    </p>
                    <p>
                      Nossa trajetória é marcada por casos de sucesso em diversas áreas do direito, sempre mantendo como
                      pilares fundamentais a qualidade técnica, a dedicação e o respeito aos princípios que regem a
                      advocacia.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <div className="font-serif text-3xl font-bold text-primary">
                        <Counter end={15} suffix="+" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Anos</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <div className="font-serif text-3xl font-bold text-primary">
                        <Counter end={500} suffix="+" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Clientes</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <div className="font-serif text-3xl font-bold text-primary">
                        <Counter end={98} suffix="%" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Sucesso</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                <AnimatedSection animation="slide-in-right" delay={100}>
                  <Card className="border-l-4 border-l-primary transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Missão</h3>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        Oferecer soluções jurídicas de excelência, com ética e compromisso, protegendo os direitos e
                        interesses de nossos clientes com dedicação e profissionalismo.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={200}>
                  <Card className="border-l-4 border-l-secondary transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                          <Eye className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Visão</h3>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        Ser reconhecido como referência em excelência jurídica, inovação e atendimento humanizado,
                        consolidando-nos como parceiro de confiança para nossos clientes.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={300}>
                  <Card className="transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-lg font-semibold text-foreground">Nossa Trajetória</h3>
                      <div className="space-y-4">
                        {timeline.map((item, index) => (
                          <div key={item.year} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                {item.year.slice(2)}
                              </div>
                              {index < timeline.length - 1 && <div className="h-full w-0.5 bg-border" />}
                            </div>
                            <div className="pb-4">
                              <p className="font-semibold text-foreground">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="mb-12 text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Nossos Valores
                </h2>
                <p className="mt-4 text-lg text-pretty text-muted-foreground">
                  Princípios que guiam nossa atuação e definem nossa identidade
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <AnimatedSection key={value.title} animation="scale-in" delay={index * 100}>
                    <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="mb-12 text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Nossos Diferenciais
                </h2>
                <p className="mt-4 text-lg text-pretty text-muted-foreground">
                  O que nos torna a escolha ideal para suas necessidades jurídicas
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {differentials.map((item, index) => {
                const Icon = item.icon
                return (
                  <AnimatedSection key={item.title} animation="fade-in-up" delay={index * 100}>
                    <Card className="border-t-4 border-t-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Conheça Nossa Equipe
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
                Profissionais experientes e dedicados, prontos para oferecer as melhores soluções jurídicas para você.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/equipe">
                    Ver Equipe Completa
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
