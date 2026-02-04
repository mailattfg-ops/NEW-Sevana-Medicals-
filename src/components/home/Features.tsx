import { Pill, Truck, Clock, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        icon: Pill,
        title: "Prescription Refill",
        description: "Upload your prescription and get medicines delivered securely."
    },
    {
        icon: Truck,
        title: "Home Delivery",
        description: "Fast and secure delivery to your doorstep within hours."
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "We are available round the clock for your medical needs."
    },
    {
        icon: ShieldCheck,
        title: "Genuine Medicines",
        description: "100% authentic products from globally trusted sources."
    }
]

export function Features() {
    return (
        <section id="features" className="relative pt-8 pb-16 bg-white overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-widest uppercase"
                    >
                        Our Commitment
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                    >
                        Why Choose <span className="text-primary text-gradient">True Health?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 max-w-2xl text-lg font-medium"
                    >
                        We combine centuries-old wisdom with modern convenience to provide the highest standard of pharmaceutical care.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="relative h-full p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:bg-white hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                                        <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-600 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Abstract Hover Accent */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
