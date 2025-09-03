import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="menu-icon" onClick={() => setIsOpen(true)}>
        <FaBars />
      </div>

      <div className={`sidebar ${isOpen ? "open-sidebar" : "close-sidebar"}`}>
        <div className="close-icon" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
