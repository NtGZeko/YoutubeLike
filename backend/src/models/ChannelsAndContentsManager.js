const AbstractManager = require("./AbstractManager");

class ChannelsAndContentsManager extends AbstractManager {
  static table = "channelsAndContents";

  findAll() {
    return this.connection.query(
      `SELECT * FROM contents AS con LEFT JOIN channels AS cha ON cha.id=con.channels_id;`
    );
  }
}

module.exports = ChannelsAndContentsManager;
