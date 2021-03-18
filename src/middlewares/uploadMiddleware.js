import { storage } from 'src/firebase';

import {
  HANDLE_FIREBASE_UPLOAD,
  userSignup,
} from 'src/actions/signupActions';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case HANDLE_FIREBASE_UPLOAD: {
      const {
        pictureFile,
      } = store.getState().signup;

      // If the user did not choose a profile picture, I set a default avatar
      if (!pictureFile) {
        const defaultAvatar = 'https://firebasestorage.googleapis.com/v0/b/c-estlebouquet.appspot.com/o/sellers%2Fdefault-avatar.jpg?alt=media&token=f3ad35ec-1f35-4b17-97c8-b892bb737e9f';

        const actionToDispatch = userSignup(defaultAvatar);
        store.dispatch(actionToDispatch);
      }
      else {
        const uploadImage = storage.ref(`sellers/${pictureFile.name}`).put(pictureFile);

        uploadImage.on('state_changed',
          (snapshot) => { },
          (error) => {
            console.log(error);
          }, () => {
            storage
              .ref('sellers')
              .child(pictureFile.name)
              .getDownloadURL()
              .then((url) => {
                const actionToDispatch = userSignup(url);
                store.dispatch(actionToDispatch);
              });
          });
      }

      break;
    }
    default:
      return next(action);
  }
  return null;
};
