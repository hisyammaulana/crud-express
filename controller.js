"use strict";

var response = require("./res");
var con = require("./connection");

exports.mahasiwas = function (req, res) {
  con.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.findMahasiswas = function (req, res) {
  var user_id = req.params.user_id;

  con.query("SELECT * FROM mahasiswa where id = ?", [user_id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.createMahasiswas = function (req, res) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var age = req.body.age;

  con.query(
    "INSERT INTO mahasiswa (first_name, last_name, age) values (?,?,?)",
    [first_name, last_name, age],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan mahasiwa!", res);
      }
    }
  );
};

exports.updateMahasiswa = function (req, res) {
  var user_id = req.body.user_id;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var age = req.body.age;

  con.query(
    "UPDATE mahasiswa SET first_name = ?, last_name = ?, age = ? WHERE id = ?",
    [first_name, last_name, user_id, age],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil merubah mahasiswa!", res);
      }
    }
  );
};

exports.deleteMahasiwas = function (req, res) {
  var user_id = req.body.user_id;

  con.query("DELETE FROM mahasiswa WHERE id = ?", [user_id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil menghapus mahasiswa!", res);
    }
  });
};

exports.index = function (req, res) {
  var data = {
    name: "Simple Crud With Express JS",
    version: "1.0",
  };
  res.json(data);
  res.end();
};
