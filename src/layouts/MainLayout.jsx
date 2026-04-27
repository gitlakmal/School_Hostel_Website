import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar - වම් පස */}
            <Sidebar />

            {/* ප්‍රධාන කොටස - දකුණු පස */}
            <div className="flex-1 flex flex-col h-full w-full">
                <Navbar />

                {/* අන්තර්ගතය (Pages) පෙන්වන තැන */}
                <div className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}