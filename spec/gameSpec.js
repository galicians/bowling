
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

		it("the player should be able to accept a name", function() {
			player.name = "Big Lebowski"
			game.player = player
			expect(game.player.name).toEqual("Big Lebowski")
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

		function strikeAndChangeFrame(times) {
			for( var i = 0; i < times; i++) {
			game.rollTheBall(10)
			game.changeFrame() }
		}

		function moveToFrameTen() {
			for( var i = 0; i < 9; i++) {
				game.changeFrame() }
		}

		function spareAndChangeFrame() {
			game.rollTheBall(5)
			game.rollTheBall(5)
			game.changeFrame()
		}

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

		it("should change the frame after a strike, even with a roll left", function() {
			game.remainingRolls = 2
			game.rollTheBall(10)
			expect(game.currentFrame).not.toEqual(frame)
		})

		it("should be able to detect a spare", function() {
			game.rollTheBall(7)
			game.rollTheBall(3)
			expect(game.isSpare()).toBeTruthy()
		})

		it("should be able to detect a strike", function() {
			game.rollTheBall(10)
			expect(game.isStrike()).toBeTruthy()
		})

		it("should not assign a bonus if there are pins left at the end of the frame", function() {
			game.rollTheBall(5)
			game.rollTheBall(3)
			expect(game.bonus).toEqual([1])
		})

		it("should assign a double bonus after a strike", function() {
			game.rollTheBall(10)
			expect(game.bonus).toEqual([2,2])
		})

		it("should assign a bonus after a spare", function() {
			game.rollTheBall(6)
			game.rollTheBall(4)
			expect(game.bonus).toEqual([2])
		})

		it("should update the score of the player after each roll", function() {
			game.player = player
			game.rollTheBall(7)
			expect(game.player.score).toEqual(7)
		})

		it("should double the points after a strike", function() {
			game.player = player
			strikeAndChangeFrame(1)
			game.rollTheBall(5)
			expect(game.player.score).toEqual(20)
		})

		it("should double the points after a spare", function() {
			game.player = player
			spareAndChangeFrame()
			game.rollTheBall(3)
			expect(game.player.score).toEqual(16)
		})

		it("the maximun number of bonus in a frame is 3", function() {
			strikeAndChangeFrame(5)
			expect(game.player.score).toEqual(80)
		})

		it("knows when it is the 10th frame", function() {
			moveToFrameTen()
			expect(game.isFrameTen()).toBeTruthy()
		})

		it("knows when a Pefect Game took place", function() {
			moveToFrameTen()
			game.player.score = 300
			expect(game.isPerfectGame()).toBeTruthy()
		})

		it("knows when a Cutter Game took plae", function() {
			moveToFrameTen()
			game.player.score = 0
			expect(game.isCutterGame()).toBeTruthy()
		})

	})
})









