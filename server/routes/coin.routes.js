const CoinController = require('../controllers/coin.controller');

module.exports = (app) => {
    app.get('/api/coins',CoinController.findAllCoins);
    app.post('/api/coins/create',CoinController.addCoin);
    app.get('/api/coins/:id',CoinController.findOneCoin);
    app.delete('/api/coins/:id',CoinController.deleteOneCoin);
    app.put('/api/coins/:id/edit',CoinController.updateExistingCoin);
}