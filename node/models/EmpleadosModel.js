import db from "../database/db.js"
import { DataTypes } from "sequelize"

const EmpleadosModel = db.define('empleados', {
    nombre: { type: DataTypes.TEXT },
    fechanacimiento: { type: DataTypes.DATE },
    direccion: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT },
    correo: { type: DataTypes.TEXT },
    fechacontratacion: { type: DataTypes.DATE },
    fechaterminacion: { type: DataTypes.DATE },
    estado: { type: DataTypes.TEXT },
    puestoid: { type: DataTypes.INTEGER}
})

export default EmpleadosModel