const { Appsignal } = require("@appsignal/nodejs");

exports.appsignal = new Appsignal({
  active: true,
  name: "YOUR APPLICATION NAME",
  pushApiKey: "YOUR API KEY"
});
