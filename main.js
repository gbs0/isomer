var iso = new Isomer(document.getElementById("art"));

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);
var black = new Color(20, 20, 20);

iso.add(Shape.Prism(Point.ORIGIN, 8, 8, 1));
// iso.add(Shape.Pyramid(Point(0, 2, 1)), black);
iso.add(Shape.Prism(Point(2, 0, 1)), blue);
iso.add(Shape.Prism(Point(1, 0, 1)), blue);
iso.add(Shape.Prism(Point(1, 1, 1)), blue);
iso.add(Shape.Prism(Point(1, 0, 2)), blue);
iso.add(Shape.Prism(Point(6, 2, 0)), red);
iso.add(Shape.Prism(Point(6, 3, 0)), red);

iso.add(Shape.Prism(Point(5, 0, 1)), red);

var step;
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
	iso.add(Shape.Prism(Point((step * -1), step, 0)), black);  
	iso.add(Shape.Prism(Point((step * -1 / 2), step, 5)), black);  
	console.log(step);
}
