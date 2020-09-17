class box{
constructor (x,y,width,height) {

var options= {
    restituion:4
 //   isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body)

}
display(){
var pos=this.body.position
rectMode(CENTER);
fill("white");
rect(pos.x,pos.y,this.width,this.height);

}


}