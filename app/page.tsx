"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "@/components/counter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Shield, Users, Award, ArrowRight, CheckCircle2, Clock, Phone, Briefcase } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos reais e obrigações.",
      href: "/areas/civil",
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas e relações de emprego.",
      href: "/areas/trabalhista",
    },
    {
      icon: Shield,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas e negócios.",
      href: "/areas/empresarial",
    },
    {
      icon: Award,
      title: "Direito Previdenciário",
      description: "Benefícios previdenciários e aposentadorias.",
      href: "/areas/previdenciario",
    },
  ]

  const values = [
    {
      title: "Ética",
      description: "Atuação pautada em princípios éticos e transparência absoluta.",
    },
    {
      title: "Excelência",
      description: "Compromisso com a qualidade técnica e resultados efetivos.",
    },
    {
      title: "Compromisso",
      description: "Dedicação total aos interesses e objetivos de nossos clientes.",
    },
    {
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas do processo.",
    },
  ]

  const stats = [
    { value: 15, suffix: "+", label: "Anos de Experiência" },
    { value: 500, suffix: "+", label: "Clientes Atendidos" },
    { value: 98, suffix: "%", label: "Taxa de Sucesso" },
    { value: 8, suffix: "", label: "Áreas de Atuação" },
  ]

  const features = [
    "Primeira consulta gratuita",
    "Atendimento personalizado",
    "Equipe especializada",
    "Sigilo profissional garantido",
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section - Enhanced with animations */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedSection animation="fade-in-up" delay={0}>
                <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                  Defesa jurídica com{" "}
                  <span className="relative">
                    excelência
                    <span className="absolute -bottom-1 left-0 h-1 w-full bg-primary/30" />
                  </span>{" "}
                  e compromisso
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={150}>
                <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                  O LORD PERROUT ADVOCACIA oferece soluções jurídicas especializadas com foco em resultados, ética e
                  transparência para proteger seus direitos e interesses.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  {features.map((feature, index) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                    >
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={450}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group w-full sm:w-auto">
                    <Link href="/contato">
                      Agende uma Consulta
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full bg-transparent sm:w-auto">
                    <a href="tel:+551112345678" className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      (11) 1234-5678
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-primary py-12 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} animation="fade-in-up" delay={index * 100}>
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold md:text-5xl">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas Section - Enhanced with stagger animation */}
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="mb-12 text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
                  Áreas de Atuação
                </h2>
                <p className="mt-4 text-lg text-pretty text-muted-foreground">
                  Expertise jurídica especializada para atender suas necessidades
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {practiceAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <AnimatedSection key={area.title} animation="fade-in-up" delay={index * 100}>
                    <Link href={area.href} className="block h-full">
                      <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                        <CardContent className="flex h-full flex-col p-6">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-foreground">{area.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                          <div className="mt-auto pt-4">
                            <span className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-primary">
                              Saiba mais
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                )
              })}
            </div>

            <AnimatedSection animation="fade-in-up" delay={500}>
              <div className="mt-10 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/areas">Ver Todas as Áreas</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Preview Section - Enhanced */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <AnimatedSection animation="fade-in-up">
                <div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
                    Sobre o LORD PERROUT ADVOCACIA
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                    Somos um escritório de advocacia comprometido com a excelência na prestação de serviços jurídicos.
                    Nossa missão é oferecer soluções eficazes e personalizadas, sempre pautadas pela ética, compromisso
                    e transparência.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                    Com uma equipe de profissionais experientes e especializados, atuamos em diversas áreas do direito
                    para garantir a melhor defesa dos interesses de nossos clientes.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Seg-Sex: 9h às 18h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">15+ anos de experiência</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" className="group">
                      <Link href="/sobre">
                        Conheça Nossa História
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <AnimatedSection key={value.title} animation="scale-in" delay={index * 100}>
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Precisa de orientação jurídica?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
                Entre em contato conosco e agende uma consulta. Nossa equipe está pronta para ajudá-lo a encontrar a
                melhor solução para o seu caso.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full bg-background text-foreground hover:bg-background/90 sm:w-auto"
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  <a href="tel:+551112345678" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (11) 1234-5678
                  </a>
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
