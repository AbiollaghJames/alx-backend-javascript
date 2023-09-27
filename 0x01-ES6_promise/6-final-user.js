import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      res[[1]].value = `Error: ${res[1].reason.message}`;
      delete res[[1]].reason;
      return res;
    });
}
