const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("./public/db.json")
const middlewares = jsonServer.defaults({
  static: "./build",
})

server.use(router)
server.use(middlewares)
