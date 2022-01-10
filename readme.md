# API Simples usando JavaScript
- #### Feito somente para estudos e tirar duvidas;
----
## Tecnologias Usadas:
- JavaScript
- Node.js
- Sequelize ( _ORM_ )
- Insomnia ( _utilizar api / testa-la_ )
----
## Tabela geral da API
             Função             | Tipo | ROTA
--------------------------------|------|------
Criar Novo Usuario              | Get  | /createUser/usuarios/password/email
Criar Novo Produto              | Get  | /createProduto/nome/descricao/idUsuario
Criar Tabela de Usuarios        | Get  | /createModelUser
Criar Tabela de Produtos        | Get  | /createModelProduto
Deletar Usuarios (deleta todos  | Get  | /deleteUser/:idUsuario
produtos desse Usuarios)        |      |
Deletar Produtos                | Get  | /DeleteProduto/:idProduto