import { Sequelize } from "sequelize"

const db = new Sequelize('gutierritosdb', 'root', '',{
    host:'localhost',
    dialect:"mysql"
})

export default db
