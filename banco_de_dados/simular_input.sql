USE jey_db;

/* Inserindo users */

INSERT INTO Usuario (email_user, username_user, bio_user, pron_user, url_foto_user)
VALUES 
('joao@email.com', 'joaohenrique', 'Estudante de TI', 'ele/dele', 'foto1.jpg'),
('maria@email.com', 'maria_dev', 'Dev frontend', 'ela/dela', 'foto2.jpg'),
('carlos@email.com', 'carlos_code', 'Backend lover', 'ele/dele', 'foto3.jpg');


SELECT * FROM usuario;

/* Inserindo videos */

INSERT INTO Video (email_user, assunto_video, descricao_video, thumbnail_video_url)
VALUES
('maria@email.com', 'React Hooks', 'Explicando useState e useEffect', 'thumb1.jpg'),
('carlos@email.com', 'Node API', 'Criando API REST com Express', 'thumb2.jpg');

SELECT * FROM video;

/* João segue Maria e Carlos */

INSERT INTO Segue (email_seguidor, email_seguindo)
VALUES
('joao@email.com', 'maria@email.com'),
('joao@email.com', 'carlos@email.com');

SELECT * FROM segue;

/* Criando uma playlist */

INSERT INTO Playlist (visibilidade, email_user)
VALUES ('publico', 'joao@email.com');

SELECT * FROM playlist;

/* colocando vidio na playlist */

INSERT INTO Contem_video (id_video, id_playlist)
VALUES
(1, 1),
(2, 1);

SELECT * FROM contem_video;

/* comentario */

INSERT INTO Comentar_video (id_video, email_user, conteudo_comentario)
VALUES (1, 'joao@email.com', 'Excelente explicação!');

SELECT * FROM comentar_video;

/* like */

INSERT INTO like_video (id_video, email_user)
VALUES (1, 'joao@email.com');

SELECT * FROM like_video;