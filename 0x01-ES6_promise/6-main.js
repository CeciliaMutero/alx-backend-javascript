import handleProfileSignup from './6-final-user';

handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg')
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
