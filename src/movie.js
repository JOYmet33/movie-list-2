export const cardList = document.querySelector("#card-list");

cardList.innerHTML = moives
    .map(
        (movie) => `
        <li class="movie-card" id=${movie.id}>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
            <h3 class="movie-title">${movie.title}</h3>
            <p>${movie.overview}</p>
        <p>평점: 9.1</p>
        </li>`
    )

    .join("");
