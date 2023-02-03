const pool = require("../config/connection");

const insertBook = async (nome, genero, editora, data_publicacao, authorId) => {
  try {
    const query = `INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id) 
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    const values = [nome, genero, editora, data_publicacao, authorId];

    const { rows } = await pool.query(query, values);

    return rows[0];
  } catch (error) {
    throw new Error(`Falha ao criar livro: ${error}`);
  }
};

const findAllBooks = async () => {
  const query = `SELECT livros.*, autores.nome AS autor_nome, autores.idade AS autor_idade
  FROM livros
  JOIN autores ON livros.autor_id = autores.id ORDER BY id;
  
  `;

  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(`Livros não encontrados!: ${error}`);
  }
};

module.exports = { insertBook, findAllBooks };
