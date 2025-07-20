"use client";
import Image from "next/image";
import { FaUserFriends, FaCarSide, FaGasPump, FaCalendarAlt, FaCogs, FaRoad } from "react-icons/fa";
import { carsListData } from "@/constants/carList";
import Link from "next/link";

export default function Cars() {
    return (
        <section className="pt-30 pb-16 min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-white w-full">
            <div className="max-w-7xl mx-auto px-6 space-y-16">

                {/* Page Heading */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold text-[var(--heading)]">
                        Explore{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">
                            Our Cars
                        </span>
                    </h1>

                    <p className="text-gray-700 max-w-xl mx-auto text-lg">
                        Choose from premium car brands to make your journey comfortable and stylish.
                    </p>
                </div>

                {/* Brand Wise Cars Listing */}
                {carsListData.map((brand) => (
                    <div key={brand.brand} className="space-y-8">

                        <h2 className="text-3xl font-bold text-[var(--heading)] border-b-2 border-[var(--primary)] inline-block pb-1">
                            {brand.brand}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {brand.cars.map((car) => (
                                <div
                                    key={car.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-[1.03] flex flex-col"
                                >
                                    <Link href={`/cars/${car.id}`} className="block flex-1">
                                        <div className="relative w-full h-56">
                                            <Image
                                                src={car.image}
                                                alt={car.name}
                                                fill
                                                className="object-contain p-4"
                                                priority
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col flex-1 space-y-3">
                                            <h3 className="text-lg font-bold text-[var(--heading)]">{car.name}</h3>
                                            <p className="text-[var(--primary)] font-semibold text-base">{car.price}</p>

                                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[var(--text)] text-xs md:text-sm mb-4">
                                                <div className="flex items-center gap-2"><FaUserFriends className="text-[var(--heading)]" /> {car.seats}</div>
                                                <div className="flex items-center gap-2"><FaCarSide className="text-[var(--heading)]" /> {car.transmission}</div>
                                                <div className="flex items-center gap-2"><FaGasPump className="text-[var(--heading)]" /> {car.fuel}</div>
                                                <div className="flex items-center gap-2"><FaCalendarAlt className="text-[var(--heading)]" /> {car.year}</div>
                                                <div className="flex items-center gap-2"><FaCogs className="text-[var(--heading)]" /> {car.transmission}</div>
                                                <div className="flex items-center gap-2"><FaRoad className="text-[var(--heading)]" /> {car.mileage}</div>
                                            </div>

                                            <button className="mt-auto w-full py-3 font-semibold text-white rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition">
                                                Book Now
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section >
    );
}
