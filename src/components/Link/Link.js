import React from "react";
import "./Link.css";

const link = ({name,link, id}) => {
  return (
    <div>
      {" "}
      <a href={link} className='link' id={id}> {name} </a>{" "}
    </div>
  );
};

export default link;
