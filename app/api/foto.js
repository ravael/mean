var mongoose = require('mongoose');

var api = {};


api.lista = function(req, res) {

    var model = mongoose.model('Foto');

    model.find()
    .then(function(fotos) {
        res.json(fotos);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};

api.buscaPorId = function(req,res){

	var foto = fotos.find(function(foto){
		return foto._id == req.params.id;
	});

	res.json(foto);
};

api.removePorId = function(req, res){

	fotos = fotos.filter(function(foto){
		return foto._id != req.params.id;
	});

	res.sendStatus(204);
};

api.adiciona = function(req, res){
	var foto = req.body;
	foto._id = ++CONTADOR;
	fotos.push(foto);

	res.json(foto);
};

api.atualiza = function(req, res){

	var foto = req.body;
	var fotoId = req.params.id;

	var indice = fotos.findIndex(function(foto){
		return foto._id == fotoId;
	})

	fotos[indice] = foto;

	res.sendStatus(200);
}

module.exports = api;