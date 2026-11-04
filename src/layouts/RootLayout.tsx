import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <section className="min-h-screen">
        <Navbar />
        <Outlet />
    </section>
  )
}

export default RootLayout