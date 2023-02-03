const yup = require("yup");

const authorValidation = yup.object().shape({
  nome: yup
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres!")
    .matches(/^[a-zA-Z0-9]+$/, "O nome não pode conter caracteres especiais!")
    .required("O campo nome é obrigatório!"),
  idade: yup
    .number("A idade deve ser um número válido!")
    .typeError("A idade deve ser um número válido!")
    .required("O campo idade é obrigatório!"),
});

module.exports = { authorValidation };
