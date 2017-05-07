var mongoose = require('mongoose');
var schema = mongoose.Schema;

var autorizadoSchema = new schema({
	numero_usuario:{type:Number},
    token:{type:String},
	estado:{type:String,enum:['P','A','R']},
	anulado:{type:Boolean},
	fecha_registro:{type:Date},
	fecha_modificado:{type:Date}
	});

module.exports = mongoose.model('autorizado',autorizadoSchema);