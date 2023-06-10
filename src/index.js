import { upcomingMovieRequest } from "./fetch";
import { createUpcomingMarkup } from "./createUpcomingMarkup";
import { upcomingMovieGenreRequest } from "./fetch";

const upcomingBox = document.querySelector(".upcom-js-list");

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

async function init() {
  try {
    let genres = {};
    const data = await upcomingMovieRequest();
    const genresData = await upcomingMovieGenreRequest();
      
    genresData.forEach((genre) => {
      genres[genre.id] = genre.name;
    });

    upcomingBox.insertAdjacentHTML(
      "beforeend",
      createUpcomingMarkup(data.results[0], genres)
    );
  } catch (err) {
    console.log(err);
  }
}

init();

