const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.log(argv)

crearArchivo(argv.b, argv.l, argv.r)
    .then(nombreArchivo => console.log(nombreArchivo, "Creado"))
    .catch( err => console.log(err));