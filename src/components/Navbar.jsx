import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    // පරීක්ෂා කිරීම සඳහා පමණක් දමා ඇත. පසුව මෙය Context API එකෙන් ගනිමු.
    const isLoggedIn = false;
    const user = { name: "Lakmal", role: "Student" };

    return (
        <nav className="bg-blue-800 text-white p-4 shadow-md flex justify-between items-center">
            {/* වම් පස Links */}
            <div className="flex gap-6 font-semibold">
                <Link to="/" className="hover:text-blue-300">Home</Link>
                <Link to="/hostel" className="hover:text-blue-300">Hostel</Link>
                <Link to="/about" className="hover:text-blue-300">About Us</Link>
            </div>

            {/* දකුණු පස Profile / Login */}
            <div className="flex items-center gap-4 font-medium">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login" className="hover:text-blue-300">Login</Link>
                        <Link to="/signup" className="hover:text-blue-300">Sign Up</Link>
                        <FaUserCircle size={28} className="text-gray-300" />
                    </>
                ) : (
                    <div className="flex items-center gap-3 bg-blue-700 px-3 py-1 rounded-full">
                        <div className="text-right text-sm">
                            <p className="font-bold">{user.name}</p>
                            <p className="text-xs text-blue-200">{user.role}</p>
                        </div>
                        <FaUserCircle size={30} className="text-white" />
                    </div>
                )}
            </div>
        </nav>
    );
}