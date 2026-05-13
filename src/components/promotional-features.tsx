import { CreditCard, Gift, Truck, Banknote, LineChart } from "lucide-react"
import { Marquee } from "./ui/marquee"

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
    <section className="bg-cyan-600 py-8">
      <div className="container mx-auto px-4">
        <Marquee pauseOnHover className="py-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 gap-4 flex flex-col items-center px-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ${feature.color}`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <div className="p-0">
                <h3 className="text-5xl font-medium text-white font-['Cookie']">{feature.title}</h3>
                <p className="text-orange-300 font-bold">{feature.subtitle}</p>                
              </div>                
            </div>
          ))}
        </Marquee>
      </div>
      
    </section>
  )
}
