// Navbar.tsx

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <div className="font-bold text-lg">Smart Timetable</div>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/teachers" className="hover:underline">Teachers</Link>
                <Link to="/about us" className="hover:underline">About U</Link>
            </div>
        </nav>
        
    );
}
