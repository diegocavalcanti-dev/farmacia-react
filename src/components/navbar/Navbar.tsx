// src/components/navbar/Navbar.tsx

function Navbar() {
  return (
    <div className='w-full bg-blue-600 text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">
        <a href="#" className="logo">iFarma Tech</a>

        <nav>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#">Produtos</a>
            </li>
            <li className="navbar-item">
              <a href="#">Categorias</a>
            </li>
            <li className="navbar-item">
              <a href="#">Cadastrar Categoria</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
