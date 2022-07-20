const AbstractManager = require("./AbstractManager");

class ChannelsManager extends AbstractManager {
  static table = "channels";

  insert(channels) {
    return this.connection.query(
      `insert into ${ChannelsManager.table} (description, photo, banner) values (?)`,
      [channels.description]
    );
  }

  update(channels) {
    return this.connection.query(
      `update ${ChannelsManager.table} set description, photo, banner  = ? where id = ?`,
      [channels.description, channels.photo, channels.banner, channels.id]
    );
  }
}

module.exports = ChannelsManager;
