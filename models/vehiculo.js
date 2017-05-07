var mongoose = require('mongoose');
var schema = mongoose.Schema;

var vehiculoSchema = new schema({
	placa:{type:String},
    marca:{type:String},
	modelo:{type:String},
	gestion:{type:Number},
	color: {type: String},
	descripcion:{type:String},
	chasis:{type:Number},
	fotografia:{type:String},
	anulado:{type:Boolean},
	fecha_registro:{type:Date},
	fecha_modificado:{type:Date}
	});

module.exports = mongoose.model('vehiculo',vehiculoSchema);