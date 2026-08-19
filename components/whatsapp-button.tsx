"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    // Show initially after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const phoneNumber = "5511987654321"
  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta jurídica.")

  return (
    <>
      {/* Tooltip/Message Box */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-72 overflow-hidden rounded-lg border border-border bg-card shadow-xl transition-all duration-300",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <div className="bg-[#25D366] p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">LORD PERROUT</p>
                <p className="text-xs opacity-90">Responde em minutos</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-white/20"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 rounded-lg bg-muted p-3">
            <p className="text-sm text-foreground">
              Olá! Como podemos ajudá-lo? Clique abaixo para iniciar uma conversa pelo WhatsApp.
            </p>
          </div>
          <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA5A]">
            <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
              Iniciar Conversa
            </a>
          </Button>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        )}
        aria-label="Abrir WhatsApp"
      >
        <span className="relative">
          <MessageCircle
            className={cn(
              "h-7 w-7 transition-transform duration-300",
              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
            )}
          />
          <X
            className={cn(
              "absolute inset-0 h-7 w-7 transition-transform duration-300",
              isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
            )}
          />
        </span>
        {/* Pulse animation */}
        <span className="absolute -z-10 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      </button>
    </>
  )
}
