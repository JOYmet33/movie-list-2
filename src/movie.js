export const cardList = document.querySelector("#cardList");

async function mario() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg4YjMxYmMzZGM4NjcwNDM2ZmRhNGM5MzMzMTdiYyIsInN1YiI6IjY2MjliZTgyMGRlYTZlMDExZjc1ZGFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiKvL9sBXDA_vzsS1isbEXwfDgm0Fm0j7h-zxEwrYuw'
      }
    };
      const mario1 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const mario2 = await mario1.json()
      const data = mario2.results
      return data;
  }

let movies = await mario() // data

//===============================

const movieData = movies.map(fillMovieData);
export const movieCards = movieData.join("");

cardList.innerHTML = movieCards;

function fillMovieData(movie) {
    return `
    <li class="movieCard" id=${movie.id}>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
        <h3 class="movieTitle">${movie.title}</h3>
        <p>${movie.overview}</p>
    <p>평점: 9.1</p>
    </li>`
}