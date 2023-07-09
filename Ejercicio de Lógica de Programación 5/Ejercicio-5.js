// Se genera un número secreto del 1 and 100
const numeroSecreto = Math.floor(Math.random() * 101);
const inputPrompt = () => parseInt(prompt("Inserte un número del 1 al 100: ("+numeroSecreto+")")); 
// Se muestra el número secreto (para terminar el código sin tener que realmente adivinarlo)
let numero=0;
// Se evalúa si el número ingresado es el generado
let numbers = []; //se crea array donde se guardan los números previos
let i = 0;
while(numero!=numeroSecreto){
    numero=inputPrompt();
    if(isNaN(numero)==1 || numero<0 ||numero>100) {
    console.log("Error, inserte un número válido.");
    }else{
        numbers[i] = numero; 
        i++;
        if(i>0){
            console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        } 
    }
}
// Se imprime el mensaje de felicitación
console.log("Felicidades, adivinaste el número secreto.");
console.log("Intentaste los números: "+numbers);
