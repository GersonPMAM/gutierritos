import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/pedidos/'

const CompCreatePedidos = () => {
    const[fecha, setFecha] = useState('')
    const[estado, setEstado] = useState('')
    const[productoid, setProductoid] = useState('')
    const[proveedorid, setProveedorid] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fecha:fecha,estado:estado,productoid:productoid,proveedorid:proveedorid})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Pedidos</h5>
            </div>

            <div class="card-body">
                <h5>Pedidos Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={store}>
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
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreatePedidos
