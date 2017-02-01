var api = {};

api.lista = function(req, res){

	var grupos = [
		{_id:1, nome: 'leao'},
		{_id:2, nome: 'leao 2'},
		{_id:2, nome: 'leao 3'}
	];

	res.json(grupos)
}

module.exports = api;