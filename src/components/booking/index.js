"use client";
import Link from "next/link";
import { FaUser, FaPhoneAlt, FaCalendarAlt, FaStickyNote, FaMoneyBill, FaCreditCard, FaQrcode, FaBuilding, FaUpload } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CarBooking = ({ car }) => {
    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        formData.append("carName", car.name);
        formData.append("price", car.pricePerDay);
        formData.append("paymentMethod", paymentMethod);

        const res = await fetch("/api/sendBooking", {
            method: "POST",
            body: formData,
        });
        setLoading(false);
        if (res.ok) {
            alert("Booking Successful!");
            router.push("/cars")
        } else {
            alert("Booking Failed!");
        }
    };


    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10 space-y-8 border border-green-200">

                <h1 className="text-3xl font-bold text-green-800 text-center">{car.name} Booking</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 space-y-4">
                        <img src={car.image} alt={car.name} className="w-full rounded-xl shadow border border-green-100 h-56 object-cover" />
                        <p className="text-lg font-semibold text-green-700">{car.pricePerDay}</p>
                        <p className="text-gray-600 text-sm">{car.description}</p>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-3 text-green-900 text-sm font-medium">
                        <p className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg"><FaUser /> {car.seats} Seats</p>
                        <p className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg"><FaCalendarAlt /> {car.year}</p>
                        <p className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg">{car.transmission}</p>
                        <p className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg">{car.fuel}</p>
                    </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-green-100">
                    {[
                        { label: "Full Name", name: "fullName", placeholder: "Your Name", icon: <FaUser />, type: "text" },
                        { label: "Email", name: "email", placeholder: "Your Email", icon: <FaUser />, type: "email" },
                        { label: "Phone", name: "phone", placeholder: "Your Number", icon: <FaPhoneAlt />, type: "tel" },
                        { label: "Pick-up Date", name: "pickupDate", icon: <FaCalendarAlt />, type: "date" },
                        { label: "Drop-off Date", name: "dropoffDate", icon: <FaCalendarAlt />, type: "date" },
                    ].map(({ label, name, placeholder, icon, type }, index) => (
                        <div className="flex flex-col relative" key={index}>
                            <label className="text-xs mb-1 font-medium">{label}</label>
                            <div className="absolute left-3 top-[38px] text-green-600 text-sm">{icon}</div>
                            <input
                                name={name}
                                type={type}
                                required
                                placeholder={type !== "date" ? placeholder : ""}
                                className={`w-full min-w-0 pl-10 rounded-lg border px-3 py-3 focus:ring-2 focus:ring-green-600 text-sm ${type === "date" ? "appearance-none" : ""}`}
                            />
                        </div>
                    ))}


                    {/* Payment Method */}
                    <div className="md:col-span-2 flex flex-col">
                        <label className="text-xs mb-1 font-medium">Payment Method</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-full rounded-lg border px-3 py-3 focus:ring-2 focus:ring-green-600 text-sm"
                        >
                            <option value="cash">Cash</option>
                            <option value="upi">UPI</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>

                    {/* Conditional Fields */}
                    {paymentMethod === "upi" && (
                        <div className="md:col-span-2 bg-green-50 p-4 rounded-lg flex flex-col gap-3 border border-green-200">
                            <div className="flex items-center gap-2 text-green-800 font-semibold">
                                <FaQrcode /> UPI ID: example@upi
                            </div>
                            <div className="flex flex-col relative">
                                <label className="text-xs mb-1 font-medium">Upload UPI Payment Screenshot</label>
                                <input type="file" accept="image/*" className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 text-sm" />
                            </div>
                        </div>
                    )}

                    {paymentMethod === "bank" && (
                        <div className="md:col-span-2 bg-green-50 p-4 rounded-lg flex flex-col gap-3 border border-green-200">
                            <div className="flex items-center gap-2 text-green-800 font-semibold"><FaBuilding /> Bank Name: HDFC Bank</div>
                            <div className="flex items-center gap-2 text-green-800 font-semibold"><FaCreditCard /> A/C No: 1234567890</div>
                            <div className="flex items-center gap-2 text-green-800 font-semibold">IFSC: HDFC0001234</div>
                            <div className="flex flex-col relative">
                                <label className="text-xs mb-1 font-medium">Upload Bank Payment Screenshot</label>
                                <input type="file" accept="image/*" className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 text-sm" />
                            </div>
                        </div>
                    )}

                    <div className="md:col-span-2 flex flex-col relative">
                        <label className="text-xs mb-1 font-medium">Additional Notes</label>
                        <div className="absolute left-3 top-[38px] text-green-600 text-sm">
                            <FaStickyNote />
                        </div>
                        <textarea
                            rows="3"
                            placeholder="Optional"
                            className="pl-10 rounded-lg border px-3 py-3 focus:ring-2 focus:ring-green-600 text-sm resize-none"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-xl text-white font-bold text-base ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"
                                } transition`}
                        >
                            {loading ? "Booking..." : "Confirm Booking"}
                        </button>

                    </div>
                </form>

                <div className="text-center text-sm">
                    <Link href="/" className="text-green-700 font-semibold hover:underline">← Back to Cars</Link>
                </div>
            </div>
        </section>
    );
};

export default CarBooking;
