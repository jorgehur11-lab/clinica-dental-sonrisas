"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHATBOT_STRINGS } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: CHATBOT_STRINGS.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
          body: JSON.stringify({ message: userMessage.content, history: messages }),
        });
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply || data.message || "Entendido. ¿Algo más?" },
        ]);
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
    <div className="flex flex-col border border-dental-border bg-dental-bg" style={{ height: 420 }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-dental-border">
        <div className="w-2 h-2 rounded-full bg-dental-accent animate-pulse" />
        <span className="text-sm font-light tracking-wide text-dental-text">
          {CHATBOT_STRINGS.headerLabel}
        </span>
        <span className="ml-auto text-xs tracking-widest uppercase px-2 py-0.5 border border-dental-border text-dental-muted">
          {/* "24/7" badge — hard-coded is intentional, it's a UI label not editorial copy */}
          24/7
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 text-sm font-light leading-relaxed ${
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
      <div className="border-t border-dental-border flex">
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
          className="px-6 text-sm font-light text-dental-accent border-l border-dental-border hover:bg-dental-accent-light transition-colors duration-400 disabled:opacity-40"
        >
          {CHATBOT_STRINGS.sendLabel}
        </button>
      </div>
    </div>
  );
}
