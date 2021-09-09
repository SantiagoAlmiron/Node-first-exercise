const colors = require('colors');
const argv = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'number to multiply'
    })
    .option(
        'l', {
            alias: 'listable',
            type: "boolean",
            description: 'Print a preview of the file',
            default: false,
    })
    .option(
        'r', {
            alias: 'range',
            type: 'number',
            default: 10,
            description: 'Set the range of the table'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b )) {
            throw 'La base tiene que ser un número'.red
        }
        return true;
    })
    .check( (argv, options) => {
        if( argv.r < 0 ) {
            throw 'Los rangos deben ser positivos'.red
        }
        return true;
    })
    .argv;

    module.exports = argv;