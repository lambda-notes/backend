// Import dependencies and general middleware
const express = require('express');
const configureMiddleware = require('./middleware.js');
const server = express();

// passport auth
const passport = require('passport');
require('../auth/passport/passportConfig')(passport);

const authRoutes = require('./routes/AuthRoutes');

// Pass server through middleware file
configureMiddleware(server);

// Custom restricted middleware import
const restricted = require('../auth/restricted.js');

// Import various split API routes
const usersRouter = require('../users/usersRouter.js');
const notesRouter = require('../notes/notesRouter.js');
const lessonsRouter = require('../lessons/lessonsRouter.js');
const videosRouter = require('../videos/videosRouter.js');
const trackRouter = require('../track/trackRouter.js');
const cohortsRouter = require('../cohorts/cohortsRouter.js');
const authRouter = require('../auth/authRouter.js');

// Router assignments
server.use('/api/restricted/users', usersRouter);
server.use('/api/restricted/notes', notesRouter);
server.use('/api/restricted/lessons', lessonsRouter);
server.use('/api/restricted/videos', videosRouter);
server.use('/api/restricted/tracks', trackRouter);
server.use('/api/restricted/cohorts', cohortsRouter);

// Generic / route for initial server online status check
const projectName = process.env.PROJECT_NAME || 'test';
server.get('/', (req, res) => {
  res.send(`The ${projectName} server is up and running! 🔥🔥🔥`);
});

server.use('/auth', authRoutes);

// Server export to be used in index.js
module.exports = server;
