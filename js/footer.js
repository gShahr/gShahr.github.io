
function insertFooter() {
    const footerHtml = `
    <footer id="contact">
        <p>&copy; <span id="current-year"></span> Theriatric. All rights reserved.</p>
        <div id="socials">
            <a href="https://github.com/gShahr" target="_blank">GitHub</a> |
            <a href="https://www.linkedin.com/in/gabriel-s-902134197/" target="_blank">LinkedIn</a>
        </div>
    </footer>
    `;
    
    // Insert the footer HTML
    document.body.insertAdjacentHTML('beforeend', footerHtml);
    
    // Set the current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', insertFooter);
