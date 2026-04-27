import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    // පරීක්ෂා කිරීම සඳහා පමණක් දමා ඇත. පසුව මෙය Context API එකෙන් ගනිමු.
    const isLoggedIn = false;
    const user = { name: "Lakmal", role: "Student" };

    return (
        <nav className="bg-emerald-900 text-white p-4 shadow-md flex justify-between items-center border-b border-emerald-800">
            {/* වම් පස Links */}
            <div className="flex gap-6 font-semibold pl-4">
                <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
                <Link to="/hostel" className="hover:text-emerald-300 transition-colors">Hostel</Link>
                <Link to="/about" className="hover:text-emerald-300 transition-colors">About Us</Link>
            </div>

            {/* දකුණු පස Profile / Login */}
            <div className="flex items-center gap-4 font-medium pr-4">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login" className="hover:text-emerald-300 transition-colors">Login</Link>
                        <Link to="/signup" className="hover:text-emerald-300 transition-colors">Sign Up</Link>
                        <FaUserCircle size={28} className="text-emerald-200/50" />
                    </>
                ) : (
                    <div className="flex items-center gap-3 bg-emerald-800 px-3 py-1.5 rounded-full border border-emerald-700 shadow-sm cursor-pointer hover:bg-emerald-700 transition-colors">
                        <div className="text-right text-sm">
                            <p className="font-bold text-white leading-tight">{user.name}</p>
                            <p className="text-[11px] text-emerald-300 font-semibold tracking-wide uppercase">{user.role}</p>
                        </div>
                        <FaUserCircle size={30} className="text-emerald-100" />
                    </div>
                )}
            </div>
        </nav>
    );
}