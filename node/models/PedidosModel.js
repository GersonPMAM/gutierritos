import db from "../database/db.js"
import { DataTypes } from "sequelize"

const PedidosModel = db.define('pedidos', {
    fecha: { type: DataTypes.DATE },
    estado: { type: DataTypes.TEXT },
    productoid: { type: DataTypes.INTEGER },
    proveedorid: { type: DataTypes.INTEGER}
})

export default PedidosModel