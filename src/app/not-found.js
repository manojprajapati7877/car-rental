import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300 text-center px-6">
            <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl w-full">
                <h1 className="text-7xl font-extrabold text-green-700 mb-6">404</h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8 text-lg">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-800 transition"
                >  
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
        </section>
    );
}
