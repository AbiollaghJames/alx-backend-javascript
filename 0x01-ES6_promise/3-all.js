const { uploadPhoto, createUser } = require('./utils.js');
export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then(([body, user]) => {
      console.log(`body: ${photo.body} firstName: ${user.firstName} lastName: ${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
