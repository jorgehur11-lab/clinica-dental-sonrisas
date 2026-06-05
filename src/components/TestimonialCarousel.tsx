"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[180px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <p className="font-display text-2xl md:text-3xl font-light italic text-dental-text leading-relaxed">
            &ldquo;{TESTIMONIALS[index].quote}&rdquo;
          </p>
          <p className="mt-6 text-sm text-dental-muted tracking-widest uppercase">
            — {TESTIMONIALS[index].author}, {TESTIMONIALS[index].location}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 mt-10">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-6 h-[1px] transition-all duration-400 ${
              i === index ? "bg-dental-accent" : "bg-dental-border"
            }`}
            aria-label={`Testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
