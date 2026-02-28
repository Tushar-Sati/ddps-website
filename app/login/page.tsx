"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    // Form fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email format.");
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzA3z0GxsLGyPLV1AURQJqZNAq-PdrTaTUvrUqylj2yb_gsTJqfEARJzOCGj70hRMc9/exec", {
                method: "POST",
                body: JSON.stringify({
                    action: isLogin ? "login" : "register",
                    email: email,
                    password: password
                })
            });

            const result = await response.json();

            if (result.success) {
                localStorage.setItem("ddpsUser", email);
                window.location.href = "/book-service";
            } else {
                alert(result.message || "Authentication failed.");
            }
        } catch (err) {
            alert("Network error. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
                    {isLogin ? "Customer Login" : "Create Account"}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    {isLogin ? "Sign in to book a service or track status" : "Sign up to track all your service requests seamlessly"}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100"
                >
                    {/* Toggle Buttons */}
                    <div className="flex rounded-md shadow-sm mb-6 p-1 bg-gray-100">
                        <button
                            type="button"
                            onClick={() => { setIsLogin(true); setError(""); }}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${isLogin ? 'bg-white shadow text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            onClick={() => { setIsLogin(false); setError(""); }}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${!isLogin ? 'bg-white shadow text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete={isLogin ? "current-password" : "new-password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm transition-colors"
                                />
                            </div>
                        </div>

                        <AnimatePresence>
                            {!isLogin && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                    <div className="mt-1">
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            required={!isLogin}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm transition-colors"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {error && (
                            <div className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded border border-red-100">
                                {error}
                            </div>
                        )}

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            >
                                {isLogin ? "Sign In" : "Create Account"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <Link href="/" className="font-medium text-accent hover:text-blue-500 transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
