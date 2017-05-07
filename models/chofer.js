var mongoose = require('mongoose');
var schema = mongoose.Schema;

var choferSchema = new schema({
	ci:{type:Number},
	exp:{type:String},
	nombres: {type: String},
	apellidos:{type:String},
	genero:{type: String, enum:['M','F']},//enum es un string solo puede tener o'm' ó 'f'
	fecha_nacimiento:{type:Date},
	fotografia:{type:String},
	anulado:{type:Boolean},
	fecha_registro:{type:Date},
	fecha_modificado:{type:Date}
});

module.exports = mongoose.model('chofer',choferSchema);