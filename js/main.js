document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    });

    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;

    // Create slides from trending movies
    function initHeroSlider() {
        const trendingMovies = getTrendingMovies();

        trendingMovies.slice(0, 5).forEach((movie, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'hero-slide';
            slide.style.backgroundImage = `url(${movie.backdrop})`;
            if (index === 0) slide.classList.add('active');
            heroSlider.appendChild(slide);

            // Create dot
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            sliderDots.appendChild(dot);
        });
    }

    function goToSlide(index) {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');

        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.hero-slide');
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        const slides = document.querySelectorAll('.hero-slide');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    // Event listeners for slider controls
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const allMovies = document.querySelectorAll('#all-movies .movie-card');

        allMovies.forEach(movie => {
            const title = movie.querySelector('.movie-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });

    // Filter functionality
    const genreFilter = document.getElementById('genre-filter');
    const yearFilter = document.getElementById('year-filter');
    const ratingFilter = document.getElementById('rating-filter');

    // Populate genre filter
    const allGenres = getAllGenres();
    allGenres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    // Populate year filter
    const allYears = getAllYears();
    allYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Apply filters
    function applyFilters() {
        const selectedGenre = genreFilter.value;
        const selectedYear = yearFilter.value;
        const selectedRating = ratingFilter.value;

        const allMovies = document.querySelectorAll('#all-movies .movie-card');

        allMovies.forEach(movie => {
            const movieGenre = movie.getAttribute('data-genre');
            const movieYear = movie.getAttribute('data-year');
            const movieRating = parseFloat(movie.getAttribute('data-rating'));

            const genreMatch = !selectedGenre || movieGenre.includes(selectedGenre);
            const yearMatch = !selectedYear || movieYear === selectedYear;
            const ratingMatch = !selectedRating || movieRating >= parseFloat(selectedRating);

            if (genreMatch && yearMatch && ratingMatch) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    }

    genreFilter.addEventListener('change', applyFilters);
    yearFilter.addEventListener('change', applyFilters);
    ratingFilter.addEventListener('change', applyFilters);

    // Load movies
    function loadMovies() {
        const trendingMoviesContainer = document.getElementById('trending-movies');
        const allMoviesContainer = document.getElementById('all-movies');

        // Clear containers
        trendingMoviesContainer.innerHTML = '';
        allMoviesContainer.innerHTML = '';

        // Get movies
        const trendingMovies = getTrendingMovies();
        const allMovies = getAllMovies();

        // Display trending movies
        trendingMovies.forEach(movie => {
            trendingMoviesContainer.appendChild(createMovieCard(movie));
        });

        // Display all movies
        allMovies.forEach(movie => {
            allMoviesContainer.appendChild(createMovieCard(movie));
        });
    }

    // Create movie card element
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.setAttribute('data-genre', movie.genre.join(','));
        card.setAttribute('data-year', movie.year);
        card.setAttribute('data-rating', movie.rating);

        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-rating">
                        <i class="fas fa-star"></i> ${movie.rating}
                    </span>
                </div>
                <div class="movie-genres">
                    ${movie.genre.slice(0, 2).map(g => `<span class="genre-tag">${g}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event to view movie details
        card.addEventListener('click', function () {
            // In a real app, you would navigate to a movie details page
            // For this example, we'll just show an alert
            window.location.href = `movie.html?id=${movie.id}`;
        });

        return card;
    }

    // Initialize
    initHeroSlider();
    loadMovies();

    // In main.js
    function setupFilters() {
        const genreFilter = document.getElementById('genre-filter');
        const yearFilter = document.getElementById('year-filter');
        const ratingFilter = document.getElementById('rating-filter');

        // Populate genre filter
        const allGenres = [...new Set(movies.flatMap(movie => movie.genre))];
        allGenres.forEach(genre => {
            genreFilter.innerHTML += `<option value="${genre}">${genre}</option>`;
        });

        // Populate year filter
        const allYears = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);
        allYears.forEach(year => {
            yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
        });

        // Apply filters
        [genreFilter, yearFilter, ratingFilter].forEach(filter => {
            filter.addEventListener('change', applyFilters);
        });
    }

    function applyFilters() {
        const genre = document.getElementById('genre-filter').value;
        const year = document.getElementById('year-filter').value;
        const minRating = parseFloat(document.getElementById('rating-filter').value) || 0;

        const filteredMovies = movies.filter(movie => {
            return (!genre || movie.genre.includes(genre)) &&
                (!year || movie.year === year) &&
                (movie.rating >= minRating);
        });

        displayFilteredMovies(filteredMovies);
    }

    function displayFilteredMovies(filteredMovies) {
        const container = document.getElementById('all-movies');
        container.innerHTML = '';

        filteredMovies.forEach(movie => {
            container.appendChild(createMovieCard(movie));
        });
    }

    // Theme Toggle Functionality
    function setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');

        // Check saved preference or use dark mode as default
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Update button text
        if (savedTheme === 'light') {
            icon.className = 'fas fa-sun';
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }

        // Toggle theme on click
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Update UI
            document.documentElement.setAttribute('data-theme', newTheme);
            if (newTheme === 'light') {
                icon.className = 'fas fa-sun';
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                icon.className = 'fas fa-moon';
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }

            // Save preference
            localStorage.setItem('theme', newTheme);
        });
    }

    // Initialize when DOM loads
    document.addEventListener('DOMContentLoaded', () => {
        setupThemeToggle();
        // ... (your other initialization code)
    });

    // Terms & Conditions Management
    document.addEventListener('DOMContentLoaded', function () {
        const termsModal = document.getElementById('termsModal');
        const acceptBtn = document.getElementById('acceptTerms');
        const declineBtn = document.getElementById('declineTerms');

        // Check if user already accepted terms
        if (!localStorage.getItem('termsAccepted')) {
            showTermsModal();
        }

        function showTermsModal() {
            document.body.classList.add('modal-open');
            termsModal.style.display = 'block';

            // Disable all interactive elements
            document.querySelectorAll('a, button, input').forEach(el => {
                el.style.pointerEvents = 'none';
            });
        }

        function hideTermsModal() {
            document.body.classList.remove('modal-open');
            termsModal.style.display = 'none';

            // Re-enable interactive elements
            document.querySelectorAll('a, button, input').forEach(el => {
                el.style.pointerEvents = 'auto';
            });
        }

        acceptBtn.addEventListener('click', function () {
            localStorage.setItem('termsAccepted', 'true');
            hideTermsModal();
            // Enable download buttons
            document.querySelectorAll('.download-btn').forEach(btn => {
                btn.style.pointerEvents = 'auto';
            });
        });

        declineBtn.addEventListener('click', function () {
            // Redirect away or show message
            window.location.href = 'https://google.com';
            // Alternative: Show disabled interface
            // document.body.innerHTML = '<h1>You must accept terms to use this site</h1>';
        });

        // Optional: Disable downloads until terms accepted
        if (!localStorage.getItem('termsAccepted')) {
            document.querySelectorAll('.download-btn').forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.5';
            });
        }
    });
    // In main.js
    const TERMS_VERSION = '1.0'; // Increment this when terms change

    if (localStorage.getItem('termsVersion') !== TERMS_VERSION) {
        localStorage.removeItem('termsAccepted');
        localStorage.setItem('termsVersion', TERMS_VERSION);
    }
    // Block all site functionality
    if (!termsAccepted) {
        document.body.innerHTML = `
    <div class="terms-wall">
      <h2>You must accept our Terms to continue</h2>
      <button onclick="showTermsModal()">Show Terms</button>
    </div>
  `;
    }
    // Add click tracking (optional)
    document.querySelector('.whatsapp-float').addEventListener('click', function () {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click');
        }
    });

    // Add pulse animation after 5 seconds
    setTimeout(() => {
        document.querySelector('.whatsapp-float').classList.add('pulse');
    }, 5000);

    // Remove pulse when clicked
    document.querySelector('.whatsapp-float').addEventListener('click', function () {
        this.classList.remove('pulse');
    });

    // Sample ad rotation system
    const adContainers = document.querySelectorAll('.ad-container');

    function loadAds() {
        fetch('/api/ads')
            .then(response => response.json())
            .then(ads => {
                adContainers.forEach((container, index) => {
                    if (ads[index]) {
                        // Replace placeholder with real ad
                        container.innerHTML = `
            <a href="${ads[index].url}" target="_blank" rel="sponsored">
              <img src="${ads[index].banner}" alt="Sponsored Ad" class="ad-banner">
            </a>
            <small class="ad-label">ADVERTISEMENT</small>
          `;
                    }
                });
            })
            .catch(() => {
                // Keep placeholder if ads fail to load
                console.log("Showing ad placeholders");
            });
    }

    // Load ads on page load
    document.addEventListener('DOMContentLoaded', loadAds);

    // Track ad clicks
    document.addEventListener('click', function (e) {
        if (e.target.closest('.ad-container a')) {
            gtag('event', 'ad_click', {
                'ad_position': e.target.closest('.ad-container').classList[1] // top-ad/sidebar-ad
            });
        }
    });

    // Wait for ALL page resources to load
    window.addEventListener('load', function () {
        const preloader = document.querySelector('.preloader');

        // Minimum show time (even if page loads faster)
        const minShowTime = 1500; // 1.5 seconds
        const loadStart = Date.now();

        function hidePreloader() {
            const elapsed = Date.now() - loadStart;
            const remainingTime = Math.max(0, minShowTime - elapsed);

            setTimeout(function () {
                preloader.classList.add('hidden');

                // Remove from DOM after animation completes
                setTimeout(() => {
                    preloader.remove();
                }, 800); // Must match CSS transition time
            }, remainingTime);
        }

        // Double-check if everything is really loaded
        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
        }
    });

    // Emergency fallback - hide after 5 seconds max
    setTimeout(function () {
        const preloader = document.querySelector('.preloader');
        if (preloader && !preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 800);
        }
    }, 5000);

});
