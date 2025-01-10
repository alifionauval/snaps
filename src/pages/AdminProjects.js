import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import '../styles/Admin.css';

const AdminProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, nama: "Samsung", gambar: "" },
    { id: 2, nama: "Synchronize Fest", gambar: "" },
  ]);

  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle logout function
  const handleLogout = () => {
    // You can add logout logic here (e.g., clearing session or token)
    navigate('/'); // Redirect to home page
  };

  const handleAdd = () => {
    setEditData(null); // Mode tambah
    setModal(true);
  };

  const handleEdit = (project) => {
    setEditData(project); // Mode edit
    setModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Anda yakin ingin menghapus proyek ini?")) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  const handleSave = (data) => {
    if (editData) {
      // Update data
      setProjects(
        projects.map((project) =>
          project.id === editData.id ? { ...project, ...data } : project
        )
      );
    } else {
      // Tambah data baru
      setProjects([
        ...projects,
        { id: projects.length + 1, nama: data.nama, gambar: data.gambar },
      ]);
    }
    setModal(false);
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
            <a href="/admin" className="menu-link">
              Home
            </a>
          </li>
          <li>
            <a href="/adminprojects" className="menu-link active">
              Projects
            </a>
          </li>
          <li>
            <a href="/reservation" className="menu-link">
              Reservation
            </a>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        <h1 className="admin-title">Projects</h1>
        <button className="add-button" onClick={handleAdd}>
          TAMBAH
        </button>
        <div className="table-container">
          <table className="reservation-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Event</th>
                <th>Gambar Event</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}</td>
                  <td>{project.nama}</td>
                  <td>{project.gambar || "Belum ada gambar"}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(project)}
                    >
                      EDIT
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(project.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Logout Button in top right */}
      <div className="logout-button" onClick={handleLogout}>
        <img
          src={require('../assets/LogoutLogo.png')}
          alt="Logout"
          className="logout-logo"
        />
      </div>

      {modal && (
        <Modal
          data={editData}
          onClose={() => setModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

const Modal = ({ data, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    data || { nama: "", gambar: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{ color: "#004d00" }}>{data ? "Edit Project" : "Tambah Project"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Event</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gambar Event</label>
            <input
              type="file"
              name="gambar"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="save-button">
              Simpan
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProjects;
