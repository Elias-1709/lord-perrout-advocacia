"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Search, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const articles = [
  {
    id: "direitos-trabalhistas-rescisao",
    title: "Direitos Trabalhistas na Rescisão: O Que Você Precisa Saber",
    excerpt:
      "Entenda quais são seus direitos no momento da rescisão contratual e como garantir o recebimento correto de todas as verbas rescisórias.",
    category: "Direito Trabalhista",
    author: "Dra. Mariana Santos",
    date: "15 de Janeiro de 2026",
    readTime: "8 min",
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário: Por Que Começar Agora?",
    excerpt:
      "Descubra a importância de planejar sua aposentadoria com antecedência e como maximizar o valor do seu benefício futuro.",
    category: "Direito Previdenciário",
    author: "Dr. Fernando Oliveira",
    date: "10 de Janeiro de 2026",
    readTime: "6 min",
  },
  {
    id: "contratos-empresariais",
    title: "Contratos Empresariais: Cláusulas Essenciais Para Proteger Seu Negócio",
    excerpt:
      "Conheça as cláusulas fundamentais que não podem faltar em contratos comerciais e como elas protegem sua empresa.",
    category: "Direito Empresarial",
    author: "Dr. Ricardo Carmo",
    date: "5 de Janeiro de 2026",
    readTime: "10 min",
  },
  {
    id: "direito-consumidor-compras-online",
    title: "Seus Direitos nas Compras Online: Guia Completo",
    excerpt:
      "Saiba como o Código de Defesa do Consumidor protege suas compras pela internet e o que fazer em caso de problemas.",
    category: "Direito do Consumidor",
    author: "Dra. Juliana Costa",
    date: "28 de Dezembro de 2025",
    readTime: "7 min",
  },
  {
    id: "reforma-trabalhista-mudancas",
    title: "Reforma Trabalhista: Principais Mudanças e Impactos",
    excerpt:
      "Análise detalhada das principais alterações na legislação trabalhista e como elas afetam empregados e empregadores.",
    category: "Direito Trabalhista",
    author: "Dra. Mariana Santos",
    date: "20 de Dezembro de 2025",
    readTime: "12 min",
  },
  {
    id: "usucapiao-urbano",
    title: "Usucapião Urbano: Como Regularizar Seu Imóvel",
    excerpt:
      "Entenda o processo de usucapião urbano e os requisitos necessários para adquirir a propriedade de um imóvel.",
    category: "Direito Civil",
    author: "Dr. Ricardo Carmo",
    date: "15 de Dezembro de 2025",
    readTime: "9 min",
  },
]

const categories = [
  "Todos",
  "Direito Civil",
  "Direito Trabalhista",
  "Direito Empresarial",
  "Direito Previdenciário",
  "Direito do Consumidor",
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return

    setIsSubscribing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubscribing(false)
    setSubscribed(true)
    setEmail("")
  }

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
                  Artigos Jurídicos
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                  Conteúdo especializado e informações relevantes sobre direito para manter você sempre bem informado.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="border-b border-border bg-background py-8">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              {/* Search Bar */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label="Limpar busca"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer px-4 py-2 text-sm transition-all",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "hover:bg-muted",
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Results count */}
              <p className="mt-4 text-center text-sm text-muted-foreground">
                {filteredArticles.length} artigo{filteredArticles.length !== 1 ? "s" : ""} encontrado
                {filteredArticles.length !== 1 ? "s" : ""}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            {filteredArticles.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article, index) => (
                  <AnimatedSection key={article.id} animation="fade-in-up" delay={index * 100}>
                    <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                      <CardContent className="flex flex-1 flex-col p-6">
                        <div className="mb-4">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                        </div>

                        <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-balance text-foreground transition-colors group-hover:text-primary">
                          <Link href={`/blog/${article.id}`}>{article.title}</Link>
                        </h3>

                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>

                        <div className="mt-auto space-y-3 border-t border-border pt-4">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{article.date}</span>
                            </div>

                            <Link
                              href={`/blog/${article.id}`}
                              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:underline"
                            >
                              Ler mais
                              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection animation="fade-in">
                <div className="py-16 text-center">
                  <p className="text-lg text-muted-foreground">Nenhum artigo encontrado para sua busca.</p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("Todos")
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
                Receba Nossos Artigos
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Cadastre-se para receber em seu e-mail nossos artigos jurídicos e conteúdos exclusivos.
              </p>

              {subscribed ? (
                <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-50 px-6 py-4 text-green-800">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Inscrição realizada com sucesso!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full sm:max-w-xs"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubscribing}>
                    {isSubscribing ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
