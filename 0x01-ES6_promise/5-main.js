import uploadPhoto from './5-photo-reject';

uploadPhoto('guillaume.jpg')
  .catch((error) => {
    console.log(error.message);
  });
