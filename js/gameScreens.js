
var gameScreen = Class.create(Scene, {
     // the opening splashscreen   
    initialize: function(mapId, startX, startY, startDir) {
        var game;
        Scene.apply(this);
        game = Game.instance;
        
		var gameStage = new Group();
		gameStage.width = 400;
        gameStage.height = 380;
        gameStage.x = game.mapXOffset;
        gameStage.y = game.mapYOffset;
        
        var clueButton = makeButton(" Clues ", 20, 500, 60, 30);
        var saveButton = makeButton(" Save ", 120, 500, 60, 30);
        
        player = new Player(startX, startY, startDir);
        
        var gameTiles = new Map(25, 25);
        
        switch(mapId) {
        	case '1': case 1:
        		//overworld
        		gameTiles.image = Game.instance.assets['res/hyptosisOutside.png'];
        		gameTiles.loadData(worldScreenMap);
        		gameTiles.collisionData = worldScreenCollision;
        		this.bgm = game.assets['res/sounds/natureAmbiance.mp3'];
        		break;
        	case '2': case 2:
        		//town: Glade
        		gameTiles.image = Game.instance.assets['res/mapTiles.png'];
        		gameTiles.loadData(townMap);
        		gameTiles.collisionData = townMapCollision;
        		this.bgm = game.assets['res/sounds/fluteMedievalBg.mp3'];
        		break;
        	
        }
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
        var dPad = new Pad();
        dPad.x = 290;
        dPad.y = 410;
        dPad.opacity = 1;
        
		this.bgm.play();
		//loop BGM
		this.addEventListener(Event.ENTER_FRAME, function() {
        	if(this.bgm.currentTime >= this.bgm.duration ){
    			this.bgm.play();
			} 
		});
        
        this.player = player;
        this.gameTiles = gameTiles;
        this.mapId = mapId;
        
        player.addEventListener(Event.ENTER_FRAME, function() { 
        	player.move(gameTiles, mapId); 
        });
    	
        this.addEventListener(Event.ENTER_FRAME, function() { 
        	//focus map on player
        	var x = Math.min((gameStage.width  - 25) / 2 - player.x, 0);
		    var y = Math.min((gameStage.height - 25) / 2 - player.y, 0);
		    x = Math.max(gameStage.width,  x + gameTiles.width)  - gameTiles.width;
		    y = Math.max(gameStage.height, y + gameTiles.height) - gameTiles.height;
		    gameStage.x = x + game.mapXOffset;
		    gameStage.y = y + game.mapYOffset;
        });
	   	
	   	//immediately end game if any ending requirements met
	   	this.addEventListener(Event.ENTER_FRAME, function() { 
	   		var endScene;
	   		for (var i = 0; i < game.endingsTriggered.length; i++) {
	   			if (game.endingsTriggered[i].status == 1) {
	   				endScene = game.endingsTriggered[i].scene;
	   				this.bgm.stop();
					var scene = new talkScreen(endScene);
					game.pushScene(scene);
	   			}
	   		}
	   	} );
	   	
	   	clueButton.addEventListener(Event.TOUCH_END, function() { 
	   		var scene = new clueScreen();
			game.pushScene(scene); 
	   		} );
	   		
	   	saveButton.addEventListener(Event.TOUCH_END, function() { 
	   		saveGame();
	   		} );
	   	
        this.addChild(bg);
        gameStage.addChild(gameTiles);
        gameStage.addChild(player);
        this.addChild(gameStage);
        this.addChild(clueButton);
        this.addChild(saveButton);
        this.addChild(dPad);
    }, 
    
    restartMusic: function() {
    	this.bgm.play();
    },
    
    placePlayer: function(x, y, dir) {
    	this.player.isMoving = false;
    	this.player.x = x;
    	this.player.y = y;
    	this.player.direction = dir;
    }
     
});



	
