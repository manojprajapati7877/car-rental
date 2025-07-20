"use client";
import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-green-200 to-green-100 flex items-center justify-center z-50">
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-8 border-t-green-700 border-b-green-700 border-l-transparent border-r-transparent animate-spin"></div>
                <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center font-bold text-green-700 text-xl">
                    DW
                </div>
            </div>
        </div>
    );
};

export default Loader;
