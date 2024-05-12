import Footer from "@/components/ui/footer"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex flex-col gap-4 items-center justify-center flex-grow bg-gradient-radial from-red-600/50 via-black to-transparent">
            <h1 className="text-9xl font-bebas">404</h1>
            <p className="text-xl text-center">No encontramos <br/>lo que buscas 🔎😞</p>
            <Link className="bg-red-600 rounded-xl p-3 font-semibold hover:scale-105 transition-all duration-300 ease-in-out delay-100" href="/">🏠 Ir al Inicio</Link>
        </main>
        <Footer/>
    </div>
  )
}

export default NotFound