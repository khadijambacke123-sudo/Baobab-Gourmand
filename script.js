document.addEventListener('DOMContentLoaded', function () {
  // Menu Filtering Logic
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.btn-filtre');
  const menuItems = document.querySelectorAll('.plat');
  const noResults = document.getElementById('no-results');
  let activeFilter = 'tout';

  function updateMenu() {
    if (!searchInput) return; // Only run on menu page

    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    menuItems.forEach((item) => {
      const category = item.getAttribute('data-categorie');
      const titleElement = item.querySelector('h3');
      if (!titleElement) return;

      const title = titleElement.textContent.toLowerCase();
      const matchesFilter = activeFilter === 'tout' || category === activeFilter;
      const matchesSearch = title.includes(query);
      const shouldShow = matchesFilter && matchesSearch;

      item.style.display = shouldShow ? 'block' : 'none';
      if (shouldShow) visibleCount += 1;
    });

    if (noResults) {
      noResults.classList.toggle('d-none', visibleCount !== 0);
    }

    document.querySelectorAll('.menu-section').forEach((section) => {
      const visibleItems = Array.from(section.querySelectorAll('.plat')).some(
        (item) => item.style.display !== 'none'
      );
      section.style.display = visibleItems ? 'block' : 'none';
    });
  }

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('actif'));
        this.classList.add('actif');
        activeFilter = this.getAttribute('data-filter');
        updateMenu();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', updateMenu);
    updateMenu();
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-scroll').forEach((el) => observer.observe(el));

  // Back to Top Button
  const btnTop = document.getElementById("btnTop");

  if (btnTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btnTop.classList.add("visible");
      } else {
        btnTop.classList.remove("visible");
      }
    });

    btnTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
