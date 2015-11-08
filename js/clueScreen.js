
var clueScreen = Class.create(Scene, {
     // screen to manipulate clues 
    initialize: function() {
    	this.name = "clueScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/woodBG.png']); 
        
        //text of clue goes here
        var clueTextA = makeLabel("", 20, 340, "monospace", 16, "White", 160, 170, "Black");
        var clueTextB = makeLabel("", 220, 340, "monospace", 16, "White", 160, 170, "Black");
        
       	var evaluateButton = makeButton(" Evaluate ", 50, 515, 100, 35);
   		var returnButton = makeButton(" Return ", 240, 515, 100, 35);
        
	   	this.addEventListener(Event.TOUCH_END, function(e) {
	   		
		    if (game.clueDataA == null && game.clueDataB == null) {
		    	clueTextA.text = "";
		    	clueTextB.text = "";
		    } else if (game.clueDataA != null && game.clueDataB == null) {
		    	clueTextA.text  = wordWrap(game.clueDataA.text, 150, 12);
		     } else {
		    	clueTextB.text = wordWrap(game.clueDataB.text, 150, 12);
		    } 
		});
	   	
	   	
	   	evaluateButton.addEventListener(Event.TOUCH_END, function(e) {
			evaluateClues();
	   	});
		returnButton.addEventListener(Event.TOUCH_END, function(e) {
			game.popScene();
			game.currentScene.restartMusic();
	   	});
	   	
        this.addChild(bg);  
        this.addChild(evaluateButton); 
        this.addChild(returnButton);
        this.addChild(clueTextA);
        this.addChild(clueTextB);
        
        this.addEventListener(Event.ENTER, function(e) {
        	placeClues();
        });
        
    }
});

	
//this function fills this screen with clues
function placeClues() {
	var game;
   	game = Game.instance;
   	 //get available clue data
   	 var currentClueDataArray = [];
     currentClueDataArray = getAvailableClues();
     //create array of objects and add to screen
      var clueLabelArray = [];
     for (var i = 0; i < currentClueDataArray.length; i++) {
       	clueLabelArray[i] = new clueType(currentClueDataArray[i]);
       	clueLabelArray[i].x = (i * 60) + 20 - (Math.floor(i/6) * 360);
       	clueLabelArray[i].y = (Math.floor(i/6) * 60) + 80;
       	if (clueLabelArray[i].available == 1) {
       		game.currentScene.addChild(clueLabelArray[i]);
       	}
     }
}	
	
//this function checks the data if the evaluate button is pressed
function evaluateClues() {
	var game;
   	game = Game.instance;
	if (game.clueDataB == null) {
		game.clueDataA = null;
		game.clueDataB = null;
		placeClues();  
	} else if (game.clueDataA.partner == game.clueDataB.id) {
		updateClueAvailability(game.clueDataA.revealed);
		game.assets['res/sounds/tone.mp3'].play();
		placeClues();
		//certain clues trigger other event and words
		var action, ending;
		for (var i = 0; i < game.revealedClueTriggers.length; i++) {
			if (game.revealedClueTriggers[i].clueId == game.clueData[game.clueDataA.revealed].id) {
				action = game.revealedClueTriggers[i].action;
				if (action == 'triggerEnd') {
					ending = game.revealedClueTriggers[i].ending;
					game.endingsTriggered[ending].status = '1';
				}
			}
		}
	} else {
		game.assets['res/sounds/slap.mp3'].play();
		game.clueMistakesMade++;
		//gameend for making too many mistakes
		if (game.clueMistakesMade > 4) {
			game.endingsTriggered[tooManyMistakesEnding].status = '1';
		}
	}
}


//this is a clue object
var clueType = Class.create(Sprite, {
	// Constructor
	initialize: function(clueData) {
		var game;
   	 	game = Game.instance;
		
        Sprite.apply(this,[60, 60]);
		this.image = game.assets['res/question.png'];
		this.x = 0;
		this.y = 0;
		
		//clue info 
		this.clueData = clueData;
		this.id = clueData.id;
		this.available = clueData.available;
		this.partner = clueData.partner;
		this.revealed = clueData.revealed;
		this.wordRevealed = clueData.wordRevealed;
		this.win = clueData.win;
		this.clueText = clueData.text;
		
		//add actionlistener to onlick
		this.addEventListener(Event.TOUCH_END, function(e) {
			
		    if (game.clueDataA == null && game.clueDataB == null) {
		    	this.image = game.assets['res/questionHighlighted.png'];
		    	game.clueDataA = this.clueData;
		    } else if (game.clueDataA != null && game.clueDataB == null
		    	&& (this.id != game.clueDataA.id)) {
		    	this.image = game.assets['res/questionHighlighted.png'];
		    	game.clueDataB = this.clueData;
		     } else {
		     	//unhilight everything
		     	placeClues();
		    	game.clueDataA = null;
		    	game.clueDataB = null;
		    } 
		});
	}
});



