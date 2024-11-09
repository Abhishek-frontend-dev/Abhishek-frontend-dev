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
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var iteme = this.nextElementSibling;
    if (iteme.style.display === "block") {
      iteme.style.display = "none";
    } else {
      iteme.style.display = "block";
    }
  });
}
