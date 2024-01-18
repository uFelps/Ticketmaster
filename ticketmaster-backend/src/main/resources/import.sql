INSERT INTO TB_USER(nome, email, senha, telefone, cpf, cidade, shows, festivais, pontuacao, role) VALUES('Felipe Sandes', 'felipe@gmail.com', '$2a$12$pR.LGiR8cLEMVfQFEtuEmuf8Rm6zZFKcSyN9IqYnfT/brkiopmsju', '11 99444-9772', '542.733.028-37','São Paulo', 0, 0, 0.0, 1);

INSERT INTO ARTISTA(nome) VALUES('Coldplay');
INSERT INTO ARTISTA(nome) VALUES('Red Hot Chili Peppers');
INSERT INTO ARTISTA(nome) VALUES('Foo Fighters');
INSERT INTO ARTISTA(nome) VALUES('Taylor Swift');


INSERT INTO TOUR(nome, img_tour, artista) VALUES ('Music Of The Spheres World Tour', 'url', 1);
INSERT INTO TOUR(nome, img_tour, artista) VALUES ('Unlimited Love World Tour', 'url', 2);
INSERT INTO TOUR(nome, img_tour, artista) VALUES ('Everthing or Nothing at All Tour', 'url', 3);
INSERT INTO TOUR(nome, img_tour, artista) VALUES ('The Eras Tour', 'url', 4);


INSERT INTO CIDADE(nome) VALUES('Rio de Janeiro')
INSERT INTO CIDADE(nome) VALUES('Brasilia')
INSERT INTO CIDADE(nome) VALUES('São Paulo')
INSERT INTO CIDADE(nome) VALUES('Curitiba')
INSERT INTO CIDADE(nome) VALUES('Porto Alegre')

INSERT INTO ESPACO(nome, img_mapa) VALUES('Engenhão', 'url');
INSERT INTO ESPACO(nome, img_mapa) VALUES('Mané Garrincha', 'url');
INSERT INTO ESPACO(nome, img_mapa) VALUES('Allianz Parque', 'url');
INSERT INTO ESPACO(nome, img_mapa) VALUES('Couto Pereira', 'url');
INSERT INTO ESPACO(nome, img_mapa) VALUES('Arena do Grêmio', 'url');

--coldplay
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(1, 1, 1, 1, '2024-11-04 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(1, 1, 2, 2, '2024-11-07 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(1, 1, 3, 3, '2024-11-10 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(1, 1, 4, 4, '2024-11-13 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(1, 1, 5, 5, '2024-11-16 21:00:00');

--red hot chili peppers
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(2, 2, 1, 1, '2024-11-04 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(2, 2, 2, 2, '2024-11-07 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(2, 2, 3, 3, '2024-11-10 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(2, 2, 4, 4, '2024-11-13 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(2, 2, 5, 5, '2024-11-16 21:00:00');

--foo fighters
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(3, 3, 1, 1, '2024-11-04 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(3, 3, 2, 2, '2024-11-07 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(3, 3, 3, 3, '2024-11-10 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(3, 3, 4, 4, '2024-11-13 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(3, 3, 5, 5, '2024-11-16 21:00:00');

--taylor swift
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(4, 4, 1, 1, '2024-11-04 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(4, 4, 2, 2, '2024-11-07 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(4, 4, 3, 3, '2024-11-10 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(4, 4, 4, 4, '2024-11-13 21:00:00');
INSERT INTO SHOW(artista, tour, espaco, cidade, data) VALUES(4, 4, 5, 5, '2024-11-16 21:00:00');