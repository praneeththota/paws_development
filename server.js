// loading dependencies
var Koa = require('koa');
var bodyparser = require('koa-bodyparser');
var ip = require("ip");

// loading required files
const BasicRoutes = require('./routes');

// basic setup with default port
const app = new Koa();
app.use(bodyparser());
app.use(BasicRoutes.routes())
var PORT = 8080;
const server = app.listen(PORT, () =>{
  console.log(`server running on port: http://${ip.address()}:${PORT}`)
})
module.exports = server;