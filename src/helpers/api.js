const sendHttpRequest = async (method, url, data) => {
  return fetch(url, { method: method, body: data })
    .then(response => {
      if (!response.status >= 200 && !response.status < 300) {
        return response.json().then(error => {
          throw new Error('Something went wrong - server-side!');
        });
      }

      return response.json();
    })
    .catch(error => {
      throw new Error(error);
    });
};

export default sendHttpRequest;
