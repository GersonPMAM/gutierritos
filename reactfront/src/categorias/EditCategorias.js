import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/categorias/'

const CompEditCategorias = () => {
    const[nombre, setNombre] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getCategoriasByid() }, 
        []
    )

    const getCategoriasByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Categorias</h5>
            </div>

            <div class="card-body">
                <h5>Categorias Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditCategorias
