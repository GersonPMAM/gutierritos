import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/detallefacturas/'

const CompShowDetallefacturas = () => {
    const[detallefacturas, setDetallefacturas] = useState([])
    useEffect(() => {
            getDetallefacturas()
        },[]
    )

    const getDetallefacturas = async () => {
        const res = await axios.get(URI)
        setDetallefacturas(res.data)
    }

    const deleteDetallefacturas = async (id) => {
        await axios.delete(`${URI}${id}`)
        getDetallefacturas()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Detallefacturas Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Detallefacturas!</span>
                <br></br>
                <Link to="/detallefacturas/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Cantidad</th>
                                <th>Facturaid</th>
                                <th>Productoid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                detallefacturas.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.cantidad}</td>
                                            <td>{dtyo.facturaid}</td>
                                            <td>{dtyo.productoid}</td>
                                            <td>
                                                <Link to={`/detallefacturas/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteDetallefacturas(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowDetallefacturas

