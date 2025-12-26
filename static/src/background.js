const c = document.querySelector('#background');
const ctx = c.getContext('2d');
const content = document.querySelector('#content');

let grid = Array.from({ length: 125 }, () => (
  Array.from({ length: 125 }, () => Math.random() < 0.125)
));

function clear() {
  const pos = content.getBoundingClientRect();
  const scale = Math.ceil(Math.max(c.width, c.height) / 125);

  const width = Math.round(pos.width  / scale) + 16;
  const height = Math.round(pos.height / scale) + 10;

  const left = Math.round(pos.left / scale) - 6;
  const top = Math.round(pos.top  / scale) - 5;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = x + left;
      const py = y + top;

      if (grid[py]?.[px]) {
        grid[py][px] = false;
      }
    }
  }
}

const neighbors = [
  [-1, -1], [0, -1], [1, -1],
  [-1,  0],          [1,  0],
  [-1,  1], [0,  1], [1,  1],
];

function step() {
  grid = grid.map((row, y) => (
    row.map((cell, x) => {
      const count =
        neighbors.reduce((acc, [dx, dy]) => (
          acc + (grid[y + dy]?.[x + dx] ? 1 : 0)
        ), 0);

      return count === 3 || (cell && count === 2);
    })
  ));
}

function render() {
  ctx.clearRect(0, 0, c.width, c.height);

  ctx.fillStyle =
    getComputedStyle(document.documentElement)
      .getPropertyValue('--bg2')
      .trim();

  const scale = Math.ceil(Math.max(c.width, c.height) / 125);

  grid.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell) {
        ctx.fillRect(c * scale, r * scale, scale, scale);
      }
    });
  });
}

function resize() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  render();
}

resize();
window.addEventListener('resize', resize);

function loop() {
  clear();
  step();
  render();
}

loop();
setInterval(loop, 125);
