export const cardList = document.querySelector("#cardList");

// TMDB API 서버 가져오기
async function Data() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg4YjMxYmMzZGM4NjcwNDM2ZmRhNGM5MzMzMTdiYyIsInN1YiI6IjY2MjliZTgyMGRlYTZlMDExZjc1ZGFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiKvL9sBXDA_vzsS1isbEXwfDgm0Fm0j7h-zxEwrYuw",
    },
  };

  // movies 정의
  // = fetch로 불러들인 정보 json으로 풀고, 그 중 원하는 값(results)을 Data로 변수 선언
  const getAPI = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const getAPIjson = await getAPI.json();
  const Data = getAPIjson.results;
  return Data;
}
let movies = await Data(); // data

// map, join, innerHTML
const movieData = movies.map(makeMovieCard);
export const movieCards = movieData.join("");
cardList.innerHTML = movieCards;

// map함수의 인자 makeMovieCard 정의
// = 원하는 영화카드 모양으로 템플릿 리터럴
function makeMovieCard(movie) {
  return `
    <li class="movieCard" id=${movie.id}>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
        alt="${movie.title}" 
        id="movieImage" />
      <h3 id="movieTitle">${movie.title}</h3>
      <p id="movieOverview">${movie.overview}</p>
      <p id="movieRating">평점: 9.1</p>
    </li>`;
}
