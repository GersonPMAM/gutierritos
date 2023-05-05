import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/productos/'

const CompCreateProductos = () => {
    const[nombre, setNombre] = useState('')
    const[imagen, setImagen] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[precio, setPrecio] = useState('')
    const[stock, setStock] = useState('')
    const[categoriaid, setCategoriaid] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre,imagen:imagen,descripcion:descripcion,precio:precio,stock:stock,categoriaid:categoriaid})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Productos</h5>
            </div>

            <div class="card-body">
                <h5>Productos Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Imagen</label>
                                <input value={imagen} onChange={ (e) => setImagen(e.target.value) } type="text" class="form-control" placeholder="Enter Imagen"></input>
                            </div>
                            <div class="form-group">
                                <label>Descripcion</label>
                                <input value={descripcion} onChange={ (e) => setDescripcion(e.target.value) } type="text" class="form-control" placeholder="Enter Descripcion"></input>
                            </div>
                            <div class="form-group">
                                <label>Precio</label>
                                <input value={precio} onChange={ (e) => setPrecio(e.target.value) } type="text" class="form-control" placeholder="Enter Precio"></input>
                            </div>
                            <div class="form-group">
                                <label>Stock</label>
                                <input value={stock} onChange={ (e) => setStock(e.target.value) } type="integer" class="form-control" placeholder="Enter Stock"></input>
                            </div>
                            <div class="form-group">
                                <label>Categoriaid</label>
                                <input value={categoriaid} onChange={ (e) => setCategoriaid(e.target.value) } type="integer" class="form-control" placeholder="Enter Categoriaid"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateProductos
