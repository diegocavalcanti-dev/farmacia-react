/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CardCategorias from "../cardCategorias/CardCategorias";
import { DNA } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { AnimatePresence, motion } from "framer-motion";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [visiveis, setVisiveis] = useState(6)

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                console.error("Acesso negado: erro 401")
            }
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [])

    return (
        <>
            <div className="flex justify-center">
                <h1 className="font-bold text-5xl text-cyan-700 m-8 logo-2">Lista de Categorias</h1>
            </div>

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-8">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {categorias.slice(0, visiveis).map((categoria) => (
                                <motion.div
                                    key={categoria.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <CardCategorias categoria={categoria} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {visiveis < categorias.length && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setVisiveis((prev) => prev + 6)}
                                className="cursor-pointer bg-cyan-600 text-white py-2 px-6 rounded-lg hover:bg-cyan-700 font-bold"
                            >
                                Carregar mais
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;
