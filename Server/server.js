const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const creds = require("./dbpasswords.json");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  user: creds.user,
  host: creds.host,
  password: creds.password,
  database: creds.database,
});

app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const passWord = req.body.passWord;

  db.query(
    `SELECT * FROM users WHERE username = '${userName}' AND password = '${passWord}'`,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "You don't have an account bitch!" });
      }
    }
  );
});
app.listen(3001, () => {
  console.log("Server is listening on Port 3001");
});

app.post("/register", (req, res) => {
  const userName = req.body.userName;
  const passWord = req.body.passWord;

  db.query(
    `INSERT INTO users (username, password) VALUES ('${userName}', '${passWord}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
