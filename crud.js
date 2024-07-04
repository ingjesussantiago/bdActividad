console.log("hola");
// const db = require('./db.js');
import db from './db.js';

// Insertar datos
// const insertQuery = 'INSERT INTO empleados (nombre, email, fecha_nacimiento, puesto, salario, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?)';
// const empleados = [
//   ['Juan Pérez', 'juan@example.com', '1990-05-15', 'Desarrollador', 55000.00, '2020-01-15'],
//   ['María López', 'maria@example.com', '1985-08-25', 'Diseñadora', 60000.00, '2018-03-10']
// ];

// empleados.forEach((empleado) => {
//   db.run(insertQuery, empleado, function (err) {
//     if (err) {
//       console.error('Error insertando datos:', err.message);
//     } else {
//       console.log('Datos insertados con ID:', this.lastID);
//     }
//   });
// });

// // Leer datos
// const selectQuery = 'SELECT * FROM empleados';

// db.all(selectQuery, [], (err, rows) => {
//   if (err) {
//     console.error('Error leyendo datos:', err.message);
//   } else {
//     console.log('Datos de la tabla empleados:', rows);
//   }
// });

// // Actualizar datos
// const updateQuery = 'UPDATE empleados SET salario = ? WHERE nombre = ?';
// const nuevoValor = [57000.00, 'Juan Pérez'];

// db.run(updateQuery, nuevoValor, function (err) {
//   if (err) {
//     console.error('Error actualizando datos:', err.message);
//   } else {
//     console.log('Datos actualizados:', this.changes);
//   }
// });

// // Eliminar datos
// const deleteQuery = 'DELETE FROM empleados WHERE nombre = ?';
// const nombreAEliminar = ['María López'];

// db.run(deleteQuery, nombreAEliminar, function (err) {
//   if (err) {
//     console.error('Error eliminando datos:', err.message);
//   } else {
//     console.log('Datos eliminados:', this.changes);
//   }
// });

export function insertarEmpleado(empleado, callback) {
  const insertQuery = 'INSERT INTO empleados (nombre, email, fecha_nacimiento, puesto, salario, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?)';
  db.run(insertQuery, empleado, function(err) {
    if (err) {
      callback(err);
    } else {
      callback(null, this.lastID);
    }
  });
}
