const path = require("path")
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path(__dirname, "src", "database", "database.db")
    },
    useNullAsDefault: true
  }
};
