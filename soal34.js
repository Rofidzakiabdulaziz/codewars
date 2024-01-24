function cutCube(volume, n) {
    const cubeRoot = Math.cbrt(volume);
    const sideLength = Math.cbrt(volume / n);
  
    return cubeRoot % 1 === 0 && sideLength % 1 === 0;
  }