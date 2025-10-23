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

const aboutText = `Hi! I'm Mohsin Rahman, a student who enjoys exploring the world of data science, machine learning, and software development. I'm studying Information Engineering (B.Sc.) at the Technical University of Munich (TUM), where I focus on software engineering, algorithms, and data structures. I also study Software Development at 42 Heilbronn, a project-based school that teaches through collaboration and hands-on coding.`;

const grid = document.getElementById('grid');
const cells = [];
const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeText = document.getElementById('welcomeText');
const header = document.querySelector('.header');

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

// Welcome animation sequence
function welcomeAnimation() {
    // 3 cursor flashes (1.5s total)
    setTimeout(() => {
        // Type "Hello!"
        let text = "Hello!";
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                welcomeText.innerHTML = text.substring(0, index + 1) + '<span class="typing-cursor"></span>';
                index++;
            } else {
                clearInterval(typeInterval);
                // Wait 1s then delete
                setTimeout(() => {
                    deleteWelcomeText();
                }, 1000);
            }
        }, 100);
    }, 1500);
}

function deleteWelcomeText() {
    let text = "Hello!";
    let index = text.length;
    const deleteInterval = setInterval(() => {
        if (index > 0) {
            welcomeText.innerHTML = text.substring(0, index - 1) + '<span class="typing-cursor"></span>';
            index--;
        } else {
            clearInterval(deleteInterval);
            welcomeText.innerHTML = ''; // Stop cursor blinking
            // Fade out overlay and show rest of page
            setTimeout(() => {
                fadeOutWelcome();
            }, 500);
        }
    }, 100);
}

function fadeOutWelcome() {
    // Show header
    header.style.transition = 'opacity 0.5s ease-in-out';
    header.style.opacity = '1';
    header.style.pointerEvents = 'auto';
    
    // Show about section with same fade technique
    const aboutSection = document.getElementById('aboutSection');
    aboutSection.classList.add('active');
    
    // Fade out overlay
    welcomeOverlay.style.transition = 'opacity 0.5s ease-in-out';
    welcomeOverlay.style.opacity = '0';
    
    // Remove welcome overlay after fade
    setTimeout(() => {
        welcomeOverlay.remove();
    }, 700);
}

// Hide header initially
header.style.opacity = '0';
header.style.pointerEvents = 'none';

// Start welcome animation on page load
welcomeAnimation();

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

// Start typing animation after fade-in completes (0.5s) + some delay for visual effect
setTimeout(() => {
    navItems.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        }
    });
    typeText(aboutTextElement, aboutText);
}, 5500);

navItems.forEach((item) => {
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



