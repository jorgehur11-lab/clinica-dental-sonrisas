"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image: string;
  index: number;
}

export default function TeamCard({ name, role, bio, credentials, image, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "3/4" }}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-[#2C4A3E] opacity-0 hover:opacity-10 transition-opacity duration-700" />
      </div>
      <h3 className="font-display text-2xl font-light text-dental-text mb-1">{name}</h3>
      <p className="text-xs tracking-[0.15em] uppercase text-dental-accent mb-4">{role}</p>
      <p className="text-sm font-light text-dental-muted leading-relaxed mb-4">{bio}</p>
      <div className="border-t border-dental-border pt-4 space-y-1">
        {credentials.map((c) => (
          <p key={c} className="text-xs text-dental-muted font-light">— {c}</p>
        ))}
      </div>
    </motion.div>
  );
}
