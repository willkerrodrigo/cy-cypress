Tutorial de Instalação

Passo 1: Instale o Node.js

    O Node.js é uma plataforma que permite executar JavaScript fora do navegador. É necessário instalá-lo para usar o Cypress.
    Abra o terminal ou prompt de comando do seu sistema operacional.
    Digite o comando node --version e pressione Enter.
    Se a versão do Node.js for exibida, pule para o passo 2.
    Se o comando não for reconhecido ou uma mensagem de erro for exibida, faça o download do Node.js em https://nodejs.org/en/ e siga as instruções de instalação.
    Depois de instalado, feche e abra novamente o terminal ou prompt de comando.

Passo 2: Instale o Cypress

    Certifique-se de que o projeto github foi baixado para a sua máquina.
    Abra o terminal ou prompt de comando e navegue até a pasta do projeto.
    Digite o comando npm install cypress e pressione Enter.
    O npm (Node Package Manager) irá baixar e instalar o Cypress e suas dependências.

Passo 3: Execute o Cypress pela primeira vez

    É necessário executar o Cypress pela primeira vez para que sua estrutura de pasta seja criada.
    Para executar o Cypress de uma forma mais simples, vamos adicionar scripts ao arquivo package.json.
    Abra o arquivo package.json na raiz do projeto com um editor de texto.
    Adicione o seguinte trecho dentro da chave "scripts":

        "cypress:open": "cypress open",
        "cypress:run": "cypress run"

    Salve e feche o arquivo package.json.
    Abra o terminal ou prompt de comando e navegue até a pasta cypress do projeto.
    Digite o comando npm run cypress:open e pressione Enter para abrir o Cypress no modo interativo, onde você pode executar e depurar seus testes em tempo real no navegador.
    Ou digite o comando npm run cypress:run e pressione Enter para executar o Cypress no modo headless, onde você pode ver o resultado dos testes no terminal sem abrir o navegador.