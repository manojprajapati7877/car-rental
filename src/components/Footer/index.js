"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { navItems } from "@/constants/navItems";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Drivewise</h3>
                    <p className="text-sm text-gray-200">Your trusted partner for affordable and luxury car rentals.</p>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-sm text-gray-200">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.path} className="hover:text-white">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div className="space-y-3">
                    <h4 className="text-xl font-semibold mb-2">Support</h4>
                    <ul className="space-y-1 text-sm text-gray-200">
                        <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-4 text-2xl">
                        <Link href="#" className="hover:text-blue-400"><FaFacebookF /></Link>
                        <Link href="#" className="hover:text-pink-400"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-sky-400"><FaTwitter /></Link>
                        <Link href="#" className="hover:text-blue-500"><FaLinkedin /></Link>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-500 pt-4 px-4 text-center text-sm space-y-2 text-gray-300">
                <p>© {new Date().getFullYear()} Drivewise. All Rights Reserved.</p>
                <p className="text-xs text-gray-200">Developed by
                    <span className="font-semibold text-white hover:text-black transition"> Manoj Prajapati</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
