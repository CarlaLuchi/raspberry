var mongoose = require('mongoose');
var schema = mongoose.Schema;

var usuarioSchema = new schema({
	numero_cel:{type:Number},
	token_cel:{type:String},
	nombre_usuario:{type:String},
	anulado:{type:Boolean},
	fecha_registro:{type:Date},
	fecha_modificado:{type:Date}
	});

module.exports = mongoose.model('usuario',usuarioSchema);