const AbstractManager = require("./AbstractManager");

class AdvencedChannelsManager extends AbstractManager {
  static table = "advencedChannels";

  findAll() {
    return this.connection.query(
      `SELECT con.video, con.channels_id, con.title, con.descvideo, cat.name, u.pseudo, channels.photo
      FROM contents AS con LEFT JOIN category AS cat ON cat.id=con.category_id
      INNER JOIN channels ON channels.id=con.channels_id 
      LEFT JOIN users_has_channels AS uhc ON uhc.channels_id=con.id
      LEFT JOIN users as u ON u.id=uhc.users_id;`
    );
  }
}

module.exports = AdvencedChannelsManager;
