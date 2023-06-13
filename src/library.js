// import throttle from 'lodash.throttle';
import { libraryRequest } from './fetch';
import { createLibraryMarkup } from './createLibraryMarkup';
import { upcomingMovieGenreRequest } from './fetch';

const libraryBox = document.querySelector('.library-js-list');
const id = localStorage.getItem('movieId');

async function initLibraryFetch() {
  try {
    // let genres = {};
    const data = await libraryRequest(id);
    // const genresData = await upcomingMovieGenreRequest();

    // genresData.forEach(genre => {
    //   genres[genre.id] = genre.name;
    // });

    console.log(data);
    // libraryBox.insertAdjacentHTML('beforeend', createLibraryMarkup(data));
  } catch (err) {
    console.log(err);
  }
}

initLibraryFetch();
