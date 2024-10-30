/* burger */
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        // Toggle nav list and burger class
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
     });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

/* Scroll card */
function scrollLeft() {
    document.querySelector('.card-container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.card-container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}




/*galeri*/
// Slideshow Foto
let fotoIndex = 0;
showFotoSlides();

function showFotoSlides() {
    let fotoSlides = document.getElementsByClassName("foto-slide");
    for (let i = 0; i < fotoSlides.length; i++) {
        fotoSlides[i].style.display = "none";  
    }
    fotoIndex++;
    if (fotoIndex > fotoSlides.length) {fotoIndex = 1}    
    fotoSlides[fotoIndex-1].style.display = "block";  
    setTimeout(showFotoSlides, 3000); // Change image every 3 seconds
}



/*berita*/
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const categorySelect = document.getElementById('category-select');
    const categories = document.querySelectorAll('.category-section');
    
    // Fungsi untuk menampilkan berita berdasarkan kategori
    function filterByCategory(category) {
        categories.forEach(section => {
            if (category === 'all' || section.id === `category-${category}`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Fungsi untuk mencari berita berdasarkan input pencarian
    function searchNews() {
        const searchTerm = searchInput.value.toLowerCase();
        categories.forEach(section => {
            const articles = section.querySelectorAll('article');
            articles.forEach(article => {
                const title = article.querySelector('h3').textContent.toLowerCase();
                const content = article.querySelector('p').textContent.toLowerCase();
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    }

    // Event listener untuk tombol pencarian
    searchButton.addEventListener('click', searchNews);

    // Event listener untuk dropdown kategori
    categorySelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        filterByCategory(selectedCategory);
    });

    // Inisialisasi tampilan awal
    filterByCategory(categorySelect.value);
});


