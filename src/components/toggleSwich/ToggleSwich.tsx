import "./ToggleSwich.css";

export const ToggleSwich = () => {
  return (
  <div className="toggle-wrap">
    <label htmlFor="toggle">
        <input type="checkbox" id="toggle" className="toggle-input"/>
        <div className="toggle-swich"/>
    </label>
  </div>
  );
}

