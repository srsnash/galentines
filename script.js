// Dropdown functionality
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isVisible = content.style.display === 'block';
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // Toggle the clicked dropdown
        content.style.display = isVisible ? 'none' : 'block';
    });
});
