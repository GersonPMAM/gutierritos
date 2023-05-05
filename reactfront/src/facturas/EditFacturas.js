import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/facturas/'

const CompEditFacturas = () => {
    const[fecha, setFecha] = useState('')
    const[clienteid, setClienteid] = useState('')
    const[empleadoid, setEmpleadoid] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            fecha: fecha,
            clienteid: clienteid,
            empleadoid: empleadoid
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getFacturasByid() }, 
        []
    )

    const getFacturasByid = async () => {
        const res = await axios.get(URI + id)
            setFecha(res.data.fecha)
            setClienteid(res.data.clienteid)
            setEmpleadoid(res.data.empleadoid)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Facturas</h5>
            </div>

            <div class="card-body">
                <h5>Facturas Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Fecha</label>
                                <input value={fecha} onChange={ (e) => setFecha(e.target.value) } type="date" class="form-control" placeholder="Enter Fecha"></input>
                            </div>
                            <div class="form-group">
                                <label>Clienteid</label>
                                <input value={clienteid} onChange={ (e) => setClienteid(e.target.value) } type="integer" class="form-control" placeholder="Enter Clienteid"></input>
                            </div>
                            <div class="form-group">
                                <label>Empleadoid</label>
                                <input value={empleadoid} onChange={ (e) => setEmpleadoid(e.target.value) } type="integer" class="form-control" placeholder="Enter Empleadoid"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditFacturas
