module.exports = function(uri){

	var mongoose = require('mongoose');

mongoose.connect('mongodb://'+uri);

mongoose.connection.on('connected', function(){
	console.log('MongoDB Connected');
});

mongoose.connection.on('error', function(erro){
	console.log('Erro no MongoDB' + erro);
});

mongoose.connection.on('disconnected', function(){
	console.log('MongoDB Disconncet');
});

process.on('SIGINT', function(){

	mongoose.connection.close(function(){
		console.log('Conexao encerrada.');
	});
})
}

