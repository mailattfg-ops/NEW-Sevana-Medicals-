import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Regular Customer",
        initial: "S",
        content: "The delivery was super fast! Ordered in the morning and received it by afternoon. Their professionalism is unmatched.",
        rating: 5,
        color: "bg-blue-50 text-blue-600"
    },
    {
        name: "Michael Brown",
        role: "Patient",
        initial: "M",
        content: "Very easy to use. I just uploaded my prescription via WhatsApp and they handled everything. Seamless experience!",
        rating: 5,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        name: "Emily Davis",
        role: "Healthcare Professional",
        initial: "E",
        content: "Genuine medicines and great discounts. The support team is also exceptionally knowledgeable and helpful.",
        rating: 5,
        color: "bg-purple-50 text-purple-600"
    }
]

export function Testimonials() {
    return (
        <section className="relative pt-16 pb-16 bg-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none select-none overflow-hidden opacity-[0.02]">
                <Quote className="w-[80%] h-full text-primary -rotate-12 absolute left-[-10%]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase"
                    >
                        Success Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                    >
                        What Our <span className="text-primary text-gradient">Customers Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 max-w-2xl text-lg font-medium"
                    >
                        Every feedback helps us grow. Join thousands of satisfied customers who trust us for their healthcare.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group"
                        >
                            <div className="h-full p-8 bg-slate-50 border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:bg-white hover:border-primary/20 transition-all duration-500 relative flex flex-col">
                                <div className="flex gap-1 mb-6 text-emerald-400">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>

                                <blockquote className="flex-grow mb-10">
                                    <p className="text-xl font-medium text-slate-700 leading-relaxed italic">
                                        "{t.content}"
                                    </p>
                                </blockquote>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className={`w-14 h-14 rounded-2xl ${t.color} flex items-center justify-center font-black text-xl shadow-inner`}>
                                        {t.initial}
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900 tracking-tight text-lg">{t.name}</p>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>

                                {/* Floating Quote Decoration */}
                                <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
                                    <Quote className="w-20 h-20 text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
