import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useEffect } from "react"
import { Toaster } from "sonner"
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp"

export function Layout() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1))
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" })
                }, 100)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <Toaster />
        </div>
    )
}
