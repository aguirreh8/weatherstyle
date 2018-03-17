DROP DATABASE IF EXISTS weather_style_db;

CREATE DATABASE weather_style_db;

USE weather_style_db;

CREATE TABLE user (
  id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  name VARCHAR(30) NOT NULL,
  password VARCHAR(11), 
  gender VARCHAR(10) NOT NULL
    CHECK (gender IN ("masaculine","feminine")),
  email VARCHAR(30), 
  zip INTEGER(10),   
  PRIMARY KEY (id)
);

CREATE TABLE bottoms (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  type VARCHAR(20),
  gender VARCHAR(10) NOT NULL
      CHECK (gender IN ("masaculine","feminine","both")),
  sunny BOOLEAN NOT NULL,
  rainy BOOLEAN NOT NULL,
  overcast BOOLEAN NOT NULL,
  snowing BOOLEAN NOT NULL,
  tempbl20 BOOLEAN NOT NULL,
  tempbt2044 BOOLEAN NOT NULL,
  tempbt4565 BOOLEAN NOT NULL,
  tempbt6585 BOOLEAN NOT NULL,
  temp85up BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE shoes (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  type VARCHAR(20),
  gender VARCHAR(10) NOT NULL
      CHECK (gender IN ("masaculine","feminine","both")),
  sunny BOOLEAN NOT NULL,
  rainy BOOLEAN NOT NULL,
  overcast BOOLEAN NOT NULL,
  snowing BOOLEAN NOT NULL,
  tempbl20 BOOLEAN NOT NULL,
  tempbt2044 BOOLEAN NOT NULL,
  tempbt4565 BOOLEAN NOT NULL,
  tempbt6585 BOOLEAN NOT NULL,
  temp85up BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE outerwear (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  type VARCHAR(20),
  gender VARCHAR(10) NOT NULL
      CHECK (gender IN ("masaculine","feminine","both")),
  sunny BOOLEAN NOT NULL,
  rainy BOOLEAN NOT NULL,
  overcast BOOLEAN NOT NULL,
  snowing BOOLEAN NOT NULL,
  tempbl20 BOOLEAN NOT NULL,
  tempbt2044 BOOLEAN NOT NULL,
  tempbt4565 BOOLEAN NOT NULL,
  tempbt6585 BOOLEAN NOT NULL,
  temp85up BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);