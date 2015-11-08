	
var openingScreen = Class.create(Scene, {
    initialize: function() {
    	this.name = "openingScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
        
        this.bgm = game.assets['res/sounds/opener.mp3'];
        this.bgm.play();
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
  
  		var skipButton = makeButton(" Skip ", 300, 500, 100, 35);
  
        var clavoTorchShot = makeImage(game.assets['res/clavoTorchShot.png'], 250, 400, 100, 75);
        clavoTorchShot.opacity = 0;
        clavoTorchShot.tl.setTimeBased();
        var clavoSurprisedShot = makeImage(game.assets['res/clavoSurprisedShot.png'], 400, 400, 10, 50);
        clavoSurprisedShot.opacity = 0;
        clavoSurprisedShot.tl.setTimeBased();
        var flash = makeImage(game.assets['res/whiteBg.png'], 400, 560, 0, 0);
        flash.opacity = 0;
        flash.tl.setTimeBased();
         
        clavoTorchShot.tl.delay(3000).fadeIn(1000).delay(3000).fadeOut(2000);
        clavoSurprisedShot.tl.delay(10500).fadeIn(1000).delay(4000).fadeOut(2000);
        flash.tl.delay(17000).fadeIn(500).delay(2000).fadeOut(2000);
		 
		this.addEventListener(Event.ENTER_FRAME, function() {
			if (this.age > 340) {
				game.popScene();       
				var scene = new talkScreen(0);
				game.pushScene(scene);                                                                               
			}
		});
		
		skipButton.addEventListener(Event.TOUCH_END, function(e) {
	       	game.currentScene.bgm.stop();
	       	game.popScene();       
			var scene = new talkScreen(0);
			game.pushScene(scene);  
		});
       
        this.addChild(bg);
        
        this.addChild(clavoTorchShot);
        this.addChild(clavoSurprisedShot);
        this.addChild(flash);
        this.addChild(skipButton);
          
    }
	
});

var creditScreen = Class.create(Scene, {
    initialize: function() {
    	this.name = "creditScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
        
        this.bgm = game.assets['res/sounds/closer.mp3'];
        this.bgm.play();
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
		
        var artistImg = makeImage(game.assets['res/aerinboy.png'], 150, 150, 150, 75);
        artistImg.opacity = 0;
        artistImg.tl.setTimeBased();
        var bandImg = makeImage(game.assets['res/exitvehicles.png'], 141, 141, 150, 75);
        bandImg.opacity = 0;
        bandImg.tl.setTimeBased();
        var hypImg = makeImage(game.assets['res/hyptosis.png'], 150, 111, 150, 75);
        hypImg.opacity = 0;
        hypImg.tl.setTimeBased();
        
        var textLabel = makeLabel('', 40, 245, 'monospace', '16', 'rgb(255,255,255)', 320, 150, 'rgba(0,0,0,0.6)', '');	
        textLabel.tl.setTimeBased();
        
        artistImg.tl.delay(3500).fadeIn(500).delay(2500).fadeOut(500);
        bandImg.tl.delay(7000).fadeIn(500).delay(2500).fadeOut(500);
        hypImg.tl.delay(10500).fadeIn(500).delay(3000).fadeOut(500);
		
		textLabel.tl.cue( {
			200: function() {
				textLabel.text = wordWrap("All dialogue and coding (HTML5/JavaScript/CSS, with the enchant.js library) by Aphorism44."
					, textLabel.width, 16);
			},
			3500: function() {
				textLabel.text = wordWrap("Artwork by AerinBoy"
					, textLabel.width, 16);
			},
			7000: function() {
				textLabel.text = wordWrap("Music by the Exit Vehicles, Tsunami track."
					, textLabel.width, 16);
			},
			10500: function() {
				textLabel.text = wordWrap("Public domain art/music from Hyptosis (above), Sprite Creator 3, Wikimedia Commons, and SoundBible."
					, textLabel.width, 16);
			},
			14500: function() {
				textLabel.text = wordWrap(""
					, textLabel.width, 16);
			}
		});
		
		this.addEventListener(Event.ENTER_FRAME, function() {
			if (this.age > 275) {
				game.popScene();                                                                           
			}
		});	
        
        this.addChild(bg);
        this.addChild(artistImg);
        this.addChild(bandImg);
        this.addChild(hypImg);
        this.addChild(textLabel);
    }
	
});

var splashScreen = Class.create(Scene, {
     // the opening splashscreen   
    initialize: function() {
    	this.name = "splashScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/blackBg.png']);
		
		var equationLogo = makeImage(game.assets['res/44Written.png'], 200, 140, 20, 30);
		equationLogo.opacity = 0;
        
        var diagramLogo = makeImage(game.assets['res/44Drawn.png'], 300, 168, 30, 50);
		diagramLogo.opacity = 0;
		
		var codeLogo = makeImage(game.assets['res/44Coded.png'], 300, 328, 50, 60);
		codeLogo.opacity = 0;
        
        var mainTitleLabel = makeLabel("Aphorism44", 30, 100, "Comic Sans MS", 58, "Orange", 300, 50, "", "left");
        mainTitleLabel.opacity = 0;
        
        equationLogo.tl.delay(10).fadeIn(10).delay(20).fadeOut(10);
        diagramLogo.tl.delay(30).fadeIn(10).delay(20).fadeOut(10);
        codeLogo.tl.delay(50).fadeIn(10).delay(20).fadeOut(10);
        mainTitleLabel.tl.delay(70).fadeIn(10);
        
        this.addChild(bg);  
        this.addChild(equationLogo); 
        this.addChild(diagramLogo);  
        this.addChild(codeLogo);  
        this.addChild(mainTitleLabel);  
             
		this.addEventListener(Event.ENTER_FRAME, function() {
			//if (this.age > 5) {
			if (this.age > 100) {
				var scene = new titleScreen();
				game.pushScene(scene);                                                                                  
			}
		});
			
		this.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://www.aphorism44.com");
		});
    	}
	});
	
