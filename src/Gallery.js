import React, { Component } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./style.css";

export default class Gallery extends Component {
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={8}>
          {Array(39)
            .fill()
            .map((e, i) => (
              <div style={{ padding: "5px" }}>
                <img
                  key={i}
                  src={require(`./img/${i + 1}.jpg`)}
                  style={{
                    width: "100%",
                    display: "block",
                    marginBottom: "4px",
                    borderRadius: "5px",
                  }}
                  alt=""
                />
              </div>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}
