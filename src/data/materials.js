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

## Contoh Penerapan dalam Data Science

**Analisis Performa Website:**
Data waktu loading halaman (detik): 2.1, 1.8, 2.5, 3.2, 1.9, 2.3, 4.1, 2.0, 2.4, 2.2

Perhitungan:
- Mean = 2.45 detik
- Median = 2.25 detik
- Range = 2.3 detik
- Standar Deviasi ≈ 0.73 detik
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
- Sifat: Simetris, berbentuk lonceng

**2. Distribusi Uniform**
- Semua nilai dalam interval memiliki probabilitas sama

## Penerapan dalam Teknologi Modern

**Machine Learning:**
- Feature Distribution untuk preprocessing
- Gaussian Naive Bayes
- Anomaly Detection

**Web Analytics:**
- A/B Testing
- User Behavior Modeling
    `
  },
  {
    id: 4,
    title: "Statistika Inferensial Parametrik",
    content: `
# Statistika Inferensial Parametrik

Statistika inferensial parametrik menggunakan asumsi tertentu tentang distribusi populasi untuk membuat inferensi dari sampel ke populasi.

## Asumsi Dasar
1. **Normalitas**: Data terdistribusi normal
2. **Independensi**: Observasi saling independen
3. **Homogenitas Variansi**: Variansi antar kelompok sama
4. **Linearitas**: Hubungan antar variabel linier

## Uji-t (t-test)

**1. One Sample t-test**
- Menguji apakah rata-rata populasi sama dengan nilai tertentu
- Formula: t = (x̄ - μ₀) / (s/√n)

**2. Two Sample t-test**
- Membandingkan rata-rata dua kelompok independen

**3. Paired t-test**
- Membandingkan dua pengukuran pada subjek yang sama

## ANOVA (Analysis of Variance)

**One-Way ANOVA:**
- Membandingkan rata-rata lebih dari dua kelompok
- H₀: μ₁ = μ₂ = μ₃ = ... = μₖ

## Contoh A/B Testing

**Skenario:** Menguji conversion rate website
- Kontrol: n₁ = 1000, konversi = 50 (5%)
- Treatment: n₂ = 1000, konversi = 70 (7%)

**Hasil:** Desain baru secara signifikan meningkatkan conversion rate.
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

## Uji Nonparametrik Utama

**1. Mann-Whitney U Test**
- Alternatif untuk independent t-test
- Membandingkan distribusi dua kelompok

**2. Wilcoxon Signed-Rank Test**
- Alternatif untuk paired t-test
- Menguji median perbedaan = 0

**3. Kruskal-Wallis Test**
- Alternatif untuk one-way ANOVA
- Membandingkan lebih dari dua kelompok

**4. Chi-Square Test**
- Menguji independensi variabel kategorikal
- Goodness of fit test

## Contoh Penerapan

**Analisis User Experience:**
Membandingkan rating kepuasan (skala 1-5) untuk tiga versi interface aplikasi menggunakan Kruskal-Wallis Test.

**Web Analytics:**
Menguji hubungan antara device type dan conversion rate menggunakan Chi-square test.
    `
  }
];

export default materials;