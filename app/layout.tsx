import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: { default: "Lord Perrout Advocacia", template: "%s | Lord Perrout Advocacia" },
  description: "Advocacia estratégica, próxima e preparada para proteger o que importa.",
  keywords: ["advocacia", "direito civil", "direito trabalhista", "direito empresarial", "São Paulo"],
  authors: [{ name: "Lord Perrout Advocacia" }],
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
}

export const viewport: Viewport = { themeColor: "#0b1f33", colorScheme: "light", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
