export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg4YjMxYmMzZGM4NjcwNDM2ZmRhNGM5MzMzMTdiYyIsInN1YiI6IjY2MjliZTgyMGRlYTZlMDExZjc1ZGFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiKvL9sBXDA_vzsS1isbEXwfDgm0Fm0j7h-zxEwrYuw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));