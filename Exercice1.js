import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombres = [];

rl.question("Ingrese el primer nombre: ", (nombre1)=>{
    nombres.push(nombre1);

    rl.question("Ingrese un segundo nombre: ", (nombre2)=>{
        nombres.push(nombre2);

        rl.question("Ingrese un trecer nombre: ", (nombre3)=>{
            nombres.push(nombre3);

            console.log("Los nombres ingresados son:");
            console.log("primer nombre:", (nombres[0]));
            console.log("segundo nombre:", (nombres[1]));
            console.log("tercer nombre:", (nombres  [2]));

            
            rl.close()
        })
    })
})