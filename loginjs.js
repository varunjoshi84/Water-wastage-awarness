window.addEventListener('scroll', function() {
    var page = document.querySelector('.page');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 500) { // Adjust the scroll position threshold as needed
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
  