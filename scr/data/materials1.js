const materials = [
  {
    id: 1,
    title: "Pengantar Dasar Statistika",
    content: `
# Pengantar Dasar Statistika

Statistika adalah ilmu yang mempelajari cara mengumpulkan, mengorganisasi, menganalisis, menginterpretasi, dan menyajikan data. Statistika memiliki peran penting dalam berbagai bidang kehidupan modern.

## Konsep Dasar

**1. Populasi dan Sampel**
- **Populasi**: Keseluruhan objek atau individu yang menjadi subjek penelitian
- **Sampel**: Sebagian dari populasi yang dipilih untuk diteliti
- **Parameter**: Ukuran yang menggambarkan karakteristik populasi
- **Statistik**: Ukuran yang menggambarkan karakteristik sampel

**2. Jenis Data**
- **Data Kualitatif**: Data yang bersifat kategorikal (nominal, ordinal)
- **Data Kuantitatif**: Data yang dapat diukur dengan angka (diskret, kontinu)

**3. Variabel**
- **Variabel Independen**: Variabel bebas yang mempengaruhi variabel lain
- **Variabel Dependen**: Variabel terikat yang dipengaruhi variabel lain

## Contoh Penerapan Modern

**Dalam Big Data:**
- Analisis perilaku pengguna media sosial
- Prediksi tren pasar e-commerce
- Optimasi algoritma rekomendasi

**Dalam AI/Machine Learning:**
- Preprocessing data untuk model ML
- Feature selection dan dimensionality reduction
- Evaluasi performa model dengan metrik statistik

**Ilustrasi Praktis:**
Misalkan kita ingin meneliti rata-rata waktu yang dihabiskan pengguna di aplikasi mobile.
- Populasi: Semua pengguna aplikasi (10 juta pengguna)
- Sampel: 1000 pengguna yang dipilih secara acak
- Data: Waktu penggunaan harian (dalam menit)
- Parameter: μ (rata-rata waktu penggunaan seluruh pengguna)
- Statistik: x̄ (rata-rata waktu penggunaan sampel)
    `
  },
  {
    id: 2,
    title: "Statistika Deskriptif",
    content: `
# Statistika Deskriptif

Statistika deskriptif berfokus pada penyajian dan ringkasan data tanpa membuat generalisasi atau inferensi terhadap populasi.

## Ukuran Pemusatan Data

**1. Mean (Rata-rata)**
Formula: μ = Σx/n
- Sensitif terhadap nilai ekstrem
- Cocok untuk data yang terdistribusi normal

**2. Median**
- Nilai tengah setelah data diurutkan
- Tidak sensitif terhadap outlier
- Cocok untuk data skewed

**3. Modus**
- Nilai yang paling sering muncul
- Cocok untuk data kategorikal

## Ukuran Penyebaran Data

**1. Range**
Range = Nilai maksimum - Nilai minimum

**2. Variansi (σ²)**
Formula: σ² = Σ(x - μ)²/n

**3. Standar Deviasi (σ)**
Formula: σ = √σ²

**4. Koefisien Variasi**
CV = (σ/μ) × 100%

## Ukuran Posisi Data

**1. Kuartil**
- Q1: 25% data berada di bawahnya
- Q2: Median (50%)
- Q3: 75% data berada di bawahnya

**2. Persentil**
- P90: 90% data berada di bawahnya

## Contoh Penerapan dalam Data Science

**Analisis Performa Website:**
Data waktu loading halaman (detik): 2.1, 1.8, 2.5, 3.2, 1.9, 2.3, 4.1, 2.0, 2.4, 2.2

Perhitungan:
- Mean = (2.1+1.8+2.5+3.2+1.9+2.3+4.1+2.0+2.4+2.2)/10 = 2.45 detik
- Median = (2.2+2.3)/2 = 2.25 detik
- Range = 4.1 - 1.8 = 2.3 detik
- Standar Deviasi ≈ 0.73 detik

**Interpretasi:**
- Website rata-rata loading 2.45 detik
- 50% halaman loading ≤ 2.25 detik
- Variabilitas cukup tinggi (CV ≈ 30%)

## Visualisasi Data

**1. Histogram**: Distribusi frekuensi data
**2. Box Plot**: Menampilkan quartil dan outlier
**3. Scatter Plot**: Hubungan antar variabel
**4. Bar Chart**: Data kategorikal
    `
  },
  {
    id: 3,
    title: "Distribusi Probabilitas",
    content: `
# Distribusi Probabilitas

Distribusi probabilitas menggambarkan peluang terjadinya berbagai hasil dalam suatu eksperimen atau kejadian.

## Konsep Dasar Probabilitas

**Aturan Dasar:**
- 0 ≤ P(A) ≤ 1
- P(semua kemungkinan) = 1
- P(A atau B) = P(A) + P(B) - P(A dan B)

## Distribusi Diskret

**1. Distribusi Binomial**
- Parameter: n (jumlah percobaan), p (probabilitas sukses)
- Formula: P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
- Contoh: Jumlah email spam dari 100 email yang diterima

**2. Distribusi Poisson**
- Parameter: λ (rata-rata kejadian per unit waktu/ruang)
- Formula: P(X = k) = (e^(-λ) × λ^k) / k!
- Contoh: Jumlah bug yang ditemukan per hari dalam software

## Distribusi Kontinu

**1. Distribusi Normal**
- Parameter: μ (mean), σ (standar deviasi)
- Formula: f(x) = (1/(σ√2π)) × e^(-(x-μ)²/2σ²)
- Sifat: Simetris, berbentuk lonceng

**2. Distribusi Uniform**
- Semua nilai dalam interval memiliki probabilitas sama
- Contoh: Pembangkit bilangan random

**3. Distribusi Eksponensial**
- Parameter: λ (rate parameter)
- Contoh: Waktu antar kedatangan request ke server

## Penerapan dalam Teknologi Modern

**Machine Learning:**
- **Feature Distribution**: Memahami distribusi fitur untuk preprocessing
- **Gaussian Naive Bayes**: Menggunakan asumsi distribusi normal
- **Anomaly Detection**: Mengidentifikasi data yang tidak mengikuti distribusi normal

**Quality Control:**
- **Six Sigma**: Menggunakan distribusi normal untuk kontrol kualitas
- **Process Capability**: Menilai kemampuan proses memenuhi spesifikasi

**Web Analytics:**
- **A/B Testing**: Menggunakan distribusi untuk menentukan signifikansi perbedaan
- **User  Behavior**: Modeling waktu session menggunakan distribusi eksponensial

## Ilustrasi Praktis: Analisis Response Time API

Misalkan response time API server mengikuti distribusi normal dengan:
- μ = 200ms (rata-rata)
- σ = 50ms (standar deviasi)

**Pertanyaan Bisnis:**
1. Berapa probabilitas response time ≤ 250ms?
2. Berapa response time yang dijamin 95% request?

**Jawaban:**
1. P(X ≤ 250) = P(Z ≤ (250-200)/50) = P(Z ≤ 1) ≈ 0.8413 (84.13%)
2. P95 = μ + 1.645σ = 200 + 1.645(50) ≈ 282ms

## Central Limit Theorem

Teorema yang menyatakan bahwa distribusi rata-rata sampel akan mendekati distribusi normal, terlepas dari bentuk distribusi populasi, jika ukuran sampel cukup besar (n ≥ 30).

**Implikasi dalam Data Science:**
- Memungkinkan inferensi statistik meski distribusi populasi tidak diketahui
- Dasar untuk confidence interval dan hypothesis testing
- Penting dalam bootstrap sampling dan resampling methods
    `
  },
  {
    id: 4,
    title: "Statistika Inferensial Parametrik",
    content: `
# Statistika Inferensial Parametrik

Statistika inferensial parametrik menggunakan asumsi tertentu tentang distribusi populasi untuk membuat inferensi atau generalisasi dari sampel ke populasi.

## Asumsi Dasar
1. **Normalitas**: Data terdistribusi normal
2. **Independensi**: Observasi saling independen
3. **Homogenitas Variansi**: Variansi antar kelompok sama
4. **Linearitas**: Hubungan antar variabel linier

## Confidence Interval (Interval Kepercayaan)

**Formula untuk rata-rata:**
CI = x̄ ± t(α/2, df) × (s/√n)

dimana:
- x̄ = rata-rata sampel
- t = nilai t-tabel
- s = standar deviasi sampel
- n = ukuran sampel

## Hypothesis Testing (Uji Hipotesis)

**Langkah-langkah:**
1. Menentukan H₀ (hipotesis nul) dan H₁ (hipotesis alternatif)
2. Menentukan tingkat signifikansi (α)
3. Menghitung test statistic
4. Menentukan p-value atau critical value
5. Membuat keputusan dan kesimpulan

## Uji-t (t-test)

**1. One Sample t-test**
- Menguji apakah rata-rata populasi sama dengan nilai tertentu
- Formula: t = (x̄ - μ₀) / (s/√n)

**2. Two Sample t-test (Independent)**
- Membandingkan rata-rata dua kelompok independen
- Formula: t = (x̄₁ - x̄₂) / sp√(1/n₁ + 1/n₂)

**3. Paired t-test**
- Membandingkan dua pengukuran pada subjek yang sama
- Formula: t = d̄ / (sd/√n)

## Analysis of Variance (ANOVA)

**One-Way ANOVA:**
- Membandingkan rata-rata lebih dari dua kelompok
- H₀: μ₁ = μ₂ = μ₃ = ... = μₖ
- Test statistic: F = MSB/MSW

**Two-Way ANOVA:**
- Menguji efek dua faktor sekaligus
- Dapat mendeteksi interaction effect

## Regresi Linear

**Simple Linear Regression:**
Y = β₀ + β₁X + ε

**Multiple Linear Regression:**
Y = β₀ + β₁X₁ + β₂X₂ + ... + βₖXₖ + ε

**Asumsi Regresi:**
1. Linearitas
2. Independensi residual
3. Homoskedastisitas
4. Normalitas residual
5. No multicollinearity (untuk multiple regression)

## Contoh Penerapan dalam Data Science

**A/B Testing untuk Konversi Website:**

**Skenario:** Menguji apakah desain baru website meningkatkan conversion rate

**Data:**
- Kontrol (desain lama): n₁ = 1000, konversi = 50 (5%)
- Treatment (desain baru): n₂ = 1000, konversi = 70 (7%)

**Hipotesis:**
- H₀: p₁ = p₂ (tidak ada perbedaan conversion rate)
- H₁: p₂ > p₁ (desain baru lebih baik)

**Analisis:**
Menggunakan two-proportion z-test:
z = (p̂₂ - p̂₁) / √[p̂(1-p̂)(1/n₁ + 1/n₂)]

dimana p̂ = (x₁ + x₂)/(n₁ + n₂) = (50 + 70)/(1000 + 1000) = 0.06

**Hasil:**
z = (0.07 - 0.05) / √[0.06(0.94)(1/1000 + 1/1000)] ≈ 1.88

Dengan α = 0.05, critical value = 1.645
Karena z > 1.645, kita menolak H₀

**Kesimpulan:** Desain baru secara signifikan meningkatkan conversion rate.

## Analisis Regresi untuk Prediksi Harga

**Skenario:** Memprediksi harga rumah berdasarkan luas dan lokasi

**Model:**
Harga = β₀ + β₁(Luas) + β₂(Lokasi_Premium) + ε

**Interpretasi Koefisien:**
- β₁: Kenaikan harga per m² luas rumah
- β₂: Selisih harga rumah di lokasi premium vs non-premium

**Evaluasi Model:**
- R²: Proporsi variansi yang dijelaskan model
- RMSE: Root Mean Square Error
- F-test: Signifikansi model secara keseluruhan
- t-test: Signifikansi setiap koefisien

**Validasi Asumsi:**
- Scatterplot residual vs fitted values (homoskedastisitas)
- Q-Q plot residual (normalitas)
- VIF untuk multicollinearity
    `
  },
  {
    id: 5,
    title: "Statistika Inferensial Nonparametrik",
    content: `
# Statistika Inferensial Nonparametrik

Statistika nonparametrik tidak membuat asumsi kuat tentang distribusi populasi dan cocok digunakan ketika asumsi parametrik tidak terpenuhi.

## Kapan Menggunakan Nonparametrik?

1. **Data tidak terdistribusi normal**
2. **Ukuran sampel kecil**
3. **Data ordinal atau kategorikal**
4. **Presence of outliers**
5. **Tidak memenuhi asumsi homogenitas variansi**

## Uji Satu Sampel

**1. Uji Tanda (Sign Test)**
- Menguji median populasi
- H₀: Median = M₀
- Hanya membutuhkan informasi tanda (+/-)

**2. Wilcoxon Signed-Rank Test**
- Alternatif nonparametrik untuk one-sample t-test
- Mempertimbangkan magnitude dan direction of differences
- Asumsi: distribusi simetris

## Uji Dua Sampel Independen

**1. Mann-Whitney U Test (Wilcoxon Rank-Sum Test)**
- Alternatif nonparametrik untuk independent t-test
- Membandingkan distribusi dua kelompok
- H₀: Kedua populasi memiliki distribusi yang sama

**2. Kolmogorov-Smirnov Test**
- Menguji apakah dua sampel berasal dari distribusi yang sama
- Lebih sensitif terhadap perbedaan bentuk distribusi

## Uji Dua Sampel Berpasangan

**Wilcoxon Signed-Rank Test untuk Paired Data**
- Alternatif nonparametrik untuk paired t-test
- Menguji apakah median perbedaan = 0

## Uji Lebih dari Dua Kelompok

**1. Kruskal-Wallis Test**
- Alternatif nonparametrik untuk one-way ANOVA
- H₀: Semua kelompok memiliki distribusi yang sama
- Test statistic: H mengikuti distribusi chi-square

**2. Friedman Test**
- Alternatif nonparametrik untuk repeated measures ANOVA
- Digunakan untuk data berpasangan dengan lebih dari dua kondisi

## Uji Korelasi Nonparametrik

**1. Spearman's Rank Correlation (ρ)**
- Mengukur korelasi monotonic
- Tidak memerlukan asumsi linearitas
- Formula: ρ = 1 - (6Σd²)/(n(n²-1))

**2. Kendall's Tau (τ)**
- Mengukur concordance antar ranking
- Lebih robust untuk sampel kecil

## Uji Chi-Square

**1. Goodness of Fit Test**
- Menguji apakah distribusi sampel sesuai dengan distribusi teoritis
- χ² = Σ[(O - E)²/E]

**2. Test of Independence**
- Menguji independensi dua variabel kategorikal
- Menggunakan