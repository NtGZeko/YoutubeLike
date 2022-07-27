-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: youtube_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_esperanto_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_esperanto_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Musique'),(2,'Jeux Video'),(3,'Documentaire'),(4,'Tutorial');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `channels`
--

DROP TABLE IF EXISTS `channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8_esperanto_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8_esperanto_ci DEFAULT NULL,
  `banner` varchar(255) COLLATE utf8_esperanto_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_esperanto_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channels`
--

LOCK TABLES `channels` WRITE;
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
INSERT INTO `channels` VALUES (1,'Bienvenu sur la page de toto','https://images.assetsdelivery.com/compings_v2/yod67/yod671603/yod67160300036.jpg','https://image.shutterstock.com/image-vector/abstract-wavy-fluid-spherical-gradient-600w-1478820479.jpg'),(2,'Bienvenu sur la page de toto','https://images.assetsdelivery.com/compings_v2/patthana/patthana1510/patthana151000012.jpg','https://image.shutterstock.com/image-photo/highway-landscape-colorful-sunset-road-600w-2172624527.jpg');
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video` varchar(255) COLLATE utf8_esperanto_ci NOT NULL,
  `title` varchar(100) COLLATE utf8_esperanto_ci NOT NULL,
  `descvideo` varchar(255) COLLATE utf8_esperanto_ci NOT NULL,
  `category_id` int DEFAULT NULL,
  `channels_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contents_category1_idx` (`category_id`),
  KEY `fk_contents_channels1_idx` (`channels_id`),
  CONSTRAINT `fk_contents_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_contents_channels1` FOREIGN KEY (`channels_id`) REFERENCES `channels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_esperanto_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents`
--

LOCK TABLES `contents` WRITE;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` VALUES (1,'https://www.youtube.com/channel/UCL9aTJb0ur4sovxcppAopEw','7 Jours pour survivre Seul sur une Île Déserte !','La vidéo tant attendue est enfin là ! ',NULL,1),(2,'https://www.youtube.com/watch?v=82qLEwCGjxk&ab_channel=Anicrad','Sword Art Online: Unleash Blading - Opening 1','Song: Gyakkyo Spectrum',1,2),(3,'https://www.youtube.com/watch?v=vvRQwUMipwo&t=1s&ab_channel=Slipix-LeagueofLegends','POURQUOI JOUER RUMBLE QUAND CRUMBLE EXISTE ?',' Gagne des skins gratuitement',2,1);
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(90) COLLATE utf8_esperanto_ci NOT NULL,
  `pseudo` varchar(20) COLLATE utf8_esperanto_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_esperanto_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`mail`),
  UNIQUE KEY `pseudo_UNIQUE` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_esperanto_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'toto@mail.com','toto','totopass'),(2,'tata@mail.com','tata','tatapass');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_channels`
--

DROP TABLE IF EXISTS `users_has_channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_has_channels` (
  `users_id` int NOT NULL,
  `channels_id` int NOT NULL,
  PRIMARY KEY (`users_id`,`channels_id`),
  KEY `fk_users_has_channels_channels1_idx` (`channels_id`),
  KEY `fk_users_has_channels_users1_idx` (`users_id`),
  CONSTRAINT `fk_users_has_channels_channels1` FOREIGN KEY (`channels_id`) REFERENCES `channels` (`id`),
  CONSTRAINT `fk_users_has_channels_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_esperanto_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_channels`
--

LOCK TABLES `users_has_channels` WRITE;
/*!40000 ALTER TABLE `users_has_channels` DISABLE KEYS */;
INSERT INTO `users_has_channels` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `users_has_channels` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-27 11:34:31
