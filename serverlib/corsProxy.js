// so basicaly 
// https://ghost_link/api/cp/v1/q=?

async function dumpPage(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        let d = '';
        response.on('data', (chunk) => {
          d += chunk;
        });
        response.on('end', () => {
          resolve(d);
        });
        response.on('error', (e) => {
          reject(`Something went wrong when fetching the thing: ${e.message}`);
        });
      });
    });
  }

export default dumpPage