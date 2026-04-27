import { FaHome, FaBed, FaUserFriends, FaChevronRight, FaChevronLeft, FaMoneyCheckAlt, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // දැනට ඉන්න පිටුව highlight කරන්න

    const menuItems = [
        { name: "Dashboard", icon: <FaHome size={22} />, link: "/" },
        { name: "Room Allocation", icon: <FaBed size={22} />, link: "/rooms" },
        { name: "Students", icon: <FaUserFriends size={22} />, link: "/students" },
        { name: "Payments", icon: <FaMoneyCheckAlt size={22} />, link: "/payments" },
    ];

    return (
        // Sidebar පසුබිම තද කොළ පැහැයට (bg-emerald-950) වෙනස් කර ඇත
        <div className={`bg-emerald-950 text-white h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col relative border-r border-emerald-800 shadow-2xl z-20`}>

            {/* Toggle Button - කොළ පැහැති තේමාව */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3.5 top-8 bg-emerald-600 rounded-full p-1.5 border-2 border-emerald-900 text-white z-10 hover:bg-emerald-500 hover:scale-110 transition-all shadow-md"
            >
                {isOpen ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
            </button>

            {/* Profile Circle in Sidebar */}
            <div className="flex flex-col justify-center items-center py-6 border-b border-emerald-800/50 mt-2">
                <div className="bg-emerald-800/50 p-2 rounded-full border border-emerald-700 shadow-inner">
                    <FaUserCircle size={isOpen ? 45 : 28} className="transition-all duration-300 text-emerald-100" />
                </div>
                {isOpen && (
                    <div className="mt-3 text-center transition-opacity duration-300">
                        <p className="text-sm font-bold text-white tracking-wide">Menu</p>
                    </div>
                )}
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-2 mt-6 px-3">
                {menuItems.map((item, index) => {
                    // දැනට ඉන්න පිටුව (Active Link) පරීක්ෂා කිරීම
                    const isActive = location.pathname === item.link;

                    return (
                        <Link
                            key={index}
                            to={item.link}
                            className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group
                                ${isActive
                                    ? 'bg-emerald-700 text-white shadow-md border border-emerald-600' // Active නම් පාට වෙනස්
                                    : 'text-emerald-100 hover:bg-emerald-800 hover:text-white border border-transparent' // සාමාන්‍ය තත්වය
                                }`}
                        >
                            <div className={`min-w-max transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {item.icon}
                            </div>

                            {isOpen && (
                                <span className="font-medium whitespace-nowrap tracking-wide text-sm">
                                    {item.name}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Bottom Footer Area (Optional - shows version or tiny logo when open) */}
            <div className="mt-auto mb-6 flex justify-center border-t border-emerald-800/50 pt-4 px-3 text-emerald-500/50 text-xs font-bold">
                {isOpen ? "St. Benedict's Hostel V1.0" : "V1.0"}
            </div>
        </div>
    );
}