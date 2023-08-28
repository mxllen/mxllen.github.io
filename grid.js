let grid = ''
const sizeX = 60;
const sizeY = 8;

for (let y = 0; y < sizeY; y++) {
  for (let x = 0; x < sizeX; x++) {
    if ((x + y) % 2 == 0) {
      grid += ' ';
    } else { 
      grid += '■';
    }
  }
  grid += '\n';
}

console.log(grid);