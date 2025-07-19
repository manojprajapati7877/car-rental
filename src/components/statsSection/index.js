"use client";
import AnimatedCounter from "../animatedCounter";
import "./style.css"
const StatsSection = () => {
    const stats = [
        { value: "450+", label: "Cars" },
        { value: "90+", label: "Sales Experts" },
        { value: "120+", label: "Pickup Locations" },
        { value: "2000+", label: "Happy Customers" },
    ];

    return (
        <section className="py-12 bg-[var(--primary)] text-white font-bold">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-around text-center gap-8">
                {stats.map((item, idx) => (
                    <div key={idx} className="hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl">
                            <AnimatedCounter target={item.value} />
                        </div>
                        <div className="text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
