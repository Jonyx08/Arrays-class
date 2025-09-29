import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//  Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta
let temps = [];

rl.question("Ingrese la temperatura del primer día: ", (temp1) => {
    temps[0] = parseFloat(temp1);

    rl.question("Ingrese la temperatura del segundo día: ", (temp2) => {
        temps[1] = parseFloat(temp2);

        rl.question("Ingrese la temperatura del tercer día: ", (temp3) => {
            temps[2] = parseFloat(temp3);

            const maxTemp = Math.max(...temps);
            console.log(`La temperatura más alta fue: ${maxTemp} grados `);

            rl.close();
        });
    });
});
