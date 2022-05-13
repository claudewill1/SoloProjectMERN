const CoinController = require("../controllers/coin.controller");
const { authenticate } = require("../middleware/authJwt");
module.exports = (app) => {
  app.get("/api/coins", CoinController.findAllCoins);
  //   proper rest routes - do not need anything after /coins
  app.post("/api/coins", authenticate, CoinController.addCoin);
  app.get("/api/coins/:id", CoinController.findOneCoin);
  app.delete("/api/coins/:id", CoinController.deleteOneCoin);
  app.put("/api/coins/:id/edit", CoinController.updateExistingCoin);
};
