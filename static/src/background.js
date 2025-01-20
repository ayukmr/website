const c = document.querySelector('#background');
const ctx = c.getContext('2d');
const content = document.querySelector('#content');

let grid = Array.from(
  { length: 125 },
  () => Array.from(
    { length: 125 },
    () => Math.random() > 0.875
  )
);

function clear() {
  const pos   = content.getBoundingClientRect();
  const scale = Math.ceil(Math.max(c.width, c.height) / 125);

  const width  = Math.round(pos.width  / scale) + 16;
  const height = Math.round(pos.height / scale) + 10;

  const left = Math.round(pos.left / scale) - 6;
  const top  = Math.round(pos.top  / scale) - 5;

  Array.from({ length: height }).forEach((_, y) => {
    Array.from({ length: width }).forEach((_, x) => {
      const pX = x + left;
      const pY = y + top;

      grid[pY][pX] = false;
    });
  });
}

function step() {
  grid = grid.map((row, r) => {
    return row.map((cell, c) => {
      const neighbors =
        [-1, 0, 1].flatMap((dr) => (
          [-1, 0, 1].map((dc) => (
            (dr || dc) && grid[r + dr]?.[c + dc] ? 1 : 0
          ))
        )).reduce((a, b) => a + b);

      return neighbors === 3 || (cell && neighbors === 2) ? 1 : 0;
    });
  });
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
  c.width  = window.innerWidth;
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
