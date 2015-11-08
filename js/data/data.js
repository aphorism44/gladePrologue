

//the array value = sceneId
//fill this manually
var initialSceneTriggered = [
	{'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
];

//the final scene that leaves to good ending
//set this manually
var finalScene = 7;

//the ending that triggers when you make too many mistakes
//set this manually
var tooManyMistakesEnding = 2;

//sets where you start when you load a game
//set this manually
var loadGameStartPoints = [
	{'loadId':'1', 'startMap':'2', 'startX':'19', 'startY':'22', 'startDir':'0' }
];

//action that happens after an explain scene
//set this manually
var explainActions = [
	{'explain':'0', 'action':'return'}
];

//list of game variables that can be set
//from spreadsheet
var initialGameVariables = [
	{'name': 'crewAvailable', 'status':'0'}
	, {'name': 'sawaAvailable', 'status':'0'}
];

//keeps track of when/which endings are triggered and triggered scene 
//(except for too-many-mistakes ending)
//from spreadsheet
var initialEndingsTriggered = [
	{'ending':'0', 'status':'0', 'scene':'4'}
	, {'ending':'1', 'status':'0'}
	, {'ending':'2', 'status':'0', 'scene':'6'}
];


//any special actions triggered by revealing clues
//from spreadsheet
var revealedClueTriggers = [
	{'clueId':'14', 'action':'triggerEnd', 'ending':'0'}

];

//the actions taken when player finishes a scene
//from spreadsheet
var sceneActions = [
	{'scene':'0', 'action':'trigger' }
	, {'scene':'0', 'action':'stopMusic' }
	, {'scene':'0', 'action':'newScene', 'nextScene': '1' }
	, {'scene':'1', 'action':'trigger' }
	, {'scene':'1', 'action':'gotoMap', 'startMap': '2', 'startX': '19', 'startY': '22', 'startDir': '0' }
	, {'scene':'2', 'action':'trigger' }
	, {'scene':'2', 'action':'stopMusic' }
	, {'scene':'2', 'action':'addClue', 'clueId': '7' }
	, {'scene':'2', 'action':'addClue', 'clueId': '8' }
	, {'scene':'2', 'action':'popScene' }
	, {'scene':'2', 'action':'restartMusic' }
	, {'scene':'3', 'action':'trigger' }
	, {'scene':'3', 'action':'stopMusic' }
	, {'scene':'3', 'action':'addClue', 'clueId': '12' }
	, {'scene':'3', 'action':'popScene' }
	, {'scene':'3', 'action':'restartMusic' }
	, {'scene':'4', 'action':'trigger' }
	, {'scene':'4', 'action':'newScene', 'nextScene': '7' }
	, {'scene':'5', 'action':'trigger' }
	, {'scene':'5', 'action':'endGameBad' }
	, {'scene':'6', 'action':'trigger' }
	, {'scene':'6', 'action':'endGameBad' }
	, {'scene':'7', 'action':'trigger' }
	, {'scene':'7', 'action':'endGameGood' }
];

//actions taken when a particular clue is revealed
//from spreadsheet
var revealedClueActions = [
	{'clueId':'15', 'action':'updateGameVariable', 'gameVariable':'crewAvailable'}
	, {'clueId':'16', 'action':'updateGameVariable', 'gameVariable':'sawaAvailable'}
];

//definitions of clues, how they match, what other clues/topics they reveal
//from spreadsheet
var initialClueData = [  
	{'id': '0', 'available': '1', 'partner': '14', 'revealed': '18', 'wordRevealed': '', 'text': 'Clavo will be buried at sundown.'}
	, {'id': '1', 'available': '0', 'partner': '3', 'revealed': '5', 'wordRevealed': '', 'text': 'Either Clavo or the stranger drank a whole bottle of whiskey.'}
	, {'id': '2', 'available': '0', 'partner': '4', 'revealed': '6', 'wordRevealed': '', 'text': 'Either Clavo or the stranger is a smoker.'}
	, {'id': '3', 'available': '0', 'partner': '1', 'revealed': '5', 'wordRevealed': '', 'text': 'Clavo couldn\'t drink hard liquor.'}
	, {'id': '4', 'available': '0', 'partner': '2', 'revealed': '6', 'wordRevealed': '', 'text': 'Clavo smoked a pipe.'}
	, {'id': '5', 'available': '0', 'partner': '7', 'revealed': '9', 'wordRevealed': '', 'text': 'The stranger is a heavy drinker.'}
	, {'id': '6', 'available': '0', 'partner': '8', 'revealed': '10', 'wordRevealed': '', 'text': 'The stranger is not a smoker.'}
	, {'id': '7', 'available': '0', 'partner': '5', 'revealed': '9', 'wordRevealed': '', 'text': 'Eben and Sawa are heavy drinkers.'}
	, {'id': '8', 'available': '0', 'partner': '6', 'revealed': '10', 'wordRevealed': '', 'text': 'Eben and Krole are heavy smokers.'}
	, {'id': '9', 'available': '0', 'partner': '10', 'revealed': '11', 'wordRevealed': '', 'text': 'The stranger must be Eben or Sawa.'}
	, {'id': '10', 'available': '0', 'partner': '9', 'revealed': '11', 'wordRevealed': '', 'text': 'The stranger cannot be Eben or Krole.'}
	, {'id': '11', 'available': '0', 'partner': '16', 'revealed': '17', 'wordRevealed': 'Sawa', 'text': 'The stranger\'s name is Sawa.'}
	, {'id': '12', 'available': '0', 'partner': '13', 'revealed': '14', 'wordRevealed': 'ENDORMIGU', 'text': 'Clavo had the ENDORMIGU spell cast on him.'}
	, {'id': '13', 'available': '0', 'partner': '12', 'revealed': '14', 'wordRevealed': '', 'text': 'The ENDORMIGU curse places the victim in a deathlike coma.'}
	, {'id': '14', 'available': '0', 'partner': '0', 'revealed': '18', 'wordRevealed': '', 'text': 'Clavo is still alive!!!'}
	, {'id': '15', 'available': '0', 'partner': '', 'revealed': '', 'wordRevealed': '', 'text': 'The road crew is located southeast of Talem\'s Glade, by a bend in the Great Highway.'}
	, {'id': '16', 'available': '0', 'partner': '11', 'revealed': '17', 'wordRevealed': '', 'text': 'Sawa is hiding out in the forest campground northeast of Talem\'s Glade.'}
	, {'id': '17', 'available': '0', 'partner': '', 'revealed': '', 'wordRevealed': '', 'text': 'HINT: You should probably look for Sawa in the forest…'}
	, {'id': '18', 'available': '0', 'partner': '', 'revealed': '', 'wordRevealed': '', 'text': 'HINT: You should probably stop your friends from burying Clavo alive…'}
];

//actions taken when you enter certain map squares, with other conditionals
//from spreadsheet
var changeMapData = [
	{'mapChangeId' :'1' ,'changeType': 'mapChange','mapId' : '1', 'x' : '7', 'y': '12', 'available':'1', 'newMap':'2',  'newX':'19', 'newY':'22', 'newDir':'1'}
	, {'mapChangeId' :'2' ,'changeType': 'gotoScene','mapId' : '1', 'x' : '20', 'y': '19', 'available':'1', 'newScene':'2', 'requirement':'crewAvailable'}
	, {'mapChangeId' :'3' ,'changeType': 'gotoScene','mapId' : '1', 'x' : '17', 'y': '8', 'available':'1', 'newScene':'3', 'requirement':'sawaAvailable'}
	, {'mapChangeId' :'4' ,'changeType': 'npc','mapId' : '2', 'x' : '20', 'y': '5', 'available':'1', 'name': 'jera'}
	, {'mapChangeId' :'5' ,'changeType': 'npc','mapId' : '2', 'x' : '2', 'y': '19', 'available':'1', 'name': 'widow'}
	, {'mapChangeId' :'6' ,'changeType': 'npc','mapId' : '2', 'x' : '15', 'y': '20', 'available':'1', 'name': 'lissette'}
	, {'mapChangeId' :'7' ,'changeType': 'npc','mapId' : '2', 'x' : '11', 'y': '11', 'available':'1', 'name': 'reeve'}
	, {'mapChangeId' :'8' ,'changeType': 'npc','mapId' : '2', 'x' : '20', 'y': '11', 'available':'1', 'name': 'burton'}
]; 

//npc info for interaction scenes
//from spreadsheet
var npcNames = {
	'jera': { 'fullname': 'Brother Jera', 'mainpic': 'res/faces/jeraNormal.png', 'npcId': '1', 'mainBg': 'res/shrineBG.png' }
	, 'reeve': { 'fullname': 'Reeve Donte', 'mainpic': 'res/faces/reeveNormal.png', 'npcId': '2', 'mainBg': 'res/hallBG.png' }
	, 'lissette': { 'fullname': 'Lissette', 'mainpic': 'res/faces/lissetteNormal.png', 'npcId': '3', 'mainBg': 'res/tavernBG.png' }
	, 'widow': { 'fullname': 'Widow Starnes', 'mainpic': 'res/faces/widowNormal.png', 'npcId': '4', 'mainBg': 'res/boardhouseBG.png' }
	, 'burton': { 'fullname': 'Burton', 'mainpic': 'res/faces/burtonNormal.png', 'npcId': '5', 'mainBg': 'res/storeBG.png' }
};

//the topic words for interaction screens
//from spreadsheet
var initialTopicWords = [  
	{ 'word': 'Clavo', 'available': '1'}
	, { 'word': 'the stranger', 'available': '0'}
	, { 'word': 'road crew', 'available': '0'}
	, { 'word': 'Sawa', 'available': '0'}
	, { 'word': 'campsite', 'available': '0'}
	, { 'word': 'ENDORMIGU', 'available': '0'}
];

//bgs and music for different scenes
//from spreadsheet
var sceneMedia = {
	'0' : { 'pic':'res/shrineBG.png', 'music': 'res/sounds/frogsNight.mp3'}
	, '1' : { 'pic':'res/hallBG.png', 'music': ''}
	, '2' : { 'pic':'res/prairieBG.png', 'music': 'res/sounds/windBg.mp3'}
	, '3' : { 'pic':'res/campBG.png', 'music': 'res/sounds/frogsNight.mp3'}
	, '4' : { 'pic':'res/graveyardBG.png', 'music': ''}
	, '5' : { 'pic':'res/hallBG.png', 'music': ''}
	, '6' : { 'pic':'res/prairieBG.png', 'music': ''}
	, '7' : { 'pic':'res/shrineBG.png', 'music': ''}
}; 

//the text, bgs, and sounds for explain scene frames
//from spreadsheet
var explainData= {
	"explain0" : [ 
	{ 'bg': 'res/blackBg.png', 'text': 'The instructions for this game are very simple (click on or touch this text to continue...)', 'sound': '' }
	, { 'bg': 'res/instructScene.png', 'text': 'During scenes, click or touch in the dialogue box to advance to the next step.', 'sound': '' }
	, { 'bg': 'res/instructScene.png', 'text': 'If you want to skip the whole scene, and if the Skip option is available, you can press that.', 'sound': '' }
	, { 'bg': 'res/instructScene.png', 'text': 'But be careful, as you might miss something important, and you can\'t replay the scene when it\'s skipped.', 'sound': '' }
	, { 'bg': 'res/instructTalk.png', 'text': 'In the talk screen, press the up and down arrows to pick different topic words, then press the Ask About button to choose it.', 'sound': '' }
	, { 'bg': 'res/instructTalk.png', 'text': 'If you hear this sound, it means you either discovered a new topic word, or a new clue. Both are instantly available.', 'sound': 'res/sounds/tone.mp3' }
	, { 'bg': 'res/instructTalk.png', 'text': 'More on the clues shortly….', 'sound': '' }
	, { 'bg': 'res/instructMap.png', 'text': 'On the map screen, use the Direction Pad to move. Certain doors and other locations can lead to scenes or talk screens.', 'sound': '' }
	, { 'bg': 'res/instructMap.png', 'text': 'To save your game, press the Save button. You can only have one saved game at a time. This uses HTML5 localStorage, if your browser supports it.', 'sound': '' }
	, { 'bg': 'res/instructMap.png', 'text': 'Finally, at any time you\'re on the map screen, press the Clues button to open the clue screen.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'If you press any clue, it will turn yellow and its text will appear in one of the below windows.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'You can create more clues by choosing two clues, then pressing the Evaluate button at the bottom.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'If you evaluate two appropriate clues, a new clue will appear, along with this sound.', 'sound': 'res/sounds/tone.mp3' }
	, { 'bg': 'res/instructClues.png', 'text': 'New clues will also appear as you talk to people and witness certain scenes, so check the clues often.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'If you evaluate incorrect clues, this sound will play. If you make too many incorrect moves, the game ends.', 'sound': 'res/sounds/slap.mp3' }
	, { 'bg': 'res/blackBg.png', 'text': 'That\'s all.', 'sound': '' }
	]
}; 

//the responses NPCs give to different topics
//from spreadsheet
var npcResponses = {
	"jera" : {
		'Clavo': { 'response': 'Sad…he was always so weak. I remember he couldn\'t handle the heat. Or hold his liquor.', 'reveal': 'the stranger', 'clueReveal': '3' },
		'the stranger': { 'response': 'He said he was staying at the Pathway Inn. Have you asked Lissette about him?', 'reveal': '', 'clueReveal': '' },
		'road crew': { 'response': 'The workers? I treat their injuries every so often.', 'reveal': '', 'clueReveal': '' },
		'Sawa': { 'response': 'Hey! He broke one of my patient\'s arms once!', 'reveal': '', 'clueReveal': '' },
		'campsite': { 'response': 'Not a clue….', 'reveal': '', 'clueReveal': '' },
		'ENDORMIGU': { 'response': 'Where\'d you hear that? That\'s an old spell! Puts a person in a coma…', 'reveal': '', 'clueReveal': '13' },
	},
	
	"reeve" : {
		'Clavo': { 'response': 'I know you two were friends. Just keep your mind on the facts.', 'reveal': '', 'clueReveal': '' },
		'the stranger': { 'response': 'He\'s the only one who knows what happened to Clavo.', 'reveal': '', 'clueReveal': '' },
		'road crew': { 'response': 'They\'re working near a bend on the Great Highway southeast of here. Try visiting them.', 'reveal': '', 'clueReveal': '15' },
		'Sawa': { 'response': 'Sounds like he\'s our man. See if you can find him.', 'reveal': '', 'clueReveal': '' },
		'campsite': { 'response': 'You have my permission to go talk to Sawa, but don\'t hurt him.', 'reveal': '', 'clueReveal': '' },
		'ENDORMIGU': { 'response': 'If you\'re reading this, there\'s a bug in the game. Contact Aphorism44 and tell him about this bug.', 'reveal': '', 'clueReveal': '' },
	},
	
	"lissette" : {
		'Clavo': { 'response': 'He and that stranger had some whiskey here that night. But only one of them drank. I forget who. A whole bottle, too!', 'reveal': '', 'clueReveal': '1' },
		'the stranger': { 'response': 'Definitely from the road crew - his clothes, that build. I wonder why he was with Clavo.', 'reveal': 'road crew', 'clueReveal': '' },
		'road crew': { 'response': 'Those are the rowdiest customers we get here! At least they have enough thalers to pay. Usually.', 'reveal': '', 'clueReveal': '' },
		'Sawa': { 'response': 'Heeeey….I think he stayed here once. With some other workers, of course.', 'reveal': '', 'clueReveal': '' },
		'campsite': { 'response': 'Isn\'t there a place in the northeast forest used for that?', 'reveal': '', 'clueReveal': '' },
		'ENDORMIGU': { 'response': 'Is that some foreign word? Maybe Jera knows what it means...', 'reveal': '', 'clueReveal': '' },
	},
	
	"widow" : {
		'Clavo': { 'response': 'You two were so close. Of course, he was better behaved than you. Except for that pipe he smoked.', 'reveal': '', 'clueReveal': '4' },
		'the stranger': { 'response': 'That man might be dangerous! Take care of yourself! You\'re all I have left…', 'reveal': '', 'clueReveal': '' },
		'road crew': { 'response': 'Those fellows? They usually board at the Pathway Inn, not here.', 'reveal': '', 'clueReveal': '' },
		'Sawa': { 'response': 'Never had a boarder by that name.', 'reveal': '', 'clueReveal': '' },
		'campsite': { 'response': 'Camping? Oh, it\'s been several decades…', 'reveal': '', 'clueReveal': '' },
		'ENDORMIGU': { 'response': 'I don\'t know Pontolingvo, darling. Ask Brother Jera.', 'reveal': '', 'clueReveal': '' },
	},
	
	"burton" : {
		'Clavo': { 'response': 'Sorry about your buddy, kid. I know you two were close.', 'reveal': '', 'clueReveal': '' },
		'the stranger': { 'response': 'Yeah, he and Clavo came here to buy some tobacco. Only one of them lit up; I forget who.', 'reveal': '', 'clueReveal': '2' },
		'road crew': { 'response': 'My best customers. Miles from civilization, and I\'m the only shop in town!', 'reveal': '', 'clueReveal': '' },
		'Sawa': { 'response': 'Hey, I remember - he bought camping gear here with his buddies once! For that campsite to the north!', 'reveal': 'campsite', 'clueReveal': '16' },
		'campsite': { 'response': 'It\'s northeast of town, in the forest. Road workers vacation there sometimes.', 'reveal': '', 'clueReveal': '' },
		'ENDORMIGU': { 'response': '…whoa, felt dizzy for a second there. What did you say?', 'reveal': '', 'clueReveal': '' },
	}	
};

//the dialogue and art (and, if necessary, sound) for scene frames
//from spreadsheet
var sceneDialog = {
	"scene0" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(slightly after midnight at the Garden Shrine in Talem\'s Glade…)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '    ', 'text': '(KNOCK KNOCK)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'I\'m coming - one second.', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': '(opening door) Welcome to the Garden Shrine, how can I-', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/clavoStruggle.png', 'speaker': 'Sick Man', 'text': 'Gasp….gasp….', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'What happened?!? Get this man inside immediately!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Jera and the stranger carry the sick man inside the healer\'s shrine)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'He can barely breathe. What happened? I don\'t see any injuries…', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': 'Don\'t know - he just collapsed earlier today. Probably sunstroke.', 'sound': '' }
		, { 'pic': 'res/faces/clavoStruggle.png', 'speaker': 'Sick Man', 'text': 'Ah….help….released….', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Stay with me! KURACU!', 'sound': '' }
		, { 'pic': 'res/faces/clavoStruggle.png', 'speaker': '', 'text': '(the healing spell envelops the sick man, but his gasps still grow weaker)', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'This man\'s dying! There\'s some tonic on the shelf over there. Grab some!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': 'You mean this jar?', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'No, the one next to it. And…', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': '', 'text': '(the gasping stops)', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'No! KURACU!', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': '', 'text': '(the spell has no effect)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '…he\'s gone.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'I\'m sorry.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': '….', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Er…is this man a friend of yours?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': 'Not really. We just worked together. On the…the road crew.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Okay, then, we\'ll need to talk to the reeve first thing tomorrow.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Stranger', 'text': 'I\'m staying at the inn.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Sure…tomorrow….', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the stranger leaves, and Jera examines the still body)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Sure doesn\'t look very sick. There\'s something I\'m not seeing.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as Jera removes the man\'s tunic, a small scroll falls onto the cot)', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'What the….oh gods! How come I didn\'t recognize him earlier!', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'Clavo!', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'What happened to you, Clavo?', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
	], 
	
	"scene1" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the next morning, in Talem\'s Glade\'s Guild Hall)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '…and the stranger wasn\'t at the inn. I don\'t know where he is.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I see.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'I still can\'t believe I didn\'t recognize Clavo right away. He must have grown since leaving for university.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'This is a sad homecoming. The Testok family was among our first settlers. Now they\'re all gone.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'We\'ll need to tell Lavern Starnes. She raised Clavo like a son.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'With her gossiping, Widow Starnes probably knows already. She\'s tough.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'She\'s lost a lot of loved ones. I\'m more worried about her nephew…', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the door crashes open)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '(whispering) Too late…', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Jera! What happened to Clavo?!?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Clavo died, Lemel. Just last night. We were about to tell you.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'When? How? Aunt Lavern and I didn\'t even know he was in town!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Lemel, settle down. Jera, why don\'t you tell him the whole story?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': '', 'text': '(Jera relates - once again - the events of the previous night)', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And that\'s honestly all we know, Lemel.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Are you going to find out what happened?!?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Oh course! Lemel - if anyone did anything wrong, we\'ll find out.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Who was this stranger? How did Clavo die? I mean, he was healthy and everything.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I don\'t know, Lemel. I\'ll-', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Why are you just sitting there?!? What if that stranger killed Clavo. Or what if-', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'LEMEL, QUIET!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '???', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'We all want to know what happened. I know Clavo was like a brother to you.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Yeah. But…but…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Look, why don\'t you ask around town, get some more information?', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'I will!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We need to find that stranger; he has to know everything. He couldn\'t have gotten far.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'I\'ll find him, all right!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'If you find where he is, though, the law needs to handle him.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We don\'t know what happened! This could have just been a tragic accident!', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'Lemel! Promise me - if you find the stranger, you will not hurt him!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…okay.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Good. Thank you. And you have my condolences.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'The funeral will be at dusk tonight. Please be here.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel leaves the Guild Hall).', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Donte, are you sure that was wise?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Lemel\'s young and hot-headed. And he lost a close friend. This will keep him busy.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'He\'s not going to be much use to Bryce at the blacksmithy until he gets some answers.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'It\'s just….I don\'t really think this was an accident. Or a normal illness.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Whetever really happened to Clavo, this guy was hiding it.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…well, let\'s hope Lemel doesn\'t take the law into his own hands.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '…', 'sound': '' }
	], 

	"scene2" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(near the edge of the Great Highway, road crew workers take their noon break)', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Hey, I\'m looking for the man in charge.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'That\'s me. What do you want, kid?', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'The name\'s Lemel. I looking for a man who might have worked here.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'The Reeve of Talem\'s Glade sent me. Donte Kenhos.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'A town citizen died mysteriously, and this man knows something.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'So who are you looking for?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'A man. Short black hair, long eyebrows.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'A lot of people come and go here, kid. Road work don\'t agree with everyone.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'I can think of three guys like that who quit in the past season.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Who were they? Anything you know might help.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Well…first was a guy called Eben.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'He started out okay, but drank like a damn sailor.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'I kicked him out after he went on a three-day bender.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'That, and he was always puffing on that stinking pipe of his.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Second was a guy called Sawa. A drunk, but a good worker.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Mean drunk, though. Had to let him go after the fifth fight.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Broke a guy\'s arm once. Weird guy, that Sawa.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'A loner. Didn\'t smoke or cuss. Just fought like a berserker', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'We were sad to see him go. \'Cept for the guys he hurt.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'The last was Krole. That man was just crazy.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Never drank once. Just had this nervous twitch.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Scared the hell out of the fellows here.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Never spoke to anyone,  just sat alone and rolled those cigars of his.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'He just ran off one morning, not a word to anyone.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…thanks. Any idea where they could have gone?', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'No idea, kid. All I know is they ain\'t here anymore.', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Thanks a lot. This helps.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Sure thing, kid. One last thing.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'My men - they\'re mean, they\'re drunks. Maybe even crazy.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'They\'re not murderers.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Your reeve, he\'s a fair man. Always follows the law.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Foreman', 'text': 'Whoever you catch, give him a chance to explain himself. Got it?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
	],
	
	"scene3" : [
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as Lemel enters a clearing in the forest, a man with a crossbow steps out of a tent)', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Don\'t move.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Sawa!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': '', 'text': '(Lemel approaches, but Sawa levels his bow at him)', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Stay where you are, boy.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'What did you do to Clavo?!?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I thought that might be why you came. I didn\'t do anything to Clavo.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Then what happened?!? He\'s dead!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'It\'s a long story. Sit down.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Sawa sits by his campfire, keeping his crossbow level)', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Sit, boy. I ain\'t gonna hurt you unless you try and hurt me.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Like you hurt that guy on the road crew? Broke his arm.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Okay, boy, I admit I\'m no angel, but I\'m no killer either.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'You wanna know what happened or not?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': '', 'text': '(reluctantly, Lemel sits down opposite Sawa)', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'This Clavo, he was a university man, wasn\'t he?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'How\'d you know that?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'He told me. Said he needed my help, that he discovered something.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Something he learned from crawling through all those old books or something.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Some kind of treasure maybe - I don\'t know. Never saw it.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I was out of work, see? Just left the road crew. Then I met Clavo, on the Great Highway.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'He was heading home for Talem\'s Glade. But he wanted to do something first.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'He said he needed a guide, someone who knew the wilderness. And he\'d pay.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'We headed for the north mountains. He had this map, scroll - something.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'We got to this cave. He told me to stay back, that he needed to explore.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'So he lit a torch and went in himself. A few minutes later, and there\'s this flash.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I heard someone - not Clavo - yell something.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Something like "ENDORMIGU," no word I ever heard before.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…Sounds like a spell or something…', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Must have been, \'cause a second later Clavo staggered out and collapsed.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I brought him straight to that priest-man of yours at the Glade. But…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Clavo was my friend. No, more like my brother.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I\'m sorry, boy, I really am.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Why did you run, then?', 'sound': '' }
		, { 'pic': 'res/faces/sawaYell.png', 'speaker': 'Sawa', 'text': 'Why? Can\'t you figure that out, boy?!?', 'sound': '' }
		, { 'pic': 'res/faces/sawaYell.png', 'speaker': 'Sawa', 'text': 'I just lost my job for drinkin\' and fighting!', 'sound': '' }
		, { 'pic': 'res/faces/sawaYell.png', 'speaker': 'Sawa', 'text': 'Then I come carrying a dyin\' man into town.', 'sound': '' }
		, { 'pic': 'res/faces/sawaYell.png', 'speaker': 'Sawa', 'text': 'If I stayed, I\'d be dangling from a noose by now!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'No! The Glade isn\'t like that! Our reeve isn\'t like that!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'We follow the League\'s laws! You could have told us what happened!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I want to know where this cave is, where you led Clavo.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'And then we can find out who - or what - killed Clavo.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': '', 'text': '(Sawa slowly lowers his crossbow)', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'This reeve of yours, he\'d listen to a lowlife like me?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Of course he would - that\'s the law!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'And he\'d believe this crazy story about magic?', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'What\'s crazy about magic? Our priest Jera uses magic, and he\'s the reeve\'s cousin!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': '…well, it\'s not like I can run forever.', 'sound': '' }
		, { 'pic': 'res/faces/sawaSmile.png', 'speaker': 'Sawa', 'text': 'Okay, boy, I\'ll return to the Glade and talk with your Reeve. I\'ll tell him everything I just told you.', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Thanks. I mean that.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Listen, about your town\'s priest-man…', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Jera. Brother Jera.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Yeah. Do me a favor, will ya?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'When you get back to town, talk to this Jera for me.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Tell him I\'m sorry I was mean, that I ran off.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Talk to him before you tell the reeve where I am. Promise?', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'I promise.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'That priest was a good man. Tried hard to save your friend. And…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Yeah?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I\'m sorry. To you too. For running.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'You understand, though, don\'t you?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Yeah, I do.', 'sound': '' }
	], 
	
	"scene4" : [
		{ 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'A spell…only in a coma...', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': '..the burial!!! I have to hurry!!!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as Lemel arrives at the cemetery, Bryce begins shoveling dirt into an open grave)', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Bryce, stop! Clavo\'s in there!', 'sound': '' }
		, { 'pic': 'res/faces/widowFrown.png', 'speaker': 'Widow Starnes', 'text': 'Of course he is, Lemel. We were waiting for you, but-', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': '', 'text': '(Lemel pushes Bryce aside and jumps into the hole)', 'sound': '' }
		, { 'pic': 'res/faces/bryceAngry.png', 'speaker': 'Bryce', 'text': 'What are you doing?!?', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Clavo\'s still alive!', 'sound': '' }
		, { 'pic': 'res/faces/bryceNormal.png', 'speaker': 'Bryce', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/widowFrown.png', 'speaker': 'Widow Starnes', 'text': 'Dear, this has been hard on us all. Please settle down.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Grief can make us do strange things, Lavern.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(From beneath an inch of soil, Lemel lifts a shrouded figure from the hole and rips the cloth away…', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': '', 'text': '…to reveal Clavo\'s distorted face!)', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': '!!!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Look at his face - he must have been buried alive!', 'sound': '' }
		, { 'pic': 'res/faces/bryceAngry.png', 'speaker': 'Bryce', 'text': 'His hands are dirty! He was trying to claw out!', 'sound': '' }
		, { 'pic': 'res/faces/widowFrown.png', 'speaker': 'Widow Starnes', 'text': 'He couldn\'t breathe down there!', 'sound': '' }
		, { 'pic': 'res/faces/jeraSurprised.png', 'speaker': 'Brother Jera', 'text': 'Stand back! KURA-', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': '', 'text': '(before finishing the spell, Jera falls on his side)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Jera! What happened?!?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': '…third spell in one day…too much for me…', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Damnit!', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': '', 'text': '(Lemel lifts Clavo\'s head to his and breathes into his mouth)', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': '…puff…puff…', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Come on, Clavo, not after all this!', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': '…puff…puff…', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/clavoOut.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': '…GAH!....', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': '!!!', 'sound': '' }
		, { 'pic': 'res/faces/clavoStruggle.png', 'speaker': 'Clavo', 'text': '..cough..cough…', 'sound': '' }
		, { 'pic': 'res/faces/widowNormal.png', 'speaker': 'Widow Starnes', 'text': 'Oh, Clavo! My boy!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteTalk.png', 'speaker': 'Lissette', 'text': 'It\'s a miracle!', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'It\'s not a miracle. Just…a long story.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel and Bryce help Clavo out of his own grave)', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': '..ah…gasp…thanks?...', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Clavo, I thought we lost you, man!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': '…what…happening…', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'Heh. Isn\'t that our question?', 'sound': '' }
	],
	
	"scene5" : [
		  { 'pic': 'res/faces/blankFace.png', 'speaker': '  ', 'text': '(Donte looks up as Lemel walks back into the Guild Hall)', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'So, did you find out anything?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Yeah. I did.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': '', 'text': '(Lemel repeats Sawa\'s story to the reeve)', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'He promised to return and tell you all this.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I see.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Do you believe Sawa?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I do.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I\'m sorry to hear that - because so do I.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '?!?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Do you know what Clavo studied at university?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Um…he mentioned something in his letters…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Mathematics, I think. And…history?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Ancient history, Lemel. Extremely ancient history.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Specifically - the history of Talem\'s Glade.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Our history? This town isn\'t even 20 years old!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Yes, but what about this area? We weren\'t always here.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Centuries ago, there was another city. And sorcerers. Some may still be around.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Wait - how could someone from hundreds of years ago still be around?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Not all sorcerers stay human, Lemel.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Clavo could have told us more. But….', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '….', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Did you learn anything else?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I…I..', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Go ahead.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I thought Sawa killed Clavo. I really did at first.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Not surprising.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'But now…I don\'t know who the killer is…and…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…I don\'t even know what\'s going on….', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Lemel, would you have been happier if Sawa had killed Clavo?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And then you could have killed Sawa yourself?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I…I…', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': '', 'text': '(Lemel breaks down)', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': 'Lemel', 'text': '…sob…sob….', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I know how you feel.', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': 'Lemel', 'text': 'You don\'t!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Yes I do. I\'m older than you. I\'ve lost friends before.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Jera is about to conduct the funeral. Are you ready?', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': 'Lemel', 'text': '…sniff…yes….', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Good, then let\'s go.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Trust me - you discovered more than you realize yet.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Donte and Lemel leave the hall towards the cemetery)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER - you reached Ending Number 2)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(This wasn\'t the worst ending, but it wasn\'t the best either)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Can you find the best?)', 'sound': '' }
	], 
	
	"scene6" : [
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as Lemel wanders around, Donte walks up to him)', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Well, Lemel, what have you discovered?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I…well…I spoke to some people.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…nothing.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I see.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'This is a hard time for you, Lemel. Don\'t worry.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We still have an official investigation ahead.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I\'ll have to write to the League. I\'m sure they\'ll find the stranger and find out what happened.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I …wanted to find the killer myself.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I know. But some things are better left to the proper authorities.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Still, I wish I could have found out something useful.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I feel like something important\'s going on. But….I have no idea.', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': 'Lemel', 'text': 'Gods…I wish Clavo was here. I miss him already.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We all do, Lemel. We all do.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Now come along. Jera should be starting the ceremony. You need to say goodbye.', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': '', 'text': '(Lemel just nods slightly and follows Donte to the graveyard)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER - you reached Ending Number 3)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Unfortunately, this was the worst ending possible)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Please try again…and this time….', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '…be more careful when evaluating your clues!)', 'sound': '' }
	], 
	
	"scene7" : [
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the next morning, at the Garden Shrine)', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Is he going to be okay?', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'Definitely. You got to him in time. Nice work there.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Good, because I\'ve got some questions to ask.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'You mean - like how did I die?', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'That\'ll do for starters.', 'sound': '' }
		, { 'pic': 'res/faces/clavoStruggle.png', 'speaker': '', 'text': '(Clavo sighs and leans back on the cot)', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Hey, can\'t you let him rest a bit?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'No, Lemel - this is more important than one man\'s life. Isn\'t it, Clavo?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Yeah. Jera, did you find a map on me the night I…I died?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'This scroll? It has your name on it, and some words in Pontolingvo.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'The rest were all scribbles, though.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': '', 'text': '(Clavo unrolls the scroll and lays it out)', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'It\'s a map. Drawing isn\'t my strong suit, but it was enough to find the cavern.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Cavern?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Lemel, let Clavo explain. Clavo, maybe you should begin at the start.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Sure. You could say it began when we were kids, Lemel.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Remember the stories Uncle Nue told us, about the ruins around the Glade?', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Some of those stories were real! I found the records at university.', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'There really was once a great city near here. A powerful city, on the Great Highway.', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'A whole city? What happened to it?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Destroyed. Centuries ago. During the Second Horde War, correct?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Yeah. But there were survivors, and they left behind their stories.', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'It was a great city. They had artifacts - and people - of great power.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Great people…like…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Sorcerers. Isn\'t that right, Clavo?', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Yes! And one of then, he never died!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Instead, his followers put him away, asleep, in a crypt…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Which you found, presumably.', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Yes! Inside - it was like a grand underground cathedral. And in his crypt - still alive, beckoning to me.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And what did he offer you, Clavo? Power? Riches?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And what did we want? More followers? Maybe even a church?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…yes. He did offer those things. And that\'s what he wanted.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I refused. And that\'s when he cast the spell…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Well, Clavo, I applaud you resisting the temptation of power…', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Well, I-', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': '…but you DIDN\'T resist the temptation of knowledge!', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'What were you thinking!', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'Didn\'t I warn you in my letters? Leave sleeping dogs lie?', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Hey, stop that!', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'Thanks to you, Talem\'s Glade - no, the whole League - is in danger.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…no…', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'My dear cousin, you seem to know a lot more than we do.', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'How long have you known about Clavo\'s studies?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'For a year now. We wrote each other. I warned him-', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'And you alerted the League, of course, about this danger?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'And the Grandmarchy too, no doubt? As reeve, that\'s your responsibility.', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'I took the steps I deemed necessary to dissuade our young scholar here.', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Bullshit! You knew everything! This is your fault too!', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'Listen, young man - I\'m getting tired of your outbursts-', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'He\'s right, Donte. This is your fault too.', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'This isn\'t time to point fingers or assign blame. When we settled Talem\'s Glade, we knew the risk.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'The ruins are all around us; we weren\'t blind. We settled anyway.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…well then, now what?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'We respond. Talem\'s Glade has had problems before.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'If the Glade could survive a horde attack, we can stand up to a single magician.', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': 'A single magician? Haven\'t you been listening? A god on earth!', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'A god who couldn\'t even kill the boy who found his hiding hole?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…we\'re still in danger.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'I know. But it\'s not hopeless. It may not even be that bad.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Well, I suppose I should figure out what to report to the League.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Yes. Good start. And I\'m sure I can find out more about this would-be god.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Donte leaves the shrine)', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'I\'m glad that\'s out of the way.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Wait a minute! Destroyed city? Sorcerer god? What else did you find?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I never heard of any of this before!', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'It\'s a long story, Lemel. And it goes back a thousand years ago-', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Long story this, long story that. Enough long stories for today! Clavo, you need to rest.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I…fine. Just, Clavo?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Yes?', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Get better, alright? I want to hear the rest of this story soon. We all do.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'I think I can handle that…', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER - You reached Ending Number 1)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Congratulations - this is the best ending!)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(However, the story is just beginning...)', 'sound': '' }
	]
};
