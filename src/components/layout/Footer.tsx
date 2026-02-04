import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Pill, ArrowRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-white/20">
                                <Pill className="h-7 w-7 text-primary" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                                New Sevana <span className="text-white/80 font-black">Medicals</span>
                            </span>
                        </Link>
                        <p className="text-white/80 text-lg font-medium leading-relaxed max-w-md">
                            Your trusted partner for healthcare excellence. We combine centuries of pharmaceutical wisdom with modern convenience for a healthier tomorrow.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    to="#"
                                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#DFFF00] mb-8">Navigation</h3>
                            <ul className="space-y-4">
                                {["Home", "Products", "Services", "About Us", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                            className="text-white/70 hover:text-white transition-colors duration-300 font-bold group flex items-center"
                                        >
                                            <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all mr-0 group-hover:mr-2 text-[#DFFF00]" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#DFFF00] mb-8">Our Focus</h3>
                            <ul className="space-y-4">
                                {["Prescriptions", "OTC Wellness", "Baby Care", "Consultation"].map((item) => (
                                    <li key={item} className="text-white/70 font-bold">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#DFFF00] mb-8">Reach Us</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4 text-white/70" />
                                    </div>
                                    <span className="text-white/70 font-medium">Plankamon, Ranny, Kerala, 689674</span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Phone className="h-4 w-4 text-white/70" />
                                    </div>
                                    <a href="tel:+911234567890" className="text-white/70 font-medium hover:text-white transition-colors">+91 12345 67890</a>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Mail className="h-4 w-4 text-white/70" />
                                    </div>
                                    <a href="mailto:contact@newsevanamedicals.com" className="text-white/70 font-medium hover:text-white transition-colors break-all text-sm">contact@sevana.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/50 font-medium text-sm">
                        © {new Date().getFullYear()} <span className="text-white/80">New Sevana Medicals.</span> All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="#" className="text-white/50 hover:text-white transition-colors text-sm font-bold">Privacy Policy</Link>
                        <Link to="#" className="text-white/50 hover:text-white transition-colors text-sm font-bold">Terms of Use</Link>
                        <Link to="#" className="text-white/50 hover:text-white transition-colors text-sm font-bold">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
