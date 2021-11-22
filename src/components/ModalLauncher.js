import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ModalLauncher(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" size="md" onClick={() => setShow(true)}>
        View Image
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Image src={props.src}  fluid={true} ></Image> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="md" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="secondary" size="md" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLauncher;
