import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { motion } from "framer-motion"

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    message: z.string().min(5, "Message must be at least 5 characters"),
})

export function ContactSection() {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof contactSchema>) {
        const phoneNumber = "911234567890"
        const text = `*New Contact Message*\n\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Message:* ${values.message}`

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

        window.open(url, "_blank")
        toast.success("Redirecting to WhatsApp...", {
            description: "Please complete your message in WhatsApp."
        })
        form.reset()
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Our Store",
            details: ["Plankamon, Ranny", "Kerala, India - 689674"],
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: Phone,
            title: "Call Anytime",
            details: ["+91 12345 67890", "+91 04735 222100"],
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            icon: Mail,
            title: "Email Support",
            details: ["contact@newsevanamedicals.com", "support@sevana.com"],
            color: "bg-purple-50 text-purple-600"
        }
    ]

    return (
        <section id="contact" className="relative pt-16 pb-32 bg-white overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Info & Map */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6"
                            >
                                Let's Connect
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                            >
                                Get in Touch with Our <span className="text-primary text-gradient">Expert Team</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-500 text-lg font-medium leading-relaxed"
                            >
                                Whether you have a question about prescriptions, delivery, or general wellness, we're here to help.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:shadow-xl hover:bg-white transition-all duration-500 group"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${info.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <info.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 tracking-tight text-lg mb-1">{info.title}</h4>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-slate-500 font-medium">{detail}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white p-8 md:p-12 border border-slate-100 rounded-[3rem] rounded-tr-[1rem] shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative background mark */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                        <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Send Us a Message</h3>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</FormLabel>
                                                <FormControl>
                                                    <Input className="h-14 bg-slate-50 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 px-6" placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input className="h-14 bg-slate-50 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 px-6" placeholder="+91 0000 000000" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</FormLabel>
                                            <FormControl>
                                                <Input className="h-14 bg-slate-50 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 px-6" placeholder="hello@company.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400">How can we help?</FormLabel>
                                            <FormControl>
                                                <Textarea className="min-h-[160px] bg-slate-50 border-none rounded-3xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 p-6" placeholder="Tell us more about your needs..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="h-16 w-full rounded-2xl bg-primary text-white font-black tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                                    SEND MESSAGE <ArrowRight className="ml-3 h-5 w-5" />
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>

                {/* Map Section Addition */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 w-full bg-slate-100 p-4 rounded-[4rem] shadow-inner relative group"
                >
                    <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
                        <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Our Location</p>
                        <p className="text-slate-900 font-bold">Plankamon, Ranny, Kerala</p>
                    </div>

                    <div className="h-[450px] w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.4385966453!2d76.81451527589133!3d9.38959998188151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063d3d7d7d7d7d%3A0x7d7d7d7d7d7d7d7d!2sNew%20Sevana%20Medicals!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </motion.div>
            </div>

            {/* Subtle background texture */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    )
}
