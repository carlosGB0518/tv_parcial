import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Listar from './componentes/listar'
import Original from './componentes/original'
import Aleatorios from './componentes/aleatorios'
import Favoritos from './componentes/favoritos'
import Usuario from './componentes/usuario'
import Detalle from './componentes/detalle/index2'
import Menu from './componentes/menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Menu />
        <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />
        <Route path="/detalle/:name" element={<Detalle />} />
        </Routes>
   
    </Router>
    </>
  )
}

export default App