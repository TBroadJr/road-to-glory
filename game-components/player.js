export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 90;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.image = document.getElementById("player");
  }

  update() {
    //this.x++
  }

  draw(context) {
    context.drawImage(this.image, 0, 0, 100, 90, this.x, this.y, this.width, this.height);
  }
}