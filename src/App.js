import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Projects from "./pages/Projects"; // Halaman untuk pengguna umum
import KontakKami from "./pages/KontakKami";
import Login from "./pages/Login";
import Admin from "./pages/Admin"; // Halaman Admin Dashboard
import AdminReservation from "./pages/AdminReservation"; // Halaman Admin Reservation
import EditReservation from "./pages/EditReservation"; // Halaman Edit Reservation
import AdminProjects from "./pages/AdminProjects"; // Halaman Admin untuk mengelola Projects

function App() {
  return (
    <Router>
      <ConditionalLayout>
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/kontak-kami" element={<KontakKami />} />
          <Route path="/login" element={<Login />} />

          {/* Halaman Admin */}
          <Route path="/admin" element={<Admin />} /> {/* Dashboard Admin */}
          <Route path="/adminprojects" element={<AdminProjects />} /> {/* Admin Projects */}
          <Route path="/reservation" element={<AdminReservation />} /> {/* Reservation Admin */}
          <Route path="/reservation/edit/:id" element={<EditReservation />} /> {/* Edit Reservation */}
        </Routes>
      </ConditionalLayout>
    </Router>
  );
}

const ConditionalLayout = ({ children }) => {
  const location = useLocation();

  // Daftar path yang tidak memerlukan Navbar dan Footer
  const hideNavbarFooterRoutes = ["/login", "/admin", "/adminprojects", "/reservation"];

  // Periksa apakah path adalah "/reservation/edit/:id"
  const shouldHideNavbarFooter =
    hideNavbarFooterRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/reservation/edit");

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      <main>{children}</main>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
};

export default App;
