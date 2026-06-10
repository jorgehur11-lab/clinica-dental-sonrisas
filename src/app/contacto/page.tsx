"use client";

import { motion } from "framer-motion";
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
            Sara, nuestra asistente virtual, está disponible las 24 horas para agendar tu cita al instante.
          </p>
        </motion.div>

        {/* Sara card — protagonista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-16 border border-dental-accent p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-dental-accent animate-pulse" />
              <span className="text-xs tracking-[0.3em] uppercase text-dental-accent">
                En línea ahora · {COPY.chatbotBadge}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
              Agenda con Sara
            </h2>
            <p className="text-sm font-light text-dental-muted leading-relaxed mb-8">
              {COPY.contactChatDesc}
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event("sara:open"))}
              className="inline-block bg-dental-accent text-dental-bg text-sm font-light tracking-[0.2em] uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-400"
            >
              Iniciar chat con Sara →
            </button>
          </div>
          <div className="space-y-4">
            {[
              "Verifica disponibilidad en tiempo real",
              "Agenda directamente en nuestro calendario",
              "Sin esperas, sin llamadas, sin formularios",
              "Responde en segundos, a cualquier hora",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="font-display text-dental-accent text-lg font-light leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-light text-dental-muted leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-dental-border pt-16">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
              <button
                onClick={() => window.dispatchEvent(new Event("sara:open"))}
                className="mt-4 text-xs tracking-[0.2em] uppercase text-dental-accent border-b border-dental-accent pb-0.5 hover:opacity-70 transition-opacity"
              >
                Abrir chat con Sara →
              </button>
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

          {/* Panel FAQ rápido */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-8">
              Preguntas frecuentes
            </p>
            {[
              {
                q: "¿Cuánto tarda Sara en responder?",
                a: "Sara responde al instante, los 7 días de la semana, las 24 horas. No hay esperas.",
              },
              {
                q: "¿Puedo cancelar o cambiar mi cita por el chat?",
                a: "Sí. Escríbele a Sara con tu nombre y la fecha de tu cita y te ayuda a gestionar el cambio o cancelación.",
              },
              {
                q: "¿La consulta de evaluación tiene costo?",
                a: "Es gratuita para la mayoría de los tratamientos. Agenda con Sara y te confirma los detalles.",
              },
              {
                q: "¿Atienden emergencias el mismo día?",
                a: "Sí. Escribile a Sara indicando que es una emergencia y te asignamos el primer turno disponible.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="border-b border-dental-border pb-6"
              >
                <p className="text-sm font-light text-dental-text mb-2">{item.q}</p>
                <p className="text-xs font-light text-dental-muted leading-relaxed">{item.a}</p>
              </motion.div>
            ))}

            <div className="pt-4">
              <button
                onClick={() => window.dispatchEvent(new Event("sara:open"))}
                className="w-full py-4 border border-dental-accent text-dental-accent text-sm font-light tracking-[0.2em] uppercase hover:bg-dental-accent hover:text-dental-bg transition-all duration-400"
              >
                Chatear con Sara ahora
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
