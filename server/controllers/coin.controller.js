const Coin = require("../models/coin.model");
const User = require("../models/user.model");

module.exports = {
  findAllCoins: (req, res) => {
    Coin.find({})
      .then((allCoins) => {
        console.log(allCoins);
        res.json(allCoins);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  addCoin: (req, res) => {
    // when we add a coin, we need to make add the user id to the object before feeding object to mongoose create()
    // !!! we add user_id to req in middleware authenticate fn
    Coin.create(req.body)
      .then((newCoin) => {
        console.log(newCoin);
        res.json(newCoin);
      })
      .catch((err) => {
        console.log(err);
        console.log("addCoin has failed!");
        res.status(400).json(err);
      });
  },
  findOneCoin: (req, res) => {
    Coin.findOne({ _id: req.params.id })
      .then((oneCoin) => {
        console.log(oneCoin);
        res.json(oneCoin);
      })
      .catch((err) => {
        console.log(err);
        console.log("findOneCoin has failed!");
        res.status(400).json(err);
      });
  },
  deleteOneCoin: (req, res) => {
    Coin.deleteOne({ _id: req.params.id })
      .then((oneCoin) => {
        console.log(oneCoin);
        res.json(oneCoin);
      })
      .catch((err) => {
        console.log(err);
        console.log("deleteOneCoin has failed!");
        res.status(400).json(err);
      });
  },
  updateExistingCoin: (req, res) => {
    Coin.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedCoin) => {
        console.log(updatedCoin);
        res.json(updatedCoin);
      })
      .catch((err) => {
        console.log(err);
        console.log("updateOneCoin has failed!");
        res.status(400).json(err);
      });
  },
};
