import http from "node:http"

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === "GET" && url === "/users") {

    const result = JSON.stringify(users)

    console.log(result)

    return res
    .setHeaders('Content-type','application/json')
    .end(result)
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Jhon Doe",
      email: "jhondoe@example.com"
    })

    return res.end("Cadastrar usuário")
  }

  return res.writeHead(404).end("Not found")
})

server.listen(3333)
