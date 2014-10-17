// player
// 	scores
// 	pins
// 	strikes vs spares
// 	10 frames --> 10 pins
// 	same frame
// 	1 roll  --> strike 
// 	2rolls: 2.1 --> spares 2.2.a --> spares 2.2.b --> strike
// 	score  = down pins + strike bonus previous round
// 	gutter game(0) vs perfect game(300 pints)
// 	30 points as max / frame

describe("game", function() {
	


	describe("setting up the playing area", function() {

		it("should be defined", function() {
			var game = new Game
			expect(game).toBeDefined()
		})

		it("should have pins", function() {
			var pin = new Pin
			expect(pin).toBeDefined()
		})

		it("should have a player", function() {
			var player = new Player
			expect(player).toBeDefined()
		})

		it ("should have frames", function() {
			frame = new Frame
			expect(frame).toBeDefined()
		})

		it("the number of frames per game by default is 10", function() {
			var game = new Game
			expect(game.frames.length).toEqual(10)
		})

		it("the number of inital pins at the begining of a frame is 10", function() {
			var frame = new Frame
			expect(frame.pins.length).toEqual(10)	
		})

		

	})
})









