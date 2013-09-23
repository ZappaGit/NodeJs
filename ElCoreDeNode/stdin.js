process.stdin.resume()    	//inicia el string y poder enviar datos
process.stdin.on('data', function (chunk) {           //lee
	process.stdout.write('data: ' + chunk);		//escribe
} );
