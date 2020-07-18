"use strict";

module.exports = function (app) {
  var todoList = require("./controller");

  app.route("/").get(todoList.index);

  app.route("/mahasiswas").get(todoList.mahasiwas);

  app.route("/mahasiswas/:user_id").get(todoList.findMahasiswas);

  app.route("/mahasiswas").post(todoList.createMahasiswas);

  app.route("/mahasiswas:user_id").put(todoList.updateMahasiswa);

  app.route("/mahasiswas").delete(todoList.deleteMahasiwas);
};
