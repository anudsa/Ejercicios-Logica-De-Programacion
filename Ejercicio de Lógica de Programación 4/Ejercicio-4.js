const inputPrompt = () => parseInt(prompt("Inserte un número: ")); 
let numero=inputPrompt();
while (isNaN(numero)==1 || numero<0) {
    console.log("Error, inserte un número válido.");
    numero=inputPrompt();
}
//Se crea funcion que calcula la serie
function Fibonacci(numero){
    let valorActual=0, valorSiguiente=1,valorAnterior=0;
    let serie=[];
        for(let i=0;i<numero;i++){
            serie[i]=valorActual;
            valorAnterior=valorActual;
            valorActual=valorSiguiente;
            valorSiguiente=valorAnterior+valorSiguiente;
        }
        return serie;
}
//Se imprime el resultado.
console.log(Fibonacci(numero));
