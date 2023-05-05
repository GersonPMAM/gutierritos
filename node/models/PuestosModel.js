import db from "../database/db.js"
import { DataTypes } from "sequelize"

const PuestosModel = db.define('puestos', {
    nombre: { type: DataTypes.TEXT },
    salario: { type: DataTypes.TEXT}
})

export default PuestosModel