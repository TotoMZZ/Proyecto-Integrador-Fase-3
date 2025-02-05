import './App.css';

import { Navbar } from './componentes/Navbar';

import { Index as Inicio } from './componentes/INICIO/Index'
import { Index as Alta } from './componentes/ALTA/Index'
import { Index as Carrito } from './componentes/CARRITO/Index'
import { Index as Contacto } from './componentes/CONTACTO/Index'
import { Index as Nosotros } from './componentes/NOSOTROS/Index'
import { Index as Otra } from './componentes/OTRA/Index'

import { BrowserRouter, Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
          <div>
            <div id="logo">Logo</div>
            <div id="barra-busqueda">
              <form action="#">
                {/* <label htmlFor="Buscar">Buscara</label> */}
                <input type="text" />
                <input type="submit" value="Buscar" />
              </form>
            </div>
            <div id="boton-carrito">C</div>
          </div>
        </header>

        <main>
          <Routes>
            <Route index element={<Inicio />} />

            <Route path="inicio" element={<Inicio />} />
            <Route path="alta" element={<Alta />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="otra" element={<Otra />} />

            <Route path="*" element={<Inicio />} />
          </Routes>
        </main>
        
      </BrowserRouter>

      <footer>
        <h3>Copyright 2024</h3>
      </footer>
    </div>
  );
}

export default App;
