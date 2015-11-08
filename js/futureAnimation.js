var futureOpeningScreen = Class.create(Scene, {
    initialize: function() {
    	this.name = "openingScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
        
        this.bgm = game.assets['res/sounds/unplugged.mp3'];
        this.bgm.play();
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
        
        var clavoImage = makeImage(game.assets['res/faces/clavoNormal.png'], 200, 200, 100, 150);
        clavoImage.opacity = 0;
        var lemelImage = makeImage(game.assets['res/faces/lemelNormal.png'], 200, 200, 100, 150);
        lemelImage.opacity = 0;
        var lissetteImage = makeImage(game.assets['res/faces/lissetteNormal.png'], 200, 200, 100, 150);
        lissetteImage.opacity = 0;
        var mizakImage = makeImage(game.assets['res/faces/mizakNormal.png'], 200, 200, 100, 150);
        mizakImage.opacity = 0;
        
        var clavoTextA = "Did you find a map on me the night I…I died?";
        var clavoBannerA = makeLabel(clavoTextA + ' ' + clavoTextA, 50, 400, "monospace", 24, "White", 5000, 35);
        clavoBannerA.opacity = 0;
        var clavoTextB = "Some of those stories were real! I found the records!";
        var clavoBannerB = makeLabel(clavoTextB + ' ' + clavoTextB, -500, 50, "monospace", 18, "Yellow", 5000, 35);
        clavoBannerB.opacity = 0;
        
        var lemelTextA = "Everyone, get behind me. This guy looks tough...";
        var lemelBannerA = makeLabel(lemelTextA + ' ' + lemelTextA, 50, 400, "monospace", 24, "White", 5000, 35);
        lemelBannerA.opacity = 0;
        var lemelTextB = "Come on, Clavo, not after all this!";
        var lemelBannerB = makeLabel(lemelTextB + ' ' + lemelTextB, -500, 50, "monospace", 18, "Yellow", 5000, 35);
        lemelBannerB.opacity = 0;
        
        var lissetteTextA = "Damnit, don't you guys ever think?!?";
        var lissetteBannerA = makeLabel(lissetteTextA + ' ' + lissetteTextA, 50, 400, "monospace", 24, "White", 5000, 35);
        lissetteBannerA.opacity = 0;
        var lissetteTextB = "The next time he does that, I'm going to smack him...";
        var lissetteBannerB = makeLabel(lissetteTextB + ' ' + lissetteTextB, -500, 50, "monospace", 18, "Yellow", 5000, 35);
        lissetteBannerB.opacity = 0;
        
        var mizakTextA = "Ahahaha! This is great! I always thought so!";
        var mizakBannerA = makeLabel(mizakTextA + ' ' + mizakTextA, 50, 400, "monospace", 24, "White", 5000, 35);
        mizakBannerA.opacity = 0;
        var mizakTextB = "Hey, I said I'm sorry! Don\'t be like that...";
        var mizakBannerB = makeLabel(mizakTextB + ' ' + mizakTextB, -500, 50, "monospace", 18, "Yellow", 5000, 35);
        mizakBannerB.opacity = 0;
        
        var textLabel = makeLabel("", 40, 245, "16px monospace", 58, "White", 320, 120, "", "left");
        
		var skipButton = makeButton(" Skip ", 300, 500, 200, 75);
		
		skipButton.addEventListener(Event.TOUCH_END, function(e) {
	       	game.currentScene.bgm.stop();
	       	game.popScene();
			var scene = new talkScreen(0);
			game.pushScene(scene);
		});
        
        
        clavoImage.tl.delay(105).fadeIn(5).delay(97).fadeOut(5);
        clavoBannerA.tl.delay(105).fadeIn(5).moveBy(-600, 0, 102).fadeOut(5);
        clavoBannerB.tl.delay(105).fadeIn(5).moveBy(600, 0, 102).fadeOut(5);
        
        lemelImage.tl.delay(207).fadeIn(5).delay(89).fadeOut(5);
        lemelBannerA.tl.delay(207).fadeIn(5).moveBy(-600, 0, 94).fadeOut(5);
        lemelBannerB.tl.delay(207).fadeIn(5).moveBy(600, 0, 94).fadeOut(5);
        
        lissetteImage.tl.delay(301).fadeIn(5).delay(92).fadeOut(5);
        lissetteBannerA.tl.delay(301).fadeIn(5).moveBy(-600, 0, 97).fadeOut(5);
        lissetteBannerB.tl.delay(301).fadeIn(5).moveBy(600, 0, 97).fadeOut(5);
        
        mizakImage.tl.delay(398).fadeIn(5).delay(87).fadeOut(5);
        mizakBannerA.tl.delay(398).fadeIn(5).moveBy(-600, 0, 92).fadeOut(5);
        mizakBannerB.tl.delay(398).fadeIn(5).moveBy(600, 0, 92).fadeOut(5);
		
		this.addEventListener(Event.ENTER_FRAME, function() {
			if (this.age > 585) {
				game.popScene();       
				var scene = new talkScreen(0);
				game.pushScene(scene);                                                                               
			}
		});
       
        this.addChild(bg);
        this.addChild(textLabel);
        this.addChild(skipButton);
        
        this.addChild(clavoImage);
        this.addChild(lemelImage);
        this.addChild(lissetteImage);
        this.addChild(mizakImage);
        
        this.addChild(clavoBannerA);
        this.addChild(lemelBannerA);
        this.addChild(lissetteBannerA);
        this.addChild(mizakBannerA);
        this.addChild(clavoBannerB);
        this.addChild(lemelBannerB);
        this.addChild(lissetteBannerB);
        this.addChild(mizakBannerB);
        
        
        
    }
	
});