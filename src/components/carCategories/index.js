"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUserFriends, FaGasPump, FaCarSide, FaRoad, FaCogs, FaCalendarAlt, FaStar } from "react-icons/fa";

const cars = [
    {
        id: 1,
        name: "Audi A6",
        image: "/images/audi-a6.png",
        pricePerDay: "₹3000/day",
        seats: 4,
        fuel: "Petrol",
        transmission: "AT/MT",
        year: 2019,
        mileage: "27K",
        rating: 4.5,
        reviews: 120,
    },
    {
        id: 2,
        name: "BMW 5 Series",
        image: "/images/bmw-5-series.png",
        pricePerDay: "₹3500/day",
        seats: 5,
        fuel: "Diesel",
        transmission: "AUTO",
        year: 2021,
        mileage: "19K",
        rating: 4.7,
        reviews: 98,
    },
    {
        id: 3,
        name: "Mercedes E-Class",
        image: "/images/mercedes-e-class.png",
        pricePerDay: "₹4000/day",
        seats: 5,
        fuel: "Petrol",
        transmission: "AUTO",
        year: 2022,
        mileage: "15K",
        rating: 4.9,
        reviews: 155,
    },
    {
        id: 4,
        name: "Jeep Compass",
        image: "/images/jeep-compass.png",
        pricePerDay: "₹2500/day",
        seats: 5,
        fuel: "Diesel",
        transmission: "MT",
        year: 2018,
        mileage: "45K",
        rating: 4.4,
        reviews: 85,
    },
];

const CarCategories = () => {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-[var(--heading)]">
                    Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Car</span> Categories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {cars.map((car, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col"
                        >
                            <Link href={`/cars/${car.id}`} className="block flex-1">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    width={400}
                                    height={250}
                                    className="object-contain p-4"
                                />

                                <div className="p-5 flex flex-col justify-between flex-1">
                                    <div className="space-y-2 mb-4">
                                        <h3 className="text-lg md:text-xl font-bold text-[var(--heading)]">{car.name}</h3>
                                        <p className="text-base font-semibold text-[var(--primary)]">{car.pricePerDay}</p>

                                        <div className="flex items-center justify-center gap-1 text-yellow-400">
                                            {Array.from({ length: 5 }).map((_, starIdx) => (
                                                <FaStar
                                                    key={starIdx}
                                                    className={`h-4 w-4 ${starIdx < Math.round(car.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                                />
                                            ))}
                                            <span className="text-xs text-gray-600 ml-1">({car.reviews})</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-[var(--text)] text-xs md:text-sm mb-6">
                                        <div className="flex items-center gap-2 justify-start"><FaUserFriends /> {car.seats} Seats</div>
                                        <div className="flex items-center gap-2 justify-start"><FaCarSide /> {car.transmission}</div>
                                        <div className="flex items-center gap-2 justify-start"><FaGasPump /> {car.fuel}</div>
                                        <div className="flex items-center gap-2 justify-start"><FaCalendarAlt /> {car.year}</div>
                                        <div className="flex items-center gap-2 justify-start"><FaCogs /> {car.transmission}</div>
                                        <div className="flex items-center gap-2 justify-start"><FaRoad /> {car.mileage}</div>
                                    </div>
                                    <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold py-3 rounded-xl transition">
                                        Book Now
                                    </button>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarCategories;
