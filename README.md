# tempConverter
 This project encompasses a React.js application developed during a training camp at Mega Software Academy. The application allows users to swiftly and effortlessly convert Celsius temperature values to Fahrenheit and Kelvin.

Features:

-The user can enter a Celsius value into an input field.
-Clicking the "Convert to Fahrenheit" button translates the entered Celsius value to Fahrenheit.
-Clicking the "Convert to Kelvin" button translates the entered Celsius value to Kelvin.
-Results are interactively displayed among separate components.

Project Components:

1-TemperatureConverter:

-The main component includes functionality for entering and managing Celsius values.
-It incorporates the FahrenheitConverter, KelvinConverter, and TemperatureResult components.

2-FahrenheitConverter:

-Performs Celsius-to-Fahrenheit conversion processes by taking the Celsius value.
-Updates the result through a function passed by the main component.

3-KelvinConverter:

-Executes Celsius-to-Kelvin conversion processes by taking the Celsius value.
-Updates the result through a function passed by the main component.

4-TemperatureResult:

-A simple component used to display conversion results.
-Results are conveyed to the main component through props.