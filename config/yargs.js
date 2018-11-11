const descripcion = {
                  demand: true,
                  alias: 'd',
                  desc: 'Descripción de la tarea por hacer'
                };

const completado = {
                  default: true,
                  alias: 'c',
                  desc: 'Marca como completado o pendiente la tarea'
                }

const argv = require('yargs')
              .command('crear', 'Crea un elemento por hacer (crear String)', {
                descripcion
              })
              .command('actualizar', 'Actualiza el estado completado de una tarea (actualizar String)', {
                descripcion,
                completado
              })
              .command('borrar', 'Borrar un elemento por hacer (borrar String)', {
                descripcion
              })
              .help()
              .argv;

module.exports = {
  argv
}