import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const func1 = signUpUser(firstName, lastName);
  const func2 = uploadPhoto(fileName);

  return Promise.allSettled([ func1, func2 ])
    .then((data) => {
      data[1].value = `Error: ${data[1].reason.message}`;
      delete data[1].reason;
      return data;
    });
}
