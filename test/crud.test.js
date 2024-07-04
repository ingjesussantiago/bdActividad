import {expect} from 'chai';
import { insertarEmpleado } from '../crud.js';
import db from '../db.js';

describe('Pruebas para la función insertarEmpleado', () => {
  before((done) => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS empleados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        fecha_nacimiento TEXT,
        puesto TEXT,
        salario REAL,
        fecha_contratacion TEXT
    )`;
    
    db.run(createTableQuery, (err) => {
      if (err) {
        console.error('Error creando la tabla empleados:', err.message);
        done(err);
      } else {
        console.log('Tabla empleados creada o ya existe.');
        done();
      }
    });
  });

  it('debería insertar un empleado correctamente', (done) => {
    const empleado = ['Juan Pérez', 'juan@example.com', '1990-05-15', 'Desarrollador', 55000.00, '2020-01-15'];
    
    insertarEmpleado(empleado, (err, lastID) => {
      expect(err).to.be.null;
      expect(lastID).to.be.a('number');
      
      const selectQuery = 'SELECT * FROM empleados WHERE id = ?';
      db.get(selectQuery, [lastID], (err, row) => {
        expect(err).to.be.null;
        expect(row).to.include({
          nombre: 'Juan Pérez',
          email: 'juan@example.com',
          fecha_nacimiento: '1990-05-15',
          puesto: 'Desarrollador',
          salario: 55000.00,
          fecha_contratacion: '2020-01-15'
        });
        done();
      });
    });
  });

  after((done) => {
    db.close((err) => {
      if (err) {
        console.error('Error cerrando la base de datos:', err.message);
        done(err);
      } else {
        console.log('Base de datos cerrada.');
        done();
      }
    });
  });
});
