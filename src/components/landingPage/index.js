"use client";
import HeroSection from "../heroSection";
import BrandsSection from "../brandsSection";
import StatsSection from "../statsSection";

const LandingPage = () => {
    return (
        <div className="bg-[var(--background)]">
            <HeroSection />
            <BrandsSection />
            <StatsSection />
        </div>
    );
};

export default LandingPage;
