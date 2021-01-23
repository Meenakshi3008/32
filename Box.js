class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibility = 225;
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/box.png");

    World.add(world, this.body);
  }

  score() {
    if(this.visibility < 0 && this.visibility >- 105) {
      score ++;
    }
  }

  display() {
    //console.log(this.body.speed);
    if(this.body.speed < 5) {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      pop();
    }
  }
};