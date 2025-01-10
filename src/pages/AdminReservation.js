import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Admin.css';

const AdminReservation = () => {
  const navigate = useNavigate();

  const reservations = [
    {
      id: 1,
      name: 'Zhongli',
      contact: 'morax@gmail.com\n08123456789',
      subject: 'Lantern rite',
      date: '25/2/2025',
      packet: 'Medium',
    },
    {
      id: 2,
      name: 'PT Superindo',
      contact: 'superid@gmail.com\n08123456789',
      subject: 'Superindo in Jakarta Fair',
      date: '1/4/2025',
      packet: 'Big',
    },
  ];

  const handleEdit = (id) => {
    navigate(`/reservation/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Reservation with ID ${id} deleted!`);
    // Tambahkan logika penghapusan data di sini
  };

  // Handle logout
  const handleLogout = () => {
    // You can add logout logic here (e.g., clearing session or token)
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <img
          src={require('../assets/logo.png')}
          alt="Logo d'snap"
          className="admin-logo"
        />
        <ul className="admin-menu">
          <li>
            <a href="/admin" className="menu-link">Home</a>
          </li>
          <li>
            <a href="/adminprojects" className="menu-link">Projects</a>
          </li>
          <li>
            <a href="/reservation" className="menu-link active">Reservation</a>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        <h1 className="admin-title">Reservation</h1>

        {/* Logout Button */}
        <div className="logout-button" onClick={handleLogout}>
          <img
            src={require('../assets/LogoutLogo.png')}
            alt="Logout"
            className="logout-logo"
          />
        </div>

        <table className="reservation-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Packet</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={reservation.id}>
                <td>{index + 1}</td>
                <td>{reservation.name}</td>
                <td>{reservation.contact}</td>
                <td>{reservation.subject}</td>
                <td>{reservation.date}</td>
                <td>{reservation.packet}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(reservation.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(reservation.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReservation;
