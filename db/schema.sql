DROP DATABASE IF EXISTS weather_style_db;

CREATE DATABASE weather_style_db;

USE weather_style_db;

CREATE TABLE user (
  id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  name VARCHAR(30) NOT NULL,
  password VARCHAR(11), 
  gender VARCHAR(10) NOT NULL,
  email VARCHAR(30), 
  zip VARCHAR(10),   
  PRIMARY KEY (id)
);

Create Table outfits (
	id int auto_increment NOT NULL,
	outfit varchar(50),
	photo varchar(100),
	gender varchar(20),
    occasion varchar(20),
	tempbl20 BOOLEAN NOT NULL,
	tempbt2044 BOOLEAN NOT NULL,
	tempbt4565 BOOLEAN NOT NULL,
	tempbt6585 BOOLEAN NOT NULL,
	temp85up BOOLEAN NOT NULL,
	weather_condition varchar(20),
    PRIMARY KEY (id)
);
