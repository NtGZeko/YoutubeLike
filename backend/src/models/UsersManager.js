const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  insert(users) {
    return this.connection.query(
      `insert into ${UsersManager.table} (mail, pseudo, password) values (?, ?, ?)`,
      [users.mail, users.pseudo, users.password]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${UsersManager.table} set mail, pseudo, password = ? where id = ?`,
      [users.mail, users.pseudo, users.password, users.id]
    );
  }
}

module.exports = UsersManager;
