import axios from 'axios';

const perPage = 40;
async function fetchImages(name, pageNumber) {
  const imagesPromise = axios.get(`https://pixabay.com/api/?key=36646585-26402b3ebc9d7faa9c1077b57&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=${perPage}`)
    .then(pic => pic)

  return await imagesPromise;
}

export {fetchImages, perPage}