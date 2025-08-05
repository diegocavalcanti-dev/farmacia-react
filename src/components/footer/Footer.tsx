import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    const data = new Date().getFullYear()

    return (
        <div className="flex justify-center bg-blue-600 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>
                    iFarma Tech | Copyright: {data}
                </p>
                <p className='text-lg'>Feito por Diego Cavalcanti. Redes socias: </p>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/diegoscavalcanti/" target="_blank">
                        <LinkedinLogoIcon size={48} weight='bold' />
                    </a>
                    <a href="https://instagram.com/diego.cavalcantti" target="_blank">
                        <InstagramLogoIcon size={48} weight='bold' />
                    </a>
                    <a href="https://www.facebook.com/diegocavalcantis" target="_blank">
                        <FacebookLogoIcon size={48} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
