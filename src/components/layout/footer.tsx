import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-100 mt-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Image 
                                src="/LOGO_OLINDA_BRANCO.png" 
                                alt="Logo Olinda"
                                width={120}
                                height={48}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-slate-400 mb-4">
                            Conforto e beleza para os seus pés.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Linkedin">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Produtos */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Produtos
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/mulher" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Mulher
                                </Link>
                            </li>
                            <li>
                                <Link href="/homem" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Homem
                                </Link>
                            </li>
                            <li>
                                <Link href="/juvenil" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Juvenil
                                </Link>
                            </li>
                            <li>
                                <Link href="/kids" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Kids
                                </Link>
                            </li>
                            <li>
                                <Link href="/baby" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Baby
                                </Link>
                            </li>
                            <li>
                                <Link href="/licenciados" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Licenciados
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Atendimento */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Atendimento
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contato" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/duvidas" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Dúvidas Frequentes
                                </Link>
                            </li>
                            <li>
                                <Link href="/rastreamento" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Rastreamento
                                </Link>
                            </li>
                            <li>
                                <Link href="/troca-devolucao" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Trocas e Devoluções
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Empresa
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/sobre" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/carreiras" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Carreiras
                                </Link>
                            </li>
                            <li>
                                <Link href="/sustentabilidade" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Sustentabilidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Entre em Contato
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+5588999990000" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors">
                                    <Phone size={16} />
                                    <span>(88) 9 9999-0000</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@olinda.com.br" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors">
                                    <Mail size={16} />
                                    <span>contato@olinda.com.br</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors">
                                    <MapPin size={16} />
                                    <span>Juazeiro do Norte, CE</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-t border-slate-800 pt-8 mb-8">
                    <div className="max-w-md">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                            Inscreva-se em nossa Newsletter
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">
                            Receba as melhores ofertas e novidades em primeira mão.
                        </p>
                        <form className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Seu e-mail" 
                                className="flex-1 px-4 py-2 bg-slate-800 text-white text-sm rounded border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                            />
                            <button 
                                type="submit"
                                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded transition-colors"
                            >
                                Inscrever
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-slate-950 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {/* Payment Methods */}
                        <div className="text-center md:text-left">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Formas de Pagamento</p>
                            <p className="text-xs text-slate-400">
                                Cartão de Crédito • Débito • Pix • Boleto
                            </p>
                        </div>

                        {/* Shipping */}
                        <div className="text-center">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Frete e Entrega</p>
                            <p className="text-xs text-slate-400">
                                Frete grátis acima de R$ 150
                            </p>
                        </div>

                        {/* Security */}
                        <div className="text-center md:text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Segurança</p>
                            <p className="text-xs text-slate-400">
                                SSL • Dados Criptografados
                            </p>
                        </div>
                    </div>

                    {/* Legal Links and Copyright */}
                    <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left mb-4 md:mb-0">
                            <Link href="/politica-de-privacidade" className="text-xs text-slate-400 hover:text-white transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="/termos-de-uso" className="text-xs text-slate-400 hover:text-white transition-colors">
                                Termos de Uso
                            </Link>
                            <Link href="/politica-de-cookies" className="text-xs text-slate-400 hover:text-white transition-colors">
                                Política de Cookies
                            </Link>
                        </div>
                        <p className="text-xs text-slate-500">
                            © {new Date().getFullYear()} Olinda. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
