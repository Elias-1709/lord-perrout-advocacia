"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Users, Building2, Heart, ShoppingCart, Home, Briefcase, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AreasPage() {
  const areas = [
    {
      icon: Scale,
      title: "Direito Civil",
      description:
        "Atuação em contratos, responsabilidade civil, direitos reais, obrigações, família e sucessões, garantindo a proteção de seus direitos e interesses pessoais.",
      href: "/areas/civil",
      topics: ["Contratos", "Família e Sucessões", "Responsabilidade Civil", "Direitos Reais"],
      color: "from-blue-500/10 to-blue-600/5",
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description:
        "Defesa dos direitos trabalhistas de empregados e empregadores, incluindo ações trabalhistas, acordos e consultoria preventiva em relações de trabalho.",
      href: "/areas/trabalhista",
      topics: ["Ações Trabalhistas", "Rescisões", "Acordos Coletivos", "Consultoria Preventiva"],
      color: "from-green-500/10 to-green-600/5",
    },
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Consultoria jurídica completa para empresas, desde a constituição até questões societárias, contratos comerciais e recuperação judicial.",
      href: "/areas/empresarial",
      topics: ["Constituição de Empresas", "Contratos Comerciais", "Societário", "Recuperação Judicial"],
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      icon: Heart,
      title: "Direito Previdenciário",
      description:
        "Assessoria em benefícios previdenciários, aposentadorias, pensões, auxílios e revisões, garantindo seus direitos junto ao INSS.",
      href: "/areas/previdenciario",
      topics: ["Aposentadorias", "Pensões", "Benefícios por Incapacidade", "Revisões"],
      color: "from-red-500/10 to-red-600/5",
    },
    {
      icon: ShoppingCart,
      title: "Direito do Consumidor",
      description:
        "Defesa dos direitos do consumidor em relações de consumo, vícios de produtos e serviços, cobranças indevidas e danos morais.",
      href: "/areas/consumidor",
      topics: ["Vícios de Produtos", "Cobranças Indevidas", "Danos Morais", "Contratos Abusivos"],
      color: "from-orange-500/10 to-orange-600/5",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description:
        "Assessoria jurídica em negócios imobiliários, contratos de compra e venda, locação, regularização de imóveis e disputas possessórias.",
      href: "/areas/imobiliario",
      topics: ["Compra e Venda", "Locações", "Regularização", "Disputas Possessórias"],
      color: "from-teal-500/10 to-teal-600/5",
    },
    {
      icon: Briefcase,
      title: "Direito Tributário",
      description:
        "Consultoria e planejamento tributário, defesa em execuções fiscais, compensações e restituições de tributos para pessoas físicas e jurídicas.",
      href: "/areas/tributario",
      topics: ["Planejamento Tributário", "Execuções Fiscais", "Compensações", "Restituições"],
      color: "from-indigo-500/10 to-indigo-600/5",
    },
    {
      icon: FileText,
      title: "Direito Contratual",
      description:
        "Elaboração, análise e revisão de contratos de todas as naturezas, garantindo segurança jurídica e adequação às necessidades do cliente.",
      href: "/areas/contratual",
      topics: ["Elaboração", "Revisão", "Negociação", "Resolução de Conflitos"],
      color: "from-cyan-500/10 to-cyan-600/5",
    },
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
                  Áreas de Atuação
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                  Expertise jurídica especializada em diversas áreas do direito para atender todas as suas necessidades
                  com excelência e compromisso.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area, index) => {
                const Icon = area.icon
                return (
                  <AnimatedSection key={area.title} animation="fade-in-up" delay={index * 75}>
                    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className={`h-1 bg-gradient-to-r ${area.color}`} />
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                          <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                        </div>
                        <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">{area.title}</h3>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{area.description}</p>

                        <div className="mb-6">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Principais Serviços:
                          </p>
                          <ul className="space-y-1">
                            {area.topics.map((topic) => (
                              <li key={topic} className="flex items-start text-sm text-muted-foreground">
                                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto">
                          <Button asChild variant="ghost" className="w-full justify-start p-0 hover:bg-transparent">
                            <Link href={area.href} className="inline-flex items-center font-medium text-primary">
                              Saiba mais
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
                Não encontrou a área que procura?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Entre em contato conosco. Nossa equipe está pronta para avaliar seu caso e oferecer a melhor solução
                jurídica.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="group">
                  <Link href="/contato">
                    Fale Conosco
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
