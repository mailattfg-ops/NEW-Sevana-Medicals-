import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { Testimonials } from "@/components/home/Testimonials"
import { ContactSection } from "@/components/home/ContactSection"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Pill, Baby, BriefcaseMedical, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
    {
        title: "Prescription Medicines",
        icon: Pill,
        color: "bg-blue-50 text-blue-600",
        image: "/images/categories/prescription.png"
    },
    {
        title: "OTC Products",
        icon: BriefcaseMedical,
        color: "bg-emerald-50 text-emerald-600",
        image: "/images/categories/otc.png"
    },
    {
        title: "Baby Care",
        icon: Baby,
        color: "bg-purple-50 text-purple-600",
        image: "/images/categories/baby.png"
    }
];

export function Index() {
    return (
        <div className="overflow-hidden">
            <Hero />

            {/* Shop by Category - Creative Redesign with Images */}
            <section className="relative pt-24 pb-8 bg-white overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4 mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase"
                        >
                            Quick Access
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                        >
                            Shop by <span className="text-primary text-gradient">Category</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 max-w-2xl text-lg font-medium"
                        >
                            Find the right healthcare essentials quickly and easily through our curated categories.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <Link
                                    to="/products"
                                    className="relative block h-[450px] p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] rounded-tr-[7rem] shadow-sm hover:shadow-2xl transition-all duration-700 group overflow-hidden"
                                >
                                    {/* Text Content */}
                                    <div className="relative z-20 flex flex-col h-full transition-colors duration-500">
                                        <div className={`w-20 h-20 ${cat.color} rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                            <cat.icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-white transition-colors duration-500 delay-100 group-hover:drop-shadow-lg">
                                            {cat.title}
                                        </h3>
                                        <p className="text-slate-500 group-hover:text-white/80 transition-colors duration-500 delay-100 mb-8 max-w-[200px]">
                                            Professional grade healthcare solutions.
                                        </p>

                                        <div className="mt-auto flex items-center text-primary group-hover:text-white font-black text-sm tracking-widest transition-colors duration-500">
                                            EXPLORE NOW <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Slide-in Image Decoration */}
                                    <div className="absolute inset-0 z-10 pointer-events-none">
                                        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <motion.div
                                            initial={{ x: '100%', y: '100%' }}
                                            whileHover={{ x: '10%', y: '10%' }}
                                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                            className="absolute -right-20 -bottom-20 w-[120%] h-[120%] opacity-0 group-hover:opacity-100 duration-500"
                                        >
                                            <img
                                                src={cat.image}
                                                alt={cat.title}
                                                className="w-full h-full object-cover rounded-tl-[10rem] border-8 border-white/20"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Border Glow for Hover */}
                                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 rounded-[2.5rem] rounded-tr-[7rem]" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <Button asChild size="lg" className="h-14 px-10 rounded-full font-black tracking-wider text-sm shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
                            <Link to="/products">
                                VIEW ALL CATEGORIES <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Features />
            <Testimonials />
            <ContactSection />
        </div>
    )
}
