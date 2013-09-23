var net = require('net');

var server = net.createServer(function(conn) {
   console.log('conectado');

   conn.on('data', function(data) {
      console.log(data + ' desde ' + conn.remoteAdress + ' ' +
	 console.remotePort);
      conn.write('repitiendo: ' +data);
   });

   conn.on('close', function() {
      console.log('Cliente cerro la conexion');
   });
}).listen(8124);

console.log('escuchando en puerto 8124');
