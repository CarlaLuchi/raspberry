var mongoose = require('mongoose');
var Recorrido = mongoose.model('recorrido');

//GET - Devuelve todos
exports.findAll = function(req, res) {
 Recorrido.find(function(err, recorridos) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /recorridos')
 res.status(200).jsonp(recorridos);
 });
};

//GET - Devuelve solo uno
exports.findById = function(req, res) {
 Recorrido.findById(req.params.id, function(err, recorridos) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /recorridos/' + req.params.id);
 res.status(200).jsonp(recorridos);
 });
};

//POST - Inserta un registro
exports.add = function(req, res) {
  console.log('POST /recorridos');
  console.log(req.body);
	
    var recorrido = new Recorrido({
		  codigo_nfc:req.body.codigo_nfc,
		  numero_usuario: req.body.numero_usuario,
          hora_inicio:req.body.hora_inicio,
          lat_inicio:req.body.lat_inicio,
          long_inicio:req.body.long_inicio,
          hora_fin:req.body.hora_fin,
          lat_fin:req.body.lat_fin,
          long_fin:req.body.long_fin,
          estado:req.body.estado,
		  anulado: false,
		  fecha_registro: new Date(),
		  fecha_modificado: null
  });
  recorrido.save(function(err, recorrido) {
  	if(err) 
 			return res.send(500, err.message);
  	res.status(200).jsonp(recorrido);
  });
};

//PUT - Modifica un registro existente
exports.update = function(req, res) {
	console.log('PUT /recorridos/'+req.params.id);
	console.log(req.body);
	 recorrido.findById(req.params.id, function(err, recorrido) {
	 recorrido.codigo_nfc = req.body.codigo_nfc;
	 recorrido.numero_usuario = req.body.numero_usuario;
	 recorrido.hora_inicio = req.body.hora_inicio;
	 recorrido.lat_inicio = req.body.lat_inicio;
	 recorrido.long_inicio = req.body.long_inicio;
	 recorrido.hora_fin = req.body.hora_fin;
	 recorrido.lat_fin = req.body.lat_fin;
     recorrido.long_fin = req.body.long_fin;
     recorrido.estado = req.body.estado;
	 recorrido.anulado = req.body.anulado;
	 recorrido.fecha_modificado = new Date();

	 recorrido.save(function(err) {
		 if(err) {
		 	return res.send(500, err.message);
		 }
		 res.status(200).jsonp(recorrido);
 	 });
 });
};
