/**
 * =================================================================================
 * ANALOGI: KANTOR UTAMA (VERSI 2.0) - KINI TERHUBUNG KE GUDANG DATA
 * ---------------------------------------------------------------------------------
 * File server.js ini adalah "Manajer Utama" yang kini sudah lebih pintar.
 * Dia tidak lagi mengandalkan catatan tempel, tapi sudah punya akses resmi
 * ke "Gudang Data Digital" (Database) dan tahu persis struktur "Rak-Rak" (Tabel)
 * yang ada di dalamnya berkat "Blueprint" (Model) yang kita berikan.
 * =================================================================================
 */

// =================================================================================
// LANGKAH 1: MEMANGGIL SEMUA STAF & DOKUMEN YANG DIBUTUHKAN
// ---------------------------------------------------------------------------------
// 'require('express')' -> Memanggil tim ahli "Express" untuk kerangka kantor.
const express = require('express');

// 'require('./db-config')' -> Meminjam "Kartu Akses Gudang" dari resepsionis.
// Kartu akses ini (bernama 'sequelize') berisi semua info untuk terhubung ke PostgreSQL.
const sequelize = require('./db-config');

// 'require('./models/product')' -> Mengambil "Blueprint Rak Produk" dari arsip.
// Sekarang Manajer tahu persis struktur dan cara berinteraksi dengan produk.
const Product = require('./models/product');

// 'require('./models/salesTransaction')' -> Mengambil "Blueprint Buku Catatan Penjualan".
// Manajer juga jadi tahu struktur data transaksi dan hubungannya dengan produk.
const salesTransaction = require('./models/salesTransaction');


// =================================================================================
// LANGKAH 2: PERSIAPAN DASAR KANTOR
// ---------------------------------------------------------------------------------
// Menunjuk 'app' sebagai representasi kantor kita yang dikelola oleh Express.
const app = express();
// Menentukan alamat kantor di Pintu Nomor 3000.
const port = 3000;


// =================================================================================
// LANGKAH 3: MEMBUAT LOKET SEDERHANA UNTUK UJI COBA
// ---------------------------------------------------------------------------------
// Kita membuat satu loket di alamat utama ('/') untuk memastikan kantornya merespons.
// Ini seperti interkom di pintu depan untuk mengecek apakah ada orang di dalam.
app.get('/', (req, res) => {
    res.send('Selamat datang di Server Analisis Toko Bangunan!');
});


// =================================================================================
// LANGKAH 4: PROSEDUR BARU SAAT MEMBUKA KANTOR (SANGAT PENTING!)
// ---------------------------------------------------------------------------------
// 'startServer' adalah serangkaian protokol yang HARUS dijalankan sebelum kantor
// resmi dibuka untuk umum. Karena melibatkan proses yang butuh waktu (mengecek
// ke gudang), kita bungkus dalam sebuah fungsi 'async'.
const startServer = async () => {
    // 'try...catch' -> Ini adalah prosedur "Manajemen Risiko".
    // Kita akan MENCOBA (try) melakukan hal-hal yang berisiko (menyambung ke gudang).
    // Jika GAGAL (catch), kita akan menangani errornya dengan baik, tidak panik.
    try {
        // PERINTAH UTAMA SEBELUM BUKA: SINKRONISASI
        // 'await sequelize.sync()' -> Perintah Manajer kepada si Penerjemah (Sequelize):
        // "Sebelum ada pelanggan datang, pergi ke Gudang Data SEKARANG. Bawa semua
        //   'Blueprint' (Product, SalesTransaction) yang saya pegang.
        //   Bandingkan dengan 'Rak-Rak' (Tabel) yang ada di sana.
        //   Jika ada rak yang belum ada, SEGERA BANGUN SESUAI BLUEPRINT."
        // 'await' berarti Manajer akan sabar MENUNGGU sampai proses ini selesai.
        await sequelize.sync(); 
        
        // Jika proses sinkronisasi berhasil, umumkan di pengeras suara internal.
        console.log('Semua blueprint (model) berhasil disinkronkan dengan gudang data (database).');
        
        // Setelah semua siap, BARULAH KANTOR DIBUKA UNTUK UMUM
        // app.listen(...) -> Perintah "Buka Pintu Nomor 3000 sekarang!".
        app.listen(port, () => {
            console.log(`Server berhasil dibuka di http://localhost:${port}`);
        });

    } catch (error) {
        // Jika terjadi error di dalam blok 'try' (misal: password gudang salah,
        // gudang tidak menyala), maka alur akan loncat ke sini.
        console.error('Gagal menyinkronkan atau menjalankan server:', error);
    }
};

// =================================================================================
// LANGKAH 5: EKSEKUSI!
// ---------------------------------------------------------------------------------
// Menjalankan seluruh "Prosedur Pembukaan Kantor" yang sudah kita definisikan.
startServer();