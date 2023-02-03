const yup = require("yup");

const bookValidation = yup
  .object()
  .shape({
    nome: yup
      .string()
      .min(3, "O  campo nome deve ter pelo menos 3 caracteres!")

      .required("O campo nome é obrigatório!"),
    genero: yup
      .string()
      .min(3, "O campo genero deve ter pelo menos 3 caracteres!"),
    editora: yup
      .string()
      .min(3, "O campo editora deve ter pelo menos 3 caracteres!"),
    data_publicacao: yup
      .string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),
  })
  .strict();

module.exports = { bookValidation };
