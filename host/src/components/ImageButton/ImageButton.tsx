import React from "react";

export const ImageButton = ({ onClick, imageUrl, altText }: any) => {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{ width: "100px", height: "100px" }}
      />
    </button>
  );
};
