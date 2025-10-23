/**
 * Executes code when the DOM content is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */
  const cornerMenuButton = document.querySelector('.corner-menu-button');
  const header = document.querySelector('#header');

  if (cornerMenuButton && header) {
    cornerMenuButton.addEventListener('click', () => {
      header.classList.toggle('header-show');
      cornerMenuButton.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('#navmenu a').forEach(navLink => {
      navLink.addEventListener('click', () => {
        if (header.classList.contains('header-show')) {
          header.classList.remove('header-show');
          cornerMenuButton.classList.remove('active');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideHeader = header.contains(event.target);
      const isClickOnButton = cornerMenuButton.contains(event.target);

      if (!isClickInsideHeader && !isClickOnButton && header.classList.contains('header-show')) {
        header.classList.remove('header-show');
        cornerMenuButton.classList.remove('active');
      }
    });
  }

  /**
   * Scroll Top Button
   */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Smooth Scrolling for Navigation Links
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Use scrollIntoView for smooth scrolling
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /**
   * Typing Effect for Hero Section
   */
  const typed = document.querySelector('.typed');
  if (typed) {
    const items = ['Data Analyst', 'Programmer', 'Web Designer'];
    let currentItem = 0;
    let currentText = '';
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
      const fullText = items[currentItem];

      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      typed.textContent = currentText;

      let newTypeSpeed;
      if (!isDeleting && currentText === fullText) {
        newTypeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentItem = (currentItem + 1) % items.length;
        newTypeSpeed = 500;
      } else {
        newTypeSpeed = isDeleting ? 50 : 100;
      }

      setTimeout(type, newTypeSpeed);
    }

    type();
  }

  
  /**
   * PERFORMANCE: Animate skill bars on scroll using IntersectionObserver
   */
  const skillsObserverTarget = document.querySelector('.skills-observer');
  if (skillsObserverTarget) {
    let skillsAnimated = false; // Flag to run only once

    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // When the skills section is intersecting (visible) and not yet animated
        if (entry.isIntersecting && !skillsAnimated) {
          const progressBars = skillsObserverTarget.querySelectorAll('.progress-bar');
          progressBars.forEach(bar => {
            const width = bar.getAttribute('aria-valuenow');
            bar.style.width = width + '%';
          });
          skillsAnimated = true; // Set flag
          observer.unobserve(entry.target); // Stop observing
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    skillsObserver.observe(skillsObserverTarget);
  }


  /**
   * PERFORMANCE: Navmenu Scrollspy using IntersectionObserver
   */
  const sections = document.querySelectorAll('section[id]');
  const navmenulinks = document.querySelectorAll('.navmenu a');

  if (sections.length && navmenulinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const correspondingLink = document.querySelector(`.navmenu a[href="#${sectionId}"]`);

          // Remove 'active' from all links
          navmenulinks.forEach(link => link.classList.remove('active'));

          // Add 'active' to the corresponding link
          if (correspondingLink) {
            correspondingLink.classList.add('active');
          }
        }
      });
    }, {
      // This margin 'pushes' the intersection trigger down.
      // The 'active' link will be the one at the top of the viewport,
      // down to 40% from the bottom.
      rootMargin: '0px 0px -40% 0px',
      threshold: 0
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

});