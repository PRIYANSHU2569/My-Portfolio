import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { type FormEvent, useRef, useState } from "react";
import { Mail, Github, Linkedin, Code2, Trophy, Send, LoaderCircle } from "lucide-react";

const links = [
	{ label: "GitHub", href: "https://github.com/PRIYANSHU2569", icon: Github },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-gupta-7474502b7/", icon: Linkedin },
	{ label: "LeetCode", href: "https://leetcode.com/u/Priyanshugupta2569/", icon: Code2 },
	{ label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/priyanshug9who/", icon: Trophy },
];

const inputClassName = "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/20";
const emailAddress = "priyanshugupta2569@gmail.com";

function ContactMe() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);
	const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

	const focusForm = () => {
		formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
		formRef.current?.querySelector<HTMLInputElement>("#full-name")?.focus({ preventScroll: true });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isSending) return;

		const form = formRef.current;
		if (!form || !form.reportValidity()) return;

		const formData = new FormData(form);
		// Honeypot field: real visitors never see or fill this input.
		if (String(formData.get("company_website") ?? "").trim()) {
			setFeedback({ type: "error", text: "Unable to send this message. Please try again." });
			return;
		}

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		if (!serviceId || !templateId || !publicKey) {
			setFeedback({ type: "error", text: "The contact form is not configured yet. Please email me directly." });
			return;
		}

		const templateParams = {
			from_name: String(formData.get("from_name") ?? "").trim(),
			from_email: String(formData.get("from_email") ?? "").trim(),
			subject: String(formData.get("subject") ?? "").trim(),
			message: String(formData.get("message") ?? "").trim(),
			to_email: emailAddress,
		};

		setIsSending(true);
		setFeedback(null);
		try {
			await emailjs.send(serviceId, templateId, templateParams, { publicKey });
			setFeedback({ type: "success", text: "Your message was sent successfully. Thank you for reaching out!" });
			form.reset();
		} catch {
			setFeedback({ type: "error", text: "Your message could not be sent. Please try again or email me directly." });
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section id="contact" className="relative min-h-full w-full flex items-center justify-center px-6 py-20">
			<div className="flex w-full max-w-5xl flex-col items-center text-center font-mono">
				<h2 className="text-3xl md:text-6xl font-bold text-white">Get in Touch<span className="text-blue-500">.</span></h2>
				<p className="mt-6 text-white/50 md:text-xl max-w-2xl">Interested in working together or talking about software? I’d be glad to hear from you.</p>
				<a href={`mailto:${emailAddress}`} className="mt-8 flex items-center gap-3 text-white/80 hover:text-white transition-colors">
					<Mail className="text-blue-500" />{emailAddress}
				</a>
				<div className="mt-8 flex flex-wrap justify-center gap-3">
					{links.map(({ label, href, icon: Icon }) => (
						<a key={label} href={href} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl border border-white/10 bg-white/3 text-white/70 backdrop-blur-md hover:bg-white/6 hover:text-white transition-all duration-300 flex items-center gap-2">
							<Icon size={18} />{label}
						</a>
					))}
				</div>

				<button type="button" onClick={focusForm} className="mt-10 px-8 py-4 rounded-2xl bg-blue-500 text-white font-medium flex items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300">
					<Mail size={20} />Send an Email
				</button>

				<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }} className="mt-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/3 p-5 sm:p-8 md:p-10 text-left backdrop-blur-md">
					<h3 className="text-2xl font-semibold text-white">Send me a message</h3>
					<p className="mt-2 text-sm text-white/50">Fill out the form and I’ll get back to you by email.</p>
					<form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="mt-7 space-y-5" aria-busy={isSending}>
						<div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
							<label htmlFor="company-website">Leave this field empty</label>
							<input id="company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
						</div>
						<div className="grid sm:grid-cols-2 gap-5">
							<div className="space-y-2">
								<label htmlFor="full-name" className="text-sm text-white/75">Full Name</label>
								<input id="full-name" name="from_name" type="text" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" className={inputClassName} />
							</div>
							<div className="space-y-2">
								<label htmlFor="email-address" className="text-sm text-white/75">Email Address</label>
								<input id="email-address" name="from_email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className={inputClassName} />
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="subject" className="text-sm text-white/75">Subject</label>
							<input id="subject" name="subject" type="text" required minLength={3} maxLength={150} placeholder="What would you like to discuss?" className={inputClassName} />
						</div>
						<div className="space-y-2">
							<label htmlFor="message" className="text-sm text-white/75">Message</label>
							<textarea id="message" name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Write your message..." className={`${inputClassName} resize-y`} />
						</div>
						<button type="submit" disabled={isSending} className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60">
							{isSending ? <><LoaderCircle size={18} className="animate-spin" />Sending...</> : <><Send size={18} />Send Message</>}
						</button>
						{feedback && <p role={feedback.type === "error" ? "alert" : "status"} aria-live="polite" className={`text-sm ${feedback.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>{feedback.text}</p>}
					</form>
				</motion.div>
			</div>
		</section>
	);
}

export default ContactMe;
