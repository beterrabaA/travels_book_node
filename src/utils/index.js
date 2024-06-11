const API_URL = "https://rickandmortyapi.com/graphql"

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

export const transformSlotsToSQL = (data) => {
  let string = ''
  data.forEach((_element, i) => {
    string += `$${i + 1}, `
  })

  string.slice(0, -2)

  return string
}

export async function requestRickAndMortyData(data) {
  const dataString = `{query: {locationsByIds(ids: [${data}]) {id name type dimension residents {episode {name}}}`

  const options = {
    method: "POST",
    body: dataString,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

  const response = await fetch(API_URL,options)
  const dataRick = await response.json()

  return dataRick

}

export const request_graphql = async (travelsIds) => {
}