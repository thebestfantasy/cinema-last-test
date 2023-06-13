import { upcomingMovieRequest } from './fetch';
import { createUpcomingMarkup } from './createUpcomingMarkup';
import { upcomingMovieGenreRequest } from './fetch';

const upcomingBox = document.querySelector('.upcom-js-list');

async function initUpcomingFetch() {
  try {
    let genres = {};
    const data = await upcomingMovieRequest();
    const genresData = await upcomingMovieGenreRequest();

    genresData.forEach(genre => {
      genres[genre.id] = genre.name;
    });

    const randomData = Math.random() * data.length; 

    upcomingBox.insertAdjacentHTML(
      'beforeend',
      createUpcomingMarkup(data.results[randomData], genres)
    );

    const button = document.querySelector('.upcom-btn');

    button.addEventListener('click', () => {
      const movId = button.dataset.movieId;
      localStorage.setItem('movieId', movId);
      console.log('Movie ID added to localStorage:', movId);
    });
  } catch (err) {
    console.log(err);
  }
}

initUpcomingFetch();

// upcomingMovieRequest()
//     .then(data => {
//         console.log(data.results[0]);
//         if (data.length === 0 || data === undefined) {
//             Notiflix.Notify.failure(
//                 "Sorry, something went wrong."
//             );
//             return;
//         }

//         upcomingBox.insertAdjacentHTML(
//             'beforeend',
//             createUpcomingMarkup(data.results[0])
//         );
//     });
