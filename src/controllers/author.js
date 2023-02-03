const Author = require("../models/author");
const yup = require("yup");
const { authorValidation } = require("../middlewares/schemas/authorValidation");

const createAuthor = async (req, res) => {
  try {
    await authorValidation.validate(req.body, { abortEarly: false });

    const { nome, idade } = req.body;
    const author = await Author.insertAuthor(nome, idade);

    return res
      .status(201)
      .json({ message: "Autor cadastrado com sucesso!", author });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return res.status(400).json({
        errors: err.errors,
      });
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
};

const findAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const authorAndBooks = await Author.findAuthorById(id);

    if (!authorAndBooks.length) {
      return res.status(404).json({ message: "Autor não encontrado!" });
    }

    const author = authorAndBooks[0];

    let books = [];

    if (authorAndBooks.length > 1) {
      books = authorAndBooks.map((book) => ({
        id: book.livro_id,
        nome: book.livro_nome,
        genero: book.livro_genero,
        editora: book.livro_editora,
        data_publicacao: book.livro_data_publicacao,
      }));
    } else {
      books = "Não há livros cadastrado para o autor!";
    }

    return res.status(200).json({
      id: author.autor_id,
      nome: author.autor_nome,
      idade: author.autor_idade,
      livros: books,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createAuthor, findAuthor };
