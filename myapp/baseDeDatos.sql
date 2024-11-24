CREATE SCHEMA "catalogo" ;
USE catalogo;

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `imagen` varchar(200) DEFAULT 'default-image.png',
  `descripcion` varchar(500) DEFAULT 'No hay descripción del producto disponible, lo sentimos',
  `usuario_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario_clave_idx` (`usuario_id`),
  CONSTRAINT `id_usuarios_clave` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) 

LOCK TABLES `productos` WRITE;

INSERT INTO `productos` VALUES (1,'Collar Azul','img-collar-perro-azul.jpg','Mucho valor sentimental',4),(2,'Cepillo para perros grandes','default-image.png','Super util',4),(3,'Comida para gato menor al año Whiskas','img-comida-gato-whiskas','No hay descripción del producto disponible, lo sentimos',1),(4,'Comida para perro cachorro grande Royal Canin','img-comida-perro-royal.jpg','Precio sujeto a cambios',2),(5,'Pelota de Tenis','img-pelota-tenis.jpg','Una pelota',5);

UNLOCK TABLES;



DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `contra` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) 

LOCK TABLES `usuarios` WRITE;

INSERT INTO `usuarios` VALUES (1,'Benja','Bxo12345','borchansky@udesa.edu.ar'),(2,'Valen','Vxo12345','vyukelson@udesa.edu.ar'),(3,'Maxi','Mxo12345','mfreijomil@udesa.edu.ar'),(4,'Luciano','Lxo12345','lpeirano@udesa.edu.ar'),(5,'Pedro','Pxo12345','pguyot@udesa.edu.ar');

UNLOCK TABLES;

ALTER TABLE productos 
ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
ADD COLUMN deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP;