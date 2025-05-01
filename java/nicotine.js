// Update the clock
function updateClock() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    document.getElementById('clock').textContent = now.toLocaleDateString('en-US', options).replace(',', ' |');
    setTimeout(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    // Start the clock
    updateClock();
    
    // Age verification logic
    const verifyButton = document.getElementById('verify-age');
    const resultDiv = document.getElementById('result');
    
    verifyButton.addEventListener('click', function() {
        // Get input value
        const birthdate = new Date(document.getElementById('birthdate').value);
        
        // Check if date is valid
        if (isNaN(birthdate.getTime())) {
            showResult('Please enter a valid date.', 'error');
            return;
        }
        
        // Calculate age
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        
        // Adjust age if birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        
        // Check if age is 21 or older (legal age for tobacco in NJ)
        if (age >= 21) {
            showResult('✓ You are eligible to purchase tobacco products.', 'success');
        } else {
            // Calculate days until they turn 21
            const twentyFirstBirthday = new Date(birthdate);
            twentyFirstBirthday.setFullYear(birthdate.getFullYear() + 21);
            
            // If birthday has passed this year, set to next year
            if (twentyFirstBirthday < today) {
                twentyFirstBirthday.setFullYear(today.getFullYear() + 1);
            }
            
            // Calculate days difference
            const daysUntil = Math.ceil((twentyFirstBirthday - today) / (1000 * 60 * 60 * 24));
            
            showResult(`✗ You must be 21 or older to purchase tobacco products. You will be eligible in ${daysUntil} days.`, 'error');
        }
    });
    
    // Function to show result message
    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.className = 'result-message show';
        
        if (type === 'success') {
            resultDiv.classList.add('success');
            resultDiv.classList.remove('error');
        } else {
            resultDiv.classList.add('error');
            resultDiv.classList.remove('success');
        }
        
        // Add animation
        resultDiv.style.animation = 'none';
        setTimeout(() => {
            resultDiv.style.animation = 'fadeIn 0.5s';
        }, 10);
    }
    
    // Add keypress event listener for Enter key
    document.getElementById('birthdate').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verifyButton.click();
        }
    });
});

// Add fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});