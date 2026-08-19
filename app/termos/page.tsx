import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso | LORD PERROUT ADVOCACIA",
  description: "Termos de uso do site LORD PERROUT ADVOCACIA",
}

export default function TermosPage() {
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

            <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">Termos de Uso</h1>

            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Última atualização: Janeiro de 2026</p>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">1. Aceitação dos Termos</h2>
                <p className="leading-relaxed">
                  Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar com qualquer
                  parte destes termos, não utilize o site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">2. Uso do Site</h2>
                <p className="leading-relaxed">Este site destina-se a:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Fornecer informações sobre o escritório e seus serviços</li>
                  <li>Possibilitar o contato com o escritório</li>
                  <li>Divulgar conteúdo jurídico informativo</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">3. Propriedade Intelectual</h2>
                <p className="leading-relaxed">
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é de propriedade do LORD
                  PERROUT ADVOCACIA e está protegido por direitos autorais.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">4. Limitação de Responsabilidade</h2>
                <p className="leading-relaxed">
                  As informações disponibilizadas neste site têm caráter meramente informativo e não constituem
                  consultoria jurídica. Para orientação específica sobre seu caso, consulte diretamente nossos
                  advogados.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">5. Links Externos</h2>
                <p className="leading-relaxed">
                  Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas
                  de privacidade desses sites.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">6. Alterações nos Termos</h2>
                <p className="leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em
                  vigor imediatamente após sua publicação no site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">7. Lei Aplicável</h2>
                <p className="leading-relaxed">
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">8. Contato</h2>
                <p className="leading-relaxed">
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
                  <br />
                  E-mail: contato@lordperrout.com.br
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
