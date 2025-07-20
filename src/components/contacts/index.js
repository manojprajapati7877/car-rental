"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="pt-30 pb-24 bg-gradient-to-br from-green-50 to-green-100">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-900 mb-12">
                    Get in Touch
                </h1>


                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 text-center hover:scale-105 transition">
                        <FaPhone size={30} className="text-green-700" />
                        <h3 className="font-bold text-xl text-[var(--heading)]">Phone</h3>
                        <p className="text-gray-700">+91 98765 43210</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 text-center hover:scale-105 transition">
                        <FaEnvelope size={30} className="text-green-700" />
                        <h3 className="font-bold text-xl text-[var(--heading)]">Email</h3>
                        <p className="text-gray-700">support@drivewise.in</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 text-center hover:scale-105 transition">
                        <FaMapMarkerAlt size={30} className="text-green-700" />
                        <h3 className="font-bold text-xl text-[var(--heading)]">Location</h3>
                        <p className="text-gray-700">Ahmedabad, Gujarat, India</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl max-w-3xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-center mb-6 text-[var(--heading)]">Send Us a Message</h2>
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-gray-700 text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-gray-700 text-sm">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-gray-700 text-sm">Message</label>
                            <textarea
                                placeholder="Your message..."
                                rows="4"
                                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-700 to-green-900 hover:from-green-800 hover:to-green-900 text-white font-semibold py-3 rounded-lg w-full text-base transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
