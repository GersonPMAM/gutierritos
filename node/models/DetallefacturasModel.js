import db from "../database/db.js"
import { DataTypes } from "sequelize"

const DetallefacturasModel = db.define('detallefacturas', {
    cantidad: { type: DataTypes.INTEGER },
    facturaid: { type: DataTypes.INTEGER },
    productoid: { type: DataTypes.INTEGER}
})

export default DetallefacturasModel