"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaUserFriends, FaGasPump, FaCarSide, FaRoad, FaCogs, FaCalendarAlt, FaStar } from "react-icons/fa";

const CarDetail = ({ car }) => {
    return (
        <section className="pt-28 pb-16 bg-gradient-to-b from-green-100 to-green-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
                <Link href="/" className="flex items-center gap-3 text-green-700 font-semibold text-lg hover:underline transition">
                    <FaArrowLeft className="text-2xl" /> <span>Back to Cars</span>
                </Link>

                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-green-200 transition-all duration-300">
                    <div className="md:w-1/2 p-8 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
                        <Image
                            src={car.image}
                            alt={car.name}
                            width={550}
                            height={400}
                            className="rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Car Details */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-between gap-8">

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold text-gray-900">{car.name}</h1>
                            <p className="text-green-800 font-bold text-2xl">{car.pricePerDay}</p>

                            {/* Star Ratings */}
                            <div className="flex items-center gap-1 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <FaStar key={idx} className={`h-6 w-6 ${idx < Math.round(car.rating) ? "text-yellow-400" : "text-gray-300"}`} />
                                ))}
                                <span className="ml-2 text-gray-600 text-base font-medium">({car.reviews} Reviews)</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-lg leading-relaxed">{car.description}</p>

                            {/* Car Specs */}
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 font-medium mt-6">
                                <div className="flex items-center gap-2"><FaUserFriends className="text-green-700" /> {car.seats} Seats</div>
                                <div className="flex items-center gap-2"><FaCarSide className="text-green-700" /> {car.transmission}</div>
                                <div className="flex items-center gap-2"><FaGasPump className="text-green-700" /> {car.fuel}</div>
                                <div className="flex items-center gap-2"><FaCalendarAlt className="text-green-700" /> {car.year}</div>
                                <div className="flex items-center gap-2"><FaCogs className="text-green-700" /> Transmission: {car.transmission}</div>
                                <div className="flex items-center gap-2"><FaRoad className="text-green-700" /> {car.mileage} Mileage</div>
                            </div>
                        </div>

                        {/* Booking Button */}
                        <Link href={`/booking?car_id=${car.id}`} className="w-full">
                            <div className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white text-xl font-bold py-4 rounded-2xl text-center hover:scale-105 transition-transform">
                                Book This Car
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarDetail;
