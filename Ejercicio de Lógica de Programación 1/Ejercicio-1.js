//Se crea función que pide la entrada y la hace enteros
const inputPrompt = (index) => parseInt(prompt("Inserte el número " + index)); 
//Se asigna una variable diferente a cada una.
num1=inputPrompt(1);
num2=inputPrompt(2);
num3=inputPrompt(3);
//Se ordenan
//encontrar valor mayor, menor y central
let mayor=0, central=0, menor=0;

function ordenar(num1,num2,num3){
    if(num1>num2){ 
        if(num1>num3){ 
            mayor=num1;// n1 es el mayor 
            central = (num2>num3)? num2:num3; // si n2 es mayor que n3, n2 es el de en medio, sino es n3.
            menor= (num2<num3)? num2:num3;// si n2 es menor que n3, n2 es el menor, sino es n3.
        }else{
            central=num1;//n1 es el central
            mayor=num3; // n3 es el mayor
            menor = num2;
        }
    }else if(num1<num3){
        menor=num1; //num1 seria menor que todos
            if(num2<num3){ //determinar si n2 es menor que n3.
                central=num2;//n2 seria el del centro y n3 el mayor.
                mayor=num3;
            }else{
                mayor=num2;//n2 no es menor que n3, por lo que n2 seria el mayor y n3 el central.
                central=num3;
            }
        }else if(num3<num2){ //num3 seria menor que n1 y n2, siendo n1 menor que n2 pero mayor que n3.
        menor=num3;
        central=num1;
        }

    let orden={
        mayor:mayor,
        central:central,
        menor:menor
    };
    
    return orden;
}
//Se hacen funciones para cada orden
const descendente = () => console.log(ordenar(num1,num2,num3).mayor,ordenar(num1,num2,num3).central,ordenar(num1,num2,num3).menor);
const ascendente = () => console.log(ordenar(num1,num2,num3).menor,ordenar(num1,num2,num3).central,ordenar(num1,num2,num3).mayor);
//Se llaman las funciones
descendente();
ascendente();
