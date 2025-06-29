document.addEventListener('DOMContentLoaded', function () {
    const addMovieForm = document.getElementById('add-movie-form');
    const moviesGrid = document.getElementById('admin-movies-grid');

    // Load movies for admin
    function loadMoviesForAdmin() {
        moviesGrid.innerHTML = '';
        const movies = getAllMovies();

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'admin-movie-card';
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="admin-movie-poster">
                <div class="admin-movie-info">
                    <h3>${movie.title} (${movie.year})</h3>
                    <div class="admin-movie-actions">
                        <button class="btn btn-edit" data-id="${movie.id}">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-delete" data-id="${movie.id}">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `;

            moviesGrid.appendChild(movieCard);
        });

        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', function () {
                const movieId = parseInt(this.getAttribute('data-id'));
                editMovie(movieId);
            });
        });

        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function () {
                const movieId = parseInt(this.getAttribute('data-id'));
                deleteMovie(movieId);
            });
        });
    }

    // Add new movie
    addMovieForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const newMovie = {
            id: movies.length + 1,
            title: document.getElementById('title').value,
            year: document.getElementById('year').value,
            rating: parseFloat(document.getElementById('rating').value),
            genre: document.getElementById('genre').value.split(',').map(g => g.trim()),
            director: document.getElementById('director').value,
            runtime: document.getElementById('runtime').value,
            description: document.getElementById('description').value,
            poster: document.getElementById('poster').value,
            backdrop: document.getElementById('backdrop').value,
            cast: document.getElementById('cast').value.split(',').map(c => c.trim()),
            trailer: document.getElementById('trailer').value
        };

        // Add to movies array (in a real app, this would be an API call)
        movies.push(newMovie);

        // Reset form
        addMovieForm.reset();

        // Reload movies
        loadMoviesForAdmin();

        alert('Movie added successfully!');
    });

    // Edit movie (placeholder - in a real app, this would open an edit form)
    function editMovie(movieId) {
        const movie = getMovieById(movieId);
        if (movie) {
            // In a real app, you would populate a form with the movie data
            // For this example, we'll just show an alert
            alert(`Editing movie: ${movie.title}`);
        }
    }

    // Delete movie
    function deleteMovie(movieId) {
        if (confirm('Are you sure you want to delete this movie?')) {
            // In a real app, this would be an API call
            const index = movies.findIndex(m => m.id === movieId);
            if (index !== -1) {
                movies.splice(index, 1);
                loadMoviesForAdmin();
                alert('Movie deleted successfully!');
            }
        }
    }

    // Initialize
    loadMoviesForAdmin();

    // In admin.js
    function loadMoviesForAdmin() {
        let movies = JSON.parse(localStorage.getItem('movies')) || window.movies;
        const container = document.getElementById('admin-movies-grid');
        container.innerHTML = '';

        movies.forEach(movie => {
            container.innerHTML += `
      <div class="admin-movie-card">
        <img src="${movie.poster}" class="admin-movie-poster">
        <div class="admin-movie-info">
          <h3>${movie.title} (${movie.year})</h3>
          <div class="admin-movie-actions">
            <button class="btn btn-edit" data-id="${movie.id}">
              <i class="fas fa-edit"></i> Edit
            </button>
            <button class="btn btn-delete" data-id="${movie.id}">
              <i class="fas fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    `;
        });

        // Add event listeners
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function () {
                const movieId = parseInt(this.getAttribute('data-id'));
                deleteMovie(movieId);
            });
        });
    }

    function deleteMovie(movieId) {
        let movies = JSON.parse(localStorage.getItem('movies')) || window.movies;
        movies = movies.filter(movie => movie.id !== movieId);
        localStorage.setItem('movies', JSON.stringify(movies));
        loadMoviesForAdmin();
    }
});