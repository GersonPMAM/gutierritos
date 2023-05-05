import ProveedoresModel from "../models/ProveedoresModel.js"

export const getAllProveedores = async (req, res) => {
    try 
    {
        const datos = await ProveedoresModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getProveedores = async (req, res) => {
    try
    {
        const datos = await ProveedoresModel.findAll({
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

export const createProveedores = async (req, res) => {
    try
    {
        await ProveedoresModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateProveedores = async (req, res) => {
    try
    {
        await ProveedoresModel.update(req.body, {
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

export const deleteProveedores = async (req, res) => {
    try
    {
        await ProveedoresModel.destroy({
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

