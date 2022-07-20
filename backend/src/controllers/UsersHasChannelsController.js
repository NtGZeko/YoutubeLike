const models = require("../models");

class UsersHasChannelsController {
  static browse = (req, res) => {
    models.usersHasChannels
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

module.exports = UsersHasChannelsController;
