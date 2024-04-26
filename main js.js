document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      this.innerText = 'Hide Details';
    } else {
      moreInfo.style.display = 'none';
      this.innerText = 'Learn More';
    }
  });
  