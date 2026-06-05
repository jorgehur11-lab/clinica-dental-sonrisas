"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TEAM, COPY, VALUES, STATS } from "@/lib/constants";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-dental-muted mb-6">
            {COPY.nosotrosLabel}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight max-w-3xl">
            {COPY.nosotrosH1Line1}
            <br />
            <span className="text-dental-accent">{COPY.nosotrosH1Line2}</span>
          </h1>
        </motion.div>

        {/* Filosofía + Compromiso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 border-t border-dental-border pt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
              {COPY.nosotrosPhilosophyTitle}
            </h2>
            <p className="text-sm font-light text-dental-muted leading-relaxed">
              {COPY.nosotrosPhilosophyText}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
              {COPY.nosotrosCommitmentTitle}
            </h2>
            <p className="text-sm font-light text-dental-muted leading-relaxed">
              {COPY.nosotrosCommitmentText}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="border-t border-dental-border pt-16 pb-16 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-display text-5xl font-light text-dental-accent">{stat.value}</p>
                <p className="mt-2 text-xs font-light text-dental-muted leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cómo trabajamos */}
        <div className="border-t border-dental-border pt-16 mb-24">
          <motion.h2
            className="font-display text-4xl font-light mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {COPY.nosotrosValuesTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="border-t border-dental-border pt-8"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-dental-muted block mb-4">
                  {v.number}
                </span>
                <h3 className="font-display text-3xl font-light text-dental-accent mb-3">
                  {v.title}
                </h3>
                <p className="text-sm font-light text-dental-muted leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="border-t border-dental-border pt-16 mb-24">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-light">{COPY.nosotrosTeamTitle}</h2>
            <p className="mt-3 text-sm font-light text-dental-muted max-w-lg">
              Cuatro especialistas formados en las mejores universidades de Latinoamérica,
              trabajando de forma coordinada en tu tratamiento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative w-28 h-36 shrink-0 overflow-hidden group/img">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover/img:grayscale-0 transition-all duration-700"
                    sizes="112px"
                  />
                  <div className="absolute inset-0 bg-[#2C4A3E] opacity-0 group-hover/img:opacity-10 transition-opacity duration-700" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light mb-0.5">{member.name}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-dental-accent mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm font-light text-dental-muted leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="space-y-1">
                    {member.credentials.map((c) => (
                      <p key={c} className="text-xs text-dental-muted font-light">— {c}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Acreditaciones */}
        <div className="border-t border-dental-border pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start justify-between gap-12"
          >
            <div className="flex-1">
              <h2 className="font-display text-3xl font-light mb-8">
                {COPY.nosotrosCredentialsTitle}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {COPY.nosotrosCredentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-light text-dental-muted">
                    <span className="text-dental-accent mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Link
                href="/contacto"
                className="border border-dental-accent text-dental-accent text-sm font-light tracking-[0.2em] uppercase px-8 py-4 hover:bg-dental-accent hover:text-dental-bg transition-all duration-400 block text-center"
              >
                {COPY.nosotrosCta}
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
