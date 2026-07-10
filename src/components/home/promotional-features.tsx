import { CreditCard, Gift, Truck, Banknote } from "lucide-react"
import { Marquee } from "../ui/marquee"

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
      color: "text-purple-600",
    },
    {
      icon: Truck,
      title: "Frete",
      subtitle: "Grátis",
      color: "text-yellow-600",
    },
    {
      icon: Banknote,
      title: "Cashback",
      subtitle: "acima de 500,00",
      color: "text-green-600",
    },
  ]

  return (
    <div className="mt-16">
      <div className="pt-[1px] pb-[1px] bg-gradient-to-r from-cyan-300 via-cyan-100 to-blue-500">
        <section className=" bg-white py-6">
          <div className="container mx-auto px-4">
            <Marquee pauseOnHover className="">
              {features.map((feature, index) => (
                <div key={index} className="text-center flex justify-center items-center px-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color}`}
                  >
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <div className="p-2 flex flex-col items-start">
                    <h3 className="text-xl font-bold text-slate-950">{feature.title}</h3>
                    <p className="text-orange-600 text-xl font-bold">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      </div>
    </div>
  )
}
