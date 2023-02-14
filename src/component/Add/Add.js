import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add({addNewMovie}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [imgsrc, setImgsrc] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd =()=>{
    if (!title&&!description&!rating&&!imgsrc){
      alert(" fields impty");return;
    }
      addNewMovie({title,description,rating,posterUrl:imgsrc});handleClose();
  setTitle("");
setDescription("");
setRating(0);
setImgsrc("");
}

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
    Add new Movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body> <Form.Group className="mb-3">
        
        <Form.Control placeholder="Movie Title" onChange={(e)=>setTitle(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        
        <Form.Control placeholder="Description" onChange={(e)=>setDescription(e.target.value)}   />
      </Form.Group>
      <Form.Group className="mb-3">
       
        <Form.Control placeholder="Rating" onChange={(e)=>setRating(e.target.value)}   />
      </Form.Group>
      <Form.Group className="mb-3">
       
        <Form.Control placeholder="Link Of Photo" onChange={(e)=>setImgsrc(e.target.value)}  />
      </Form.Group>
      
      
      
        
      </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleAdd}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Add