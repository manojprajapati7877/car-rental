"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/constants/navItems";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50">
            {/* Top Contact Bar */}
            <div className="bg-gradient-to-r from-green-700 to-green-900 text-white text-sm py-2 px-6 flex justify-between items-center">
                <a href="tel:+919876543210" className="hover:underline flex items-center gap-1">
                    📞 +91 98765 43210
                </a>
                <a href="mailto:support@drivewise.com" className="hover:underline flex items-center gap-1">
                    ✉️ support@drivewise.com
                </a>
            </div>


            {/* Main Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text">
                        Drivewise
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`hover:text-green-700 transition relative pb-1 ${pathname === item.path
                                    ? "text-green-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-green-700 rounded"
                                    : ""
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/auth/login"
                            className="bg-green-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-800 transition"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-center font-semibold text-gray-700 rounded-b-2xl animate-slide-down">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 rounded hover:bg-green-100 hover:text-green-800 transition ${pathname === item.path ? "text-green-700 font-bold" : ""
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/auth/login"
                            onClick={() => setIsOpen(false)}
                            className="block bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition"
                        >
                            Login
                        </Link>

                        {/* Contact Info Mobile */}
                        <div className="text-sm text-gray-700 mt-4 space-y-1">
                            <p>📞 +91 98765 43210</p>
                            <p>✉️ support@drivewise.com</p>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
