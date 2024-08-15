import getFullResponseFromAPI from './1-promise';

getFullResponseFromAPI(true)
  .then((response) => console.log(response))
  .catch((error) => {
    console.error('Error occurred:', error.message); // Only log the error message
  });

getFullResponseFromAPI(false)
  .then((response) => console.log(response))
  .catch((error) => {
    console.error('Error occurred:', error.message); // Only log the error message
  });
