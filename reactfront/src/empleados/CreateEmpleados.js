import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/empleados/'

const CompCreateEmpleados = () => {
    const[nombre, setNombre] = useState('')
    const[fechanacimiento, setFechanacimiento] = useState('')
    const[direccion, setDireccion] = useState('')
    const[telefono, setTelefono] = useState('')
    const[correo, setCorreo] = useState('')
    const[fechacontratacion, setFechacontratacion] = useState('')
    const[fechaterminacion, setFechaterminacion] = useState('')
    const[estado, setEstado] = useState('')
    const[puestoid, setPuestoid] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre,fechanacimiento:fechanacimiento,direccion:direccion,telefono:telefono,correo:correo,fechacontratacion:fechacontratacion,fechaterminacion:fechaterminacion,estado:estado,puestoid:puestoid})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Empleados</h5>
            </div>

            <div class="card-body mx-auto">
                <h5>Empleados Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Fechanacimiento</label>
                                <input value={fechanacimiento} onChange={ (e) => setFechanacimiento(e.target.value) } type="date" class="form-control" placeholder="Enter Fechanacimiento"></input>
                            </div>
                            <div class="form-group">
                                <label>Direccion</label>
                                <input value={direccion} onChange={ (e) => setDireccion(e.target.value) } type="text" class="form-control" placeholder="Enter Direccion"></input>
                            </div>
                            <div class="form-group">
                                <label>Telefono</label>
                                <input value={telefono} onChange={ (e) => setTelefono(e.target.value) } type="text" class="form-control" placeholder="Enter Telefono"></input>
                            </div>
                            <div class="form-group">
                                <label>Correo</label>
                                <input value={correo} onChange={ (e) => setCorreo(e.target.value) } type="text" class="form-control" placeholder="Enter Correo"></input>
                            </div>
                            <div class="form-group">
                                <label>Fechacontratacion</label>
                                <input value={fechacontratacion} onChange={ (e) => setFechacontratacion(e.target.value) } type="date" class="form-control" placeholder="Enter Fechacontratacion"></input>
                            </div>
                            <div class="form-group">
                                <label>Fechaterminacion</label>
                                <input value={fechaterminacion} onChange={ (e) => setFechaterminacion(e.target.value) } type="date" class="form-control" placeholder="Enter Fechaterminacion"></input>
                            </div>
                            <div class="form-group">
                                <label>Estado</label>
                                <input value={estado} onChange={ (e) => setEstado(e.target.value) } type="text" class="form-control" placeholder="Enter Estado"></input>
                            </div>
                            <div class="form-group">
                                <label>Puestoid</label>
                                <input value={puestoid} onChange={ (e) => setPuestoid(e.target.value) } type="integer" class="form-control" placeholder="Enter Puestoid"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateEmpleados
