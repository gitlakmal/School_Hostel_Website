import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Public/Home';
import Auth from './pages/Shared/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* === Navbar සහ Sidebar නැති පිටු (Auth) === */}
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />

        {/* === Navbar සහ Sidebar සහිත ප්‍රධාන පිටු === */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="hostel" element={<div className="p-10 text-2xl">Hostel Page Coming Soon...</div>} />
          <Route path="about" element={<div className="p-10 text-2xl">About Us Coming Soon...</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;