import http, { IncomingMessage, Server, ServerResponse } from 'http'
import config from './config';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {

    if (req.url == '/' && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Hello Node js raw  server",
                path: req.url
            })
        )
    }

    if (req.url == '/api' && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Api req Successfully response",
                path: req.url
            })
        )
    }
    if (req.url == '/api/post' && req.method == "POST") {
        res.writeHead(200, { "content-type": "application/json" });
        let body = '';
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const parseBody = JSON.parse(body);
                
                res.end(JSON.stringify(parseBody))
            } catch (error: any) {
                console.error(error.message)
            }
        })


    }
})

server.listen(config.port, () => {
    console.log(`Server is Running on Port ${config.port}`)
})