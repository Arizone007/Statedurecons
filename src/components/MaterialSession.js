import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

// Custom renderer untuk mendeteksi dan render LaTeX inline dan block
const renderers = {
  // Render paragraf dengan deteksi LaTeX inline dan block
  paragraph: ({ children }) => {
    // Gabungkan children menjadi string
    const text = children.map(child => (typeof child === 'string' ? child : '')).join('');

    // Cek apakah paragraf adalah block math $$...$$
    if (text.trim().startsWith("$$") && text.trim().endsWith("$$")) {
      const math = text.trim().slice(2, -2);
      return <BlockMath>{math}</BlockMath>;
    }

    // Render paragraf dengan inline math $...$
    const parts = [];
    let lastIndex = 0;
    const regex = /\$(.+?)\$/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const index = match.index;
      if (index > lastIndex) {
        parts.push(text.substring(lastIndex, index));
      }
      parts.push(<InlineMath key={index}>{match[1]}</InlineMath>);
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return <p>{parts.length > 0 ? parts : children}</p>;
  }
};

export default function MaterialSession({ materials }) {
  const { id } = useParams();
  const material = materials.find((m) => m.id === parseInt(id));

  if (!material) return <h2>Materi tidak ditemukan</h2>;

  return (
    <div className="material-session">
      <h2>{material.title}</h2>
      <div className="material-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={renderers}
        >
          {material.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}