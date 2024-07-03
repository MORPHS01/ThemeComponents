import React, { useState } from "react";
import "./Switch.css";

function Switch(props) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} onClick={props.onClick}/>
      <span className="switch" />
    </label>
  );
}
export default Switch;
