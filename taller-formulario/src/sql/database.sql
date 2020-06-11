CREATE DATABASE formulario 

USE formulario;

CREATE TABLE usuario{
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    email TEXT,
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
};

INSERT INTO datos(nombre, email) VALUES("Daniel Salazar","daniel037@hotmail.es");