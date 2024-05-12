import Footer from "@/components/ui/footer"
import Navbar from "@/components/navbar"

interface Props {
    children: React.ReactNode
}

const PublicLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default PublicLayout