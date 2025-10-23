const colors = [
    '#0f2820',  // deepest green (nearly black)
    '#1a3d2e',  // deepest green (from square)
    '#234a35',  // very dark green
    '#2d5a3d',  // darkest green
    '#5a7a45',  // medium green
    '#8a8d3a',  // yellow-green
    '#b8b856',  // light yellow (from square)
    '#d4d670',  // lighter yellow
    '#e5e685',  // brightest yellow
];

const grid = document.getElementById('grid');
const cells = [];

// Create 100 cells (10x10)
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
        // Create different timing for each cell based on position
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

// Initialize with random colors
cells.forEach(cell => {
    cell.style.backgroundColor = getRandomColor();
});

// Start animation
animateCells();
