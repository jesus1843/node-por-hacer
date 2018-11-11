const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch ( comando ) {
  case 'crear':
    let tarea = porHacer.crear( argv.descripcion );
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado();
    console.log('========Por Hacer========'.green);
    for (let tarea of listado) {
      console.log('Tarea:'.blue, tarea.descripcion);
      console.log('Estado:', tarea.completado);
      console.log('----------------------'.yellow);
    }
    console.log('========================='.green);
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    argv.completado ? console.log('Tarea actualizada') : console.log('Tarea no actualizada');
    break;
  case 'borrar':
    let [descripcion, borrado] = porHacer.borrar(argv.descripcion);
    borrado ? console.log(`Tarea '${descripcion}' borrada`) : console.log('Tarea no borrada');
    break;
  default:
    console.log('Comando inválido'.red);
}