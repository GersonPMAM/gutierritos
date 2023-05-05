import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/proveedores/'

const CompShowProveedores = () => {
    const[proveedores, setProveedores] = useState([])
    useEffect(() => {
            getProveedores()
        },[]
    )

    const getProveedores = async () => {
        const res = await axios.get(URI)
        setProveedores(res.data)
    }

    const deleteProveedores = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProveedores()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Proveedores Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Proveedores!</span>
                <br></br>
                <Link to="/proveedores/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Correo</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                proveedores.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>{dtyo.direccion}</td>
                                            <td>{dtyo.correo}</td>
                                            <td>
                                                <Link to={`/proveedores/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteProveedores(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowProveedores

