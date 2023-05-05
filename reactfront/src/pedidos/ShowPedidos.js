import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/pedidos/'

const CompShowPedidos = () => {
    const[pedidos, setPedidos] = useState([])
    useEffect(() => {
            getPedidos()
        },[]
    )

    const getPedidos = async () => {
        const res = await axios.get(URI)
        setPedidos(res.data)
    }

    const deletePedidos = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPedidos()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Pedidos Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Pedidos!</span>
                <br></br>
                <Link to="/pedidos/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Productoid</th>
                                <th>Proveedorid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidos.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.fecha}</td>
                                            <td>{dtyo.estado}</td>
                                            <td>{dtyo.productoid}</td>
                                            <td>{dtyo.proveedorid}</td>
                                            <td>
                                                <Link to={`/pedidos/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deletePedidos(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowPedidos

