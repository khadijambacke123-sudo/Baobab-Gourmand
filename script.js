Array.from(section.querySelectorAll('.plat')).some(
        (item) => item.style.display !== 'none'
      );
      section.style.display = visibleItems ? 'block' : 'none';
    });
  });
  
  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      filterButtons.forEach((btn) => btn.classList.remove('actif'));
      this.classList.add('actif');
      activeFilter = this.getAttribute('data-filter');
      updateMenu();
    });
  });

  searchInput.addEventListener('input', updateMenu);
  updateMenu();

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.btn-filtre');
  const menuItems = document.querySelectorAll('.plat');
  const noResults = document.getElementById('no-results');
  let activeFilter = 'tout';

  function updateMenu() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    menuItems.forEach((item) => {
      const category = item.getAttribute('data-categorie');
      const title = item.querySelector('h3').textContent.toLowerCase();
      const matchesFilter = activeFilter === 'tout' || category === activeFilter;
      const matchesSearch = title.includes(query);
      const shouldShow = matchesFilter && matchesSearch;

      item.style.display = shouldShow ? 'block' : 'none';
      if (shouldShow) visibleCount += 1;
    });

    noResults.classList.toggle('d-none', visibleCount !== 0);

    document.querySelectorAll('.menu-section').forEach((section) => {
      const visibleItems = 
  }, observerOptions);

  document.querySelectorAll('.fade-in-scroll').forEach((el) => observer.observe(el));
});

  const btn = document.getElementById("btnTop");

  // afficher bouton quand on scroll
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  };

  // remonter en haut
  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
