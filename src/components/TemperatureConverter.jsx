import React, { useState } from "react";
import FahrenheitConverter from "./FahrenheitConverter";
import KelvinConverter from "./KelvinConverter";
import TemperatureResult from "./TemperatureResult";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [result, setResult] = useState({ label: "", value: "", unit: "" });

  const handleConversion = (label, value, unit) => {//bu fonksiyon dönüşüm bileşenlerinden gelen sonuçları alır
    setResult({ label, value, unit }); //result state'ine set eder.
  };
  return (
    <div>
      <h1>Temperature Converter</h1>
      <input 
        type="number"
        value={celsius}
        placeholder="celsius"
        onChange={(e) => setCelsius(e.target.value)}
      />
      <FahrenheitConverter celsius={celsius} onConvert={handleConversion} />
      <KelvinConverter celsius={celsius} onConvert={handleConversion} />
      <TemperatureResult {...result} />
    </div>
  );
};

export default TemperatureConverter;
