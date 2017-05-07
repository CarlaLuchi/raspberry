var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relacionSchema = new schema({
	ci_chofer:{type:Number},
    placa_vehiculo:{type:String},
	codigo_sindicato:{type:String},
	codigo_nfc: {type: String},
	anulado:{type:Boolean},
	fecha_registro:{type:Date},
	fecha_modificado:{type:Date}
		
	});

module.exports = mongoose.model('relacion',relacionSchema);