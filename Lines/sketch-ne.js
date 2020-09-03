
var sketch = function (a) {
    a.screenSize = 256;
    a.matWidth = 16;
    a.subdivisions = 30;

    a.setup = function () {
        a.canvas = a.createCanvas(a.screenSize, a.screenSize);
        a.canvas.parent('lines-ne');
        a.canvas.mousePressed(a.updateLines);
        a.updateLines();
        a.noCursor();
    }

    a.updateLines = function () {
        a.background(237, 226, 187);

        a.cellSize = (a.screenSize - (a.matWidth * 2)) / a.subdivisions;
        a.cellX = 0;
        a.cellY = 0;
        for (a.r = 0; a.r < a.subdivisions; a.r++) {
            for (a.c = 0; a.c < a.subdivisions; a.c++) {
                // Calculate cell center
                a.cellX = a.matWidth + a.cellSize * a.r + a.cellSize / 2;
                a.cellY = a.matWidth + a.cellSize * a.c + a.cellSize / 2;
                // Draw Line
                if (a.random(1) > 0.9) {
                    a.line(a.cellX - a.cellSize / 2, a.cellY - a.cellSize / 2, a.cellX + a.cellSize / 2, a.cellY + a.cellSize / 2);
                }
                else {
                    a.line(a.cellX + a.cellSize / 2, a.cellY - a.cellSize / 2, a.cellX - a.cellSize / 2, a.cellY + a.cellSize / 2);
                }
            }
        }
    }
}

var myLinesNE = new p5(sketch);

