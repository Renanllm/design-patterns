import { validate } from "../src/cpfValidator";

test.each`
  cpf
  ${'661.072.630-20'}
  ${'154.317.760-37'}
  ${'001.442.040-61'}
`('CPF válido: $cpf', ({ cpf }) => {
  const response = validate(cpf)
  expect(response).toBeTruthy()
});

test.each`
  cpf
  ${'123.245.789-09'}
  ${'987.654.321-090'}
  ${'111.22.333-44'}
`('CPF inválido: $cpf', ({ cpf }) => {
  const response = validate(cpf)
  expect(response).toBeFalsy()
});

test.each`
cpf
${'111.111.111-11'}
${'222.222.222-22'}
${'999.999.999-99'}
`('CPF com todos os dígitos iguais: $cpf', ({ cpf }) => {
  const response = validate(cpf)
  expect(response).toBeFalsy()
});