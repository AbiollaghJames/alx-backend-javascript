const { uploadPhoto, createUser } = require('./utils.js');
export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then(([body, firstName, lastName]) => {
      return { body, firstName, lastName }  ;
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
