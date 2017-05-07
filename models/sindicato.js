var mongoose = require('mongoose');
var schema = mongoose.Schema;

var sindicatoSchema = new schema({
	codigo:{type:Number},
    nombre:{type:String},
	fecha_fundacion:{type:Date},
	logo: {type: String},
	telefono:{type:Number},
	direccion:{type:Number},
	anulado:{type:Boolean},
	fecha_registro:{type:Date},
	fecha_modificado:{type:Date}
		
	});

module.exports = mongoose.model('sindicato',sindicatoSchema);