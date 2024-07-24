// header.js
function loadHeader() {
    const headerHTML = `
    <header>
        <h1>SWangNice</h1>
    </header>
    <nav>
        <ul>
            <li><a href="https://swangnice.github.io">Home</a></li>
            <li><a href="https://https://swangnice.github.io/pages/projects.html">Projects</a></li>
            <li><a href="https://https://swangnice.github.io/pages/blogs.html">Blogs</a></li>
            <li><a href="https://https://swangnice.github.io/pages/about.html/#about">Contact</a></li>
            <li><a href="https://https://swangnice.github.io/pages/about.html/#contact">About Me</a></li>
        </ul>
    </nav>
    `;

    document.getElementById('header-container').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);
