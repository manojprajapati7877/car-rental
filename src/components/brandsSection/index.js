"use client";
import Image from "next/image";

const BrandsSection = () => {
    const brands = [
        "/images/audi.svg",
        "/images/bmw.svg",
        "/images/mercedes.svg",
        "/images/fiat.svg",
        "/images/volvo.svg",
        "/images/porsche.svg",
    ];

    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="w-full overflow-hidden">
                <div className="flex gap-12 animate-marquee">
                    {[...brands, ...brands].map((brand, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
                        >
                            <Image
                                src={brand}
                                alt={`Brand ${idx}`}
                                width={80}
                                height={50}
                                className="grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
