/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import type Categoria from "../../../models/Categoria"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                console.error("Acesso negado: erro 401");
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            alert("Categoria apagado com sucesso")

        } catch (error: any) {
            if (error.toString().includes('401')) {
                console.error("Acesso negado: erro 401");
            }else {
                alert("Erro ao deletar o Categoria.")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
    
    return (
        <div className='container w-1/3 mx-auto mt-16'>
            <h1 className='text-4xl text-center my-4 font-bold'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4 text-xl'>
                Você tem certeza de que deseja apagar a Categoria a seguir?</p>
            <div className='flex flex-col rounded-2xl mt-12 overflow-hidden justify-between shadow-xl'>
                <header 
                    className='py-2 px-6  bg-cyan-800 text-center text-white font-bold text-2xl'>
                    {categoria.nome}
                </header>
                <p className='p-8 text-3xl text-center bg-white-100 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button 
                        className='cursor-pointer w-full text-slate-100 bg-cyan-500 rounded-4xl m-6 ml-5 hover:bg-cyan-600 
                        flex items-center justify-center py-2 hover:font-bold'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='cursor-pointer text-slate-100 bg-rose-500 rounded-4xl m-6 hover:bg-rose-700 w-full 
                        flex items-center justify-center py-2 hover:font-bold'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria