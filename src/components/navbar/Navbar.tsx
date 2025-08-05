// src/components/navbar/Navbar.tsx

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='w-full bg-blue-600 text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">
        <Link to='/' className="logo">iFarma Tech</Link>

        <nav>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/produtos">Produtos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/categorias">Categorias</Link>
            </li>
            <li className="navbar-item">
              <Link to="/cadastrarcategoria">Cadastrar Categoria</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
