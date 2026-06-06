"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES, STATS, COPY, VALUES, CONTACT, TEAM } from "@/lib/constants";
import { CLINIC_IMAGES } from "@/lib/images";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <>
      {/* ── HERO — split layout ── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left: texto */}
        <div className="flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 md:pt-0">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-8"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            {COPY.heroTagline}
          </motion.p>

          <motion.h1
            className="font-display font-light leading-[0.88] text-[clamp(64px,7vw,100px)] text-dental-text"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            {COPY.heroH1Line1}
            <br />
            <em className="not-italic text-dental-accent">{COPY.heroH1Line2}</em>
          </motion.h1>

          <motion.p
            className="mt-8 text-sm font-light text-dental-muted max-w-sm leading-relaxed"
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
          >
            Clínica de especialidades dentales en La Paz. Implantes, ortodoncia, blanqueamiento
            y más — con tecnología de primer nivel y sin dolor.
          </motion.p>

          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contacto"
              className="inline-block bg-dental-accent text-dental-bg text-sm font-light tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity duration-400 text-center"
            >
              {COPY.heroCtaPrimary}
            </Link>
            <Link
              href="/servicios"
              className="inline-block border border-dental-border text-dental-muted text-sm font-light tracking-[0.2em] uppercase px-8 py-4 hover:border-dental-accent hover:text-dental-accent transition-all duration-400 text-center"
            >
              Ver servicios
            </Link>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            custom={4} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-16 flex gap-10 border-t border-dental-border pt-8"
          >
            {STATS.slice(0, 3).map((s) => (
              <div key={s.value}>
                <p className="font-display text-3xl font-light text-dental-accent">{s.value}</p>
                <p className="text-[10px] tracking-wide text-dental-muted mt-1 leading-tight max-w-[80px]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: imagen placeholder */}
        <motion.div
          className="relative hidden md:flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Imagen hero */}
          <div className="flex-1 relative overflow-hidden">
            <Image
              src={CLINIC_IMAGES.hero}
              alt="Clínica Dental Sonrisa Perfecta"
              fill
              className="object-cover"
              priority
            />
            {/* Badge flotante */}
            <motion.div
              className="absolute top-16 right-8 bg-dental-bg p-5 max-w-[180px] z-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <div className="w-2 h-2 rounded-full bg-dental-accent animate-pulse mb-3" />
              <p className="font-display text-2xl font-light text-dental-accent leading-tight">15+</p>
              <p className="text-xs text-dental-muted font-light mt-1 leading-snug">
                años transformando sonrisas en Bolivia
              </p>
            </motion.div>
          </div>

          {/* Franja inferior de contacto */}
          <div className="bg-dental-text px-8 py-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-dental-muted mb-1">
                Emergencias
              </p>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="font-display text-xl font-light text-dental-bg hover:text-dental-accent transition-colors duration-400"
              >
                {CONTACT.phone}
              </a>
            </div>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase text-dental-muted border border-dental-muted px-4 py-2 hover:border-dental-accent hover:text-dental-accent transition-all duration-400"
            >
              WhatsApp →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── BARRA DE CONTACTO RÁPIDO (mobile) ── */}
      <div className="md:hidden bg-dental-text px-6 py-4 flex items-center justify-between">
        <a href={`tel:${CONTACT.phoneTel}`} className="font-display text-lg font-light text-dental-bg">
          {CONTACT.phone}
        </a>
        <a
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase text-dental-muted border border-dental-muted px-3 py-1.5"
        >
          WhatsApp
        </a>
      </div>

      {/* ── VALORES — 3 pilares ── */}
      <section className="px-6 md:px-12 py-20 border-t border-dental-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`px-8 py-10 ${i < 2 ? "md:border-r border-dental-border" : ""} ${i > 0 ? "border-t md:border-t-0 border-dental-border" : ""}`}
            >
              <span className="font-display text-5xl font-light text-dental-accent opacity-30 block mb-4">
                {v.number}
              </span>
              <h3 className="font-display text-3xl font-light text-dental-text mb-3">
                {v.title}
              </h3>
              <p className="text-sm font-light text-dental-muted leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── QUIÉNES SOMOS — split con imagen ── */}
      <section className="border-t border-dental-border grid grid-cols-1 md:grid-cols-2">
        {/* Imagen interior clínica */}
        <motion.div
          className="relative min-h-[400px] md:min-h-[560px] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={CLINIC_IMAGES.clinic.interior}
            alt="Interior Clínica Sonrisa Perfecta"
            fill
            className="object-cover"
          />
          {/* Stats flotantes sobre la imagen */}
          <div className="absolute bottom-8 left-8 space-y-4 z-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-baseline gap-3 bg-dental-bg bg-opacity-90 px-3 py-1"
              >
                <span className="font-display text-3xl font-light text-dental-accent">
                  {stat.value}
                </span>
                <span className="text-xs text-dental-muted font-light">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-16 py-16"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-6">
            La clínica
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
            Medicina dental
            <br />
            <span className="text-dental-accent">con propósito.</span>
          </h2>
          <p className="text-sm font-light text-dental-muted leading-relaxed mb-6">
            {COPY.nosotrosPhilosophyText}
          </p>
          <p className="text-sm font-light text-dental-muted leading-relaxed mb-10">
            {COPY.nosotrosCommitmentText}
          </p>
          <Link
            href="/nosotros"
            className="inline-block border border-dental-accent text-dental-accent text-sm font-light tracking-[0.2em] uppercase px-8 py-4 hover:bg-dental-accent hover:text-dental-bg transition-all duration-400 self-start"
          >
            Conocer el equipo →
          </Link>
        </motion.div>
      </section>

      {/* ── SERVICIOS — grid ── */}
      <section className="px-6 md:px-12 py-24 border-t border-dental-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-4">
                Especialidades
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light">
                Nuestros servicios
              </h2>
            </div>
            <Link
              href="/servicios"
              className="text-xs tracking-[0.2em] uppercase text-dental-accent border-b border-dental-accent pb-0.5 hover:opacity-70 transition-opacity self-start md:self-auto"
            >
              Ver detalle completo →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dental-border">
            {SERVICES.map((service, i) => (
              <div key={service.number} className="bg-dental-bg">
                <ServiceCard
                  number={service.number}
                  name={service.name}
                  tagline={service.tagline}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section className="px-6 md:px-12 py-24 border-t border-dental-border bg-dental-accent-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-4">
                Especialistas
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light">
                El equipo
              </h2>
            </div>
            <Link
              href="/nosotros"
              className="text-xs tracking-[0.2em] uppercase text-dental-accent border-b border-dental-accent pb-0.5 hover:opacity-70 transition-opacity self-start md:self-auto"
            >
              Conocer más →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                credentials={member.credentials}
                image={member.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="px-6 md:px-12 py-24 border-t border-dental-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-dental-muted text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {COPY.testimonialsLabel}
          </motion.p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-dental-border">
        <div className="bg-dental-accent px-8 md:px-16 py-20 flex flex-col justify-center">
          <motion.h2
            className="font-display text-5xl md:text-6xl font-light text-dental-bg leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {COPY.ctaFinalHeadline}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contacto"
              className="inline-block bg-dental-bg text-dental-accent text-sm font-light tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity duration-400 text-center"
            >
              {COPY.heroCtaFinal}
            </Link>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dental-bg text-dental-bg text-sm font-light tracking-[0.2em] uppercase px-8 py-4 hover:bg-dental-bg hover:text-dental-accent transition-all duration-400 text-center"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Panel de horarios */}
        <motion.div
          className="bg-dental-text px-8 md:px-16 py-20 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-8">
            Horario de atención
          </p>
          <div className="space-y-4">
            {CONTACT.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between border-b border-dental-muted border-opacity-20 pb-4">
                <span className="text-sm font-light text-dental-bg">{h.day}</span>
                <span className="font-display text-lg font-light text-dental-accent">{h.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-dental-muted pt-8">
            <p className="text-xs text-dental-muted font-light leading-relaxed">
              {CONTACT.emergency}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
