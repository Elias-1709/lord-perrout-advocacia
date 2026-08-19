"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 240); window.addEventListener("scroll", onScroll); const timer = setTimeout(() => setVisible(true), 1600); return () => { window.removeEventListener("scroll", onScroll); clearTimeout(timer) } }, [])
  const href = `https://wa.me/5511987654321?text=${encodeURIComponent("Olá! Gostaria de conversar sobre uma questão jurídica.")}`
  return <><div className={cn("fixed bottom-24 right-5 z-50 w-[min(19rem,calc(100vw-2.5rem))] origin-bottom-right border border-border bg-card p-5 shadow-2xl transition-all duration-300", open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0")}><div className="flex items-start justify-between gap-4"><div><p className="font-semibold text-foreground">Fale com a Lord Perrout</p><p className="mt-1 text-sm leading-5 text-muted-foreground">Conte brevemente o que você precisa. Nossa equipe responde em minutos.</p></div><button onClick={() => setOpen(false)} aria-label="Fechar mensagem" className="text-muted-foreground hover:text-foreground"><X /></button></div><Button asChild className="mt-5 w-full"><a href={href} target="_blank" rel="noreferrer">Abrir WhatsApp</a></Button></div><button onClick={() => setOpen(!open)} aria-label={open ? "Fechar WhatsApp" : "Abrir WhatsApp"} aria-expanded={open} className={cn("fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-105", visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0")}><span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25" />{open ? <X /> : <MessageCircle />}</button></>
}
