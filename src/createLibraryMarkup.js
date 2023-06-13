export function createLibraryMarkup(arr) {
  const { release_date, backdrop_path, genres, title } = arr;

  const genreNames = genres.slice(0, 2).map(id => id.name);
  return `<div class="library-container">
            <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path});">
                <div class="library-container-about">
                    <h3 class="library-movie-title">${title}</h3>     
                    <span class="library-genre-title">${genreNames}</span><span class="library-genre-title">${release_date}</span>   
                </div> 
            </div>
         </div>`;
}

{
  /* <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" class="library-img" />  */
}
{
  /* <div style="background-image: url(http://i54.tinypic.com/4zuxif.jpg)"></div> */
}

{
  /* <div class="library-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path}); object-fit: cover;"></div> */
}
