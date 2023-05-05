import ProductosModel from "../models/ProductosModel.js"

export const getAllProductos = async (req, res) => {
    try 
    {
        const datos = await ProductosModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getProductos = async (req, res) => {
    try
    {
        const datos = await ProductosModel.findAll({
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

export const createProductos = async (req, res) => {
    try
    {
        await ProductosModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateProductos = async (req, res) => {
    try
    {
        await ProductosModel.update(req.body, {
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

export const deleteProductos = async (req, res) => {
    try
    {
        await ProductosModel.destroy({
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

