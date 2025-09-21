import React, { useState } from "react";

const botResponses = {
  "halo": "Halo! Ada yang bisa kami bantu?",
  "materi": "Silakan pilih materi yang ingin Anda pelajari di menu sebelah kiri.",
  "analisis": "Anda dapat menggunakan fitur analisis statistik di menu 'Alat Analisis Statistik'.",
  "terima kasih": "Sama-sama! Jangan ragu untuk bertanya lagi.",
  "default": "Maaf, saya belum mengerti. Bisa ulangi dengan kata lain?"
};

export default function ChatHotline() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa kami bantu?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg = input.trim().toLowerCase();
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      let response = botResponses.default;
      for (const key in botResponses) {
        if (userMsg.includes(key)) {
          response = botResponses[key];
          break;
        }
      }
      setMessages((msgs) => [...msgs, { from: "bot", text: response }]);
    }, 1000);
  }

  return (
    <div className="chat-hotline">
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat-message ${m.from}`}>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
}