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

describe("To play a bowling game we need", function() {
	


	describe("set up the playing area", function() {

		var game, 
			pin, 
			player, 
			frame;

			beforeEach(function() {
				game = new Game
				pin = new Pin
				player = new Player
				frame = new Frame
			})


		it("should be defined", function() {
			expect(game).toBeDefined()
		})

		it("should have pins", function() {
			expect(pin).toBeDefined()
		})

		it("should have a player", function() {
			expect(player).toBeDefined()
		})

		it("should be able to accept a player", function() {
			game.addPlayer(player)
			expect(game.player).toEqual(player)
		})

		it ("should have frames", function() {
			expect(frame).toBeDefined()
		})

		it("initial number of rolls per frame is should be two", function() {
			expect(frame.rolls).toEqual(2)
		})

		it("the number of frames per game by default is 10", function() {
			expect(game.frames.length).toEqual(10)
		})

		it("the number of inital pins at the begining of a frame is 10", function() {
			expect(frame.pins.length).toEqual(10)	
		})

		it("each player should have a initial score of cero points", function() {
			expect(player.score).toBeDefined
		})


	})

	describe("the rules of the bowling game", function() {

		it("should start at the initial frame", function() {
			game = new Game
			expect(game.currentFrame).toEqual(game.frames[0])
		})

		it("the game should know the number of the current frame", function() { 
			game = new Game
			frame = new Frame
			expect(game.isFrameNumber()).toEqual(1)
		})




	})
})









