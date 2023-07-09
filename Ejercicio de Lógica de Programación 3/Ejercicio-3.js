const inputPrompt = () => parseInt(prompt("Inserte un número: ")); 
var numero=inputPrompt();
while (isNaN(numero)==1 || numero<0) {
    console.log("Error, inserte un número válido.");
    numero=inputPrompt();
}
//Se hace la función
function factorial(numero){
	if (numero === 0 || numero===1){//caso base
        return 1;
	}//caso recursivo
        return numero*factorial(numero-1);
}
//Se imprime el resultado
console.log(factorial(numero));