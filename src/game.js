function Game() {
	this.frames = []
	for(var i =0; i < 10; i++ ) { this.frames.push(new Frame) }
	this.player
}

function Pin() {}

function Player() {
	this.score = 0
}

function Frame() {
	this.pins = []
	this.roll = 2
	for(var i=0; i < 10; i++ ) { this.pins.push(new Pin) }
}

Game.prototype.addPlayer = function(player) {
	this.player = player
}