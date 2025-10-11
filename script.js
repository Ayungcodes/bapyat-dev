//Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    loader.style.display = "none";
    content.classList.remove("opacity-0");
  });

// Toggle Btn
document.addEventListener('DOMContentLoaded', () => {
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const projectsBtn = document.getElementById('projects-nav');
      const aboutBtn = document.getElementById('about-nav');
      const skillsBtn = document.getElementById('skills-nav');
      const contactBtn = document.getElementById('contact-nav');
      const linkedinBtn = document.getElementById('linkedin');
      const githubBtn = document.getElementById('github');
      const twitterBtn = document.getElementById('twitter');
      const instagramBtn = document.getElementById('instagram');
      const hireBtn = document.getElementById('hire-nav');


      const toggleMenu = () => {
        menuBtn.classList.toggle('open');
        mobileMenu.classList.toggle('menu-open');
        mobileMenu.classList.toggle('menu-closed');
      };


      menuBtn.addEventListener('click', toggleMenu);
      projectsBtn.addEventListener('click', toggleMenu);
      aboutBtn.addEventListener('click', toggleMenu);
      skillsBtn.addEventListener('click', toggleMenu);
      contactBtn.addEventListener('click', toggleMenu);
      linkedinBtn.addEventListener('click', toggleMenu);
      githubBtn.addEventListener('click', toggleMenu);
      twitterBtn.addEventListener('click', toggleMenu);
      instagramBtn.addEventListener('click', toggleMenu);
      hireBtn.addEventListener('click', toggleMenu);
    });
    


// Form collection
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formUrl = form.action;

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Successful submission: Display message and clear form
        statusMessage.textContent = "I'm glad to hear from you";
        statusMessage.style.display = 'block';
        form.reset();
      } else {
        // Unsuccessful submission: Display error message
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          statusMessage.textContent = data.errors.map(error => error.message).join(", ");
        } else {
          statusMessage.textContent = "Oops! There was a problem submitting your form.";
        }
        statusMessage.style.color = 'red';
        statusMessage.style.display = 'block';
      }
    } catch (error) {
      // General network or script error
      statusMessage.textContent = "Oops! An error occurred. Please try again later.";
      statusMessage.style.color = 'red';
      statusMessage.style.display = 'block';
    }
  });
});