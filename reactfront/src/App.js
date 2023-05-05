import './App.css';

import CompShowPuestos from './puestos/ShowPuestos.js';
import CompCreatePuestos from './puestos/CreatePuestos.js';
import CompEditPuestos from './puestos/EditPuestos.js';

import CompShowEmpleados from './empleados/ShowEmpleados.js';
import CompCreateEmpleados from './empleados/CreateEmpleados.js';
import CompEditEmpleados from './empleados/EditEmpleados.js';

import CompShowClientes from './clientes/ShowClientes.js';
import CompCreateClientes from './clientes/CreateClientes.js';
import CompEditClientes from './clientes/EditClientes.js';

import CompShowProveedores from './proveedores/ShowProveedores.js';
import CompCreateProveedores from './proveedores/CreateProveedores.js';
import CompEditProveedores from './proveedores/EditProveedores.js';

import CompShowPedidos from './pedidos/ShowPedidos.js';
import CompCreatePedidos from './pedidos/CreatePedidos.js';
import CompEditPedidos from './pedidos/EditPedidos.js';

import CompShowFacturas from './facturas/ShowFacturas.js';
import CompCreateFacturas from './facturas/CreateFacturas.js';
import CompEditFacturas from './facturas/EditFacturas.js';

import CompShowCategorias from './categorias/ShowCategorias.js';
import CompCreateCategorias from './categorias/CreateCategorias.js';
import CompEditCategorias from './categorias/EditCategorias.js';

import CompShowProductos from './productos/ShowProductos.js';
import CompCreateProductos from './productos/CreateProductos.js';
import CompEditProductos from './productos/EditProductos.js';

import CompShowDetallefacturas from './detallefacturas/ShowDetallefacturas.js';
import CompCreateDetallefacturas from './detallefacturas/CreateDetallefacturas.js';
import CompEditDetallefacturas from './detallefacturas/EditDetallefacturas.js';

import CompHome from './home/Home';

import CompDashboardDuenio from './dashboards/DashboardDuenio.js';
import CompDashboardGerente from './dashboards/DashboardGerente.js';
import CompDashboardSecretariado from './dashboards/DashboardSecretariado.js';
import CompDashboardContabilidad from './dashboards/DashboardContabilidad.js';
import CompDashboardCajero from './dashboards/DashboardCajero.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompHome/> } />

          <Route path='/duenio' element={ <CompDashboardDuenio/> } />
          <Route path='/gerente' element={ <CompDashboardGerente/> } />
          <Route path='/secretariado' element={ <CompDashboardSecretariado/> } />
          <Route path='/contabilidad' element={ <CompDashboardContabilidad/> } />
          <Route path='/cajero' element={ <CompDashboardCajero/> } />

          <Route path='/puestos/' element={ <CompShowPuestos/>}/>
          <Route path='/puestos/create' element={ <CompCreatePuestos/>}/>
          <Route path='/puestos/edit/:id' element={ <CompEditPuestos/>}/>

          <Route path='/empleados/' element={ <CompShowEmpleados/>}/>
          <Route path='/empleados/create' element={ <CompCreateEmpleados/>}/>
          <Route path='/empleados/edit/:id' element={ <CompEditEmpleados/>}/>

          <Route path='/clientes/' element={ <CompShowClientes/>}/>
          <Route path='/clientes/create' element={ <CompCreateClientes/>}/>
          <Route path='/clientes/edit/:id' element={ <CompEditClientes/>}/>

          <Route path='/proveedores/' element={ <CompShowProveedores/>}/>
          <Route path='/proveedores/create' element={ <CompCreateProveedores/>}/>
          <Route path='/proveedores/edit/:id' element={ <CompEditProveedores/>}/>

          <Route path='/pedidos/' element={ <CompShowPedidos/>}/>
          <Route path='/pedidos/create' element={ <CompCreatePedidos/>}/>
          <Route path='/pedidos/edit/:id' element={ <CompEditPedidos/>}/>

          <Route path='/facturas/' element={ <CompShowFacturas/>}/>
          <Route path='/facturas/create' element={ <CompCreateFacturas/>}/>
          <Route path='/facturas/edit/:id' element={ <CompEditFacturas/>}/>

          <Route path='/categorias/' element={ <CompShowCategorias/>}/>
          <Route path='/categorias/create' element={ <CompCreateCategorias/>}/>
          <Route path='/categorias/edit/:id' element={ <CompEditCategorias/>}/>

          <Route path='/productos/' element={ <CompShowProductos/>}/>
          <Route path='/productos/create' element={ <CompCreateProductos/>}/>
          <Route path='/productos/edit/:id' element={ <CompEditProductos/>}/>

          <Route path='/detallefacturas/' element={ <CompShowDetallefacturas/>}/>
          <Route path='/detallefacturas/create' element={ <CompCreateDetallefacturas/>}/>
          <Route path='/detallefacturas/edit/:id' element={ <CompEditDetallefacturas/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

