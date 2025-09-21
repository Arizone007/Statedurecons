import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Statedurecons</h4>
          <p>Platform edukasi statistika & konsultasi data penelitian</p>
        </div>
        <div className="footer-section">
          <h4>Layanan</h4>
          <ul>
            <li>Konsultasi Penelitian S1/S2/S3</li>
            <li>Analisis Data Statistik</li>
            <li>Survei Sosial & Ekonomi</li>
            <li>Pelatihan Statistika</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Kontak</h4>
          <p>📧 info@statedurecons.com</p>
          <p>📱 +62-xxx-xxxx-xxxx</p>
          <p>🌐 www.statedurecons.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Statedurecons. All rights reserved.</p>
      </div>
    </footer>
  );
}