import { fetchImages, perPage } from './partials/js/fetchImages';
import { refs } from './partials/js/refs';
import {Notify} from 'notiflix';
import { createGalleryMarkup } from './partials/js/markup';

let pageNumber = 1;
let input = "";

refs.form.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick)

async function onSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  input = refs.form.elements.searchQuery.value.trim();
  refs.loadMoreBtn.style.display = "none";
  if (!input) {
    return
  }

  pageNumber = 1;

  try {
    const img = await fetchImages(input, pageNumber)
    if (img.data.total === 0) {
      Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    } else {
      createGalleryMarkup(img);
    }
    if (img.data.total > perPage) {
      pageNumber = 2;
      refs.loadMoreBtn.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMoreClick(event) {
  input = refs.form.elements.searchQuery.value.trim();

  try {
    const img = await fetchImages(input, pageNumber)
    const numberOfPage = Math.ceil(img.data.total / perPage);

    if (numberOfPage > pageNumber) {
      pageNumber += 1;
    } else if (numberOfPage >= pageNumber) {
      pageNumber = 1;
      Notify.failure("We're sorry, but you've reached the end of search results.");
      refs.loadMoreBtn.style.display = "none";
    }
    createGalleryMarkup(img);
  } catch (error) {
    console.log(error);
  }
}






