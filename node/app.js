import express from "express"
import cors from "cors"
import db from "./database/db.js"

import puestosRoutes from "./routes/PuestosRoutes.js"
import empleadosRoutes from "./routes/EmpleadosRoutes.js"
import clientesRoutes from "./routes/ClientesRoutes.js"
import proveedoresRoutes from "./routes/ProveedoresRoutes.js"
import pedidosRoutes from "./routes/PedidosRoutes.js"
import facturasRoutes from "./routes/FacturasRoutes.js"
import categoriasRoutes from "./routes/CategoriasRoutes.js"
import productosRoutes from "./routes/ProductosRoutes.js"
import detallefacturasRoutes from "./routes/DetallefacturasRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/puestos', puestosRoutes)
app.use('/empleados', empleadosRoutes)
app.use('/clientes', clientesRoutes)
app.use('/proveedores', proveedoresRoutes)
app.use('/pedidos', pedidosRoutes)
app.use('/facturas', facturasRoutes)
app.use('/categorias', categoriasRoutes)
app.use('/productos', productosRoutes)
app.use('/detallefacturas', detallefacturasRoutes)

try 
{
    await db.authenticate()
    console.log("Conectividad con la base de datos completada!")
}
catch (error)
{
    console.log("Error de conectividad: " + error)
}

app.listen(8000, () => {
    console.log("Servidor corriendo en: http://localhost:8000/")
})

