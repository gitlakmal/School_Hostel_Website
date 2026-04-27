import React, { useState } from 'react';
import { FaUserTie, FaGraduationCap, FaBuilding, FaTimes, FaHistory, FaTrophy } from 'react-icons/fa';

export default function Home() {
    // Modal එක පෙන්වන්න සහ වහන්න State එක
    const [showCollegeModal, setShowCollegeModal] = useState(false);

    // පාසලේ Logo Link එක
    const collegeLogoUrl = "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/301853016_400168768927474_2718220382250487515_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFG7wf9IVZwGLSSgCVCuCqHAfSe4mOIn7IB9J7iY4ifsoJwFPC73VcC95I4LfqBIj2CrQ-hFzdOYPn0B5oj4UxN&_nc_ohc=jp8IZdJW0B8Q7kNvwFQhc4z&_nc_oc=AdpdlG4sFOcFTIQBzPLnYiXcYWjN1fYavf6EzT8guT9jdc9B1i9DqaYn_mvoawP_ElA&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=M0duq8xGmUof_ql1ZXZkrw&_nc_ss=7b2a8&oh=00_Af1nEEck5B43iONZSXmCO02Hvi1EaE-YVZddfUvHaeLuKA&oe=69F4CE15";

    return (
        <div className="bg-gray-100 min-h-screen pb-10 relative">

            {/* Hero Section (Welcome Area) - පූර්ණ කොළ පැහැති තේමාව */}
            <div className="bg-emerald-900 text-white py-16 px-8 text-center rounded-b-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    <img
                        src={collegeLogoUrl}
                        alt="St. Benedict's College Logo"
                        className="h-24 object-contain mb-6 drop-shadow-xl bg-white p-2 rounded-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">Welcome to St. Benedict's College Hostel</h1>

                    <p className="text-lg md:text-xl text-emerald-200 max-w-3xl mx-auto font-semibold mb-2">
                        "Religio, Mores, Cultura" (Religion, Morals, Culture)
                    </p>

                    <p className="text-md text-emerald-100 max-w-2xl mx-auto mt-4 opacity-90">
                        Providing a safe, disciplined, and enriching environment for Benedictines to excel in their academics and personal growth.
                    </p>
                </div>

                {/* පසුබිම් අලංකරණය සඳහා ලා කොළ පැහැති Overlay එකක් */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12 space-y-16">

                {/* College & Hostel Details Section */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* College Info Card (Holographic & Clickable) */}
                    <div
                        className="holographic-card p-8 flex flex-col justify-center cursor-pointer transform transition-transform hover:scale-105"
                        onClick={() => setShowCollegeModal(true)}
                        title="Click to view full college details"
                    >
                        <div className="holographic-content pointer-events-none">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap className="text-4xl text-[#4ade80]" />
                                <h2 className="text-2xl font-bold text-[#4ade80] tracking-wide">College Details</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                                Founded in 1865, St. Benedict's College is the oldest Roman Catholic school in Sri Lanka. Located in Kotahena, Colombo, the college serves over 3,700 students with a legacy of academic and athletic excellence.
                            </p>
                            <span className="text-[#4ade80] text-sm font-semibold border-b border-[#4ade80] inline-block mt-2">Click to read full history & details...</span>
                        </div>
                    </div>

                    {/* Hostel Info Card (Holographic) */}
                    <div className="holographic-card p-8 flex flex-col justify-center">
                        <div className="holographic-content pointer-events-none">
                            <div className="flex items-center gap-4 mb-4">
                                <FaBuilding className="text-4xl text-[#4ade80]" />
                                <h2 className="text-2xl font-bold text-[#4ade80] tracking-wide">Hostel Details</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                The College owns a dedicated Sports-Hostel and modern boarding facilities. We ensure a home-away-from-home experience, promoting the strong Lasallian culture of brotherhood and discipline among the students.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Administration Section */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 border-b-2 border-emerald-500 pb-4 inline-block w-full">Administration</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                        {/* Principal */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-emerald-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-emerald-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaUserTie className="text-5xl text-emerald-800" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">Mr. Niran Perera</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Current Principal / Director</p>
                        </div>

                        {/* Sub Director */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-emerald-600 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-emerald-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaUserTie className="text-5xl text-emerald-700" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">Bro. Sub-Director</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Vice Principal</p>
                        </div>

                        {/* Past Principals */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-gray-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 border border-gray-200">
                                <FaHistory className="text-4xl text-emerald-600" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-600">Past Directors</h3>
                            <p className="text-xs text-gray-400 font-medium mt-1 px-2">
                                Bro. Austin Anthony, Bro. Glastian Oliver, Bro. Alban Patrick & others
                            </p>
                        </div>

                        {/* Hostel Warden */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-400 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-orange-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaBuilding className="text-4xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">Chief Warden</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Hostel Management</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* ========================================= */}
            {/* College Details Modal (Popup) - Green & White Theme */}
            {/* ========================================= */}
            {showCollegeModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 backdrop-blur-sm transition-all overflow-y-auto">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-hidden my-8 border-2 border-emerald-800">

                        {/* Modal Header - තද කොළ පැහැති පසුබිම */}
                        <div className="bg-emerald-900 p-6 flex items-center justify-between sticky top-0 z-20">
                            <div className="flex items-center gap-4">
                                <img src={collegeLogoUrl} alt="Logo" className="h-12 bg-white p-1 rounded" />
                                <h2 className="text-2xl md:text-3xl font-bold text-white">St. Benedict's College</h2>
                            </div>
                            <button
                                onClick={() => setShowCollegeModal(false)}
                                className="text-white hover:text-red-400 transition-colors bg-white/20 p-2 rounded-full"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Modal Content Area */}
                        <div className="p-8 max-h-[70vh] overflow-y-auto text-gray-700 space-y-8">

                            {/* Fast Facts Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                    <p className="text-xs text-emerald-700 font-bold uppercase">Established</p>
                                    <p className="text-lg font-bold text-gray-800">1865</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <p className="text-xs text-green-700 font-bold uppercase">Enrollment</p>
                                    <p className="text-lg font-bold text-gray-800">3,700+</p>
                                </div>
                                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                    <p className="text-xs text-emerald-700 font-bold uppercase">Staff</p>
                                    <p className="text-lg font-bold text-gray-800">250+</p>
                                </div>
                                <div className="bg-green-100 p-3 rounded-lg border border-green-200">
                                    <p className="text-xs text-emerald-800 font-bold uppercase">Colors</p>
                                    <p className="text-lg font-bold text-emerald-700 underline decoration-white decoration-2">Green & White</p>
                                </div>
                            </div>

                            {/* History Section */}
                            <div>
                                <h3 className="text-xl font-bold text-emerald-900 border-b-2 border-emerald-100 pb-2 mb-3 flex items-center gap-2">
                                    <FaHistory className="text-emerald-700" /> History & Heritage
                                </h3>
                                <p className="leading-relaxed text-sm text-justify">
                                    St. Benedict's College (SBC) was inaugurated in 1865 by Silvestro Benedictine monks, making it the oldest Roman Catholic school in Sri Lanka. Under the administration of the De La Salle Brothers since 1868, the college has fostered a tradition of "Religio, Mores, Cultura."
                                </p>
                            </div>

                            {/* Campus Section */}
                            <div>
                                <h3 className="text-xl font-bold text-emerald-900 border-b-2 border-emerald-100 pb-2 mb-3 flex items-center gap-2">
                                    <FaBuilding className="text-emerald-700" /> Campus & Facilities
                                </h3>
                                <p className="leading-relaxed text-sm text-justify">
                                    Located in Kotahena, adjacent to St. Lucia's Cathedral, the campus features memorial buildings for Reverend Brothers Luke, Alexander, and James. It includes the Granville Perera Aquatic Centre and academic labs for Physics, Biology, and Chemistry.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}