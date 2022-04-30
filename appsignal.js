const { Appsignal } = require("@appsignal/nodejs");

exports.appsignal = new Appsignal({
  active: true,
  name: "node-doc",
  pushApiKey: "..."
});
