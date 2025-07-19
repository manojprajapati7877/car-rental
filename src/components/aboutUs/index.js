"use client";
import Image from "next/image";
import { FaCar, FaMapMarkerAlt, FaSmile, FaRupeeSign, FaStar, FaClock, FaHeadset, FaMobileAlt } from "react-icons/fa";

const About = () => {
    return (
        <section className="pt-30 pb-24 bg-gradient-to-br from-green-50 to-green-100">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-6 text-center lg:text-left min-h-[400px]">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Drivewise</span>
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Drivewise is your trusted partner for hassle-free car rentals across India. With premium vehicles, transparent pricing, and dedicated support, we ensure every ride feels special.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        <InfoCard icon={<FaCar size={34} />} title="450+ Cars" />
                        <InfoCard icon={<FaMapMarkerAlt size={34} />} title="120+ Locations" />
                        <InfoCard icon={<FaSmile size={34} />} title="5000+ Happy Clients" />
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] relative">
                        <Image
                            src="/images/mercedes-e-class.png"
                            alt="Car Image"
                            fill
                            className="drop-shadow-2xl object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <SectionHeading title="Why Choose Drivewise?" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 mb-20">
                {whyChooseItems.map(({ icon, title, desc }) => (
                    <div key={title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 text-center space-y-3">
                        <div className="text-green-700 flex justify-center">{icon}</div>
                        <h3 className="font-bold text-xl">{title}</h3>
                        <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                ))}
            </div>

            {/* How it Works */}
            <SectionHeading title="How it Works?" />
            <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-6 mb-20">
                {steps.map(({ title, desc, icon }, index) => (
                    <div key={index} className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 space-y-3 text-center">
                        <div className="text-green-700 flex justify-center">{icon}</div>
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                ))}
            </div>

            {/* Call To Action */}
            <div className="bg-green-700 text-white py-16 px-6 rounded-xl max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Book Your Ride?</h2>
                <p className="mb-6 text-lg">Get on the road with Drivewise today. Affordable, Convenient, Reliable.</p>
                <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition">Book Now</button>
            </div>
        </section>
    );
};

const InfoCard = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition hover:scale-105 flex flex-col items-center space-y-3">
        <div className="text-green-700">{icon}</div>
        <h3 className="font-bold text-xl">{title}</h3>
    </div>
);

const SectionHeading = ({ title }) => (
    <h2 className="pt-20 pb-10 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-900 text-center">{title}</h2>
);

const whyChooseItems = [
    { icon: <FaRupeeSign size={34} />, title: "Affordable Pricing", desc: "Transparent, competitive rates without hidden charges." },
    { icon: <FaStar size={34} />, title: "Premium Cars", desc: "Luxurious, well-maintained fleet of vehicles." },
    { icon: <FaClock size={34} />, title: "Instant Booking", desc: "Book your favorite car in just a few clicks." },
    { icon: <FaHeadset size={34} />, title: "24/7 Support", desc: "Always ready to assist you anytime, anywhere." },
    { icon: <FaCar size={34} />, title: "Variety of Options", desc: "From luxury to economy cars." },
    { icon: <FaMapMarkerAlt size={34} />, title: "Pan India Coverage", desc: "We operate in 120+ cities across India." },
];

const steps = [
    { title: "Browse Cars", desc: "Explore our fleet and choose the perfect ride.", icon: <FaCar size={40} /> },
    { title: "Book Instantly", desc: "Quick and easy online booking process.", icon: <FaMobileAlt size={40} /> },
    { title: "Enjoy Your Ride", desc: "Drive with confidence, backed by our support.", icon: <FaSmile size={40} /> },
];

export default About;
