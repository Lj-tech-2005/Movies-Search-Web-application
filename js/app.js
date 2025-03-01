


const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const myinput = document.querySelector("#myinput")
const movies_Container = document.querySelector("#movies_Container");



async function getMovies(api) {

    const responce = await fetch(api)
    const data = await responce.json()
    showmovies(data.results)

    console.log(data.results)

}

getMovies(APIURL)


function showmovies(movie) {

    movies_Container.innerHTML = ""
    movie.forEach(
        (movie, index) => {
            const poster_path = IMGPATH + movie.poster_path;
            const divElem = document.createElement("div");
            divElem.classList.add("col-3");
            divElem.innerHTML = `<div> 
             <img src="${poster_path}" alt=""> 
             <div class="title">${movie.title}</div>
             <div class="details">

            <div>
              <span>Title:-</span>
              <span>${movie.title}</span>
             </div>
             
             <div>
              <span>Language:-</span>
              <span>${movie.original_language}</span>
             </div>
              <div>
              <span>Popularity:-</span>
              <span>${movie.popularity}</span>
             </div>
              <div>
              <span>Release_Date:-</span>
              <span>${movie.release_date}</span>
             </div>
              <div>
              <span>Vote_Average:-</span>
              <span>${movie.vote_average}</span>
             </div>
            
             
             </div>

             </div> `
            movies_Container.appendChild(divElem)

        }

    )


}


myinput.addEventListener(

    "keyup",
    (e) => {

        if (e.target.value == "") {

            getMovies(APIURL)
        } else {

            getMovies(SEARCHAPI + e.target.value)

        }



    }


)