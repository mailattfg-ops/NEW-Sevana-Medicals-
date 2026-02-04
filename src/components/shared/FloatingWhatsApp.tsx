import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
    const phoneNumber = "911234567890" // Standard Dummy Number
    const text = "Hi, I'm interested in ordering medicines."

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
        window.open(url, "_blank")
    }

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="font-semibold hidden sm:inline">Chat with us</span>
        </button>
    )
}
