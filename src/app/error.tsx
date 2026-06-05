"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: "#FAFAF8" }}>
      <p className="font-display text-5xl font-light mb-4" style={{ color: "#0D0D0D" }}>
        Algo salió mal
      </p>
      <p className="text-sm font-light mb-8" style={{ color: "#8A8A85" }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        className="text-sm font-light tracking-widest uppercase px-6 py-3"
        style={{ border: "1px solid #2C4A3E", color: "#2C4A3E" }}
      >
        Reintentar
      </button>
    </div>
  );
}
