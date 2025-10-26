const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db-config'); // Meminjam kartu akses gudang
const Product = require('./product'); // PENTING: Meminjam blueprint "Rak Produk"


// Mendefinisikan blueprint untuk "Buku Catatan Penjualan"
const SalesTransaction = sequelize.define('SalesTransaction', {
    id_transaksi_asli:{
        type: DataTypes.STRING,
        allowNull: false
    },
    product_id:{
        // Ini adalah praktik yang baik untuk secara eksplisit memberitahu
        // bahwa kolom ini merujuk ke tabel lain.
        type: DataTypes.INTEGER,
        references: {
            Model:Product,  // Merujuk ke model Product
            key: 'id'       // Merujuk ke kolom 'id' di model Product
        }},
    kuantitas:{type: DataTypes.INTEGER},
    total_harga:{type: DataTypes.INTEGER},
    tanggal_pembelian:{type: DataTypes.DATEONLY},
}, {
    tableName: 'sales_transactions',
    timestamps: false
});

// =================================================================================
// BAGIAN PALING PENTING: MEMBANGUN JEMBATAN ANTAR RAK (RELASI)
// ---------------------------------------------------------------------------------
// Di dunia nyata, setiap catatan penjualan PASTI terhubung ke satu produk.
// Kita harus memberitahu si Penerjemah (Sequelize) tentang hubungan ini.

Product.hasMany(SalesTransaction, { foreignKey: 'product_id' });
// Terjemahan: "Satu (1) buah 'Product' bisa memiliki BANYAK (Many) 'SalesTransaction'.
//              Cara menghubungkannya adalah melalui kolom 'product_id' di buku catatan."

SalesTransaction.belongsTo(Product, { foreignKey: 'product_id' });
// Terjemahan: "Setiap satu (1) 'SalesTransaction' PASTI MILIK (Belongs To) satu buah 'Product'.
//              Cara menemukan produk miliknya adalah melalui kolom 'product_id'."
// =================================================================================

module.exports = SalesTransaction;