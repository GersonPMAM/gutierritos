import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/empleados/'

const CompShowEmpleados = () => {
    const[empleados, setEmpleados] = useState([])
    useEffect(() => {
            getEmpleados()
        },[]
    )

    const getEmpleados = async () => {
        const res = await axios.get(URI)
        setEmpleados(res.data)
    }

    const deleteEmpleados = async (id) => {
        await axios.delete(`${URI}${id}`)
        getEmpleados()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Empleados Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Empleados!</span>
                <br></br>
                <Link to="/empleados/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Fechanacimiento</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Fechacontratacion</th>
                                <th>Fechaterminacion</th>
                                <th>Estado</th>
                                <th>Puestoid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empleados.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.fechanacimiento}</td>
                                            <td>{dtyo.direccion}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>{dtyo.correo}</td>
                                            <td>{dtyo.fechacontratacion}</td>
                                            <td>{dtyo.fechaterminacion}</td>
                                            <td>{dtyo.estado}</td>
                                            <td>{dtyo.puestoid}</td>
                                            <td>
                                                <Link to={`/empleados/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteEmpleados(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowEmpleados

