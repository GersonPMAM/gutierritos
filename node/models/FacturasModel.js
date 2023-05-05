import db from "../database/db.js"
import { DataTypes } from "sequelize"

const FacturasModel = db.define('facturas', {
    fecha: { type: DataTypes.DATE },
    clienteid: { type: DataTypes.INTEGER },
    empleadoid: { type: DataTypes.INTEGER}
})

export default FacturasModel