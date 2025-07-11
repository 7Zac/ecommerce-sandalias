import { CreditCard, Gift, Truck, Banknote, LineChart } from "lucide-react"

export default function PromotionalFeatures() {
  const features = [
    {
      icon: CreditCard,
      title: "Parcelamento",
      subtitle: "em até 12x",
      color: "text-blue-600",
    },
    {
      icon: Gift,
      title: "OFF",
      subtitle: "10%",
      color: "text-green-600",
    },
    {
      icon: Truck,
      title: "Frete",
      subtitle: "Grátis",
      color: "text-orange-600",
    },
    {
      icon: Banknote,
      title: "Cashback",
      subtitle: "acima de 500,00",
      color: "text-purple-600",
    },
  ]

  return (
    <section className="bg-cyan-800 py-12">
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Linhas verticais centralizadas entre os ícones */}
          <div className="hidden lg:flex flex-col items-center absolute left-1/4 top-1/2 -translate-y-1/2 z-10">
            <hr className="border-white w-[90px] rotate-90 my-4" />
          </div>
          <div className="hidden lg:flex flex-col items-center absolute left-2/4 top-1/2 -translate-y-1/2 z-10">
            <hr className="border-white w-[90px] rotate-90 my-4" />
          </div>
          <div className="hidden lg:flex flex-col items-center absolute left-3/4 top-1/2 -translate-y-1/2 z-10">
            <hr className="border-white w-[90px] rotate-90 my-4" />
          </div>
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 gap-4">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ${feature.color}`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-orange-300">{feature.subtitle}</p>                
              </div>                
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}
