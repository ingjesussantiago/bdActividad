// const sqlite3 = require('sqlite3').verbose();
import sqlite3 from "sqlite3";

// Crear conexión a la base de datos
const db = new sqlite3.Database('./datadb.db', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos de SQLite.');
  }
});

// Crear la tabla empleados
const createTableQuery = `
CREATE TABLE IF NOT EXISTS empleados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    fecha_nacimiento TEXT,
    puesto TEXT,
    salario REAL,
    fecha_contratacion TEXT
)
`;

db.run(createTableQuery, (err) => {
  if (err) {
    console.error('Error creando la tabla empleados:', err.message);
  } else {
    console.log('Tabla empleados creada o ya existe.');
  }
});

// module.exports = db;
export default db;
