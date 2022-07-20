const AbstractManager = require("./AbstractManager");

class ContentsManager extends AbstractManager {
  static table = "contents";

  insert(contents) {
    return this.connection.query(
      `insert into ${ContentsManager.table} (video, title, descvideo) values (?, ?, ?,)`,
      [contents.video, contents.title, contents.descvideo]
    );
  }

  update(contents) {
    return this.connection.query(
      `update ${ContentsManager.table} set video, title, descvideo = ? where id = ?`,
      [contents.title, contents.id]
    );
  }
}

module.exports = ContentsManager;
