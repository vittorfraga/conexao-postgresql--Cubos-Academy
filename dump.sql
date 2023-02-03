CREATE DATABASE biblioteca;

CREATE TABLE autores (
  id serial PRIMARY KEY, 
  nome VARCHAR(255) NOT NULL,
  idade INT
);

CREATE TABLE livros(
     id serial PRIMARY KEY, 
      nome VARCHAR(255) NOT NULL,
		genero VARCHAR(255) NOT NULL,
		editora VARCHAR(255) NOT NULL,
		data_publicacao VARCHAR(255) NOT NULL,
      autor_id REFERENCES autores (id)
);


INSERT INTO autores (nome, idade)
VALUES 
('João da Silva', 32),
('Maria Souza', 29),
('Lucas Rodrigues', 40),
('Ana Paula', 25),
('Ricardo Almeida', 35),
('Julia Ferreira', 27),
('Carlos Fraga', 34),
('Julia Cerutti', 24),
('Vitória Luiza', 51),
('Sandy Lima', 94);

--No meu codigo eu ja havia criado 4 autores teste, por isso os ids vao do 5 ao 14
INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id)
VALUES
('React Native Avançado', 'Programação', 'Editora React', '2020-02-14', 11),
('Desenvolvimento de Jogos com Unity', 'Programação', 'Editora Unity', '2021-05-01', 12),
('Desenvolvimento de Aplicativos com Flutter', 'Programação', 'Editora Flutter', '2022-08-15', 13),
('Big Dates na Prática', 'Big Data', 'Editora Big Data', '2020-11-01', 14),
('Aprendendo Machine Learning com Python', 'Machine Learning', 'Editora Python', '2021-03-25', 5),
('Introdução ao Desenvolvimento Web', 'Web Development', 'Editora Web', '2022-06-12', 6),
('Segurança da Informação', 'Segurança', 'Editora Segurança', '2021-01-01', 7),
('Desenvolvimento de Chatbots com Dialogflow', 'Programação', 'Editora Dialogflow', '2022-02-15', 8),
('Banco de Dados com MongoDB', 'Banco de Dados', 'Editora MongoDB', '2021-04-02', 9),
('Arquitetura de Microserviços', 'Arquitetura', 'Editora Microserviços', '2022-09-30', 10);


INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id)
VALUES
('Aprendendo Python', 'Programação', 'Editora Python', '2021-06-01', 5),
('Desenvolvimento Web com Django', 'Programação', 'Editora Django', '2022-03-12', 5),
('JavaScript Avançado', 'Programação', 'Editora JavaScript', '2022-05-17', 6),
('Banco de Dados com MySQL', 'Banco de Dados', 'Editora MySQL', '2021-07-19', 6),
('Segurança em Aplicações Web', 'Segurança', 'Editora Segurança', '2021-09-22', 7),
('Desenvolvimento de Jogos com Unity', 'Jogos', 'Editora Unity', '2022-11-01', 7),
('Inteligência Artificial com Python', 'Inteligência Artificial', 'Editora IA', '2021-12-17', 8),
('Desenvolvimento Mobile com Flutter', 'Programação', 'Editora Flutter', '2022-02-14', 8),
('Realidade Virtual e Aumentada', 'Tecnologia', 'Editora VR', '2021-04-23', 9),
('Machine Learning com TensorFlow', 'Inteligência Artificial', 'Editora ML', '2022-06-30', 9);

INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id)
VALUES
('Desenvolvimento Full Stack com Nodejs', 'Programação', 'Editora Full Stack', '2021-07-01', 10),
('Arquitetura de Software', 'Programação', 'Editora Arquitetura', '2022-03-15', 10),
('Desenvolvimento com React', 'Programação', 'Editora React', '2022-05-17', 11),
('Big Data com Hadoop', 'Big Data', 'Editora Hadoop', '2021-07-19', 11),
('DevOps e Continuous Delivery', 'DevOps', 'Editora DevOps', '2021-09-22', 12),
('Desenvolvimento de Aplicações para IoT', 'IoT', 'Editora IoT', '2022-11-01', 12),
('Segurança em Redes', 'Segurança', 'Editora Segurança', '2021-12-17', 13),
('Desenvolvimento de Chatbots', 'Inteligência Artificial', 'Editora Chatbots', '2022-02-14', 13),
('Robótica Avançada', 'Robótica', 'Editora Robótica', '2021-04-23', 14),
('Cibersegurança e Malware Analysis', 'Segurança', 'Editora Cibersegurança', '2022-06-30', 14);


