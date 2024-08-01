document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const pages = document.querySelectorAll('.page');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        pages.forEach(page => {
            const pageTitle = page.getAttribute('data-title').toLowerCase();
            const isVisible = pageTitle.includes(searchTerm);

            if (isVisible) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    });
});
