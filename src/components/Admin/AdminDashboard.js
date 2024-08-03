
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="list-group">
        <Link to="/admin/users" className="list-group-item list-group-item-action">Manage Users</Link>
        <Link to="/admin/memberships" className="list-group-item list-group-item-action">Manage Memberships</Link>
        <Link to="/admin/programs" className="list-group-item list-group-item-action">Manage Programs</Link>
        <Link to="/admin/content" className="list-group-item list-group-item-action">Manage Content</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
