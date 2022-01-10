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
        // this.TableProduto.belongsTo(this.tableUser,{
        //     constraint: true,
        //     foreignKey: 'id_User'
        // })
        
        // this.tableUser.hasMany(this.TableProduto,{
        //     foreignKey: 'id_User'
        // })
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

    async create()
    {
        const table = await this.tableUser;
        const Table = table.create(
            {
                name: 'Edu',
                password: '12341234',
                email: 'easdasdada@gmail.com'
            }
        )
    }


}

module.exports = ConnectionDatabase;