 CREATE TABLE artista (
    id bigserial not null,
    nome varchar(255),
    primary key (id)
);

CREATE TABLE carrinho (
    id bigserial not null,
    setor varchar(255),
    tipo varchar(255),
    valor float(53),
    show bigint,
    usuario bigint,
    primary key (id)
);

CREATE TABLE cartao (
    id bigserial not null,
    bandeira varchar(255),
    cvv varchar(255),
    num_identificador varchar(255),
    numero varchar(255),
    save_cartao boolean,
    titular varchar(255),
    validade varchar(255),
    usuario bigint,
    primary key (id)
);

CREATE TABLE cidade (
    id bigserial not null,
    nome varchar(255),
    primary key (id)
);

CREATE TABLE espaco (
    id bigserial not null,
    img varchar(255),
    img_mapa varchar(255),
    nome varchar(255),
    primary key (id)
);

CREATE TABLE ingresso (
    id bigserial not null,
    setor varchar(255),
    status smallint check (status between 0 and 1),
    tipo varchar(255),
    valor float(53),
    pedido bigint,
    show bigint,
    usuario bigint,
    primary key (id)
);

CREATE TABLE pedido (
    id bigserial not null,
    data timestamp(6),
    metodo_pagamento varchar(255),
    status smallint check (status between 0 and 2),
    total float(53),
    cartao bigint,
    usuario bigint,
    primary key (id)
);

CREATE TABLE setor (
    id bigserial not null,
    nome varchar(255),
    preco_inteira float(53),
    preco_meia float(53),
    espaco bigint,
    primary key (id)
);

CREATE TABLE show (
    id bigserial not null,
    data timestamp(6),
    artista bigint,
    cidade bigint,
    espaco bigint,
    tour bigint,
    primary key (id)
);

CREATE TABLE tb_user (
    id bigserial not null,
    cidade varchar(255),
    cpf varchar(255),
    email varchar(255),
    nome varchar(255),
    role smallint check (role between 0 and 1),
    senha varchar(255),
    shows integer,
    telefone varchar(255),
    primary key (id)
);

CREATE TABLE tour (
    id bigserial not null,
    categoria varchar(255),
    img_tour varchar(255),
    link varchar(255),
    nome varchar(255),
    artista bigint,
    primary key (id)
);
 
ALTER TABLE IF EXISTS tour 
drop constraint if exists UK_gyjr6ta5kdsxrxrfujx6joyjv;

ALTER TABLE IF EXISTS tour 
add constraint UK_gyjr6ta5kdsxrxrfujx6joyjv unique (artista);

ALTER TABLE IF EXISTS carrinho 
   add constraint FK3qe2xcob5n4rdsv3lgxw3atmh 
   foreign key (show) 
   references show;

ALTER TABLE IF EXISTS carrinho 
   add constraint FKnmw25irqsf2nu0ht4o3x0mwrk 
   foreign key (usuario)
   references tb_user;

ALTER TABLE IF EXISTS cartao 
   add constraint FKb8dhj4ijn9o93b7nvdkg003kx 
   foreign key (usuario) 
   references tb_user;
   
ALTER TABLE IF EXISTS ingresso 
   add constraint FKe994whcqkde2umsu3fkh0wbwx 
   foreign key (pedido) 
   references pedido;
   
ALTER TABLE IF EXISTS ingresso 
   add constraint FK5eftalj8o2vu3v1yr96gy2o1s 
   foreign key (show) 
   references show;
   
ALTER TABLE IF EXISTS ingresso 
   add constraint FKh92h15lbomq6tv8vmrljrj9fm 
   foreign key (usuario) 
   references tb_user;
   
ALTER TABLE IF EXISTS pedido 
   add constraint FKnokbiee7vk1xso4vh01kxnh3g 
   foreign key (cartao) 
   references cartao;
   
ALTER TABLE IF EXISTS pedido 
   add constraint FKbpqt44b4otkeqskffj3i87olf 
   foreign key (usuario) 
   references tb_user;
   
ALTER TABLE IF EXISTS setor 
   add constraint FK9l0jykqoxypfliou671dtpkdf 
   foreign key (espaco) 
   references espaco;
   
ALTER TABLE IF EXISTS show 
   add constraint FKcsgt8bc8mu6di4yp91hguxdc0 
   foreign key (artista) 
   references artista;
   
ALTER TABLE IF EXISTS show 
   add constraint FK1k4tutgadxu6femfof9xgdeek 
   foreign key (cidade) 
   references cidade;
   
ALTER TABLE IF EXISTS show 
   add constraint FKlo5cpfevtwam8r591fg0ly1hh 
   foreign key (espaco) 
   references espaco;
   
ALTER TABLE IF EXISTS show 
   add constraint FK10dbm40abcaa5oxx50quhlsb9 
   foreign key (tour) 
   references tour;
   
ALTER TABLE IF EXISTS tour 
   add constraint FKrgaouon9rf0kap00w6ewh46x 
   foreign key (artista) 
   references artista;