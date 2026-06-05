import Link from "next/link";
import { CONTACT, COPY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-dental-border py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-light tracking-wide text-dental-muted">
        <Link href="/" className="font-display text-lg font-light text-dental-text">
          Sonrisa Perfecta
        </Link>
        <div className="text-center">
          <p className="tracking-widest uppercase text-xs">{CONTACT.hoursShort}</p>
          <p className="text-xs mt-1">{CONTACT.hoursSat}</p>
        </div>
        <div className="text-center md:text-right">
          <p>{CONTACT.phone}</p>
          <p className="text-xs mt-1">{CONTACT.city}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-dental-border text-center text-xs text-dental-muted">
        © {new Date().getFullYear()} {COPY.footerCopyright}
      </div>
    </footer>
  );
}
