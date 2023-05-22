import { fetchImages } from './partials/js/fetchImages';
import { refs } from './partials/js/refs';
import {Notify} from 'notiflix';
import { createGalleryMarkup } from './partials/js/markup';

refs.form.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();

  const input = refs.form.elements.searchQuery.value.trim();

  fetchImages(input).then(img => {
    if (img.data.total === 0) {
      Notify.failure('ніч нема');
    }

    return createGalleryMarkup(img);
  })
}

function notifyIfError(images) {
  if (countriesArr.length >= 10) {

    Notify.failure('Забагато країночок знайдено');

  } else if (countriesArr.length > 1 && countriesArr.length < 10) {

    Notify.info('Слухай, це - майже те, що треба!');

    return createListMarkup(countriesArr);

  } else if (countriesArr.length === 1) {

    Notify.success('Ну кайфи ж, братанчик!');
    return createCardMarkup(countriesArr);
  }
}




