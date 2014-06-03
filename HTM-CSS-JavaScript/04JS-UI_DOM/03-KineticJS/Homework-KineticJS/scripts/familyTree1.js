window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 578,
        height: 220
    });
    var layer = new Kinetic.Layer();

    var simpleText = new Kinetic.Text({
        x: stage.width() / 2,
        y: 15,
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green'
    });


    //
    //var layer, rect, stage;
    //stage = new Kinetic.Stage({
    //    container: 'canvas-container',
    //    width: 500,
    //    height: 500
    //});
    //layer = new Kinetic.Layer();
    //rect = new Kinetic.Rect({
    //    x: 10,
    //    y: 10,
    //    width: 100,
    //    height: 50,
    //    fill: 'yellowgreen',
    //    stroke: 'black',
    //    strokeWidth: 4
    //});
    //layer.add(rect);
    //return stage.add(layer);
};