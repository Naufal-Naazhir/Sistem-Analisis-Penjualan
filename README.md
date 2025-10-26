# Sistem Analisis Penjualan & Klasifikasi Produk

Aplikasi web backend yang dirancang untuk menganalisis data penjualan historis dari sebuah toko bangunan dan mengklasifikasikan produk berdasarkan tingkat penjualannya menggunakan model Machine Learning (Decision Tree). Proyek ini merupakan implementasi dari penelitian skripsi.

## Fitur Utama

*   **Upload Data CSV:** Mengimpor data transaksi penjualan massal melalui upload file CSV.
*   **Pemrosesan Data Otomatis:** Sistem secara cerdas memproses data CSV, membuat katalog produk, dan mencatat setiap transaksi ke dalam database.
*   **Mesin Analisis:** Menjalankan model klasifikasi untuk memberikan label pada setiap produk (misal: "Sangat Laris", "Laris", "Kurang Laris").
*   **API Terstruktur:** Menyediakan data hasil analisis melalui RESTful API untuk bisa dikonsumsi oleh aplikasi frontend.

## Tumpukan Teknologi (Tech Stack)

*   **Backend:** Node.js, Express.js
*   **Database:** PostgreSQL
*   **ORM:** Sequelize
*   **Machine Learning:** ml.js (Decision Tree)

## Instalasi & Cara Menjalankan

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/username-anda/nama-repo-anda.git
    cd nama-repo-anda
    ```

2.  **Install semua dependensi:**
    ```bash
    npm install
    ```

3.  **Setup Database:**
    *   Pastikan Anda memiliki PostgreSQL yang berjalan.
    *   Buat database baru bernama `toko_bangunan_db`.
    *   Salin file `.env.example` menjadi `.env` dan sesuaikan kredensial database Anda. *(Ini langkah untuk nanti, tapi bagus ditulis sekarang)*

4.  **Jalankan server:**
    ```bash
    node server.js
    ```
    Server akan berjalan di `http://localhost:3000`.

## Roadmap & Progres

- [x] **Fase 1:** Setup server Express.js dasar.
- [x] **Fase 2:** Integrasi database PostgreSQL dengan Sequelize.
- [ ] **Fase 3:** Implementasi fitur upload & pemrosesan CSV.
- [ ] **Fase 4:** Implementasi algoritma Decision Tree.
- [ ] **Fase 5:** Membuat API untuk menampilkan hasil analisis.
