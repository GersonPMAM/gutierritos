import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const URI = 'http://localhost:8000/empleados/'

const CompHome = () => {
    const[correo, setCorreo] = useState('')
    const[puestoid, setPuestoid] = useState('')
    const navigate = useNavigate()


    const[empleados, setEmpleados] = useState([])
    useEffect(() => {
            getEmpleados()
        },[]
    )

    const getEmpleados = async () => {
        const res = await axios.get(URI)
        setEmpleados(res.data)
    }

    function authenticate() {
        let fl = 0

        let rutas = ['/duenio', '/gerente', '/secretariado', '/contabilidad', '/cajero']

        for (let i = 0; i < empleados.length; i++) {
            if (empleados[i].correo == correo) {
                for (let j = 0; j < rutas.length; j++) {
                    if (empleados[i].puestoid == j+1) {
                        fl = 1
                        navigate(rutas[j])
                        i = empleados.length
                        break
                    }
                }
            }
        }

        if (fl == 0) {
            alert('Error: credenciales incorrectas!')
        }
    }

    return (
        <div className='container text-left'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="card-header">
                <h5>LOG-IN</h5>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <form onSubmit={authenticate}>
                            <div class="form-group">
                                <label>Correo</label>
                                <input value={correo} onChange={ (e) => setCorreo(e.target.value) } type="email" class="form-control" placeholder="Enter Correo"></input>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-primary">Log-in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompHome
