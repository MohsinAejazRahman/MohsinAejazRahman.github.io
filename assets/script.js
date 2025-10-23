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

// Track visited sections and their content
const visitedSections = {
    about: false,
    techStack: false,
    projects: false
};

// Store rendered content
const renderedContent = {
    about: '',
    techBox1: '',
    techBox2: '',
    techBox3: ''
};

// Track typing progress for each section (which character index we're on)
const typingProgress = {
    about: 0,
    techBox1: 0,
    techBox2: 0,
    techBox3: 0
};

// Store active typing timeouts so we can cancel them
const activeTypingTimeouts = {
    about: null,
    techBox1: null,
    techBox2: null,
    techBox3: null
};

const aboutText = `\nHi! I'm Mohsin Rahman, a student who enjoys exploring the world of data science, machine learning, and software development. I'm studying Information Engineering (B.Sc.) at the Technical University of Munich (TUM), where I focus on software engineering, algorithms, and data structures. I also study Software Development at 42 Heilbronn, a project-based school that teaches through collaboration and hands-on coding.`;

const navItems_list = ['About', 'Tech Stack', 'Projects', 'Experience', 'Education', 'Contact'];

const grid = document.getElementById('grid');
const cells = [];
const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeText = document.getElementById('welcomeText');
const header = document.querySelector('.header');
const headerTitle = document.getElementById('headerTitle');
const headerNav = document.getElementById('headerNav');

for (let i = 0; i < 625; i++) {
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
        const row = Math.floor(index / 25);
        const col = index % 25;
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
function typeText(element, text, speed = 20, storageKey = null, resumeProgress = false) {
    // Cancel any existing typing animation for this element
    if (storageKey && activeTypingTimeouts[storageKey]) {
        clearTimeout(activeTypingTimeouts[storageKey]);
    }
    
    // Determine starting index
    let index = resumeProgress && storageKey ? typingProgress[storageKey] : 0;
    
    // Clear element only if starting fresh, otherwise preserve what's typed so far
    if (index === 0) {
        element.innerHTML = '';
    }
    
    function type() {
        if (index < text.length) {
            let displayText = text.substring(0, index + 1);
            // Convert newlines to <br> tags
            displayText = displayText.replace(/\n/g, '<br>');
            element.innerHTML = displayText + '<span class="typing-cursor"></span>';
            
            // Save progress
            if (storageKey) {
                typingProgress[storageKey] = index + 1;
            }
            
            index++;
            const timeout = setTimeout(type, speed);
            
            // Store the timeout so we can cancel it
            if (storageKey) {
                activeTypingTimeouts[storageKey] = timeout;
            }
        } else {
            let displayText = text.replace(/\n/g, '<br>');
            // Remove cursor after typing completes, just show text
            element.innerHTML = displayText;
            // Store the rendered content
            if (storageKey) {
                renderedContent[storageKey] = displayText;
                activeTypingTimeouts[storageKey] = null;
            }
        }
    }
    
    const initialTimeout = setTimeout(type, 500);
    if (storageKey) {
        activeTypingTimeouts[storageKey] = initialTimeout;
    }
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
    
    // Attach event listeners AFTER nav items are created
    attachNavEventListeners();
}

function startAboutTextAnimation() {
    const aboutTextElement = document.getElementById('aboutText');
    typeText(aboutTextElement, aboutText, 20, 'about');
}

// Attach nav event listeners
function attachNavEventListeners() {
    const navItems = document.querySelectorAll('.header-nav li');
    
    navItems.forEach((item) => {
        item.addEventListener('click', async () => {
            document.querySelectorAll('.header-nav li').forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            
            const aboutSection = document.getElementById('aboutSection');
            const techStackSection = document.getElementById('techStackSection');
            const projectsSection = document.getElementById('projectsSection');
            const aboutTextElement = document.getElementById('aboutText');
            const techBox1 = document.getElementById('techBox1');
            const techBox2 = document.getElementById('techBox2');
            const techBox3 = document.getElementById('techBox3');
            
            if (item.textContent === 'About') {
                // Cancel any active typing
                if (activeTypingTimeouts.techBox1) clearTimeout(activeTypingTimeouts.techBox1);
                if (activeTypingTimeouts.techBox2) clearTimeout(activeTypingTimeouts.techBox2);
                if (activeTypingTimeouts.techBox3) clearTimeout(activeTypingTimeouts.techBox3);
                
                // Fade out other sections if visible
                if (techStackSection.classList.contains('active')) {
                    techStackSection.classList.remove('active');
                    if (visitedSections.techStack) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }
                if (projectsSection.classList.contains('active')) {
                    projectsSection.classList.remove('active');
                    if (visitedSections.projects) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }
                
                // Don't clear text if already visited
                if (!visitedSections.about) {
                    aboutTextElement.innerHTML = '';
                }
                
                aboutSection.classList.add('active');
                
                if (!visitedSections.about) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    visitedSections.about = true;
                    typeText(aboutTextElement, aboutText, 20, 'about', false);
                } else if (typingProgress.about < aboutText.length) {
                    typeText(aboutTextElement, aboutText, 20, 'about', true);
                } else {
                    aboutTextElement.innerHTML = renderedContent.about;
                }
            } else if (item.textContent === 'Tech Stack') {
                // Cancel any active typing in about section
                if (activeTypingTimeouts.about) clearTimeout(activeTypingTimeouts.about);
                
                // Fade out other sections
                if (visitedSections.about) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
                
                aboutSection.classList.remove('active');
                
                if (projectsSection.classList.contains('active')) {
                    projectsSection.classList.remove('active');
                    if (visitedSections.projects) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }
                
                // Don't clear tech boxes if already visited
                if (!visitedSections.techStack) {
                    techBox1.innerHTML = '';
                    techBox2.innerHTML = '';
                    techBox3.innerHTML = '';
                }
                
                techStackSection.classList.add('active');
                
                if (!visitedSections.techStack) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    visitedSections.techStack = true;
                    startTechStackAnimation();
                } else {
                    const allComplete = typingProgress.techBox1 >= techBoxTitles[0].length &&
                                      typingProgress.techBox2 >= techBoxTitles[1].length &&
                                      typingProgress.techBox3 >= techBoxTitles[2].length;
                    
                    if (allComplete) {
                        techBox1.innerHTML = renderedContent.techBox1;
                        techBox2.innerHTML = renderedContent.techBox2;
                        techBox3.innerHTML = renderedContent.techBox3;
                    } else {
                        resumeTechStackAnimation();
                    }
                }
            } else if (item.textContent === 'Projects') {
                // Cancel any active typing
                if (activeTypingTimeouts.about) clearTimeout(activeTypingTimeouts.about);
                if (activeTypingTimeouts.techBox1) clearTimeout(activeTypingTimeouts.techBox1);
                if (activeTypingTimeouts.techBox2) clearTimeout(activeTypingTimeouts.techBox2);
                if (activeTypingTimeouts.techBox3) clearTimeout(activeTypingTimeouts.techBox3);
                
                // Fade out other sections
                if (aboutSection.classList.contains('active')) {
                    aboutSection.classList.remove('active');
                    if (visitedSections.about) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }
                if (techStackSection.classList.contains('active')) {
                    techStackSection.classList.remove('active');
                    if (visitedSections.techStack) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }
                }
                
                projectsSection.classList.add('active');
                
                if (!visitedSections.projects) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    visitedSections.projects = true;
                }
            } else {
                // Cancel any active typing
                if (activeTypingTimeouts.about) clearTimeout(activeTypingTimeouts.about);
                if (activeTypingTimeouts.techBox1) clearTimeout(activeTypingTimeouts.techBox1);
                if (activeTypingTimeouts.techBox2) clearTimeout(activeTypingTimeouts.techBox2);
                if (activeTypingTimeouts.techBox3) clearTimeout(activeTypingTimeouts.techBox3);
                
                // Hide all sections
                aboutTextElement.innerHTML = '';
                techBox1.innerHTML = '';
                techBox2.innerHTML = '';
                techBox3.innerHTML = '';
                aboutSection.classList.remove('active');
                techStackSection.classList.remove('active');
                projectsSection.classList.remove('active');
            }
        });
    });
}

// Tech Stack Animation
const techBoxTitles = [
    'Front End',
    'Back End',
    'Tools'
];

async function startTechStackAnimation() {
    const storageKeys = ['techBox1', 'techBox2', 'techBox3'];
    for (let i = 0; i < 3; i++) {
        const boxElement = document.getElementById(`techBox${i + 1}`);
        typeText(boxElement, techBoxTitles[i], 30, storageKeys[i], false);
        await new Promise(resolve => setTimeout(resolve, techBoxTitles[i].length * 30 + 500));
    }
}

async function resumeTechStackAnimation() {
    const storageKeys = ['techBox1', 'techBox2', 'techBox3'];
    for (let i = 0; i < 3; i++) {
        const boxElement = document.getElementById(`techBox${i + 1}`);
        const progress = typingProgress[storageKeys[i]];
        const textLength = techBoxTitles[i].length;
        
        // Only resume if typing was incomplete
        if (progress < textLength) {
            typeText(boxElement, techBoxTitles[i], 30, storageKeys[i], true);
            // Calculate remaining time based on remaining characters
            const remainingChars = textLength - progress;
            await new Promise(resolve => setTimeout(resolve, remainingChars * 30 + 500));
        } else {
            // Typing was already complete, just show the finished text
            boxElement.innerHTML = renderedContent[storageKeys[i]];
        }
    }
}



