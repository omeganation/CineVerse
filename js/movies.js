// Sample movie data (in a real app, this would come from an API)
const movies = [
    {
        id: 1,
        title: "Inception",
        year: "2010",
        rating: 8.8,
        genre: ["Sci-Fi", "Action", "Thriller"],
        director: "Christopher Nolan",
        runtime: "148 min",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"

    },
    {
        id: 2,
        title: "F1: The Movie",
        year: "2025",
        rating: 8.9,
        genre: ["Drama"],
        director: "Joseph Kosinski",
        runtime: "2h 35m",
        description: "A Formula One driver comes out of retirement to mentor and team up with a younger driver.",
        poster: "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@._V1_.jpg",
        backdrop: "https://d18v8sntwdxsei.cloudfront.net/marriott/moments/images/event/medium/761c0c9b09ddb43556fa332965459536b063326f7006bbb9b214ec2b39098a11.jpg",
        cast: ["Brad Pitt", "Javier Bardem", "Tobias Menzies", "Joseph Balderrama"],
        trailer: "https://youtu.be/embed/U_v5LJKy8vyZGH3F",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: "2008",
        rating: 9.0,
        genre: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        runtime: "152 min",
        description: "When the menace known as the Joker emerges, Batman must confront chaos.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        trailer: "EXeTwQWrcwY",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    // New additions (12 more films)
    {
        id: 4,
        title: "Straw",
        year: "2025",
        rating: 9.2,
        genre: ["Drama"],
        director: "Tyler Perry",
        runtime: "154 min",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Straw_film_poster.jpg/250px-Straw_film_poster.jpg",
        backdrop: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQWsnzEjZquGDYKz5_I1g-Tq9wtB5bhI6Esye0SIxs3Q_oYNdxBPVVXvxYLp1iKptaKaF-voT23FPr-C3kyvRpJnrMBiRLkj6IPGQv7ZhJ4MxXcksAtd2pSby2x1kjX9RYB_4YUS4HlqvgAva8dXG.jpg?r=64b",
        cast: ["Taraji P. Henson", "Teyana Taylor", "Rockmond Dunbar"],
        trailer: "https://www.youtube.com/embed/k1vWhii4tkE",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 5,
        title: "Squid Game",
        year: "2021",
        rating: 9.3,
        genre: ["Crime", "Drama"],
        director: "Hwang Dong-hyuk",
        runtime: "175 min",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes.",
        poster: "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://static01.nyt.com/images/2024/12/27/arts/27squid-recap/27netflix-videoSixteenByNine3000.jpg   ",
        cast: ["Lee Jung-jae", "Greg Chun", "Tom Choi"],
        trailer: "https://www.youtube.com/embed/zgGTVaG2UiQ",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 6,
        title: "Parasite",
        year: "2019",
        rating: 8.6,
        genre: ["Thriller", "Drama", "Dark Comedy"],
        director: "Bong Joon Ho",
        runtime: "132 min",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        trailer: "5xH0HfJHsaY",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 7,
        title: "Spirited Away",
        year: "2001",
        rating: 8.6,
        genre: ["Animation", "Adventure", "Fantasy"],
        director: "Hayao Miyazaki",
        runtime: "125 min",
        description: "A young girl wanders into a world ruled by gods, witches, and spirits.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        trailer: "ByXuk9-QqY8",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 8,
        title: "Interstellar",
        year: "2014",
        rating: 8.6,
        genre: ["Sci-Fi", "Drama", "Adventure"],
        director: "Christopher Nolan",
        runtime: "169 min",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        trailer: "zSWdZVtXT7E",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 9,
        title: "The Matrix",
        year: "1999",
        rating: 8.7,
        genre: ["Sci-Fi", "Action"],
        director: "Lana & Lilly Wachowski",
        runtime: "136 min",
        description: "A computer hacker learns about the true nature of reality.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        trailer: "vKQi3bBA1y8",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 10,
        title: "The Old Guard",
        year: "2020",
        rating: 9.0,
        genre: ["Action"],
        director: "Gina Prince-Bythewood",
        runtime: "2h 5m",
        description: "A covert group of tight-knit mercenaries with an inability to die have fought to protect the world for centuries. But when their abilities are suddenly exposed, they need to eliminate the threat of those who seek to replicate their power.",
        poster: "https://m.media-amazon.com/images/M/MV5BYzMwNjVjNTEtZDVhOC00NzQzLTg0MGYtMGI1Yzc0Nzg2MjNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        backdrop: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWZi6YXBGLkaH8501f7PdVzjQ1yHuKE3GDTaanQHqSORGX47A4FIg78Yeep42qBPnkbKuR8SzkdSPybvhBPBvic1_IiGUQVL7B6z.jpg?r=70a",
        cast: ["Charlize Theron", "Matthias Schoenaerts", "Luca Marinelli"],
        trailer: "bLvqoHBptjg",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "900MBs",
        quality: "1080p"
    },
    {
        id: 11,
        title: "The Silence of the Lambs",
        year: "1991",
        rating: 8.3,
        genre: ["Crime", "Thriller", "Horror"],
        director: "Jonathan Demme",
        runtime: "118 min",
        description: "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.",
        poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
        cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
        trailer: "RuX2MQeb8UM",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 12,
        title: "Gladiator",
        year: "2000",
        rating: 8.5,
        genre: ["Action", "Drama", "Adventure"],
        director: "Ridley Scott",
        runtime: "155 min",
        description: "A former Roman General seeks justice for the murder of his family.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6G2fLCVm9fiLyHvHforuzUUp.jpg",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        trailer: "owK1qxDselE",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 13,
        title: "Back to the Future",
        year: "1985",
        rating: 8.5,
        genre: ["Adventure", "Comedy", "Sci-Fi"],
        director: "Robert Zemeckis",
        runtime: "116 min",
        description: "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean.",
        poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6Z7l6Zx1ofL1rHpQJkZP9Q6B3tR.jpg",
        cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
        trailer: "qvsgGtivCgs",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 14,
        title: "The Lion King",
        year: "1994",
        rating: 8.5,
        genre: ["Animation", "Adventure", "Drama"],
        director: "Roger Allers, Rob Minkoff",
        runtime: "88 min",
        description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/lNkDYKmrVem1J0aAfCnQlJOCKn.jpg",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        trailer: "4sj1MT05lAA",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    },
    {
        id: 15,
        title: "Alien",
        year: "1979",
        rating: 8.5,
        genre: ["Horror", "Sci-Fi"],
        director: "Ridley Scott",
        runtime: "117 min",
        description: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.",
        poster: "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
        cast: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
        trailer: "LjLamj-b0I8",
        downloadUrl: "https://yourdomain.com/media/inception.mp4",
        fileSize: "1.5GB",
        quality: "1080p"
    }
];
// Get trending movies (just a subset for the hero slider)
function getTrendingMovies() {
    return [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
}

// Get all movies
function getAllMovies() {
    return movies;
}

// Get all unique genres
function getAllGenres() {
    const genres = new Set();
    movies.forEach(movie => {
        movie.genre.forEach(g => genres.add(g));
    });
    return Array.from(genres).sort();
}

// Get all unique years
function getAllYears() {
    const years = new Set();
    movies.forEach(movie => years.add(movie.year));
    return Array.from(years).sort((a, b) => b - a);
}

// Get movie by ID
function getMovieById(id) {
    return movies.find(movie => movie.id === id);
}

// Update your existing movie details code
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = getMovieById(movieId);

    if (movie) {
        // ... your existing movie detail population code ...

        // Set download link
        const downloadLink = document.getElementById('directDownload');
        downloadLink.href = movie.downloadUrl; // Add this property to your movies.js data
        downloadLink.setAttribute('download', `${movie.title.replace(/ /g, '_')}.mp4`);

        // Optional: Add file size dynamically
        document.querySelector('.download-note').textContent =
            `File: MP4 (${movie.fileSize}) • ${movie.quality}`;
    }
});