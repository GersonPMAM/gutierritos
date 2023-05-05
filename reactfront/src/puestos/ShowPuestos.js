import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/puestos/'

const CompShowPuestos = () => {
    const[puestos, setPuestos] = useState([])
    useEffect(() => {
            getPuestos()
        },[]
    )

    const getPuestos = async () => {
        const res = await axios.get(URI)
        setPuestos(res.data)
    }

    const deletePuestos = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPuestos()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Puestos Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Puestos!</span>
                <br></br>
                <Link to="/puestos/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Salario</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                puestos.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.salario}</td>
                                            <td>
                                                <Link to={`/puestos/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deletePuestos(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowPuestos

