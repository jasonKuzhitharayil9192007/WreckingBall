class Rope
{

  constructor(body,point)
   {
        var options =
        {
            bodyA: body,
            pointB: point,
            length: 250,
            stiffness: 1.2
        };
        this.rope = Constraint.create(options);
        this.pointB = point;
      World.add(world,this.rope);
   }

   display()
   {
      if(this.rope.bodyA)
      {
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          stroke(48,22,8);
          strokeWeight(5);
          line(pointB.x,pointB.y,pointA.x,pointA.y);
      }
   }

}