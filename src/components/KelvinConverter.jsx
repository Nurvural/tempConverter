import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import TemperatureResult from "./TemperatureResult";

const KelvinConverter = ({ celsius, onConvert }) => {
  const [kelvin, setKelvin] = useState("");

  const convertToKelvin = () => {
    const celsiusValue = parseFloat(celsius);//celsius değişkenini parseFloat fonksiyonu ile birlikte kullanarak sayısal bir değere dönüştürür
    if (!isNaN(celsiusValue)) {//Dönüştürülen değerin sayı olup olmadığını kontrol eder
      const kelvinValue = celsiusValue + 273.15;
      onConvert("Kelvin", kelvinValue.toFixed(2), "K");//onConvert üst bileşene sonucu iletir.
    }
  };

  return (
    <div>
      <br />
      <button onClick={convertToKelvin}>Convert to Kelvin</button>
    </div>
  );
};

export default KelvinConverter;
