//Solicitar al usuario por input o prompt la temperatura en grados Celcius.
let celsius;
const inputPrompt = () => parseFloat(prompt("Inserte la temperatura en Celsius: ")); 

celsius=inputPrompt();
while (isNaN(celsius)==1) {
    console.log("Error, inserte un número.");
    celsius=inputPrompt();
}
//Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32. 
const fahrenheit = (celsius) => (celsius*(9/5))+32;
//Kelvin = Celsius + 273.15.
const kelvin = (celsius) => celsius+273.15;
//se imprimen resultados
console.log(fahrenheit(celsius));
console.log(kelvin(celsius));

