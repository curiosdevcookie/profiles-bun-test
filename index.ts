import serveStatic from "serve-static-bun";
import Bao from "baojs";

const app = new Bao();

app.get(
  "/public/*any",
  serveStatic("public", { middlewareMode: "bao", stripFromPathname: "/public" })
);

app.get("/", (ctx) => ctx.sendText("Hello Bao!"));

const port = 3000;
app.listen({ port: port });

console.log(`Listening on http://localhost:${port} ...`);
console.log("Hello via bun 🙂");
