import { parse } from 'path';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = [];

rl.question("Ingrese el primer numero: ", (numero)=>{
    sum[0] = parseInt(numero);

    rl.question("Ingresee el segundo numero: ", (numero2)=>{
        sum[1] = parseInt(numero2);

        rl.question("Ingrse su tercer numero: ", (numero3)=>{
            sum[2] = parseInt(numero3);

            let promedio = (sum[0] + sum[1] + sum[2] )/3;
            console.log(`El promedio es de : ${promedio}`);
            
            

            rl.close()
        })
    })
})