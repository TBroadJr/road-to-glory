import Player from "./player.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.player = new Player(this)
  }

  update() {

  }

  draw(context) {
    this.player.draw(context)
  }
}