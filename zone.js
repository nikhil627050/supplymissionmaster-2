class zone{
constructor(x,y,width,height){
    var options={
        restitution:0.1,
        friction:0.2,
        density:5
                     }


    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
   World.add(world,this.body);
}

display(){
    var pos=this.body.position
    rectMode(CENTER);
    fill(255)
    rect(pos.x,pos.y,this.width,this.height)



}
}