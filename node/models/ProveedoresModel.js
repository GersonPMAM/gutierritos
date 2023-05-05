import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ProveedoresModel = db.define('proveedores', {
    nombre: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.TEXT },
    correo: { type: DataTypes.TEXT}
})

export default ProveedoresModel