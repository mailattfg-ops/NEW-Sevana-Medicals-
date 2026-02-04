import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Pill, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    medicine: z.string().min(2, {
        message: "Please specify the medicine or product.",
    }),
    message: z.string().optional(),
})

export function InquiryModal({ children, defaultMedicine = "" }: { children?: React.ReactNode, defaultMedicine?: string }) {
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            medicine: defaultMedicine,
            message: "",
        },
    })

    // Effect to update default value if prop changes when opening
    useEffect(() => {
        if (open && defaultMedicine) {
            form.setValue("medicine", defaultMedicine)
        }
    }, [open, defaultMedicine, form])

    function onSubmit(values: z.infer<typeof formSchema>) {
        // WhatsApp Redirection Logic
        const phoneNumber = "911234567890" // Standard Dummy Number
        const text = `*New Inquiry*\n\nName: ${values.name}\nPhone: ${values.phone}\nMedicine: ${values.medicine}\nMessage: ${values.message || "N/A"}`

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

        window.open(url, "_blank")
        toast.success("Redirecting to WhatsApp...", {
            description: "Please complete your message in WhatsApp."
        })
        setOpen(false)
        form.reset()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button size="lg" className="h-12 px-8 text-base font-bold rounded-full bg-[#DFFF00] text-primary hover:bg-[#dfff00]/90 border-none transition-transform hover:scale-105">
                        Inquiry Now
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px] p-0 border-none bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
                <div className="overflow-y-auto custom-scrollbar">
                    {/* Artistic Header Background */}
                    <div className="bg-primary/5 p-6 md:p-8 pb-6 md:pb-8 relative overflow-hidden">
                        <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                        <div className="relative z-10 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                                <Pill className="w-3 h-3" /> Quick Access
                            </div>
                            <DialogHeader>
                                <DialogTitle className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">
                                    Quick <span className="text-primary">Inquiry</span>
                                </DialogTitle>
                                <DialogDescription className="text-slate-500 font-medium text-sm md:text-base pt-1">
                                    Send your request via WhatsApp for instant support.
                                </DialogDescription>
                            </DialogHeader>
                        </div>
                    </div>

                    {/* Form Area */}
                    <div className="p-6 md:p-8 pt-4 md:pt-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</FormLabel>
                                                <FormControl>
                                                    <Input className="h-11 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 px-5" placeholder="John" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input className="h-11 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 px-5" type="tel" placeholder="+91 00000" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="medicine"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Medicine / Requirement</FormLabel>
                                            <FormControl>
                                                <Input className="h-11 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 px-5" placeholder="e.g. Paracetamol, Prescription..." {...field} />
                                            </FormControl>
                                            <FormMessage className="text-[10px]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Additional Details</FormLabel>
                                            <FormControl>
                                                <Textarea className="min-h-[80px] bg-slate-50 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-300 p-5" placeholder="Any specific notes..." {...field} />
                                            </FormControl>
                                            <FormMessage className="text-[10px]" />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="h-14 w-full rounded-2xl bg-primary text-white font-black tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 group">
                                    SEND TO WHATSAPP <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
