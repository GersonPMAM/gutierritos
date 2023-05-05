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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.categorias: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.clientes: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.detallefacturas: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.empleados: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.facturas: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.pedidos: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.productos: ~0 rows (approximately)

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.proveedores: ~0 rows (approximately)

-- Dumping structure for table gutierritosdb.puestos
CREATE TABLE IF NOT EXISTS `puestos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(2048) DEFAULT NULL,
  `salario` varchar(2048) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table gutierritosdb.puestos: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
