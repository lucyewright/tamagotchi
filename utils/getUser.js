import { token } from '../token';

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with request! ${response.status}`);
    return;
  }
  return response.json();
};
