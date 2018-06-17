const fs = require('fs'); // constante donde guardamos libreria file
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('========================'.blue);
    console.log(`=======Tabla de ${base}=======`.yellow);
    console.log('========================'.blue);
    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i}`)

    };
}

// metodo para crear archivos
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i}\n`;

        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)


        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}