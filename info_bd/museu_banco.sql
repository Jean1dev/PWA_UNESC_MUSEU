-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: museu_bd
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agendamento` (
  `id_agendamento` int(11) NOT NULL AUTO_INCREMENT,
  `instituicao` varchar(60) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `telefone_secundario` varchar(15) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `data_visita` datetime NOT NULL,
  `numero_visitantes` int(11) DEFAULT NULL,
  `turno` varchar(15) DEFAULT NULL,
  `responsavel_visita` varchar(80) NOT NULL,
  `cnpj` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id_agendamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animais`
--

DROP TABLE IF EXISTS `animais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animais` (
  `id_animais` int(11) NOT NULL AUTO_INCREMENT,
  `nome_animal` varchar(45) NOT NULL,
  `nome_cientifico` varchar(45) NOT NULL,
  `ordem_animal` varchar(45) NOT NULL,
  `familia_animal` varchar(45) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `distribuicao` varchar(255) NOT NULL,
  `descricao_geografica` varchar(255) NOT NULL,
  `habito_alimentar` varchar(255) NOT NULL,
  `pruducao` varchar(200) NOT NULL,
  `periodo_vida` varchar(200) NOT NULL,
  `habitat` varchar(200) NOT NULL,
  `info_museu_id_info_museu` int(11) NOT NULL,
  PRIMARY KEY (`id_animais`),
  KEY `fk_animais_info_museu1_idx` (`info_museu_id_info_museu`),
  CONSTRAINT `fk_animais_info_museu1` FOREIGN KEY (`info_museu_id_info_museu`) REFERENCES `info_museu` (`id_info_museu`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animais`
--

LOCK TABLES `animais` WRITE;
/*!40000 ALTER TABLE `animais` DISABLE KEYS */;
/*!40000 ALTER TABLE `animais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animais_has_foto`
--

DROP TABLE IF EXISTS `animais_has_foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animais_has_foto` (
  `animais_id_animais` int(11) NOT NULL,
  `foto_id_foto` int(11) NOT NULL,
  PRIMARY KEY (`animais_id_animais`,`foto_id_foto`),
  KEY `fk_animais_has_foto_foto1_idx` (`foto_id_foto`),
  KEY `fk_animais_has_foto_animais_idx` (`animais_id_animais`),
  CONSTRAINT `fk_animais_has_foto_animais` FOREIGN KEY (`animais_id_animais`) REFERENCES `animais` (`id_animais`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_animais_has_foto_foto1` FOREIGN KEY (`foto_id_foto`) REFERENCES `foto` (`id_foto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animais_has_foto`
--

LOCK TABLES `animais_has_foto` WRITE;
/*!40000 ALTER TABLE `animais_has_foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `animais_has_foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foto` (
  `id_foto` int(11) NOT NULL AUTO_INCREMENT,
  `end_foto` varchar(80) NOT NULL,
  `info_museu_id_info_museu` int(11) NOT NULL,
  PRIMARY KEY (`id_foto`),
  KEY `fk_foto_info_museu1_idx` (`info_museu_id_info_museu`),
  CONSTRAINT `fk_foto_info_museu1` FOREIGN KEY (`info_museu_id_info_museu`) REFERENCES `info_museu` (`id_info_museu`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto`
--

LOCK TABLES `foto` WRITE;
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_museu`
--

DROP TABLE IF EXISTS `info_museu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info_museu` (
  `id_info_museu` int(11) NOT NULL AUTO_INCREMENT,
  `local` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `data_fundacao` date NOT NULL,
  PRIMARY KEY (`id_info_museu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_museu`
--

LOCK TABLES `info_museu` WRITE;
/*!40000 ALTER TABLE `info_museu` DISABLE KEYS */;
/*!40000 ALTER TABLE `info_museu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(80) NOT NULL,
  `senha_usuario` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `info_museu_id_info_museu` int(11) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `fk_usuario_info_museu1_idx` (`info_museu_id_info_museu`),
  CONSTRAINT `fk_usuario_info_museu1` FOREIGN KEY (`info_museu_id_info_museu`) REFERENCES `info_museu` (`id_info_museu`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-27 21:31:39
