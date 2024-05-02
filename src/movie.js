export const cardList = document.querySelector("#card-list");
// export : ~~을 수출한다(=밖으로 내보내도록 승인한다)
// const cardList : ~~을 cardList라는 변수로 선언한다
// document : 전체 웹페이지
// querySelector : CSS선택자(=Selector) 통해서 특정 요소(=괄호 안에 있는 요소)를 선택한다
// "#card-list" : card-list라는 id를 가진 요소
// ==> html 전체에서, CSS선택자를 통해 선택한, id "card-list"를, cardlist 라고 변수를 선언하고, 이 변수를 외부로 보내도록 승인함

cardList.innerHTML = moives
// cardList : html 전체 문서의 id "card-list"를 말함
// innerHTML : ~을 html 문서에 삽입하겠다
// moives : 아래 map함수의 결과값을 담을 그릇
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