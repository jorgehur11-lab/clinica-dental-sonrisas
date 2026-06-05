"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, FAQ, COPY } from "@/lib/constants";
import { CLINIC_IMAGES } from "@/lib/images";

const SERVICE_IMAGES: Record<string, string> = {
  "01": CLINIC_IMAGES.services.whitening,
  "02": CLINIC_IMAGES.services.orthodontics,
  "03": CLINIC_IMAGES.services.implants,
  "04": CLINIC_IMAGES.clinic.equipment,
  "05": CLINIC_IMAGES.clinic.chair,
  "06": CLINIC_IMAGES.clinic.interior,
};

export default function ServiciosPage() {
  const [openService, setOpenService] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-6">
            {COPY.servicesSubtitleLabel}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight">
            {COPY.servicesH1Line1}
            <br />
            <span className="text-dental-accent">{COPY.servicesH1Line2}</span>
          </h1>
          <p className="mt-6 text-sm font-light text-dental-muted leading-relaxed max-w-lg">
            Seis especialidades bajo un mismo techo, coordinadas por un equipo que ha atendido
            más de 3.000 pacientes en Bolivia. Sin derivaciones, sin traslados.
          </p>
        </motion.div>

        {/* Servicios accordion */}
        <div className="mb-24">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-dental-border"
            >
              <button
                onClick={() => setOpenService(openService === i ? null : i)}
                className="w-full flex items-center justify-between py-7 text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className="font-display text-sm text-dental-muted font-light w-8">
                    {service.number}
                  </span>
                  <div>
                    <span className="font-display text-2xl md:text-3xl font-light group-hover:text-dental-accent transition-colors duration-400 block">
                      {service.name}
                    </span>
                    <span className="text-xs text-dental-muted font-light tracking-wide mt-0.5 block">
                      {service.tagline}
                    </span>
                  </div>
                </div>
                <motion.span
                  className="text-dental-accent text-lg shrink-0 ml-4"
                  animate={{ rotate: openService === i ? 45 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openService === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-16 pr-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Imagen del servicio */}
                      <div className="relative h-52 md:h-full min-h-[200px] overflow-hidden">
                        <Image
                          src={SERVICE_IMAGES[service.number]}
                          alt={service.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-light text-dental-muted leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="flex gap-8 text-xs text-dental-muted">
                          <div>
                            <p className="uppercase tracking-widest mb-1">Duración</p>
                            <p className="text-dental-text font-light">{service.duration}</p>
                          </div>
                          <div>
                            <p className="uppercase tracking-widest mb-1">Frecuencia</p>
                            <p className="text-dental-text font-light">{service.frequency}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-dental-muted mb-4">
                          Qué incluye
                        </p>
                        <ul className="space-y-2">
                          {service.details.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm font-light text-dental-text">
                              <span className="text-dental-accent mt-0.5 shrink-0">—</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contacto"
                          className="inline-block mt-6 text-xs tracking-[0.2em] uppercase text-dental-accent border-b border-dental-accent pb-0.5 hover:opacity-70 transition-opacity"
                        >
                          {COPY.servicesCtaLink}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-4">
            {COPY.faqSubtitle}
          </p>
          <h2 className="font-display text-4xl font-light mb-12">{COPY.faqTitle}</h2>

          <div>
            {FAQ.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-dental-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-display text-xl font-light group-hover:text-dental-accent transition-colors duration-400 pr-8">
                    {item.question}
                  </span>
                  <motion.span
                    className="text-dental-accent text-lg shrink-0"
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-sm font-light text-dental-muted leading-relaxed max-w-2xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 bg-dental-accent-light flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-2xl font-light mb-2">{COPY.servicesCtaBoxTitle}</p>
            <p className="text-sm text-dental-muted font-light">{COPY.servicesCtaBoxDesc}</p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 border border-dental-accent text-dental-accent text-sm font-light tracking-[0.2em] uppercase px-6 py-3 hover:bg-dental-accent hover:text-dental-bg transition-all duration-400"
          >
            {COPY.servicesCtaBoxCta}
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
