import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MaterialSession from "./components/MaterialSession";
import AnalysisTools from "./components/AnalysisTools";
import ChatHotline from "./components/ChatHotline";
import ChartExample from "./components/ChartExample";
import Quiz from "./components/Quiz";
import materials from "./data/materials";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar materials={materials} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Navigate to="/materi/1" />} />
              <Route path="/materi/:id" element={<MaterialSession materials={materials} />} />
              <Route path="/analisis" element={<AnalysisTools />} />
              <Route path="/chart" element={<ChartExample />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<h2>404 - Halaman tidak ditemukan</h2>} />
            </Routes>
          </div>
        </div>
        <Footer />
        <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
          {chatOpen ? "Tutup Chat" : "Chat Hotline"}
        </button>
        {chatOpen && <ChatHotline />}
      </div>
    </Router>
  );
}