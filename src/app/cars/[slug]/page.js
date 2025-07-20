"use client";
import { useParams } from "next/navigation";
import CarDetail from "@/components/carDetails";

const cars = [
    { id: 1, name: "Audi A6", image: "/images/audi-a6.png", pricePerDay: "₹3000/day", seats: 4, fuel: "Petrol", transmission: "AT/MT", year: 2019, mileage: "27K", rating: 4.5, reviews: 120, description: "Luxury sedan with comfort and speed." },
    { id: 2, name: "BMW 5 Series", image: "/images/bmw-5-series.png", pricePerDay: "₹3500/day", seats: 5, fuel: "Diesel", transmission: "AUTO", year: 2021, mileage: "19K", rating: 4.7, reviews: 98, description: "Executive ride with technology features." },
    { id: 3, name: "Mercedes E-Class", image: "/images/mercedes-e-class.png", pricePerDay: "₹4000/day", seats: 5, fuel: "Petrol", transmission: "AUTO", year: 2022, mileage: "15K", rating: 4.9, reviews: 155, description: "Premium experience with elegance." },
    { id: 4, name: "Jeep Compass", image: "/images/jeep-compass.png", pricePerDay: "₹2500/day", seats: 5, fuel: "Diesel", transmission: "MT", year: 2018, mileage: "45K", rating: 4.4, reviews: 85, description: "Adventure-ready SUV." },
];

export default function CarDetails() {
    const { slug } = useParams();
    const car = cars.find((c) => c.id === Number(slug));

    if (!car) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-bold text-green-700">
                Car Not Found
            </div>
        );
    }

    return <CarDetail car={car} />;
}
