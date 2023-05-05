DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS puestos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS proveedores;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS facturas;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS detallefacturas;


CREATE TABLE puestos (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(2048),
	salario VARCHAR(2048),
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE empleados (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(2048),
	fechanacimiento DATE,
	direccion VARCHAR(2048),
	telefono VARCHAR(2048),
	correo VARCHAR(2048),
	fechacontratacion DATE,
	fechaterminacion DATE,
	estado VARCHAR(2048),
	puestoid int,
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE clientes (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(2048),
	nit VARCHAR(2048),
	direccion VARCHAR(2048),
	telefono VARCHAR(2048),
	correo VARCHAR(2048),
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE proveedores (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(2048),
	telefono VARCHAR(2048),
	direccion VARCHAR(2048),
	correo VARCHAR(2048),
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE pedidos (
	id int NOT NULL AUTO_INCREMENT,
	fecha DATE,
	estado VARCHAR(2048),
	productoid INT,
	proveedorid INT,	
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE facturas (
	id int NOT NULL AUTO_INCREMENT,
	fecha DATE,
	clienteid INT,
	empleadoid INT,
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE categorias (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(2048),	
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);


CREATE TABLE productos (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(2048),
	imagen VARCHAR(2048),
	descripcion VARCHAR(2048),
	precio VARCHAR(2048),
	stock INT,
	categoriaid INT,
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);

CREATE TABLE detallefacturas (
	id int NOT NULL AUTO_INCREMENT,
	cantidad INT,
	facturaid INT,
	productoid INT,
	createdAt DATETIME,
	updatedAt DATETIME,	
	PRIMARY KEY (id)
);