import { motion } from "framer-motion"
import { Truck, Clock, ShieldCheck, HeartPulse, Stethoscope, PhoneCall, ArrowRight, CheckCircle2, Award } from "lucide-react"
import servicesHero from "../public/Images/ServicesHero.png"

const services = [
    {
        title: "Home Delivery",
        description: "Free home delivery for orders above ₹500 within 5km radius.",
        icon: Truck,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        title: "24/7 Availability",
        description: "We are open round the clock for emergencies or urgent medicine needs.",
        icon: Clock,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Prescription Refill",
        description: "Never run out of medicines with our seamless auto-refill management.",
        icon: ShieldCheck,
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Health Checkups",
        description: "Complimentary BP and Blood Sugar checkups available daily at our store.",
        icon: HeartPulse,
        color: "bg-rose-50 text-rose-600"
    },
    {
        title: "Expert Advice",
        description: "Professional consultations with our pharmacists for dosage and guidance.",
        icon: Stethoscope,
        color: "bg-cyan-50 text-cyan-600"
    },
    {
        title: "Tele-Assistance",
        description: "Quick medicine queries and order placements via phone or WhatsApp.",
        icon: PhoneCall,
        color: "bg-amber-50 text-amber-600"
    }
]

export function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary min-h-[40vh] flex items-center pt-32 pb-16">
                {/* Background Decorative Text */}
                <div className="absolute bottom-[-10%] left-0 w-full select-none overflow-hidden pointer-events-none flex justify-center">
                    <span className="text-[18vw] font-black text-white/5 leading-none tracking-tighter">
                        SERVICES
                    </span>
                </div>

                <div className="container px-4 md:px-6 relative z-10 w-full mt-12 md:mt-16">
                    <div className="flex flex-col items-center text-center space-y-6">
                        {/* Text Content */}
                        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white leading-none uppercase drop-shadow-2xl"
                            >
                                Care & <span className="text-white/80 italic">Support</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-sm md:text-base text-white/70 max-w-xl font-bold tracking-widest uppercase"
                            >
                                Professional medical services and consultations tailored to your community's needs. We're more than just a pharmacy.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid - Premium Asymmetrical Style */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] rounded-tr-[5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:bg-white hover:border-primary/20 flex flex-col items-start text-left">
                                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                                        <service.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto flex items-center text-primary font-black text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        LEARN MORE <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Background Decorative Circle */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Commitment Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-black text-[10px] tracking-[0.3em] uppercase">
                                Our Promise
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                Excellence in <br />
                                <span className="text-primary italic">Pharmaceutical Care</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
                                We go beyond simple dispensing. Our commitment is to ensure every patient receives the right medication, accurate information, and empathetic support for their health journey.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    "Authentic global medicine sourcing",
                                    "Controlled cold-chain for sensitive drugs",
                                    "Free counseling on drug interactions",
                                    "Dedicated emergency support channel"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-bold tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-xl shadow-primary/5 border border-primary/10 max-w-sm hover:scale-[1.02] transition-transform">
                                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-400 tracking-widest uppercase mb-1">Certified Lab</div>
                                        <div className="text-xl font-black text-slate-900 leading-none">ISO 9001:2015</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] md:aspect-square bg-white p-4 rounded-[4rem] rounded-tr-[12rem] shadow-2xl relative z-10 overflow-hidden group">
                                <img
                                    src={servicesHero}
                                    alt="Medical Care"
                                    className="w-full h-full object-cover rounded-[3rem] rounded-tr-[11rem] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </div>

                            {/* Floating Accent */}
                            <div className="absolute -bottom-8 -left-8 p-10 bg-[#DFFF00] rounded-[3rem] shadow-2xl z-20 hidden md:block rotate-3 animate-float">
                                <PhoneCall className="w-12 h-12 text-primary mb-4" />
                                <div className="text-xs font-black text-primary/60 tracking-widest uppercase mb-1 font-mono">24/7 Support</div>
                                <div className="text-2xl font-black text-primary">+91 12345 67890</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
