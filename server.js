//Es mi archivo principal de todo
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require ("method-override");
var app = express();
//conectar a base de datos mongo db 
//base de datos se llama univalle 
mongoose.connect('mongodb://localhost/univalle',function(err, res){
	if(err) {
		throw err;
	}
	console.log('Conectado a la base de datos...');
});
// definir carpeta publico para el caso de tener pagina web (para el publico desde afuera)
app.use(express.static('public'));

//definiendo middleware como software que  nos ayuda con los metodos
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//importar los modelos y controladores
var choferModel = require('./models/chofer')(app,mongoose);
var choferController = require('./controllers/choferController');

//definimos la ruta del proyecto
var router = express.Router();
app.use(router);

//definimos la ruta del API
var api = express.Router();

api.route('/choferes')
.get(choferController.findAll)
.post(choferController.add);

api.route('/choferes/:id')
.get(choferController.findById)
.put(choferController.update);

app.use('/api',api);

//iniciar el servidor
app.listen(3000,function(){
	console.log("Servidor corriendo en http://localhost:3000");
});
