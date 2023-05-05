import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/proveedores/'

const CompCreateProveedores = () => {
    const[nombre, setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[correo, setCorreo] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre,telefono:telefono,direccion:direccion,correo:correo})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Proveedores</h5>
            </div>

            <div class="card-body">
                <h5>Proveedores Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Telefono</label>
                                <input value={telefono} onChange={ (e) => setTelefono(e.target.value) } type="text" class="form-control" placeholder="Enter Telefono"></input>
                            </div>
                            <div class="form-group">
                                <label>Direccion</label>
                                <input value={direccion} onChange={ (e) => setDireccion(e.target.value) } type="text" class="form-control" placeholder="Enter Direccion"></input>
                            </div>
                            <div class="form-group">
                                <label>Correo</label>
                                <input value={correo} onChange={ (e) => setCorreo(e.target.value) } type="text" class="form-control" placeholder="Enter Correo"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateProveedores
