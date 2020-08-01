import '../node_modules/toastr/build/toastr.css';
import './styles.scss';
import fetchPictures from './js/fetchPictures';
import refs from './js/refs';
import galleryItem from './templates/galleryItem.hbs';

refs.searchForm.addEventListener('submit', searchHandler);
refs.button.addEventListener('click', loadMore);

let numberPage = 1;
let searchQuery = '';

function searchHandler(event) {
  event.preventDefault();
  clearPage();

  const form = event.currentTarget;
  searchQuery = form.elements.query.value;

  fetchPictures(searchQuery, numberPage).then(({ hits }) => {
    if (hits.length !== 0) {
      markupRender(hits);
      refs.button.classList.remove('disabled');
    } else {
      refs.button.classList.add('disabled');
    }
  });
}

function clearPage() {
  refs.gallery.innerHTML = '';
  numberPage = 1;
}

function markupRender(elem) {
  const markup = galleryItem(elem);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function loadMore() {
  numberPage += 1;
  fetchPictures(searchQuery, numberPage).then(({ hits }) => markupRender(hits));
  window.scrollTo({
    top: 100,
    behavior: 'smooth',
  });
}
