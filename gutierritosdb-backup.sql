-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for gutierritosdb
CREATE DATABASE IF NOT EXISTS `gutierritosdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gutierritosdb`;

-- Dumping structure for table gutierritosdb.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.categorias: ~0 rows (approximately)
INSERT INTO `categorias` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Articulos de consumo diario', '2023-05-05 06:35:45', '2023-05-05 06:35:45');

-- Dumping structure for table gutierritosdb.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `nit` varchar(2048) DEFAULT NULL,
  `direccion` varchar(2048) DEFAULT NULL,
  `telefono` varchar(2048) DEFAULT NULL,
  `correo` varchar(2048) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.clientes: ~0 rows (approximately)
INSERT INTO `clientes` (`id`, `nombre`, `nit`, `direccion`, `telefono`, `correo`, `createdAt`, `updatedAt`) VALUES
	(1, 'Julio Jaramillo', '83247289', '2 calle 2-2 zona 2 Quetzaltenango', '392749824', 'julio@gmail.com', '2023-05-05 06:36:42', '2023-05-05 06:36:42');

-- Dumping structure for table gutierritosdb.detallefacturas
CREATE TABLE IF NOT EXISTS `detallefacturas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cantidad` int DEFAULT NULL,
  `facturaid` int DEFAULT NULL,
  `productoid` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_detallefacturas_facturas` (`facturaid`),
  KEY `FK_detallefacturas_productos` (`productoid`),
  CONSTRAINT `FK_detallefacturas_facturas` FOREIGN KEY (`facturaid`) REFERENCES `facturas` (`id`),
  CONSTRAINT `FK_detallefacturas_productos` FOREIGN KEY (`productoid`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.detallefacturas: ~0 rows (approximately)
INSERT INTO `detallefacturas` (`id`, `cantidad`, `facturaid`, `productoid`, `createdAt`, `updatedAt`) VALUES
	(1, 5, 1, 1, '2023-05-05 06:39:15', '2023-05-05 06:39:15');

-- Dumping structure for table gutierritosdb.empleados
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `fechanacimiento` date DEFAULT NULL,
  `direccion` varchar(2048) DEFAULT NULL,
  `telefono` varchar(2048) DEFAULT NULL,
  `correo` varchar(2048) DEFAULT NULL,
  `fechacontratacion` date DEFAULT NULL,
  `fechaterminacion` date DEFAULT NULL,
  `estado` varchar(2048) DEFAULT NULL,
  `puestoid` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_empleados_puestos` (`puestoid`),
  CONSTRAINT `FK_empleados_puestos` FOREIGN KEY (`puestoid`) REFERENCES `puestos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.empleados: ~0 rows (approximately)
INSERT INTO `empleados` (`id`, `nombre`, `fechanacimiento`, `direccion`, `telefono`, `correo`, `fechacontratacion`, `fechaterminacion`, `estado`, `puestoid`, `createdAt`, `updatedAt`) VALUES
	(1, 'Alejandro Ale Ale jandro', '2001-05-07', '1 calle 1-1 zona 1', '111111111', 'alejandro@dropbox.com', '2023-04-04', '2023-05-04', 'activo', 2, '2023-05-05 01:24:18', '2023-05-05 06:23:24'),
	(2, 'Lucha Villa', '1936-11-30', '8 calle 8-8 zona 8 Chihuahua México', '2834672', 'luchavilla@gmail.com', '2023-05-05', '2024-07-10', 'activo', 1, '2023-05-05 06:22:52', '2023-05-05 06:22:52'),
	(3, 'Pedro Saj', '2001-05-10', '9 calle 3-2 zona 6 Quetzaltenango, Guatemala', '32489723', 'pedrosaj@gmail.com', '2023-05-05', '2024-04-24', 'activo', 3, '2023-05-05 06:24:38', '2023-05-05 06:24:38'),
	(4, 'María Antonieta de las Nieves', '1960-06-24', '221B Baker Street Washington D.C.', '(745) 983-5789', 'antonieta@gmail.com', '2023-05-05', '2024-04-23', 'activo', 4, '2023-05-05 06:25:55', '2023-05-05 06:25:55'),
	(5, 'Max Presley', '1935-01-08', 'Graceland United States ', '324928733', 'presley@gmail.com', '2023-05-05', '2023-12-13', 'activo', 5, '2023-05-05 06:27:44', '2023-05-05 06:27:44');

-- Dumping structure for table gutierritosdb.facturas
CREATE TABLE IF NOT EXISTS `facturas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `clienteid` int DEFAULT NULL,
  `empleadoid` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_facturas_clientes` (`clienteid`),
  KEY `FK_facturas_empleados` (`empleadoid`),
  CONSTRAINT `FK_facturas_clientes` FOREIGN KEY (`clienteid`) REFERENCES `clientes` (`id`),
  CONSTRAINT `FK_facturas_empleados` FOREIGN KEY (`empleadoid`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.facturas: ~0 rows (approximately)
INSERT INTO `facturas` (`id`, `fecha`, `clienteid`, `empleadoid`, `createdAt`, `updatedAt`) VALUES
	(1, '2023-05-05', 1, 1, '2023-05-05 06:38:56', '2023-05-05 06:38:56');

-- Dumping structure for table gutierritosdb.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `estado` varchar(2048) DEFAULT NULL,
  `productoid` int DEFAULT NULL,
  `proveedorid` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pedidos_productos` (`productoid`),
  KEY `FK_pedidos_proveedores` (`proveedorid`),
  CONSTRAINT `FK_pedidos_productos` FOREIGN KEY (`productoid`) REFERENCES `productos` (`id`),
  CONSTRAINT `FK_pedidos_proveedores` FOREIGN KEY (`proveedorid`) REFERENCES `proveedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.pedidos: ~0 rows (approximately)
INSERT INTO `pedidos` (`id`, `fecha`, `estado`, `productoid`, `proveedorid`, `createdAt`, `updatedAt`) VALUES
	(1, '2023-05-05', 'activo', 1, 1, '2023-05-05 06:40:26', '2023-05-05 06:40:26');

-- Dumping structure for table gutierritosdb.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `imagen` varchar(2048) DEFAULT NULL,
  `descripcion` varchar(2048) DEFAULT NULL,
  `precio` varchar(2048) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `categoriaid` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_categorias` (`categoriaid`),
  CONSTRAINT `FK_productos_categorias` FOREIGN KEY (`categoriaid`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.productos: ~0 rows (approximately)
INSERT INTO `productos` (`id`, `nombre`, `imagen`, `descripcion`, `precio`, `stock`, `categoriaid`, `createdAt`, `updatedAt`) VALUES
	(1, 'Multímetro', 'https://seir.com.gt/wp-content/uploads/2022/12/MUT-105.jpg', 'Aparato electrónico', '12', 14, 1, '2023-05-05 06:38:17', '2023-05-05 06:38:17');

-- Dumping structure for table gutierritosdb.proveedores
CREATE TABLE IF NOT EXISTS `proveedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `telefono` varchar(2048) DEFAULT NULL,
  `direccion` varchar(2048) DEFAULT NULL,
  `correo` varchar(2048) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.proveedores: ~0 rows (approximately)
INSERT INTO `proveedores` (`id`, `nombre`, `telefono`, `direccion`, `correo`, `createdAt`, `updatedAt`) VALUES
	(1, 'wallmart', '239847', '3 calle 3-3 zona 3 quetgo.', 'wallmart@hotmail.com', '2023-05-05 01:22:12', '2023-05-05 01:22:19');

-- Dumping structure for table gutierritosdb.puestos
CREATE TABLE IF NOT EXISTS `puestos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `salario` varchar(2048) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.puestos: ~0 rows (approximately)
INSERT INTO `puestos` (`id`, `nombre`, `salario`, `createdAt`, `updatedAt`) VALUES
	(1, 'Dueño', '214', '2023-05-05 01:22:59', '2023-05-05 01:22:59'),
	(2, 'Gerente', '1000', '2023-05-05 01:22:59', '2023-05-05 01:22:59'),
	(3, 'Secretariado', '512', '2023-05-04 23:56:51', '2023-05-04 23:56:52'),
	(4, 'Contabilidad', '256', '2023-05-04 23:57:25', '2023-05-04 23:57:26'),
	(5, 'Cajero', '256', '2023-05-04 23:58:26', '2023-05-04 23:58:29');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
