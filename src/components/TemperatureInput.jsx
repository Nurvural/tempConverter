import React from "react";

const TemperatureInput = ({ label, value, onChange }) => {
  return (
    <label>
      {label}:
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default TemperatureInput;
