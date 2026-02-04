import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InquiryModal } from "@/components/shared/InquiryModal"
import heroImage from "../../public/Images/Hero3.webp"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary min-h-[80vh] flex items-center pt-20 pb-0">
            {/* Background Decorative Text */}
            <div className="absolute bottom-[-2%] left-0 w-full select-none overflow-hidden pointer-events-none flex justify-center">
                <span className="text-[13vw] font-black text-white/5 leading-none tracking-tighter">
                    PHARMACY
                </span>
            </div>

            <div className="container px-4 md:px-6 relative z-10 w-full mt-12 md:mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
                    {/* Text Content */}
                    <div className="flex flex-col items-start text-left space-y-6 lg:space-y-8 py-8 lg:pb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
                        >
                            Expert Pharmacy <br />
                            <span className="text-white">Service & Care</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-white/90 max-w-[30rem] font-medium"
                        >
                            Quick delivery, expert advice, always here for you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <InquiryModal>
                                <Button size="lg" className="h-12 px-8 text-base font-bold rounded-full bg-[#DFFF00] text-primary hover:bg-[#dfff00]/90 border-none transition-transform hover:scale-105">
                                    Shop Now
                                </Button>
                            </InquiryModal>

                            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-bold rounded-full bg-transparent text-white border-white hover:bg-white/10 hover:text-white transition-transform hover:scale-105" asChild>
                                <a href="#features">Explore More</a>
                            </Button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col text-white">
                                <div className="flex items-center text-[#DFFF00]">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="ml-1 font-bold">4.9/5</span>
                                </div>
                                <span className="text-sm text-white/80">Rated by 2,400+ families</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative flex justify-center lg:justify-end h-full items-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full flex justify-end items-end"
                        >
                            <img
                                src={heroImage}
                                alt="Pharmacist"
                                className="w-[180%] max-w-[1800px] lg:mr-[-10%] drop-shadow-2xl origin-bottom"
                            />
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section >
    )
}
