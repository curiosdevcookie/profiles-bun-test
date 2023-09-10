const server = Bun.serve({
  port: 9000,
  fetch(req) {
    return new Response(`Bun!`);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
console.log("Hello via bun 🙂");
