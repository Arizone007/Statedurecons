import React, { useState } from "react";

const questions = [
  {
    question: "Apa itu mean dalam statistika?",
    options: [
      "Nilai tengah data setelah diurutkan",
      "Nilai yang paling sering muncul",
      "Rata-rata dari semua data",
      "Selisih antara nilai maksimum dan minimum"
    ],
    answer: 2
  },
  {
    question: "Distribusi probabilitas yang berbentuk lonceng disebut?",
    options: ["Binomial", "Poisson", "Normal", "Uniform"],
    answer: 2
  },
  {
    question: "Uji statistik apa yang digunakan untuk membandingkan rata-rata dua kelompok independen?",
    options: ["Uji-t", "ANOVA", "Chi-square", "Wilcoxon"],
    answer: 0
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowScore(true);
  };

  return (
    <div className="quiz-container">
      <h2>Kuis Statistika Singkat</h2>
      {showScore ? (
        <div>
          <p>
            Anda menjawab {score} dari {questions.length} benar.
          </p>
          <button onClick={() => { setCurrent(0); setScore(0); setShowScore(false); }}>
            Ulangi Kuis
          </button>
        </div>
      ) : (
        <div>
          <p>{questions[current].question}</p>
          <ul>
            {questions[current].options.map((opt, i) => (
              <li key={i}>
                <button onClick={() => handleAnswer(i)}>{opt}</button>
              </li>
            ))}
          </ul>
          <p>
            Soal {current + 1} dari {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}