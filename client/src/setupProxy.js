const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy(["/send_email"], { target: "http://localhost:5000" }));
};

// reset server every time you change something in the proxy
