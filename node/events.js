const EventEmitter = require('events');

// Creamos un objeto EventEmitter
const emisorEventos = new EventEmitter();

// Escuchamos el evento personalizado 'miEvento'
emisorEventos.on('miEvento', () => {
  console.log('El evento "miEvento" ha sido activado');
});

// Emitimos el evento personalizado 'miEvento'
emisorEventos.emit('miEvento');