// Author Name : Het Pandya
// Student Id : C0892917

document.addEventListener("DOMContentLoaded", function () {

  isLoggedIn();

  
  const id = localStorage.getItem("movieId");
  const movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=1491aa4180d9309a4964a1da139035b1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 1491aa4180d9309a4964a1da139035b1",
    },
  };
  // Populate movie details
  const movieDetailsContainer = document.querySelector(".movie_container");

  fetch(movie_url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(movieDetailsCard(data));
      movieDetailsContainer.innerHTML = movieDetailsCard(data);
    });
});

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
}

function movieDetailsCard(data) {
  const movieDetailsContainer = document.createElement("div");
  movieDetailsContainer.classList.add("movie-details");

  const imagePath = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "https://via.placeholder.com/150";

  console.log(data);
  const movieDetails = `
        
    
        <div class="movie-details-container" >
            <div class="row">
                <!-- Movie Poster -->
                <div class="col-md-4">
                    <img src="${imagePath}" alt="${
    data.title
  }" class="img-fluid">
                    <div class="play-icon">
                      <span>&#9658;</span>
                    </div>
                </div>
                
                <!-- Movie Information -->

                <div class="col-md-8">
                    <h1 class="mb-3">${data.title}</h1>
                    <p><strong>Release Year : </strong>${data.release_date}</p>
                    <p><strong>Genre : </strong>${data.genres.map(
                      (res) => ` ${res.name} `
                    )}  
                    </p>
                    <p><strong>Duration : </strong>${data.runtime}</p
                    <p><strong>Rating : <i class="fas fa-star"></i></strong> ${data.vote_average.toFixed(
                      1
                    )}/10</p>
                    <p><strong>Description : </strong>${data.overview}</p>
                    <br>
                    <br>
                    <br>
                    <button class="watchtrailer"><i class="fa fa-play"></i> Watch Trailer</button>
                    <button class="watchlist"> Add to WatchList</button>
                </div>
            <div>
        </div>

        
    `;
  return movieDetails;
}

function toggleMenu() {
  var mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}


function isLoggedIn() {
  if (localStorage.getItem("users")) {
   $(document).find('#watchlist-menu').show();
   $(document).find('#login-btn').hide();
  } else {
    $(document).find('#watchlist-menu').hide();
    $(document).find('#login-btn').show();
  }
}
