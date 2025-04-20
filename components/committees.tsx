import Link from "next/link"
import { Users } from "lucide-react"

const committeeItems = [
  {
    id: 1,
    title: "Board of trustees",
    icon: <Users className="h-12 w-12 text-white" />,
    bgColor: "bg-[#963634]",
    link: "#",
  },
  {
    id: 2,
    title: "EC Council",
    icon: <Users className="h-12 w-12 text-white" />,
    bgColor: "bg-[#4A4A4A]",
    link: "#",
  },
]

export default function Committees() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Committees</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {committeeItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`flex flex-col items-center justify-center rounded-lg ${item.bgColor} p-12 text-white transition-transform hover:scale-105`}
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
