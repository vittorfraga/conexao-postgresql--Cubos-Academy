const pool = require("../config/connection");

const insertAuthor = async (nome, idade) => {
  const query = `INSERT INTO autores (nome, idade) VALUES ($1, $2) RETURNING *`;
  const values = [nome, idade];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw new Error(`Falha ao inserir autor: ${error}`);
  }
};

const findAuthorById = async (id) => {
  const query = `SELECT autores.id AS autor_id, autores.nome AS autor_nome, autores.idade AS autor_idade, 
    livros.id AS livro_id, livros.nome AS livro_nome, livros.genero AS livro_genero, livros.editora
    AS livro_editora, livros.data_publicacao AS livro_data_publicacao
    FROM autores JOIN livros ON autores.id = livros.autor_id WHERE autores.id = $1`;
  const values = [id];

  try {
    const { rows } = await pool.query(query, values);
    return rows;
  } catch (error) {
    throw new Error(`Autor não encontrado!: ${error}`);
  }
};

module.exports = { insertAuthor, findAuthorById };
