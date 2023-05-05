import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ProductosModel = db.define('productos', {
    nombre: { type: DataTypes.TEXT },
    imagen: { type: DataTypes.TEXT },
    descripcion: { type: DataTypes.TEXT },
    precio: { type: DataTypes.TEXT },
    stock: { type: DataTypes.INTEGER },
    categoriaid: { type: DataTypes.INTEGER}
})

export default ProductosModel