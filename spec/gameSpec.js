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

		it("a pin won't be knocked down when initialized", function() {
			expect(pin.isKnocked).toBeDefined()
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

		it ("all pins should be standing at the begining of each frame", function() {
			expect(frame.pinsDown).toEqual(0)
		})

		it("initial number of rolls per frame is should be two", function() {
			expect(frame.remainingRolls).toEqual(2)
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

	describe("the rules of the bowling game:", function() {

		var game, 
		pin, 
		player, 
		frame;

		beforeEach(function() {
			game = new Game
			pin = new Pin
			onlyPlayer = new Player
			frame = new Frame
		})

		it("it should start at the initial frame", function() {
			expect(game.currentFrame).toEqual(game.frames[0])
		})

		it("the game should know the number of the current frame", function() { 
			expect(game.frameNumber()).toEqual(1)
		})

		it("a pin can be knocked down", function() {
			pin.down()
			expect(pin.isKnocked).toEqual(true)
		})

		it("when we knock down pins the current frame knows number of pins have been knocked over", function() {
			game.rollTheBall(4)
			expect(game.currentFrame.numberPinsKnockOver()).toEqual(4)
		})

		it("when we knock down pins the current frame knows number of remaining pins", function() {
			game.rollTheBall(4)
			expect(game.currentFrame.numberRemainingPins()).toEqual(6)
		})

		it("should keep the count of remaining rolls in the frame", function() {
			expect(game.currentFrame.remainingRolls).toEqual(2)
			game.rollTheBall(8)
			expect(game.currentFrame.remainingRolls).toEqual(1)
		})


	})
})









