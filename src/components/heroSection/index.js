"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="pt-30 md:pt-28 pb-16 md:pb-20 bg-gradient-to-r from-green-50 to-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 px-4 md:px-6">
                <div className="flex-1 text-center md:text-left space-y-6">
                    <div className="text-center md:text-left space-y-6 max-w-3xl mx-auto md:mx-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--heading)] leading-tight">
                            Explore the freedom <br /> of car rental with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Drivewise.</span>
                        </h1>
                        <p className="text-[var(--text)] text-base md:text-lg max-w-md mx-auto md:mx-0">
                            Whether you’re planning a road trip or need a reliable car for business,
                            we’ve got you covered with comfort and convenience.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Link href="/booking">
                            <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all hover:scale-105">
                                Get your car today
                            </button>
                        </Link>
                        <Link href="/cars">
                            <button className="font-semibold text-[var(--heading)] hover:underline">
                                See all cars →
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] relative">
                        <Image
                            src="/images/ertiga.png"
                            alt="Car Image"
                            fill
                            className="drop-shadow-2xl object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
