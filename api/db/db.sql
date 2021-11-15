DROP DATABASE IF EXISTS museo_shrek;
CREATE DATABASE museo_shrek;

USE museo_shrek;

CREATE TABLE usuarios
(
	id_usuario INT NOT NULL auto_increment,
    nombre VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE personajes
(
	id_personaje INT NOT NULL auto_increment,
    nombre VARCHAR(45) NOT NULL,
    foto VARCHAR(200) NOT NULL,
    galeria MEDIUMTEXT NOT NULL,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id_personaje)
);