import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/pedidos/'

const CompEditPedidos = () => {
    const[fecha, setFecha] = useState('')
    const[estado, setEstado] = useState('')
    const[productoid, setProductoid] = useState('')
    const[proveedorid, setProveedorid] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            fecha: fecha,
            estado: estado,
            productoid: productoid,
            proveedorid: proveedorid
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getPedidosByid() }, 
        []
    )

    const getPedidosByid = async () => {
        const res = await axios.get(URI + id)
            setFecha(res.data.fecha)
            setEstado(res.data.estado)
            setProductoid(res.data.productoid)
            setProveedorid(res.data.proveedorid)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Pedidos</h5>
            </div>

            <div class="card-body">
                <h5>Pedidos Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Fecha</label>
                                <input value={fecha} onChange={ (e) => setFecha(e.target.value) } type="date" class="form-control" placeholder="Enter Fecha"></input>
                            </div>
                            <div class="form-group">
                                <label>Estado</label>
                                <input value={estado} onChange={ (e) => setEstado(e.target.value) } type="text" class="form-control" placeholder="Enter Estado"></input>
                            </div>
                            <div class="form-group">
                                <label>Productoid</label>
                                <input value={productoid} onChange={ (e) => setProductoid(e.target.value) } type="integer" class="form-control" placeholder="Enter Productoid"></input>
                            </div>
                            <div class="form-group">
                                <label>Proveedorid</label>
                                <input value={proveedorid} onChange={ (e) => setProveedorid(e.target.value) } type="integer" class="form-control" placeholder="Enter Proveedorid"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditPedidos
