import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/detallefacturas/'

const CompCreateDetallefacturas = () => {
    const[cantidad, setCantidad] = useState('')
    const[facturaid, setFacturaid] = useState('')
    const[productoid, setProductoid] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {cantidad:cantidad,facturaid:facturaid,productoid:productoid})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Detallefacturas</h5>
            </div>

            <div class="card-body">
                <h5>Detallefacturas Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
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
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateDetallefacturas