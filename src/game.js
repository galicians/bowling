function Game() {
	this.frames = []
	for(var i =0; i < 10; i++ ) { this.frames.push(new Frame) }
}

function Pin() {}

function Player() {}

function Frame() {
	this.pins = []
	for(var i=0; i < 10; i++ ) { this.pins.push(new Pin) }
}

