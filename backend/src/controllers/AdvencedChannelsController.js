const models = require("../models");

class AdvencedChannelsController {
  static browse = (req, res) => {
    models.advencedChannels
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = AdvencedChannelsController;
