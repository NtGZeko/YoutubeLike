const AbstractManager = require("./AbstractManager");

class UsersHasChannelsManager extends AbstractManager {
  static table = "usersHasChannels";

  findAll() {
    return this.connection.query(
      `SELECT u.mail, u.pseudo, c.description FROM users_has_channels AS ush JOIN users AS u ON u.id=ush.users_id JOIN channels AS c ON c.id=ush.channels_id;`
    );
  }
}

module.exports = UsersHasChannelsManager;
