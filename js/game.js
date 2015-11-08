

/*
 * The hardcoded locations are:
 * 1. The pictures on this page
 * 2. the name of the saveFiles on this page at the end
 * 3. data.js and mapData.js
 * 4. playerFunctions.js, for the weird ending(s) and for leaving maps 
 * 		by walking off end
 * 5. generalJSFunctions.js - the reset function needs to be customized
 */


enchant();


window.onload = function() {
	var game = new Core(400, 560);
	game.fps = 15;
	
	NG.connect('38383:OfvBk542','Myy86IWvjbSIU2oK2416YEHfMssjjgkh');
	
	game.spriteWidth = 25;
	game.spriteHeight = 25;
	
	game.mapXOffset = 0;
	game.mapYOffset = 50;
	
	//initialize game data
	var scenesTriggeredLoad = initialSceneTriggered;
    var gameVariablesLoad = initialGameVariables;
    var clueDataLoad = initialClueData;
    var topicWordsLoad = initialTopicWords;
	
	game.topicWords = topicWordsLoad;
	game.scenesTriggered = scenesTriggeredLoad;
	game.gameVariables = gameVariablesLoad;
	game.endingsTriggered = initialEndingsTriggered;
	game.sceneActions = sceneActions;
	game.explainActions = explainActions;
	game.revealedClueActions = revealedClueActions;
	game.revealedClueTriggers = revealedClueTriggers;
	
	game.availableWords = null;
	game.clueData = clueDataLoad;
	game.changeMap = changeMapData;
	
	game.clueDataA = null;
	game.clueDataB = null;
	game.highlightClueA = null;
	game.highlightClueB = null;  
	game.clueMistakesMade = 0;
	
	//asset loading
	game.preload('res/hyptosisOutside.png'
			, 'res/mapTiles.png'
			, 'res/lemelSprites.png'
			
			, 'res/44Written.png'
			, 'res/44Drawn.png'
			, 'res/44Coded.png'
			
			, 'res/clavoTorchShot.png'
			, 'res/clavoSurprisedShot.png'
			
			, 'res/album.png'
			, 'res/aerinboy.png'
			, 'res/exitvehicles.png'
			, 'res/hyptosis.png'
			
			, 'res/titleBG.png'
			, 'res/grayBg.png'
			, 'res/blackBg.png'
			, 'res/whiteBg.png'
			, 'res/woodBG.png'
			, 'res/question.png'
			, 'res/questionHighlighted.png'
			, 'res/arrowUp.png'
			, 'res/arrowDown.png'
			
			, 'res/shrineBG.png'
			, 'res/tavernBG.png'
			, 'res/storeBG.png'
			, 'res/boardhouseBG.png'
			, 'res/hallBG.png'
			, 'res/prairieBG.png'
			, 'res/campBG.png'
			, 'res/graveyardBG.png'
			
			, 'res/instructMap.png'
			, 'res/instructScene.png'
			, 'res/instructTalk.png'
			, 'res/instructClues.png'
			
			, 'res/faces/clavoNormal.png'
			, 'res/faces/clavoFrown.png'
			, 'res/faces/clavoOut.png'
			, 'res/faces/clavoStruggle.png'
			, 'res/faces/clavoTalk.png'
			, 'res/faces/lemelNormal.png'
			, 'res/faces/lemelFrown.png'
			, 'res/faces/lemelAngry.png'
			, 'res/faces/lemelOut.png'
			, 'res/faces/lemelStruggle.png'
			, 'res/faces/lemelTalk.png'
			
			, 'res/faces/lissetteNormal.png'
			, 'res/faces/lissetteAngry.png'
			, 'res/faces/lissetteTalk.png'
			
			, 'res/faces/jeraFrown.png'
			, 'res/faces/jeraNormal.png'
			, 'res/faces/jeraSurprised.png'
			, 'res/faces/reeveFrown.png'
			, 'res/faces/reeveNormal.png'
			, 'res/faces/reeveSmile.png'
			, 'res/faces/bryceNormal.png'
			, 'res/faces/bryceAngry.png'
			, 'res/faces/burtonNormal.png'
			, 'res/faces/foremanNormal.png'
			, 'res/faces/sawaNormal.png'
			, 'res/faces/sawaSmile.png'
			, 'res/faces/sawaYell.png'
			, 'res/faces/widowFrown.png'
			, 'res/faces/widowNormal.png'
			, 'res/faces/blankFace.png'
			
			, 'res/faces/mizakNormal.png'
			
			, 'res/sounds/pling.mp3'
			, 'res/sounds/tone.mp3'
			, 'res/sounds/slap.mp3'
			, 'res/sounds/fluteMedievalBg.mp3'
			, 'res/sounds/natureAmbiance.mp3'
			, 'res/sounds/frogsNight.mp3'
			, 'res/sounds/windBg.mp3'
			
			, 'res/sounds/opener.mp3'
			, 'res/sounds/closer.mp3'
			
	);
	
	game.onload = function() {
		//start out on logo-splash screen
		var scene = new splashScreen();
		game.pushScene(scene);
		};
	
game.start();
};

//save game functions
//duplications needed due to XBrowser issues
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
//HARDCODEALERT begin
function saveGame() {
    var game;
    game = Game.instance;
    
    if (!supports_html5_storage() ) { 
    	var noSupport = makeLabel("Browser doesn't<br>support saving<br>data", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noSupport);
		 noSupport.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noSupport);
		 });
    	return false; 
    	}
    try {
    localStorage.setItem('scenesTriggeredGlade0', JSON.stringify(game.scenesTriggered));	
    localStorage.setItem('gameVariablesGlade0', JSON.stringify(game.gameVariables));
    localStorage.setItem('clueDataGlade0', JSON.stringify(game.clueData));
    localStorage.setItem('topicWordsGlade0', JSON.stringify(game.topicWords));
    localStorage.setItem('clueMistakesMadeGlade0', JSON.stringify(game.clueMistakesMade));	
    
    /*console.log("saved: ");
    console.log(JSON.stringify(game.scenesTriggered));
    console.log(JSON.stringify(game.gameVariables));
    console.log(JSON.stringify(game.clueData));
    console.log(JSON.stringify(game.topicWords));
    console.log(JSON.stringify(game.clueMistakesMade));*/
    
    return true;
    } catch(error) {
    	//console.log(error);
    	var noData = makeLabel("Couldn't save<br>on your<br>browser!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noData);
		 noData.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noData);
		 });
    	return false;
    }
    
}

function loadGame() {
    var game;
    game = Game.instance;
    
    if (!supports_html5_storage() ) { 
    	var noSupport = makeLabel("Browser doesn't<br>support saving<br>data", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noSupport);
		 noSupport.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noSupport);
		 });
    	return false; 
    	}
    
    try {
	    var scenesTriggeredLoad = JSON.parse(localStorage.getItem('scenesTriggeredGlade0'));	
		var gameVariablesLoad = JSON.parse(localStorage.getItem('gameVariablesGlade0'));
		var clueDataLoad = JSON.parse(localStorage.getItem('clueDataGlade0'));
		var topicWordsLoad = JSON.parse(localStorage.getItem('topicWordsGlade0'));
		var clueMistakesMadeLoad = JSON.parse(localStorage.getItem('clueMistakesMadeGlade0'));
		
	    //start game at set point
	    var startMap = loadGameStartPoints[0].startMap;
	   	var startX = loadGameStartPoints[0].startX;
		var startY = loadGameStartPoints[0].startY;
		var startDir = loadGameStartPoints[0].startDir;
		
		if (scenesTriggeredLoad != null) {
			
			game.scenesTriggered = scenesTriggeredLoad;
		    game.gameVariables = gameVariablesLoad;
		    game.clueData = clueDataLoad;
		    game.topicWords = topicWordsLoad;
		    game.clueMistakesMade = clueMistakesMadeLoad;
		    
			var scene = new gameScreen(startMap, startX, startY, startDir);
			game.replaceScene(scene); 
			
			/*console.log("loaded: ");
		    console.log(JSON.stringify(game.scenesTriggered));
		    console.log(JSON.stringify(game.gameVariables));
		    console.log(JSON.stringify(game.clueData));
		    console.log(JSON.stringify(game.topicWords));
		    console.log(JSON.stringify(game.clueMistakesMade));*/
			 
			return true;
		} else {
			var noData = makeLabel("No game data!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
			game.currentScene.addChild(noData);
			 noData.tl.delay(30).then(function(){
				game.currentScene.removeChild(noData);
			 });
			return false;
		}
	
	} catch(error) {
		var noData = makeLabel("No game data!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noData);
		 noData.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noData);
		 });
		return false;
	}
    
}

function clearSavedData() {
	var game;
    game = Game.instance;
    
	if (!supports_html5_storage() ) { 
		var noSupport = makeLabel("No save<br>data support", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noSupport);
		 noSupport.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noSupport);
		 });
    	return false; 
    	}
    	
	try {
		localStorage.removeItem('scenesTriggeredGlade0');
		localStorage.removeItem('gameVariablesGlade0');
		localStorage.removeItem('clueDataGlade0');
		localStorage.removeItem('topicWordsGlade0');
		localStorage.removeItem('clueMistakesMadeGlade0');
		
		return true;
	} catch(error) {
		var noData = makeLabel("No game data!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noData);
		 noData.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noData);
		 });
		return false;
	}
	
}
//HARDCODEALERT end