import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/facturas/'

const CompShowFacturas = () => {
    const[facturas, setFacturas] = useState([])
    useEffect(() => {
            getFacturas()
        },[]
    )

    const getFacturas = async () => {
        const res = await axios.get(URI)
        setFacturas(res.data)
    }

    const deleteFacturas = async (id) => {
        await axios.delete(`${URI}${id}`)
        getFacturas()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Facturas Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Facturas!</span>
                <br></br>
                <Link to="/facturas/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Fecha</th>
                                <th>Clienteid</th>
                                <th>Empleadoid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                facturas.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.fecha}</td>
                                            <td>{dtyo.clienteid}</td>
                                            <td>{dtyo.empleadoid}</td>
                                            <td>
                                                <Link to={`/facturas/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteFacturas(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowFacturas

