"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Briefcase, GraduationCap, Mail, Linkedin, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function EquipePage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  const team = [
    {
      name: "Dr. Ricardo Lord Perrout",
      role: "Sócio Fundador",
      image: "/images/ricardo-lord-perrout.png",
      specialty: "Direito Civil e Empresarial",
      description:
        "Especialista em Direito Civil e Empresarial com mais de 15 anos de experiência. Atuação estratégica em consultoria empresarial e resolução de conflitos complexos.",
      fullDescription:
        "Advogado com mais de 15 anos de experiência, especialista em Direito Civil e Empresarial pela Universidade de São Paulo. Atua principalmente em consultoria empresarial, contratos complexos e resolução de disputas comerciais. Membro do Instituto dos Advogados de São Paulo (IASP) e da Ordem dos Advogados do Brasil (OAB/SP). Palestrante em eventos jurídicos e autor de artigos sobre Direito Empresarial.",
      credentials: [
        "OAB/SP 123.456",
        "Mestre em Direito Civil - USP",
        "Especialista em Direito Empresarial",
        "Membro IASP",
      ],
      email: "ricardo.perrout@lordperrout.com.br",
      linkedin: "https://linkedin.com/in/ricardoperrout",
    },
    {
      name: "Dra. Mariana Santos",
      role: "Sócia",
      image: "/images/mariana-santos.png",
      specialty: "Direito Trabalhista",
      description:
        "Especializada em Direito Trabalhista com ampla experiência na defesa de empregados e empregadores. Consultoria preventiva e atuação em ações trabalhistas de alta complexidade.",
      fullDescription:
        "Advogada trabalhista com 12 anos de experiência, atuando tanto na defesa de empregados quanto de empregadores. Especialista em negociações coletivas, reestruturações empresariais e questões sindicais. Mediadora certificada pelo CNJ, atua também em soluções alternativas de conflitos trabalhistas. Professora convidada em cursos de pós-graduação em Direito do Trabalho.",
      credentials: [
        "OAB/SP 234.567",
        "Especialista em Direito do Trabalho - PUC",
        "Mediadora Certificada CNJ",
        "Professora Convidada PUC-SP",
      ],
      email: "mariana.santos@lordperrout.com.br",
      linkedin: "https://linkedin.com/in/marianasantos",
    },
    {
      name: "Dr. Fernando Oliveira",
      role: "Advogado Associado",
      image: "/images/fernando-oliveira.png",
      specialty: "Direito Previdenciário",
      description:
        "Dedicado ao Direito Previdenciário, com foco em concessão e revisão de benefícios do INSS. Atuação humanizada e comprometida com os direitos dos segurados.",
      fullDescription:
        "Advogado especializado em Direito Previdenciário com 8 anos de experiência. Atua na concessão, manutenção e revisão de benefícios do INSS, incluindo aposentadorias, pensões e benefícios por incapacidade. Experiência em recursos administrativos e judiciais perante as Juntas de Recursos da Previdência Social e Justiça Federal. Membro da Associação dos Advogados Previdenciários.",
      credentials: [
        "OAB/SP 345.678",
        "Especialista em Direito Previdenciário",
        "Pós-graduado em Direito Público",
        "Membro AAP",
      ],
      email: "fernando.oliveira@lordperrout.com.br",
      linkedin: "https://linkedin.com/in/fernandooliveira",
    },
    {
      name: "Dra. Fernanda Perrout Elias",
      role: "Advogada Especialista",
      image: "/images/fernanda-perrout-elias.png",
      specialty: "Direito Penal e Direito Militar",
      description:
        "Advogada com 9 anos de experiência, reconhecida pela atuação estratégica e humanizada em Direito Penal e Direito Militar, com defesa técnica dedicada em momentos decisivos.",
      fullDescription:
        "Advogada com 9 anos de experiência, especialista em Direito Penal e Direito Militar. Atua com foco em defesa criminal, acompanhamento de inquéritos, ações penais, audiências, tribunais do júri e medidas cautelares, sempre com estratégia, sigilo e atenção individualizada. No Direito Militar, presta assistência em procedimentos administrativos, sindicâncias, conselhos de disciplina e processos perante a Justiça Militar. Membro da Comissão de Direito Penal e Direito Militar da OAB/RJ.",
      credentials: [
        "OAB/RJ 084.196",
        "Especialista em Direito Penal e Direito Militar",
        "Graduada em Direito - Mackenzie",
        "Membro da Comissão de Direito Penal e Direito Militar da OAB/RJ",
        "Membro CDC OAB/RJ",
      ],
      email: "fernanda.elias@lordperrout.com.br",
      linkedin: "https://linkedin.com/in/fernandaperroutelias",
    },
    {
      name: "Dra. Juliana Costa",
      role: "Advogada Associada",
      image: "/images/juliana-costa.png",
      specialty: "Direito do Consumidor e Civil",
      description:
        "Atuação em Direito do Consumidor e Direito Civil, com foco na defesa de direitos individuais. Experiência em ações indenizatórias e contratos.",
      fullDescription:
        "Advogada com 6 anos de experiência em Direito do Consumidor e Direito Civil. Especialista em ações contra empresas de telecomunicações, bancos, companhias aéreas e e-commerce. Atua em ações indenizatórias, revisão de contratos e defesa em cobranças indevidas. Membro da Comissão de Defesa do Consumidor da OAB/SP.",
      credentials: [
        "OAB/SP 456.789",
        "Especialista em Direito do Consumidor",
        "Graduada em Direito - Mackenzie",
        "Membro CDC OAB/SP",
      ],
      email: "juliana.costa@lordperrout.com.br",
      linkedin: "https://linkedin.com/in/julianacosta",
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
                  Nossa Equipe
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                  Profissionais experientes, especializados e comprometidos com a excelência na prestação de serviços
                  jurídicos.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="space-y-8">
              {team.map((member, index) => {
                const isExpanded = expandedMember === member.name
                return (
                  <AnimatedSection key={member.name} animation="fade-in-up" delay={index * 100}>
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="grid md:grid-cols-[300px_1fr]">
                        {/* Foto individual do integrante */}
                        <div className="bg-gradient-to-br from-primary/15 via-muted/50 to-primary/5 p-8">
                          <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="relative mb-4 aspect-square w-40 overflow-hidden rounded-full border-4 border-background bg-gradient-to-br from-muted/80 via-background to-primary/10 shadow-lg transition-transform duration-300 hover:scale-105">
                              <img
                                src={member.image}
                                alt={`Foto de ${member.name}`}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-foreground">{member.name}</h3>
                            <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-8">
                          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{member.specialty}</span>
                          </div>

                          <p className="mb-4 leading-relaxed text-muted-foreground">
                            {isExpanded ? member.fullDescription : member.description}
                          </p>

                          <button
                            onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                            className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
                          >
                            {isExpanded ? (
                              <>
                                Ver menos <ChevronUp className="ml-1 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Ver mais <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </button>

                          {/* Credentials */}
                          <div
                            className={cn(
                              "mb-6 overflow-hidden transition-all duration-300",
                              isExpanded ? "max-h-96 opacity-100" : "max-h-24",
                            )}
                          >
                            <div className="mb-3 flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-primary" />
                              <span className="text-sm font-semibold text-foreground">Credenciais</span>
                            </div>
                            <ul className="space-y-2">
                              {member.credentials.map((credential) => (
                                <li key={credential} className="flex items-start text-sm text-muted-foreground">
                                  <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                  {credential}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Contact */}
                          <div className="flex flex-wrap gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="transition-all hover:bg-primary hover:text-primary-foreground bg-transparent"
                            >
                              <a href={`mailto:${member.email}`} className="inline-flex items-center">
                                <Mail className="mr-2 h-4 w-4" />
                                E-mail
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="transition-all hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] bg-transparent"
                            >
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                              >
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="mb-12 text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  O Que Nos Une
                </h2>
                <p className="mt-4 text-lg text-pretty text-muted-foreground">
                  Princípios e valores compartilhados por toda nossa equipe
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Scale,
                  title: "Compromisso com a Excelência",
                  description: "Atualização constante e busca pela melhor solução técnica para cada caso.",
                },
                {
                  icon: GraduationCap,
                  title: "Especialização",
                  description:
                    "Profissionais com formação específica e experiência comprovada em suas áreas de atuação.",
                },
                {
                  icon: Briefcase,
                  title: "Dedicação ao Cliente",
                  description: "Atendimento personalizado e acompanhamento próximo em todas as etapas do processo.",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <AnimatedSection key={item.title} animation="scale-in" delay={index * 100}>
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
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
                Agende uma Consulta com Nossa Equipe
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
                Entre em contato conosco e conheça como podemos ajudar a resolver sua questão jurídica com
                profissionalismo e dedicação.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/contato">
                    Entrar em Contato
                    <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
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
