export const getRequestData = (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });

      request.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      console.log(error);
    }
  });
};

export const sendResponse = (response, statusCode, data) => {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
};
