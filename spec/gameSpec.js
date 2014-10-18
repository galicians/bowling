
//pending:
// 	gutter game(0) vs perfect game(300 pints)
// 	30 points as max / frame
//exception pinsDown > 10
//player name
//10th frame
//change the strike and spare to the frame


describe("To play a bowling game we need:", function() {
	


	describe("To set up the playing area", function() {

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


		it("game should be defined", function() {
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

	describe("the rules: ", function() {

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

		it("it should keep the count of the remaining pins after 2 rolls", function() {
			game.rollTheBall(4)
			game.rollTheBall(5)
			expect(game.currentFrame.numberRemainingPins()).toEqual(1)
		})

		it("should keep the count of remaining rolls in the frame", function() {
			expect(game.currentFrame.remainingRolls).toEqual(2)
			game.rollTheBall(7)
			expect(game.currentFrame.remainingRolls).toEqual(1)
		})

		it("should update the score of the player after each roll", function() {
			game.player = player
			expect(game.player.score).toEqual(0)
			game.rollTheBall(7)
			expect(game.player.score).toEqual(7)
		})

		it("should change the frame after a strike, even with a roll left", function() {
			game.remainingRolls = 2
			game.rollTheBall(10)
			expect(game.currentFrame).not.toEqual(frame)
		})

		it("not possible to knock over more pins than the remaining", function() {
			game.rollTheBall(9)
			// game.rollTheBall(2)
			// expect(function(){game.rollTheBall(2)}).toThrow("error")
		})

		it("should be able to detect a spare", function() {
			game.rollTheBall(7)
			game.rollTheBall(3)
			expect(game.isSpare()).toBeTruthy()
		})

		it("should be able to detect a strike", function() {
			expect(game.isStrike(10)).toBeTruthy()
		})

		it("should assign a double bonues after a strike", function() {

		})

		it("should assign a bonus after a spare", function() {

		})

	})
})









