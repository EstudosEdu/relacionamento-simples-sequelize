const Sequelize = require('sequelize');
const tableUser = require('./user.js');
const tableProduto = require('./produto.js');

class ConnectionDatabase
{
    constructor()
    {
        this.database = new Sequelize(
            'loja_relacionamento',
            'root2',
            '1234',
            {
                host: 'localhost',
                dialect: 'mysql'
            }
        );
        
        this.TableUser = this.database.define(tableUser.name, tableUser.table, tableUser.options);
        this.TableProduto = this.database.define(tableProduto.name, tableProduto.table, tableProduto.options);
        
        //relacionamento de tabelas ================================================
        // define que TableProduto pertence a TableUser e que a ForeignKey é: id_User
        this.TableProduto.belongsTo(this.TableUser,{
            constraint: true,
            foreignKey: 'id_User',
            onDelete: 'CASCADE'
        })

        // define que TableUser tem ou pode ter varios TableProduto e a ForeignKey é: id_User
        this.TableUser.hasMany(this.TableProduto,{
            foreignKey: 'id_User'
        })
    }

    async createModelUser(forca = null)
    {
        if(forca) await this.TableUser.sync({force: true});
        if(!forca) return Table;
    }

    async createModelProduto(forca = null)
    { 
        if(forca) await this.TableProduto.sync({force: true});
        if(!forca) return Table;
    }

    async createUser(user, password, email)
    {
        const table = await this.TableUser;
        await table.create(
            {
                name: user,
                password: password,
                email: email
            }
        )
    }

    async createProduto(nome, descricao, idUser) {
        const table = await this.TableProduto;
        await table.create(
            {
                name: nome,
                descricao: descricao,
                id_User: idUser
            }
        )
    }

    async deleteUser(idUser)
    {
        const table = await this.TableUser;
        const tableProd = await this.TableProduto;
        const Delete = await table.findByPk(idUser)
        tableProd.destroy({ where: { id_User: idUser}});
        Delete.destroy();
    }

    async deleteProduto(idProduto)
    {
        const tableProduto = await this.tableProduto;
        const Delete = tableProduto.findByPk(idProduto);
        Delete.destroy();
    }
}

module.exports = ConnectionDatabase;