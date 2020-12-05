class Bob {
	constructor(x,y,r)
	{
		var options={
			isStatic: false,
			restitution:0.8,
			friction: 1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobPos = this.body.position

			push()
			translate(bobPos.x,bobPos.y)
			ellipseMode(RADIUS)		
			fill(66, 185, 245);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}