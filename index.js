document.addEventListener("DOMContentLoaded", function() {
    var navbarButton = document.getElementById("navbarButton");
    navbarButton.addEventListener("click", function() {
      this.classList.toggle("changeNav");
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-projects');
    btn.addEventListener('mouseover', function() {
      btn.classList.add('btn-dark');
      btn.classList.remove('btn-primary');
    });
    btn.addEventListener('mouseout', function() {
      btn.classList.remove('btn-dark');
      btn.classList.add('btn-primary');
    });
  });

document.addEventListener("DOMContentLoaded", function () {
     function hideLoadingOverlay() {
      const loadingOverlay = document.getElementById("loading-overlay");
      loadingOverlay.style.display = "none";
    }

    function simulateLoading() {
      let progress = 0;  
      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
          hideLoadingOverlay();
        } else {
          progress += 1;
          loadingText.textContent = `${progress}%`;
        }
      }, 30); 
    }

    simulateLoading();
  });
  

