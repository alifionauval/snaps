import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Admin.css';

const EditReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log(`Reservation ${id} updated.`);
    navigate('/reservation'); // Kembali ke halaman Reservation
  };

  const handleCancel = () => {
    navigate('/reservation'); // Kembali ke halaman Reservation tanpa menyimpan perubahan
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
        <h1 className="admin-title">Reservation / Edit</h1>
        <form className="edit-reservation-form">
          <div className="form-group">
            <label>Nama</label>
            <input type="text" defaultValue="PT Superindo" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="superid@gmail.com" />
          </div>
          <div className="form-group">
            <label>No. Telepon</label>
            <input type="tel" defaultValue="08123456789" />
          </div>
          <div className="form-group">
            <label>Event</label>
            <input type="text" defaultValue="Superindo in Jakarta Fair" />
          </div>
          <div className="form-group">
            <label>Tanggal</label>
            <div className="date-picker-container">
              <button type="button" className="date-picker-button">
                PILIH TANGGAL
              </button>
              <input type="text" defaultValue="22 April 2024" readOnly />
            </div>
          </div>
          <div className="form-group">
            <label>Jenis Paket</label>
            <input type="text" defaultValue="Big Event" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea defaultValue="Dibutuhkan event organizer yang pernah berpengalaman dalam mengadakan acara besar" />
          </div>
          <div className="form-buttons">
            <button
              type="button"
              className="save-button"
              onClick={handleSave}
            >
              SIMPAN
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              BATAL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReservation;
