import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/puestos/'

const CompEditPuestos = () => {
    const[nombre, setNombre] = useState('')
    const[salario, setSalario] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            salario: salario
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getPuestosByid() }, 
        []
    )

    const getPuestosByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
            setSalario(res.data.salario)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Puestos</h5>
            </div>

            <div class="card-body">
                <h5>Puestos Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Salario</label>
                                <input value={salario} onChange={ (e) => setSalario(e.target.value) } type="text" class="form-control" placeholder="Enter Salario"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditPuestos
