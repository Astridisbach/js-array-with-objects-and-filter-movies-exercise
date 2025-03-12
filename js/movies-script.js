"use strict"; //Aktiverer strict-mode og gør det muligt for dokumentet at finde fejl 

//Opbygger et array med javascript objekter indeholdene forskellige film
const movies = [

    {title:"Forrest Gump", genre:"drama", year:1994, duration:2.22, img:"/img/forrest-gump.webp", url:"https://www.imdb.com/title/tt0109830/?ref_=fn_all_ttl_1"},
    {title:"Gladiator", genre:"action", year:2000, duration:2.35, img:"/img/gladiator.webp", url:"https://www.imdb.com/title/tt0172495/?ref_=fn_all_ttl_1"},
    {title:"Inception", genre:"science-fiction", year:2010, duration:2.28, img:"/img/inception.webp", url:"https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0_tt_3_nm_5_in_0_q_ince"},
    {title:"Interstellar", genre:"science-fiction", year:2014, duration:2.49, img:"/img/interstellar.webp", url:"https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_interst"},
    {title:"IT", genre:"horror", year:1990, duration:1.36, img:"/img/it.webp", url:"https://www.imdb.com/title/tt1396484/?ref_=fn_all_ttl_1"},
    {title:"Pulp Fiction", genre:"drama", year:1994, duration:2.34, img:"/img/pulp-fiction.webp", url:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_pulp"},
    {title:"Superbad", genre:"comedy", year:2007, duration:1.53, img:"/img/superbad.webp", url:"https://www.imdb.com/title/tt0829482/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_superbad"},
    {title:"The Conjuring", genre:"horror", year:2013, duration:1.52, img:"/img/the-conjuring.webp", url:"https://www.imdb.com/title/tt1457767/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520conju"},
    {title:"The Dark Knight", genre:"action", year:2008, duration:2.32, img:"/img/the-dark-knight.webp", url:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520dark"},
    {title:"The Godfather", genre:"drama", year:1097, duration:2.52, img:"/img/the-godfather.webp", url:"https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_the%2520godfa"},
    {title:"The Hangover", genre:"comedy", year:2009, duration:1.40, img:"/img/the-hangover.webp", url:"https://www.imdb.com/title/tt1119646/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520hangover"},
    {title:"The Matrix", genre:"science-fiction", year:1999, duration:2.16, img:"/img/the-matrix.webp", url:"https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_4_tt_7_nm_0_in_0_q_the%2520ma"}
    
];

//Henter HTML elementer "movies-container" & "category-select" via getElementById
const moviesContainer = document.getElementById("movies-container");
const selectedCategory = document.getElementById("category-select");

function displayMovies(filmListe) {
    moviesContainer.innerHTML = ""; //Tømmer container for at undgå dublikering

    filmListe.forEach( (movie) => {
        const movieElement = document.createElement("article"); //Javascript element der opretter et HTML element "article"
        movieElement.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
        <p>Årstal: ${movie.year}</p>
        <p>Varighed: ${movie.duration}</p> 
        <figure>
            <a href="${movie.url}" target="_blank"
            <img src="${movie.img}" alt="${movie.title}"> 
            </a>
        </figure>`;
    })
}

displayMovies (movies);

selectedCategory.addEventListener("change", () => {
    //Henter 
    const selectedValue = selectedCategory.ariaValueMax;

    let filteredMovies;

    if(selectedValue === "all"){
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter(movie => movie.genre === selectedValue);
    }

    displayMovies(filteredMovies);
    
})