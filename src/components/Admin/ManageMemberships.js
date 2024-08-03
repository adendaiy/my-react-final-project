


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManageMemberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentMembership, setCurrentMembership] = useState(null);

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = async () => {
    try {
      const response = await axios.get('http://localhost:5000/memberships');
      setMemberships(response.data);
    } catch (error) {
      console.error('Error fetching memberships:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/memberships/${id}`);
      fetchMemberships();
    } catch (error) {
      console.error('Error deleting membership:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:5000/memberships/${currentMembership.id}`, currentMembership);
      setShowModal(false);
      fetchMemberships();
    } catch (error) {
      console.error('Error editing membership:', error);
    }
  };

  const handleShowModal = (membership) => {
    setCurrentMembership(membership);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h2>Manage Memberships</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map(membership => (
            <tr key={membership.id}>
              <td>{membership.id}</td>
              <td>{membership.name}</td>
              <td>${membership.price}</td>
              <td>{membership.duration}</td>
              <td>
                <Button variant="warning" onClick={() => handleShowModal(membership)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(membership.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Membership</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentMembership?.name || ''}
                onChange={(e) => setCurrentMembership({ ...currentMembership, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={currentMembership?.price || ''}
                onChange={(e) => setCurrentMembership({ ...currentMembership, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                value={currentMembership?.duration || ''}
                onChange={(e) => setCurrentMembership({ ...currentMembership, duration: e.target.value })}
              />
            </Form.Group>
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

export default ManageMemberships;
