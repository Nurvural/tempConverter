import React from 'react';

const TemperatureResult = ({ label, value, unit }) => {
  return (
    <div className="TemperatureResult">
      {label} {value} {unit}
    </div>
  );
};

export default TemperatureResult;
