Configuration and Execution Guide

Step 1: Install Node.js

    Node.js is a platform that enables executing JavaScript outside the browser. It's necessary to install it to use Cypress.

    To check if Node.js is installed, open your terminal or command prompt.
    Type the command node --version and press Enter.
    If the Node.js version is displayed, Node.js is installed, and you can proceed to Step 2.
    If the command isn't recognized or an error message appears, follow these steps to install Node.js:
    Download Node.js from https://nodejs.org/en/ based on your operating system (Windows, macOS, Linux) and follow the specific installation instructions.
    After installation, close and reopen the terminal or command prompt to ensure Node.js is properly configured.

    Before Running Cypress

    Setting Environment Variables:

    It's crucial to configure environment variables for the local or test environment before running the tests. Make sure to define the necessary variables correctly, with the token (TOKEN_VALUE) being the specific variable to configure. Ensure that the variable name defined in the configuration file (tokenDBY) exactly matches the name of the environment variable (TOKEN_VALUE) being configured in the code.

Step 2: Install Cypress

    Ensure that the GitLab project has been downloaded to your machine.

    Open the terminal or command prompt and navigate to the cypress folder in the project.
    Type the command npm install cypress and press Enter.
    The npm (Node Package Manager) will download and install Cypress and its dependencies.

Step 3: Run Cypress for the First Time

    Running Cypress for the first time is necessary to create its folder structure. To run Cypress more easily, let's add scripts to the package.json file:

    json
    Copy code
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
    Open the terminal or command prompt and navigate to the cypress folder in the project.
    Type the command npm run cypress:open and press Enter to open Cypress in interactive mode, where you can execute and debug your tests in real-time in the browser.
    Alternatively, type the command npm run cypress:run and press Enter to execute Cypress in headless mode, displaying test results in the terminal without opening the browser.

Test Data Definition (cypress\support\datasets.js)

    This file contains dataset definitions for automated tests in Cypress. Each dataset, DATA_TEST_1 and DATA_TEST_2, represents specific test scenarios, including detailed information such as title, comment, email, company, cost center, among others.

    Example:
  
        const selectedDataset = Cypress.env("DATA_TEST") || "DATA_TEST_1";

        const datasets = {
       DATA_TEST1: {
        // ...details of dataset 1...
        },
        DATA_TEST2: {
        // ...details of dataset 2...
        },
        };

        export default datasets[selectedDataset];

Cypress Scripts Configuration (dt-arch-dby-cypress\package.json)

    The cypress:open and cypress:run scripts are configured to execute tests without specifying the test dataset (DATA_TEST). When executed without the DATA_TEST specification, they default to using DATA_TEST_1 for automated tests.

        "scripts": {
        "cypress:open:data_test_1": "cypress open --env DATA_TEST=DATA_TEST_1",
        "cypress:open:data_test_2": "cypress open --env DATA_TEST=DATA_TEST_2",
        "cypress:run:data_test_1": "cypress run --env DATA_TEST=DATA_TEST_1",
        "cypress:run:data_test_2": "cypress run --env DATA_TEST=DATA_TEST_2",
        "cypress:open": "cypress open", // Executes using DATA_TEST_1 by default
        "cypress:run": "cypress run" // Executes using DATA_TEST_1 by default
        }

    This way, when executing commands like cypress:open or cypress:run without specifying a dataset (DATA_TEST), they will automatically use DATA_TEST_1 to perform automated tests.

---

Guia de Configuração e Execução

Passo 1: Instale o Node.js

    O Node.js é uma plataforma que permite executar JavaScript fora do navegador. É necessário instalá-lo para usar o Cypress.

    Para verificar se o Node.js está instalado, abra o terminal ou prompt de comando do seu sistema operacional.
    Digite o comando node --version e pressione Enter.
    Se a versão do Node.js for exibida, o Node.js está instalado, e você pode pular para o Passo 2.
    Se o comando não for reconhecido ou uma mensagem de erro aparecer, siga as etapas abaixo para instalar o Node.js:
    Faça o download do Node.js em https://nodejs.org/en/ de acordo com o seu sistema operacional (Windows, macOS, Linux) e siga as instruções de instalação específicas.
    Depois de concluída a instalação, feche e abra novamente o terminal ou prompt de comando para garantir que o Node.js esteja configurado corretamente.


Passo 2: Instale o Cypress

    Certifique-se de que o projeto GitLab foi baixado para a sua máquina.

    Abra o terminal ou prompt de comando e navegue até a pasta cypress do projeto.
    Digite o comando npm install cypress e pressione Enter.
    O npm (Node Package Manager) irá baixar e instalar o Cypress e suas dependências.

Passo 3: Execute o Cypress pela primeira vez

    É necessário executar o Cypress pela primeira vez para que sua estrutura de pasta seja criada. Para executar o Cypress de uma forma mais simples, vamos adicionar scripts ao arquivo package.json:


        "cypress:open": "cypress open",
        
            cypress:open é usado para abrir a interface gráfica do Cypress Test Runner. Isso permite que você interaja visualmente com seus testes, os veja sendo executados, depure-os e os execute individualmente conforme necessário. É útil durante o desenvolvimento, pois oferece uma visualização interativa dos testes.

        "cypress:run": "cypress run"

            cypress:run executa os testes em segundo plano, sem uma interface gráfica. Ele é adequado para integração contínua ou execução automatizada, onde você deseja rodar os testes sem interação visual, geralmente em um ambiente de integração ou em um pipeline de CI/CD.


    Abra o terminal ou prompt de comando e navegue até a pasta cypress do projeto.
    Digite o comando npm run cypress:open e pressione Enter para abrir o Cypress no modo interativo, onde você pode executar e depurar seus testes em tempo real no navegador.
    Ou digite o comando npm run cypress:run e pressione Enter para executar o Cypress no modo headless, onde você pode ver o resultado dos testes no terminal sem abrir o navegador.
    
    
Definição de Dados de Teste (cypress\support\datasets.js)

    Este arquivo contém definições de conjuntos de dados para testes automatizados no Cypress. Cada conjunto de dados, DATA_TEST_1 e DATA_TEST_2, representa cenários específicos de testes, incluindo informações detalhadas como título, comentário, email, empresa, centro de custo, entre outros.

    Exemplo:

    const datasetSelecionado = Cypress.env("DATA_TEST") || "DATA_TEST_1";

        const datasets = {
        DATA_TEST1: {
        // ...detalhes do conjunto de dados 1...
        },
        DATA_TEST2: {
        // ...detalhes do conjunto de dados 2...
        },
        };

        export default datasets[datasetSelecionado];

        
Configuração de Scripts Cypress (dt-arch-dby-cypress\package.json)

    Os scripts cypress:open e cypress:run foram configurados para executar testes sem especificar o conjunto de dados de teste (DATA_TEST). Quando executados sem a especificação do DATA_TEST, eles padrão para o conjunto DATA_TEST_1 para realizar os testes automatizados.


    "scripts": {
    "cypress:open:data_test_1": "cypress open --env DATA_TEST=DATA_TEST1",
    "cypress:open:data_test_2": "cypress open --env DATA_TEST=DATA_TEST2",
    "cypress:run:data_test_1": "cypress run --env DATA_TEST=DATA_TEST1",
    "cypress:run:data_test_2": "cypress run --env DATA_TEST=DATA_TEST2",
    "cypress:open": "cypress open", // Executa usando DATA_TEST1 por padrão
    "cypress:run": "cypress run" // Executa usando DATA_TEST_1 por padrão
    }
Dessa forma, ao executar os comandos cypress:open ou cypress:run sem especificar um conjunto de dados (DATA_TEST), eles utilizarão automaticamente o conjunto DATA_TEST_1 para realizar os testes automatizados.

----

Execução Automatizada de Testes End-to-End com Cypress: e2e-run-tests.js

Use o seguinte comando para executar o script: "node e2e-run-tests.js"

Explicação:

Ao executar o arquivo e2e-run-tests.js, o script realiza as seguintes operações de forma automatizada:

Execução dos Testes Cypress:
O script inicia a execução automática dos testes end-to-end usando o framework Cypress, proporcionando uma abordagem eficaz para validar o comportamento do seu aplicativo.

Geração de Relatórios Detalhados:
Após a conclusão dos testes, o script compila um relatório detalhado que inclui informações essenciais, como título do teste, estado (passado, falhado ou pulado) e a duração de cada teste.

Estatísticas Globais:
O relatório consolida estatísticas abrangentes, como o número total de testes, quantos foram bem-sucedidos, quantos falharam e quantos foram pulados, fornecendo uma visão global da integridade dos testes.

Porcentagens de Sucesso e Falha:
Além das estatísticas, o script calcula as porcentagens de sucesso e falha, permitindo uma rápida avaliação da qualidade dos testes em relação ao total.

Arquivo JSON de Resultados:
O script gera um arquivo JSON chamado testResults.json, que armazena de maneira estruturada os resultados dos testes, oferecendo flexibilidade para análises adicionais ou integração com ferramentas externas.

Relatório Visual em HTML:
Simultaneamente, é gerado um relatório visual em HTML denominado test-results.html. Este relatório inclui uma tabela detalhada e um gráfico de pizza interativo, proporcionando uma representação visual envolvente dos resultados dos testes.

Gráfico de Pizza Interativo:
O gráfico de pizza no relatório HTML oferece uma visão intuitiva da distribuição dos testes, destacando visualmente o sucesso, falha e testes pulados.

Facilidade de Integração:
Ao utilizar o arquivo e2e-run-tests.js, você integra facilmente a execução e relatórios de testes Cypress ao seu fluxo de desenvolvimento, melhorando a eficiência na garantia de qualidade do software.