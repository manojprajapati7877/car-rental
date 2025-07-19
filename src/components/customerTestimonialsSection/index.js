"use client";
import { FaUserCircle } from "react-icons/fa"; // Client icon
import { motion } from "framer-motion";

const CustomerTestimonials = () => {
    const testimonials = [
        {
            name: "Manoj Prajapati",
            review: "Service was amazing! Car was clean and pickup/drop was super smooth.",
            location: "Ahmedabad",
        },
        {
            name: "Priya Sharma",
            review: "Easy booking and customer support was quick. Highly recommended!",
            location: "Mumbai",
        },
        {
            name: "Rohit Singh",
            review: "Affordable prices and luxury cars. Overall great experience.",
            location: "Delhi",
        },
    ];

    return (
        <section className="py-16 bg-green-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-[var(--heading)] text-center">
                    💬 Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Testimonials</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 items-center hover:scale-105 transition"
                        >
                            <FaUserCircle className="text-6xl text-[var(--primary)]" />
                            <p className="text-[var(--text)] italic">“{testimonial.review}”</p>
                            <h4 className="font-bold text-[var(--heading)]">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;
