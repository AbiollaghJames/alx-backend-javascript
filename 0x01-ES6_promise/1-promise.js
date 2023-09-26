export default function getFullResponseFromAPI(success) {

  return new Promise((resolve, reject) => {
    if (success === true) {
      const data = { status:200, body:'Success' }
      resolve(data);
    } else {
      reject('The fake API is not working currently');
    }
  });
}
