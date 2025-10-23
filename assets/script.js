const colors = [
    '#0f2820',
    '#1a3d2e',
    '#234a35',
    '#2d5a3d',
    '#5a7a45',
    '#8a8d3a',
    '#b8b856',
    '#d4d670',
    '#e5e685',
];

const aboutText = `Hi! I'm Mohsin Rahman, a student who enjoys exploring the world of data science, machine learning, and software development. I'm studying Information Engineering (B.Sc.) at the Technical University of Munich (TUM), where I focus on software engineering, algorithms, and data structures. I also study Software Development at 42 Heilbronn, a project-based school that teaches through collaboration and hands-on coding.

I've gained experience working with languages like C, C++, Java, Python, and SQL, and I love learning how different technologies come together to solve real-world problems.`;

const grid = document.getElementById('grid');
const cells = [];

for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
    cells.push(cell);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateCells() {
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 10);
        const col = index % 10;
        const delay = (row + col) * 100;
        const duration = 3000 + Math.random() * 4000;
        
        function updateCell() {
            cell.style.backgroundColor = getRandomColor();
            setTimeout(updateCell, duration + Math.random() * 2000);
        }
        
        setTimeout(() => {
            updateCell();
        }, delay);
    });
}

cells.forEach(cell => {
    cell.style.backgroundColor = getRandomColor();
});

animateCells();

// Glass shader setup removed - using CSS glass morphism instead

// Typing animation function
function typeText(element, text, speed = 20) {
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            let displayText = text.substring(0, index + 1);
            // Convert newlines to <br> tags
            displayText = displayText.replace(/\n/g, '<br>');
            element.innerHTML = displayText + '<span class="typing-cursor"></span>';
            index++;
            setTimeout(type, speed);
        } else {
            let displayText = text.replace(/\n/g, '<br>');
            element.innerHTML = displayText + '<span class="typing-cursor"></span>';
        }
    }
    
    setTimeout(type, 500);
}

// Navigation interactivity
const navItems = document.querySelectorAll('.header-nav li');
const aboutSection = document.getElementById('aboutSection');
const aboutTextElement = document.getElementById('aboutText');

navItems.forEach((item, index) => {
    if (index === 0) {
        item.classList.add('active');
        aboutSection.classList.add('active');
        typeText(aboutTextElement, aboutText);
    }
    
    item.addEventListener('click', () => {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        item.classList.add('active');
        
        if (item.textContent === 'About') {
            aboutSection.classList.add('active');
            typeText(aboutTextElement, aboutText);
        } else {
            aboutSection.classList.remove('active');
        }
    });
});



