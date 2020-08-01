import axios from 'axios';
import toastr from 'toastr'; // import refs from './refs'
const apiKey = '17706866-5ae48c45c7414e927c4ef8aaa';
const url = 'https://pixabay.com/api/';
// const axios = require('axios');

let numberPage = 1;

function fetchPictures(searchQuery) {
  numberPage += 1;
  return axios
    .get(
      `${url}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${numberPage}&per_page=12&key=${apiKey}`,
    )
    .then(res => res)
    .catch(toastr.error('Not Found!!!'));
}

export default fetchPictures;
