import React, { useState } from "react";

function Header({mode, onDarkModeClick}) {


  return (
        <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
        </button>
  );
}

export default Header;
