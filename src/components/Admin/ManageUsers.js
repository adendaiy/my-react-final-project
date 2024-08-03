


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:5000/users/${currentUser.id}`, currentUser);
      setShowModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleShowModal = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h2>Manage Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning" onClick={() => handleShowModal(user)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={currentUser?.fullName || ''}
                onChange={(e) => setCurrentUser({ ...currentUser, fullName: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={currentUser?.email || ''}
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              />
            </Form.Group>
            {/* Add more fields as needed */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageUsers;
