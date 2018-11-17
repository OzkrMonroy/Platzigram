//Lo primero que haremos es requerir la librería de express
var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');

var app = express();

//Indicamos que vamos a utilizar un motor de vistas.
app.set('view engine', 'pug');

// Indicamos la carpeta que contiene los archivos estaticos
app.use(express.static('public'));

// Utilizamos el método get para inicializar nuestro servidor
// y además le enviamos un Hola Mundo que deberá de mostrar
app.get('/', function(req, res){
	// res.send('Hola Mundo!');
	// Colocamos esto para indicar que debe renderizar la vista
	// utilizando pug
	res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function(req, res){
	res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function(req, res){
	res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/user', function(req, res){
	res.render('index', { title: 'Platzigram - Oscar' });
})

app.get('/api/pictures', function (req, res) {
  var pictures = [
	{
	  user: {
			username: 'Oscar Monroy',
			avatar: 'w8.jpg'
		},
		url: 'office.jpg',
		likes: 10,
		liked: false,
		createdAt: new Date().getTime()
	  },
	{
	   user: {
			username: 'Oscar Monroy',
			avatar: 'w8.jpg'
		},
		url: 'office.jpg',
		likes: 1024,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 10)
	  },
	{
		user: {
			username: 'Oscar Monroy',
			avatar: 'w8.jpg'
		},
		url: 'office.jpg',
		likes: 104,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 3)
	}

	];

  setTimeout(function () {
    res.send(pictures);  
  }, 2000)
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})


// A continuación le indicamos que deberá de escuchar dentro del
// puerto 3000
app.listen(3000, function(err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})
