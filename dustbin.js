class dustbin
{
	constructor(x,y)
	{
		var option={
			isStatic : true
		}
		
		this.body=Bodies.rectangle(x,y,300,300);
		this.image=loadImage("dustbingreen.png");

	}
	display()
	{
			var pos=this.body.position;
			
			

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,0,0,300,300);
			pop()

			
			
	}

}