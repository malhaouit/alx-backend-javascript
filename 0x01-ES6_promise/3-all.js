import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const profile = results[0];
      const user = results[1];
      console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
