import db from "../database/db.js"
import { DataTypes } from "sequelize"

const CategoriasModel = db.define('categorias', {
    nombre: { type: DataTypes.TEXT}
})

export default CategoriasModel