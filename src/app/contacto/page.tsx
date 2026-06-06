"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { CONTACT, COPY, SERVICES } from "@/lib/constants";

export default function ContactoPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-6">
            {COPY.contactLabel}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight">
            {COPY.contactH1}
          </h1>
          <p className="mt-6 text-sm font-light text-dental-muted max-w-md leading-relaxed">
            Agenda por chat, WhatsApp o teléfono. Respondemos en menos de 2 horas en horario de atención.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-dental-border pt-16">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-3">
                {COPY.contactAddressLabel}
              </p>
              <p className="font-display text-2xl font-light">{CONTACT.city}</p>
              <p className="text-sm text-dental-muted font-light mt-1">{CONTACT.address}</p>
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs tracking-[0.2em] uppercase text-dental-accent border-b border-dental-accent pb-0.5 hover:opacity-70 transition-opacity"
              >
                Ver en Google Maps →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-3">
                  {COPY.contactPhoneLabel}
                </p>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="font-display text-xl font-light hover:text-dental-accent transition-colors duration-400 block"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-3">
                  {COPY.contactWhatsappLabel}
                </p>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl font-light hover:text-dental-accent transition-colors duration-400 block"
                >
                  {CONTACT.whatsapp}
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-3">
                {COPY.contactEmailLabel}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-display text-xl font-light hover:text-dental-accent transition-colors duration-400"
              >
                {CONTACT.email}
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-3">
                {COPY.contactHoursLabel}
              </p>
              <div className="space-y-2 text-sm font-light">
                {CONTACT.hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-dental-border pb-2 max-w-[240px]">
                    <span className="text-dental-text">{h.day}</span>
                    <span className="text-dental-muted">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dental-accent-light p-5">
              <p className="text-xs tracking-[0.25em] uppercase text-dental-accent mb-2">
                {COPY.contactEmergencyLabel}
              </p>
              <p className="text-sm font-light text-dental-text leading-relaxed">
                {CONTACT.emergency}
              </p>
            </div>

            {/* Servicios disponibles */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-4">
                Servicios disponibles
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <span
                    key={s.number}
                    className="text-xs font-light text-dental-muted border border-dental-border px-3 py-1"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-48 bg-dental-accent-light border border-dental-border flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-dental-muted mb-2">
                  Equipetrol Norte · Santa Cruz
                </p>
                <a
                  href={CONTACT.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-dental-accent border-b border-dental-accent pb-0.5"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contacto directo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-8 border border-dental-border">
              <p className="font-display text-2xl font-light mb-2">{COPY.contactChatLabel}</p>
              <p className="text-sm text-dental-muted font-light mb-6">{COPY.contactChatDesc}</p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-dental-accent animate-pulse" />
                <span className="text-xs tracking-[0.2em] uppercase text-dental-accent">
                  {COPY.chatbotBadge}
                </span>
              </div>
              <p className="text-xs text-dental-muted font-light mt-4">
                Haz clic en el botón verde en la esquina inferior derecha para chatear con Sara.
              </p>
            </div>

            <div className="p-6 border border-dental-border">
              <p className="text-xs tracking-[0.25em] uppercase text-dental-muted mb-3">
                También puedes escribirnos directamente
              </p>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm font-light text-dental-text hover:text-dental-accent transition-colors duration-400 group"
              >
                <span>WhatsApp: {CONTACT.whatsapp}</span>
                <span className="text-dental-accent group-hover:translate-x-1 transition-transform duration-400">→</span>
              </a>
              <div className="border-t border-dental-border mt-4 pt-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-between text-sm font-light text-dental-text hover:text-dental-accent transition-colors duration-400 group"
                >
                  <span>{CONTACT.email}</span>
                  <span className="text-dental-accent group-hover:translate-x-1 transition-transform duration-400">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
