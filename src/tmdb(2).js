const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg4YjMxYmMzZGM4NjcwNDM2ZmRhNGM5MzMzMTdiYyIsInN1YiI6IjY2MjliZTgyMGRlYTZlMDExZjc1ZGFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiKvL9sBXDA_vzsS1isbEXwfDgm0Fm0j7h-zxEwrYuw'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// async, await

// async function mario () {
//     const mario1 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     const mario2 = await mario1.json()
//     const mario3 = mario2.results
//     const mario4 = mario3.forEach(element => {
//         console.log(element['title'])
//         console.log(element['rating'])
//     });
//     console.log(mario3)
// }

// mario()

async function mario () {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg4YjMxYmMzZGM4NjcwNDM2ZmRhNGM5MzMzMTdiYyIsInN1YiI6IjY2MjliZTgyMGRlYTZlMDExZjc1ZGFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiKvL9sBXDA_vzsS1isbEXwfDgm0Fm0j7h-zxEwrYuw'
    }
  };

    const mario1 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const mario2 = await mario1.json()
    const mario3 = mario2.results
    console.log(mario3)
    // const mario4 = mario3.forEach(element => {
    //     console.log(element.title, element.overview)
    //     // console.log(element['rating'])
    // });
    // console.log(mario4)
}

// mario()




// 가져와야 할 데이터: Id, overview, poster_path, title, vote_average
