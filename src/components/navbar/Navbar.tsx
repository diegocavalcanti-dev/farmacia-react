import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='w-full bg-cyan-700 text-white flex justify-center py-4'>
      <div className="container flex flex-col md:flex-row justify-between items-center text-lg px-4">
        <Link to='/' className="logo mb-2 md:mb-0">iFarma Tech</Link>

        <nav>
          <ul className="navbar-menu text-2xl flex flex-col md:flex-row items-center gap-4">
            <li className="navbar-item">
              {/* <Link to="/produtos">Produtos</Link> */}
            </li>
            <li className="navbar-item">
              <Link to="/categorias">Listar Categorias</Link>
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
