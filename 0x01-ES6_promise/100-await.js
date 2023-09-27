import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((res) => {
      const resultObj = {};
      if (res[0].status === 'fulfilled' && res[1].status === 'fulfilled') {
        resultObj.photo = res[0].value;
        resultObj.user = res[1].value;
      } else {
        resultObj.photo = null;
        resultObj.user = null;
      }
      return resultObj;
    });
}
