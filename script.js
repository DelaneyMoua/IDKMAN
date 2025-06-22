function setup() //called once when the program runs
{
createCanvas(400,400);
background(110);
}

function draw() //this runs a loop to update display
{
point(150,250);
line(0,400,400,0); /*x1 and y1 is the first point of the line,
and then x2 and y2 is the ending point of the line */
rect(0,0,100,100);
rect(100,100,100,100);
rect(200,200,100,100);
rect(300,300,100,100);
}

