INSERT INTO TB_USER(nome, email, senha, telefone, cpf, cidade, shows, festivais, pontuacao, role) VALUES('Felipe Sandes', 'felipe@gmail.com', '$2a$12$pR.LGiR8cLEMVfQFEtuEmuf8Rm6zZFKcSyN9IqYnfT/brkiopmsju', '11 99444-9772', '542.733.028-37','São Paulo', 0, 0, 0.0, 1);

INSERT INTO ARTISTA(nome) VALUES('Coldplay');
INSERT INTO ARTISTA(nome) VALUES('Red Hot Chili Peppers');
INSERT INTO ARTISTA(nome) VALUES('Foo Fighters');
INSERT INTO ARTISTA(nome) VALUES('Taylor Swift');
INSERT INTO ARTISTA(nome) VALUES('Beyonce');
INSERT INTO ARTISTA(nome) VALUES('Arctic Monkeys');
INSERT INTO ARTISTA(nome) VALUES('Tame Impala');
INSERT INTO ARTISTA(nome) VALUES('Rage Against the Machine');
INSERT INTO ARTISTA(nome) VALUES('Post Malone');
INSERT INTO ARTISTA(nome) VALUES('Queens of The Stone Age');
INSERT INTO ARTISTA(nome) VALUES('Dua Lipa');
INSERT INTO ARTISTA(nome) VALUES('Roger Waters');
INSERT INTO ARTISTA(nome) VALUES('Paul McCartney');
INSERT INTO ARTISTA(nome) VALUES('Tyler, The Creator');
INSERT INTO ARTISTA(nome) VALUES('The 1975');
INSERT INTO ARTISTA(nome) VALUES('Zara Larson');
INSERT INTO ARTISTA(nome) VALUES('Harry Styles');
INSERT INTO ARTISTA(nome) VALUES('Halsey');
INSERT INTO ARTISTA(nome) VALUES('Metallica');
INSERT INTO ARTISTA(nome) VALUES('Pearl Jam');
INSERT INTO ARTISTA(nome) VALUES('Kendrick Lamar');
INSERT INTO ARTISTA(nome) VALUES('Radiohead');
INSERT INTO ARTISTA(nome) VALUES('Imagine Dragons');
INSERT INTO ARTISTA(nome) VALUES('Katy Perry');
INSERT INTO ARTISTA(nome) VALUES('Twenty One Pilots');
INSERT INTO ARTISTA(nome) VALUES('Demi Lovato');
INSERT INTO ARTISTA(nome) VALUES('Iron Maiden');
INSERT INTO ARTISTA(nome) VALUES('Travis Scott');
INSERT INTO ARTISTA(nome) VALUES('Kayne West');
INSERT INTO ARTISTA(nome) VALUES('Frank Ocean');



INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Music Of The Spheres World Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/coldplay.png?raw=true', '/coldplay', 1, 'destaque');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Unlimited Love World Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/red%20hot.png?raw=true', '/redhotchilipeppers', 2, 'destaque');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Everthing or Nothing at All Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/Foo-Fighters.jpg?raw=true', '/foofighters', 3, 'destaque');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('The Eras Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/taylor.png?raw=true', '/taylorswift', 4, 'destaque');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Renaissance World Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/beyonce.png?raw=true', '/beyonce', 5, 'evento');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/am.png?raw=true', '/arcticmonkeys', 6, 'evento');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('The Slow Rush Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/tame%20imapla.png?raw=true', '/tameimpala', 7, 'evento');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Public Service Announcement Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/rage.jpg?raw=true', '/ratm', 8, 'rock');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Austin World Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/post%20malone.jpeg?raw=true', '/postmalone', 9, '');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('The End is Nero Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/qotsa.jpg?raw=true', '/qotsa', 10, 'rock');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Future Nostalgia Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/Dua-Lipa.jpg?raw=true', '/dualipa', 11, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('This is Not a Drill Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/roger.jpg?raw=true', '/rogerwaters', 12, 'emalta');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Got a Back Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/paul.png?raw=true', '/paulmccartney', 13, 'rock');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/tyler.jpg?raw=true', '/tylerthecreator', 14, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/the-1975.jpg?raw=true', '/the1945', 15, 'alternative');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Honor The Light Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/zara.jpeg?raw=true', '/zaralarson', 16, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Love on Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/harrystyles.png?raw=true', '/harrystyles', 17, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/halsey.jpg?raw=true', '/halsey', 18, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('M72 World Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/metallica.jpeg?raw=true', '/metallica', 19, 'rock');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/peral%20jam.jpeg?raw=true', '/pearljam', 20, 'rock');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('The Big Steppers Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/kendrick.jpeg?raw=true', '/kendricklamar', 21, 'hiphop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('In Rainbows Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/radiohead.jpg?raw=true', '/radiohead', 22, 'alternative');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/imaginedragons.png?raw=true', '/imaginedragons', 23, 'alternative');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/katy.jpeg?raw=true', '/katyperry', 24, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/twentyonepilots.png?raw=true', '/twentyonepilots', 25, 'alternative');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/demi.jpeg?raw=true', '/demilovato', 26, 'pop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Future and Past Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/iron%20maiden.jpeg?raw=true', '/ironmaiden', 27, 'rock');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Utopia Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/travvis.jpeg?raw=true', '/travisscott', 28, 'hiphop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Latin American Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/kanye.png?raw=true', '/kanyewest', 29, 'hiphop');
INSERT INTO TOUR(nome, img_tour, link, artista, categoria) VALUES ('Frank Ocean Tour', 'https://github.com/uFelps/assets/blob/main/Ticketmaster/cards/frank-ocean.jpg?raw=true', '/frankocean', 30, 'hiphop');




INSERT INTO CIDADE(nome) VALUES('São Paulo');--1
INSERT INTO CIDADE(nome) VALUES('Rio de Janeiro');--2
INSERT INTO CIDADE(nome) VALUES('Curitiba');--3
INSERT INTO CIDADE(nome) VALUES('Porto Alegre');--4
INSERT INTO CIDADE(nome) VALUES('Belo Horizonte');--5
INSERT INTO CIDADE(nome) VALUES('Brasilia');--6


INSERT INTO ESPACO(nome, img_mapa) VALUES('Allianz Parque', 'url');--1
INSERT INTO ESPACO(nome, img_mapa) VALUES('Morumbi', 'url');--2
INSERT INTO ESPACO(nome, img_mapa) VALUES('Espaço Unimed', 'url');--3
INSERT INTO ESPACO(nome, img_mapa) VALUES('Engenhão', 'url');--4
INSERT INTO ESPACO(nome, img_mapa) VALUES('Maracanã', 'url');--5
INSERT INTO ESPACO(nome, img_mapa) VALUES('Rio Arena', 'url');--6
INSERT INTO ESPACO(nome, img_mapa) VALUES('Couto Pereira', 'url');--7
INSERT INTO ESPACO(nome, img_mapa) VALUES('Arena da Baixada', 'url');--8
INSERT INTO ESPACO(nome, img_mapa) VALUES('Arena do Grêmio', 'url');--9
INSERT INTO ESPACO(nome, img_mapa) VALUES('Beira Rio', 'url');--10
INSERT INTO ESPACO(nome, img_mapa) VALUES('Arena MRV', 'url');--11
INSERT INTO ESPACO(nome, img_mapa) VALUES('Mané Garrincha', 'url');--12



--coldplay

INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(1, 1, 1, 2, '2025-01-20 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(1, 1, 2, 4, '2025-01-23 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(1, 1, 3, 7, '2025-01-26 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(1, 1, 4, 10, '2025-01-29 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(1, 1, 5, 11, '2025-01-20 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(1, 1, 6, 12, '2025-01-23 21:00:00');



--red hot chili peppers
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(2, 2, 2, 4, '2024-11-04 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(2, 2, 6, 12, '2024-11-07 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(2, 2, 1, 2, '2024-11-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(2, 2, 3, 7, '2024-11-13 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(2, 2, 4, 9, '2024-11-16 21:00:00');

--foo fighters
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(3, 3, 1, 1, '2025-02-01 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(3, 3, 2, 5, '2025-02-03 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(3, 3, 3, 7, '2025-02-05 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(3, 3, 4, 10, '2025-02-07 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(3, 3, 5, 11, '2025-02-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(3, 3, 6, 12, '2025-02-12 21:00:00');


--taylor swift
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(4, 4, 1, 1, '2025-02-15 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(4, 4, 2, 4, '2025-02-17 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(4, 4, 3, 8, '2025-02-19 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(4, 4, 4, 10, '2025-02-21 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(4, 4, 5, 11, '2025-02-23 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(4, 4, 6, 12, '2025-02-25 21:00:00');

--beyonce
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(5, 5, 1, 2, '2025-02-28 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(5, 5, 2, 5, '2025-03-01 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(5, 5, 3, 7, '2025-03-03 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(5, 5, 4, 10, '2025-03-05 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(5, 4, 5, 11, '2025-03-07 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(5, 4, 6, 12, '2025-03-10 21:00:00');

--arctic monkeys
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(6, 6, 1, 1, '2025-03-13 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(6, 6, 2, 6, '2025-03-15 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(6, 6, 3, 8, '2025-03-17 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(6, 6, 4, 9, '2025-03-19 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(6, 6, 5, 11, '2025-03-21 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(6, 6, 6, 12, '2025-03-23 21:00:00');


--tame impala
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(7, 7, 1, 1, '2025-03-25 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(7, 7, 2, 6, '2025-03-27 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(7, 7, 3, 8, '2025-03-29 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(7, 7, 4, 9, '2025-03-31 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(7, 7, 5, 11, '2025-04-02 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(7, 7, 6, 12, '2025-04-04 21:00:00');


--rage against the machine
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(8, 8, 1, 1, '2025-04-06 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(8, 8, 2, 6, '2025-04-08 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(8, 8, 3, 8, '2025-04-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(8, 8, 4, 9, '2025-04-12 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(8, 8, 5, 11, '2025-04-14 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(8, 8, 6, 12, '2025-04-16 21:00:00');

--post malone
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(9, 9, 1, 3, '2025-04-18 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(9, 9, 2, 4, '2025-04-20 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(9, 9, 3, 8, '2025-04-22 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(9, 9, 4, 9, '2025-04-24 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(9, 9, 5, 11, '2025-04-26 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(9, 9, 6, 12, '2025-04-28 21:00:00');

--qotsa
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(10, 10, 1, 1, '2025-05-01 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(10, 10, 2, 4, '2025-05-03 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(10, 10, 3, 8, '2025-05-05 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(10, 10, 4, 9, '2025-05-07 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(10, 10, 5, 11, '2025-05-09 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(10, 10, 6, 12, '2025-05-11 21:00:00');

--dua lipa
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(11, 11, 1, 2, '2025-05-13 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(11, 11, 2, 5, '2025-05-15 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(11, 11, 3, 7, '2025-05-17 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(11, 11, 4, 10, '2025-05-19 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(11, 11, 5, 11, '2025-05-21 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(11, 11, 6, 12, '2025-05-23 21:00:00');

--roger waters
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(12, 12, 1, 2, '2025-05-25 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(12, 12, 2, 5, '2025-05-27 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(12, 12, 3, 7, '2025-05-29 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(12, 12, 4, 10, '2025-05-31 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(12, 12, 5, 11, '2025-06-02 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(12, 12, 6, 12, '2025-06-04 21:00:00');

--paul
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(13, 13, 1, 2, '2025-06-06 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(13, 13, 2, 5, '2025-06-08 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(13, 13, 3, 7, '2025-06-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(13, 13, 4, 10, '2025-06-12 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(13, 13, 5, 11, '2025-06-14 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(13, 13, 6, 12, '2025-06-16 21:00:00');

--tyler
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(14, 14, 1, 1, '2025-06-18 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(14, 14, 2, 6, '2025-06-20 21:00:00');

--tyler
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(15, 15, 1, 1, '2025-06-22 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(15, 15, 2, 6, '2025-06-24 21:00:00');

--the 1975
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(16, 16, 1, 1, '2025-06-26 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(16, 16, 4, 9, '2025-06-28 21:00:00');

--zara
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(17, 17, 1, 1, '2025-06-30 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(17, 17, 2, 4, '2025-07-01 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(17, 17, 5, 11, '2025-07-03 21:00:00');

--harry
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(18, 18, 1, 1, '2025-07-05 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(18, 18, 2, 4, '2025-07-07 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(18, 18, 3, 8, '2025-07-09 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(18, 18, 4, 9, '2025-07-11 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(18, 18, 5, 11, '2025-07-13 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(18, 18, 6, 12, '2025-07-15 21:00:00');

--halsey
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(19, 19, 1, 1, '2025-07-17 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(19, 19, 2, 4, '2025-07-19 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(19, 19, 6, 12, '2025-07-21 21:00:00');


--metallica
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(20, 20, 1, 2, '2025-07-23 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(20, 20, 2, 5, '2025-07-25 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(20, 20, 3, 7, '2025-07-27 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(20, 20, 4, 10, '2025-07-29 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(20, 20, 5, 11, '2025-07-31 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(20, 20, 6, 12, '2025-08-02 21:00:00');

--peral jam
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(21, 21, 1, 2, '2025-08-04 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(21, 21, 2, 4, '2025-08-06 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(21, 21, 3, 7, '2025-08-08 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(21, 21, 4, 10, '2025-08-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(21, 21, 5, 11, '2025-08-12 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(21, 21, 6, 12, '2025-08-14 21:00:00');

--kendrick
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(22, 22, 1, 1, '2025-08-16 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(22, 22, 2, 4, '2025-08-18 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(22, 22, 3, 8, '2025-08-20 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(22, 22, 4, 9, '2025-08-22 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(22, 22, 5, 11, '2025-08-24 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(22, 22, 6, 12, '2025-08-26 21:00:00');

--radiohead
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 1, 1, '2025-08-28 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 2, 4, '2025-08-30 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 3, 8, '2025-09-02 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 5, 11, '2025-09-04 21:00:00');

--id
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 1, 2, '2025-09-06 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 2, 6, '2025-09-08 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 3, 8, '2025-09-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(23, 23, 6, 12, '2025-09-12 21:00:00');

--katy
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(24, 24, 1, 1, '2025-09-14 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(24, 24, 2, 4, '2025-09-16 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(24, 24, 3, 8, '2025-09-18 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(24, 24, 4, 9, '2025-09-20 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(24, 24, 5, 11, '2025-09-22 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(24, 24, 6, 12, '2025-09-24 21:00:00');

--top
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(25, 25, 1, 1, '2025-10-01 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(25, 25, 2, 6, '2025-10-03 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(25, 25, 3, 8, '2025-10-05 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(25, 25, 5, 11, '2025-10-07 21:00:00');

--demi lovato
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(26, 26, 1, 1, '2025-10-09 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(26, 26, 2, 4, '2025-10-11 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(26, 26, 3, 7, '2025-10-13 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(26, 26, 4, 9, '2025-10-15 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(26, 26, 5, 11, '2025-10-17 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(26, 26, 6, 12, '2025-10-19 21:00:00');

--iron
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(27, 27, 1, 1, '2025-10-21 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(27, 27, 2, 4, '2025-10-23 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(27, 27, 3, 8, '2025-10-25 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(27, 27, 4, 9, '2025-10-27 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(27, 27, 5, 11, '2025-10-29 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(27, 27, 6, 12, '2025-10-31 21:00:00');

--
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(28, 28, 1, 1, '2025-11-02 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(28, 28, 2, 4, '2025-11-04 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(28, 28, 3, 8, '2025-11-06 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(28, 28, 4, 9, '2025-11-08 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(28, 28, 5, 11, '2025-11-10 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(28, 28, 6, 12, '2025-11-12 21:00:00');


INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(29, 29, 1, 1, '2025-11-14 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(29, 29, 2, 4, '2025-11-16 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(29, 29, 3, 8, '2025-11-18 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(29, 29, 4, 9, '2025-11-20 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(29, 29, 5, 11, '2025-11-22 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(29, 29, 6, 12, '2025-11-24 21:00:00');


INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(30, 30, 1, 1, '2025-12-01 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(30, 30, 2, 4, '2025-12-03 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(30, 30, 3, 8, '2025-12-05 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(30, 30, 4, 9, '2025-12-07 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(30, 30, 5, 11, '2025-12-09 21:00:00');
INSERT INTO SHOW(artista, tour, cidade, espaco, data) VALUES(30, 30, 6, 12, '2025-12-11 21:00:00');



