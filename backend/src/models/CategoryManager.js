const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  static table = "category";

  insert(category) {
    return this.connection.query(
      `insert into ${CategoryManager.table} (name) values (?)`,
      [category.name]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${CategoryManager.table} set name = ? where id = ?`,
      [category.name, category.id]
    );
  }
}

module.exports = CategoryManager;
