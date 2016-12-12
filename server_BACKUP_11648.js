var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var api = require('./routes/api');
var notFound = require('./routes/notfound');

var port = 4444;
<<<<<<< HEAD

=======
>>>>>>> 68f67e944291224fe5027d550cbf03dcd350b0dd

var app = express();


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/operator', index);
app.use('/operator/*', index);
app.use('/api', api);
app.use('/*', notFound);


app.listen(port, function(){
    console.log('Server started on port '+port);
});
