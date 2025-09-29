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

        rl.question("Ingrese su tercer numero: ", (numero3)=>{
            sum[2] = parseInt(numero3);

            let total = 0;
            for (let i = 0; i < sum.length; i++) {
                total += sum[i];
            };            
            let promedio = total / sum.length;
            console.log(`El promedio es de : ${promedio} y el total es de: ${total}`);
            

            rl.close()
        })
    })
})