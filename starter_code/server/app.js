
// Enviroment variables
require('dotenv').config()

// Database connection
require('./configs/moongose.config')

// Application instance
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)


// Base URLS
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/', require('./routes/index.routes'))


module.exports = app







// require('dotenv').config();

// const bodyParser   = require('body-parser');
// const cookieParser = require('cookie-parser');
// const express      = require('express');
// const favicon      = require('serve-favicon');
// const hbs          = require('hbs');
// const mongoose     = require('mongoose');
// const logger       = require('morgan');
// const path         = require('path');

// const session    = require("express-session");
// const MongoStore = require('connect-mongo')(session);
// const flash      = require("connect-flash");


// const app_name = require('./package.json').name;
// const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// const app = express();



// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// hbs.registerHelper('ifUndefined', (value, options) => {
//   if (arguments.length < 2)
//       throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
//   if (typeof value !== undefined ) {
//       return options.inverse(this);
//   } else {
//       return options.fn(this);
//   }
// });


// // default value for title local
// app.locals.title = 'Express - Generated with IronGenerator';


// // Enable authentication using session + passport
// app.use(session({
//   secret: 'irongenerator',
//   resave: true,
//   saveUninitialized: true,
//   store: new MongoStore( { mongooseConnection: mongoose.connection })
// }))
// app.use(flash());
// require('./passport')(app);


// const index = require('./routes/index');
// app.use('/', index);

// const authRoutes = require('./routes/auth');
// app.use('/auth', authRoutes);


// module.exports = app;