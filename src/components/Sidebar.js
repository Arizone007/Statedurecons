import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ materials }) {
  return (
    <nav className="sidebar">
      <h2>Materi Statistika</h2>
      <ul>
        {materials.map((m) => (
          <li key={m.id}>
            <NavLink
              to={`/materi/${m.id}`}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {m.title}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/analisis" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Alat Analisis Statistik
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contoh Grafik
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Kuis Statistika
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}