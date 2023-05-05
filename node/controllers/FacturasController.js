import FacturasModel from "../models/FacturasModel.js"

export const getAllFacturas = async (req, res) => {
    try 
    {
        const datos = await FacturasModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getFacturas = async (req, res) => {
    try
    {
        const datos = await FacturasModel.findAll({
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

export const createFacturas = async (req, res) => {
    try
    {
        await FacturasModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateFacturas = async (req, res) => {
    try
    {
        await FacturasModel.update(req.body, {
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

export const deleteFacturas = async (req, res) => {
    try
    {
        await FacturasModel.destroy({
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

