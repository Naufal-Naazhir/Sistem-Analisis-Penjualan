// 1. memanggil "Penerjemah" ahli sequelize yang sudah kita rekrut
const {Sequelize} = require('sequelize');

// 2. Membuat sebuah "Kartu Akses" ke Gudang Digital kita
// Anggap 'new Sequelize(...)' sebagai proses pembuatan kartu akses.
// Kartu ini berisi semua informasi yang dibutuhkan oleh si Penerjemah untuk bisa masuk.
const sequelize = new Sequelize(
    'toko_bangunan_db', // Nama Gudang yang dituju
    'postgres',         // Username Petugas Jaga (defaultnya 'postgres')
    'naufalpg27',       // Password untuk masuk
    {
        host: 'localhost',      // Alamat kompleks perkantoran (komputer kita)
        dialect: 'postgres'     // Bahasa spesifik yang digunakan oleh Gudang ini
    }
);

// 3. Memberikan "kartu akses" ini ke resepsionis 
// // 'module.exports' adalah cara kita membuat variabel 'sequelize' (kartu akses)
// ini bisa diambil dan digunakan oleh file lain, seperti server.js atau file model.
// Ini seperti menaruh kartu akses di meja resepsionis agar departemen lain bisa meminjamnya.
module.exports = sequelize;