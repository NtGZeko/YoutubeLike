const models = require("../models");

class ChannelsAndContentsController {
  static browse = (req, res) => {
    models.channelsAndContents
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

module.exports = ChannelsAndContentsController;
