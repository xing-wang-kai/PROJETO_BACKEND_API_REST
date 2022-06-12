# :infinity: API REST PETSHOP.
___

## SOBRE

Esta api Realiza requisições do tipo <mark>GET POST PUT DELETE</mark> do tradicional <mark>CRUD</mark>.

Com objetivos de retornar detalhes sobre fornecedores de "Ração" e "brinquedos", além de conter rotas próprias para requisição de serviços para Produtos que estão relacionados a chaves do fornecedores.

Para o desenvoldimento deta API foram ultilizados práticas modernas de modelo REST com SEQUELIZE e EXPRESS tornando a API escalonável para futuros desenvolvimentos de projetos ou agregação de futuras listas de fornecedores ou produtos.

___

### DETALHES

<img align="center" alt="retornos API" src="./assets/API REST.png">

___

#### REQUISIÇÕES:

!!Nesta API o usuário poderá fazer até 4 tipos de requisições no front-end
{c:red}sendo elas{/c}:

HTTP  | verbo         | tipo do botão             | rota                              |
------|---------------|---------------------------|-----------------------------------|
GET   | Listar        |Listas Fornecedores        | http://<rota>/api/fornecedores    |
GET   | Listar        |Listar Fornecedor   por id | http://<rota>/api/fornecedores/:id|
POST  | Criar         |Criar Fornecedor           | http://<rota>/api/fornecedores    |
PUT   | Editar        |Edita Fornecedor           | http://<rota>/api/fornecedores/:id|
DELETE| Deleta        |Delta Fornecedor           | http://<rota>/api/fornecedores/:id|

___

