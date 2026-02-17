import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoPaperPlaneOutline, IoPersonCircle, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const BOT_REPLIES = {
  rental:
    "Terima kasih atas minat Anda! Untuk rental equipment (articulated dump truck, loader, excavator, dll.) silakan kunjungi halaman Rent atau hubungi kami untuk penawaran khusus.",
  spare:
    "Untuk spare part dan layanan perawatan alat berat, Anda dapat mengunjungi halaman Service atau menghubungi tim kami. Kami siap membantu kebutuhan parts dan maintenance Anda.",
  contact:
    "Anda dapat menghubungi kami melalui email atau telepon. Tim customer service kami siap melayani pada jam kerja. Terima kasih!",
  hubungi:
    "Anda dapat menghubungi kami melalui email atau telepon. Tim customer service kami siap melayani pada jam kerja. Terima kasih!",
  default:
    "Thank you for reaching out to Lutfiandra Pohan. I am F.R.I.D.A.Y, Lutfiandra's assistant. If you do not receive a response within the expected time, please contact Lutfiandra directly at lutfiandrapohann@gmail.com",
};

const EMAIL = "lutfiandrapohann@gmail.com";

function renderBotMessage(text) {
  if (!text.includes(EMAIL)) {
    return <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>;
  }
  const [before, after] = text.split(EMAIL);
  return (
    <p className="text-sm leading-relaxed whitespace-pre-wrap">
      {before}
      <span className="inline-flex items-center gap-1">
        {EMAIL}
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Open Gmail to send email"
        >
          <IoArrowForward className="w-4 h-4" />
        </a>
      </span>
      {after}
    </p>
  );
}

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi There! do u intrested in collaborate?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInputValue("");
    const key = trimmed.toLowerCase().replace(/\s+/g, " ");
    const replyKey =
      Object.keys(BOT_REPLIES).find((k) => key.includes(k)) || "default";
    const botText = BOT_REPLIES[replyKey] || BOT_REPLIES.default;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black/80 overflow-hidden px-6 z-10"
    >
      {/* 📨 Contact Card with Smooth Transition */}
      <motion.div
        className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full shadow-lg text-center border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-3">Let's Collaborate!</h2>
        <p className="text-gray-300 text-sm mb-6">
          Get in touch via chatbot or social media below. Let's have a conversation!
        </p>

        {/* Chatbot */}
        <motion.div
          className="mb-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col min-h-[320px] max-h-[420px]">
            <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
              <IoPersonCircle className="w-10 h-10 text-blue-500 shrink-0" aria-hidden />
              <div className="min-w-0">
                <p className="font-semibold text-white truncate">F.R.I.D.A.Y Lutfiandra's Assistant</p>
                <p className="text-xs text-gray-400 mt-0.5">Ask for Collaborate!</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col">
              {messages.length <= 1 ? (
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 min-h-[200px]">
                  <p className="text-gray-400 text-sm text-center">
                    Write your message to F.R.I.D.A.Y
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          msg.role === "bot"
                            ? "bg-white/10 text-gray-100 rounded-bl-md"
                            : "bg-blue-600 text-white rounded-br-md"
                        }`}
                      >
                        {msg.role === "bot"
                          ? renderBotMessage(msg.text)
                          : (
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                              {msg.text}
                            </p>
                          )}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              )}
            </div>
            <div className="shrink-0 p-3 border-t border-white/10">
              <div className="flex gap-2 rounded-xl border border-white/20 bg-white/5 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && sendMessage(inputValue)
                  }
                  placeholder="Enter your message"
                  className="flex-1 rounded-l-xl bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => sendMessage(inputValue)}
                  className="shrink-0 rounded-r-xl p-2 text-gray-300 hover:text-blue-400 transition-colors disabled:opacity-50"
                  aria-label="Kirim"
                >
                  <IoPaperPlaneOutline className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🌐 Social Links Badge */}
        <motion.div
          className="flex justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 text-lg transition-colors flex items-center gap-2"
          >
            <FaLinkedin /> <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/lutfiandrra/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 text-lg transition-colors flex items-center gap-2"
          >
            <FaInstagram /> <span className="text-xs">Instagram</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;