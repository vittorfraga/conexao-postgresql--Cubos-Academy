const express = require("express");
const { createAuthor, findAuthor } = require("./controllers/author");
const { createBook, getAllBooks } = require("./controllers/book");

const routes = express();

routes.post("/autor", createAuthor);
routes.get("/autor/:id", findAuthor);
routes.post("/autor/:id/livro", createBook);
routes.get("/livros", getAllBooks);

module.exports = routes;
