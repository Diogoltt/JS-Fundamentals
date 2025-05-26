import { useState } from 'react'
import './App.css'
import PerfilUsuario from './components/PerfilUsuario'

function App() {
  return (
    <div className='catalogo'>
      <PerfilUsuario imagem="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" nome='Usuario teste' bio='Desenvolvedor Front-end' />
    </div>
  )
}


export default App
