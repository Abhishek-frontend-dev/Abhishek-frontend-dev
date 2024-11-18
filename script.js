// Skill-based project filtering
const skillButtons = document.querySelectorAll('.skill-btn');
const projectCards = document.querySelectorAll('.project-card');

skillButtons.forEach(button => {
    button.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        
        // Hide all projects
        projectCards.forEach(card => card.style.display = 'none');
        
        // Show projects related to selected skill
        projectCards.forEach(card => {
            if (card.getAttribute('data-skill') === skill) {
                card.style.display = 'block';
            }
        });
    });
});



// Hover effects for playing videos
const projectCard = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const video = card.querySelector('video');

    // Ensure video is muted for autoplay
    video.muted = true;

    card.addEventListener('mouseover', function() {
        video.play(); // Trigger video play on hover
    });

    card.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0; // Reset the video when you leave the hover
    });
});



/*accordion section */


var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    // Find the parent card-container
    var cardContainer = this.closest(".card-container");

    // Find the iteme element
    var iteme = this.previousElementSibling;

    // Toggle the expanded class and iteme visibility
    if (cardContainer.classList.contains("expanded")) {
      cardContainer.classList.remove("expanded");
      iteme.style.display = "none";
      this.textContent = "Read More";
    } else {
      cardContainer.classList.add("expanded");
      iteme.style.display = "block";
      this.textContent = "Read Less";
    }
  });
}

