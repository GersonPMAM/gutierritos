import DetallefacturasModel from "../models/DetallefacturasModel.js"

export const getAllDetallefacturas = async (req, res) => {
    try 
    {
        const datos = await DetallefacturasModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getDetallefacturas = async (req, res) => {
    try
    {
        const datos = await DetallefacturasModel.findAll({
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

export const createDetallefacturas = async (req, res) => {
    try
    {
        await DetallefacturasModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateDetallefacturas = async (req, res) => {
    try
    {
        await DetallefacturasModel.update(req.body, {
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

export const deleteDetallefacturas = async (req, res) => {
    try
    {
        await DetallefacturasModel.destroy({
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

