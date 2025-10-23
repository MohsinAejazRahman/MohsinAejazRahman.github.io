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

// Animation Toggle Feature - Initialize early
let animationsEnabled = true;
let allTimeouts = [];
let allIntervals = [];

// Track visited sections and their content
const visitedSections = {
    about: false,
    techStack: false,
    projects: false,
    contact: false
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

const aboutText = `Hi! I'm Mohsin Rahman, a student who enjoys exploring the world of data science, machine learning, and software development. I'm studying Information Engineering (B.Sc.) at the Technical University of Munich (TUM), where I focus on software engineering, algorithms, and data structures. I also study Software Development at 42 Heilbronn, a project-based school that teaches through collaboration and hands-on coding.`;

const navItems_list = ['About', 'Tech Stack', 'Projects', 'Experience', 'Education', 'Contact'];

const grid = document.getElementById('grid');
const cells = [];
const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeText = document.getElementById('welcomeText');
const header = document.querySelector('.header');
const headerTitle = document.getElementById('headerTitle');
const headerNav = document.getElementById('headerNav');

// Optimize grid cell creation with DocumentFragment
const gridFragment = document.createDocumentFragment();
for (let i = 0; i < 50; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    gridFragment.appendChild(cell);
    cells.push(cell);
}
grid.appendChild(gridFragment);

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateCells() {
    // Create timing data for all cells upfront with linear intervals
    const cellTimings = cells.map((cell, index) => {
        const row = Math.floor(index / 10);
        const col = index % 10;
        return {
            cell: cell,
            delay: (row + col) + 500 + Math.random() * 500,
            duration: 10000 + Math.random() * 10000, // Fixed consistent duration
        };
    });
    
    // Schedule all animations efficiently with linear timing
    cellTimings.forEach(({ cell, delay, duration }) => {
        setTimeout(() => {
            const updateCell = () => {
                cell.style.backgroundColor = getRandomColor();
                setTimeout(updateCell, duration);  // Fixed interval, no randomness
            };
            updateCell();
        }, delay);
    });
}

cells.forEach(cell => {
    cell.style.backgroundColor = getRandomColor();
});

animateCells();

// Welcome animation sequence
const welcomeTextContent = "Hello!";
const cursorSpan = '<span class="typing-cursor"></span>';

function welcomeAnimation() {
    if (!animationsEnabled) return;
    
    setTimeout(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            if (!animationsEnabled) {
                clearInterval(typeInterval);
                return;
            }
            if (index < welcomeTextContent.length) {
                welcomeText.innerHTML = welcomeTextContent.substring(0, index + 1) + cursorSpan;
                index++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    deleteWelcomeText();
                }, 1000);
            }
        }, 100);
    }, 1500);
}

function deleteWelcomeText() {
    if (!animationsEnabled) return;
    
    let index = welcomeTextContent.length;
    const deleteInterval = setInterval(() => {
        if (index > 0) {
            welcomeText.innerHTML = welcomeTextContent.substring(0, index - 1) + cursorSpan;
            index--;
        } else {
            clearInterval(deleteInterval);
            welcomeText.innerHTML = '';
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
    
    // Pre-process text once
    const processedText = text.replace(/\n/g, '<br>');
    
    // If animations are disabled, show full text immediately
    if (!animationsEnabled) {
        element.innerHTML = processedText;
        if (storageKey) {
            renderedContent[storageKey] = processedText;
            typingProgress[storageKey] = text.length;
        }
        return;
    }
    
    // Determine starting index
    let index = resumeProgress && storageKey ? typingProgress[storageKey] : 0;
    
    // Clear element only if starting fresh
    if (index === 0) {
        element.innerHTML = '';
    }
    
    function type() {
        if (!animationsEnabled) return;
        
        if (index < text.length) {
            // Build display text only once per iteration
            const displayText = processedText.substring(0, index + 1);
            element.innerHTML = displayText + cursorSpan;
            
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
            // Typing complete - show final text without cursor
            element.innerHTML = processedText;
            // Store the rendered content
            if (storageKey) {
                renderedContent[storageKey] = processedText;
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
const headerTitleFinal = 'MOHSIN AEJAZ RAHMAN <span class="slash">/</span> Portfolio';
const headerTitleDisplay = 'MOHSIN AEJAZ RAHMAN / Portfolio';

function typeHeaderTitle() {
    let index = 0;
    
    return new Promise((resolve) => {
        const typeInterval = setInterval(() => {
            if (!animationsEnabled) {
                clearInterval(typeInterval);
                resolve();
                return;
            }
            if (index < headerTitleDisplay.length) {
                headerTitle.innerHTML = headerTitleDisplay.substring(0, index + 1) + cursorSpan;
                index++;
            } else {
                clearInterval(typeInterval);
                headerTitle.innerHTML = headerTitleFinal;
                resolve();
            }
        }, 30);
    });
}

// Function to animate nav items
async function typeNavItems() {
    const navFragment = document.createDocumentFragment();
    const navElements = [];
    
    // Create all nav elements upfront
    for (let i = 0; i < navItems_list.length; i++) {
        const li = document.createElement('li');
        if (i === 0) li.classList.add('active');
        navElements.push(li);
        navFragment.appendChild(li);
    }
    headerNav.appendChild(navFragment);
    
    // Type each nav item sequentially
    for (let i = 0; i < navItems_list.length; i++) {
        const li = navElements[i];
        const itemText = navItems_list[i];
        let itemIndex = 0;
        
        await new Promise(resolve => {
            const typeItemInterval = setInterval(() => {
                if (!animationsEnabled) {
                    clearInterval(typeItemInterval);
                    li.textContent = itemText;
                    resolve();
                    return;
                }
                if (itemIndex < itemText.length) {
                    li.innerHTML = itemText.substring(0, itemIndex + 1) + cursorSpan;
                    itemIndex++;
                } else {
                    clearInterval(typeItemInterval);
                    li.textContent = itemText;
                    resolve();
                }
            }, 30);
        });
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
    // Show header title instantly (no typing)
    headerTitle.innerHTML = 'MOHSIN AEJAZ RAHMAN <span class="slash">/</span> Portfolio';
    
    // Create and show all nav items instantly (no typing)
    const navFragment = document.createDocumentFragment();
    for (let i = 0; i < navItems_list.length; i++) {
        const li = document.createElement('li');
        li.textContent = navItems_list[i];
        if (i === 0) li.classList.add('active');
        navFragment.appendChild(li);
    }
    headerNav.appendChild(navFragment);
    
    // Show about underline (already active)
    await showAboutUnderline();
    
    // Wait a bit then show about box
    await new Promise(resolve => setTimeout(resolve, 300));
    await showAboutBox();
    
    // Show about text instantly (no typing)
    const aboutTextElement = document.getElementById('aboutText');
    aboutTextElement.innerHTML = aboutText;
    visitedSections.about = true;
    renderedContent.about = aboutText;
    typingProgress.about = aboutText.length;
    
    // Attach event listeners AFTER nav items are created
    attachNavEventListeners();
}

function startAboutTextAnimation() {
    // This function is no longer needed since about text shows instantly
    // Kept for compatibility if called elsewhere
}

// Attach nav event listeners
function attachNavEventListeners() {
    // Cache DOM elements once
    const aboutSection = document.getElementById('aboutSection');
    const techStackSection = document.getElementById('techStackSection');
    const projectsSection = document.getElementById('projectsSection');
    const contactSection = document.getElementById('contactSection');
    const aboutTextElement = document.getElementById('aboutText');
    const techBox1 = document.getElementById('techBox1');
    const techBox2 = document.getElementById('techBox2');
    const techBox3 = document.getElementById('techBox3');
    
    const sections = {
        about: aboutSection,
        techStack: techStackSection,
        projects: projectsSection,
        contact: contactSection
    };
    
    const techBoxes = [techBox1, techBox2, techBox3];
    
    const navItems = document.querySelectorAll('.header-nav li');
    
    navItems.forEach((item) => {
        item.addEventListener('click', async () => {
            const itemText = item.textContent.trim();
            
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            
            // Cancel all active typing timeouts
            clearTimeout(activeTypingTimeouts.about);
            clearTimeout(activeTypingTimeouts.techBox1);
            clearTimeout(activeTypingTimeouts.techBox2);
            clearTimeout(activeTypingTimeouts.techBox3);
            
            // Helper function to hide all sections
            const hideAllSections = async () => {
                aboutSection.classList.remove('active');
                techStackSection.classList.remove('active');
                projectsSection.classList.remove('active');
                contactSection.classList.remove('active');
                
                // If animations are disabled, transition is instant
                if (!animationsEnabled) {
                    return;
                }
                
                const waitTime = Math.max(
                    visitedSections.about ? 0 : 500,
                    visitedSections.techStack ? 0 : 500,
                    visitedSections.projects ? 0 : 500
                );
                if (waitTime > 0) {
                    await new Promise(resolve => setTimeout(resolve, waitTime));
                }
            };
            
            if (itemText === 'About') {
                await hideAllSections();
                if (!visitedSections.about) {
                    aboutTextElement.innerHTML = '';
                }
                aboutSection.classList.add('active');
                
                if (!visitedSections.about) {
                    // If animations disabled, show immediately; otherwise wait 2000ms
                    if (!animationsEnabled) {
                        visitedSections.about = true;
                        typeText(aboutTextElement, aboutText, 20, 'about', false);
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        visitedSections.about = true;
                        typeText(aboutTextElement, aboutText, 20, 'about', false);
                    }
                } else if (typingProgress.about < aboutText.length) {
                    typeText(aboutTextElement, aboutText, 20, 'about', true);
                } else {
                    aboutTextElement.innerHTML = renderedContent.about;
                }
            } else if (itemText === 'Tech Stack') {
                await hideAllSections();
                
                if (!visitedSections.techStack) {
                    techBox1.innerHTML = '';
                    techBox2.innerHTML = '';
                    techBox3.innerHTML = '';
                }
                
                techStackSection.classList.add('active');
                
                if (!visitedSections.techStack) {
                    // If animations disabled, show immediately; otherwise wait 2000ms
                    if (!animationsEnabled) {
                        visitedSections.techStack = true;
                        startTechStackAnimation();
                    } else {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        visitedSections.techStack = true;
                        startTechStackAnimation();
                    }
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
            } else if (itemText === 'Projects') {
                await hideAllSections();
                projectsSection.classList.add('active');
                
                if (!visitedSections.projects) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    visitedSections.projects = true;
                }
            } else if (itemText === 'Contact') {
                await hideAllSections();
                contactSection.classList.add('active');
                
                if (!visitedSections.contact) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    visitedSections.contact = true;
                }
            } else {
                // For Experience, Education, or other sections
                aboutSection.classList.remove('active');
                techStackSection.classList.remove('active');
                projectsSection.classList.remove('active');
                contactSection.classList.remove('active');
                
                aboutTextElement.innerHTML = '';
                techBox1.innerHTML = '';
                techBox2.innerHTML = '';
                techBox3.innerHTML = '';
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
        const title = techBoxTitles[i];
        boxElement.innerHTML = title;
        renderedContent[storageKeys[i]] = title;
        typingProgress[storageKeys[i]] = title.length;
        visitedSections.techStack = true;
    }
}

async function resumeTechStackAnimation() {
    const storageKeys = ['techBox1', 'techBox2', 'techBox3'];
    for (let i = 0; i < 3; i++) {
        const boxElement = document.getElementById(`techBox${i + 1}`);
        const title = techBoxTitles[i];
        boxElement.innerHTML = title;
        renderedContent[storageKeys[i]] = title;
        typingProgress[storageKeys[i]] = title.length;
    }
}

// Animation Toggle Feature
// Animation Toggle Feature - Functions
const animationToggle = document.getElementById('animationToggle');

function updateToggleText() {
    animationToggle.querySelector('span').innerHTML = animationsEnabled 
        ? 'PRESS <i>ESC</i> TO DISABLE ANIMATIONS' 
        : 'PRESS <i>ESC</i> TO ENABLE ANIMATIONS';
}

function disableAllAnimations() {
    animationsEnabled = false;
    
    // Add CSS to disable all animations and transitions
    let disableStyle = document.getElementById('disable-animations-style');
    if (!disableStyle) {
        disableStyle = document.createElement('style');
        disableStyle.id = 'disable-animations-style';
        disableStyle.textContent = `
            * {
                animation: none !important;
                transition: none !important;
                animation-play-state: paused !important;
            }
            @keyframes blink {
                0%, 49% { background-color: transparent; }
                50%, 100% { background-color: transparent; }
            }
        `;
        document.head.appendChild(disableStyle);
    }
    
    // Cancel all active timeouts and intervals
    for (let i = 1; i < 10000; i++) {
        clearTimeout(i);
        clearInterval(i);
    }
    
    // Cancel specific typing timeouts
    clearTimeout(activeTypingTimeouts.about);
    clearTimeout(activeTypingTimeouts.techBox1);
    clearTimeout(activeTypingTimeouts.techBox2);
    clearTimeout(activeTypingTimeouts.techBox3);
    
    // Remove typing cursor from all elements
    const cursors = document.querySelectorAll('.typing-cursor');
    cursors.forEach(cursor => cursor.remove());
    
    // Get all section elements
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const header = document.querySelector('.header');
    const headerTitle = document.getElementById('headerTitle');
    const headerNav = document.getElementById('headerNav');
    const aboutSection = document.getElementById('aboutSection');
    const aboutText = document.getElementById('aboutText');
    const techStackSection = document.getElementById('techStackSection');
    const techBox1 = document.getElementById('techBox1');
    const techBox2 = document.getElementById('techBox2');
    const techBox3 = document.getElementById('techBox3');
    const projectsSection = document.getElementById('projectsSection');
    const contactSection = document.getElementById('contactSection');
    
    // Hide welcome overlay completely
    if (welcomeOverlay) {
        welcomeOverlay.style.visibility = 'hidden';
        welcomeOverlay.style.opacity = '0';
        welcomeOverlay.style.pointerEvents = 'none';
    }
    
    // Show header with full title
    if (header) {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
        header.style.pointerEvents = 'auto';
    }
    
    if (headerTitle) {
        headerTitle.innerHTML = 'MOHSIN AEJAZ RAHMAN <span class="slash">/</span> Portfolio';
    }
    
    // Create and show all nav items
    if (headerNav && headerNav.children.length === 0) {
        const navItems_list = ['About', 'Tech Stack', 'Projects', 'Experience', 'Education', 'Contact'];
        const navFragment = document.createDocumentFragment();
        navItems_list.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            if (index === 0) li.classList.add('active');
            navFragment.appendChild(li);
        });
        headerNav.appendChild(navFragment);
        attachNavEventListeners();
    }
    
    // ONLY show about section, hide all others
    if (aboutSection) {
        aboutSection.style.visibility = 'visible';
        aboutSection.style.opacity = '1';
        aboutSection.classList.add('active');
    }
    
    if (aboutText) {
        aboutText.innerHTML = `Hi! I'm Mohsin Rahman, a student who enjoys exploring the world of data science, machine learning, and software development. I'm studying Information Engineering (B.Sc.) at the Technical University of Munich (TUM), where I focus on software engineering, algorithms, and data structures. I also study Software Development at 42 Heilbronn, a project-based school that teaches through collaboration and hands-on coding.`;
        visitedSections.about = true;
    }
    
    // Hide tech stack section
    if (techStackSection) {
        techStackSection.style.visibility = 'hidden';
        techStackSection.style.opacity = '0';
        techStackSection.classList.remove('active');
    }
    
    const techBoxTitles = ['Front End', 'Back End', 'Tools'];
    if (techBox1) {
        techBox1.innerHTML = techBoxTitles[0];
        renderedContent.techBox1 = techBoxTitles[0];
        typingProgress.techBox1 = techBoxTitles[0].length;
    }
    if (techBox2) {
        techBox2.innerHTML = techBoxTitles[1];
        renderedContent.techBox2 = techBoxTitles[1];
        typingProgress.techBox2 = techBoxTitles[1].length;
    }
    if (techBox3) {
        techBox3.innerHTML = techBoxTitles[2];
        renderedContent.techBox3 = techBoxTitles[2];
        typingProgress.techBox3 = techBoxTitles[2].length;
    }
    visitedSections.techStack = true;
    
    // Hide projects section
    if (projectsSection) {
        projectsSection.style.visibility = 'hidden';
        projectsSection.style.opacity = '0';
        projectsSection.classList.remove('active');
    }
    
    // Hide contact section
    if (contactSection) {
        contactSection.style.visibility = 'hidden';
        contactSection.style.opacity = '0';
        contactSection.classList.remove('active');
    }
    
    updateToggleText();
}

function enableAllAnimations() {
    animationsEnabled = true;
    
    // Remove the disable animations style
    const disableStyle = document.getElementById('disable-animations-style');
    if (disableStyle) {
        disableStyle.remove();
    }
    
    // Restart animations by reloading the page
    // Or you could restart specific animations here
    
    updateToggleText();
}

function toggleAnimations() {
    if (animationsEnabled) {
        disableAllAnimations();
    } else {
        enableAllAnimations();
    }
}

// Listen for ESC key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleAnimations();
    }
});

// Listen for toggle click
animationToggle.addEventListener('click', toggleAnimations);



