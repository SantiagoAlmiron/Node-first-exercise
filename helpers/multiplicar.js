const fileSystem = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5 , l, range) => {
    try {
			
			let salida, consola = '';
			
			for (let i = 0; i <= range; i++) {
				salida += `${base} ${ '*' } ${i} ${'='} ${base * i}\n`
				consola += `${base} ${ '*'.blue } ${i} ${'='.blue} ${base * i}\n`
			};
			
			fileSystem.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
			
			if ( l == true) {
					console.log("=======================".blue.bgWhite)
					console.log(`     Tabla del ${colors.bold(base)}       `.black.bgWhite)
					console.log("=======================".blue.bgWhite)
					console.log(consola);
        }; 
        return `tabla-del-${base}.txt`.green;
    } catch (err) {
        throw err
    };
};

module.exports = {
    crearArchivo,
};