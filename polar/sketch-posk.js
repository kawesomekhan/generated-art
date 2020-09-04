

var sketch = function (a) {
    a.canvasSize = 256;
    a.tStep0 = 0.25;
    a.tStepStep = 0.0005;
    a.tStepMax = 0;
    a.tStep = a.tStep0;
    a.isFwd = true;
    a.shouldPause = false;

    a.setup = function () {
        a.canvas = a.createCanvas(a.canvasSize, a.canvasSize);
        a.canvas.parent('polar-posk');
        a.canvas.mousePressed(a.setPause);
        a.canvas.mouseReleased(a.clearPause);
        a.tStepMax = 2 * a.PI;
        a.noCursor();
    }

    a.draw = function () {
        if (a.shouldPause) {
            return;
        }
        a.background(237, 226, 187);

        a.originX = a.canvasSize / 2;
        a.originY = a.canvasSize / 2;
        a.tMax = 100 * a.PI;
        a.k = 3;
        a.r = 0;
        a.t = 0;

        a.prevX = a.originX;
        a.prevY = a.originY;
        a.currX = 0;
        a.currY = 0;
        while (a.t < a.tMax) {
            a.r = a.t / a.k;
            a.currX = a.r * a.cos(a.t) + a.originX;
            a.currY = a.r * a.sin(a.t) + a.originY;
            a.line(a.prevX, a.prevY, a.currX, a.currY);

            a.prevX = a.currX;
            a.prevY = a.currY;
            a.t += a.tStep;
        }

        if (a.isFwd) {
            a.tStep += a.tStepStep;
            a.isFwd = !(a.tStep > a.tStepMax);
        }
        else {
            a.tStep -= a.tStepStep;
            a.isFwd = (a.tStep < a.tStep0);
        }
    }

    a.setPause = function () {
        a.shouldPause = true;
    }

    a.clearPause = function () {
        a.shouldPause = false;
    }
}

var sketchPosK = new p5(sketch);
