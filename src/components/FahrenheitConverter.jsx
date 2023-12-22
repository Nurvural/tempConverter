import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import TemperatureResult from "./TemperatureResult";

const FahrenheitConverter = ({ celsius, onConvert }) => {
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = () => {
    const celsiusValue = parseFloat(celsius); //celsius değişkenini parseFloat fonksiyonu ile birlikte kullanarak sayısal bir değere dönüştürür
    if (!isNaN(celsiusValue)) { //Dönüştürülen değerin sayı olup olmadığını kontrol eder
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      onConvert("Fahrenheit", fahrenheitValue.toFixed(2), "°F");//onConvert üst bileşene sonucu iletir.
    }
  };

  return (
    <div>
      <br />
      <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
    </div>
  );
};

export default FahrenheitConverter;
