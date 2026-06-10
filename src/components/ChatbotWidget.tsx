"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHATBOT_STRINGS } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "";

let sessionId: string;
if (typeof crypto !== "undefined" && crypto.randomUUID) {
  sessionId = crypto.randomUUID();
} else {
  sessionId = Math.random().toString(36).slice(2);
}

function deepFindString(obj: unknown): string {
  if (typeof obj === "string" && obj.trim().length > 2) return obj;
  if (Array.isArray(obj)) {
    for (const item of obj) {
      const found = deepFindString(item);
      if (found) return found;
    }
  }
  if (typeof obj === "object" && obj !== null) {
    const priority = ["output", "text", "reply", "message", "response", "answer", "content"];
    const d = obj as Record<string, unknown>;
    for (const key of priority) {
      if (typeof d[key] === "string" && (d[key] as string).trim().length > 2) {
        return d[key] as string;
      }
    }
    for (const val of Object.values(d)) {
      const found = deepFindString(val);
      if (found) return found;
    }
  }
  return "";
}

function parseN8nResponse(data: unknown): string {
  const raw = deepFindString(data);
  return raw.replace(/<CITA_CONFIRMADA>[\s\S]*?<\/CITA_CONFIRMADA>/gi, "").trim();
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: CHATBOT_STRINGS.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("sara:open", handler);
    return () => window.removeEventListener("sara:open", handler);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      if (!WEBHOOK_URL) {
        await new Promise((r) => setTimeout(r, 1200));
        setMessages((prev) => [...prev, { role: "assistant", content: CHATBOT_STRINGS.mockReply }]);
      } else {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatInput: userMessage.content,
            sessionId,
          }),
        });
        const data = await res.json();
        const reply = parseN8nResponse(data) || "Entendido. ¿Algo más en lo que pueda ayudarte?";
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: CHATBOT_STRINGS.errorReply },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

      {/* Panel de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[340px] sm:w-[380px] flex flex-col border border-dental-border bg-[#FAFAF8] shadow-2xl"
            style={{ height: 480 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-dental-border shrink-0">
              <div className="w-2 h-2 rounded-full bg-dental-accent animate-pulse" />
              <span className="text-sm font-light tracking-wide text-dental-text flex-1">
                {CHATBOT_STRINGS.headerLabel}
              </span>
              <span className="text-xs tracking-widest uppercase px-2 py-0.5 border border-dental-border text-dental-muted">
                24/7
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 text-dental-muted hover:text-dental-text transition-colors"
                aria-label="Cerrar chat"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-3 text-sm font-light leading-relaxed ${
                      msg.role === "user"
                        ? "bg-dental-accent text-dental-bg"
                        : "bg-dental-accent-light text-dental-text border border-dental-border"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-dental-accent-light border border-dental-border px-4 py-3 flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-dental-accent"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-dental-border flex shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={CHATBOT_STRINGS.inputPlaceholder}
                className="flex-1 bg-transparent px-5 py-4 text-sm font-light text-dental-text placeholder:text-dental-muted outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="px-5 text-sm font-light text-dental-accent border-l border-dental-border hover:bg-dental-accent-light transition-colors duration-300 disabled:opacity-40"
              >
                {CHATBOT_STRINGS.sendLabel}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 rounded-full bg-dental-accent text-[#FAFAF8] flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con Sara"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 22 22" fill="none"
            >
              <path d="M17 5L5 17M5 5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none"
            >
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
