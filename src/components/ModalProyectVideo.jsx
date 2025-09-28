import React from "react";

export default function ModalProyectVideo({ modalVideoUrl, setModalVideoUrl }) {
  return (
    <div
      className="modal-overlay"
      onClick={() => setModalVideoUrl(null)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "trasparent",
          borderRadius: 8,
          maxWidth: 900,
          width: "90%",
        }}
      >
        <button
          onClick={() => setModalVideoUrl(null)}
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            fontSize: 50,
            cursor: "pointer",
            color: "#ff6565",
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <video controls autoPlay style={{ width: "100%" }}>
          <source src={modalVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
