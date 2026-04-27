import React from 'react';
import { FaUserTie, FaGraduationCap, FaBuilding } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen pb-10">

            {/* Hero Section (Welcome Area) */}
            <div className="bg-blue-900 text-white py-20 px-8 text-center rounded-b-3xl shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to St. Benedict's College Hostel</h1>
                <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
                    Providing a safe, disciplined, and enriching environment for students to excel in their academics and personal growth.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12 space-y-16">

                {/* College & Hostel Details Section */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* College Info Card (Holographic) */}
                    <div className="holographic-card p-8 flex flex-col justify-center">
                        <div className="holographic-content">
                            <div className="flex items-center gap-4 mb-4">
                                <FaGraduationCap className="text-4xl text-[#0ff]" />
                                <h2 className="text-2xl font-bold text-[#0ff] tracking-wide">College Details</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                St. Benedict's College has a rich history of fostering academic excellence and character development. Our mission is to nurture future leaders through quality education and strong moral values.
                            </p>
                        </div>
                    </div>

                    {/* Hostel Info Card (Holographic) */}
                    <div className="holographic-card p-8 flex flex-col justify-center">
                        <div className="holographic-content">
                            <div className="flex items-center gap-4 mb-4">
                                <FaBuilding className="text-4xl text-[#0ff]" />
                                <h2 className="text-2xl font-bold text-[#0ff] tracking-wide">Hostel Details</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Our hostel offers modern amenities, spacious rooms, study areas, and 24/7 security. We ensure a home-away-from-home experience, promoting a culture of brotherhood and discipline.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Administration Section */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 border-b-2 border-gray-300 pb-4 inline-block w-full">Administration</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                        {/* Director / Principal */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-blue-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaUserTie className="text-5xl text-blue-700" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">Rev. Bro. Director</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Current Principal / Director</p>
                        </div>

                        {/* Sub Director */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-gray-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaUserTie className="text-5xl text-gray-700" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">Bro. Sub-Director</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Vice Principal</p>
                        </div>

                        {/* Past Principal */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-gray-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 border border-gray-200">
                                <FaUserTie className="text-5xl text-gray-400" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-600">Past Principals</h3>
                            <p className="text-sm text-gray-400 font-medium mt-1">Legacy of Leadership</p>
                        </div>

                        {/* Hostel Warden */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-400">
                            <div className="bg-orange-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaUserTie className="text-5xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">Chief Warden</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Hostel Management</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}