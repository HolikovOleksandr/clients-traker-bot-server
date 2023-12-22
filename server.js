import app from "./app.js";

async function start() {
  const port = process.env.PORT || 3400;

  app.listen(port, () => {
    console.log("Server was runninng on port", port);
  });
}

start();
