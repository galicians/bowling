function Game() {
	this.frames = []
	this.fillFrames()
	var initialFrame = 0
	this.currentFrame = this.frames[initialFrame]
	this.player
}

function Pin() {}

function Player() {
	this.score = 0
}

function Frame() {
	this.pins = []
	this.rolls = 2
	for(var i=0; i < 10; i++ ) { this.pins.push(new Pin) }
}

Game.prototype.fillFrames = function() {
	for(var i =0; i < 10; i++ ) { this.frames.push(new Frame) }
}

Game.prototype.addPlayer = function(player) {
	this.player = player
}

Game.prototype.isFrameNumber = function() {
	var roundCero = 1
	return this.frames.indexOf(this.currentFrame)  + roundCero
}