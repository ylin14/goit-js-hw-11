import { refs } from './refs';

function createGalleryMarkup (articles) {
  const galleryMarkup = articles.data.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<div className="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div className="info">
        <p className="info-item">
          <b>${likes} Likes</b>
        </p>
        <p className="info-item">
          <b>${views} Views</b>
        </p>
        <p className="info-item">
          <b>${comments} Comments</b>
        </p>
        <p className="info-item">
          <b>${downloads} Downloads</b>
        </p>
      </div>
    </div>`
  }).join('');
  updateMarkup(galleryMarkup)

}

function updateMarkup(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export {createGalleryMarkup, updateMarkup};