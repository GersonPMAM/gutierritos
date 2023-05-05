import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ClientesModel = db.define('clientes', {
    nombre: { type: DataTypes.TEXT },
    nit: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT },
    correo: { type: DataTypes.TEXT}
})

export default ClientesModel