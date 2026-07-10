"use client";

export default function InfoCards() {

    return (

        <div className="mt-8 flex flex-col gap-4">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:from-blue-100 hover:to-blue-200 hover:-translate-y-1">
                <p className="text-sm font-semibold text-blue-900">Frete Rápido</p>
                <p className="mt-2 text-sm text-blue-600">Entrega em até 3 dias úteis para todo o Brasil.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:from-emerald-100 hover:to-emerald-200 hover:-translate-y-1">
                <p className="text-sm font-semibold text-emerald-900">Troca Fácil</p>
                <p className="mt-2 text-sm text-emerald-600">Você troca em até 30 dias com toda tranquilidade.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 to-purple-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:from-purple-100 hover:to-purple-200 hover:-translate-y-1">
                <p className="text-sm font-semibold text-purple-900">Produtos Selecionados</p>
                <p className="mt-2 text-sm text-purple-600">Cada item passa por um controle de qualidade rigoroso.</p>
            </div>
        </div>
    )

};