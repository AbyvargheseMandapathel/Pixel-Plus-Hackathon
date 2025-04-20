// Quizlet Clone JavaScript - Pixel Perfect Version

document.addEventListener('DOMContentLoaded', function() {
  // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);

  // Mobile menu toggle functionality with smooth animation
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      // Add smooth transition
      setTimeout(() => {
        mobileMenu.classList.toggle('active');
      }, 10);
    });
  }

  // Enhanced study card hover effects for pixel-perfect transitions
  const studyCards = document.querySelectorAll('.study-card');
  
  studyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('shadow-lg');
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('shadow-lg');
      this.style.transform = 'translateY(0)';
    });
  });

  // Enhanced dropdown menu functionality with precise animations
  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  
  dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdownMenu = this.nextElementSibling;
      
      // Close all other dropdowns first
      dropdownButtons.forEach(otherButton => {
        if (otherButton !== button) {
          const otherMenu = otherButton.nextElementSibling;
          if (otherMenu && !otherMenu.classList.contains('hidden')) {
            otherMenu.classList.add('hidden');
            otherMenu.style.opacity = '0';
            otherMenu.style.transform = 'translateY(-10px)';
          }
        }
        // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
      
      // Toggle current dropdown with smooth animation
      if (dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.remove('hidden');
        setTimeout(() => {
          dropdownMenu.style.opacity = '1';
          dropdownMenu.style.transform = 'translateY(0)';
        }, 10);
      } else {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          dropdownMenu.classList.add('hidden');
        }, 200);
      }
      // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
    // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});

  // Close dropdowns when clicking outside with precise timing
  document.addEventListener('click', function(event) {
    dropdownButtons.forEach(button => {
      if (!button.contains(event.target)) {
        const dropdownMenu = button.nextElementSibling;
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
          dropdownMenu.style.opacity = '0';
          dropdownMenu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            dropdownMenu.classList.add('hidden');
          }, 200);
        }
      }
      // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
    // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});

  // Precise flashcard flip animation with exact timing
  const flashcards = document.querySelectorAll('.flashcard');
  
  // Add smooth scroll behavior for pixel-perfect scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Ensure images load perfectly
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        img.classList.add('loaded');
        // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
    }
    // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
  
  // Add precise hover effects to buttons
  const buttons = document.querySelectorAll('button, a.bg-quizlet-purple');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-1px)';
      // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
    // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
  
  flashcards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
      // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
    // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});
  // Ensure responsive behavior is pixel-perfect
  const handleResize = () => {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('section p');
    
    if (width < 768) { // Mobile
      if (heroTitle) heroTitle.style.fontSize = '2rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1rem';
    } else { // Desktop
      if (heroTitle) heroTitle.style.fontSize = '3rem';
      if (heroSubtitle) heroSubtitle.style.fontSize = '1.125rem';
    }
  };
  
  // Initial call and event listener
  handleResize();
  window.addEventListener('resize', handleResize);
});