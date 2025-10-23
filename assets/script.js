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

const aboutText = `\nHi! I'm Mohsin Rahman, a student who enjoys exploring the world of data science, machine learning, and software development. I'm studying Information Engineering (B.Sc.) at the Technical University of Munich (TUM), where I focus on software engineering, algorithms, and data structures. I also study Software Development at 42 Heilbronn, a project-based school that teaches through collaboration and hands-on coding.`;

const navItems_list = ['About', 'Tech Stack', 'Projects', 'Experience', 'Education', 'Contact'];

const grid = document.getElementById('grid');
const cells = [];
const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeText = document.getElementById('welcomeText');
const header = document.querySelector('.header');
const headerTitle = document.getElementById('headerTitle');
const headerNav = document.getElementById('headerNav');

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
    
    // Fade out overlay
    welcomeOverlay.style.transition = 'opacity 0.5s ease-in-out';
    welcomeOverlay.style.opacity = '0';
    
    // Remove welcome overlay after fade
    setTimeout(() => {
        welcomeOverlay.remove();
        // Start header animation sequence
        startHeaderAnimation();
    }, 700);
}

// Hide header initially
header.style.opacity = '0';
header.style.pointerEvents = 'none';

// Start welcome animation on page load
welcomeAnimation();

// Typing animation function for general text
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

// Function to animate header title
function typeHeaderTitle() {
    const titleText = 'MOHSIN AEJAZ RAHMAN <span class="slash">/</span> Portfolio';
    const titleDisplay = 'MOHSIN AEJAZ RAHMAN / Portfolio';
    let index = 0;
    
    return new Promise((resolve) => {
        const typeInterval = setInterval(() => {
            if (index < titleDisplay.length) {
                let displayText = titleDisplay.substring(0, index + 1);
                headerTitle.innerHTML = displayText + '<span class="typing-cursor"></span>';
                index++;
            } else {
                clearInterval(typeInterval);
                headerTitle.innerHTML = titleText;
                resolve();
            }
        }, 30);
    });
}

// Function to animate nav items
async function typeNavItems() {
    for (let i = 0; i < navItems_list.length; i++) {
        const li = document.createElement('li');
        if (i === 0) li.classList.add('active');
        
        navItems_list.forEach((item, index) => {
            if (index === i) {
                // Type this item
                let itemText = item;
                let itemIndex = 0;
                let displayContent = '';
                
                const typeItemInterval = setInterval(() => {
                    if (itemIndex < itemText.length) {
                        displayContent = itemText.substring(0, itemIndex + 1);
                        li.innerHTML = displayContent + '<span class="typing-cursor"></span>';
                        itemIndex++;
                    } else {
                        clearInterval(typeItemInterval);
                        li.innerHTML = itemText;
                    }
                }, 30);
            }
        });
        
        li.textContent = navItems_list[i];
        headerNav.appendChild(li);
        
        // Wait for this item to finish typing
        await new Promise(resolve => setTimeout(resolve, navItems_list[i].length * 30 + 100));
    }
}

// Function to show underline under About
function showAboutUnderline() {
    const aboutItem = headerNav.querySelector('li.active');
    return new Promise((resolve) => {
        setTimeout(() => {
            // The ::after pseudo-element will show via CSS
            resolve();
        }, 300);
    });
}

// Function to show about glass box
function showAboutBox() {
    const aboutSection = document.getElementById('aboutSection');
    return new Promise((resolve) => {
        aboutSection.classList.add('active');
        setTimeout(resolve, 500); // Wait for fade transition
    });
}

// Start header animation sequence
async function startHeaderAnimation() {
    // Type header title
    await typeHeaderTitle();
    
    // Wait a bit then type nav items
    await new Promise(resolve => setTimeout(resolve, 300));
    await typeNavItems();
    
    // Show about underline (already active)
    await showAboutUnderline();
    
    // Wait a bit then show about box
    await new Promise(resolve => setTimeout(resolve, 300));
    await showAboutBox();
    
    // Wait a bit then start typing about text
    await new Promise(resolve => setTimeout(resolve, 300));
    startAboutTextAnimation();
}

function startAboutTextAnimation() {
    const navItems = document.querySelectorAll('.header-nav li');
    const aboutTextElement = document.getElementById('aboutText');
    typeText(aboutTextElement, aboutText);
}

// Navigation interactivity
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.header-nav li').forEach(navItem => navItem.classList.remove('active'));
        item.classList.add('active');
        
        const aboutSection = document.getElementById('aboutSection');
        if (item.textContent === 'About') {
            aboutSection.classList.add('active');
            typeText(document.getElementById('aboutText'), aboutText);
        } else {
            aboutSection.classList.remove('active');
        }
    });
});



