import Game from "./game-components/game.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 500;

const game = new Game(canvas.width, canvas.height)
