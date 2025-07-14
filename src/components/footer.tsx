import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return(            
            <footer className="bg-cyan-900 text-white py-8">
                <Link href="/" className="flex items-center space-x-2">
                <img src="/" alt="" />
                </Link>
                <div className="container mx-auto px-4">
                    <div className="flex items-center flex-col-reverse">
                        <div className="text-center">
                            <p className="text-sm">© 2023 Sua Loja. Todos os direitos reservados.</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="/sobre" className="text-sm hover:underline">Sobre Nós</a>
                            <a href="/contato" className="text-sm hover:underline">Contato</a>
                            <a href="/politica-de-privacidade" className="text-sm hover:underline">Política de Privacidade</a>
                        </div>
                    </div>
                </div>
            </footer>       
    )

}
