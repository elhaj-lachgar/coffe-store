import React from "react";
import './HeadingStyle.css'
function Heading({ content, pointer }) {
  return (
    <div className="heading">
      <p>
        {pointer ? "Store :" : pointer} {content}
      </p>
    </div>
  );
}

export default Heading;
