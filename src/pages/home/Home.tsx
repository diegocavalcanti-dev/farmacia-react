import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias"

function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-100 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-7xl font-bold'>
                            iFarma Tech
                        </h2>
                        <p className='text-2xl'>
                            Sua farmácia inteligente e conectada
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                {/* <ModalPostagem /> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/6j8wkskq7/ifarma.png?updatedAt=1754408548252"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaCategorias />
        </>
    )
}

export default Home