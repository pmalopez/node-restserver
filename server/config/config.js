// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //    urlDB = process.env.MONGO_URI;
    urlDB = 'mongodb+srv://pmalopez:X6jDug5Fdq9wpBKb@cluster0-ckaw3.mongodb.net/cafe';
}
process.env.URLDB = urlDB;