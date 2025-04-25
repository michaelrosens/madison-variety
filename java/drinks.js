document.addEventListener('DOMContentLoaded', function() {
  // Update clock function
  function updateClock() {
      const now = new Date();
      const dateOptions = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
      };
      const timeOptions = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
      };
      
      const dateString = now.toLocaleDateString('en-US', dateOptions);
      const timeString = now.toLocaleTimeString('en-US', timeOptions);
      
      document.getElementById('clock').textContent = `${dateString} | ${timeString}`;
  }
  
  // Initialize clock
  updateClock();
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Hide option section for drinks with only one type
  const singleTypeDrinks = document.querySelectorAll('.drink-card[data-single-type="true"]');
  singleTypeDrinks.forEach(card => {
    const optionsSection = card.querySelector('.drink-options');
    if (optionsSection) {
      optionsSection.style.display = 'none';
    }
  });
  
  // Get all option boxes
  const optionBoxes = document.querySelectorAll('.option-box');
  
  // Add click event listener to each option box
  optionBoxes.forEach(box => {
      box.addEventListener('click', function() {
          // Get parent drink card
          const drinkCard = this.closest('.drink-card');
          
          // Remove active class from all option boxes in this card
          drinkCard.querySelectorAll('.option-box').forEach(option => {
              option.classList.remove('active');
          });
          
          // Add active class to clicked option
          this.classList.add('active');
          
          // Update drink name
          drinkCard.querySelector('.drink-name').textContent = this.getAttribute('data-name');
          
          // Update drink price
          drinkCard.querySelector('.drink-price').textContent = this.getAttribute('data-price');
          
          // Update drink image
          drinkCard.querySelector('.drink-image').src = this.getAttribute('data-image');
          
          // Add animation effect to image
          const img = drinkCard.querySelector('.drink-image');
          img.style.transform = 'scale(0.9)';
          setTimeout(() => {
              img.style.transform = 'scale(1)';
          }, 200);
      });
  });

  // Alternative approach: Hide option sections with only one option
  document.querySelectorAll('.drink-card').forEach(card => {
    const options = card.querySelectorAll('.option-box');
    if (options.length === 1) {
      const optionsSection = card.querySelector('.drink-options');
      if (optionsSection) {
        optionsSection.style.display = 'none';
      }
    }
  });
});