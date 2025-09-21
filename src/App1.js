import ChartExample from "./components/ChartExample";
import Quiz from "./components/Quiz";

// ... di dalam Routes ...
<Routes>
  <Route path="/" element={<Navigate to="/materi/1" />} />
  <Route path="/materi/:id" element={<MaterialSession materials={materials} />} />
  <Route path="/analisis" element={<AnalysisTools />} />
  <Route path="/chart" element={<ChartExample />} />
  <Route path="/quiz" element={<Quiz />} />
  <Route path="*" element={<h2>404 - Halaman tidak ditemukan</h2>} />
</Routes>