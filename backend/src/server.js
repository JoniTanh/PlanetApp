const http = require("http");
const app = require("./app");
const config = require("./utils/config");
const { mongoConnect } = require("./utils/mongo");
const { loadPlanetsData } = require("./models/planets");

const PORT = config.PORT || 3001;
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
