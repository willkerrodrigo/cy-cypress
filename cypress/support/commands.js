  const userValue = Cypress.env("USER_VALUE")
  const userToken = Cypress.env("TOKEN_VALUE")

  Cypress.Commands.add("limparDados", () => {
      cy.window().then(win => win.sessionStorage.clear());
  });
  Cypress.Commands.add("userStorage", () => {
      window.sessionStorage.setItem("user", JSON.stringify(userValue))
  });
  Cypress.Commands.add("userToken", () => {
      window.sessionStorage.setItem('token', userToken)
  });
    Cypress.Commands.add("numberSaveEnv", () => {
      cy.get('#elementoDOTexto')
        .invoke("text")
        .then(($npo) => {
          if ($npo != "0000") {
            Cypress.env("N", $npo.replace(/[^0-9]/g, ''));
            cy.log(parseInt(Cypress.env("N")))
        }})
      })
