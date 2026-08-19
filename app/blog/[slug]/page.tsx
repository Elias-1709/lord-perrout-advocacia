import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artigo | LORD PERROUT ADVOCACIA",
  description: "Leia artigos jurídicos especializados do LORD PERROUT ADVOCACIA",
}

export default function BlogArticlePage() {
  const article = {
    title: "Direitos Trabalhistas na Rescisão: O Que Você Precisa Saber",
    category: "Direito Trabalhista",
    author: "Dra. Mariana Santos",
    date: "15 de Janeiro de 2026",
    readTime: "8 min",
    content: [
      {
        type: "paragraph",
        text: "A rescisão do contrato de trabalho é um momento delicado tanto para empregados quanto para empregadores. É fundamental conhecer seus direitos para garantir que o processo ocorra de forma justa e legal.",
      },
      {
        type: "heading",
        text: "Tipos de Rescisão",
      },
      {
        type: "paragraph",
        text: "Existem diferentes tipos de rescisão contratual, cada uma com suas particularidades e direitos específicos:",
      },
      {
        type: "list",
        items: [
          "Demissão sem justa causa: O empregador encerra o contrato sem que o empregado tenha cometido falta grave.",
          "Demissão com justa causa: Rescisão motivada por falta grave do empregado prevista em lei.",
          "Pedido de demissão: Quando o próprio empregado solicita o encerramento do contrato.",
          "Rescisão indireta: Quando o empregado rescinde o contrato por falta grave do empregador.",
        ],
      },
      {
        type: "heading",
        text: "Verbas Rescisórias na Demissão Sem Justa Causa",
      },
      {
        type: "paragraph",
        text: "Na demissão sem justa causa, o empregado tem direito a receber diversas verbas rescisórias:",
      },
      {
        type: "list",
        items: [
          "Saldo de salário pelos dias trabalhados no mês da rescisão",
          "Aviso prévio (trabalhado ou indenizado)",
          "Férias vencidas e proporcionais com acréscimo de 1/3",
          "13º salário proporcional",
          "Multa de 40% sobre o FGTS",
          "Saque do FGTS",
          "Seguro-desemprego (se preencher os requisitos)",
        ],
      },
      {
        type: "heading",
        text: "Prazo para Pagamento",
      },
      {
        type: "paragraph",
        text: "O empregador deve pagar as verbas rescisórias em até 10 dias corridos a partir do término do contrato. O atraso pode resultar em multa equivalente a um salário do empregado.",
      },
      {
        type: "heading",
        text: "Quando Procurar um Advogado?",
      },
      {
        type: "paragraph",
        text: "É recomendável buscar orientação jurídica sempre que houver dúvidas sobre o cálculo das verbas rescisórias, quando houver discordância sobre o tipo de rescisão, ou se o empregador não cumprir com suas obrigações legais.",
      },
      {
        type: "paragraph",
        text: "Advogada especializada com ampla experiência em {article.category}. Atua no LORD PERROUT ADVOCACIA oferecendo consultoria e defesa jurídica de excelência.",
      },
    ],
  }

  const relatedArticles = [
    {
      id: "reforma-trabalhista-mudancas",
      title: "Reforma Trabalhista: Principais Mudanças e Impactos",
      category: "Direito Trabalhista",
    },
    {
      id: "direitos-trabalhistas-home-office",
      title: "Direitos Trabalhistas no Home Office",
      category: "Direito Trabalhista",
    },
    {
      id: "horas-extras-como-calcular",
      title: "Horas Extras: Como Calcular Corretamente",
      category: "Direito Trabalhista",
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Article Header */}
        <article className="bg-background py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Voltar para Artigos
              </Link>
            </div>

            <div className="mb-6">
              <Badge variant="secondary">{article.category}</Badge>
            </div>

            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>

            <div className="mb-8 flex gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>

            <div className="prose prose-slate max-w-none">
              {article.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {block.text}
                    </p>
                  )
                }
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="mb-4 mt-8 font-serif text-2xl font-bold text-foreground">
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === "list") {
                  return (
                    <ul key={index} className="mb-6 space-y-2">
                      {block.items?.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-base leading-relaxed text-muted-foreground"
                        >
                          <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return null
              })}
            </div>

            {/* Author Info */}
            <div className="mt-12 border-t border-border pt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">{article.author}</h3>
                      <p className="mb-3 text-sm text-muted-foreground">Especialista em {article.category}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Advogada especializada com ampla experiência em {article.category}. Atua no LORD PERROUT
                        ADVOCACIA oferecendo consultoria e defesa jurídica de excelência.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">Artigos Relacionados</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <Card key={related.id} className="transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {related.category}
                    </Badge>
                    <h3 className="font-serif text-base font-semibold leading-tight text-foreground">
                      <Link href={`/blog/${related.id}`} className="hover:text-primary">
                        {related.title}
                      </Link>
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/90">
              Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica.
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
