import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/detallefacturas/'

const CompEditDetallefacturas = () => {
    const[cantidad, setCantidad] = useState('')
    const[facturaid, setFacturaid] = useState('')
    const[productoid, setProductoid] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            cantidad: cantidad,
            facturaid: facturaid,
            productoid: productoid
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getDetallefacturasByid() }, 
        []
    )

    const getDetallefacturasByid = async () => {
        const res = await axios.get(URI + id)
            setCantidad(res.data.cantidad)
            setFacturaid(res.data.facturaid)
            setProductoid(res.data.productoid)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Detallefacturas</h5>
            </div>

            <div class="card-body">
                <h5>Detallefacturas Data</h5>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Cantidad</label>
                                <input value={cantidad} onChange={ (e) => setCantidad(e.target.value) } type="integer" class="form-control" placeholder="Enter Cantidad"></input>
                            </div>
                            <div class="form-group">
                                <label>Facturaid</label>
                                <input value={facturaid} onChange={ (e) => setFacturaid(e.target.value) } type="integer" class="form-control" placeholder="Enter Facturaid"></input>
                            </div>
                            <div class="form-group">
                                <label>Productoid</label>
                                <input value={productoid} onChange={ (e) => setProductoid(e.target.value) } type="integer" class="form-control" placeholder="Enter Productoid"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditDetallefacturas
