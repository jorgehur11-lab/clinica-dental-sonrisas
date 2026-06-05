import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: "#FAFAF8" }}>
      <p className="font-display text-5xl font-light mb-4" style={{ color: "#0D0D0D" }}>
        Página no encontrada
      </p>
      <Link
        href="/"
        className="text-sm font-light tracking-widest uppercase"
        style={{ color: "#2C4A3E", borderBottom: "1px solid #2C4A3E" }}
      >
        Volver al inicio →
      </Link>
    </div>
  );
}
