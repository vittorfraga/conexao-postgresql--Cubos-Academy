const yup = require("yup");
const { findAuthorById } = require("../models/author");
const { insertBook, findAllBooks } = require("../models/books");
const { bookValidation } = require("../middlewares/schemas/bookValidation");

const createBook = async (req, res) => {
  try {
    await bookValidation.validate(req.body, { abortEarly: false });

    const { id: authorId } = req.params;
    const author = await findAuthorById(authorId);

    if (!author) {
      throw new Error("Autor não encontrado");
    }

    const { nome, genero, editora, data_publicacao } = req.body;

    const book = await insertBook(
      nome,
      genero,
      editora,
      data_publicacao,
      authorId
    );

    const insertedBook = {
      id: book.id,
      nome,
      genero,
      editora,
      data_publicacao,
    };

    res.status(201).json(insertedBook);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return res.status(400).json({
        errors: err.errors,
      });
    } else if (err.message.includes("invalid input syntax for type integer")) {
      return res.status(400).json({
        message:
          "Os dados enviados no corpo da requisição estão incorretos. Por favor, verifique se os campos esperados (nome, genero, editora, data_publicacao) estão presentes e se estão no formato correto.",
      });
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await findAllBooks();

    if (!books.length) {
      return res.status(404).json({ message: "Não há livros cadastrados!" });
    }
    const allBooks = books.map((book) => ({
      id: book.id,
      nome: book.nome,
      genero: book.genero,
      editora: book.editora,
      data_publicacao: book.data_publicacao,
      autor: {
        id: book.autor_id,
        nome: book.autor_nome,
        idade: book.autor_idade,
      },
    }));
    return res.status(200).json(allBooks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createBook, getAllBooks };
