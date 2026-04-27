import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaIdBadge } from 'react-icons/fa';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', role: 'Student'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Registering:", formData);
        // පසුව මෙතනින් Google Sheet API එකට කතා කරමු
    };

    return (
        <div className="flex items-center justify-center h-full min-h-[80vh] py-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-t-4 border-green-500">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

                <form onSubmit={handleSignUp} className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="text-gray-400" />
                            </div>
                            <input type="text" name="name" required onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                                placeholder="John Doe" />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="text-gray-400" />
                            </div>
                            <input type="email" name="email" required onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                                placeholder="john@example.com" />
                        </div>
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaIdBadge className="text-gray-400" />
                            </div>
                            <select name="role" onChange={handleChange} value={formData.role}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none appearance-none bg-white">
                                <option value="Student">Student</option>
                                <option value="Parent">Parent</option>
                                <option value="Warden">Warden</option>
                                <option value="Director">Brother / Director</option>
                            </select>
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="text-gray-400" />
                            </div>
                            <input type="password" name="password" required onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                                placeholder="Create a strong password" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit"
                        className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors shadow-md mt-4">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account? <Link to="/login" className="text-green-600 font-semibold hover:underline">Log In</Link>
                </p>
            </div>
        </div>
    );
}