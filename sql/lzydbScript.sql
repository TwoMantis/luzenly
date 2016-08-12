CREATE DATABASE lzydbtest;
USE lzydbtest;  

CREATE TABLE accounts(
	id INT NOT NULL AUTO_INCREMENT,
	nick VARCHAR(30) NOT NULL UNIQUE,
	password BINARY(64) NOT NULL,
	email VARCHAR(320) NOT NULL UNIQUE,
	strikes TINYINT NOT NULL,
	type CHAR(1) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE posts(
	id INT NOT NULL AUTO_INCREMENT,
	create_date DATE NOT NULL,
	update_date DATE NOT NULL,
	author INT NOT NULL,
	is_reviewed BIT NOT NULL,
	reviewed_by INT,
	is_deleted BIT,
	title VARCHAR(100),
	url VARCHAR(2048),
	type CHAR (1),
	PRIMARY KEY (id),
    FOREIGN KEY (reviewed_by) REFERENCES accounts(id),
	FOREIGN KEY (author) REFERENCES accounts(id)
);

CREATE TABLE tags(
	id INT NOT NULL AUTO_INCREMENT,
	tag VARCHAR(45) UNIQUE NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE posts_tags(
	id_post INT NOT NULL,
	id_tag INT NOT NULL,
	FOREIGN KEY (id_post) REFERENCES posts(id),
	FOREIGN KEY (id_tag) REFERENCES tags(id)
);

CREATE TABLE blog_entries(
	id_post INT NOT NULL,
	text_content TEXT NOT NULL,
	PRIMARY KEY(id_post),
	FOREIGN KEY (id_post) REFERENCES posts(id)
);
