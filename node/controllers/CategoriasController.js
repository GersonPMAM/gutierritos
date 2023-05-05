import CategoriasModel from "../models/CategoriasModel.js"

export const getAllCategorias = async (req, res) => {
    try 
    {
        const datos = await CategoriasModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getCategorias = async (req, res) => {
    try
    {
        const datos = await CategoriasModel.findAll({
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

export const createCategorias = async (req, res) => {
    try
    {
        await CategoriasModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateCategorias = async (req, res) => {
    try
    {
        await CategoriasModel.update(req.body, {
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

export const deleteCategorias = async (req, res) => {
    try
    {
        await CategoriasModel.destroy({
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

