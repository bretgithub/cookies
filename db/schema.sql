DROP DATABASE IF EXISTS cookies_db;
CREATE DATABASE cookies_db;
USE cookies_db;

CREATE TABLE cookies
(
    id INT
    AUTO_INCREMENT PRIMARY KEY,
    cookie_flavor VARCHAR
    (30) NOT NULL,
    crumbled BOOLEAN DEFAULT false
);