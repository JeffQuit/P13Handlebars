const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression')
const app = express();


const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');
app.use(compression())
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
	// Log (server-side) when our server has started
	console.log('Server listening on: http://localhost:' + PORT);
});
