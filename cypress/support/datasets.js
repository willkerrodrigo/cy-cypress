require("./commands");

const datasetSelecionado = Cypress.env("DADOS_TEST") || "DATA_TEST1";
const datasets = {
  DATA_TEST1: {
    DADO1: `DADO1`,
    DADO2: `DADO2`,
    DADO3: `DADO3`,
    DADO4: `DADO4`,
    DADO5: `DADO5`
  },
  DATA_TEST2: {
    DADO1: `DADO1_DATA_TEST2`,
    DADO2: `DADO2`,
    DADO3: `DADO3`,
    DADO4: `DADO4`,
    DADO5: `DADO5`
  },
};

export default datasets[datasetSelecionado];
