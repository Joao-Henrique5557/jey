DROP DATABASE IF EXISTS jey_db;

CREATE DATABASE IF NOT EXISTS jey_db;

USE jey_db;

/* Relacionamento 1:n */

CREATE TABLE IF NOT EXISTS Usuario (
    email_user varchar(255) primary key,
    username_user varchar(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    bio_user varchar(255),
    pron_user varchar(10),
    url_foto_user varchar(255)
);

CREATE TABLE IF NOT EXISTS playlist (
    id_playlist int primary key auto_increment,
    visibilidade enum("publico", "privado") not null,
    email_user varchar(255) not null,

    foreign key (email_user) references Usuario(email_user) on delete cascade
);

CREATE TABLE IF NOT EXISTS Artigo (
    id_artigo int primary key auto_increment,
    email_user varchar(255) not null,
    assunto_artigo varchar(30) not null,
    conteudo_artigo text not null,
    thumbnail_artigo varchar(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    foreign key (email_user) references Usuario(email_user) on delete cascade
);

CREATE TABLE IF NOT EXISTS Video (
    id_video int primary key auto_increment,
    email_user varchar(255) not null,
    assunto_video varchar(30) not null,
    descricao_video varchar(255) not null,
    thumbnail_video_url varchar(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    foreign key (email_user) references Usuario(email_user) on delete cascade
);

/* Relacionamento n:n */

/* Relacionamentos para a playlist */

CREATE TABLE Segue (
    email_seguidor VARCHAR(255) not null,
    email_seguindo VARCHAR(255) not null,

    check (email_seguidor <> email_seguindo),
    
    primary key (email_seguindo, email_seguidor),
    foreign key (email_seguidor) references Usuario(email_user) on delete cascade,
    foreign key (email_seguindo) references Usuario(email_user) on delete cascade
);

/* Contem, tabela que diz o relacionamento entre duas tabelas */
/* Não pode-se ter o mesmo vidio duas vezes na mesma playlist */

CREATE TABLE Contem_video (
    id_video int not null,
    id_playlist int not null,

    primary key (id_video, id_playlist),
    foreign key (id_video) references Video(id_video) on delete cascade,
    foreign key (id_playlist) references Playlist(id_playlist) on delete cascade
);

CREATE TABLE Contem_artigo (
    id_artigo int not null,
    id_playlist int not null,

    primary key (id_artigo, id_playlist),
    foreign key (id_artigo) references Artigo(id_artigo) on delete cascade,
    foreign key (id_playlist) references Playlist(id_playlist) on delete cascade
);

/* Relacionamentos para comentar */
/* Relacionamento de criar, aumentar like. pode-se ter mais de um usuario que dar like */

CREATE TABLE Comentar_video (
    id_comentar_video int primary key auto_increment,
    id_video int not null,
    email_user varchar(255) not null,
    conteudo_comentario text not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    foreign key (id_video) references Video(id_video),
    foreign key (email_user) references Usuario(email_user) on delete cascade
);

CREATE TABLE Comentar_artigo (
    id_Comentar_artigo int primary key auto_increment,
    id_artigo int not null,
    email_user varchar(255) not null,
    conteudo_comentario text not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    foreign key (id_artigo) references Artigo(id_artigo),
    foreign key (email_user) references Usuario(email_user) on delete cascade
);

/* Relacionamentos para dar like */
/* O usuario só pode dar um like por vidio/artigo */
CREATE TABLE like_video (
    id_video int not null,
    email_user varchar(255) not null,

    primary key (id_video, email_user),
    foreign key (id_video) references Video(id_video),
    foreign key (email_user) references Usuario(email_user) on delete cascade
);

CREATE TABLE like_artigo (
    id_artigo int not null,
    email_user varchar(255) not null,

    primary key (id_artigo, email_user),
    foreign key (id_artigo) references Artigo(id_artigo),
    foreign key (email_user) references Usuario(email_user) on delete cascade
);