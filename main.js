var iso = new Isomer(document.getElementById("art"));

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);
var black = new Color(20, 20, 20);

iso.add(Shape.Prism(Point.ORIGIN, 5, 5, 1));
iso.add(Shape.Pyramid(Point(0, 2, 1)), black);
iso.add(Shape.Prism(Point(2, 0, 1)), blue);