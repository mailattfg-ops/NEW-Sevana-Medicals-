import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Pill, MessageSquare, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/sheet" // This was using Dialog from sheet? Actually Header.tsx had Sheet import
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { InquiryModal } from "@/components/shared/InquiryModal"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleWhatsAppRedirect = () => {
        const phoneNumber = "911234567890"
        const text = "Hello New Sevana Medicals, I would like to inquire about your services."
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
        window.open(url, "_blank")
    }

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/#contact" },
    ]

    return (
        <header
            className={cn(
                "fixed top-2 z-40 w-full transition-all px-4",
                isScrolled ? "py-0" : "py-2"
            )}
        >
            <div className={cn(
                "container mx-auto flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg border border-white/20 transition-all",
                isScrolled ? "shadow-xl" : ""
            )}>
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-xl group-hover:scale-105 transition-transform">
                        <Pill className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-primary">
                        New Sevana
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-semibold transition-colors hover:text-primary",
                                location.pathname === link.path ? "text-primary bg-primary/5 px-3 py-1 rounded-full" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button
                        onClick={handleWhatsAppRedirect}
                        className="rounded-full font-bold bg-primary text-white hover:bg-primary/90 shadow-sm border border-transparent px-6 transition-transform hover:scale-105"
                    >
                        <MessageSquare className="mr-2 h-4 w-4" /> Contact Us
                    </Button>
                </div>

                {/* Mobile Nav */}
                <div className="flex md:hidden items-center gap-2">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="text-primary hover:bg-primary/10"
                        onClick={handleWhatsAppRedirect}
                    >
                        <MessageSquare className="h-5 w-5" />
                    </Button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-6 mt-6">
                                <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                                    <div className="bg-primary p-2 rounded-xl">
                                        <Pill className="h-6 w-6 text-white" />
                                    </div>
                                    <span className="text-lg font-bold text-primary">New Sevana</span>
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button
                                    className="w-full mt-4 bg-primary text-white font-bold"
                                    onClick={() => {
                                        setIsOpen(false)
                                        handleWhatsAppRedirect()
                                    }}
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" /> Contact Us
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
