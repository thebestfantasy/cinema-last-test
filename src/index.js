import { upcomingMovieRequest } from "./fetch";
import { createUpcomingMarkup } from "./createUpcomingMarkup";

const upcomingBox = document.querySelector(".upcom-js-list");

upcomingMovieRequest()
    .then(data => {
        console.log(data.results[0]);
        if (data.length === 0 || data === undefined) {
            Notiflix.Notify.failure(
                "Sorry, something went wrong."
            );
            return;
        }

        upcomingBox.insertAdjacentHTML(
            'beforeend',
            createUpcomingMarkup(data.results[0])
        );
    });


