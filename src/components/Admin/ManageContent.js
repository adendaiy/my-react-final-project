



// src/components/Admin/ManageContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManageContent = () => {
  const [contents, setContents] = useState([]);
  const [show, setShow] = useState(false);
  const [editContent, setEditContent] = useState(null);
  const [newContent, setNewContent] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contents');
      setContents(response.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const handleEdit = (content) => {
    setEditContent(content);
    setNewContent({ title: content.title, description: content.description });
    setShow(true);
  };

  const handlePublish = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/contents/${id}`, { published: true });
      fetchContents();
    } catch (error) {
      console.error('Error publishing content:', error);
    }
  };

  const handleSave = async () => {
    try {
      if (editContent) {
        await axios.put(`http://localhost:5000/contents/${editContent.id}`, newContent);
      } else {
        await axios.post('http://localhost:5000/contents', newContent);
      }
      fetchContents();
      setShow(false);
      setNewContent({ title: '', description: '' });
      setEditContent(null);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Button onClick={() => setShow(true)}>Add New Content</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr key={content.id}>
              <td>{content.title}</td>
              <td>{content.description}</td>
              <td>
                <Button onClick={() => handleEdit(content)}>Edit</Button>
                <Button onClick={() => handlePublish(content.id)}>Publish</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editContent ? 'Edit Content' : 'Add New Content'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newContent.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newContent.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>
            {editContent ? 'Save Changes' : 'Add Content'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageContent;
