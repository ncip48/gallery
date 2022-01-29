import React, { useState } from "react";
import "./style.css";
import { MDBRow } from "mdb-react-ui-kit";
import Modal from "./Modal";

export default function Masonry() {
  const [modal, setModal] = useState(false);

  const ImageComponent = ({ index: i, onClick }) => {
    return (
      <div
        key={i}
        style={{ padding: "0px", cursor: "pointer" }}
        onClick={onClick}
      >
        <img
          key={i}
          src={require(`./img/${i + 1}.jpg`)}
          style={{
            width: "100%",
            height: 200,
            // display: "block",
            marginBottom: "4px",
            borderRadius: "5px",
            objectFit: "cover",
          }}
          alt={i}
        />
      </div>
    );
  };

  return (
    <>
      <MDBRow className="masonry-with-columns-2">
        {Array(40)
          .fill()
          .map((e, i) => (
            <ImageComponent key={i} index={i} />
          ))}
      </MDBRow>
      <Modal visible={modal} onClose={() => setModal(false)} />
    </>
  );
}
