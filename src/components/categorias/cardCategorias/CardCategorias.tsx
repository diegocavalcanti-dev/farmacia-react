import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='flex flex-col border-transparent rounded-2xl overflow-hidden justify-between shadow-xl min-h-70'>
            <header className='py-2 px-6 bg-cyan-800 text-center text-white font-bold text-2xl'>
                {categoria.nome}
            </header>

            <p className='p-2 text-center pb-4 text-2xl bg-white-200 h-full'>{categoria.descricao}</p>

            <div className="flex bg-white-100">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-cyan-500 rounded-4xl m-6 ml-5 hover:bg-cyan-600 
                        flex items-center justify-center py-2 hover:font-bold'>
                    <button className="cursor-pointer">Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}  
                    className='text-slate-100 bg-rose-500 rounded-4xl m-6 hover:bg-rose-700 w-full 
                        flex items-center justify-center py-2 hover:font-bold'>
                    <button className="cursor-pointer">Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias
