import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/productos/'

const CompShowProductos = () => {
    const[productos, setProductos] = useState([])
    useEffect(() => {
            getProductos()
        },[]
    )

    const getProductos = async () => {
        const res = await axios.get(URI)
        setProductos(res.data)
    }

    const deleteProductos = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProductos()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Productos Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Productos!</span>
                <br></br>
                <Link to="/productos/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Categoriaid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.imagen}</td>
                                            <td>{dtyo.descripcion}</td>
                                            <td>{dtyo.precio}</td>
                                            <td>{dtyo.stock}</td>
                                            <td>{dtyo.categoriaid}</td>
                                            <td>
                                                <Link to={`/productos/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteProductos(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowProductos

