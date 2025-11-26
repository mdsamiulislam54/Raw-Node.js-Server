import http, { IncomingMessage, Server, ServerResponse } from 'http'
import config from './config';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running", req.url);
    if (req.url == '/' && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Hello Node js raw  server",
                path: req.url
            })
        )
    }
})

server.listen(config.port, ()=>{
    console.log(`Server is Running on Port ${config.port}`)
})