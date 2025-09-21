import React, { useState } from "react";
import Papa from "papaparse";

export default function AnalysisTools() {
  const [csvData, setCsvData] = useState(null);
  const [columns, setColumns] = useState([]);
  const [selectedCol, setSelectedCol] = useState("");
  const [stats, setStats] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setCsvData(results.data);
        setColumns(Object.keys(results.data[0] || {}));
        setSelectedCol("");
        setStats(null);
      }
    });
  };

  const calculateStats = () => {
    if (!csvData || !selectedCol) return;
    const values = csvData
      .map((row) => row[selectedCol])
      .filter((v) => typeof v === "number" && !isNaN(v));
    if (values.length === 0) {
      setStats("Kolom tidak mengandung data numerik valid.");
      return;
    }
    const n = values.length;
    const mean = values.reduce((a, b) => a + b, 0) / n;
    const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1);
    const stdDev = Math.sqrt(variance);
    setStats({ n, mean: mean.toFixed(3), stdDev: stdDev.toFixed(3) });
  };

  return (
    <div className="analysis-tools">
      <h2>Alat Analisis Statistik dengan Upload CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {columns.length > 0 && (
        <>
          <label>
            Pilih kolom numerik untuk analisis:
            <select value={selectedCol} onChange={(e) => setSelectedCol(e.target.value)}>
              <option value="">--Pilih--</option>
              {columns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </label>
          <button onClick={calculateStats} disabled={!selectedCol}>
            Hitung Statistik
          </button>
        </>
      )}
      {stats && typeof stats === "object" && (
        <div className="result-box">
          <p>Jumlah data: {stats.n}</p>
          <p>Rata-rata (Mean): {stats.mean}</p>
          <p>Standar Deviasi: {stats.stdDev}</p>
        </div>
      )}
      {stats && typeof stats === "string" && <p>{stats}</p>}
      <p><i>Fitur ini memungkinkan analisis statistik dasar dari data CSV Anda.</i></p>
    </div>
  );
}