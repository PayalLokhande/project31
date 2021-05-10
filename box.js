class box {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
           
        }
        this.image=loadImage("block.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255;
        
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<3){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y)
        }
        else{
          World.remove(world,this.body)
          push()
          this.visiblity=this.visiblity-5
          tint(255,this.visiblity)
          image(this.image,this.body.position.x,this.body.position.y)
          pop ()
        }
      }

    }
      
    

  
  