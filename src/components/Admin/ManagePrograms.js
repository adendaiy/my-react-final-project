


// src/components/ManagePrograms.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManagePrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/programs');
      setPrograms(response.data);
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/programs/${id}`);
      fetchPrograms();
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:5000/programs/${currentProgram.id}`, currentProgram);
      setShowModal(false);
      fetchPrograms();
    } catch (error) {
      console.error('Error editing program:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:5000/programs', currentProgram);
      setShowModal(false);
      fetchPrograms();
    } catch (error) {
      console.error('Error creating program:', error);
    }
  };

  const handlePublish = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/programs/${id}`, { published: true });
      fetchPrograms();
    } catch (error) {
      console.error('Error publishing program:', error);
    }
  };

  const handleShowModal = (program = null) => {
    if (program) {
      setCurrentProgram(program);
      setIsCreating(false);
    } else {
      setCurrentProgram({ name: '', description: '', published: false });
      setIsCreating(true);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h2>Manage Programs</h2>
      <Button variant="primary" onClick={() => handleShowModal()}>
        Add New Program
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {programs.map(program => (
            <tr key={program.id}>
              <td>{program.id}</td>
              <td>{program.name}</td>
              <td>{program.description}</td>
              <td>{program.published ? 'Yes' : 'No'}</td>
              <td>
                <Button variant="warning" onClick={() => handleShowModal(program)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(program.id)}>Delete</Button>
                {!program.published && (
                  <Button variant="success" onClick={() => handlePublish(program.id)}>Publish</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isCreating ? 'Add New Program' : 'Edit Program'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentProgram?.name || ''}
                onChange={(e) => setCurrentProgram({ ...currentProgram, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={currentProgram?.description || ''}
                onChange={(e) => setCurrentProgram({ ...currentProgram, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          {isCreating ? (
            <Button variant="primary" onClick={handleCreate}>Create Program</Button>
          ) : (
            <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManagePrograms;

