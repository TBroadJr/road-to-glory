export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 90;
    this.x = 0;
    this.y = this.game.height - this.height;
    // vertical speed
    this.vy = 0;
    this.weight = 0.5;
    this.image = document.getElementById("player");
    this.speed = 0;
    this.maxSpeed = 10;
  }

  update(input) {
    // horizontal Movement
    this.x += this.speed;
    if (input.includes("ArrowRight")) {
      this.speed = this.maxSpeed;
    } else if (input.includes("ArrowLeft")) {
      this.speed = -this.maxSpeed;
    } else {
      this.speed = 0;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
    }
    // horizontal Movement
    if (input.includes("ArrowUp") && this.onGround()) {
      this.vy -= 20;
    }
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }

  }

  draw(context) {
    context.drawImage(this.image, 0, 0, 100, 90, this.x, this.y, this.width, this.height);
  }

  // Utility function
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}