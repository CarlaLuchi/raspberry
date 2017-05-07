var mongoose = require('mongoose');
var Chofer = mongoose.model('chofer');//se carga lo q esta en el modelo
//get = mostrar datos
exports.findAll = function(req,res){
	Chofer.find(function(err,choferes){
		if(err){
			return res.send(500,err.message);
		}
		console.log('GET /choferes');
		res.status(200).jsonp(choferes);
	});
};
//get = devuelve solo un registro
exports.findById = function(req,res){
	Chofer.findById(req.params.id,function(err,choferes){
		if(err){
			return res.send(500,err.message);
		}
		console.log('GET /choferes/'+req.params.id);
		res.status(200).jsonp(choferes);
	});
};
//post = insertar datos
exports.add = function(req,res){
	console.log ('POST');
	console.log(req.body);
	var expV = req.body.exp;
	var nombresV = req.body.nombres;
	var apellidosV = req.body.apellidos;
 	var chofer = new Chofer({
 		ci:req.body.ci,
 		exp:expV.toUpperCase(),
 		nombres:nombresV.toUpperCase(),
 		apellidos:apellidosV.toUpperCase(),
 		genero:req.body.genero,
 		fecha_nacimiento:req.body.nacimiento,
		//fotografia:req.body.fotografia,
		anulado:false,
		fecha_registro:new Date(),
		fecha_modificado:new Date()

 	});
 	chofer.save(function(err,chofer){
 		if(err){
 			return res.send(500,err.message);
 		}
 		res.status(200).jsonp(chofer);
 	});
};
//put = modificar registros existentes
exports.update = function(req,res){
	console.log('PUT');
	console.log(req.body);
	var expV = req.body.exp;
	var nombresV = req.body.nombres;
	var apellidosV = req.body.apellidos;
	Chofer.findById(req.params.id,function(err,chofer){
		chofer.ci = req.body.ci;
 		chofer.exp = expV.toUpperCase();
 		chofer.nombres = nombresV.toUpperCase();
 		chofer.apellidos = apellidosV.toUpperCase();
 		chofer.genero = req.body.genero;
 		chofer.fecha_nacimiento = req.body.nacimiento;
		//fotografia:req.body.fotografia,
		chofer.anulado = req.body.anulado;
		chofer.fecha_modificado = new Date();

		chofer.save(function(err){
			if(err) {
				return res.send(500,err.message);
			}
			res.status(200).jsonp(chofer);
		})
	})
}
//delete = borrar datos
;