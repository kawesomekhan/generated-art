var screenSize = 256;
var matWidth = 16;
var subdivisions = 30;

function setup() {
  createCanvas(screenSize, screenSize);
}

function mousePressed() {
  if (true)
    {
    background(237, 226, 187);

    var cellSize = (screenSize - (matWidth * 2)) / subdivisions;
    var cellX = 0;
    var cellY = 0;
    for (var r = 0; r < subdivisions; r++)
    {
      for (var c = 0; c < subdivisions; c++)
      {
        // Calculate cell center
        cellX = matWidth + cellSize * r + cellSize / 2;
        cellY = matWidth + cellSize * c + cellSize / 2;
        // Draw Line
        if (random(1) > 0.5)
        {
          line(cellX - cellSize / 2, cellY - cellSize / 2, cellX + cellSize / 2, cellY + cellSize / 2);
        }
        else
        {
          line(cellX + cellSize / 2, cellY - cellSize / 2, cellX - cellSize / 2, cellY + cellSize / 2);
        }
      }
    }
  }
}

