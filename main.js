const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjE5ODQ5NjMxYTRlMWZiYzVlMDIzYWUwMDc4ZDgzOSIsInN1YiI6IjY0NjdmNmIwMmJjZjY3MDEzODk0MzM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dyQbf0TAGw-xO-uOrPoWL_okGTOkcJlklzGraLB8-d8'
    }
};

window.onload = displayMovieData;

async function displayMovieData() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const data = await response.json();

        const movieContainer = document.getElementById('movieData'); // Filmlerin gösterileceği div elementi

        const movieCards = data.results.map((movie) => `
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview}</p>
                </div>
            </div>
        `);

        movieContainer.innerHTML = movieCards.join('');
    } catch (err) {
        console.error(err);
    }
}
