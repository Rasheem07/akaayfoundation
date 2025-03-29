"use client";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import {
  RocketIcon,
  UserCheckIcon,
  Settings2Icon,
  CheckCircleIcon,
  SendIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div
      className={`min-h-screen bg-[#121212] text-white ${outfit.className} scroll-smooth`}
    >
      {/* Header */}
      <header className="w-full px-6 md:px-20 py-6 flex justify-between items-center border-b border-[#2a2a2a]">
        <h1 className="text-2xl font-bold tracking-tight text-[#00ffae]">
          Akaay Foundation
        </h1>
        <nav className="hidden md:flex gap-10 text-sm text-gray-300 font-medium">
          <Link href="#about" className="hover:text-[#00ffae] transition">
            About
          </Link>
          <Link href="#services" className="hover:text-[#00ffae] transition">
            Services
          </Link>
          <Link href="#why" className="hover:text-[#00ffae] transition">
            Why Us
          </Link>
          <Link href="#contact" className="hover:text-[#00ffae] transition">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="w-full px-6 md:px-20 py-32 bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col gap-10"
        >
          <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Internships, <span className="text-[#00ffae]">Reimagined</span>.
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl">
            We help ambitious learners break into real-world tech by connecting
            them to high-growth startups. No gatekeeping. No fluff. Just
            execution.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="relative overflow-hidden bg-[#00ffae] cursor-pointer text-black px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 group">
              <span
                className="absolute inset-0 w-full h-full bg-white rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
                style={{ mixBlendMode: "overlay" }}
              ></span>
              <span className="relative z-10">Hire Talent</span>
            </button>
            <button className="cursor-pointer relative border border-[#00ffae] text-[#00ffae] px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-[#1A1A2E] shadow-md">
              Join as Intern
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section id="about" className="px-6 md:px-20 py-28 bg-[#1A1A2E]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-[#00ffae] mb-6">Who We Are</h3>
          <p className="text-gray-300 text-lg max-w-3xl leading-loose">
            Akaay Foundation is more than a talent platform. We’re a movement to
            empower raw, hungry, self-taught developers to launch their careers.
            We scout potential, not paper. Our mission? Close the gap between
            ambition and opportunity.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-20 py-28 bg-[#121212]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#00ffae] mb-14"
          >
            What We Do
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                Icon: RocketIcon,
                title: "Talent Scouting",
                desc: "We find learners who build, ship, and grow daily.",
              },
              {
                Icon: UserCheckIcon,
                title: "Skill Matching",
                desc: "Smart pairing between intern skills and startup needs.",
              },
              {
                Icon: Settings2Icon,
                title: "End-to-End Support",
                desc: "We manage onboarding, feedback, and reporting.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="bg-[#1A1A2E] p-8 rounded-xl border border-gray-700 hover:border-[#00ffae] transition shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-[#00ffae] w-10 h-10 mb-6" />
                <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-400 text-md leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="px-6 md:px-20 py-28 bg-[#1A1A2E]">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-[#00ffae] mb-8">
            Why Choose Us?
          </h3>
          <ul className="grid gap-5 text-lg text-gray-300">
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="text-[#00ffae] w-6 h-6" /> Curated
              talent only
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="text-[#00ffae] w-6 h-6" /> Built for
              scaleups & startups
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="text-[#00ffae] w-6 h-6" /> Real-world
              deliverables
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="text-[#00ffae] w-6 h-6" />{" "}
              Performance-based screening
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="text-[#00ffae] w-6 h-6" /> Fast
              onboarding, real outcomes
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-28 bg-[#121212]">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-[#00ffae] mb-6">Let’s Talk</h3>
          <p className="text-gray-300 mb-10 text-lg">
            Have a vision? Looking to scale? Want to join? Reach out — we’re
            listening.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full p-4 bg-[#1A1A2E] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffae]"
              />
              {errors.name && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-[#1A1A2E] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffae]"
              />
              {errors.email && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 bg-[#1A1A2E] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffae]"
              />
              {errors.message && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={errors.message != undefined}
              className="disabled:opacity-50 cursor-pointer bg-[#00ffae] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:brightness-90 transition"
            >
              <SendIcon className="w-4 h-4" /> Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-gray-400 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-[#00ffae] mb-2">
              Akaay Foundation
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering ambitious learners with real-world opportunities. Built
              for builders. Driven by purpose.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-[#00ffae] transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#00ffae] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why" className="hover:text-[#00ffae] transition">
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#00ffae] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                className="hover:text-[#00ffae] transition"
              >
                Twitter
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="hover:text-[#00ffae] transition"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="hover:text-[#00ffae] transition"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-700 pt-6">
          © 2025 Akaay Foundation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
