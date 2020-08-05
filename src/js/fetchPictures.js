import axios from 'axios';
import toastr from 'toastr'; // import refs from './refs'
const apiKey = '17706866-5ae48c45c7414e927c4ef8aaa';
const url = 'https://pixabay.com/api/';
// const axios = require('axios');

let numberPage = 1;

 function fetchImages(searchQuery, numberPage) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${numberPage}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}
export default fetchImages