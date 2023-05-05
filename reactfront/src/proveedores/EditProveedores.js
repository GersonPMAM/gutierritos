import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/proveedores/'

const CompEditProveedores = () => {
    const[nombre, setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            correo: correo
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getProveedoresByid() }, 
        []
    )

    const getProveedoresByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
            setTelefono(res.data.telefono)
            setDireccion(res.data.direccion)
            setCorreo(res.data.correo)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Proveedores</h5>
            </div>

            <div class="card-body">
                <h5>Proveedores Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
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
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditProveedores
