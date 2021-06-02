export default function ({ getters }, PAYLOAD) {
  let xhr = new XMLHttpRequest();
  let promise = new Promise((resolve, reject) => {
    xhr.open(
      PAYLOAD.method,
      getters[PAYLOAD.url["module"] + "/endpoints"](PAYLOAD.url)
    );
    PAYLOAD.headers.map((header) => {
      xhr.setRequestHeader(header.name, header.value);
    });

    xhr.onload = () => {
      resolve(xhr);
    };

    xhr.onerror = () => {
      reject(xhr);
    };
    xhr.send(JSON.stringify(PAYLOAD.body));
  });
  return promise;
}
