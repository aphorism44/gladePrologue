

 var Player = Class.create(Sprite, {
    initialize: function(startX, startY, startDirection) {
    	var game;
    	game = Game.instance;
        
        Sprite.apply(this,[game.spriteWidth, game.spriteHeight]);
        this.image = Game.instance.assets['res/lemelSprites.png']; 
        //movement variables
        //there are 12 player sprites, 3 each: down, left, right, up
		this.spriteOffset = 0;
		this.startingX = startX;
		this.startingY = startY;
		this.x = (this.startingX * game.spriteWidth);
		this.y = (this.startingY * game.spriteHeight);
		//where player is facing at first
		this.direction = startDirection;
		//boolean on whether player is walking or not
		this.walk = 0;
		//where frame is drawn
		this.frame = this.spriteOffset + this.direction;
		//player data
        this.checkTile = false;
        //animation variables       
        this.animationDuration = 0;
    },
	
	move : function(map, mapId) {
		var game;
    	game = Core.instance;
    	var scene = game.currentScene;
		
		//there are 3 frames per direction
		this.frame = this.spriteOffset + this.direction * 3 + this.walk;
		//if the player is moving...
		if (this.isMoving) {
			//moveBy is enchant function; 
			this.moveBy(this.xMovement, this.yMovement);
			//if frame is even, stop moving
			if (!(game.frame % 2)) {
				this.walk++;
				this.walk %= 2;
				this.checkTile = true;
			}
			//if in direct center of a square and intended movement, walk and stop
			if ((this.xMovement && this.x % 25 === 0) || (this.yMovement && this.y % 25=== 0)) {
				this.isMoving = false;
				this.walk = 1;
			}
		} else{
			//x,yMovement initialized to 0
			this.xMovement = 0;
			this.yMovement = 0;
			//check for input; x/yMovement like velocity (25 = sprite size)
			if (game.input.up) {
				this.direction = 3;
				this.yMovement = -5;
			} else if (game.input.right) {
				this.direction = 2;
				this.xMovement = 5;
			} else if (game.input.left) {
				this.direction = 1;
				this.xMovement = -5;
			} else if (game.input.down) {
				this.direction = 0;
				this.yMovement = 5;
			}
			
			//if there's intended motion, x or y set to current player position plus sprite width
			if (this.xMovement || this.yMovement) {
				var x = this.x + (this.xMovement ? this.xMovement / Math.abs(this.xMovement) * 25 : 0);
				var y = this.y + (this.yMovement ? this.yMovement / Math.abs(this.yMovement) * 25 : 0);
				//check if you're in map bound, and if tile is passsable
				if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x,y) ) {
					this.isMoving = true;
					this.move();
				} 
			}
		}  
		
		if (x != null) {
			//logout where you are
			//console.log('mapId: ' + mapId);
			console.log('main x: ' + x / game.spriteWidth);
			console.log('main y: ' + y / game.spriteHeight);
			//check tile
			if (this.checkTile == true) {
				checkCurrentMapBox(mapId, scene, x, y);
				this.checkTile = false;
			}
		}   		

	}
	
	
});

function checkCurrentMapBox(mapId, scene, x, y) {
		var game;
     	game = Game.instance;
		
		//HARDCODEALERT begin
		//leaving the town - this can't go into JSON since are many possible squares
		if (mapId == 2 && ((x / game.spriteWidth) < 0 || (x / game.spriteWidth) > 24
						|| (y / game.spriteHeight) < 0 || (y / game.spriteHeight) > 24  ) ) {
				scene.bgm.stop();
				var newScene = new gameScreen(1, 7, 13, 0);
				game.replaceScene(newScene); 
			}
		//HARDCODEALERT end
		
		//loop through game.changeMap JSON to check current spot
		for (var i = 0; i < game.changeMap.length; i++) {
			
			if (game.changeMap[i].mapId == mapId && game.changeMap[i].available == 1
				&& game.changeMap[i].x == x / game.spriteWidth 
				&& game.changeMap[i].y ==  y / game.spriteHeight) {
				
				var mapChangeId = Math.floor(game.changeMap[i].mapChangeId);
				var changeType = game.changeMap[i].changeType;
				var newMap, newX, newY, newDir, newScene, sceneRequirement, sceneAvailable, npcName;
				
				if (changeType == 'mapChange') {
					newMap = game.changeMap[i].newMap;
					newX = game.changeMap[i].newX;
					newY = game.changeMap[i].newY;
					newDir = game.changeMap[i].newDir;
					scene.bgm.stop();
					var newScene = new gameScreen(newMap, newX, newY, newDir);
					game.replaceScene(newScene);
				}
				if (changeType == 'gotoScene') {
					newScene = game.changeMap[i].newScene;
					sceneAvailable = 0;
					sceneRequirement = game.changeMap[i].requirement;
					
					for (var j = 0; j < game.gameVariables.length; j++) {
						if (game.gameVariables[j].name == sceneRequirement && game.gameVariables[j].status == 1) {
							sceneAvailable = '1';
						}
					}
					
					if (game.scenesTriggered[newScene].triggered == 0 && sceneAvailable == 1) {
						scene.bgm.stop();
						var scene = new talkScreen(newScene);
						game.pushScene(scene);
					}	
				}
				if (changeType == 'npc') {
					npcName = game.changeMap[i].name;
					scene.bgm.stop();
					
					//HARDCODE ALERT begin
					//this ending has weird requirements
					if (npcName == 'reeve' && game.scenesTriggered[3].triggered == 1) {
						var newScene = new talkScreen(5);
						game.pushScene(newScene);
					} else {
						var newScene = new interactScreen(npcName, 1);
						game.pushScene(newScene);
					}
					//HARDCODE ALERT end
					  
				}		
			}
			
		}
	}


