class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1.0
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        //us push and pop so that the changes apply only to the boxes not to the entire game.
        push();
        //remaps the position of the moving boxes on the canvas hence put 0,0 in rect for position.
        translate(pos.x,pos.y)
        //rotate with an angle.
        rotate(angle)
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}