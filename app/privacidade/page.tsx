import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | LORD PERROUT ADVOCACIA",
  description: "Política de privacidade e proteção de dados do LORD PERROUT ADVOCACIA",
}

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                ← Voltar para Home
              </Link>
            </div>

            <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">Política de Privacidade</h1>

            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Última atualização: Janeiro de 2026</p>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">1. Introdução</h2>
                <p className="leading-relaxed">
                  O LORD PERROUT ADVOCACIA está comprometido com a proteção da privacidade e dos dados pessoais de seus
                  clientes, parceiros e visitantes do site, em conformidade com a Lei Geral de Proteção de Dados (LGPD)
                  - Lei nº 13.709/2018.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">2. Dados Coletados</h2>
                <p className="leading-relaxed">Coletamos os seguintes tipos de dados pessoais:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Dados de identificação (nome, CPF/CNPJ, RG)</li>
                  <li>Dados de contato (e-mail, telefone, endereço)</li>
                  <li>Dados profissionais (quando relevantes para o caso jurídico)</li>
                  <li>Dados de navegação no site (cookies e logs de acesso)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">3. Finalidade do Tratamento</h2>
                <p className="leading-relaxed">Utilizamos seus dados pessoais para:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Prestação de serviços jurídicos contratados</li>
                  <li>Comunicação sobre o andamento de processos e casos</li>
                  <li>Cumprimento de obrigações legais e regulatórias</li>
                  <li>Envio de informações sobre nossos serviços (quando autorizado)</li>
                  <li>Melhoria da experiência de navegação no site</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">4. Compartilhamento de Dados</h2>
                <p className="leading-relaxed">
                  Seus dados podem ser compartilhados com terceiros apenas quando necessário para a prestação dos
                  serviços jurídicos, incluindo órgãos do Poder Judiciário, peritos, assistentes técnicos e outros
                  profissionais envolvidos no caso.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">5. Segurança dos Dados</h2>
                <p className="leading-relaxed">
                  Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não
                  autorizados, perda, destruição ou alteração indevida.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">6. Seus Direitos</h2>
                <p className="leading-relaxed">Você tem direito a:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                  <li>Revogar o consentimento</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">7. Contato</h2>
                <p className="leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato
                  conosco:
                </p>
                <p className="leading-relaxed">
                  E-mail: privacidade@lordperrout.com.br
                  <br />
                  Telefone: (11) 1234-5678
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
