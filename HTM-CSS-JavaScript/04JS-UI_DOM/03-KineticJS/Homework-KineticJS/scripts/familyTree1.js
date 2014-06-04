window.onload = function () {
    var familyMembers = [{
        mother: 'Maria Petrova',
        father: 'Georgi Petrov',
        children: ['Teodora Petrova', 'Peter Petrov']
    }, {
        mother: 'Petra Stamatova',
        father: 'Todor Stamatov',
        children: ['Maria Petrova']
    }]
    //set the root tree manually 
    var root = [familyMembers[1].father, familyMembers[1].mother];
    var firstLevel = [familyMembers[0].father, familyMembers[0].mother];
    var secondLevel = familyMembers[0].children;

    var constants = {
        kinectColor: 'yellowgreen',
        kinectTextColor: 'black',
        innerRectHeight: 50,
        innerRectWidth: 200,
        innerTextFont: 18,
        arrowSize: 5,
        beizerStrokeWidth: 2,
    };

    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 1000,
        height: 800
    });
    var layer = new Kinetic.Layer();

    // combined function to draw a rectangle with text in it
    function innerGetRectWithText(x, y, cornerRad, text) {
        var currRect = new Kinetic.Rect({
            x: x,
            y: y,
            width: constants.innerRectWidth,
            height: constants.innerRectHeight,
            strokeWidth: 3,
            stroke: constants.kinectColor,
            cornerRadius: cornerRad,
        });
        var currText = new Kinetic.Text({
            x: x,
            y: y + (constants.innerRectHeight / 3),
            text: text,
            fontSize: constants.innerTextFont,
            fontFamily: 'Calibri',
            width: constants.innerRectWidth,
            align: 'center',
            fill: constants.kinectTextColor,
        });

        layer.add(currRect);
        layer.add(currText);
    }


    function makeFemaleRect(x, y, name) {
        innerGetRectWithText(x, y, 25, name);
    }

    function makeMaleRect(x, y, name) {
        innerGetRectWithText(x, y, 10, name);
    }

    // build links between child and parents
    function makeConnection(leftParentX, leftParentY, childX, childY) {
        var startX = leftParentX + constants.innerRectWidth / 2;
        var startY = leftParentY + constants.innerRectHeight;
        var endX = childX + constants.innerRectWidth / 2;
        var endY = childY;
        innerGetBezierLine(startX, startY, endX, endY, layer);

        function innerGetBezierLine(stX, stY, eX, eY) {
            var beizerCPdx = Math.abs(eX - stX) / 10;
            var beizerCPdY = Math.abs(eY - stY) * 0.95;
            var currLine = new Kinetic.Shape({
                drawFunc: function (context) {
                    context.beginPath();
                    context.moveTo(stX, stY);
                    context.bezierCurveTo(stX + beizerCPdx, stY + beizerCPdY,
                                          eX - beizerCPdx, eY - beizerCPdY,
                                          eX, eY);
                    context.stroke(this);
                    context.beginPath();
                    context.lineTo(eX + constants.arrowSize, eY - constants.arrowSize);
                    context.lineTo(eX - constants.arrowSize, eY - constants.arrowSize);
                    context.lineTo(eX, eY);
                    context.fill(this);
                },
                strokeWidth: constants.beizerStrokeWidth,
                fill: constants.kinectColor,
                stroke: constants.kinectColor,
            });

            layer.add(currLine);
        }
    }

    //draw rectangles
    makeMaleRect(200, 0, root[0]);
    makeFemaleRect(450, 0, root[1]);
    makeMaleRect(0, 100, firstLevel[0]);
    makeFemaleRect(250, 100, firstLevel[1]);
    makeMaleRect(50, 200, secondLevel[1]);
    makeFemaleRect(300, 200, secondLevel[0]);
    //draw lines
    makeConnection(200, 0, 250, 100);
    makeConnection(450, 0, 250, 100);
    makeConnection(250, 100, 300, 200);
    makeConnection(250, 100, 50, 200);
    makeConnection(0, 100, 50, 200);

    stage.add(layer);
};