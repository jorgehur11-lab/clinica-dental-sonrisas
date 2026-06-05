"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  number: string;
  name: string;
  tagline: string;
  index: number;
}

export default function ServiceCard({ number, name, tagline, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group border border-dental-border p-8 flex flex-col justify-between min-h-[200px] hover:border-dental-accent hover:bg-dental-accent-light transition-all duration-400 cursor-default"
    >
      <div>
        <span className="font-display text-sm text-dental-muted font-light">{number}</span>
        <h3 className="font-display text-2xl font-light text-dental-text mt-4 mb-3 group-hover:text-dental-accent transition-colors duration-400">
          {name}
        </h3>
        <p className="text-xs font-light text-dental-muted leading-relaxed">{tagline}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link
          href="/servicios"
          className="text-xs tracking-[0.2em] uppercase text-dental-accent border-b border-dental-accent pb-0.5 hover:opacity-70 transition-opacity"
        >
          Ver más
        </Link>
        <motion.span
          className="text-dental-accent text-sm"
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.4 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
}
