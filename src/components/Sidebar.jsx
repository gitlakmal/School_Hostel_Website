import { FaHome, FaBed, FaUserFriends, FaChevronRight, FaChevronLeft, FaMoneyCheckAlt, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: <FaHome size={22} />, link: "/" },
        { name: "Room Allocation", icon: <FaBed size={22} />, link: "/rooms" },
        { name: "Students", icon: <FaUserFriends size={22} />, link: "/students" },
        { name: "Payments", icon: <FaMoneyCheckAlt size={22} />, link: "/payments" },
    ];

    return (
        <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col relative`}>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3 top-6 bg-blue-600 rounded-full p-1 border-2 border-white text-white z-10 hover:bg-blue-700"
            >
                {isOpen ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
            </button>

            {/* Profile Circle in Sidebar (Optional but looks good) */}
            <div className="flex justify-center items-center py-6 border-b border-gray-700">
                <FaUserCircle size={isOpen ? 50 : 30} className="transition-all duration-300 text-gray-400" />
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-2 mt-6 px-3">
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.link} className="flex items-center gap-4 p-3 hover:bg-gray-800 rounded-lg transition-colors">
                        <div className="min-w-max">{item.icon}</div>
                        {isOpen && <span className="font-medium whitespace-nowrap">{item.name}</span>}
                    </Link>
                ))}
            </div>
        </div>
    );
}