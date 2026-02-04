import { motion } from "framer-motion"
import { Pill, Syringe, Baby, Stethoscope, Thermometer, BriefcaseMedical, ArrowRight, Star, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InquiryModal } from "@/components/shared/InquiryModal"
import babyCare from "../public/Images/baby_care.png"
import productsImg from "../public/Images/products.png"
import prescriptionImg from "../public/Images/prescription_medicine.png"

const categories = [
    {
        title: "Prescription Medicines",
        description: "Upload your prescription for any medicine.",
        icon: Pill,
        color: "bg-blue-50 text-blue-600",
        items: ["Antibiotics", "Painkillers", "Chronic Care", "General Health"]
    },
    {
        title: "OTC Products",
        description: "Everyday health essentials without prescription.",
        icon: BriefcaseMedical,
        color: "bg-emerald-50 text-emerald-600",
        items: ["Vitamins", "Supplements", "First Aid", "Pain Relief"]
    },
    {
        title: "Baby Care",
        description: "Gentle products for your little ones.",
        icon: Baby,
        color: "bg-purple-50 text-purple-600",
        items: ["Diapers", "Baby Food", "Skincare", "Accessories"]
    },
    {
        title: "Medical Devices",
        description: "Equipment for home health monitoring.",
        icon: Thermometer,
        color: "bg-amber-50 text-amber-600",
        items: ["BP Monitors", "Glucometers", "Thermometers", "Pulse Oximeters"]
    },
    {
        title: "Surgicals",
        description: "Essential surgical supplies and aids.",
        icon: Syringe,
        color: "bg-rose-50 text-rose-600",
        items: ["Bandages", "Dressings", "Gloves", "Masks"]
    },
    {
        title: "Health Consulting",
        description: "Get advice from our expert pharmacists.",
        icon: Stethoscope,
        color: "bg-cyan-50 text-cyan-600",
        items: ["Medicine Guide", "Dosage Info", "interactions", "Wellness Tips"]
    }
]

export function Products() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary min-h-[40vh] flex items-center pt-32 pb-12">
                {/* Background Decorative Text */}
                <div className="absolute bottom-[-10%] left-0 w-full select-none overflow-hidden pointer-events-none flex justify-center">
                    <span className="text-[18vw] font-black text-white/5 leading-none tracking-tighter">
                        PRODUCTS
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
                                Healthcare <span className="text-white/80 italic">Essentials</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-sm md:text-base text-white/70 max-w-xl font-bold tracking-widest uppercase"
                            >
                                Browse through our wide range of healthcare products. Select a category to inquire for more information.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="relative pt-12 pb-24 bg-white overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative"
                            >
                                <div className="h-full p-8 bg-slate-50 border border-slate-100 rounded-[2rem] rounded-tr-[5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:bg-white hover:border-primary/20 flex flex-col">
                                    <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                                        <cat.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {cat.title}
                                    </h3>

                                    <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                                        {cat.description}
                                    </p>

                                    <ul className="space-y-2 mb-10 flex-grow">
                                        {cat.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-sm font-bold text-slate-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-3 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <InquiryModal defaultMedicine={cat.title}>
                                        <Button className="w-full h-12 rounded-xl font-black tracking-widest text-xs shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                                            INQUIRE NOW <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </InquiryModal>
                                </div>

                                {/* Background Decorative Circle */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Highly Recommended Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl space-y-4">
                            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-black text-[10px] tracking-[0.3em] uppercase">
                                Curated for You
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                                Highly <span className="text-primary italic">Recommended</span> <br />
                                Healthcare Essentials
                            </h2>
                        </div>
                        <p className="text-slate-500 font-medium text-lg max-w-sm">
                            Our most trusted and frequently requested products, curated by our expert pharmacists for your daily well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Premium Baby Care Kit",
                                desc: "Complete gentle care solution for your little ones.",
                                img: babyCare,
                                price: "Bundled Offer",
                                tag: "Best Seller"
                            },
                            {
                                title: "Essential Wellness Pack",
                                desc: "Daily vitamins and minerals for optimal health.",
                                img: productsImg,
                                price: "Starts at ₹499",
                                tag: "Featured"
                            },
                            {
                                title: "Chronic Care Manager",
                                desc: "Easy management system for long-term medications.",
                                img: prescriptionImg,
                                price: "Subscription",
                                tag: "Expert Choice"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="bg-slate-50 rounded-[3rem] rounded-tr-[7rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-slate-100 group-hover:border-primary/20 group-hover:bg-white">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-primary font-black text-[10px] tracking-widest uppercase shadow-sm">
                                            {item.tag}
                                        </div>
                                        <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-rose-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Heart className="w-5 h-5 fill-current" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-1 mb-4 text-amber-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                            <span className="text-[10px] font-black text-slate-400 ml-2 tracking-widest uppercase">(120+ Reviews)</span>
                                        </div>

                                        <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-500 font-medium mb-8 leading-relaxed line-clamp-2">
                                            {item.desc}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between gap-4">
                                            <div className="text-xl font-black text-slate-900">{item.price}</div>
                                            <InquiryModal defaultMedicine={item.title}>
                                                <Button size="sm" className="rounded-xl px-5 py-6 bg-primary hover:bg-primary/90 text-white font-black tracking-widest text-[10px] group/btn">
                                                    INQUIRE <ShoppingBag className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                </Button>
                                            </InquiryModal>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative Background Text */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />
            </section>
        </div>
    )
}
