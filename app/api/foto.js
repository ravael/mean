var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Foto');


api.lista = function(req, res) {


    model.find()
    .then(function(fotos) {
        res.json(fotos);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};

api.buscaPorId = function(req,res){

	model
		.findById(req.params.id)
		.then(function(foto){
			if(!foto) throw Error('Foto não encontrada.')
				res.json(foto);
		}, function(error){
			console.log(error);
			res.sendStatus(500);
		})
	
};

api.removePorId = function(req, res){

	model.remove({_id: req.params.id})
	.then(function(){
		res.sendStatus(204);
	}, function(error){
		console.log(error);
		res.sendStatus(500);
	})
};

api.adiciona = function(req, res){
	
	var foto = req.body;

	model
		.create(foto)
		.then(function(foto){
			res.json(foto);
		}, function(error){
			console.log(error);
		res.sendStatus(500);
		})
};

api.atualiza = function(req, res){

	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function(foto){
			res.json(foto);
		}, function(error){
			console.log(error);
		res.sendStatus(500);
		})
}

module.exports = api;