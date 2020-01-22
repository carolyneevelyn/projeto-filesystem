var fs = require('fs');

fs.readFile('computador.txt', 'utf8', function(err, data) {
    console.log(data);
});


fs.writeFile('computador2.txt', "Hello, txt!", function(erro) {

    if(erro) {
        throw erro;
    }

    console.log("Arquivo salvo");
}); 


fs.rename('./computador2.txt', './novocomputador.txt', function(err){
    //Caso a execução encontre algum erro
		if(err){
			//A execução irá parar e mostrará o erro
			throw err;	
		}else{
      //Caso não tenha erro, apenas a mensagem será exibida no terminal
      console.log('Arquivo renomeado');
    }
	});

fs.unlink("./novocomputador.txt", function(err){

	console.log('Arquivo destruído');

});
/*
fs.readFile('computador.txt', 'utf8', function(err, data) {
    fs.writeFile('computador.txt', data+ " Olá mundo!", function(erro) {

    if(erro) {
        throw erro;
    }

    console.log(data);
}); 
});
*/

console.log("")
fs.appendFile('computador.txt', "OIII", function(erro) {

    if(erro) {
        throw erro;
    }

    console.log(data);
}); 


