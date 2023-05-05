import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/categorias/'

const CompShowCategorias = () => {
    const[categorias, setCategorias] = useState([])
    useEffect(() => {
            getCategorias()
        },[]
    )

    const getCategorias = async () => {
        const res = await axios.get(URI)
        setCategorias(res.data)
    }

    const deleteCategorias = async (id) => {
        await axios.delete(`${URI}${id}`)
        getCategorias()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Categorias Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Categorias!</span>
                <br></br>
                <Link to="/categorias/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categorias.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>
                                                <Link to={`/categorias/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteCategorias(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowCategorias

