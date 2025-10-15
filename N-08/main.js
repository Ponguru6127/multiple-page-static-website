 // Preloader and Animation JavaScript
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            const mainContent = document.getElementById('main-content');
            const sections = document.querySelectorAll('.section');
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    mainContent.style.opacity = '1';
                    document.body.style.overflow = 'visible';
                    // Animate sections on scroll
                    const observer = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                            }
                        });
                    });
                    sections.forEach(section => observer.observe(section));
                }, 1500);
            }, 2000);
        });

        // New Simulations
        function simulateWireless() {
            const simDiv = document.getElementById('wireless-sim');
            simDiv.innerHTML = 'Initiating Power Transfer...';
            let power = 0;
            const interval = setInterval(() => {
                power += 10;
                simDiv.innerHTML = `Power Level: ${power}%`;
                if (power >= 100) {
                    clearInterval(interval);
                    simDiv.innerHTML = 'Transfer Complete!';
                }
            }, 500);
        }

        function simulateVoice() {
            const simDiv = document.getElementById('voice-sim');
            simDiv.innerHTML = 'Listening for Command...';
            setTimeout(() => {
                simDiv.innerHTML = 'Command Recognized: Lights On!';
            }, 2000);
        }

        function simulateOscillo() {
            const simDiv = document.getElementById('oscillo-sim');
            simDiv.innerHTML = 'Generating Waveform...';
            let freq = Math.random() * 10 + 5;
            simDiv.innerHTML = `Frequency: ${freq.toFixed(2)} Hz | Amplitude: High`;
            simDiv.style.backgroundColor = '#2ecc71';
        }


// projects
 let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let autoSlide;

    // Initialize dots
    const dotsContainer = document.querySelector('.dots');
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    // Navigation functions
    function goToSlide(index) {
      currentSlide = index;
      updateCarousel();
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function updateCarousel() {
      const offset = -currentSlide * 100;
      document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

      // Update active dot
      document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    // Event listeners
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    // Auto-play
    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlide);
    }

    // Start auto-play and add hover controls
    startAutoSlide();
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoSlide);
  //   projects


//swiper

// swiper