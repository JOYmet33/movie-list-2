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


    // cardList.addEventListener("click", handleClickCard);

    function handleClickCard ( 타겟 ) {
        // 1. 카드 외 영역 클릭 시 - return (함수 적용x)
        // 2. 카드 클릭 시 - id 알림창
        // 3. 카드 안 요소(=자식 =img, h3, p) 클릭 시 - 카드(=부모) id 알림창
    }