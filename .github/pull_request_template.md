# Projeto Trybe Futebol Clube

## O que vou desenvolver?

Você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento deve respeitar regras de negócio providas no projeto e sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

## Missão essencial

- [X] PR aberto para entrega do projeto Trybe Futebol Clube

## O que preciso saber para fazer o projeto?

- [ ] Entender o que é um ORM e como ele realiza operações em banco de dados relacional
- [ ] Entender como construir uma API
- [ ] Entender como trabalhar com várias aplicações executadas em ambientes isolados (_containers_)
- [ ] Entender como criar um serviço de comunicação entre ambientes isolados em um mesmo host com o docker-compose


## Checklist das configurações mínimas para rodar o projeto

- [ ] Estou usando `node` na versão `16.14.0 LTS`, para [instalar o nvm](https://github.com/nvm-sh/nvm#installing-and-updating) e rode os comandos abaixo para instalar a versão e usá-la:
   - [ ] `nvm install 16.14 --lts`
   - [ ] `nvm use 16.14`
   - [ ] `nvm alias default 16.14`
- [ ] Estou usando `docker-compose` na versão `ˆ1.29.2`, use esse [link de referência para essa instalação no ubuntu do course](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/b883b81d-21f6-4b60-aa62-8508f6017ea0), existe o link da documentação oficial com passos para [desinstalar](https://docs.docker.com/compose/install/#uninstallation) caso necessário
- [ ] Configurei minha `Dockerfile` do _frontend_ e do _backend_, copiando arquivos, instalando dependências e rodando a aplicação
- [ ] O Docker está adicionado no grupo de usuários (você consegue executar o comando `docker ps` sem o `sudo`). Solução [aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/b883b81d-21f6-4b60-aa62-8508f6017ea0)
- [ ] O comando `docker-compose up -d` roda sem erros no banco, no _back_ e no _front_ (Esse comando pode levar até 10 minutos para terminar de rodar)
- [ ] O comando `docker-compose up --build` roda sem erros no banco, no _back_ e no _front_
- [ ] Listei todas as dependências que usei extras (joi, boom, express-async-errors...) no backend em `app/backend/packages.npm`
- [ ] A _migration_ `app/backend/src/database/migrations/99999999999999-create-z.js` roda sem problemas quando se executa `npm run db:reset`
- [ ] Se já fiz outras _migrations_ e _models_, renomeei as seeders, retirando os `_` do nome dos arquivos, mudando o padrão de `20211116145440-teams.js_` para `20211116145440-teams.js`

## Habilidades para o projeto

### _Vão ser necessárias para realização do projeto_

- [ ] [Utilizando containers Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/a852c0dd-0602-4357-88e8-707352e97927/lesson/c4951f2a-d29b-46a2-820c-6710234cf1ad)
- [ ] [Node.js: ORM e Autenticação](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/cded531f-0317-4c34-9914-c9ba59ca1f02)
- [ ] [Node.js: API REST com Express](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/2ed87e4f-9049-4314-8091-8f71b1925cf6/day/4982a599-9832-419e-a96b-3fe1db634c3e/lesson/c48c9b50-522b-40d5-bc60-6c62e0a64349)

### Conteúdos de Soft Skills

- [ ] [Introdução à resolução de problemas](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/2e0692c9-e226-4e95-860a-b4cad80e3c3c/section/ca43af3b-fb8e-4338-add8-b32b125846cc/day/8185b36f-bd81-4924-96df-1e1b0d4b7f98/lesson/b1ff8769-be1d-4b86-81d8-ffca4b265fdf)

### Requisitos obrigatórios do Projeto

- [ ] 1 - Desenvolva a _migration_ e o _model_ que representa a tabela de times nos respectivos diretórios no caminho `/app/backend/src/database`
- [ ] 2 - (TDD) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos do diretório `/app/backend/src`, com um mínimo de 7 linhas cobertas
- [ ] 3 - Desenvolva o _endpoint_ `/teams` no back-end de forma que ele possa retornar corretamente todos os times
- [ ] 4 - (TDD) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 19 linhas cobertas
- [ ] 5 - Desenvolva o _endpoint_ `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico
- [ ] 6 - Desenvolva a _migration_ e o _model_ que representa a tabela de pessoas usuárias nos respectivos diretórios no caminho `/app/backend/src/database` 
- [ ] 7 - (TDD) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 25 linhas cobertas
- [ ] 8 - Desenvolva o _endpoint_ `/login `no back-end de maneira que ele permita o acesso com dados válidos no front-end
- [ ] 9 - (TDD) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 35 linhas cobertas
- [ ] 10 - Desenvolva o _endpoint_ `/login` no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
- [ ] 11 - (TDD) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 45 linhas cobertas
- [ ] 12 - Desenvolva um _middleware_ de validação para o _token_, verificando se ele é válido, e desenvolva o _endpoint_ `/login/role` no back-end de maneira que ele retorne os dados corretamente no front-end
- [ ] 13 - Desenvolva a _migration_ e o _model_ que representa a tabela de partidas nos respectivos diretórios no caminho `/app/backend/src/database` 
- [ ] 14 - (TDD) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 70 linhas cobertas
- [ ] 15 - Desenvolva o _endpoint_ `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end
- [ ] 16 - Desenvolva o _endpoint_ `/matches` de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
- [ ] 17 - Desenvolva o _endpoint_ `/matches/:id/finish` de modo que seja possível finalizar uma partida no banco de dados
- [ ] 18 - Desenvolva o _endpoint_ `/matches/:id` de forma que seja possível atualizar partidas em andamento
- [ ] 19 - (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 80 linhas cobertas
- [ ] 20 - Desenvolva o _endpoint_ `/matches` de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
- [ ] 21 - Desenvolva o _endpoint_ `/matches` de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times
- [ ] 23 - Desenvolva o _endpoint_ `/leaderboard/home` de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: _name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor_ e _goalsOwn_
- [ ] 24 - Desenvolva o _endpoint_ `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades _goalsBalance_ e _efficiency_, além das propriedades do requisito anterior
- [ ] 25 - Desenvolva o _endpoint_ `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
- [ ] 26 - Desenvolva o _endpoint_ `/leaderboard/away` de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: _name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor_ e _goalsOwn_
- [ ] 27 - Desenvolva o endpoint /leaderboard/away, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior
- [ ] 28 - Desenvolva o _endpoint_ `/leaderboard/away` de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
- [ ] 29 - Desenvolva o _endpoint_ `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

## Requisitos Bônus

- [ ] 22 - (Bônus; TDD) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos no diretório `/app/backend/src`, com um mínimo de 100 linhas cobertas
- [ ] 30 - (Bônus) Desenvolva o _endpoint_ `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

Desejamos um bom projeto para todas as pessoas estudantes e que seja fonte de muito aprendizado. ✌️
