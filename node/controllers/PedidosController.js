import PedidosModel from "../models/PedidosModel.js"

export const getAllPedidos = async (req, res) => {
    try 
    {
        const datos = await PedidosModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getPedidos = async (req, res) => {
    try
    {
        const datos = await PedidosModel.findAll({
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

export const createPedidos = async (req, res) => {
    try
    {
        await PedidosModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updatePedidos = async (req, res) => {
    try
    {
        await PedidosModel.update(req.body, {
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

export const deletePedidos = async (req, res) => {
    try
    {
        await PedidosModel.destroy({
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

