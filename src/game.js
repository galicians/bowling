function Game() {
	this.frames = []
	this.fillFrames()
	var initialFrame = 0
	this.currentFrame = this.frames[initialFrame]
	this.player
}

function Pin() {
	this.isKnocked = false
}

function Player() {
	this.score = 0
}

function Frame() {
	this.pins = []
	this.pinsDown = 0
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

Game.prototype.rollTheBall = function(pinsDown) {
	for (var i = 0; i < pinsDown; i++ ) {
		this.currentFrame.pins[i].down()
	}

}

Frame.prototype.isStandingPins() = function() {
	
}

Pin.prototype.down = function() {
	this.isKnocked = true
}

