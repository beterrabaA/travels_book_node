const routes = {
  carla: function (data, res) {
    let payload = {
      name: "carla",
    };
    let strPayload = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.writeHead(strPayload);
    res.end("\n");
  },
  cartam: function (data, res) {
    let payload = {
      name: "cartam",
    };
    let strPayload = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.writeHead(strPayload);
    res.end("\n");
  },
  "kenny/is/mysterious": function (data, res) {
    let payload = {
      name: "Kenny",
      enemy: "The Cornman",
      today: +new Date()
    };
    let strPayload = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.writeHead(strPayload);
    res.end("\n");
  },
  notFound: function (data, res) {
    let payload = {
      message: "Route not found",
    };
    let strPayload = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(404);
    res.writeHead(strPayload);
    res.end("\n");
  }
};
