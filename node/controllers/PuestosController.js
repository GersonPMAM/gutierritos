import PuestosModel from "../models/PuestosModel.js"

export const getAllPuestos = async (req, res) => {
    try 
    {
        const datos = await PuestosModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getPuestos = async (req, res) => {
    try
    {
        const datos = await PuestosModel.findAll({
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

export const createPuestos = async (req, res) => {
    try
    {
        await PuestosModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updatePuestos = async (req, res) => {
    try
    {
        await PuestosModel.update(req.body, {
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

export const deletePuestos = async (req, res) => {
    try
    {
        await PuestosModel.destroy({
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

