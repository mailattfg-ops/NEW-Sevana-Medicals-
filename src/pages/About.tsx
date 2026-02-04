import { motion } from "framer-motion"
import { ShieldCheck, Users, History, Target, ArrowRight, HeartPulse, GraduationCap } from "lucide-react"
import aboutHero from "../public/Images/AboutHero.png"

export function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary min-h-[45vh] flex items-center pt-32 pb-16">
                {/* Background Decorative Text */}
                <div className="absolute bottom-[-10%] left-0 w-full select-none overflow-hidden pointer-events-none flex justify-center">
                    <span className="text-[18vw] font-black text-white/5 leading-none tracking-tighter uppercase">
                        About Us
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
                                Our <span className="text-white/80 italic">Legacy</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-sm md:text-base text-white/70 max-w-xl font-bold tracking-widest uppercase"
                            >
                                Serving the community with trust and care since 2010. Your health is our priority.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Premium Overlap Design */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="p-10 md:p-14 bg-slate-50 border border-slate-100 rounded-[3rem] rounded-tr-[8rem] relative z-20 group hover:shadow-2xl transition-all duration-700">
                                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <History className="w-24 h-24 rotate-12" />
                                </div>
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10">
                                    <History className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Our History</h2>
                                <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                                    Started as a small pharmacy store, New Sevana Medicals has grown into a trusted healthcare partner for thousands of families. Over the last decade, we have expanded to 3 branches, ensuring that quality medicines are always within reach.
                                </p>
                                <div className="flex items-center text-primary font-black text-xs tracking-[0.2em] uppercase">
                                    ESTABLISHED 2010 <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative lg:mt-24"
                        >
                            <div className="p-10 md:p-14 bg-primary text-white rounded-[3rem] rounded-bl-[8rem] relative z-20 group hover:shadow-2xl transition-all duration-700">
                                <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                                    <Target className="w-24 h-24 -rotate-12" />
                                </div>
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Our Mission</h2>
                                <p className="text-white/80 font-medium text-lg leading-relaxed mb-8">
                                    To empower our community with better health by providing genuine medicines, expert advice, and compassionate care. We strive to be more than just a pharmacy; we are your partners in wellness.
                                </p>
                                <div className="flex items-center text-[#DFFF00] font-black text-xs tracking-[0.2em] uppercase">
                                    DEDICATED TO CARE <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Category Grid Style */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-black text-[10px] tracking-[0.3em] uppercase">
                            Excellence in Care
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why We Are Trusted</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Verified Quality",
                                desc: "All medicines are sourced directly from manufacturers and authorized distributors.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Users,
                                title: "Expert Team",
                                desc: "Our team of pharmacists is available 24/7 to answer your queries and provide guidance.",
                                color: "bg-emerald-50 text-emerald-600"
                            },
                            {
                                icon: HeartPulse,
                                title: "Modern Facilities",
                                desc: "Equipped with state-of-the-art storage and testing facilities for medicine safety.",
                                color: "bg-rose-50 text-rose-600"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] rounded-tr-[5rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start text-left"
                            >
                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-auto flex items-center text-primary font-black text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    Learn More <ArrowRight className="ml-2 w-3 h-3" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                                Committed to <br />
                                <span className="text-primary italic">Your Well-being</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed">
                                At New Sevana, we believe that healthcare is a human right, not a luxury. We are constantly innovating our delivery and consultation processes to make health management as seamless as possible for you.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-slate-50 rounded-3xl">
                                    <div className="text-4xl font-black text-primary mb-2">14+</div>
                                    <div className="text-sm font-bold text-slate-400 tracking-wider uppercase">Years Experience</div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-3xl">
                                    <div className="text-4xl font-black text-primary mb-2">50k+</div>
                                    <div className="text-sm font-bold text-slate-400 tracking-wider uppercase">Happy Customers</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-100 rounded-[4rem] rounded-tr-[12rem] overflow-hidden">
                                <img
                                    src={aboutHero}
                                    alt="Pharmacy Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 p-8 bg-[#DFFF00] rounded-3xl shadow-xl max-w-[200px]">
                                <GraduationCap className="w-10 h-10 text-primary mb-4" />
                                <p className="text-primary font-black text-sm leading-tight">Expert Pharmacists Certified Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
