"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    area: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    } else if (!/^$$\d{2}$$\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Formato: (11) 98765-4321"
    }

    if (!formData.area) {
      newErrors.area = "Selecione uma área"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Mensagem deve ter pelo menos 20 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim()
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", area: "", message: "" })
      setSubmitStatus("idle")
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === "phone") {
      formattedValue = formatPhone(value)
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const practiceAreas = [
    "Direito Civil",
    "Direito Trabalhista",
    "Direito Empresarial",
    "Direito Previdenciário",
    "Direito do Consumidor",
    "Direito Imobiliário",
    "Direito Tributário",
    "Outro",
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
                  Entre em Contato
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                  Estamos prontos para atendê-lo. Entre em contato conosco e agende uma consulta para discutir sua
                  questão jurídica.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              {/* Contact Information */}
              <div className="space-y-8">
                <AnimatedSection animation="fade-in-up">
                  <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Informações de Contato</h2>
                </AnimatedSection>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Telefone",
                      content: ["(11) 1234-5678", "(11) 98765-4321"],
                      href: "tel:+551112345678",
                    },
                    {
                      icon: Mail,
                      title: "E-mail",
                      content: ["contato@lordperrout.com.br", "atendimento@lordperrout.com.br"],
                      href: "mailto:contato@lordperrout.com.br",
                    },
                    {
                      icon: MapPin,
                      title: "Endereço",
                      content: ["Av. Paulista, 1000 - Conj. 1501", "Bela Vista - São Paulo, SP", "CEP: 01310-100"],
                      href: "https://maps.google.com/?q=Av.+Paulista,+1000+-+São+Paulo,+SP",
                    },
                    {
                      icon: Clock,
                      title: "Horário de Atendimento",
                      content: ["Segunda a Sexta: 9h às 18h", "Sábado: 9h às 13h"],
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <AnimatedSection key={item.title} animation="slide-in-right" delay={index * 100}>
                        <Card className="transition-all duration-300 hover:shadow-md">
                          <CardContent className="flex items-start gap-4 p-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                              {item.content.map((line, i) =>
                                item.href ? (
                                  <a
                                    key={i}
                                    href={item.href}
                                    className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                  >
                                    {line}
                                  </a>
                                ) : (
                                  <p key={i} className="text-sm text-muted-foreground">
                                    {line}
                                  </p>
                                ),
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    )
                  })}
                </div>

                {/* WhatsApp CTA */}
                <AnimatedSection animation="scale-in" delay={400}>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10">
                          <MessageCircle className="h-8 w-8 text-[#25D366]" />
                        </div>
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">Atendimento via WhatsApp</h3>
                      <p className="mb-4 text-sm text-muted-foreground">Fale conosco agora mesmo pelo WhatsApp</p>
                      <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA5A]">
                        <a
                          href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Iniciar Conversa
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <AnimatedSection animation="fade-in-up" delay={200}>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Envie sua Mensagem</h2>

                    {/* Success Message */}
                    {submitStatus === "success" && (
                      <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <div>
                          <p className="font-medium">Mensagem enviada com sucesso!</p>
                          <p className="text-sm">Entraremos em contato em breve.</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleChange}
                            className={cn(errors.name && "border-destructive focus-visible:ring-destructive")}
                            disabled={isSubmitting}
                          />
                          {errors.name && (
                            <p className="flex items-center gap-1 text-xs text-destructive">
                              <AlertCircle className="h-3 w-3" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
                            disabled={isSubmitting}
                          />
                          {errors.email && (
                            <p className="flex items-center gap-1 text-xs text-destructive">
                              <AlertCircle className="h-3 w-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(11) 98765-4321"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={15}
                            className={cn(errors.phone && "border-destructive focus-visible:ring-destructive")}
                            disabled={isSubmitting}
                          />
                          {errors.phone && (
                            <p className="flex items-center gap-1 text-xs text-destructive">
                              <AlertCircle className="h-3 w-3" />
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="area">Área de Interesse *</Label>
                          <Select
                            value={formData.area}
                            onValueChange={(value) => {
                              setFormData((prev) => ({ ...prev, area: value }))
                              if (errors.area) setErrors((prev) => ({ ...prev, area: "" }))
                            }}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger className={cn(errors.area && "border-destructive focus:ring-destructive")}>
                              <SelectValue placeholder="Selecione a área" />
                            </SelectTrigger>
                            <SelectContent>
                              {practiceAreas.map((area) => (
                                <SelectItem key={area} value={area}>
                                  {area}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.area && (
                            <p className="flex items-center gap-1 text-xs text-destructive">
                              <AlertCircle className="h-3 w-3" />
                              {errors.area}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto (opcional)</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Qual o assunto?"
                          value={formData.subject}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Descreva sua questão jurídica ou dúvida..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className={cn(errors.message && "border-destructive focus-visible:ring-destructive")}
                          disabled={isSubmitting}
                        />
                        <div className="flex items-center justify-between">
                          {errors.message && (
                            <p className="flex items-center gap-1 text-xs text-destructive">
                              <AlertCircle className="h-3 w-3" />
                              {errors.message}
                            </p>
                          )}
                          <span className="ml-auto text-xs text-muted-foreground">
                            {formData.message.length}/500 caracteres
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        * Campos obrigatórios. Seus dados serão tratados de acordo com nossa{" "}
                        <Link href="/privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </Link>
                        .
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          "Enviar Mensagem"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-bold text-foreground">Nossa Localização</h2>
                <p className="mt-3 text-lg text-muted-foreground">Visite nosso escritório na Av. Paulista</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="overflow-hidden rounded-lg border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975932828647!2d-46.65682708502207!3d-23.561413484682434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1642534729857!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do LORD PERROUT ADVOCACIA"
                  className="w-full"
                />
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
