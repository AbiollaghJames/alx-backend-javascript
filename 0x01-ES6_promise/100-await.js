import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  try {
    const pic = await uploadPhoto();
    const usr = await createUser();
    result = { pic, usr };
  } catch(error) {
    result = { pic: null, usr: null };
  }
  return result;
}
