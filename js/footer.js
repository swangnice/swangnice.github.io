// header.js
function loadFooter() {
    const footerHTML = `
    <footer>
        <p>Copyright &copy; 2024</p>
    </footer>
    `;

    document.getElementById('footer-container').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', loadFooter);
