"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, User, LogOut } from "lucide-react";
import EmergencyBanner from "./EmergencyBanner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Simple client-side auth state check
        const checkAuth = () => {
            const auth = localStorage.getItem("ddpsUser");
            if (auth) {
                try {
                    const userData = JSON.parse(auth);
                    if (userData.loggedIn && userData.email) {
                        setUserEmail(userData.email);
                    } else {
                        setUserEmail(null);
                    }
                } catch {
                    setUserEmail(null);
                }
            } else {
                setUserEmail(null);
            }
        };

        checkAuth();

        // Listen for storage events (e.g. login from another tab or same page refresh)
        window.addEventListener("storage", checkAuth);

        // Simple polling for same-tab updates to avoid complex context providers for now
        const interval = setInterval(checkAuth, 1000);

        return () => {
            window.removeEventListener("storage", checkAuth);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("ddpsUser");
        setUserEmail(null);
        window.location.href = "/";
    };

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <EmergencyBanner />
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="font-bold text-2xl text-primary tracking-tight">
                    DDPS<span className="text-accent">.</span>
                </a>

                <div className="hidden md:flex gap-8 items-center font-medium">
                    <a href="/#about" className="hover:text-accent transition-colors">About</a>
                    <a href="/#services" className="hover:text-accent transition-colors">Services</a>
                    <a href="/#faq" className="hover:text-accent transition-colors">FAQ</a>
                    <a href="/track" className="hover:text-accent font-bold transition-colors">Track Repair</a>
                    <a href="tel:+919810845788" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                        <Phone size={16} /> Call Us
                    </a>
                    {userEmail ? (
                        <div className="flex items-center gap-4 border-l pl-6">
                            <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                                <User size={16} /> My Account
                            </span>
                            <button onClick={handleLogout} className="text-red-500 hover:text-red-700 transition">
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <div className="border-l pl-6">
                            <Link href="/login" className="font-bold text-accent hover:text-primary transition-colors">
                                Login
                            </Link>
                        </div>
                    )}
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 text-center font-medium shadow-lg"
                >
                    <a href="/#about" onClick={() => setIsOpen(false)} className="block py-2">About</a>
                    <a href="/#services" onClick={() => setIsOpen(false)} className="block py-2">Services</a>
                    <a href="/#faq" onClick={() => setIsOpen(false)} className="block py-2">FAQ</a>
                    <a href="/track" onClick={() => setIsOpen(false)} className="block py-2 font-bold text-accent">Track Repair</a>
                    <hr className="my-2 border-gray-100" />
                    {userEmail ? (
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 text-sm">Logged in as {userEmail}</span>
                            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-red-500 font-bold py-2">Logout</button>
                        </div>
                    ) : (
                        <Link href="/login" onClick={() => setIsOpen(false)} className="block py-2 font-bold text-accent">Login / Sign Up</Link>
                    )}
                </motion.div>
            )}
        </nav>
    );
}
