import React from "react";
import "./Tolink.css";

const Tolink = ({name,link, id}) => {
  return (
    <div>
      {" "}
      <a href={link} className='link' id={id}> {name} </a>{" "}
    </div>
  );
};

export default Tolink;
