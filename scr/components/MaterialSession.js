import React from "react";
import { useParams } from "react-router-dom";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function MaterialSession({ materials }) {
  const { id } = useParams();
  const material = materials.find((m) => m.id === parseInt(id));

  if (!material) return <h2>Materi tidak ditemukan</h2>;

  // Fungsi sederhana parsing konten untuk render LaTeX dan paragraf
  // Misal, tanda $$...$$ untuk block math, $...$ untuk inline math
  const renderContent = (text) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.trim().startsWith("$$") && line.trim().endsWith("$$")) {
        const math = line.trim().slice(2, -2);
        return <BlockMath key={idx}>{math}</BlockMath>;
      }
      if (line.includes("$")) {
        // Render inline math
        const parts = line.split(/(\$.*?\$)/g);
        return (
          <p key={idx}>
            {parts.map((part, i) => {
              if (part.startsWith("$") && part.endsWith("$")) {
                const math = part.slice(1, -1);
                return <InlineMath key={i}>{math}</InlineMath>;
              }
              return part;
            })}
          </p>
        );
      }
      return <p key={idx}>{line}</p>;
    });
  };

  return (
    <div className="material-session">
      <h2>{material.title}</h2>
      <div className="material-content">{renderContent(material.content)}</div>
    </div>
  );
}