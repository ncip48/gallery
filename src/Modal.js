import React from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";

export default function Modal({ children, visible, onClose }) {
  return (
    <>
      <MDBModal tabIndex="-1" show={visible}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalBody>{children}</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
