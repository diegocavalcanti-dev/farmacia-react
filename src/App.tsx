// src/App.tsx
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
