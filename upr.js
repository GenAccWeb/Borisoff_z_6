document.addEventListener('DOMContentLoaded', function() {
    // Элементы карусели
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    // homeBtn больше не нужен - удаляем эту строку
    
    let currentSlide = 0;
    const totalSlides = slideElements.length;
    
    function updateCarousel() {
        slides.style.transform = `translateX(-${currentSlide * 20}%)`;
        
        slideElements.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Остаются только обработчики для кнопок слайдера
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Обработчик для homeBtn УДАЛЕН, т.к. теперь это обычная ссылка
});