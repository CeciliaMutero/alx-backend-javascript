import divideFunction from './8-try';

try {
  console.log(divideFunction(10, 2));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(divideFunction(10, 0));
} catch (error) {
  console.error(error.message);
}