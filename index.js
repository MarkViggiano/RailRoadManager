const express = require("express");
const app = express();
const ejs = require("ejs")
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
const config = require("./config.json");

//utils
const DatabaseManager = require("./utils/DatabaseManager");
const SessionManager = require("./utils/SessionManager");
const LayoutManager = require("./utils/layout/LayoutManager");
const dbManager = new DatabaseManager(config.username, config.password, config.host, config.database);
const sessionManager = new SessionManager(dbManager);
const layoutManager = new LayoutManager(dbManager);

//routes
const SessionsRoute = require("./routes/Sessions");
const LayoutsRoute = require("./routes/Layouts");

app.enable('verbose errors');
require('events').EventEmitter.defaultMaxListeners = 0;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/sessions", new SessionsRoute(dbManager, sessionManager).router);
app.use("/layouts", new LayoutsRoute(dbManager, layoutManager).router);

app.listen(port, () => {
  console.log(`RRM is listening on port: ${port}`);
})
