

var titleScreen = Class.create(Scene, {
     // the title menu   
    initialize: function() {
    	this.name = "titleScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
       
		var bg = makeBackground(game.assets['res/titleBG.png']);
		var mainTitleLabel = makeLabel("The Stranger<br><br>In Town", 50, 150, "Impact", 42, "LightYellow", 300, 50, "", "left");
		var subTitleLabel = makeLabel("The Glade Chronicles: Prologue", 50, 270, "Impact", 22, "PowderBlue ", 300, 50, "", "left");
		var siteLink = makeLabel("an Aphorism44 game", 175, 300, "Comic Sans MS", 14, "Khaki", 170, 12, "", "left");
		
        var startButton = makeButton(" Start New Game ", 140, 350, 200, 75);
        var instructionButton = makeButton(" Instructions ", 140, 400, 200, 75);
        var creditsButton = makeButton(" Credits ", 140, 450, 200, 75);
        var loadButton = makeButton(" Load Game ", 140, 500, 200, 75);
        
        //uncomment eraseButton lines to test HTML5 localStorage
        //var eraseButton = makeButton(" Erase ", 20, 500, 200, 75);
       // eraseButton.addEventListener(Event.TOUCH_END, function(e) {
	   //    clearSavedData();
	   //	});
        
        this.addChild(bg);   
        this.addChild(mainTitleLabel);
        this.addChild(subTitleLabel);
        this.addChild(siteLink);
        this.addChild(startButton);
        this.addChild(instructionButton);
        this.addChild(creditsButton);
        this.addChild(loadButton);
        
       // this.addChild(eraseButton);
                
        //add event listeners
		siteLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://www.aphorism44.com");
		});
		startButton.addEventListener(Event.TOUCH_END, function(e) {
	       var scene = new openingScreen();
	       //var scene = new futureOpeningScreen();
	       //var scene = new talkScreen(4);
	       //var scene = new interactScreen("jera", 1);
	       //var scene = new gameScreen(1, 4, 5, 0);
			//var scene = new clueScreen();
			//var scene = new creditScreen();
			game.pushScene(scene); 
	   	});
	   	instructionButton.addEventListener(Event.TOUCH_END, function(e) {
	       var scene = new explainScreen(0);
			game.pushScene(scene); 
	   	});
	   	creditsButton.addEventListener(Event.TOUCH_END, function(e) {
	       var scene = new linkScreen(0);
			game.pushScene(scene); 
	   	});
	   	loadButton.addEventListener(Event.TOUCH_END, function(e) {
	   		loadGame();  
	   	});
		
    	}
	});

var linkScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function() {
    	this.name = "linkScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/titleBG.png']);
		
		var aerinImg = makeImage(game.assets['res/aerinboy.png'], 150, 150, 25, 75);
		var bandImg = makeImage(game.assets['res/album.png'], 175, 175, 200, 75);
		
		var aerinLabel = makeLabel("AerinBoy - Artist", 25, 235, "monospace", 14, "White", 350, 30);
		var bandLabel = makeLabel("Exit Vehicles - Music", 200, 260, "monospace", 14, "White", 350, 30);
		
		var otherLabel = makeLabel("Also thanks to:", 50, 300, "monospace", 14, "White", 350, 30);
		var spriteLink = makeLabel("Sprite Creator 3", 50, 340, "monospace", 14, "White", 350, 30);
		var hyptosisLink = makeLabel("Hyptosis (OpenGameArt.org)", 50, 360, "monospace", 14, "White", 350, 30);
		var enchantLink = makeLabel("enchant.js", 50, 380, "monospace", 14, "White", 350, 30);
        var commonsLink = makeLabel("Wikimedia Commons", 50, 400, "monospace", 14, "White", 350, 30);
        var soundLink = makeLabel("SoundBible, Royalty-Free Sounds", 50, 420, "monospace", 14, "White", 350, 30);
      	var returnButton = makeButton(" Return ", 300, 500, 200, 75);
      	
        this.addChild(bg);
        this.addChild(aerinImg);
        this.addChild(bandImg);
        this.addChild(aerinLabel);
        this.addChild(bandLabel);
        this.addChild(otherLabel);   
        this.addChild(enchantLink);   
        this.addChild(commonsLink);   
        this.addChild(hyptosisLink);   
        this.addChild(soundLink); 
        this.addChild(spriteLink);    
        this.addChild(returnButton);
        
        aerinImg.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://aerinboy.deviantart.com/");
		});
		 bandImg.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://exitvehicles.bandcamp.com/");
		});
		enchantLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://enchantjs.com/");
		});
		commonsLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://commons.wikimedia.org/");
		});
		hyptosisLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://opengameart.org/content/lots-of-hyptosis-tiles-organized/");
		});
		soundLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://soundbible.com/royalty-free-sounds-1.html");
		});
		spriteLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("https://www.facebook.com/SpriteCreator3");
		});
		
	   	returnButton.addEventListener(Event.TOUCH_END, function(e) {
			game.popScene(); 
	   	});
		
    	}
	});


