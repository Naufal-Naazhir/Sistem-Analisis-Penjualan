// Memanggil alat-alat dasar yang dibtuhkan 
const {DataTypes} = require('sequelize');
const sequelize = require('../db-config');

// Mendefinisikan sebuah "Blueprint" atau "Rancangan Rak" untuk Produk.
// sequelize.define(...) adalah perintah kepada Penerjemah: "Hei, saya ingin kamu
// tahu tentang sebuah konsep bernama 'Product'. Ini adalah rancangannya:"
const Product = sequelize.define('product',{
    // Di dalam rancangan ini, kita definisikan setiap "kompartemen" (kolom)
    
    // 'id' tidak perlu kita tulis. Si Penerjemah cukup pintar untuk tahu
    // bahwa setiap rak butuh nomor seri (Primary Key) dan akan membuatnya otomatis.

    nama_produk:{
        type: DataTypes.STRING, // tipe data kompartemen ini adalan Teks (String)
        allowNull: false    // kompartemen ini tidak boleh kosong (wajib Diisi)
    },
    kategori:{type: DataTypes.STRING},
    satuan:{type: DataTypes.INTEGER},
    harga_satuan:{type: DataTypes.INTEGER}, // tipe datanya angka bulat
    status_klasifikasi:{type: DataTypes.STRING}
}, {
    // Pengaturan tambahan untuk blueprint ini
    tableName: 'products', // Nama fisik di rak digudang adalah 'products' (huruf kecil) 
    timestamps: false   // "saya tidak butuh stempel waktu otomatis (createdAt, updatedAt)"
});

// Memberikan "Blueprint Rak Produk" ini ke Resepsionis
// agar file lain bisa tahu tentang struktur rak ini.
module.exports = Product