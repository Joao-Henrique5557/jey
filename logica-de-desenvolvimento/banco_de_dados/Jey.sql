CREATE DATABASE IF NOT EXISTS jey_db;

USE jey_db;

CREATE TABLE IF NOT EXISTS Usuario (
    email_user varchar(255) primary key,
    username_user varchar(40) not null,

    bio_user varchar(255),
    pron_user varchar(10),
    url_foto_user varchar(255)
)