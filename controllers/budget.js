const mysql = require("mysql2");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const listBudgetItems = (req, res) => {
  pool.query("SELECT * FROM budget", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const listBudgetItemsByUser = (req, res) => {
  let userId = req.userToken.id; // check .id
  let sql = "SELECT * FROM budget WHERE userId = ?";

  sql = mysql.format(sql, [userId]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const updateSalary = (req, res) => {
  let sql = "UPDATE budget SET salary = ?";
  sql = mysql.format(sql, [req.body.salary]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

module.exports = {
  listBudgetItems,
  updateSalary,
  listBudgetItemsByUser,
};
