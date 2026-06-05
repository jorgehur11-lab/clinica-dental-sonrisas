"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceRowProps {
  number: string;
  name: string;
  description: string;
  index: number;
}

export default function ServiceRow({ number, name, description, index }: ServiceRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group flex items-center justify-between gap-6 py-6 cursor-default overflow-hidden border-b border-dental-border"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-8 flex-1 min-w-0">
        <span className="font-display text-sm font-light w-8 shrink-0 text-dental-muted">
          {number}
        </span>
        <span
          className={`font-display text-2xl md:text-3xl font-light transition-colors duration-400 ${
            hovered ? "text-dental-accent" : "text-dental-text"
          }`}
        >
          {name}
        </span>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.p
            className="text-sm font-light text-dental-muted max-w-xs text-right shrink-0 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.span
        className="text-sm shrink-0 text-dental-accent"
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.4 }}
      >
        →
      </motion.span>
    </motion.div>
  );
}
