import EmpleadosModel from "../models/EmpleadosModel.js"

export const getAllEmpleados = async (req, res) => {
    try 
    {
        const datos = await EmpleadosModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getEmpleados = async (req, res) => {
    try
    {
        const datos = await EmpleadosModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(datos[0])
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const createEmpleados = async (req, res) => {
    try
    {
        await EmpleadosModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateEmpleados = async (req, res) => {
    try
    {
        await EmpleadosModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json( { message: "Registro actualizado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const deleteEmpleados = async (req, res) => {
    try
    {
        await EmpleadosModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro eliminado correctamente!" })
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

