/// <reference types = "cypress" />
let date = new Date();
const diaHoje = ("0" + date.getDate()).slice(-2);
const mesHoje = ("0" + (date.getMonth() + 1)).slice(-2);
const anoHoje = date.getFullYear();
import dadosTestes from "../support/datasets";

const DADO1 = dadosTestes.DADO1;

describe("Descreva o Contexto geral dos testes", () => {
  beforeEach(() => {
    cy.userStorage();
    cy.userToken();
    cy.visit(Cypress.env("BASE_URL"));
  });
  it("Descreva o que vai ser testado", () => {
    cy.get(':nth-child(4) > .mx-0 > .d-flex > .col-12 > dd > #user_email').type(DADO1)
      

  });
});
