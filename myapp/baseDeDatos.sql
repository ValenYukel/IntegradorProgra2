CREATE SCHEMA "catalogo" ;
USE catalogo;


CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  contra VARCHAR(100) NOT NULL,
  email VARCHAR(45) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);



INSERT INTO `usuarios` VALUES (DEFAULT,'Benja','Bxo12345','borchansky@udesa.edu.ar', DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Valen','Vxo12345','vyukelson@udesa.edu.ar', DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Maxi','Mxo12345','mfreijomil@udesa.edu.ar', DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Luciano','Lxo12345','lpeirano@udesa.edu.ar', DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Pedro','Pxo12345','pguyot@udesa.edu.ar', DEFAULT, DEFAULT, DEFAULT);



CREATE TABLE `productos` (
  id INT unsigned PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  imagen VARCHAR(200) DEFAULT 'default-image.png',
  descripcion VARCHAR(500) DEFAULT 'No hay descripción del producto disponible, lo sentimos',
  usuario_id INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);



INSERT INTO `productos` VALUES (DEFAULT,'Collar Azul','img-collar-perro-azul.jpg','Mucho valor sentimental',4, DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Cepillo para perros grandes','img-cepillo.jpg','Super util',4, DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Comida para gato menor al año Whiskas','img-comida-gato-whiskas.jpg','No hay descripción del producto disponible, lo sentimos',1, DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Comida para perro cachorro grande Royal Canin','img-comida-perro-royal.jpg','Precio sujeto a cambios',2, DEFAULT, DEFAULT, DEFAULT),(DEFAULT,'Pelota de Tenis','img-pelota-tenis.jpg','Una pelota',5, DEFAULT, DEFAULT, DEFAULT);

