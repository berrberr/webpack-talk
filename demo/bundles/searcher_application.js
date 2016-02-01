/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(CardSearcher, CardNode) {
	  var cardContainer, searcher;
	  searcher = new CardSearcher();
	  cardContainer = document.getElementById("cards-container");
	  return window.searchCards = function(query) {
	    if (!(query.length > 2)) {
	      return [];
	    }
	    cardContainer.innerHTML = "";
	    return searcher.search(query).forEach(function(cardInfo) {
	      var cardNode;
	      cardNode = new CardNode(cardInfo);
	      return cardContainer.appendChild(cardNode.build());
	    });
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Do not push the big red button!",
			"cost": 5,
			"id": "GVG_111",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Mimiron's Head",
			"text": "At the start of your turn, if you have at least 3 Mechs, destroy them all and form V-07-TR-0N.",
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Clint Langley",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "This spell has been renamed so many times, even paladins don’t know what it should be called anymore.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_371",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Hand of Protection",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Give a minion <b>Divine Shield</b>.",
			"collectible": true
		},
		{
			"artist": "Ladronn",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "They're still embarassed about \"The Deathwing Incident\".",
			"cost": 4,
			"id": "CS2_131",
			"mechanics": [
				"CHARGE"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Stormwind Knight",
			"howToEarnGolden": "Unlocked at Paladin Level 55.",
			"text": "<b>Charge</b>",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Gabor Szikszai",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Now with 100% more blast!",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_004",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Arcane Blast",
			"text": "Deal $2 damage to a minion. This spell gets double bonus from <b>Spell Damage</b>.",
			"collectible": true
		},
		{
			"artist": "Skan Srisuwan",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "It takes a lot to wind him up.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 17,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "AT_096",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Clockwork Knight",
			"text": "<b>Battlecry:</b> Give a friendly Mech +1/+1.",
			"targetingArrowText": "Give +1/+1.",
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Gonzalo Ordonez",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "She promises not to tell anyone about that thing you did last night with that one person.",
			"cost": 1,
			"id": "EX1_080",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Secretkeeper",
			"text": "Whenever a <b>Secret</b> is played, gain +1/+1.",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Jaemin Kim",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "This guy gets crazy strong at family reunions.",
			"cost": 1,
			"id": "EX1_509",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Murloc Tidecaller",
			"text": "Whenever a Murloc is summoned, gain +1 Attack.",
			"health": 2,
			"race": "MURLOC"
		},
		{
			"artist": "Jessica Jung",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Sure the extra protection is nice, but the shield really reduces visibility.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_004",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Power Word: Shield",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Give a minion +2 Health.\nDraw a card.",
			"collectible": true
		},
		{
			"artist": "Ron Spencer",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 4,
			"flavor": "She's actually a male tauren.  People don't call him \"Master of Disguise\" for nothing.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "NEW1_014",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Master of Disguise",
			"text": "<b>Battlecry:</b> Give a friendly minion <b>Stealth</b>.",
			"collectible": true,
			"health": 4,
			"targetingArrowText": "Give <b>Stealth</b>."
		},
		{
			"artist": "Romain De Santi",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "When the ground is on fire, you should <i>not</i> stop, drop, and roll.",
			"cost": 7,
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_032",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Flamestrike",
			"howToEarnGolden": "Unlocked at Level 51.",
			"text": "Deal $4 damage to all enemy minions.",
			"collectible": true
		},
		{
			"artist": "Greg Staples",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "He got his name when he gave Blackwing some comic books and rock & roll records.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND": 0
			},
			"howToEarn": "Unlocked by defeating Maloriak in the Hidden Laboratory.",
			"id": "BRM_034",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Blackwing Corruptor",
			"howToEarnGolden": "Can be crafted after defeating Maloriak in the Hidden Laboratory.",
			"text": "<b>Battlecry</b>: If you're holding a Dragon, deal 3 damage.",
			"health": 4,
			"targetingArrowText": "Deal 3 damage."
		},
		{
			"artist": "E.M. Gist",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "He's currently trying to craft a \"flail-axe\", but all the other swordsmiths say it can't be done.",
			"cost": 2,
			"id": "NEW1_037",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Master Swordsmith",
			"text": "At the end of your turn, give another random friendly minion +1 Attack.",
			"health": 3
		},
		{
			"artist": "Mauro Cascioli",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "For the person who just cannot decide what card to put into a deck!",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "DS1_184",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Tracking",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Look at the top three cards of your deck. Draw one and discard the others.",
			"collectible": true
		},
		{
			"artist": "Phroilan Gardner",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 2,
			"flavor": "His specialty? Dividing things into four pieces.",
			"cost": 5,
			"id": "GVG_060",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Quartermaster",
			"text": "<b>Battlecry:</b> Give your Silver Hand Recruits +2/+2.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Greg Staples",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "Ragnaros was summoned by the Dark Iron dwarves, who were eventually enslaved by the Firelord.  Summoning Ragnaros often doesn’t work out the way you want it to.",
			"cost": 8,
			"id": "EX1_298",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Ragnaros the Firelord",
			"text": "Can't attack. At the end of your turn, deal 8 damage to a random enemy.",
			"health": 8
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 5,
			"flavor": "If you can't find a bomb to throw, just pick up any goblin invention and throw that.",
			"cost": 4,
			"id": "GVG_004",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Goblin Blastmage",
			"text": "<b>Battlecry:</b> If you have a Mech, deal 4 damage randomly split among all enemies.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Trevor Jacobs",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Their wings are silent but their screech is... whatever the opposite of silent is.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "CS2_203",
			"targetingArrowText": "<b>Silence</b> a minion.",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Ironbeak Owl",
			"text": "<b>Battlecry:</b> <b>Silence</b> a minion.",
			"faction": "HORDE",
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "Laurel D. Austin",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Hobgoblins are meeting next week to discuss union benefits.  First on the list: dental plan.",
			"cost": 3,
			"id": "GVG_104",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Hobgoblin",
			"text": "Whenever you play a 1-Attack minion, give it +2/+2.",
			"health": 3
		},
		{
			"artist": "Simon Bisley",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 2,
			"flavor": "He used to work as an accountant before he tried his hand at Berserkering.",
			"cost": 3,
			"id": "EX1_604",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Frothing Berserker",
			"textInPlay": "Berserk",
			"text": "Whenever a minion takes damage, gain +1 Attack.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"text": "Trigger all <b>Deathrattles</b> on your minions.",
			"playerClass": "HUNTER",
			"cost": 2,
			"name": "Feign Death",
			"rarity": "EPIC",
			"set": "GVG",
			"flavor": "The hardest part about doing a \"Feign Death\" convincingly is learning how to make the right smell. It takes a lot of commitment.",
			"collectible": true,
			"id": "GVG_026"
		},
		{
			"artist": "Tyson Murphy",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Lance Carrier is an obscure entry level position in orcish armies.  A mystery, since orcs don't generally use lances.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "AT_084",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Lance Carrier",
			"text": "<b>Battlecry:</b> Give a friendly minion +2 Attack.",
			"health": 2,
			"targetingArrowText": "Give +2 Attack."
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "SHAMAN",
			"health": 30,
			"rarity": "FREE",
			"name": "Thrall",
			"collectible": true,
			"id": "HERO_02"
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Coming soon... to a tuskarr village near you!",
			"cost": 5,
			"id": "AT_119",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Kvaldir Raider",
			"text": "<b>Inspire:</b> Gain +2/+2.",
			"health": 4
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "HUNTER",
			"health": 30,
			"rarity": "FREE",
			"name": "Rexxar",
			"collectible": true,
			"id": "HERO_05"
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "\"What if we put guns on it?\" -Fizzblitz, staring at the spider-transportation-machine",
			"cost": 3,
			"id": "GVG_044",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Spider Tank",
			"health": 4,
			"race": "MECHANICAL"
		},
		{
			"artist": "Arthur Gimaldinov",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "The Coldlight murlocs reside in the darkest pits of the Abyssal Depths.  So no, there's no getting away from murlocs.",
			"cost": 3,
			"id": "EX1_103",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Coldlight Seer",
			"text": "<b>Battlecry:</b> Give ALL other Murlocs +2 Health.",
			"health": 3,
			"race": "MURLOC"
		},
		{
			"artist": "Jomaro Kindred",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 4,
			"flavor": "It takes a special kind of hunter to venture deep into a firey lava pit and convince a monster who lives there to come home and be a cuddly housepet.",
			"cost": 4,
			"howToEarn": "Unlocked by defeating Highlord Omokk in Blackrock Spire.",
			"id": "BRM_014",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "RARE",
			"name": "Core Rager",
			"howToEarnGolden": "Can be crafted after defeating Highlord Omokk in Blackrock Spire.",
			"text": "<b>Battlecry:</b> If your hand is empty, gain +3/+3.",
			"collectible": true,
			"health": 4,
			"race": "BEAST"
		},
		{
			"artist": "Ian Ameling",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Baron Geddon was Ragnaros's foremost lieutenant, until he got FIRED.",
			"cost": 7,
			"id": "EX1_249",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Baron Geddon",
			"text": "At the end of your turn, deal 2 damage to ALL other characters.",
			"health": 5
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He can see really far, and he doesn't use a telescope like those filthy pirates.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "CS2_117",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Earthen Ring Farseer",
			"text": "<b>Battlecry:</b> Restore 3 Health.",
			"health": 3,
			"targetingArrowText": "Restore 3 Health."
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 6,
			"flavor": "The Sen'jin High football team is The Gahz'rillas.",
			"cost": 7,
			"id": "GVG_049",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Gahz'rilla",
			"text": "Whenever this minion takes damage, double its Attack.",
			"collectible": true,
			"health": 9,
			"race": "BEAST"
		},
		{
			"artist": "Tyler Walpole",
			"type": "SPELL",
			"text": "All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card.",
			"playerClass": "HUNTER",
			"cost": 2,
			"name": "Flare",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "Not only does it reveal your enemies, but it's also great for parties!",
			"collectible": true,
			"id": "EX1_544"
		},
		{
			"artist": "Brian Huang",
			"type": "WEAPON",
			"playerClass": "ROGUE",
			"attack": 3,
			"flavor": "Guaranteed to have been owned by a real assassin.   Certificate of authenticity included.",
			"collectible": true,
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_080",
			"howToEarnGolden": "Unlocked at Level 32.",
			"set": "CORE",
			"cost": 5,
			"rarity": "COMMON",
			"name": "Assassin's Blade",
			"durability": 4
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Training Ogres in the art of spellcasting is a questionable decision.",
			"cost": 4,
			"id": "CS2_197",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Ogre Magi",
			"howToEarnGolden": "Unlocked at Warlock Level 55.",
			"text": "<b>Spell Damage +1</b>",
			"health": 4
		},
		{
			"artist": "Ben Olson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"Rise from your grave!\" - Kel'Thuzad",
			"cost": 3,
			"howToEarn": "Unlocked by defeating The Four Horsemen in the Military Quarter.",
			"id": "FP1_009",
			"mechanics": [
				"DEATHRATTLE",
				"TAUNT"
			],
			"set": "NAXX",
			"rarity": "RARE",
			"name": "Deathlord",
			"howToEarnGolden": "Can be crafted after defeating The Four Horsemen in the Military Quarter.",
			"text": "<b>Taunt. Deathrattle:</b> Your opponent puts a minion from their deck into the battlefield.",
			"health": 8
		},
		{
			"artist": "Wei Wang",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "His youthful enthusiasm doesn’t always equal excellence in his brews.   Don’t drink the Mogu Stout!",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_049",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Youthful Brewmaster",
			"text": "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
			"faction": "ALLIANCE",
			"health": 2,
			"targetingArrowText": "Return a minion to your hand."
		},
		{
			"artist": "Guangjian Huang",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 0,
			"flavor": "You can usually find these at the totemist's market on Saturdays.",
			"cost": 2,
			"id": "GVG_039",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Vitality Totem",
			"text": "At the end of your turn, restore 4 Health to your hero.",
			"collectible": true,
			"health": 3,
			"race": "TOTEM"
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "\"I solemnly swear to uphold the Light, purge the world of darkness, and to eat only burritos.\" - The Argent Dawn Oath",
			"cost": 1,
			"id": "EX1_008",
			"mechanics": [
				"DIVINE_SHIELD"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Argent Squire",
			"text": "<b>Divine Shield</b>",
			"faction": "ALLIANCE",
			"health": 1
		},
		{
			"artist": "Paul Mafayon",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "Ragnaros interviews hundreds of Fire Elementals for the position of \"Destroyer\" but very few have what it takes.",
			"cost": 4,
			"howToEarn": "Unlocked by defeating Lord Victor Nefarius in Blackwing Lair.",
			"id": "BRM_012",
			"mechanics": [
				"BATTLECRY",
				"OVERLOAD"
			],
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Fireguard Destroyer",
			"howToEarnGolden": "Can be crafted after defeating Lord Victor Nefarius in Blackwing Lair.",
			"text": "<b>Battlecry:</b> Gain 1-4 Attack. <b>Overload:</b> (1)",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "My advice to you is to avoid Doom, if possible.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_320",
			"entourage": [
				"EX1_306",
				"CS2_065",
				"EX1_319",
				"EX1_301",
				"CS2_059",
				"CS2_064"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Bane of Doom",
			"text": "Deal $2 damage to a character. If that kills it, summon a random Demon.",
			"collectible": true
		},
		{
			"artist": "Justin Thavirat",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "Eggs are a good source of protein and Nerubians.",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Maexxna in the Arachnid Quarter.",
			"id": "FP1_007",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "RARE",
			"name": "Nerubian Egg",
			"howToEarnGolden": "Can be crafted after defeating Maexxna in the Arachnid Quarter.",
			"text": "<b>Deathrattle:</b> Summon a 4/4 Nerubian.",
			"health": 2
		},
		{
			"artist": "Chippy",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "It's spells like these that make it hard for Warlocks to get decent help.",
			"cost": 4,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_062",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Hellfire",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "Deal $3 damage to ALL characters.",
			"collectible": true
		},
		{
			"artist": "Glenn Rane",
			"type": "WEAPON",
			"playerClass": "PALADIN",
			"attack": 1,
			"flavor": "Prince Malchezaar was a collector of rare weapons. He'd animate them and have them dance for him.",
			"collectible": true,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_091",
			"howToEarnGolden": "Unlocked at Level 36.",
			"set": "CORE",
			"cost": 1,
			"rarity": "FREE",
			"name": "Light's Justice",
			"durability": 4
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 8,
			"flavor": "The best defense against King Krush is to have someone you don’t like standing in front of you.",
			"cost": 9,
			"id": "EX1_543",
			"mechanics": [
				"CHARGE"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "King Krush",
			"text": "<b>Charge</b>",
			"collectible": true,
			"health": 8,
			"race": "BEAST"
		},
		{
			"artist": "Jaime Jones",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Each year, folk gather in front of Blackrock Mountain to mourn those who were mind-controlled into the lava.",
			"cost": 5,
			"howToEarn": "Unlocked by completing the Paladin Class Challenge in Blackrock Mountain.",
			"id": "BRM_001",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Solemn Vigil",
			"howToEarnGolden": "Can be crafted after completing the Paladin Class Challenge in Blackrock Mountain.",
			"text": "Draw 2 cards. Costs (1) less for each minion that died this turn.",
			"collectible": true
		},
		{
			"artist": "Marcelo Vignali",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Flash!  Ahhhhhhh~",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "AT_055",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Flash Heal",
			"text": "Restore #5 Health.",
			"collectible": true
		},
		{
			"artist": "Blizzard Cinematics",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 1,
			"flavor": "These wyrms feed on arcane energies, and while they are generally considered a nuisance rather than a real threat, you really shouldn't leave them alone with a bucket of mana.",
			"cost": 1,
			"id": "NEW1_012",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Mana Wyrm",
			"textInPlay": "Gorging",
			"text": "Whenever you cast a spell, gain +1 Attack.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Dang, Bomber, calm down.",
			"cost": 5,
			"id": "GVG_090",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Madder Bomber",
			"text": "<b>Battlecry:</b> Deal 6 damage randomly split between all other characters.",
			"health": 4
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "'Flesheating' is an unfair name.  It's just that there's not really much else for him to eat.",
			"cost": 3,
			"id": "tt_004",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Flesheating Ghoul",
			"textInPlay": "Cannibalism",
			"text": "Whenever a minion dies, gain +1 Attack.",
			"health": 3
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 3,
			"flavor": "Come at me, bro.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_069",
			"mechanics": [
				"BATTLECRY",
				"TAUNT"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Sparring Partner",
			"text": "<b>Taunt</b>\n<b>Battlecry:</b> Give a\nminion <b>Taunt</b>.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Grant <b>Taunt</b>."
		},
		{
			"artist": "Clint Langley",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 2,
			"flavor": "The elements respond to anyone who calls them for a worthy cause, even if you call them by yelling, \"MRGHRGLGLGL!\"",
			"cost": 4,
			"id": "GVG_040",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Siltfin Spiritwalker",
			"text": "Whenever another friendly Murloc dies, draw a card. <b>Overload</b>: (1)",
			"collectible": true,
			"health": 5,
			"race": "MURLOC"
		},
		{
			"artist": "Benjamin Zhang",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "You see, it's all about <i>throughput</i>.",
			"cost": 4,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 2
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "DS1_183",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Multi-Shot",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Deal $3 damage to two random enemy minions.",
			"collectible": true
		},
		{
			"artist": "Nate Bowden",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 5,
			"flavor": "Originally he was called \"Anub'ar Guy who bounces a guy back to your hand\", but it lacked a certain zing.",
			"cost": 4,
			"howToEarn": "Unlocked by completing the Rogue Class Challenge in Naxxramas.",
			"id": "FP1_026",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Anub'ar Ambusher",
			"howToEarnGolden": "Can be crafted after completing the Rogue Class Challenge in Naxxramas.",
			"text": "<b>Deathrattle:</b> Return a random friendly minion to your hand.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Daren Bader",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Edward \"Lefty\" Smith tried to make luggage out of a river crocolisk once.",
			"cost": 2,
			"id": "CS2_120",
			"set": "CORE",
			"rarity": "FREE",
			"name": "River Crocolisk",
			"howToEarnGolden": "Unlocked at Druid Level 55.",
			"health": 3,
			"race": "BEAST"
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "blaarghghLLGHRHARAAHAHHH!!",
			"cost": 5,
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_046",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Bloodlust",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Give your minions +3 Attack this turn.",
			"collectible": true
		},
		{
			"artist": "Daarken",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 0,
			"flavor": "Spawn of the Light? Or Pawn of the Lights?",
			"cost": 4,
			"id": "EX1_335",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Lightspawn",
			"text": "This minion's Attack is always equal to its Health.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Take the time for an evil laugh after you draw this card.",
			"cost": 10,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_279",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Pyroblast",
			"text": "Deal $10 damage.",
			"collectible": true
		},
		{
			"artist": "Velvet Engine",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 5,
			"flavor": "Call her \"Tweety\".  She'll find it real funny.  I PROMISE.",
			"cost": 9,
			"id": "AT_045",
			"mechanics": [
				"AURA"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Aviana",
			"text": "Your minions cost (1).",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 3,
			"flavor": "After the debacle of the Gnomish World Enlarger, gnomes are wary of size-changing inventions.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_011",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Shrinkmeister",
			"text": "<b>Battlecry:</b> Give a minion -2 Attack this turn.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Give -2 Attack this turn."
		},
		{
			"artist": "Ryan Sook",
			"type": "WEAPON",
			"playerClass": "PALADIN",
			"attack": 4,
			"flavor": "It Slices, it Dices. You can cut a tin can with it. (But you wouldn't want to.)",
			"collectible": true,
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_097",
			"howToEarnGolden": "Unlocked at Level 40.",
			"set": "CORE",
			"cost": 4,
			"rarity": "COMMON",
			"name": "Truesilver Champion",
			"durability": 2,
			"text": "Whenever your hero attacks, restore 2 Health to it."
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "\"I'm gonna light you up, sweetcheeks!\"",
			"cost": 2,
			"id": "NEW1_029",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Millhouse Manastorm",
			"text": "<b>Battlecry:</b> Enemy spells cost (0) next turn.",
			"health": 4
		},
		{
			"artist": "Phil Saunders",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "These are the brainy murlocs.  It turns out that doesn’t mean much.",
			"cost": 1,
			"id": "EX1_508",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Grimscale Oracle",
			"howToEarnGolden": "Unlocked at Warlock Level 53.",
			"text": "ALL other Murlocs have +1 Attack.",
			"health": 1,
			"race": "MURLOC"
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "Onyxia long manipulated the Stormwind Court by disguising herself as Lady Katrana Prestor.   You would have thought that the giant wings and scales would have been a giveaway.",
			"cost": 9,
			"id": "EX1_562",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Onyxia",
			"text": "<b>Battlecry:</b> Summon 1/1 Whelps until your side of the battlefield is full.",
			"health": 8,
			"race": "DRAGON"
		},
		{
			"artist": "Skan Srisuwan",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "It's not HER fault you didn't put a spinning saw blade on your horse.",
			"cost": 1,
			"id": "AT_133",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Gadgetzan Jouster",
			"text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain +1/+1.",
			"health": 2
		},
		{
			"artist": "Phroilan Gardner",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 2,
			"flavor": "\"I'm going to need you to come in on Sunday.\" - Cruel Taskmaster",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_603",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Cruel Taskmaster",
			"text": "<b>Battlecry:</b> Deal 1 damage to a minion and give it +2 Attack.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Deal 1 damage and grant +2 Attack."
		},
		{
			"artist": "Bernie Kang",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 3,
			"flavor": "If you feed him, he loses his whole <i>identity</i>.",
			"cost": 5,
			"howToEarn": "Unlocked at Level 4.",
			"id": "CS2_237",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Starving Buzzard",
			"textInPlay": "Soaring",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Whenever you summon a Beast, draw a card.",
			"collectible": true,
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "If you are often bathed in Holy Light, you should consider wearing sunscreen.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_089",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Holy Light",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Restore #6 Health.",
			"collectible": true
		},
		{
			"artist": "Daren Bader",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 6,
			"flavor": "He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_623",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Temple Enforcer",
			"text": "<b>Battlecry:</b> Give a friendly minion +3 Health.",
			"collectible": true,
			"health": 6,
			"targetingArrowText": "Give +3 Health."
		},
		{
			"artist": "Mark Gibbons",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "You can rationalize it all you want, it's still a mean thing to do.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_MAX_ATTACK": 3,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_NUM_MINION_SLOTS": 1,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "EX1_334",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Shadow Madness",
			"text": "Gain control of an enemy minion with 3 or less Attack until end of turn.",
			"collectible": true
		},
		{
			"artist": "Ben Olson",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "This is better than Arcane Explosion, so I guess warriors are finally getting revenge on mages for Mortal Strike being worse than Fireball.",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Razorgore in Blackwing Lair.",
			"id": "BRM_015",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Revenge",
			"howToEarnGolden": "Can be crafted after defeating Razorgore in Blackwing Lair.",
			"text": "Deal $1 damage to all minions. If you have 12 or less Health, deal $3 damage instead.",
			"collectible": true
		},
		{
			"artist": "Brad Vancata",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Not to be confused with Jim of the Wild.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_009",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Mark of the Wild",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Give a minion <b>Taunt</b> and +2/+2.<i> (+2 Attack/+2 Health)</i>",
			"collectible": true
		},
		{
			"artist": "Terese Nielsen",
			"type": "SPELL",
			"text": "<b>Choose One</b> - Gain 2 Mana Crystals; or Draw 3 cards.",
			"playerClass": "DRUID",
			"cost": 5,
			"name": "Nourish",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "Druids take nourishment from many things: the power of nature, the songbird's chirp, a chocolate cake.",
			"collectible": true,
			"id": "EX1_164"
		},
		{
			"artist": "Richie Marella",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Grunting is what his father did and his father before that.   It's more than just a job.",
			"cost": 2,
			"id": "CS2_121",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Frostwolf Grunt",
			"howToEarnGolden": "Unlocked at Shaman Level 57.",
			"text": "<b>Taunt</b>",
			"health": 2
		},
		{
			"artist": "Seamus Gallagher",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"Shhh, I think I hear something.\"\n\"Ah, it's probably nothing.\" - Every Henchman",
			"cost": 2,
			"id": "GVG_081",
			"mechanics": [
				"STEALTH"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Gilblin Stalker",
			"text": "<b>Stealth</b>",
			"health": 3
		},
		{
			"artist": "Ron Spears",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "But not the lowliest!",
			"cost": 1,
			"id": "AT_082",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Lowly Squire",
			"text": "<b>Inspire:</b> Gain +1 Attack.",
			"health": 2
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He really just wants to be your friend, but the constant rejection is starting to really get to him.",
			"cost": 1,
			"id": "EX1_029",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Leper Gnome",
			"text": "<b>Deathrattle:</b> Deal 2 damage to the enemy hero.",
			"health": 1
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "If you don't pay attention, you may be turned into a pig.  And then you get your name on the board.",
			"cost": 4,
			"id": "NEW1_026",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Violet Teacher",
			"text": "Whenever you cast a spell, summon a 1/1 Violet Apprentice.",
			"health": 5
		},
		{
			"artist": "Richard Wright",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "\"Cast Moonfire, and never stop.\" - How to Be a Druid, Chapter 5, Section 3",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 6.",
			"id": "CS2_008",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Moonfire",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Deal $1 damage.",
			"collectible": true
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "MAGE",
			"health": 30,
			"rarity": "FREE",
			"name": "Jaina Proudmoore",
			"collectible": true,
			"id": "HERO_08"
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Several paladins have joined together to deliver justice under the name \"Justice Force\".  Their lawyer talked them out of calling themselves the Justice League.",
			"cost": 1,
			"howToEarn": "Unlocked by completing the Paladin Class Challenge in Naxxramas.",
			"id": "FP1_020",
			"mechanics": [
				"SECRET"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Avenge",
			"howToEarnGolden": "Can be crafted after completing the Paladin Class Challenge in Naxxramas.",
			"text": "<b>Secret:</b> When one of your minions dies, give a random friendly minion +3/+2.",
			"collectible": true
		},
		{
			"artist": "Lucas Graciano",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Volcanic Drakes breathe lava instead of fire. The antacid vendor at Thorium Point does a brisk business with them.",
			"cost": 6,
			"howToEarn": "Unlocked by defeating Omnotron Defense System in the Hidden Laboratory.",
			"id": "BRM_025",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Volcanic Drake",
			"howToEarnGolden": "Can be crafted after defeating Omnotron Defense System in the Hidden Laboratory.",
			"text": "Costs (1) less for each minion that died this turn.",
			"health": 4,
			"race": "DRAGON"
		},
		{
			"artist": "Marcleo Vignali",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "The ethereals have their own jousting tournament, and Saraad is the reigning champion.  Also he won the ethereal hot dog eating contest.",
			"cost": 5,
			"id": "AT_127",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Nexus-Champion Saraad",
			"text": "<b>Inspire:</b> Add a random spell to your hand.",
			"health": 5
		},
		{
			"artist": "Karl Richardson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Voodoo is an oft-misunderstood art. But it <i>is</i> art.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "EX1_011",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Voodoo Doctor",
			"howToEarnGolden": "Unlocked at Rogue Level 55.",
			"text": "<b>Battlecry:</b> Restore 2 Health.",
			"faction": "HORDE",
			"health": 1,
			"targetingArrowText": "Restore 2 Health."
		},
		{
			"artist": "Andrew Hou",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Only goblins would think this was a good idea. Even they are starting to have their doubts.",
			"cost": 3,
			"playRequirements": {
				"REQ_MINIMUM_TOTAL_MINIONS": 1
			},
			"id": "GVG_050",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Bouncing Blade",
			"text": "Deal $1 damage to a random minion. Repeat until a minion dies.",
			"collectible": true
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 4,
			"flavor": "She was born to be something.  She is just not quite sure what yet...",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 20,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "AT_040",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Wildwalker",
			"text": "<b>Battlecry:</b> Give a friendly Beast +3 Health.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Nate Bowden",
			"type": "WEAPON",
			"playerClass": "SHAMAN",
			"attack": 2,
			"flavor": "Yo, that's a nice axe.",
			"collectible": true,
			"id": "EX1_247",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "EXPERT1",
			"cost": 2,
			"rarity": "COMMON",
			"name": "Stormforged Axe",
			"durability": 3,
			"text": "<b>Overload:</b> (1)"
		},
		{
			"artist": "Ralph Horsley",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "If you combine it with Spooned Lightning and Knived Lightning, you have the full dining set.",
			"cost": 1,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 2
			},
			"id": "EX1_251",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Forked Lightning",
			"text": "Deal $2 damage to 2 random enemy minions. <b>Overload:</b> (2)",
			"collectible": true
		},
		{
			"artist": "Efrem Palacios",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 2,
			"flavor": "He led the Stonemasons in the reconstruction of Stormwind, and when the nobles refused to pay, he founded the Defias Brotherhood to, well, <i>deconstruct</i> Stormwind.",
			"cost": 3,
			"id": "EX1_613",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Edwin VanCleef",
			"text": "<b>Combo:</b> Gain +2/+2 for each card played earlier this turn.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "FROST SHOCK!",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_037",
			"mechanics": [
				"FREEZE"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Frost Shock",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Deal $1 damage to an enemy character and <b>Freeze</b> it.",
			"collectible": true
		},
		{
			"artist": "Trent Kaniuga",
			"type": "SPELL",
			"text": "<b>Choose One -</b> Summon 5 Wisps; or Give a minion +5/+5 and <b>Taunt</b>.",
			"playerClass": "DRUID",
			"cost": 6,
			"name": "Dark Wispers",
			"rarity": "EPIC",
			"set": "GVG",
			"flavor": "Don't worry; we fired the person who named this card.",
			"collectible": true,
			"id": "GVG_041"
		},
		{
			"artist": "Wayne Reynolds",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "It starts with stealing a pen from work, and before you know it, BOOM!  Corrupted!",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_063",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Corruption",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Choose an enemy minion. At the start of your turn, destroy it.",
			"collectible": true
		},
		{
			"artist": "Carl Critchlow",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 1,
			"flavor": "Her sister is the Mistress of Pane who sells windows and shower doors.",
			"cost": 2,
			"id": "GVG_018",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Mistress of Pain",
			"text": "Whenever this minion deals damage, restore that much Health to your hero.",
			"collectible": true,
			"health": 4,
			"race": "DEMON"
		},
		{
			"artist": "Gonzalo Ordonez",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Repentance often comes in the moment before obliteration. Curious.",
			"cost": 1,
			"id": "EX1_379",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Repentance",
			"text": "<b>Secret:</b> When your opponent plays a minion, reduce its Health to 1.",
			"collectible": true
		},
		{
			"artist": "Jomaro Kindred",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "It's like putting racing stripes and a giant spoiler on your hero power.",
			"cost": 6,
			"id": "AT_132",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Justicar Trueheart",
			"text": "<b>Battlecry:</b> Replace your starting Hero Power with a better one.",
			"health": 3
		},
		{
			"artist": "Steve Tappin",
			"type": "SPELL",
			"text": "<b>Choose One</b> - Give your minions +1/+1; or Summon a 3/2 Panther.",
			"playerClass": "DRUID",
			"cost": 2,
			"name": "Power of the Wild",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "Never look a panther in the eye.  Or is it 'Always look a panther in the eye'?  Well, it's one of those.",
			"collectible": true,
			"id": "EX1_160"
		},
		{
			"artist": "Gino Whitehall",
			"type": "WEAPON",
			"playerClass": "HUNTER",
			"attack": 2,
			"flavor": "For the times when a regular bazooka just isn't enough.",
			"collectible": true,
			"id": "GVG_043",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"cost": 2,
			"rarity": "COMMON",
			"name": "Glaivezooka",
			"durability": 2,
			"text": "<b>Battlecry:</b> Give a random friendly minion +1 Attack."
		},
		{
			"artist": "Raven Mimura",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "\"You go first.\" - Krush'gor the Behemoth, to his pet boar.",
			"cost": 3,
			"id": "EX1_294",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Mirror Entity",
			"text": "<b>Secret:</b> When your opponent plays a minion, summon a copy of it.",
			"collectible": true
		},
		{
			"artist": "Chris Rahn",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Oozes love Flamenco.  Don't ask.",
			"cost": 2,
			"id": "EX1_066",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Acidic Swamp Ooze",
			"howToEarnGolden": "Unlocked at Rogue Level 57.",
			"text": "<b>Battlecry:</b> Destroy your opponent's weapon.",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Favored by shaman who study the art of restoration and healing, this spell would feel smug, if it had feelings.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "AT_048",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Healing Wave",
			"text": "Restore #7 Health. Reveal a minion in each deck. If yours costs more, Restore #14 instead.",
			"collectible": true
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "Time to write some flavor text.",
			"cost": 9,
			"id": "EX1_560",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Nozdormu",
			"textInPlay": "Aspect of Time",
			"text": "Players only have 15 seconds to take their turns.",
			"health": 8,
			"race": "DRAGON"
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"text": "<b>Choose One</b> - Deal $3 damage to a minion; or $1 damage and draw a card.",
			"playerClass": "DRUID",
			"cost": 2,
			"name": "Wrath",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "The talk around the Ratchet Inn is that this card is too good and should be a Legendary.",
			"collectible": true,
			"id": "EX1_154"
		},
		{
			"artist": "Luca Zontini",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 4,
			"flavor": "Cat or Bear?  Cat or Bear?!  I just cannot CHOOSE!",
			"cost": 5,
			"id": "EX1_165",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Druid of the Claw",
			"text": "<b>Choose One -</b> <b>Charge</b>; or +2 Health and <b>Taunt</b>.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Mauricio Herrera",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Calling something a flamecannon really doesn't do much to distinguish it from other goblin devices.",
			"cost": 2,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 1
			},
			"id": "GVG_001",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Flamecannon",
			"text": "Deal $4 damage to a random enemy minion.",
			"collectible": true
		},
		{
			"artist": "Greg Staples",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Listen all y'all it's a saboteur!",
			"cost": 3,
			"id": "AT_086",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Saboteur",
			"text": "<b>Battlecry:</b> Your opponent's Hero Power costs (5) more next turn.",
			"health": 3
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "A step up from a spell cast by many beginning acolytes: \"Shadow Word: Annoy\".",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_TARGET_MAX_ATTACK": 3
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_234",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Shadow Word: Pain",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Destroy a minion with 3 or less Attack.",
			"collectible": true
		},
		{
			"artist": "Lucas Graciano",
			"type": "SPELL",
			"text": "Draw cards until you have as many in hand as your opponent.",
			"playerClass": "PALADIN",
			"cost": 3,
			"name": "Divine Favor",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "This is not just a favor, but a divine one, like helping someone move a couch with a fold out bed!",
			"collectible": true,
			"id": "EX1_349"
		},
		{
			"artist": "Sedhayu Ardian",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Having Arcane golems at home really classes up the place, and as a bonus they are great conversation pieces.",
			"cost": 3,
			"id": "EX1_089",
			"mechanics": [
				"BATTLECRY",
				"CHARGE"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Arcane Golem",
			"text": "<b>Charge</b>. <b>Battlecry:</b> Give your opponent a Mana Crystal.",
			"health": 2
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "\"If you only use one ability, use Mortal Strike.\" - The Warrior Code, Line 6",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_408",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Mortal Strike",
			"text": "Deal $4 damage. If you have 12 or less Health, deal $6 instead.",
			"collectible": true
		},
		{
			"artist": "Matt Cavotta",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Spellbreakers can rip enchantments from magic-wielders.  The process is painless and can be performed on an outpatient basis.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_048",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Spellbreaker",
			"text": "<b>Battlecry:</b> <b>Silence</b> a minion.",
			"faction": "HORDE",
			"health": 3,
			"targetingArrowText": "<b>Silence</b> a minion."
		},
		{
			"artist": "Steve Hui",
			"type": "SPELL",
			"text": "Give your minions <b>Stealth</b> until your next turn.",
			"playerClass": "ROGUE",
			"cost": 1,
			"name": "Conceal",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "Rogues conceal everything but their emotions.  You can't get 'em to shut up about feelings.",
			"collectible": true,
			"id": "EX1_128"
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 6,
			"flavor": "Guardians used to be built out of Adamantium, but production got moved to Gadgetzan and Cobalt was cheap.",
			"cost": 5,
			"id": "GVG_062",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Cobalt Guardian",
			"text": "Whenever you summon a Mech, gain <b>Divine Shield</b>.",
			"collectible": true,
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "He's almost been right so many times. He was <i>sure</i> it was coming during the Cataclysm.",
			"cost": 2,
			"id": "NEW1_021",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Doomsayer",
			"text": "At the start of your turn, destroy ALL minions.",
			"health": 7
		},
		{
			"artist": "Grace Liu",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "What do they roar? Nobody can quite tell, but it sounds like \"Elephant Macho Breeze\".  It's probably not that, though.",
			"cost": 3,
			"howToEarn": "Unlocked at Level 4.",
			"id": "CS2_011",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Savage Roar",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Give your characters +2 Attack this turn.",
			"collectible": true
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 6,
			"flavor": "The Iron Juggernaut guards Orgrimmar and has just earned the \"Employee of the Month\" award!",
			"cost": 6,
			"id": "GVG_056",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Iron Juggernaut",
			"text": "<b>Battlecry:</b> Shuffle a Mine into your opponent's deck. When drawn, it explodes for 10 damage.",
			"collectible": true,
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Popo Wei",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 4,
			"flavor": "The Kirin Tor reside in the floating city of Dalaran.  How do you make a Dalaran float?  Two scoops of ice cream, one scoop of Dalaran.",
			"cost": 3,
			"id": "EX1_612",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Kirin Tor Mage",
			"text": "<b>Battlecry:</b> The next <b>Secret</b> you play this turn costs (0).",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Zoltan Boros",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 6,
			"flavor": "He may sound surly and antisocial, but he's actually just really shy.",
			"cost": 6,
			"id": "AT_079",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Mysterious Challenger",
			"text": "<b>Battlecry:</b> Put one of each <b>Secret</b> from your deck into the battlefield.",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"cost": 5,
			"health": 6,
			"name": "Pit Fighter",
			"rarity": "COMMON",
			"attack": 5,
			"flavor": "What did the pits ever do to you?",
			"set": "TGT",
			"collectible": true,
			"id": "AT_101"
		},
		{
			"artist": "Peet Cooper",
			"type": "WEAPON",
			"playerClass": "SHAMAN",
			"attack": 2,
			"flavor": "You can only pick it up if you are worthy.",
			"collectible": true,
			"id": "AT_050",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "TGT",
			"cost": 4,
			"rarity": "EPIC",
			"name": "Charged Hammer",
			"durability": 4,
			"text": "<b>Deathrattle:</b> Your Hero Power becomes 'Deal 2 damage.'"
		},
		{
			"artist": "Doug Alexander",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "They always have a spare flask of Sunwell Energy Drink™!",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_019",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Shattered Sun Cleric",
			"howToEarnGolden": "Unlocked at Priest Level 53.",
			"text": "<b>Battlecry:</b> Give a friendly minion +1/+1.",
			"health": 2,
			"targetingArrowText": "Give +1/+1."
		},
		{
			"artist": "Mark Zug",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "Lorewalker Cho archives and shares tales from the land of Pandaria, but his favorite story is the one where Joey and Phoebe go on a road trip.",
			"cost": 2,
			"id": "EX1_100",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Lorewalker Cho",
			"text": "Whenever a player casts a spell, put a copy into the other player’s hand.",
			"health": 4
		},
		{
			"artist": "Ruan Jia",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "They call him \"Blackwing\" because he's a black dragon...... and he's got wings.",
			"cost": 9,
			"howToEarn": "Unlocked by defeating every boss in Blackrock Mountain!",
			"id": "BRM_030",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "LEGENDARY",
			"name": "Nefarian",
			"howToEarnGolden": "Can be crafted after completing the Hidden Laboratory.",
			"text": "<b>Battlecry:</b> Add 2 random spells to your hand <i>(from your opponent's class)</i>.",
			"health": 8,
			"race": "DRAGON"
		},
		{
			"artist": "Kevin Chin",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Earth Shock? Shouldn't it be \"Azeroth Shock\"?",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_245",
			"mechanics": [
				"SILENCE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Earth Shock",
			"text": "<b>Silence</b> a minion, then deal $1 damage to it.",
			"collectible": true
		},
		{
			"artist": "Mike Sass",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He's not really all that crazy, he is just not as careful with explosives as he should be.",
			"cost": 2,
			"id": "EX1_082",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Mad Bomber",
			"text": "<b>Battlecry:</b> Deal 3 damage randomly split between all other characters.",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"collectible": true,
			"attack": 9,
			"flavor": "He was obsessed with explosives until he discovered knitting. Now he yells, “SWEATERS! MORE SWEATERS!”",
			"cost": 9,
			"id": "GVG_116",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Mekgineer Thermaplugg",
			"text": "Whenever an enemy minion dies, summon a Leper Gnome.",
			"health": 7,
			"race": "MECHANICAL"
		},
		{
			"artist": "Ben Zhang",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Who argent watches the Argent Watchman?",
			"cost": 2,
			"id": "AT_109",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Argent Watchman",
			"text": "Can't attack.\n<b>Inspire:</b> Can attack as normal this turn.",
			"health": 4
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 4,
			"flavor": "Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.",
			"cost": 8,
			"id": "EX1_414",
			"mechanics": [
				"CHARGE",
				"ENRAGED"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Grommash Hellscream",
			"text": "<b>Charge</b>\n<b>Enrage:</b> +6 Attack",
			"collectible": true,
			"health": 9
		},
		{
			"artist": "Aleksi Briclot",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 7,
			"flavor": "Mimiron likes to take the Flame Leviathan out on some sweet joyrides.",
			"cost": 7,
			"id": "GVG_007",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Flame Leviathan",
			"text": "When you draw this, deal 2 damage to all characters.",
			"collectible": true,
			"health": 7,
			"race": "MECHANICAL"
		},
		{
			"artist": "Eric Browning",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "OOZE... Ooze... Ooze... (ooze...)",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Sapphiron in the Frostwyrm Lair.",
			"id": "FP1_003",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "NAXX",
			"rarity": "EPIC",
			"name": "Echoing Ooze",
			"howToEarnGolden": "Can be crafted after defeating Sapphiron in the Frostwyrm Lair.",
			"text": "<b>Battlecry:</b> Summon an exact copy of this minion at the end of the turn.",
			"health": 2
		},
		{
			"artist": "Cole Eastburn",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "All these guys ever do is talk about the Thunder King.   BOOOORRRINNG!",
			"cost": 4,
			"id": "EX1_396",
			"mechanics": [
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Mogu'shan Warden",
			"text": "<b>Taunt</b>",
			"health": 7
		},
		{
			"artist": "Court Jones",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "She's never quite sure what she's making, she just knows it's AWESOME!",
			"cost": 4,
			"id": "CS2_147",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Gnomish Inventor",
			"howToEarnGolden": "Unlocked at Priest Level 57.",
			"text": "<b>Battlecry:</b> Draw a card.",
			"faction": "ALLIANCE",
			"health": 4
		},
		{
			"artist": "Michael Komarck",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "I see what you did there.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 4.",
			"id": "CS2_003",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Mind Vision",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Put a copy of a random card in your opponent's hand into your hand.",
			"collectible": true
		},
		{
			"artist": "Alex Garner",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 3,
			"flavor": "She really likes seeing people get better.  That's why she hurts them in the first place.",
			"cost": 4,
			"id": "AT_011",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Holy Champion",
			"text": "Whenever a character is healed, gain +2 Attack.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Michael Sutfin",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "It's funny how often yelling \"Look over there!\" gets your opponent to turn around.",
			"cost": 0,
			"playRequirements": {
				"REQ_UNDAMAGED_TARGET": 0,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_072",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Backstab",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Deal $2 damage to an undamaged minion.",
			"collectible": true
		},
		{
			"artist": "Christopher Moeller",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "An umbrella won't be effective, I'm afraid.",
			"cost": 3,
			"id": "EX1_259",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Lightning Storm",
			"text": "Deal $2-$3 damage to all enemy minions. <b>Overload:</b> (2)",
			"collectible": true
		},
		{
			"type": "HERO",
			"set": "HERO_SKINS",
			"playerClass": "MAGE",
			"health": 30,
			"rarity": "EPIC",
			"name": "Medivh",
			"collectible": true,
			"id": "HERO_08a"
		},
		{
			"artist": "Dan Brereton",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "\"Kill 30 raptors.\" - Hemet Nesingwary",
			"cost": 2,
			"id": "CS2_172",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Bloodfen Raptor",
			"howToEarnGolden": "Unlocked at Hunter Level 57.",
			"faction": "HORDE",
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Matt Smith",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Stoneskin Gargoyles love freeze tag.",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Noth the Plaguebringer in the Plague Quarter.",
			"id": "FP1_027",
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Stoneskin Gargoyle",
			"howToEarnGolden": "Can be crafted after defeating Noth the Plaguebringer in the Plague Quarter.",
			"text": "At the start of your turn, restore this minion to full Health.",
			"health": 4
		},
		{
			"artist": "Mike Sass",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Apparently it really was just a flesh wound.",
			"cost": 6,
			"id": "AT_128",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "The Skeleton Knight",
			"text": "<b>Deathrattle:</b> Reveal a minion in each deck. If yours costs more, return this to your hand.",
			"health": 4
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "Westfall is full of dust devils. And buzzards. And crazed golems. And pirates. Why does anyone live here?",
			"cost": 1,
			"id": "EX1_243",
			"mechanics": [
				"OVERLOAD",
				"WINDFURY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Dust Devil",
			"text": "<b>Windfury</b>. <b>Overload:</b> (2)",
			"collectible": true,
			"health": 1
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 2,
			"flavor": "The best part of buccaneering is the pants.",
			"cost": 1,
			"id": "AT_029",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Buccaneer",
			"text": "Whenever you equip a weapon, give it +1 Attack.",
			"collectible": true,
			"health": 1,
			"race": "PIRATE"
		},
		{
			"artist": "Eric Braddock",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 8,
			"flavor": "Was actually a pretty nice guy before, you know, the whole Lich King thing.",
			"cost": 9,
			"id": "AT_036",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Anub'arak",
			"text": "<b>Deathrattle:</b> Return this to your hand and summon a 4/4 Nerubian.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Tyler Walpole",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 0,
			"flavor": "NOT LESS THAN 1!  Don't get any ideas!",
			"cost": 4,
			"id": "EX1_315",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Summoning Portal",
			"textInPlay": "Summoning",
			"text": "Your minions cost (2) less, but not less than (1).",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He'll never admit it, but he pushes you hard because he really cares about you.",
			"cost": 2,
			"id": "AT_080",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Garrison Commander",
			"text": "You can use your Hero Power twice a turn.",
			"health": 3
		},
		{
			"artist": "Jaemin Kim",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Murloc.  It's what's for dinner.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 14,
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "NEW1_017",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Hungry Crab",
			"text": "<b>Battlecry:</b> Destroy a Murloc and gain +2/+2.",
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Luke Mancini",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Harpies are not pleasant sounding.  That's the nicest I can put it.",
			"cost": 6,
			"id": "EX1_033",
			"mechanics": [
				"WINDFURY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Windfury Harpy",
			"text": "<b>Windfury</b>",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Attila Adorjany",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"Does anyone have some extra Boar Pelts?\"",
			"cost": 3,
			"id": "EX1_044",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Questing Adventurer",
			"textInPlay": "Questing",
			"text": "Whenever you play a card, gain +1/+1.",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 5,
			"flavor": "She has three shieldbearers in her party to supply her with back ups when she gets low on durability.",
			"cost": 6,
			"id": "GVG_053",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Shieldmaiden",
			"text": "<b>Battlecry:</b> Gain 5 Armor.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Wei Wang",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 7,
			"flavor": "Leader of the Alliance!  Father of Anduin!  Also he likes to play Arena, and he averages 12 wins.",
			"cost": 10,
			"id": "AT_072",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Varian Wrynn",
			"text": "<b>Battlecry:</b> Draw 3 cards.\nPut any minions you drew directly into the battlefield.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Tom Baxa",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Tinkmaster Overspark nearly lost his Tinker's license after the Great Ironforge Squirrel Stampede of '09.",
			"cost": 3,
			"id": "EX1_083",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Tinkmaster Overspark",
			"text": "<b>Battlecry:</b> Transform another random minion into a 5/5 Devilsaur or a 1/1 Squirrel.",
			"faction": "ALLIANCE",
			"health": 3,
			"targetingArrowText": "Transform a minion into a 5/5 or a 1/1 at random."
		},
		{
			"artist": "Wayne Reynolds",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Bolf keeps coming in 2nd at the Grand Tournament.  It might be his year this year, if Lebron doesn't enter.",
			"cost": 6,
			"id": "AT_124",
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Bolf Ramshield",
			"text": "Whenever your hero takes damage, this minion takes it instead.",
			"health": 9
		},
		{
			"artist": "Gabor Szikszai",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "In the old days, Kobolds were the finest candle merchants in the land. Then they got pushed too far...",
			"cost": 2,
			"id": "CS2_142",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Kobold Geomancer",
			"howToEarnGolden": "Unlocked at Warlock Level 59.",
			"text": "<b>Spell Damage +1</b>",
			"faction": "HORDE",
			"health": 2
		},
		{
			"artist": "James Ryman",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Justice sometimes takes the form of a closed fist into a soft cheek.",
			"cost": 1,
			"id": "EX1_132",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Eye for an Eye",
			"text": "<b>Secret:</b> When your hero takes damage, deal that much damage to the enemy hero.",
			"collectible": true
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.",
			"cost": 6,
			"id": "EX1_067",
			"mechanics": [
				"CHARGE",
				"DIVINE_SHIELD"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Argent Commander",
			"text": "<b>Charge</b>\n<b>Divine Shield</b>",
			"health": 2
		},
		{
			"type": "HERO",
			"set": "HERO_SKINS",
			"playerClass": "HUNTER",
			"health": 30,
			"rarity": "EPIC",
			"name": "Alleria Windrunner",
			"collectible": true,
			"id": "HERO_05a"
		},
		{
			"artist": "Jeff Easley",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 1,
			"flavor": "Keeping tabs on the Grand Tournament is priority #1 for the five mighty Dragonflights!",
			"cost": 2,
			"id": "AT_116",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Wyrmrest Agent",
			"text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Dany Orizio",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "You might think bashing doesn't take a lot of practice.  It doesn't.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "AT_064",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Bash",
			"text": "Deal $3 damage.\nGain 3 Armor.",
			"collectible": true
		},
		{
			"artist": "Samwise",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "He claims it is an old war wound, but we think he just cut himself shaving.",
			"cost": 3,
			"id": "CS2_181",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Injured Blademaster",
			"textInPlay": "Weakened",
			"text": "<b>Battlecry:</b> Deal 4 damage to HIMSELF.",
			"faction": "HORDE",
			"health": 7
		},
		{
			"artist": "Scott Altmann",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Rogues love sappy movies.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_581",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Sap",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Return an enemy minion to your opponent's hand.",
			"collectible": true
		},
		{
			"artist": "Wayne Reynolds",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Hey!  Let me try that...",
			"cost": 6,
			"id": "AT_098",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Sideshow Spelleater",
			"text": "<b>Battlecry:</b> Copy your opponent's Hero Power.",
			"health": 5
		},
		{
			"artist": "Terese Nielsen",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 1,
			"flavor": "They help the downtrodden and distressed.  Also they sell cookies.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_235",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Northshire Cleric",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Whenever a minion is healed, draw a card.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Slawomir Maniak",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Underneath all that impressive armor, he's just skin and bones.  Okay, maybe just bones.",
			"cost": 2,
			"id": "AT_089",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Boneguard Lieutenant",
			"text": "<b>Inspire:</b> Gain +1 Health.",
			"health": 2
		},
		{
			"artist": "Penny Arcade",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Needs just a few more ratings points to become Grandmaster Jouster.",
			"cost": 6,
			"id": "AT_112",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Master Jouster",
			"text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain <b>Taunt</b> and <b>Divine Shield</b>.",
			"health": 6
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 3,
			"flavor": "The Aldor hate two things: the Scryers and smooth jazz.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "EX1_382",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Aldor Peacekeeper",
			"text": "<b>Battlecry:</b> Change an enemy minion's Attack to 1.",
			"collectible": true,
			"health": 3,
			"targetingArrowText": "Change Attack to 1."
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Your face is the place you'd probably least like a dagger, and where rogues are most likely to deliver them.",
			"cost": 5,
			"id": "EX1_593",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Nightblade",
			"howToEarnGolden": "Unlocked at Druid Level 53.",
			"text": "<b>Battlecry: </b>Deal 3 damage to the enemy hero.",
			"health": 4
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "“That belongs in the Hall of Explorers!”",
			"cost": 5,
			"id": "EX1_558",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Harrison Jones",
			"text": "<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.",
			"health": 4
		},
		{
			"artist": "Peet Cooper",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "The only thing worse than smelling troggs is listening to their poetry.",
			"cost": 2,
			"id": "GVG_067",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Stonesplinter Trogg",
			"text": "Whenever your opponent casts a spell, gain +1 Attack.",
			"health": 3
		},
		{
			"artist": "Gabor Szikszai",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 2,
			"flavor": "Do the slow chant when he waddles by: \"Chug! Chug! Chug!\"",
			"cost": 2,
			"id": "GVG_002",
			"mechanics": [
				"FREEZE"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Snowchugger",
			"text": "<b>Freeze</b> any character damaged by this minion.",
			"collectible": true,
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Christopher Moeller",
			"type": "SPELL",
			"text": "Gain 10 Mana Crystals. Discard your hand.",
			"playerClass": "DRUID",
			"cost": 4,
			"name": "Astral Communion",
			"rarity": "EPIC",
			"set": "TGT",
			"flavor": "Hey!  Moon!  Can I have some mana crystals?",
			"collectible": true,
			"id": "AT_043"
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "If the Holy Light forsakes you, good luck casting this spell.  Also, you're probably a jerk.",
			"cost": 5,
			"howToEarn": "Unlocked at Level 6.",
			"id": "CS1_112",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Holy Nova",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "Deal $2 damage to all enemies. Restore #2 Health to all friendly characters.",
			"collectible": true
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "To be honest, heckling is not the most effective form of evil.",
			"cost": 4,
			"id": "AT_114",
			"mechanics": [
				"TAUNT"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Evil Heckler",
			"text": "<b>Taunt</b>",
			"health": 4
		},
		{
			"artist": "Sam Nielson",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 2,
			"flavor": "The twilight whelps are basically magic-vampires. Despite this, they are not a reference to any popular series of novels.",
			"cost": 1,
			"howToEarn": "Unlocked by completing the Priest Class Challenge in Blackrock Mountain.",
			"id": "BRM_004",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Twilight Whelp",
			"howToEarnGolden": "Can be crafted after completing the Priest Class Challenge in Blackrock Mountain.",
			"text": "<b>Battlecry:</b> If you're holding a Dragon, gain +2 Health.",
			"collectible": true,
			"health": 1,
			"race": "DRAGON"
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 5,
			"flavor": "Everybody wants someone to snuggle with. Even giant armored scaly draconic beasts of destruction.",
			"cost": 5,
			"howToEarn": "Unlocked by defeating General Drakkisath in Blackrock Spire.",
			"id": "BRM_018",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "RARE",
			"name": "Dragon Consort",
			"howToEarnGolden": "Can be crafted after defeating General Drakkisath in Blackrock Spire.",
			"text": "<b>Battlecry:</b> The next Dragon you play costs (2) less.",
			"collectible": true,
			"health": 5,
			"race": "DRAGON"
		},
		{
			"artist": "Trevor Jacobs",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Rogues guard the secrets to poison-making carefully, lest magi start incorporating poison into their spells.  Poisonbolt? Rain of Poison?  Poison Elemental?  Nobody wants that.",
			"cost": 1,
			"playRequirements": {
				"REQ_WEAPON_EQUIPPED": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_074",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Deadly Poison",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Give your weapon +2 Attack.",
			"collectible": true
		},
		{
			"artist": "Ittoku Seta",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "The Shades of Naxxramas <i>hate</i> the living. They even have a slur they use to refer them: <i>Livers</i>.",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Kel'Thuzad in the Frostwyrm Lair.",
			"id": "FP1_005",
			"mechanics": [
				"STEALTH"
			],
			"set": "NAXX",
			"rarity": "EPIC",
			"name": "Shade of Naxxramas",
			"howToEarnGolden": "Can be crafted after defeating Kel'Thuzad in the Frostwyrm Lair.",
			"text": "<b>Stealth.</b> At the start of your turn, gain +1/+1.",
			"health": 2
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "If you pay a little extra, you can get it in \"candy-apple red.\"",
			"cost": 2,
			"id": "GVG_037",
			"mechanics": [
				"WINDFURY"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Whirling Zap-o-matic",
			"text": "<b>Windfury</b>",
			"collectible": true,
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "John Polidora",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "Yes, he'll fight for you.  BUT HE'S NOT GOING TO LIKE IT.",
			"cost": 3,
			"id": "EX1_301",
			"mechanics": [
				"BATTLECRY",
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Felguard",
			"text": "<b>Taunt</b>. <b>Battlecry:</b> Destroy one of your Mana Crystals.",
			"collectible": true,
			"health": 5,
			"race": "DEMON"
		},
		{
			"artist": "Slawomir Maniak",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Drakonids were created to have all the bad parts of a dragon in the form of a humaniod. But, like, why?",
			"cost": 6,
			"howToEarn": "Unlocked by defeating Atramedes in the Hidden Laboratory.",
			"id": "BRM_024",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Drakonid Crusher",
			"howToEarnGolden": "Can be crafted after defeating Atramedes in the Hidden Laboratory.",
			"text": "<b>Battlecry:</b> If your opponent has 15 or less Health, gain +3/+3.",
			"health": 6,
			"race": "DRAGON"
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "Are you lighting a soul on fire? Or burning someone with your OWN soul? This seems like an important distinction.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 6.",
			"id": "EX1_308",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Soulfire",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Deal $4 damage. Discard a random card.",
			"collectible": true
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "If you miss, it leaves a lightning-bolt-shaped scar on your target.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_MIN_ATTACK": 5,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 8.",
			"id": "EX1_622",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Shadow Word: Death",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Destroy a minion with an Attack of 5 or more.",
			"collectible": true
		},
		{
			"artist": "Wayne Reynolds",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Do you know the first rule of Brawl Club?",
			"cost": 5,
			"playRequirements": {
				"REQ_MINIMUM_TOTAL_MINIONS": 2
			},
			"id": "EX1_407",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Brawl",
			"text": "Destroy all minions except one. <i>(chosen randomly)</i>",
			"collectible": true
		},
		{
			"artist": "Ralph Horsley",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "There used to be five Horsemen but one of them left because a job opened up in the deadmines and the benefits were better.",
			"cost": 4,
			"howToEarn": "Unlocked by completing the Military Quarter.",
			"id": "FP1_031",
			"mechanics": [
				"AURA"
			],
			"set": "NAXX",
			"rarity": "LEGENDARY",
			"name": "Baron Rivendare",
			"howToEarnGolden": "Can be crafted after completing the Military Quarter.",
			"text": "Your minions trigger their <b>Deathrattles</b> twice.",
			"health": 7
		},
		{
			"artist": "Jim Nelson",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "This is the reason that Demons never really become friends with Warlocks.",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 15,
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 8.",
			"id": "NEW1_003",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Sacrificial Pact",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Destroy a Demon. Restore #5 Health to your hero.",
			"collectible": true
		},
		{
			"artist": "Alexander Alexandrov",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "If you put this into your deck, you WILL lose the trust of your other minions.",
			"cost": 3,
			"id": "EX1_304",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Void Terror",
			"text": "<b>Battlecry:</b> Destroy the minions on either side of this minion and gain their Attack and Health.",
			"collectible": true,
			"health": 3,
			"race": "DEMON"
		},
		{
			"artist": "Chris Rahn",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 2,
			"flavor": "Likes: Hiking and the great outdoors. Dislikes: Goblin shredders and sandals. (Can’t find any that fit!).",
			"cost": 3,
			"id": "GVG_032",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Grove Tender",
			"text": "<b>Choose One -</b> Give each player a Mana Crystal; or Each player draws a card.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "This robot is a lean, mean, butlerin' machine.",
			"cost": 4,
			"id": "GVG_094",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Jeeves",
			"text": "At the end of each player's turn, that player draws until they have 3 cards.",
			"health": 4,
			"race": "MECHANICAL"
		},
		{
			"artist": "Efrem Palacios",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "A good paladin has many tools.  Hammer of Wrath, Pliers of Vengeance, Hacksaw of Justice, etc.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_094",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Hammer of Wrath",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Deal $3 damage.\nDraw a card.",
			"collectible": true
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Stalagg want to write own flavor text.  \"STALAGG AWESOME!\"",
			"cost": 5,
			"howToEarn": "Unlocked by completing the Construct Quarter.",
			"id": "FP1_014",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "LEGENDARY",
			"name": "Stalagg",
			"howToEarnGolden": "Can be crafted after completing the Construct Quarter.",
			"text": "<b>Deathrattle:</b> If Feugen also died this game, summon Thaddius.",
			"health": 4
		},
		{
			"artist": "Steve Prescott",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 2,
			"flavor": "His imp gang likes to sneak into Stormwind to spraypaint \"Ragnaros Rulez\" on the Mage Tower.",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Majordomo Executus in Molten Core.",
			"id": "BRM_006",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Imp Gang Boss",
			"howToEarnGolden": "Can be crafted after defeating Majordomo Executus in Molten Core.",
			"text": "Whenever this minion takes damage, summon a 1/1 Imp.",
			"collectible": true,
			"health": 4,
			"race": "DEMON"
		},
		{
			"artist": "Dan Scott",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Is this a noun or a verb?  We will never know.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_044",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Mulch",
			"text": "Destroy a minion.\nAdd a random minion to your opponent's hand.",
			"collectible": true
		},
		{
			"artist": "Luca Zontini",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He lobbies Orgrimmar daily on behalf of bombs.",
			"cost": 5,
			"id": "GVG_099",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Bomb Lobber",
			"text": "<b>Battlecry:</b> Deal 4 damage to a random enemy minion.",
			"health": 3
		},
		{
			"artist": "Bernie Kang",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Why did it have to be snakes?",
			"cost": 2,
			"id": "EX1_554",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Snake Trap",
			"text": "<b>Secret:</b> When one of your minions is attacked, summon three 1/1 Snakes.",
			"collectible": true
		},
		{
			"artist": "Dave Allsop",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "This spell blasts you directly in the MIND.",
			"cost": 2,
			"howToEarn": "Unlocked at Level 1.",
			"id": "DS1_233",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Mind Blast",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Deal $5 damage to the enemy hero.",
			"collectible": true
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "DRUID",
			"health": 30,
			"rarity": "FREE",
			"name": "Malfurion Stormrage",
			"collectible": true,
			"id": "HERO_06"
		},
		{
			"artist": "Phroilan Gardner",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "The first time they tried to guard Silvermoon against the scourge, it didn’t go so well…",
			"cost": 4,
			"id": "EX1_023",
			"mechanics": [
				"DIVINE_SHIELD"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Silvermoon Guardian",
			"text": "<b>Divine Shield</b>",
			"faction": "HORDE",
			"health": 3
		},
		{
			"artist": "Samwise",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Adorable.  Immune to Magic.  Doesn't pee on the rug.  The perfect pet!",
			"cost": 2,
			"id": "NEW1_023",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Faerie Dragon",
			"text": "Can't be targeted by spells or Hero Powers.",
			"health": 2,
			"race": "DRAGON"
		},
		{
			"artist": "Alex Garner",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "This is Rank 1.  Rank 2 is Chocolate Milk Barrier.",
			"cost": 3,
			"id": "EX1_289",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Ice Barrier",
			"text": "<b>Secret:</b> When your hero is attacked, gain 8 Armor.",
			"collectible": true
		},
		{
			"artist": "Michael Komarck",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Malygos hates it when mortals use magic.  He gets so mad!",
			"cost": 9,
			"id": "EX1_563",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Malygos",
			"text": "<b>Spell Damage +5</b>",
			"health": 12,
			"race": "DRAGON"
		},
		{
			"artist": "Patrik Hjelm",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 5,
			"flavor": "Go ahead, carve your initials in him.",
			"cost": 7,
			"id": "NEW1_008",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Ancient of Lore",
			"text": "<b>Choose One -</b> Draw 2 cards; or Restore 5 Health.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Evgeniy Zagumennyy",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "His horse's name is Betsy.",
			"cost": 3,
			"id": "AT_087",
			"mechanics": [
				"CHARGE",
				"DIVINE_SHIELD"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Argent Horserider",
			"text": "<b>Charge</b>\n<b>Divine Shield</b>",
			"health": 1
		},
		{
			"artist": "Todd Lockwood",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Left head and right head can never agree about what to eat for dinner, so they always end up just eating ramen again.",
			"cost": 8,
			"howToEarn": "Unlocked by completing Blackwing Lair.",
			"id": "BRM_031",
			"set": "BRM",
			"rarity": "LEGENDARY",
			"name": "Chromaggus",
			"howToEarnGolden": "Can be crafted after completing Blackwing Lair.",
			"text": "Whenever you draw a card, put another copy into your hand.",
			"health": 8,
			"race": "DRAGON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "\"Guys! Guys! Slow down!\" - some kind of non-warrior minion",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_103",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Charge",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Give a friendly minion +2 Attack and <b>Charge</b>.",
			"collectible": true
		},
		{
			"artist": "Lars Grant-West",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 2,
			"flavor": "Tundra rhinos are often mistaken for kodos.  Or am I mistaken?",
			"cost": 5,
			"howToEarn": "Unlocked at Level 8.",
			"id": "DS1_178",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Tundra Rhino",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Your Beasts have <b>Charge</b>.",
			"collectible": true,
			"health": 5,
			"race": "BEAST"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 5,
			"flavor": "Yes, he's a demigod. No, he doesn't need to wear a shirt.",
			"cost": 9,
			"id": "EX1_573",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Cenarius",
			"textInPlay": "Demigod",
			"text": "<b>Choose One</b> - Give your other minions +2/+2; or Summon two 2/2 Treants with <b>Taunt</b>.",
			"collectible": true,
			"health": 8
		},
		{
			"artist": "Phroilan Gardner",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 3,
			"flavor": "The Cult of the Damned has found it's best not to mention their name when recruiting new cultists.",
			"cost": 3,
			"howToEarn": "Unlocked by completing the Priest Class Challenge in Naxxramas.",
			"id": "FP1_023",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Dark Cultist",
			"howToEarnGolden": "Can be crafted after completing the Priest Class Challenge in Naxxramas.",
			"text": "<b>Deathrattle:</b> Give a random friendly minion +3 Health.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Vance Kovacs",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "She can't wait to learn Power Word: Fortitude Rank 2.",
			"cost": 1,
			"id": "EX1_004",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Young Priestess",
			"text": "At the end of your turn, give another random friendly minion +1 Health.",
			"health": 1
		},
		{
			"artist": "Clint Langley",
			"type": "SPELL",
			"text": "The next spell you cast this turn costs (3) less.",
			"playerClass": "ROGUE",
			"cost": 0,
			"name": "Preparation",
			"rarity": "EPIC",
			"set": "EXPERT1",
			"flavor": "\"Be Prepared\" - Rogue Motto",
			"collectible": true,
			"id": "EX1_145"
		},
		{
			"artist": "Steve Prescott",
			"type": "SPELL",
			"text": "Restore all characters to full Health.",
			"playerClass": "DRUID",
			"cost": 9,
			"name": "Tree of Life",
			"rarity": "EPIC",
			"set": "GVG",
			"flavor": "Healing: It grows on trees!",
			"collectible": true,
			"id": "GVG_033"
		},
		{
			"artist": "Andrea Uderzo",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "When there's something strange (say, a gibbering demon) in your neighborhood, who are you going to call?",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 15,
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "AT_106",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Light's Champion",
			"text": "<b>Battlecry:</b> <b>Silence</b> a Demon.",
			"health": 3,
			"targetingArrowText": "<b>Silence</b> a Demon."
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 5,
			"flavor": "Mannoroth, Magtheridon, and Brutallus may be dead, but it turns out there are a LOT of pit lords.",
			"cost": 4,
			"id": "EX1_313",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Pit Lord",
			"text": "<b>Battlecry:</b> Deal 5 damage to your hero.",
			"collectible": true,
			"health": 6,
			"race": "DEMON"
		},
		{
			"artist": "Lorenzo Minaca",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "A great sniper hits the spot.  Just like a delicious flank of boar. Mmmmm.",
			"cost": 2,
			"id": "EX1_609",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Snipe",
			"text": "<b>Secret:</b> When your opponent plays a minion, deal $4 damage to it.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.",
			"cost": 6,
			"playRequirements": {
				"REQ_MUST_TARGET_TAUNTER": 0,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "EX1_002",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "The Black Knight",
			"text": "<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.",
			"health": 5,
			"targetingArrowText": "Destroy a minion with Taunt."
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "WEAPON",
			"playerClass": "WARRIOR",
			"attack": 7,
			"flavor": "Grommash Hellscream's famous axe.  Somehow this ended up in Prince Malchezaar's possession.  Quite the mystery!",
			"collectible": true,
			"id": "EX1_411",
			"set": "EXPERT1",
			"cost": 7,
			"rarity": "EPIC",
			"name": "Gorehowl",
			"durability": 1,
			"text": "Attacking a minion costs 1 Attack instead of 1 Durability."
		},
		{
			"artist": "Leo Che",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Another one bites the dust.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_161",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Naturalize",
			"text": "Destroy a minion. Your opponent draws 2 cards.",
			"collectible": true
		},
		{
			"artist": "Scott Altmann",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 0,
			"flavor": "It is said that some shaman can say \"Floatin' totem\" 10 times, fast.",
			"cost": 3,
			"id": "EX1_575",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Mana Tide Totem",
			"text": "At the end of your turn, draw a card.",
			"collectible": true,
			"health": 3,
			"race": "TOTEM"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "\"You won't like me when I'm angry.\"",
			"cost": 2,
			"playRequirements": {
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_392",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Battle Rage",
			"text": "Draw a card for each damaged friendly character.",
			"collectible": true
		},
		{
			"artist": "Steve Ellis",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "You earn the title of Archmage when you can destroy anyone who calls you on it.",
			"cost": 6,
			"id": "CS2_155",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Archmage",
			"howToEarnGolden": "Unlocked at Mage Level 57.",
			"text": "<b>Spell Damage +1</b>",
			"faction": "ALLIANCE",
			"health": 7
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "A grammatically awkward life saver.",
			"cost": 8,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_354",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Lay on Hands",
			"text": "Restore #8 Health. Draw 3 cards.",
			"collectible": true
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Join the Argent Crusade!  We have attractive tabards and you get to carry really nice swords!",
			"cost": 5,
			"id": "AT_113",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Recruiter",
			"text": "<b>Inspire:</b> Add a 2/2 Squire to your hand.",
			"health": 4
		},
		{
			"artist": "Jakub Kasper",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "They pretend to be wise and enlightened, but they mostly just hate to be left out of a secret.",
			"cost": 4,
			"id": "GVG_074",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Kezan Mystic",
			"text": "<b>Battlecry:</b> Take control of a random enemy <b>Secret</b>.",
			"health": 3
		},
		{
			"artist": "Sean O’Daniels",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 5,
			"flavor": "Young Night Elves love to play \"Who can get the Ancient of War to Uproot?\"  You lose if you get crushed to death.",
			"cost": 7,
			"id": "EX1_178",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Ancient of War",
			"text": "<b>Choose One</b> -\n+5 Attack; or +5 Health and <b>Taunt</b>.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Hideaki Takamura",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 3,
			"flavor": "Don't leave them out in the rain. In Un'Goro Crater there is a whole colony of rust-tooth leapers.",
			"cost": 3,
			"id": "GVG_048",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Metaltooth Leaper",
			"text": "<b>Battlecry</b>: Give your other Mechs +2 Attack.",
			"collectible": true,
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Zoltan and Gabor",
			"type": "WEAPON",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "People assume that shamans control the elements, but really, they have to ask them stuff and the elements are like, \"Yeah ok, sure.\"",
			"collectible": true,
			"id": "GVG_036",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"cost": 3,
			"rarity": "RARE",
			"name": "Powermace",
			"durability": 2,
			"text": "<b>Deathrattle</b>: Give a random friendly Mech +2/+2."
		},
		{
			"artist": "Andrew Robinson",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "I wouldn't say I LOVE knives, but I'm definitely a fan.",
			"cost": 3,
			"howToEarn": "Unlocked at Level 4.",
			"id": "EX1_129",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Fan of Knives",
			"howToEarnGolden": "Unlocked at Level 29.",
			"text": "Deal $1 damage to all enemy minions. Draw a card.",
			"collectible": true
		},
		{
			"artist": "Doug Alexander",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 3,
			"flavor": "The Auchenai know the end is coming, but they're not sure when.",
			"cost": 4,
			"id": "EX1_591",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Auchenai Soulpriest",
			"text": "Your cards and powers that restore Health now deal damage instead.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Clint Langley",
			"type": "SPELL",
			"text": "<b>Choose One</b> - Give a minion +4 Attack; or +4 Health and <b>Taunt</b>.",
			"playerClass": "DRUID",
			"cost": 3,
			"name": "Mark of Nature",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "Druids call it the \"Mark of Nature.\"  Everyone else calls it \"needing a bath.\"",
			"collectible": true,
			"id": "EX1_155"
		},
		{
			"artist": "Ben Wootten",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Someone called her a Rhinorider, and she's NOT HAPPY.",
			"cost": 6,
			"id": "AT_099",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Kodorider",
			"text": "<b>Inspire:</b> Summon a 3/5 War Kodo.",
			"health": 5
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 7,
			"flavor": "A masterless shamurai.",
			"cost": 8,
			"id": "AT_009",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Rhonin",
			"text": "<b>Deathrattle:</b> Add 3 copies of Arcane Missiles to your hand.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount.",
			"cost": 3,
			"id": "EX1_102",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Demolisher",
			"text": "At the start of your turn, deal 2 damage to a random enemy.",
			"health": 4,
			"race": "MECHANICAL"
		},
		{
			"artist": "Malcolm Davis",
			"type": "MINION",
			"cost": 0,
			"health": 1,
			"name": "Wisp",
			"rarity": "COMMON",
			"attack": 1,
			"flavor": "If you hit an Eredar Lord with enough Wisps, it will explode.   But why?",
			"set": "EXPERT1",
			"collectible": true,
			"id": "CS2_231"
		},
		{
			"artist": "Brandon Kitkouski",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "It traps your food AND cooks it for you!",
			"cost": 2,
			"id": "EX1_610",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Explosive Trap",
			"text": "<b>Secret:</b> When your hero is attacked, deal $2 damage to all enemies.",
			"collectible": true
		},
		{
			"artist": "Jonboy Meyers",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Minion get ANGRY.   Minion SMASH!",
			"cost": 2,
			"playRequirements": {
				"REQ_DAMAGED_TARGET": 0,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "CS2_104",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Rampage",
			"text": "Give a damaged minion +3/+3.",
			"collectible": true
		},
		{
			"artist": "Michal Ivan",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Mogor helped reopen the Dark Portal once. You know you're in trouble when you have to rely on an ogre.",
			"cost": 6,
			"id": "GVG_112",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Mogor the Ogre",
			"text": "All minions have a 50% chance to attack the wrong enemy.",
			"health": 6
		},
		{
			"artist": "Sean O’Daniels",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"cost": 6,
			"howToEarn": "Unlocked at Level 8.",
			"id": "NEW1_004",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Vanish",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Return all minions to their owner's hand.",
			"collectible": true
		},
		{
			"artist": "Andrew Hou",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 4,
			"flavor": "With the help of his trusty sidekick Dreadscale, the giant jormungar Acidmaw is ready to face any knight!",
			"cost": 7,
			"id": "AT_063",
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Acidmaw",
			"text": "Whenever another minion takes damage, destroy it.",
			"collectible": true,
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Ittoku",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "I am not sure how you get demptioned the first time.  It’s a mystery!",
			"cost": 1,
			"id": "EX1_136",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Redemption",
			"text": "<b>Secret:</b> When one of your minions dies, return it to life with 1 Health.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 4,
			"flavor": "The Kor'kron are the elite forces of Garrosh Hellscream. Let's just say you don't want to run into these guys while wearing a blue tabard.",
			"cost": 4,
			"howToEarn": "Unlocked at Level 4.",
			"id": "NEW1_011",
			"mechanics": [
				"CHARGE"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Kor'kron Elite",
			"howToEarnGolden": "Unlocked at Level 44.",
			"text": "<b>Charge</b>",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Once upon a time, only goblins piloted shredders. These days, everyone from Doomsayer to Lorewalker Cho seems to ride one.",
			"cost": 4,
			"id": "GVG_096",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Piloted Shredder",
			"text": "<b>Deathrattle:</b> Summon a random 2-Cost minion.",
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Christopher Moeller",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "When Sneed was defeated in the Deadmines, his shredder was sold at auction to an anonymous buyer. (Probably Hogger.)",
			"cost": 8,
			"id": "GVG_114",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Sneed's Old Shredder",
			"text": "<b>Deathrattle:</b> Summon a random legendary minion.",
			"health": 7,
			"race": "MECHANICAL"
		},
		{
			"artist": "Brandon Kitkouski",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 4,
			"flavor": "The Druids of the Fang live in the Wailing Caverns. They wear cool snake shirts and tell snake jokes and say \"bro\" a lot.",
			"cost": 5,
			"id": "GVG_080",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Druid of the Fang",
			"text": "<b>Battlecry:</b> If you have a Beast, transform this minion into a 7/7.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Clint Langley",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Someone did mess with Tuskerr once.  ONCE.",
			"cost": 3,
			"id": "CS2_196",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Razorfen Hunter",
			"howToEarnGolden": "Unlocked at Hunter Level 55.",
			"text": "<b>Battlecry:</b> Summon a 1/1 Boar.",
			"faction": "HORDE",
			"health": 3
		},
		{
			"artist": "Richard Wright",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "You'll never guess what's in that conveniently bear-sized, bear-smelling box. ",
			"cost": 2,
			"id": "AT_060",
			"mechanics": [
				"SECRET"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Bear Trap",
			"text": "<b>Secret:</b> After your hero is attacked, summon a 3/3 Bear with <b>Taunt</b>.",
			"collectible": true
		},
		{
			"artist": "Jonboy Meyers",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Really, if you're a hero, this is <i>every</i> strike.",
			"cost": 2,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_105",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Heroic Strike",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Give your hero +4 Attack this turn.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "\"TRIFLING GNOME! YOUR ARROGANCE WILL BE YOUR UNDOING!!!!\"",
			"cost": 9,
			"id": "EX1_323",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Lord Jaraxxus",
			"text": "<b>Battlecry:</b> Destroy your hero and replace it with Lord Jaraxxus.",
			"collectible": true,
			"health": 15,
			"race": "DEMON"
		},
		{
			"artist": "John Dickenson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "We are pretty excited about the upcoming release of Dire Wolf Beta, just repost this sign for a chance at a key.",
			"cost": 2,
			"id": "EX1_162",
			"mechanics": [
				"ADJACENT_BUFF",
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Dire Wolf Alpha",
			"textInPlay": "Alpha Dog",
			"text": "Adjacent minions have +1 Attack.",
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "E. M. Gist",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Zombie.  It's what's for dinner.",
			"cost": 1,
			"howToEarn": "Unlocked by defeating Gluth in the Construct Quarter.",
			"id": "FP1_001",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Zombie Chow",
			"howToEarnGolden": "Can be crafted after defeating Gluth in the Construct Quarter.",
			"text": "<b>Deathrattle:</b> Restore 5 Health to the enemy hero.",
			"health": 3
		},
		{
			"artist": "Matt Dixon",
			"type": "SPELL",
			"text": "Each time you cast a spell this turn, add a random Hunter card to your hand.",
			"playerClass": "HUNTER",
			"cost": 2,
			"name": "Lock and Load",
			"rarity": "EPIC",
			"set": "TGT",
			"flavor": "Rexxar narrowed his eyes, grabbed his machine gun, and said: \"It's go time.  Lock and load.\"\nThis card pays homage to that special moment.",
			"collectible": true,
			"id": "AT_061"
		},
		{
			"artist": "John Polidora",
			"type": "MINION",
			"collectible": true,
			"attack": 10,
			"flavor": "This massive yeti just closes his eyes and charges at the nearest target.  The nearest Target is a couple blocks away and has sick deals on skateboards.",
			"cost": 9,
			"id": "AT_125",
			"mechanics": [
				"CHARGE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Icehowl",
			"text": "<b>Charge</b>\nCan't attack heroes.",
			"health": 10
		},
		{
			"artist": "Daren Bader",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Sometimes it's as simple as putting on a fake mustache and pointing at someone else.",
			"cost": 2,
			"id": "EX1_533",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Misdirection",
			"text": "<b>Secret:</b> When a character attacks your hero, instead he attacks another random character.",
			"collectible": true
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Always roll need.",
			"cost": 2,
			"id": "EX1_096",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Loot Hoarder",
			"text": "<b>Deathrattle:</b> Draw a card.",
			"health": 1
		},
		{
			"artist": "Benjamin Zhang",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "The message, \"If found, please return to Mulgore,\" is tattooed on his rear.",
			"cost": 4,
			"id": "GVG_071",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Lost Tallstrider",
			"health": 4,
			"race": "BEAST"
		},
		{
			"artist": "Milivoj Ceran",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 6,
			"flavor": "In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.",
			"cost": 6,
			"id": "EX1_534",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Savannah Highmane",
			"textInPlay": "Master",
			"text": "<b>Deathrattle:</b> Summon two 2/2 Hyenas.",
			"collectible": true,
			"health": 5,
			"race": "BEAST"
		},
		{
			"artist": "Dany Orizio",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "It's okay, he deserved it.",
			"cost": 1,
			"playRequirements": {
				"REQ_DAMAGED_TARGET": 0,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_108",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Execute",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Destroy a damaged enemy minion.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 2,
			"flavor": "He has a giant collection of purses now.  One for every outfit!",
			"cost": 2,
			"id": "AT_031",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Cutpurse",
			"text": "Whenever this minion attacks a hero, add the Coin to your hand.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Richard Wright",
			"type": "WEAPON",
			"playerClass": "ROGUE",
			"attack": 1,
			"flavor": "For tightening cogs and smashin' troggs!",
			"collectible": true,
			"id": "GVG_024",
			"mechanics": [
				"AURA"
			],
			"set": "GVG",
			"cost": 3,
			"rarity": "EPIC",
			"name": "Cogmaster's Wrench",
			"durability": 3,
			"text": "Has +2 Attack while you have a Mech."
		},
		{
			"artist": "Steve Hui",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "If you Hex a Murloc... it really isn't much of a change, is it?",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_246",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Hex",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Transform a minion into a 0/1 Frog with <b>Taunt</b>.",
			"collectible": true
		},
		{
			"artist": "Dan Dos Santos",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "\"Are you interested in... HEALTH benefits?!\"",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "AT_015",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Convert",
			"text": "Put a copy of an enemy minion into your hand.",
			"collectible": true
		},
		{
			"artist": "Sean O’Daniels",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "WARNING.  WARNING.  WARNING.",
			"cost": 3,
			"id": "EX1_006",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Alarm-o-Bot",
			"text": "At the start of your turn, swap this minion with a random one in your hand.",
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Laurel D. Austin",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Hogger is super powerful. If you kill him, it's because he <i>let</i> you.",
			"cost": 6,
			"id": "NEW1_040",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Hogger",
			"text": "At the end of your turn, summon a 2/2 Gnoll with <b>Taunt</b>.",
			"health": 4
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Mrrraggglhlhghghlgh, mrgaaag blarrghlgaahahl mrgggg glhalhah a bghhll graggmgmg Garrosh mglhlhlh mrghlhlhl!!",
			"cost": 1,
			"id": "CS2_168",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Murloc Raider",
			"howToEarnGolden": "Unlocked at Priest Level 51.",
			"faction": "ALLIANCE",
			"health": 1,
			"race": "MURLOC"
		},
		{
			"artist": "Dave Kendall",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Golems are not afraid, but for some reason they still run when you cast Fear on them.  Instinct, maybe?  A desire to blend in?",
			"cost": 7,
			"id": "CS2_186",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "War Golem",
			"howToEarnGolden": "Unlocked at Rogue Level 51.",
			"health": 7
		},
		{
			"artist": "Graven Tung",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_144",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Shadowstep",
			"text": "Return a friendly minion to your hand. It costs (2) less.",
			"collectible": true
		},
		{
			"artist": "Alex Garner",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!",
			"cost": 6,
			"id": "EX1_384",
			"mechanics": [
				"ImmuneToSpellpower"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Avenging Wrath",
			"text": "Deal $8 damage randomly split among all enemies.",
			"collectible": true
		},
		{
			"artist": "Brian Despain",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "\"Poisonseed Bagel\" is the least popular bagel at McTiggin's Druidic Bagel Emporium.",
			"cost": 4,
			"howToEarn": "Unlocked by completing the Druid Class Challenge in Naxxramas.",
			"id": "FP1_019",
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Poison Seeds",
			"howToEarnGolden": "Can be crafted after completing the Druid Class Challenge in Naxxramas.",
			"text": "Destroy all minions and summon 2/2 Treants to replace them.",
			"collectible": true
		},
		{
			"artist": "Mike Nicholson",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Filling your Ghouls with Rocket Fuel is all the rage at Necromancer school.",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Heigan the Unclean in the Plague Quarter.",
			"id": "FP1_024",
			"mechanics": [
				"DEATHRATTLE",
				"TAUNT"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Unstable Ghoul",
			"howToEarnGolden": "Can be crafted after defeating Heigan the Unclean in the Plague Quarter.",
			"text": "<b>Taunt</b>. <b>Deathrattle:</b> Deal 1 damage to all minions.",
			"health": 3
		},
		{
			"artist": "Matt Cavotta",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "You can hire him... until someone offers him enough gold to turn on you.",
			"cost": 5,
			"id": "CS2_187",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Booty Bay Bodyguard",
			"howToEarnGolden": "Unlocked at Shaman Level 55.",
			"text": "<b>Taunt</b>",
			"faction": "HORDE",
			"health": 4
		},
		{
			"artist": "Jesper Ejsing",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "\"Light it up!\" - Command given to both Lightwardens and Goblins holding Flamecannons.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "GVG_012",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Light of the Naaru",
			"text": "Restore #3 Health. If the target is still damaged, summon a Lightwarden.",
			"collectible": true
		},
		{
			"artist": "Steve Prescott",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Accuracy is not a highly valued trait among the mok'nathal.  Deadliness is near the top, though.",
			"cost": 3,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 1
			},
			"id": "EX1_617",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Deadly Shot",
			"text": "Destroy a random enemy minion.",
			"collectible": true
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 2,
			"flavor": "Punching is its primary function. Also, its secondary function.",
			"cost": 2,
			"id": "GVG_072",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Shadowboxer",
			"text": "Whenever a character is healed, deal 1 damage to a random enemy.",
			"collectible": true,
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "This soul just <i>wails</i> on you. Dang, soul, let up already.",
			"cost": 4,
			"howToEarn": "Unlocked by defeating Thaddius in the Construct Quarter.",
			"id": "FP1_016",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "NAXX",
			"rarity": "RARE",
			"name": "Wailing Soul",
			"howToEarnGolden": "Can be crafted after defeating Thaddius in the Construct Quarter.",
			"text": "<b>Battlecry: Silence</b> your other minions.",
			"health": 5
		},
		{
			"artist": "Samwise",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Loatheb used to be a simple Bog Beast.  This is why we need stricter regulations on mining and agriculture.",
			"cost": 5,
			"howToEarn": "Unlocked by completing the Plague Quarter.",
			"id": "FP1_030",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "NAXX",
			"rarity": "LEGENDARY",
			"name": "Loatheb",
			"howToEarnGolden": "Can be crafted after completing the Plague Quarter.",
			"text": "<b>Battlecry:</b> Enemy spells cost (5) more next turn.",
			"health": 5
		},
		{
			"artist": "Miguel Coimbra",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Often followed by Holy Smokes!",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_624",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Holy Fire",
			"text": "Deal $5 damage. Restore #5 Health to your hero.",
			"collectible": true
		},
		{
			"artist": "Doug Alexander",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 2,
			"flavor": "\"I'm not saying you can dodge fireballs.  I'm saying with this shield, you won't have to.\"",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_362",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Argent Protector",
			"text": "<b>Battlecry:</b> Give a friendly minion <b>Divine Shield</b>.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Give <b>Divine Shield</b>."
		},
		{
			"artist": "Chris Rahn",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "What do Faerie Dragons and Spectral Knights have in common?  They both love pasta!",
			"cost": 5,
			"howToEarn": "Unlocked by defeating Gothik the Harvester in the Military Quarter.",
			"id": "FP1_008",
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Spectral Knight",
			"howToEarnGolden": "Can be crafted after defeating Gothik the Harvester in the Military Quarter.",
			"text": "Can't be targeted by spells or Hero Powers.",
			"health": 6
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 2,
			"flavor": "He doesn't even get Sundays off.  Every day he's hostling.",
			"cost": 3,
			"id": "AT_075",
			"mechanics": [
				"AURA"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Warhorse Trainer",
			"text": "Your Silver Hand Recruits have +1 Attack.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Chippy",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 4,
			"flavor": "You never know who may be secretly working for the Cabal....",
			"cost": 6,
			"playRequirements": {
				"REQ_MINION_CAP_IF_TARGET_AVAILABLE": 2,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_TARGET_MAX_ATTACK": 2,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "EX1_091",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Cabal Shadow Priest",
			"text": "<b>Battlecry:</b> Take control of an enemy minion that has 2 or less Attack.",
			"collectible": true,
			"health": 5,
			"targetingArrowText": "Steal a minion that has 2 or less Attack."
		},
		{
			"artist": "Wayne Reynolds",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "His second greatest regret is summoning an evil Firelord who enslaved his entire people.",
			"cost": 6,
			"howToEarn": "Unlocked by completing Blackrock Depths.",
			"id": "BRM_028",
			"set": "BRM",
			"rarity": "LEGENDARY",
			"name": "Emperor Thaurissan",
			"howToEarnGolden": "Can be crafted after completing Blackrock Depths.",
			"text": "At the end of your turn, reduce the Cost of cards in your hand by (1).",
			"health": 5
		},
		{
			"artist": "Dan Scott",
			"type": "SPELL",
			"text": "Put a random minion from each player's hand into the battlefield.",
			"playerClass": "SHAMAN",
			"cost": 4,
			"name": "Ancestor's Call",
			"rarity": "EPIC",
			"set": "GVG",
			"flavor": "\"Hey! Ancestors!\" - Ancestor's call",
			"collectible": true,
			"id": "GVG_029"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "BOOM BABY BOOM!  BAD IS GOOD!  DOWN WITH GOVERNMENT!",
			"cost": 2,
			"id": "NEW1_020",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Wild Pyromancer",
			"text": "After you cast a spell, deal 1 damage to ALL minions.",
			"health": 2
		},
		{
			"artist": "Carl Frank",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Ice is nice, and will suffice!",
			"cost": 3,
			"id": "EX1_295",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Ice Block",
			"text": "<b>Secret:</b> When your hero takes fatal damage, prevent it and become <b>Immune</b> this turn.",
			"collectible": true
		},
		{
			"artist": "Ben Wootten",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "Demonfire is like regular fire except for IT NEVER STOPS BURNING HELLLPPP",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_596",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Demonfire",
			"text": "Deal $2 damage to a minion. If it’s a friendly Demon, give it +2/+2 instead.",
			"collectible": true
		},
		{
			"artist": "Jaemin Kim",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Twilight drakes feed on Mystical Energy.  And Tacos.",
			"cost": 4,
			"id": "EX1_043",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Twilight Drake",
			"text": "<b>Battlecry:</b> Gain +1 Health for each card in your hand.",
			"health": 1,
			"race": "DRAGON"
		},
		{
			"artist": "Daren Bader",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Pirates and Parrots go together like Virmen and Carrots.",
			"cost": 2,
			"howToEarn": "Unlocked when you have all the Pirates from the Classic Set.",
			"id": "NEW1_016",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "REWARD",
			"rarity": "EPIC",
			"name": "Captain's Parrot",
			"howToEarnGolden": "Unlocked when you have all the Golden Pirates from the Expert Set.",
			"text": "<b>Battlecry:</b> Put a random Pirate from your deck into your hand.",
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "\"No, no, no. I asked for a tiny JESTER of evil.\"",
			"cost": 2,
			"id": "AT_021",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Tiny Knight of Evil",
			"text": "Whenever you discard a card, gain +1/+1.",
			"collectible": true,
			"health": 2,
			"race": "DEMON"
		},
		{
			"artist": "Jon McConnell",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "They like to dance to reggae.",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Instructor Razuvious in the Military Quarter.",
			"id": "FP1_029",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Dancing Swords",
			"howToEarnGolden": "Can be crafted after defeating Instructor Razuvious in the Military Quarter.",
			"text": "<b>Deathrattle:</b> Your opponent draws a card.",
			"health": 4
		},
		{
			"artist": "Tom Baxa",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Pull the pin, count to 5, then shoot.  Then duck.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_537",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Explosive Shot",
			"text": "Deal $5 damage to a minion and $2 damage to adjacent ones.",
			"collectible": true
		},
		{
			"artist": "John Polidora",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "No Job is too big.  No fee is too big.",
			"cost": 5,
			"id": "CS2_227",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Venture Co. Mercenary",
			"text": "Your minions cost (3) more.",
			"faction": "HORDE",
			"health": 6
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "After a while, you don't see the cogs and sprockets. All you see is a robot, a spider tank, a deathray...",
			"cost": 1,
			"id": "GVG_013",
			"mechanics": [
				"AURA"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Cogmaster",
			"text": "Has +2 Attack while you have a Mech.",
			"health": 2
		},
		{
			"artist": "Sean O’Daniels",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "When a bear rears back and extends his arms, he's about to Swipe!  ... or hug.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 8.",
			"id": "CS2_012",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Swipe",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Deal $4 damage to an enemy and $1 damage to all other enemies.",
			"collectible": true
		},
		{
			"artist": "Steve Prescott",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Good idea: Buffing your minions.  Bad idea: Starting a conversation in the Barrens.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "CS1_129",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Inner Fire",
			"text": "Change a minion's Attack to be equal to its Health.",
			"collectible": true
		},
		{
			"artist": "Slawomir Maniak",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "They're only smiling on the outside.",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_607",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Inner Rage",
			"text": "Deal $1 damage to a minion and give it +2 Attack.",
			"collectible": true
		},
		{
			"artist": "Bobby Chiu",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "If you love getting your face punched, come to the Grim Guzzler!",
			"cost": 5,
			"howToEarn": "Unlocked by defeating The Grim Guzzler in Blackrock Depths.",
			"id": "BRM_019",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Grim Patron",
			"howToEarnGolden": "Can be crafted after defeating The Grim Guzzler in Blackrock Depths.",
			"text": "Whenever this minion survives damage, summon another Grim Patron.",
			"health": 3
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "His mother wanted him to be a mage or a warlock, but noooooooo, he had to go and be a scientist like his father.",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Grobbulus in the Construct Quarter.",
			"id": "FP1_004",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Mad Scientist",
			"howToEarnGolden": "Can be crafted after defeating Grobbulus in the Construct Quarter.",
			"text": "<b>Deathrattle:</b> Put a <b>Secret</b> from your deck into the battlefield.",
			"health": 2
		},
		{
			"artist": "Carl Critchlow",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "Have you seen the size of the shields in this game??  This is no easy job.",
			"cost": 1,
			"id": "EX1_405",
			"mechanics": [
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Shieldbearer",
			"text": "<b>Taunt</b>",
			"health": 4
		},
		{
			"artist": "Zoltan Boros",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "\"As in, you MIGHT want to get out of my way.\" - Toad Mackle, recently buffed.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_087",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Blessing of Might",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "Give a minion +3 Attack.",
			"collectible": true
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "Demons are not angry most of the time. You have to play this card in order to really bring it out of them.",
			"cost": 3,
			"howToEarn": "Unlocked by completing the Warlock Class Challenge in Blackrock Mountain.",
			"id": "BRM_005",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Demonwrath",
			"howToEarnGolden": "Can be crafted after completing the Warlock Class Challenge in Blackrock Mountain.",
			"text": "Deal $2 damage to all non-Demon minions.",
			"collectible": true
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"LUMOS!\" is not what they yell. What do you think this is, Hogwarts?",
			"cost": 3,
			"id": "GVG_089",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Illuminator",
			"text": "If you control a <b>Secret</b> at the end of your turn, restore 4 health to your hero.",
			"health": 4
		},
		{
			"artist": "Sojin Hwang",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 4,
			"flavor": "After playing against 5 Annoy-O-Trons, any normal guard will become a Wrathguard.",
			"cost": 2,
			"id": "AT_026",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Wrathguard",
			"text": "Whenever this minion takes damage, also deal that amount to your hero.",
			"collectible": true,
			"health": 3,
			"race": "DEMON"
		},
		{
			"artist": "Skan Srisuwan",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "This card is the real thing.",
			"cost": 2,
			"id": "GVG_103",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Micro Machine",
			"text": "At the start of each turn, gain +1 Attack.",
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Tim McBurnie",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Do Murlocs ever get tired of making the same old sound?  Nope!  Mrglglrglglglglglglgl!",
			"cost": 3,
			"id": "EX1_507",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Murloc Warleader",
			"text": "ALL other Murlocs have +2/+1.",
			"health": 3,
			"race": "MURLOC"
		},
		{
			"artist": "Steve Prescott",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "This champion has learned from the best.  Except for his target selection.",
			"cost": 6,
			"id": "AT_088",
			"mechanics": [
				"FORGETFUL"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Mogor's Champion",
			"text": "50% chance to attack the wrong enemy.",
			"health": 5
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Balance is important to druids.  This card is perfectly balanced.",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 2.",
			"id": "EX1_173",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Starfire",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "Deal $5 damage.\nDraw a card.",
			"collectible": true
		},
		{
			"artist": "Ralph Horsley",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 6,
			"flavor": "He can never take a bath. Ewww.",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_042",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Fire Elemental",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "<b>Battlecry:</b> Deal 3 damage.",
			"collectible": true,
			"health": 5,
			"targetingArrowText": "Deal 3 damage."
		},
		{
			"artist": "Eva Widermann",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 2,
			"flavor": "This is a \"bearly\" concealed reference.",
			"cost": 1,
			"id": "AT_059",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Brave Archer",
			"text": "<b>Inspire:</b> If your hand is empty, deal 2 damage to the enemy hero.",
			"collectible": true,
			"health": 1
		},
		{
			"artist": "Bernie Kang",
			"type": "MINION",
			"collectible": true,
			"attack": 12,
			"flavor": "Once a noble dragon known as Neltharion, Deathwing lost his mind and shattered Azeroth before finally being defeated.  Daddy issues?",
			"cost": 10,
			"id": "NEW1_030",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Deathwing",
			"text": "<b>Battlecry:</b> Destroy all other minions and discard your hand.",
			"health": 12,
			"race": "DRAGON"
		},
		{
			"artist": "Jim Nelson",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Oh hey it's Mirror Image! !egamI rorriM s'ti yeh hO",
			"cost": 1,
			"playRequirements": {
				"REQ_NUM_MINION_SLOTS": 1
			},
			"howToEarn": "Unlocked at Level 4.",
			"id": "CS2_027",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Mirror Image",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Summon two 0/2 minions with <b>Taunt</b>.",
			"collectible": true
		},
		{
			"artist": "Tyson Murphy",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 4,
			"flavor": "Takes way better care of her pets than her brother, Unstablemaster.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 20,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "AT_057",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Stablemaster",
			"text": "<b>Battlecry:</b> Give a friendly Beast <b>Immune</b> this turn.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Grant <b>Immune</b> this turn."
		},
		{
			"artist": "Arthur Bozonnet",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "And he can't get up.",
			"cost": 2,
			"id": "AT_003",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Fallen Hero",
			"text": "Your Hero Power deals 1 extra damage.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"text": "Deal damage to each minion equal to its Attack.",
			"playerClass": "PRIEST",
			"cost": 6,
			"name": "Lightbomb",
			"rarity": "EPIC",
			"set": "GVG",
			"flavor": "This is what happens when you allow goblins to be priests.",
			"collectible": true,
			"id": "GVG_008"
		},
		{
			"artist": "Jeff Haynie",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "If you're looking to make an \"Emo\" deck, this card is perfect!",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "GVG_015",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Darkbomb",
			"text": "Deal $3 damage.",
			"collectible": true
		},
		{
			"artist": "Jonboy Meyers",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 2,
			"flavor": "Bane of spellcasters and spelling bees everywhere.",
			"cost": 4,
			"id": "GVG_122",
			"mechanics": [
				"AURA"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Wee Spellstopper",
			"text": "Adjacent minions can't be targeted by spells or Hero Powers.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Dave Berggren",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Playing this card makes you SMARTER.  And let's face it: we could all stand to be a little smarter.",
			"cost": 3,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_023",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Arcane Intellect",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Draw 2 cards.",
			"collectible": true
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "To operate, this contraption needs a hula doll on the dashboard. Otherwise it's just a “falling machine.”",
			"cost": 3,
			"id": "GVG_084",
			"mechanics": [
				"WINDFURY"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Flying Machine",
			"text": "<b>Windfury</b>",
			"health": 4,
			"race": "MECHANICAL"
		},
		{
			"artist": "Steve Ellis",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "It is customary to yell \"Chill out!\" or \"Freeze!\" or \"Ice ice, baby!\" when you play this card.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_024",
			"mechanics": [
				"FREEZE"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Frostbolt",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Deal $3 damage to a character and <b>Freeze</b> it.",
			"collectible": true
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "You don't see a lot of Dalaran warriors.",
			"cost": 3,
			"id": "EX1_582",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Dalaran Mage",
			"howToEarnGolden": "Unlocked at Mage Level 59.",
			"text": "<b>Spell Damage +1</b>",
			"health": 4
		},
		{
			"artist": "Jonboy Meyers",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Han shot first.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked by completing the Hunter Class Challenge in Blackrock Mountain.",
			"id": "BRM_013",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Quick Shot",
			"howToEarnGolden": "Can be crafted after completing the Hunter Class Challenge in Blackrock Mountain.",
			"text": "Deal $3 damage.\nIf your hand is empty, draw a card.",
			"collectible": true
		},
		{
			"artist": "Nutthapon Petchthai",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Gormok has been giving impaling lessons in a small tent near the tournament grounds.  For only 25g you too could learn the fine art of impaling!",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_MINIONS": 4
			},
			"id": "AT_122",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Gormok the Impaler",
			"text": "<b>Battlecry:</b> If you have at least 4 other minions, deal 4 damage.",
			"health": 4,
			"targetingArrowText": "Deal 4 damage."
		},
		{
			"artist": "Matt Gaser",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "The box says, \"New and improved, with 200% more fel!\"",
			"cost": 4,
			"id": "GVG_020",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Fel Cannon",
			"text": "At the end of your turn, deal 2 damage to a non-Mech minion.",
			"collectible": true,
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Den",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "\"Get ready to strike oil!\" - Super-cheesy battle cry",
			"cost": 4,
			"playRequirements": {
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_022",
			"mechanics": [
				"COMBO"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Tinker's Sharpsword Oil",
			"text": "Give your weapon +3 Attack. <b>Combo:</b> Give a random friendly minion +3 Attack.",
			"collectible": true
		},
		{
			"artist": "Donato Giancola",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "If 1/2 minions are all that is defending Goldshire, you would think it would have been overrun years ago.",
			"cost": 1,
			"id": "CS1_042",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Goldshire Footman",
			"howToEarnGolden": "Unlocked at Paladin Level 57.",
			"text": "<b>Taunt</b>",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 2,
			"flavor": "Hyenas prefer the bones of kodos or windserpents, but they'll eat pretty much anything.  Even Brussels sprouts.",
			"cost": 2,
			"id": "EX1_531",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Scavenging Hyena",
			"textInPlay": "Scavenging",
			"text": "Whenever a friendly Beast dies, gain +2/+1.",
			"collectible": true,
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"Death will rise, from the tides!\"",
			"cost": 2,
			"id": "EX1_506",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Murloc Tidehunter",
			"howToEarnGolden": "Unlocked at Rogue Level 53.",
			"text": "<b>Battlecry:</b> Summon a 1/1 Murloc Scout.",
			"health": 1,
			"race": "MURLOC"
		},
		{
			"artist": "John Polidora",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "One Insane Rocketeer.   One Rocket full of Explosives.   Infinite Fun.",
			"cost": 6,
			"id": "CS2_213",
			"mechanics": [
				"CHARGE"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Reckless Rocketeer",
			"howToEarnGolden": "Unlocked at Shaman Level 59.",
			"text": "<b>Charge</b>",
			"faction": "HORDE",
			"health": 2
		},
		{
			"artist": "Warren Mahy",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 3,
			"flavor": "Hopes to be promoted to \"Shadowfriend\" someday.",
			"cost": 3,
			"id": "AT_014",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Shadowfiend",
			"text": "Whenever you draw a card, reduce its Cost by (1).",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Michael Komarck",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Shields were invented because Face Block is USELESS.",
			"cost": 3,
			"howToEarn": "Unlocked at Level 8.",
			"id": "EX1_606",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Shield Block",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Gain 5 Armor.\nDraw a card.",
			"collectible": true
		},
		{
			"artist": "Gabor Szikszai",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Ysera rules the Emerald Dream.  Which is some kind of green-mirror-version of the real world, or something?",
			"cost": 9,
			"id": "EX1_572",
			"entourage": [
				"DREAM_01",
				"DREAM_02",
				"DREAM_03",
				"DREAM_04",
				"DREAM_05"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Ysera",
			"text": "At the end of your turn, add a Dream Card to your hand.",
			"health": 12,
			"race": "DRAGON"
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 6,
			"flavor": "Vol'jin is a shadow hunter, which is like a shadow priest except more voodoo.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_014",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Vol'jin",
			"text": "<b>Battlecry:</b> Swap Health with another minion.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Swap Health."
		},
		{
			"artist": "Ron Spears",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Menu:  Funnel cakes, carrots, popcorn, jormungar steaks.  It's hard serving a diverse clientele.",
			"cost": 4,
			"id": "AT_111",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Refreshment Vendor",
			"text": "<b>Battlecry:</b> Restore 4 Health to each hero.",
			"health": 5
		},
		{
			"artist": "Alex Pascenko",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 5,
			"flavor": "Maybe if you whistle a tune it will soothe him.  Yeah...  Try that.",
			"cost": 4,
			"id": "AT_039",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Savage Combatant",
			"text": "<b>Inspire:</b> Give your hero\n+2 Attack this turn.",
			"collectible": true,
			"health": 4,
			"race": "BEAST"
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "He gets terrible heartburn.  BECAUSE HE IS FULL OF LAVA.",
			"cost": 20,
			"id": "EX1_620",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Molten Giant",
			"text": "Costs (1) less for each damage your hero has taken.",
			"health": 8
		},
		{
			"artist": "Lucas Graciano",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 5,
			"flavor": "Summoning a doomguard is risky. <i>Someone</i> is going to die.",
			"cost": 5,
			"id": "EX1_310",
			"mechanics": [
				"BATTLECRY",
				"CHARGE"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Doomguard",
			"text": "<b>Charge</b>. <b>Battlecry:</b> Discard two random cards.",
			"collectible": true,
			"health": 7,
			"race": "DEMON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "If he's raging now, just wait until he gets nerfed.",
			"cost": 3,
			"id": "EX1_412",
			"mechanics": [
				"ENRAGED"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Raging Worgen",
			"text": "<b>Enrage:</b> <b>Windfury</b> and +1 Attack",
			"health": 3
		},
		{
			"artist": "Aleksi Briclot",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He's burly because he does CrossFit.",
			"cost": 4,
			"id": "GVG_068",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Burly Rockjaw Trogg",
			"text": "Whenever your opponent casts a spell, gain +2 Attack.",
			"health": 5
		},
		{
			"artist": "Mauricio Herrera",
			"type": "SPELL",
			"text": "Destroy all minions except each player's highest Attack minion.",
			"playerClass": "PALADIN",
			"cost": 6,
			"name": "Enter the Coliseum",
			"rarity": "EPIC",
			"set": "TGT",
			"flavor": "You have to get past the vendors first.  So many are lost to shopping...",
			"collectible": true,
			"id": "AT_078"
		},
		{
			"artist": "Mike Sass",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "It's always Huffer.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_005",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Polymorph: Boar",
			"text": "Transform a minion into a 4/2 Boar with <b>Charge</b>.",
			"collectible": true
		},
		{
			"artist": "Matt Cavotta",
			"type": "SPELL",
			"text": "If you have a weapon, give it +1/+1. Otherwise equip a 1/3 weapon.",
			"playerClass": "WARRIOR",
			"cost": 1,
			"name": "Upgrade!",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "Easily worth 50 DKP.",
			"collectible": true,
			"id": "EX1_409"
		},
		{
			"artist": "Gabor Szikszai",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 2,
			"flavor": "These guys just show up and start Keeping your Groves without even asking.",
			"cost": 4,
			"id": "EX1_166",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Keeper of the Grove",
			"text": "<b>Choose One</b> - Deal 2 damage; or <b>Silence</b> a minion.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Dave Kendall",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.",
			"cost": 3,
			"id": "EX1_007",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Acolyte of Pain",
			"text": "Whenever this minion takes damage, draw a card.",
			"health": 3
		},
		{
			"artist": "Zoltan Boros",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Don't worry.  With a little skin cream he's going to clear right up.",
			"cost": 1,
			"id": "AT_105",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Injured Kvaldir",
			"text": "<b>Battlecry:</b> Deal 3 damage to this minion.",
			"health": 4
		},
		{
			"artist": "Zoltan Boros",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 4,
			"flavor": "Let's be clear about this:  ACIDMAW is the sidekick.",
			"cost": 3,
			"id": "AT_063t",
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Dreadscale",
			"text": "At the end of your turn, deal 1 damage to all other minions.",
			"collectible": true,
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Dan Scott",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "I personally prefer some non-ancestral right-the-heck-now healing, but maybe that is just me.",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_041",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Ancestral Healing",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Restore a minion to full Health and give it <b>Taunt</b>.",
			"collectible": true
		},
		{
			"artist": "Erik Ko",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "She’s smaller than her sisters Mediumwarden and Heavywarden.",
			"cost": 1,
			"id": "EX1_001",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Lightwarden",
			"text": "Whenever a character is healed, gain +2 Attack.",
			"health": 2
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Orcish raiders ride wolves because they are well adapted to harsh environments, and because they are soft and cuddly.",
			"cost": 3,
			"id": "CS2_124",
			"mechanics": [
				"CHARGE"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Wolfrider",
			"howToEarnGolden": "Unlocked at Warrior Level 59.",
			"text": "<b>Charge</b>",
			"faction": "HORDE",
			"health": 1
		},
		{
			"artist": "Efrem Palacios",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 2,
			"flavor": "Once a lowly \"Stick Flinger\", he's been relentless on the path to his ultimate dream: \"Tauren Flinger\".",
			"cost": 4,
			"howToEarn": "Unlocked by completing the Warrior Class Challenge in Blackrock Mountain.",
			"id": "BRM_016",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Axe Flinger",
			"howToEarnGolden": "Can be crafted after completing the Warrior Class Challenge in Blackrock Mountain.",
			"text": "Whenever this minion takes damage, deal 2 damage to the enemy hero.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Richard Wright",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Why do its eyes seem to follow you as you walk by?",
			"cost": 2,
			"id": "EX1_045",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Ancient Watcher",
			"text": "Can't attack.",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Peter C. Lee",
			"type": "WEAPON",
			"playerClass": "HUNTER",
			"attack": 5,
			"flavor": "The longbow allows shots to be fired from farther away and is useful for firing on particularly odorous targets.",
			"collectible": true,
			"id": "DS1_188",
			"set": "EXPERT1",
			"cost": 7,
			"rarity": "EPIC",
			"name": "Gladiator's Longbow",
			"durability": 2,
			"text": "Your hero is <b>Immune</b> while attacking."
		},
		{
			"artist": "Matt Gaser",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "He likes to think he is powerful, but pretty much anyone can solo Molten Core now.",
			"cost": 3,
			"id": "CS2_118",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Magma Rager",
			"howToEarnGolden": "Unlocked at Shaman Level 51.",
			"health": 1
		},
		{
			"artist": "Lars Grant-West",
			"type": "SPELL",
			"text": "Draw a card. That card costs (3) less.",
			"playerClass": "SHAMAN",
			"cost": 3,
			"name": "Far Sight",
			"rarity": "EPIC",
			"set": "EXPERT1",
			"flavor": "Drek'thar can't see, but he can <i>see</i>. You know what I mean? It's ok if you don't.",
			"collectible": true,
			"id": "CS2_053"
		},
		{
			"artist": "Ben Zhang",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "They initially planned to be the Beryl or Cerulean drakes, but those felt a tad too pretentious.",
			"cost": 5,
			"id": "EX1_284",
			"mechanics": [
				"BATTLECRY",
				"SPELLPOWER"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Azure Drake",
			"text": "<b>Spell Damage +1</b>. <b>Battlecry:</b> Draw a card.",
			"health": 4,
			"race": "DRAGON"
		},
		{
			"artist": "Jonathan Ryder",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 0,
			"flavor": "Totemsmiths like to use the rarest woods for their totems.  There are even rumors of totems made of Ironbark Protectors.",
			"cost": 2,
			"howToEarn": "Unlocked at Level 4.",
			"id": "EX1_565",
			"mechanics": [
				"ADJACENT_BUFF",
				"AURA"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Flametongue Totem",
			"textInPlay": "Flametongue",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Adjacent minions have +2 Attack.",
			"collectible": true,
			"health": 3,
			"race": "TOTEM"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "The wonderful thing about tigers is tigers are wonderful things!",
			"cost": 5,
			"id": "EX1_028",
			"mechanics": [
				"STEALTH"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Stranglethorn Tiger",
			"text": "<b>Stealth</b>",
			"faction": "ALLIANCE",
			"health": 5,
			"race": "BEAST"
		},
		{
			"artist": "Clint Langley",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Spirit wolves are like regular wolves with pom-poms.",
			"cost": 3,
			"playRequirements": {
				"REQ_NUM_MINION_SLOTS": 1
			},
			"id": "EX1_248",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Feral Spirit",
			"text": "Summon two 2/3 Spirit Wolves with <b>Taunt</b>. <b>Overload:</b> (2)",
			"collectible": true
		},
		{
			"artist": "James Ryman",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Grow your own mana crystals with this Mana Crystal Growth Kit, only 39.99!",
			"cost": 2,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_013",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Wild Growth",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Gain an empty Mana Crystal.",
			"collectible": true
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.",
			"cost": 8,
			"id": "NEW1_010",
			"mechanics": [
				"CHARGE",
				"DIVINE_SHIELD",
				"TAUNT",
				"WINDFURY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Al'Akir the Windlord",
			"text": "<b>Windfury, Charge, Divine Shield, Taunt</b>",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "James Zhang",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "At first he liked juggling chain saws, but then he thought, \"Flames are better!  Because FIRE!\"",
			"cost": 2,
			"id": "AT_094",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Flame Juggler",
			"text": "<b>Battlecry:</b> Deal 1 damage to a random enemy.",
			"health": 3
		},
		{
			"artist": "Zero Yue",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 5,
			"flavor": "Wintergrasp Keep's only weakness!",
			"cost": 5,
			"id": "GVG_086",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Siege Engine",
			"text": "Whenever you gain Armor, give this minion +1 Attack.",
			"collectible": true,
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Alex Garner",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Rogues are experts at SHIV-al-ry.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 6.",
			"id": "EX1_278",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Shiv",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "Deal $1 damage. Draw a card.",
			"collectible": true
		},
		{
			"artist": "Mike Sass",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "He keeps earthinating the countryside despite attempts to stop him.",
			"cost": 7,
			"id": "GVG_118",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Troggzor the Earthinator",
			"text": "Whenever your opponent casts a spell, summon a Burly Rockjaw Trogg.",
			"health": 6
		},
		{
			"artist": "Steve Ellis",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "It doesn't matter how pious you are.  Everyone needs a good smiting now and again.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS1_130",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Holy Smite",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Deal $2 damage.",
			"collectible": true
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "PRIEST",
			"health": 30,
			"rarity": "FREE",
			"name": "Anduin Wrynn",
			"collectible": true,
			"id": "HERO_09"
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "It was just a flesh wound.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "CS2_038",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Ancestral Spirit",
			"text": "Give a minion \"<b>Deathrattle:</b> Resummon this minion.\"",
			"collectible": true
		},
		{
			"artist": "Anton Zemskov",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 4,
			"flavor": "The Scarlet Crusade is doing market research to find out if the \"Mauve Crusade\" would be better received.",
			"cost": 3,
			"id": "GVG_101",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Scarlet Purifier",
			"text": "<b>Battlecry</b>: Deal 2 damage to all minions with <b>Deathrattle</b>.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Ryan Metcaff",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 3,
			"flavor": "He needed a break after that business in the Vale of Eternal Blossoms. Naturally, he chose to spend his vacation in an icy snowscape killing monsters.",
			"cost": 5,
			"id": "AT_028",
			"mechanics": [
				"COMBO"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Shado-Pan Rider",
			"text": "<b>Combo:</b> Gain +3 Attack.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Velen wrote a \"Lovely Card\" for Tyrande with a picture of the Deeprun Tram that said \"I Choo-Choo-Choose you!\"",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_010",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Velen's Chosen",
			"text": "Give a minion +2/+4 and <b>Spell Damage +1</b>.",
			"collectible": true
		},
		{
			"artist": "Tooth",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 4,
			"flavor": "He can summon anything, even a FEARSOME DOOMGUARD*.\n*He's pretty sure this is going to work out.",
			"cost": 6,
			"id": "AT_027",
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Wilfred Fizzlebang",
			"text": "Cards you draw from your Hero Power cost (0).",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Alex Garner",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "MARVEL AT HIS MIGHT!",
			"cost": 7,
			"id": "GVG_110",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Dr. Boom",
			"text": "<b>Battlecry</b>: Summon two 1/1 Boom Bots. <i>WARNING: Bots may explode.</i>",
			"health": 7
		},
		{
			"artist": "Laurel Austin",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 2,
			"flavor": "She loves mana crystals, she hates mana crystals.   So fickle!",
			"cost": 2,
			"id": "AT_038",
			"mechanics": [
				"BATTLECRY",
				"DEATHRATTLE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Darnassus Aspirant",
			"text": "<b>Battlecry:</b> Gain an empty Mana Crystal.\n<b>Deathrattle:</b> Lose a Mana Crystal.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "The inventor of the Annoy-o-Tron was immediately expelled from Tinkerschool, Tinkertown, and was eventually exiled from the Eastern Kingdoms altogether.",
			"cost": 2,
			"id": "GVG_085",
			"mechanics": [
				"DIVINE_SHIELD",
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Annoy-o-Tron",
			"text": "<b>Taunt</b>\n<b>Divine Shield</b>",
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Meets monthly with the gladiators to discuss career goals.",
			"cost": 3,
			"id": "AT_110",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Coliseum Manager",
			"text": "<b>Inspire:</b> Return this minion to your hand.",
			"health": 5
		},
		{
			"artist": "John Polidora",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Hungry Hungry Dragon is NOT a fun game.",
			"cost": 4,
			"howToEarn": "Unlocked by defeating Chromaggus in Blackwing Lair.",
			"id": "BRM_026",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Hungry Dragon",
			"howToEarnGolden": "Can be crafted after defeating Chromaggus in Blackwing Lair.",
			"text": "<b>Battlecry:</b> Summon a random 1-Cost minion for your opponent.",
			"health": 6,
			"race": "DRAGON"
		},
		{
			"artist": "Brom",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 6,
			"flavor": "If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.",
			"cost": 8,
			"id": "EX1_383",
			"mechanics": [
				"DEATHRATTLE",
				"DIVINE_SHIELD",
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Tirion Fordring",
			"text": "<b>Divine Shield</b>. <b>Taunt</b>. <b>Deathrattle:</b> Equip a 5/3 Ashbringer.",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Stanley Lau",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 2,
			"flavor": "Druids who fought too long in Northrend were easily seduced by Ragnaros; a mug of hot chocolate was generally all it took.",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Garr in Molten Core.",
			"id": "BRM_010",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Druid of the Flame",
			"howToEarnGolden": "Can be crafted after defeating Garr in Molten Core.",
			"text": "<b>Choose One</b> - Transform into a 5/2 minion; or a 2/5 minion.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Brian Despain",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 2,
			"flavor": "Mechs like learning from him because he really speaks their language.\n0110100001101001",
			"cost": 3,
			"id": "GVG_027",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Iron Sensei",
			"text": "At the end of your turn, give another friendly Mech +2/+2.",
			"collectible": true,
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Jonboy Meyers",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "\"Arf! Arf! Arf!\" - Seal of Champions",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_074",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Seal of Champions",
			"text": "Give a minion\n+3 Attack and <b>Divine Shield</b>.",
			"collectible": true
		},
		{
			"artist": "Justin Sweet",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Windfury is like Earthfury and Firefury, but more light and airy.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_039",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Windfury",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Give a minion <b>Windfury</b>.",
			"collectible": true
		},
		{
			"artist": "Mauricio Herrera",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Dragons breathe fire, sure, but did you know they can also breathe Cotton Candy?  It's harder to give them a reason to do that, though.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked by completing the Mage Class Challenge in Blackrock Mountain.",
			"id": "BRM_003",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Dragon's Breath",
			"howToEarnGolden": "Can be crafted after completing the Mage Class Challenge in Blackrock Mountain.",
			"text": "Deal $4 damage. Costs (1) less for each minion that died this turn.",
			"collectible": true
		},
		{
			"artist": "Adam Byrne",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He was so excited to get season tickets to this year's Grand Tournament.  He normally doesn't get them at first and has to buy them from Ogre scalpers.",
			"cost": 1,
			"id": "AT_097",
			"mechanics": [
				"TAUNT"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Tournament Attendee",
			"text": "<b>Taunt</b>",
			"health": 1
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "He's in charge of the Annual Scarlet Monastery Blood Drive!",
			"cost": 2,
			"id": "EX1_012",
			"mechanics": [
				"DEATHRATTLE",
				"SPELLPOWER"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Bloodmage Thalnos",
			"text": "<b>Spell Damage +1</b>. <b>Deathrattle:</b> Draw a card.",
			"health": 1
		},
		{
			"artist": "Daren Bader",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "This Kodo is so big that he can stampede by <i>himself</i>.",
			"cost": 5,
			"id": "NEW1_041",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Stampeding Kodo",
			"text": "<b>Battlecry:</b> Destroy a random enemy minion with 2 or less Attack.",
			"health": 5,
			"race": "BEAST"
		},
		{
			"artist": "Michael Sutfin",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Using this card on your enemies is one of the best things in life, according to some barbarians.",
			"cost": 7,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_052",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Crush",
			"text": "Destroy a minion. If you have a damaged minion, this costs (4) less.",
			"collectible": true
		},
		{
			"artist": "Nutthapon Petchthai",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "It's on the rack next to ice lance, acid lance, and English muffin lance.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_001",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Flame Lance",
			"text": "Deal $8 damage to a minion.",
			"collectible": true
		},
		{
			"artist": "Greg Hildebrandt",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 1,
			"flavor": "She accepts guild funds for repairs!",
			"cost": 2,
			"id": "EX1_402",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Armorsmith",
			"textInPlay": "Smithing",
			"text": "Whenever a friendly minion takes damage, gain 1 Armor.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "John Avon",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "Don't summon a water elemental at a party.  It'll dampen the mood.",
			"cost": 4,
			"howToEarn": "Unlocked at Level 8.",
			"id": "CS2_033",
			"mechanics": [
				"FREEZE"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Water Elemental",
			"textInPlay": "Frostbolt",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "<b>Freeze</b> any character damaged by this minion.",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Jonboy Meyers",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "The way to tell seasoned warriors from novice ones: the novices yell \"wheeeee\" while whirlwinding.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 6.",
			"id": "EX1_400",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Whirlwind",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Deal $1 damage to ALL minions.",
			"collectible": true
		},
		{
			"artist": "Evgeniy Zagumennyy",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 2,
			"flavor": "\"Put more spikes on her.  No, more spikes.  What part of 'more spikes' do you not understand?  MORE SPIKES!\" - Alexstrasza",
			"cost": 2,
			"id": "AT_071",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Alexstrasza's Champion",
			"text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Charge</b>.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Jason Chan",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "The walrus of Light restores EIGHT Health.",
			"cost": 2,
			"id": "GVG_057",
			"mechanics": [
				"ImmuneToSpellpower"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Seal of Light",
			"text": "Restore #4 Health to your hero and gain +2 Attack this turn.",
			"collectible": true
		},
		{
			"artist": "Seamus Gallagher",
			"type": "MINION",
			"collectible": true,
			"attack": 9,
			"flavor": "You have no idea how tired this guy is of being released.",
			"cost": 9,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "AT_103",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "North Sea Kraken",
			"text": "<b>Battlecry:</b> Deal 4 damage.",
			"health": 7,
			"targetingArrowText": "Deal 4 damage."
		},
		{
			"artist": "Efrem Palacios",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Druidic recycling involves putting plastics in one bin and enemy minions in another bin.",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "GVG_031",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Recycle",
			"text": "Shuffle an enemy minion into your opponent's deck.",
			"collectible": true
		},
		{
			"artist": "Ralph Horsley",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "It's hard to make a living as a hunter in a world where beasts instantly reappear minutes after you kill them.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 20,
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "GVG_120",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Hemet Nesingwary",
			"text": "<b>Battlecry:</b> Destroy a Beast.",
			"health": 3,
			"targetingArrowText": "Destroy a Beast."
		},
		{
			"artist": "Mark Zug",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "LOVES being called \"the wonder twins\".",
			"cost": 3,
			"id": "AT_129",
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Fjola Lightbane",
			"text": "Whenever <b>you</b> target this minion with a spell, gain <b>Divine Shield.</b>",
			"health": 4
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Healing is just something she does in her free time.  It's more of a hobby really.",
			"cost": 5,
			"id": "DS1_055",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Darkscale Healer",
			"howToEarnGolden": "Unlocked at Priest Level 55.",
			"text": "<b>Battlecry:</b> Restore 2 Health to all friendly characters.",
			"health": 5
		},
		{
			"artist": "Mark Gibbons",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "She would enjoy the job a lot more if she just could get the imps to QUIT BITING HER.",
			"cost": 3,
			"id": "EX1_597",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Imp Master",
			"textInPlay": "Imp Master",
			"text": "At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.",
			"health": 5
		},
		{
			"artist": "Nutchapol Thitinunthakorn",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "There is a factory in Tanaris for crafting force-tanks, but it only ever made two, because of cost overruns.",
			"cost": 8,
			"id": "GVG_079",
			"mechanics": [
				"DIVINE_SHIELD"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Force-Tank MAX",
			"text": "<b>Divine Shield</b>",
			"health": 7,
			"race": "MECHANICAL"
		},
		{
			"artist": "Dan Brereton",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Pirates are into this new fad called \"Planking\".",
			"cost": 1,
			"id": "CS2_146",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Southsea Deckhand",
			"text": "Has <b>Charge</b> while you have a weapon equipped.",
			"faction": "ALLIANCE",
			"health": 1,
			"race": "PIRATE"
		},
		{
			"artist": "Skan Srisuwan",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 5,
			"flavor": "We like to call him \"Wesley\".",
			"cost": 6,
			"id": "AT_023",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Void Crusher",
			"text": "<b>Inspire:</b> Destroy a random minion for each player.",
			"collectible": true,
			"health": 4,
			"race": "DEMON"
		},
		{
			"artist": "Kev Walker",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "He's Gruul \"the Dragonkiller\".  He just wanted to cuddle them… he never meant to… ",
			"cost": 8,
			"id": "NEW1_038",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Gruul",
			"textInPlay": "Growth",
			"text": "At the end of each turn, gain +1/+1 .",
			"health": 7
		},
		{
			"artist": "Ralph Horsley",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "How is this supposed to work?  Your enemies think, \"<i>Hey!</i> Cute sheep!\" and run over to cuddle it?",
			"cost": 2,
			"id": "GVG_076",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Explosive Sheep",
			"text": "<b>Deathrattle:</b> Deal 2 damage to all minions.",
			"health": 1,
			"race": "MECHANICAL"
		},
		{
			"artist": "Chris Moeller",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 3,
			"flavor": "The agents of SI:7 are responsible for Stormwind's covert activities.  Their duties include espionage, assassination, and throwing surprise birthday parties for the royal family.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_FOR_COMBO": 0
			},
			"id": "EX1_134",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "SI:7 Agent",
			"text": "<b>Combo:</b> Deal 2 damage.",
			"collectible": true,
			"health": 3,
			"targetingArrowText": "Deal 2 damage."
		},
		{
			"artist": "Malcolm Davis",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 1,
			"flavor": "Other beasts totally dig hanging out with timber wolves.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "DS1_175",
			"mechanics": [
				"AURA"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Timber Wolf",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "Your other Beasts have +1 Attack.",
			"collectible": true,
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "Erik Ko",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "Does he sling spells, or do his spells linger about.  Who can say?",
			"cost": 3,
			"id": "AT_007",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Spellslinger",
			"text": "<b>Battlecry:</b> Add a random spell to each player's hand.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "The Frostwolves are locked in combat with the Stormpike Expedition over control of Alterac Valley.  Every attempt at peace-talks has ended with Captain Galvangar killing the mediator.",
			"cost": 5,
			"id": "CS2_226",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Frostwolf Warlord",
			"howToEarnGolden": "Unlocked at Shaman Level 53.",
			"text": "<b>Battlecry:</b> Gain +1/+1 for each other friendly minion on the battlefield.",
			"faction": "HORDE",
			"health": 4
		},
		{
			"artist": "Howard Lyon",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Good fencers make good neighbors, right?",
			"cost": 3,
			"playRequirements": {
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_115",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Fencing Coach",
			"text": "<b>Battlecry:</b> The next time you use your Hero Power, it costs (2) less.",
			"health": 2
		},
		{
			"artist": "Gonzalo Ordonez",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "You can keep him, but you have to promise to feed him and clean out his tank every day!",
			"cost": 7,
			"id": "AT_102",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Captured Jormungar",
			"health": 9,
			"race": "BEAST"
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"collectible": true,
			"attack": 9,
			"flavor": "He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.",
			"cost": 6,
			"id": "EX1_577",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "The Beast",
			"text": "<b>Deathrattle:</b> Summon a 3/3 Finkle Einhorn for your opponent.",
			"health": 7,
			"race": "BEAST"
		},
		{
			"artist": "Randy Gallegos",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Every pirate uses the same four digits to access Automated Gold Dispensers.  It's called the \"Pirate's Code\".",
			"cost": 1,
			"id": "NEW1_025",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Bloodsail Corsair",
			"text": "<b>Battlecry:</b> Remove 1 Durability from your opponent's weapon.",
			"health": 2,
			"race": "PIRATE"
		},
		{
			"artist": "Dave Allsop",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "It’s a Bolt.   Its made out of Shadow.   What more do you need to know!",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_057",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Shadow Bolt",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Deal $4 damage to a minion.",
			"collectible": true
		},
		{
			"artist": "Mishi McCaig",
			"type": "SPELL",
			"text": "Give your <b>Taunt</b> minions +2/+2.",
			"playerClass": "WARRIOR",
			"cost": 2,
			"name": "Bolster",
			"rarity": "COMMON",
			"set": "TGT",
			"flavor": "The best offense is a good defense.",
			"collectible": true,
			"id": "AT_068"
		},
		{
			"artist": "Samwise",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 6,
			"flavor": "He didn't have the grades to get into ninja school, but his dad pulled some strings.",
			"cost": 5,
			"id": "GVG_088",
			"mechanics": [
				"STEALTH"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Ogre Ninja",
			"text": "<b>Stealth</b>\n50% chance to attack the wrong enemy.",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Efrem Palacios",
			"type": "WEAPON",
			"playerClass": "PALADIN",
			"attack": 1,
			"flavor": "I dub you Sir Loin of Beef!",
			"collectible": true,
			"id": "EX1_366",
			"set": "EXPERT1",
			"cost": 3,
			"rarity": "EPIC",
			"name": "Sword of Justice",
			"durability": 5,
			"text": "Whenever you summon a minion, give it +1/+1 and this loses 1 Durability."
		},
		{
			"artist": "Ben Olson",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "He is sometimes found hiding in the treasure chest in the Gurubashi Arena.",
			"cost": 4,
			"id": "GVG_109",
			"mechanics": [
				"STEALTH",
				"SPELLPOWER"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Mini-Mage",
			"text": "<b>Stealth</b>\n<b>Spell Damage +1</b>",
			"health": 1
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 2,
			"flavor": "He chooses to believe what he is programmed to believe!",
			"cost": 2,
			"id": "GVG_058",
			"mechanics": [
				"DIVINE_SHIELD"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Shielded Minibot",
			"text": "<b>Divine Shield</b>",
			"collectible": true,
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Mike Hayes",
			"type": "SPELL",
			"text": "Summon three 1/1 Silver Hand Recruits. Equip a 1/4 Weapon.",
			"playerClass": "PALADIN",
			"cost": 3,
			"name": "Muster for Battle",
			"rarity": "RARE",
			"set": "GVG",
			"flavor": "\"I'm bringing the guacamole!\" – One of the most successful (yet rare) Silver Hand rallying cries",
			"collectible": true,
			"id": "GVG_061"
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "He used to run the black market auction house, but there was just too much violence and he had to move.",
			"cost": 6,
			"id": "EX1_095",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Gadgetzan Auctioneer",
			"textInPlay": "Auctioning",
			"text": "Whenever you cast a spell, draw a card.",
			"health": 4
		},
		{
			"artist": "Trent Kaniuga",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Totem-stomping is no longer recommended.",
			"cost": 0,
			"howToEarn": "Unlocked at Level 6.",
			"id": "EX1_244",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Totemic Might",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Give your Totems +2 Health.",
			"collectible": true
		},
		{
			"artist": "Jaemin Kim",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He pays homage to Morgl, the great murloc oracle! (Who doesn't??)",
			"cost": 2,
			"id": "GVG_064",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Puddlestomper",
			"health": 2,
			"race": "MURLOC"
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He’s not such a binge exploder anymore. These days, he only explodes socially.",
			"cost": 3,
			"id": "GVG_095",
			"mechanics": [
				"AURA"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Goblin Sapper",
			"text": "Has +4 Attack while your opponent has 6 or more cards in hand.",
			"health": 4
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He's legitimately surprised every time he turns himself into a chicken.",
			"cost": 3,
			"id": "GVG_092",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Gnomish Experimenter",
			"text": "<b>Battlecry:</b> Draw a card. If it's a minion, transform it into a Chicken.",
			"health": 2
		},
		{
			"artist": "Sean O'Daniels",
			"type": "SPELL",
			"text": "Add a random minion to your hand. It costs (3) less.",
			"playerClass": "MAGE",
			"cost": 2,
			"name": "Unstable Portal",
			"rarity": "RARE",
			"set": "GVG",
			"flavor": "The denizens of Azeroth have no idea how much work goes into stabilizing portals.  We spend like 30% of GDP on portal upkeep.",
			"collectible": true,
			"id": "GVG_003"
		},
		{
			"artist": "Tom Baxa",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "We cannot even describe how horrible the death is.  It's CRAZY bad!  Maybe worse than that.  Just don't do it.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_316",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Power Overwhelming",
			"text": "Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.",
			"collectible": true
		},
		{
			"artist": "Raven Mimura",
			"type": "SPELL",
			"text": "Put 2 random Demons from your deck into your hand.",
			"playerClass": "WARLOCK",
			"cost": 3,
			"name": "Sense Demons",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "Generally demons are pretty obvious and you don’t need a spell to sense them.",
			"collectible": true,
			"id": "EX1_317"
		},
		{
			"artist": "Jim Nelson",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Competition can be an inspiration to improve oneself.  Or kill all the competitors.",
			"cost": 1,
			"id": "AT_073",
			"mechanics": [
				"SECRET"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Competitive Spirit",
			"text": "<b>Secret:</b> When your turn starts, give your minions +1/+1.",
			"collectible": true
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 7,
			"flavor": "Nothing beats rock.",
			"cost": 5,
			"id": "EX1_250",
			"mechanics": [
				"OVERLOAD",
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Earth Elemental",
			"text": "<b>Taunt</b>. <b>Overload:</b> (3)",
			"collectible": true,
			"health": 8
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "The engineering equivalent of a \"Kick Me\" sticker.",
			"cost": 0,
			"id": "GVG_093",
			"mechanics": [
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Target Dummy",
			"text": "<b>Taunt</b>",
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Jim Nelson",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "If you are thinking about visiting Moonbrook, you better roll deep.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked by defeating the Dark Iron Arena in Blackrock Depths.",
			"id": "BRM_007",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Gang Up",
			"howToEarnGolden": "Can be crafted after defeating the Dark Iron Arena in Blackrock Depths.",
			"text": "Choose a minion. Shuffle 3 copies of it into your deck.",
			"collectible": true
		},
		{
			"artist": "Tyler Walpole",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "I'm not a shaman or anything, but isn't Elemental Destruction the opposite of what they want to do?",
			"cost": 3,
			"id": "AT_051",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Elemental Destruction",
			"text": "Deal $4-$5 damage to all minions. <b>Overload: (5)</b>",
			"collectible": true
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "If you want to stop a worgen from infiltrating, just yell, \"No! Bad boy!\"",
			"cost": 1,
			"id": "EX1_010",
			"mechanics": [
				"STEALTH"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Worgen Infiltrator",
			"text": "<b>Stealth</b>",
			"faction": "ALLIANCE",
			"health": 1
		},
		{
			"artist": "Sean O'Danield",
			"type": "SPELL",
			"text": "Swap the Attack and Health of all minions.",
			"playerClass": "PRIEST",
			"cost": 2,
			"name": "Confuse",
			"rarity": "EPIC",
			"set": "TGT",
			"flavor": "This minion is really powerful!",
			"collectible": true,
			"id": "AT_016"
		},
		{
			"artist": "Sean O’Daniels",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Nominated as \"Spell Most Likely to Make Your Opponent Punch the Wall.\"",
			"cost": 10,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_NUM_MINION_SLOTS": 1,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS1_113",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Mind Control",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "Take control of an enemy minion.",
			"collectible": true
		},
		{
			"artist": "Daarken",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Lightning Bolt! Lightning Bolt! Lightning Bolt!",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_238",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Lightning Bolt",
			"text": "Deal $3 damage. <b>Overload:</b> (1)",
			"collectible": true
		},
		{
			"artist": "Jason Chan",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "What's the difference between a mage playing with Counterspell and a mage who isn't?  The mage who isn't is getting Pyroblasted in the face.",
			"cost": 3,
			"id": "EX1_287",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Counterspell",
			"text": "<b>Secret:</b> When your opponent casts a spell, <b>Counter</b> it.",
			"collectible": true
		},
		{
			"artist": "Doug Alexander",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "Some druids still have flashbacks from strangers yelling \"Innervate me!!\" at them.",
			"cost": 0,
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_169",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Innervate",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Gain 2 Mana Crystals this turn only.",
			"collectible": true
		},
		{
			"artist": "Wayne Reynolds",
			"type": "SPELL",
			"text": "Your minions can't be reduced below 1 Health this turn. Draw a card.",
			"playerClass": "WARRIOR",
			"cost": 2,
			"name": "Commanding Shout",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "\"Shout! Shout! Let it all out!\" - Advice to warriors-in-training",
			"collectible": true,
			"id": "NEW1_036"
		},
		{
			"artist": "Matt Dixon",
			"type": "SPELL",
			"text": "Add 2 random class cards to your hand <i>(from your opponent's class)</i>.",
			"playerClass": "ROGUE",
			"cost": 3,
			"name": "Burgle",
			"rarity": "RARE",
			"set": "TGT",
			"flavor": "Yoink!",
			"collectible": true,
			"id": "AT_033"
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "She may be an evil cult master, but she still calls her parents once a week.",
			"cost": 4,
			"id": "EX1_595",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Cult Master",
			"textInPlay": "Cultist",
			"text": "Whenever one of your other minions dies, draw a card.",
			"health": 2
		},
		{
			"artist": "Tooth",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 1,
			"flavor": "Spoiler alert: Bolvar gets melted and then sits on an ice throne and everyone forgets about him.",
			"cost": 5,
			"id": "GVG_063",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Bolvar Fordragon",
			"text": "Whenever a friendly minion dies while this is in your hand, gain +1 Attack.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Svetlin Velinov",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "See?  Giant.",
			"cost": 10,
			"id": "EX1_586",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Sea Giant",
			"text": "Costs (1) less for each other minion on the battlefield.",
			"health": 8
		},
		{
			"artist": "Daren Bader",
			"type": "WEAPON",
			"playerClass": "ROGUE",
			"attack": 2,
			"flavor": "Perdition's Blade is Ragnaros's back-up weapon while Sulfuras is in the shop.",
			"collectible": true,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "EX1_133",
			"mechanics": [
				"BATTLECRY",
				"COMBO"
			],
			"set": "EXPERT1",
			"cost": 3,
			"rarity": "RARE",
			"name": "Perdition's Blade",
			"durability": 2,
			"text": "<b>Battlecry:</b> Deal 1 damage. <b>Combo:</b> Deal 2 instead.",
			"targetingArrowText": "Deal 1 damage.  Combo: 2 instead."
		},
		{
			"artist": "E.M. Gist",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 5,
			"flavor": "Holy beings from the beyond are so cliché!",
			"cost": 7,
			"howToEarn": "Unlocked at Level 8.",
			"id": "CS2_088",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Guardian of Kings",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "<b>Battlecry:</b> Restore 6 Health to your hero.",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "This is who you go to when your Blackwing needs a tune up. Don't go to a cut rate Blackwing tune up shop!",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Baron Geddon in Molten Core.",
			"id": "BRM_033",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Blackwing Technician",
			"howToEarnGolden": "Can be crafted after defeating Baron Geddon in Molten Core.",
			"text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1/+1. ",
			"health": 4
		},
		{
			"artist": "Oliver Chipping",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 9,
			"flavor": "When Malorne isn't mauling hordes of demons, he enjoys attending parties, though he prefers to go stag.",
			"cost": 7,
			"id": "GVG_035",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Malorne",
			"text": "<b>Deathrattle:</b> Shuffle this minion into your deck.",
			"collectible": true,
			"health": 7,
			"race": "BEAST"
		},
		{
			"artist": "Karl Richardson",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "\"Half of this class will not graduate… since they'll have been turned to chickens.\" - Tinkmaster Overspark, teaching Gizmos 101.",
			"cost": 2,
			"id": "EX1_015",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Novice Engineer",
			"howToEarnGolden": "Unlocked at Druid Level 59.",
			"text": "<b>Battlecry:</b> Draw a card.",
			"faction": "ALLIANCE",
			"health": 1
		},
		{
			"artist": "Warren Mahy",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "If you hear someone yell, \"Cannonball!\" you're about to get wet. Or crushed.",
			"cost": 2,
			"id": "GVG_075",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Ship's Cannon",
			"text": "Whenever you summon a Pirate, deal 2 damage to a random enemy.",
			"health": 3
		},
		{
			"artist": "Sean O'Daniels",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "It dispels buffs, powers, hopes, and dreams.",
			"cost": 4,
			"id": "EX1_626",
			"mechanics": [
				"SILENCE"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Mass Dispel",
			"text": "<b>Silence</b> all enemy minions. Draw a card.",
			"collectible": true
		},
		{
			"artist": "Matt Cavotta",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Ambitious Knife Jugglers sometimes graduate to Bomb Jugglers.    They never last long enough to make it onto a card though.",
			"cost": 2,
			"id": "NEW1_019",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Knife Juggler",
			"text": "After you summon a minion, deal 1 damage to a random enemy.",
			"health": 2
		},
		{
			"artist": "Matt Gaser",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "If your spells look like horrifying skulls, let's be honest, you should get to draw some cards.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 4.",
			"id": "EX1_302",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Mortal Coil",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Deal $1 damage to a minion. If that kills it, draw a card.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 1,
			"flavor": "Crescendo himself summoned this steed, riding it to victory in the Grand Tournament.  Wherever he rides, an army of riders ride behind him, supporting the legendary champion.",
			"cost": 4,
			"id": "AT_019",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Dreadsteed",
			"text": "<b>Deathrattle:</b> Summon a Dreadsteed.",
			"collectible": true,
			"health": 1,
			"race": "DEMON"
		},
		{
			"artist": "Howard Lyon",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Maexxna gets super mad when people introduce her as \"Maxina\" or \"Maxxy\".",
			"cost": 6,
			"howToEarn": "Unlocked by completing the Arachnid Quarter.",
			"id": "FP1_010",
			"mechanics": [
				"POISONOUS"
			],
			"set": "NAXX",
			"rarity": "LEGENDARY",
			"name": "Maexxna",
			"howToEarnGolden": "Can be crafted after completing the Arachnid Quarter.",
			"text": "Destroy any minion damaged by this minion.",
			"health": 8,
			"race": "BEAST"
		},
		{
			"artist": "Monica Langlois",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "He used to be called Bog Beast, but it confused people because he wasn't an actual beast.   Boom, New Name!",
			"cost": 5,
			"id": "CS1_069",
			"mechanics": [
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Fen Creeper",
			"text": "<b>Taunt</b>",
			"faction": "ALLIANCE",
			"health": 6
		},
		{
			"artist": "Gabor Szikszai",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Won't you take me to... Tinkertown?",
			"cost": 3,
			"id": "GVG_102",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"entourage": [
				"PART_007",
				"PART_006",
				"PART_003",
				"PART_001",
				"PART_004",
				"PART_002",
				"PART_005"
			],
			"rarity": "COMMON",
			"name": "Tinkertown Technician",
			"text": "<b>Battlecry:</b> If you have a Mech, gain +1/+1 and add a <b>Spare Part</b> to your hand.",
			"health": 3
		},
		{
			"artist": "Dave Allsop",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 5,
			"flavor": "What did you expect to happen?  He's a Spawn.  Of Shadows.",
			"cost": 4,
			"id": "AT_012",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Spawn of Shadows",
			"text": "<b>Inspire:</b> Deal 4 damage to each hero.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Alex Horley",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "Rend believes he is the True Warchief of the Horde and he keeps editing the wikipedia page for \"Warchief of the Horde\" to include his picture.",
			"cost": 7,
			"playRequirements": {
				"REQ_LEGENDARY_TARGET": 0,
				"REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked by completing Blackrock Spire.",
			"id": "BRM_029",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "LEGENDARY",
			"name": "Rend Blackhand",
			"howToEarnGolden": "Can be crafted after completing Blackrock Spire.",
			"text": "<b>Battlecry:</b> If you're holding a Dragon, destroy a <b>Legendary</b> minion.",
			"health": 4,
			"targetingArrowText": "Destroy a Legend."
		},
		{
			"artist": "Stefan Kopinski",
			"type": "WEAPON",
			"playerClass": "WARRIOR",
			"attack": 5,
			"flavor": "No… actually you should fear the Reaper.",
			"collectible": true,
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_112",
			"howToEarnGolden": "Unlocked at Level 51.",
			"set": "CORE",
			"cost": 5,
			"rarity": "COMMON",
			"name": "Arcanite Reaper",
			"durability": 2
		},
		{
			"artist": "Eva Widermann",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 2,
			"flavor": "It's adorable! AND OH MY GOODNESS WHY IS IT EATING MY FACE",
			"cost": 2,
			"id": "GVG_030",
			"mechanics": [
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Anodized Robo Cub",
			"text": "<b>Taunt</b>. <b>Choose One -</b>\n+1 Attack; or +1 Health.",
			"collectible": true,
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 2,
			"flavor": "If it breaks, just kick it a couple of times while yelling \"Durn thing!\"",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 17,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "GVG_055",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Screwjank Clunker",
			"text": "<b>Battlecry</b>: Give a friendly Mech +2/+2.",
			"targetingArrowText": "Give +2/+2.",
			"collectible": true,
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Brian Despain",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "\"ME HAVE GOOD STATS FOR THE COST\"",
			"cost": 6,
			"id": "CS2_200",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Boulderfist Ogre",
			"howToEarnGolden": "Unlocked at Warlock Level 51.",
			"health": 7
		},
		{
			"artist": "Paul Warzecha",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Tauren Warrior: Champion of Mulgore, Slayer of Quilboar, Rider of Thunderbluff Elevators.",
			"cost": 3,
			"id": "EX1_390",
			"mechanics": [
				"ENRAGED",
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Tauren Warrior",
			"text": "<b>Taunt</b>. <b>Enrage:</b> +3 Attack",
			"health": 3
		},
		{
			"artist": "Daren Bader",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "He likes to act like he's in charge, but the silverback matriarch actually runs things.",
			"cost": 3,
			"id": "CS2_127",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Silverback Patriarch",
			"howToEarnGolden": "Unlocked at Warrior Level 53.",
			"text": "<b>Taunt</b>",
			"faction": "HORDE",
			"health": 4,
			"race": "BEAST"
		},
		{
			"artist": "Hideaki Takamura",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 3,
			"flavor": "\"Four out of three orcs struggle with math.\" - Angry Zurge",
			"cost": 3,
			"id": "AT_066",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Orgrimmar Aspirant",
			"text": "<b>Inspire:</b> Give your weapon +1 Attack.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Hideaki Takamura",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "She’s trying to kick the habit, but still takes some mana whenever she has a stressful day.",
			"cost": 2,
			"id": "EX1_055",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Mana Addict",
			"textInPlay": "Addicted",
			"text": "Whenever you cast a spell, gain +2 Attack this turn.",
			"faction": "ALLIANCE",
			"health": 3
		},
		{
			"artist": "Alex Garner",
			"type": "SPELL",
			"text": "Put a copy of each friendly minion into your hand.",
			"playerClass": "MAGE",
			"cost": 4,
			"name": "Echo of Medivh",
			"rarity": "EPIC",
			"set": "GVG",
			"flavor": "Medivh's echo haunts Karazhan, eternally cheating at chess and <i>Hearthstone</i>.",
			"collectible": true,
			"id": "GVG_005"
		},
		{
			"artist": "Chippy",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Apparently with wisdom comes the knowledge that you should probably be attacking every turn.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_363",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Blessing of Wisdom",
			"text": "Choose a minion. Whenever it attacks, draw a card.",
			"collectible": true
		},
		{
			"artist": "Wei Wang",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 7,
			"flavor": "He's been exiled from his home, and all his brothers turned evil, but otherwise he doesn't have a lot to complain about.",
			"cost": 7,
			"id": "EX1_350",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Prophet Velen",
			"text": "Double the damage and healing of your spells and Hero Power.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Nutchapol Thitinunthakorn",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 5,
			"flavor": "It's the same as the previous generation but they slapped the word \"upgraded\" on it to sell it for double.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 17,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "GVG_083",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Upgraded Repair Bot",
			"text": "<b>Battlecry:</b> Give a friendly Mech +4 Health.",
			"targetingArrowText": "Give a Mech +4 Health.",
			"collectible": true,
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 4,
			"flavor": "Warlocks have it pretty good.",
			"cost": 2,
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_306",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Succubus",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "<b>Battlecry:</b> Discard a random card.",
			"collectible": true,
			"health": 3,
			"race": "DEMON"
		},
		{
			"artist": "Chris Seaman",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "This spell can be very Entertaining.",
			"cost": 6,
			"id": "CS2_028",
			"mechanics": [
				"FREEZE"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Blizzard",
			"text": "Deal $2 damage to all enemy minions and <b>Freeze</b> them.",
			"collectible": true
		},
		{
			"artist": "Matt Starbuck",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "It's good to be a knight.   Less so to be one's squire.",
			"cost": 5,
			"id": "CS2_151",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Silver Hand Knight",
			"text": "<b>Battlecry:</b> Summon a 2/2 Squire.",
			"faction": "ALLIANCE",
			"health": 4
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "The Faceless Ones are servants of Yogg-Saron, and they feed on fear. Right now they are feeding on your fear of accidentally disenchanting all your good cards.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_564",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Faceless Manipulator",
			"text": "<b>Battlecry:</b> Choose a minion and become a copy of it.",
			"health": 3,
			"targetingArrowText": "Become a copy of a minion."
		},
		{
			"artist": "Vance Kovacs",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "There was going to be a pun in this flavor text, but it just came out baa-d.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_022",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Polymorph",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Transform a minion into a 1/1 Sheep.",
			"collectible": true
		},
		{
			"artist": "Gonzalo Ordonez",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Never wash your whites with a Scarlet Crusader.",
			"cost": 3,
			"id": "EX1_020",
			"mechanics": [
				"DIVINE_SHIELD"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Scarlet Crusader",
			"text": "<b>Divine Shield</b>",
			"faction": "ALLIANCE",
			"health": 1
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "WARRIOR",
			"health": 30,
			"rarity": "FREE",
			"name": "Garrosh Hellscream",
			"collectible": true,
			"id": "HERO_01"
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "WARLOCK",
			"health": 30,
			"rarity": "FREE",
			"name": "Gul'dan",
			"collectible": true,
			"id": "HERO_07"
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 2,
			"flavor": "Shadowbomber does her job, but she's kind of phoning it in at this point.",
			"cost": 1,
			"id": "GVG_009",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Shadowbomber",
			"text": "<b>Battlecry:</b> Deal 3 damage to each hero.",
			"collectible": true,
			"health": 1
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He's a legend among murlocs.  \"Mrghllghghllghg!\", they say.",
			"cost": 4,
			"howToEarn": "Unlocked when you have all the Murlocs from the Classic Set.",
			"id": "EX1_062",
			"mechanics": [
				"CHARGE"
			],
			"set": "REWARD",
			"rarity": "LEGENDARY",
			"name": "Old Murk-Eye",
			"howToEarnGolden": "Unlocked when you have all the Golden Murlocs from the Expert and Basic Sets.",
			"text": "<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.",
			"health": 4,
			"race": "MURLOC"
		},
		{
			"artist": "Glenn Rane",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "If you don't want to be assassinated, move to the Barrens and change your name. Good luck!",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_076",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Assassinate",
			"howToEarnGolden": "Unlocked at Level 47.",
			"text": "Destroy an enemy minion.",
			"collectible": true
		},
		{
			"artist": "Nate Bowden",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "DO NOT GIVE HIM A ROOT BEER.",
			"cost": 5,
			"howToEarn": "Unlocked by defeating Loatheb in the Plague Quarter.",
			"id": "FP1_012",
			"mechanics": [
				"DEATHRATTLE",
				"TAUNT"
			],
			"set": "NAXX",
			"rarity": "RARE",
			"name": "Sludge Belcher",
			"howToEarnGolden": "Can be crafted after defeating Loatheb in the Plague Quarter.",
			"text": "<b>Taunt.\nDeathrattle:</b> Summon a 1/2 Slime with <b>Taunt</b>.",
			"health": 5
		},
		{
			"artist": "Dan Brereton",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 4,
			"flavor": "\"Who let the dogs out?\" he asks.  It's rhetorical.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 20,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "DS1_070",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Houndmaster",
			"textInPlay": "Beastmaster",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "<b>Battlecry:</b> Give a friendly Beast +2/+2 and <b>Taunt</b>.",
			"collectible": true,
			"health": 3,
			"targetingArrowText": "Give a Beast +2/+2 and Taunt."
		},
		{
			"artist": "Ludo Lullabi",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.",
			"cost": 6,
			"id": "EX1_112",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "PROMO",
			"entourage": [
				"Mekka1",
				"Mekka2",
				"Mekka3",
				"Mekka4"
			],
			"rarity": "LEGENDARY",
			"name": "Gelbin Mekkatorque",
			"howToEarnGolden": "This was rewarded to players who helped test the Store during the Beta.",
			"text": "<b>Battlecry:</b> Summon an AWESOME invention.",
			"faction": "ALLIANCE",
			"health": 6
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"text": "Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.",
			"playerClass": "PRIEST",
			"cost": 3,
			"name": "Shadowform",
			"rarity": "EPIC",
			"set": "EXPERT1",
			"flavor": "If a bright light shines on a priest in Shadowform… do they cast a shadow?",
			"collectible": true,
			"id": "EX1_625"
		},
		{
			"artist": "Alex Garner",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "The one time when duping cards won't get your account banned!",
			"cost": 3,
			"howToEarn": "Unlocked by completing the Mage Class Challenge in Naxxramas.",
			"id": "FP1_018",
			"mechanics": [
				"SECRET"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Duplicate",
			"howToEarnGolden": "Can be crafted after completing the Mage Class Challenge in Naxxramas.",
			"text": "<b>Secret:</b> When a friendly minion dies, put 2 copies of it into your hand.",
			"collectible": true
		},
		{
			"artist": "Dave Allsop",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 5,
			"flavor": "He just wants people to see his vacation photos.",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_FOR_COMBO": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "NEW1_005",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Kidnapper",
			"text": "<b>Combo:</b> Return a minion to its owner's hand.",
			"collectible": true,
			"health": 3,
			"targetingArrowText": "Return a minion to hand."
		},
		{
			"artist": "Brian Despain",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"Overheat threshold exceeded. System failure. Wheat clog in port two. Shutting down.\"",
			"cost": 3,
			"id": "EX1_556",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Harvest Golem",
			"text": "<b>Deathrattle:</b> Summon a 2/1 Damaged Golem.",
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Luca Zontini",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "They come out at night to eat leftover mana crystals. \"Mmmmmm,\" they say.",
			"cost": 2,
			"id": "EX1_616",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Mana Wraith",
			"text": "ALL minions cost (1) more.",
			"health": 2
		},
		{
			"artist": "Luke Mancini",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "I walked into the dungeon and noticed a slain adventurer. In his final moments, he had scrawled out a message in the dust on the wall beside him. Two words: \"rez plz\"",
			"cost": 2,
			"playRequirements": {
				"REQ_FRIENDLY_MINION_DIED_THIS_GAME": 0,
				"REQ_NUM_MINION_SLOTS": 1
			},
			"howToEarn": "Unlocked by defeating Emperor Thaurissan in Blackrock Depths.",
			"id": "BRM_017",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Resurrect",
			"howToEarnGolden": "Can be crafted after defeating Emperor Thaurissan in Blackrock Depths.",
			"text": "Summon a random friendly minion that died this game.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Weblords spend all day making giant trampoline parks.",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Grand Widow Faerlina in the Arachnid Quarter.",
			"id": "FP1_017",
			"mechanics": [
				"AURA"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Nerub'ar Weblord",
			"howToEarnGolden": "Can be crafted after defeating Grand Widow Faerlina in the Arachnid Quarter.",
			"text": "Minions with <b>Battlecry</b> cost (2) more.",
			"health": 4
		},
		{
			"artist": "Dany Orizio",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "The claw decides who will stay and who will go.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_005",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Claw",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Give your hero +2 Attack this turn and 2 Armor.",
			"collectible": true
		},
		{
			"artist": "Tyler Walpole",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_309",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Siphon Soul",
			"text": "Destroy a minion. Restore #3 Health to your hero.",
			"collectible": true
		},
		{
			"artist": "Slawomir Maniak",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "A result of magical experiments carried out by the Black Dragonflight, it's not his fault that he's a vicious killer.",
			"cost": 4,
			"id": "AT_017",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Twilight Guardian",
			"text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.",
			"health": 6,
			"race": "DRAGON"
		},
		{
			"artist": "Daren Bader",
			"type": "SPELL",
			"text": "Shuffle 3 Ambushes into your opponent's deck. When drawn, you summon a 4/4 Nerubian.",
			"playerClass": "ROGUE",
			"cost": 3,
			"name": "Beneath the Grounds",
			"rarity": "EPIC",
			"set": "TGT",
			"flavor": "Can you hold these eggs for just a second?  I promise they're not full of giant enraged undead spider things.",
			"collectible": true,
			"id": "AT_035"
		},
		{
			"artist": "Anton Zemskov",
			"type": "MINION",
			"cost": 3,
			"health": 2,
			"name": "Ice Rager",
			"rarity": "COMMON",
			"attack": 5,
			"flavor": "He's a lot cooler than Magma Rager.",
			"set": "TGT",
			"collectible": true,
			"id": "AT_092"
		},
		{
			"artist": "Dan Scott",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "It's like birth, except you're an adult and you were just dead a second ago.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked by completing the Shaman Class Challenge in Naxxramas.",
			"id": "FP1_025",
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Reincarnate",
			"howToEarnGolden": "Can be crafted after completing the Shaman Class Challenge in Naxxramas.",
			"text": "Destroy a minion, then return it to life with full Health.",
			"collectible": true
		},
		{
			"artist": "Leo Che",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Magi of the Kirin Tor were casting Cubes of Cold for many years before Cones came into fashion some 90 years ago.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_275",
			"mechanics": [
				"FREEZE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Cone of Cold",
			"text": "<b>Freeze</b> a minion and the minions next to it, and deal $1 damage to them.",
			"collectible": true
		},
		{
			"artist": "Zoltan Boros",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Chocolate lava cake is shockingly delicious.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked by completing the Shaman Class Challenge in Blackrock Mountain.",
			"id": "BRM_011",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Lava Shock",
			"howToEarnGolden": "Can be crafted after completing the Shaman Class Challenge in Blackrock Mountain.",
			"text": "Deal $2 damage.\nUnlock your <b>Overloaded</b> Mana Crystals.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "No Pain, No Gain.",
			"cost": 5,
			"id": "EX1_399",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Gurubashi Berserker",
			"howToEarnGolden": "Unlocked at Warlock Level 57.",
			"text": "Whenever this minion takes damage, gain +3 Attack.",
			"health": 7
		},
		{
			"artist": "Anton Zemskov",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 6,
			"flavor": "They were originally called Cuddleguards, but they were not inspiring the proper amount of fear.",
			"cost": 7,
			"id": "AT_020",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Fearsome Doomguard",
			"collectible": true,
			"health": 8,
			"race": "DEMON"
		},
		{
			"artist": "Steve Prescott",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "Nat Pagle, Azeroth's premier fisherman!  He invented the Auto-Angler 3000, the Extendo-Pole 3000, and the Lure-o-matic 2099 (still in testing).",
			"cost": 2,
			"id": "EX1_557",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Nat Pagle",
			"textInPlay": "Fishing",
			"text": "At the start of your turn, you have a 50% chance to draw an extra card.",
			"health": 4
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "What's more boss than riding a parrot with a jawbone for a shoulderpad while wielding a giant hook-lance-thing and wearing a pirate hat?  NOTHING.",
			"cost": 7,
			"id": "AT_070",
			"mechanics": [
				"CHARGE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Skycap'n Kragg",
			"text": "<b>Charrrrrge</b>\nCosts (1) less for each friendly Pirate.",
			"health": 6,
			"race": "PIRATE"
		},
		{
			"artist": "Wayne Reynolds",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 5,
			"flavor": "Antonidas was the Grand Magus of the Kirin Tor, and Jaina's mentor.  This was a big step up from being Grand Magus of Jelly Donuts.",
			"cost": 7,
			"id": "EX1_559",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Archmage Antonidas",
			"text": "Whenever you cast a spell, add a 'Fireball' spell to your hand.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Chris Robinson",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Kel'Thuzad could not resist the call of the Lich King. Even when it's just a robo-call extolling the Lich King's virtues.",
			"cost": 8,
			"howToEarn": "Unlocked by defeating every boss in Naxxramas!",
			"id": "FP1_013",
			"set": "NAXX",
			"rarity": "LEGENDARY",
			"name": "Kel'Thuzad",
			"howToEarnGolden": "Can be crafted after defeating every boss in Naxxramas!",
			"text": "At the end of each turn, summon all friendly minions that died this turn.",
			"health": 8
		},
		{
			"artist": "Wei Wang",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 5,
			"flavor": "Gallywix believes in supply and demand. He supplies the beatings and demands you pay up!",
			"cost": 6,
			"id": "GVG_028",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Trade Prince Gallywix",
			"text": "Whenever your opponent casts a spell, gain a copy of it and give them a Coin.",
			"collectible": true,
			"health": 8
		},
		{
			"artist": "Wei Wang",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 4,
			"flavor": "Calling the mist doesn't sound all that great.  \"Ooooh, it is slightly damp now!\"",
			"cost": 6,
			"id": "AT_054",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "The Mistcaller",
			"text": "<b>Battlecry:</b> Give all minions in your hand and deck +1/+1.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Howard Lyon",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Sometimes he forgets and just wanders into someone else's game.",
			"cost": 4,
			"id": "EX1_584",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Ancient Mage",
			"text": "<b>Battlecry:</b> Give adjacent minions <b>Spell Damage +1</b>.",
			"health": 5
		},
		{
			"artist": "Mike Sass",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "There is no beast more frightening (or ridiculous) than a fully enraged chicken.",
			"cost": 1,
			"id": "EX1_009",
			"mechanics": [
				"ENRAGED"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Angry Chicken",
			"text": "<b>Enrage:</b> +5 Attack.",
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Foe reaping is really not so different from harvest reaping, at the end of the day.",
			"cost": 8,
			"id": "GVG_113",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Foe Reaper 4000",
			"text": "Also damages the minions next to whomever he attacks.",
			"health": 9,
			"race": "MECHANICAL"
		},
		{
			"artist": "Dave Allsop",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Rogues can't stand it. They know you planned it! They are going to set you straight!",
			"cost": 4,
			"playRequirements": {
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "GVG_047",
			"mechanics": [
				"COMBO"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Sabotage",
			"text": "Destroy a random enemy minion. <b>Combo</b>: And your opponent's weapon.",
			"collectible": true
		},
		{
			"artist": "Justin Sweet",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "She'll craft you a sword, but you'll need to bring her 5 Steel Ingots, 3 Motes of Earth, and the scalp of her last customer.",
			"cost": 5,
			"id": "CS2_221",
			"mechanics": [
				"ENRAGED"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Spiteful Smith",
			"textInPlay": "Summoning",
			"text": "<b>Enrage:</b> Your weapon has +2 Attack.",
			"faction": "HORDE",
			"health": 6
		},
		{
			"artist": "Matt Gaser",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 2,
			"flavor": "Unlike bound elementals, Unbound ones really enjoy a night on the town.",
			"cost": 3,
			"id": "EX1_258",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Unbound Elemental",
			"text": "Whenever you play a card with <b>Overload</b>, gain +1/+1.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "So reaver. Much fel. Wow.",
			"cost": 5,
			"id": "GVG_016",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Fel Reaver",
			"text": "Whenever your opponent plays a card, remove the top 3 cards of your deck.",
			"health": 8,
			"race": "MECHANICAL"
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "ROGUE",
			"health": 30,
			"rarity": "FREE",
			"name": "Valeera Sanguinar",
			"collectible": true,
			"id": "HERO_03"
		},
		{
			"artist": "Wayne Reynolds",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.",
			"cost": 6,
			"id": "EX1_110",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Cairne Bloodhoof",
			"text": "<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Frank Cho",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "There's something about this strike that just feels off.  Sinister, even.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_075",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Sinister Strike",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Deal $3 damage to the enemy hero.",
			"collectible": true
		},
		{
			"artist": "Doug Alexander",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "When Deathwing assaulted the capital, this soldier was the only member of his squad to survive. Now he's all bitter and stuff.",
			"cost": 7,
			"id": "CS2_222",
			"mechanics": [
				"AURA"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Stormwind Champion",
			"textInPlay": "For the Alliance!",
			"howToEarnGolden": "Unlocked at Paladin Level 59.",
			"text": "Your other minions have +1/+1.",
			"faction": "ALLIANCE",
			"health": 6
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "When a Water elemental and an Ice elemental love each other VERY much...",
			"cost": 6,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0
			},
			"id": "EX1_283",
			"mechanics": [
				"BATTLECRY",
				"FREEZE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Frost Elemental",
			"text": "<b>Battlecry:</b> <b>Freeze</b> a character.",
			"health": 5,
			"targetingArrowText": "Freeze a character."
		},
		{
			"artist": "Sam Nielsen",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 3,
			"flavor": "Hee hee!  Look at his cute little feet.",
			"cost": 4,
			"id": "AT_076",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Murloc Knight",
			"text": "<b>Inspire:</b> Summon a random Murloc.",
			"collectible": true,
			"health": 4,
			"race": "MURLOC"
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Rumor has it that Deathwing brought about the Cataclysm after losing a game to this card.  We may never know the truth.",
			"cost": 3,
			"id": "EX1_594",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Vaporize",
			"text": "<b>Secret:</b> When a minion attacks your hero, destroy it.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Abominations enjoy Fresh Meat and long walks on the beach.",
			"cost": 5,
			"id": "EX1_097",
			"mechanics": [
				"DEATHRATTLE",
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Abomination",
			"text": "<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.",
			"health": 4
		},
		{
			"artist": "Howard Lyon",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "This spell is much better than Arcane Implosion.",
			"cost": 2,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_025",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Arcane Explosion",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Deal $1 damage to all enemy minions.",
			"collectible": true
		},
		{
			"artist": "Vance Kovacs",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Consecrated ground glows with Holy energy.  But it smells a little, too.",
			"cost": 4,
			"howToEarn": "Unlocked at Level 4.",
			"id": "CS2_093",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Consecration",
			"howToEarnGolden": "Unlocked at Level 43.",
			"text": "Deal $2 damage to all enemies.",
			"collectible": true
		},
		{
			"artist": "Justin Sweet",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "C'mon Molten Giant!!",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_365",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Holy Wrath",
			"text": "Draw a card and deal damage equal to its cost.",
			"collectible": true
		},
		{
			"artist": "Dave Kendall",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "Start with a powerful minion and stir in Shadowflame and you have a good time!",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_303",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Shadowflame",
			"text": "Destroy a friendly minion and deal its Attack damage to all enemy minions.",
			"collectible": true
		},
		{
			"artist": "Blizzard Entertainment",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 0,
			"flavor": "It isn't clear if people ignore the Lightwell, or if it is just invisible.",
			"cost": 2,
			"id": "EX1_341",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Lightwell",
			"text": "At the start of your turn, restore 3 Health to a damaged friendly character.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Eric Braddock",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 4,
			"flavor": "He loves skulking. He skulks after hours just for the joy of it, but his friends are pretty worried he'll get burnt out.",
			"cost": 5,
			"howToEarn": "Unlocked by completing the Rogue Class Challenge in Blackrock Mountain.",
			"id": "BRM_008",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "BRM",
			"rarity": "RARE",
			"name": "Dark Iron Skulker",
			"howToEarnGolden": "Can be crafted after completing the Rogue Class Challenge in Blackrock Mountain.",
			"text": "<b>Battlecry:</b> Deal 2 damage to all undamaged enemy minions.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Howard Lyon",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "\"Cobra Shot\" hurts way, way, way more than \"Cobra Cuddle.\"",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_073",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Cobra Shot",
			"text": "Deal $3 damage to a minion and the enemy hero.",
			"collectible": true
		},
		{
			"artist": "Dan Brereton",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 1,
			"flavor": "Spider cocoons are like little piñatas!",
			"cost": 1,
			"howToEarn": "Unlocked by completing the Hunter Class Challenge in Naxxramas.",
			"id": "FP1_011",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Webspinner",
			"howToEarnGolden": "Can be crafted after completing the Hunter Class Challenge in Naxxramas.",
			"text": "<b>Deathrattle:</b> Add a random Beast card to your hand.",
			"collectible": true,
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "Esad Ribic",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He used to be a librarian.  Old habits die hard.",
			"cost": 3,
			"id": "AT_095",
			"mechanics": [
				"DIVINE_SHIELD",
				"STEALTH"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Silent Knight",
			"text": "<b>Stealth</b>\n<b>Divine Shield</b>",
			"health": 2
		},
		{
			"artist": "Warren Mahy",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "You'd think you'd be able to control your missiles a little better since you're a powerful mage and all.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_277",
			"mechanics": [
				"ImmuneToSpellpower"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Arcane Missiles",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Deal $3 damage randomly split among all enemies.",
			"collectible": true
		},
		{
			"artist": "Vinod Rams",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Ogres have really terrible short-term chocolate.",
			"cost": 3,
			"id": "GVG_065",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Ogre Brute",
			"text": "50% chance to attack the wrong enemy.",
			"health": 4
		},
		{
			"artist": "Ben Olson",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 1,
			"flavor": "He’s not really that patient. It just takes a while for someone to walk by that he can actually reach.",
			"cost": 2,
			"id": "EX1_522",
			"mechanics": [
				"POISONOUS",
				"STEALTH"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Patient Assassin",
			"textInPlay": "Sharpening",
			"text": "<b>Stealth</b>. Destroy any minion damaged by this minion.",
			"collectible": true,
			"health": 1
		},
		{
			"artist": "Skan Srisuwan",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "\"THEY'RE EVERYWHERE GET THEM OFF!!!\" - Everyone",
			"cost": 6,
			"playRequirements": {
				"REQ_NUM_MINION_SLOTS": 1
			},
			"id": "AT_062",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Ball of Spiders",
			"text": "Summon three 1/1 Webspinners.",
			"collectible": true
		},
		{
			"artist": "Jaemin Kim",
			"type": "MINION",
			"collectible": true,
			"attack": 0,
			"flavor": "Think of them as bullets for your dragon gun.",
			"cost": 1,
			"howToEarn": "Unlocked by defeating Rend Blackhand in Blackrock Spire.",
			"id": "BRM_022",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Dragon Egg",
			"howToEarnGolden": "Can be crafted after defeating Rend Blackhand in Blackrock Spire.",
			"text": "Whenever this minion takes damage, summon a 2/1 Whelp.",
			"health": 2
		},
		{
			"artist": "Zoltan Boros",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "His enhancements are gluten free!",
			"cost": 4,
			"id": "GVG_107",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Enhance-o Mechano",
			"text": "<b>Battlecry:</b> Give your other minions <b>Windfury</b>, <b>Taunt</b>, or <b>Divine Shield</b>.\n<i>(at random)</i>",
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "\"Yarrrr\" is a pirate word that means \"Greetings, milord.\"",
			"cost": 4,
			"id": "NEW1_022",
			"mechanics": [
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Dread Corsair",
			"text": "<b>Taunt.</b> Costs (1) less per Attack of your weapon.",
			"health": 3,
			"race": "PIRATE"
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 6,
			"flavor": "A little better than Sea Minus Reaver.",
			"cost": 6,
			"id": "AT_130",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Sea Reaver",
			"text": "When you draw this, deal 1 damage to your minions.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "E.M. Gist",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "\"Dun da dun, dun da dun\": if you've heard an ogre sing this, it's too late.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_391",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Slam",
			"text": "Deal $2 damage to a minion. If it survives, draw a card.",
			"collectible": true
		},
		{
			"artist": "Todd Lockwood",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 4,
			"flavor": "\"Evil Eye Watcher of Doom\" was the original name, but marketing felt it was a bit too aggressive.",
			"cost": 5,
			"id": "GVG_100",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Floating Watcher",
			"text": "Whenever your hero takes damage on your turn, gain +2/+2.",
			"collectible": true,
			"health": 4,
			"race": "DEMON"
		},
		{
			"artist": "Sean McNally",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "The medic tournament is less entertaining than the Grand Tournament.",
			"cost": 4,
			"id": "AT_091",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Tournament Medic",
			"text": "<b>Inspire:</b> Restore 2 Health to your hero.",
			"health": 8
		},
		{
			"artist": "Alex Garner",
			"type": "SPELL",
			"text": "Copy 2 cards from your opponent's deck and put them into your hand.",
			"playerClass": "PRIEST",
			"cost": 3,
			"name": "Thoughtsteal",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "\"What do you get when you cast Thoughtsteal on an Orc?  Nothing!\" - Tauren joke",
			"collectible": true,
			"id": "EX1_339"
		},
		{
			"artist": "Michal Ivan",
			"type": "SPELL",
			"text": "Change the Health of ALL minions to 1.",
			"playerClass": "PALADIN",
			"cost": 2,
			"name": "Equality",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "We are all special unique snowflakes... with 1 Health.",
			"collectible": true,
			"id": "EX1_619"
		},
		{
			"artist": "Gonzalo Ordonez",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "While it's fun to intercept enemy lightning bolts, a spellbender much prefers to intercept opposing Marks of the Wild.  It just feels meaner.  And blood elves... well, they're a little mean.",
			"cost": 3,
			"id": "tt_010",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Spellbender",
			"text": "<b>Secret:</b> When an enemy casts a spell on a minion, summon a 1/3 as the new target.",
			"collectible": true
		},
		{
			"artist": "Zoltan Boros ",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 3,
			"flavor": "Almost went to play for Stormwind before signing with Undercity.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_FOR_COMBO": 0
			},
			"id": "AT_030",
			"mechanics": [
				"COMBO"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Undercity Valiant",
			"text": "<b>Combo:</b> Deal 1 damage.",
			"collectible": true,
			"health": 2,
			"targetingArrowText": "Deal 1 damage."
		},
		{
			"artist": "Luke Mancini",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Gazlowe was voted \"Most Likely to Explode\" in high school.",
			"cost": 6,
			"id": "GVG_117",
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Gazlowe",
			"text": "Whenever you cast a 1-mana spell, add a random Mech to your hand.",
			"health": 6
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "The Blood Knights get their holy powers from the Sunwell, which you should NOT bathe in.",
			"cost": 3,
			"id": "EX1_590",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Blood Knight",
			"text": "<b>Battlecry:</b> All minions lose <b>Divine Shield</b>. Gain +3/+3 for each Shield lost.",
			"health": 3
		},
		{
			"artist": "Jakub Kasper",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "The crowd ALWAYS yells lethal.",
			"cost": 4,
			"id": "AT_121",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Crowd Favorite",
			"text": "Whenever you play a card with <b>Battlecry</b>, gain +1/+1.",
			"health": 4
		},
		{
			"artist": "E.M. Gist",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "He used to be a 2100+ rated arena player, but that was years ago and nobody can get him to shut up about it.",
			"cost": 6,
			"id": "CS2_162",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Lord of the Arena",
			"howToEarnGolden": "Unlocked at Priest Level 59.",
			"text": "<b>Taunt</b>",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Dave Allsop",
			"type": "SPELL",
			"text": "Destroy all minions.",
			"playerClass": "WARLOCK",
			"cost": 8,
			"name": "Twisting Nether",
			"rarity": "EPIC",
			"set": "EXPERT1",
			"flavor": "The Twisting Nether is a formless place of magic and illusion and destroyed minions.",
			"collectible": true,
			"id": "EX1_312"
		},
		{
			"artist": "Hideaki Takamura",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "\"Look, it's not just about waving daggers around really fast.  It's a lot more complicated than that.\" - Shan, Rogue Trainer",
			"cost": 2,
			"playRequirements": {
				"REQ_WEAPON_EQUIPPED": 0
			},
			"id": "CS2_233",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Blade Flurry",
			"text": "Destroy your weapon and deal its damage to all enemies.",
			"collectible": true
		},
		{
			"artist": "Efrem Palacios",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He's stationed in the Hellfire Peninsula, but he's hoping for a reassignment closer to Orgrimmar, or really anywhere the ground is less on fire.",
			"cost": 3,
			"id": "EX1_021",
			"mechanics": [
				"WINDFURY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Thrallmar Farseer",
			"text": "<b>Windfury</b>",
			"faction": "HORDE",
			"health": 3
		},
		{
			"artist": "Seamus Gallagher",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 2,
			"flavor": "He never sleeps.  Not even in the mighty jungle.",
			"cost": 5,
			"id": "GVG_046",
			"mechanics": [
				"BATTLECRY",
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "King of Beasts",
			"text": "<b>Taunt</b>. <b>Battlecry:</b> Gain +1 Attack for each other Beast you have.",
			"collectible": true,
			"health": 6,
			"race": "BEAST"
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 7,
			"flavor": "The roots, the roots, the roots is on fire!",
			"cost": 9,
			"howToEarn": "Unlocked by completing the Druid Class Challenge in Blackrock Mountain.",
			"id": "BRM_009",
			"mechanics": [
				"TAUNT"
			],
			"set": "BRM",
			"rarity": "RARE",
			"name": "Volcanic Lumberer",
			"howToEarnGolden": "Can be crafted after completing the Druid Class Challenge in Blackrock Mountain.",
			"text": "<b>Taunt</b>\nCosts (1) less for each minion that died this turn.",
			"collectible": true,
			"health": 8
		},
		{
			"artist": "Trent Kaniuga",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 7,
			"flavor": "Crushes buildings with his BEAR hands. ",
			"cost": 6,
			"id": "GVG_034",
			"entourage": [
				"PART_007",
				"PART_006",
				"PART_005",
				"PART_001",
				"PART_003",
				"PART_002",
				"PART_004"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Mech-Bear-Cat",
			"text": "Whenever this minion takes damage, add a <b>Spare Part</b> card to your hand.",
			"collectible": true,
			"health": 6,
			"race": "MECHANICAL"
		},
		{
			"artist": "Steve Prescott",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "They can see the future.   In that future both players draw more cards.   Spoooky.",
			"cost": 3,
			"id": "EX1_050",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Coldlight Oracle",
			"text": "<b>Battlecry:</b> Each player draws 2 cards.",
			"health": 2,
			"race": "MURLOC"
		},
		{
			"artist": "Wei Wang",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "You could summon Misha, Leokk, or Huffer!  Huffer is more trouble than he's worth.",
			"cost": 3,
			"playRequirements": {
				"REQ_NUM_MINION_SLOTS": 1
			},
			"howToEarn": "Unlocked at Level 2.",
			"id": "NEW1_031",
			"entourage": [
				"NEW1_032",
				"NEW1_033",
				"NEW1_034"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Animal Companion",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "Summon a random Beast Companion.",
			"collectible": true
		},
		{
			"artist": "Phil Saunders",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Mechs that summon mechs? What's next? Donuts that summon donuts? Mmmmm.",
			"cost": 2,
			"id": "GVG_006",
			"mechanics": [
				"AURA"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Mechwarper",
			"text": "Your Mechs cost (1) less.",
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Chris Seaman",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "The yetis of Chillwind Point are a source of both inspiration and savage beatings.",
			"cost": 4,
			"id": "GVG_078",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"entourage": [
				"PART_001",
				"PART_003",
				"PART_006",
				"PART_007",
				"PART_004",
				"PART_005",
				"PART_002"
			],
			"rarity": "COMMON",
			"name": "Mechanical Yeti",
			"text": "<b>Deathrattle:</b> Give each player a <b>Spare Part.</b>",
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "James Zhang",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Rogues are not good joggers.",
			"cost": 7,
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_077",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Sprint",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "Draw 4 cards.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.",
			"cost": 6,
			"id": "EX1_614",
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Illidan Stormrage",
			"text": "Whenever you play a card, summon a 2/1 Flame of Azzinoth.",
			"health": 5,
			"race": "DEMON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 5,
			"flavor": "Playing him also gets you into the Magnataur Beta.",
			"cost": 4,
			"id": "AT_067",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Magnataur Alpha",
			"text": "Also damages the minions next to whomever\nhe attacks.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "They don't make 'em like they used to! (Because of explosions, mostly.)",
			"cost": 5,
			"id": "GVG_069",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Antique Healbot",
			"text": "<b>Battlecry:</b> Restore 8 Health to your hero.",
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Zoltan Boros",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "One bot's junk is another bot's AWESOME UPGRADE!",
			"cost": 5,
			"id": "GVG_106",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Junkbot",
			"text": "Whenever a friendly Mech dies, gain +2/+2.",
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Ironically, the natural enemy of the snobold is THE CANDLE.",
			"cost": 4,
			"id": "AT_093",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Frigid Snobold",
			"text": "<b>Spell Damage +1</b>",
			"health": 6
		},
		{
			"artist": "Jonboy Meyers",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "pow POW pow",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_056",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Powershot",
			"text": "Deal $2 damage to a minion and the minions next to it.",
			"collectible": true
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Reserved for enemy spellcasters, evil liches from beyond the grave, and karaoke nights at the Grim Guzzler.",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_332",
			"mechanics": [
				"SILENCE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Silence",
			"text": "<b>Silence</b> a minion.",
			"collectible": true
		},
		{
			"artist": "Michael Komarck",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "The ethereals are wrapped in cloth to give form to their non-corporeal bodies. Also because it's nice and soft.",
			"cost": 4,
			"id": "EX1_274",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Ethereal Arcanist",
			"text": "If you control a <b>Secret</b> at the end of your turn, gain +2/+2.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Lars Grant-West",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "\"Bear Carcass 1/10\"",
			"cost": 3,
			"id": "CS2_125",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Ironfur Grizzly",
			"howToEarnGolden": "Unlocked at Hunter Level 59.",
			"text": "<b>Taunt</b>",
			"health": 3,
			"race": "BEAST"
		},
		{
			"artist": "Howard Lyon",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "This card is boaring.",
			"cost": 1,
			"id": "CS2_171",
			"mechanics": [
				"CHARGE"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Stonetusk Boar",
			"howToEarnGolden": "Unlocked at Hunter Level 53.",
			"text": "<b>Charge</b>",
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "Chillmaw keeps trying to ruin the Grand Tournament, and she would've done it too, if it weren't for those dang kids!",
			"cost": 7,
			"id": "AT_123",
			"mechanics": [
				"DEATHRATTLE",
				"TAUNT"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Chillmaw",
			"text": "<b>Taunt</b>\n<b>Deathrattle:</b> If you're holding a Dragon, deal 3 damage to all minions.",
			"health": 6,
			"race": "DRAGON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "The seething wrath is just beneath the surface.  Beneath that is wild abandon, followed by slight annoyance.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 20,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_549",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Bestial Wrath",
			"text": "Give a friendly Beast +2 Attack and <b>Immune</b> this turn.",
			"collectible": true
		},
		{
			"artist": "Bernie Kang",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Most pandaren say his brew tastes like yak.  But apparently that's a compliment.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "EX1_057",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Ancient Brewmaster",
			"text": "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
			"faction": "ALLIANCE",
			"health": 4,
			"targetingArrowText": "Return a minion to your hand."
		},
		{
			"artist": "Skan Srisuwan",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 5,
			"flavor": "Just could not be talked out of using his turtle for the joust...",
			"cost": 5,
			"id": "AT_104",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Tuskarr Jouster",
			"text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, restore 7 Health to your hero.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "John Polidora",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "The Silver Hand is the best paladin organization.  The Argent Crusaders are super jealous.",
			"cost": 3,
			"id": "AT_100",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Silver Hand Regent",
			"text": "<b>Inspire:</b> Summon a 1/1 Silver Hand Recruit.",
			"health": 3
		},
		{
			"artist": "Jonboy Meyers",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "In a world where you can run to a spirit healer and resurrect yourself, Undertakers do pretty light business.",
			"cost": 1,
			"howToEarn": "Unlocked by defeating Patchwerk in the Construct Quarter.",
			"id": "FP1_028",
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Undertaker",
			"howToEarnGolden": "Can be crafted after defeating Patchwerk in the Construct Quarter.",
			"text": "Whenever you summon a minion with <b>Deathrattle</b>, gain +1 Attack.",
			"health": 2
		},
		{
			"artist": "Ralph Horsley",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "Just mail him a package with a name and 10,000 gold.  He'll take care of the rest.",
			"cost": 7,
			"id": "CS2_161",
			"mechanics": [
				"STEALTH"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Ravenholdt Assassin",
			"text": "<b>Stealth</b>",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "He was <i>this close</i> to piloting a massive juggernaut into Stormwind Harbor. If it weren't for those pesky kids!",
			"cost": 5,
			"id": "NEW1_024",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Captain Greenskin",
			"text": "<b>Battlecry:</b> Give your weapon +1/+1.",
			"health": 4,
			"race": "PIRATE"
		},
		{
			"artist": "Edouard Guiton & Stuido HIVE",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Dragonkin Sorcerers be all \"I'm a wizard\" and everyone else be all \"daaaaang\".",
			"cost": 4,
			"howToEarn": "Unlocked by defeating Nefarian in the Hidden Laboratory.",
			"id": "BRM_020",
			"set": "BRM",
			"rarity": "COMMON",
			"name": "Dragonkin Sorcerer",
			"howToEarnGolden": "Can be crafted after defeating Nefarian in the Hidden Laboratory.",
			"text": "Whenever <b>you</b> target this minion with a spell, gain +1/+1.",
			"health": 5,
			"race": "DRAGON"
		},
		{
			"artist": "Luca Zontini",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Magi conjured arcane arrows to sell to hunters, until hunters learned just enough magic to do it themselves.  The resulting loss of jobs sent Stormwind into a minor recession.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "DS1_185",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Arcane Shot",
			"howToEarnGolden": "Unlocked at Level 32.",
			"text": "Deal $2 damage.",
			"collectible": true
		},
		{
			"artist": "Jun Kang",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 2,
			"flavor": "Goblins seldom have the patience for sniping. Most prefer lobbing explosives.",
			"cost": 2,
			"id": "GVG_087",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Steamwheedle Sniper",
			"text": "Your Hero Power can target minions.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "He and Mountain Giant don't get along.",
			"cost": 12,
			"id": "GVG_121",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Clockwork Giant",
			"text": "Costs (1) less for each card in your opponent's hand.",
			"health": 8,
			"race": "MECHANICAL"
		},
		{
			"artist": "Joe Wilson",
			"type": "WEAPON",
			"playerClass": "PALADIN",
			"attack": 2,
			"flavor": "The stripes make it look like a candy cane, but we recommend against licking it.",
			"collectible": true,
			"id": "AT_077",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"cost": 2,
			"rarity": "RARE",
			"name": "Argent Lance",
			"durability": 2,
			"text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, +1 Durability."
		},
		{
			"artist": "Edouard Guiton & Tony Washington",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Yep.  It's a horse... wearing armor... going to war.",
			"cost": 4,
			"id": "AT_108",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Armored Warhorse",
			"text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain <b>Charge</b>.",
			"health": 3,
			"race": "BEAST"
		},
		{
			"artist": "Markus Erdt",
			"type": "SPELL",
			"text": "Give your minions \"<b>Deathrattle:</b> Summon a 2/2 Treant.\"",
			"playerClass": "DRUID",
			"cost": 4,
			"name": "Soul of the Forest",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "\"Reforestation\" is suddenly a terrifying word.",
			"collectible": true,
			"id": "EX1_158"
		},
		{
			"artist": "Cyril Van Der Haegen",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "8 Health, no waiting.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_007",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Healing Touch",
			"howToEarnGolden": "Unlocked at Level 15.",
			"text": "Restore #8 Health.",
			"collectible": true
		},
		{
			"artist": "Steve Prescott",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Don't bother asking her out on a date.  She'll shoot you down.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0
			},
			"id": "CS2_189",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Elven Archer",
			"howToEarnGolden": "Unlocked at Druid Level 57.",
			"text": "<b>Battlecry:</b> Deal 1 damage.",
			"faction": "HORDE",
			"health": 1,
			"targetingArrowText": "Deal 1 damage."
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "Apprentices are great for bossing around.  \"Conjure me some mana buns! And a coffee!  Make that a mana coffee!\"",
			"cost": 2,
			"id": "EX1_608",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Sorcerer's Apprentice",
			"text": "Your spells cost (1) less.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Jimmy Lo",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "Never play 'Hide and Go Seek' with a Hunter.",
			"cost": 0,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 6.",
			"id": "CS2_084",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Hunter's Mark",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Change a minion's Health to 1.",
			"collectible": true
		},
		{
			"artist": "Richard Wright",
			"type": "SPELL",
			"text": "<b>Choose One -</b> Deal $5 damage to a minion; or $2 damage to all enemy minions.",
			"playerClass": "DRUID",
			"cost": 5,
			"name": "Starfall",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "Is the sky falling?  Yes.  Yes it is.",
			"collectible": true,
			"id": "NEW1_007"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 9,
			"flavor": "You thought Executus turned you into Ragnaros, but really Ragnaros was in you the whole time.",
			"cost": 9,
			"howToEarn": "Unlocked by completing Molten Core.",
			"id": "BRM_027",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "BRM",
			"rarity": "LEGENDARY",
			"name": "Majordomo Executus",
			"howToEarnGolden": "Can be crafted after completing Molten Core.",
			"text": "<b>Deathrattle:</b> Replace your hero with Ragnaros, the Firelord.",
			"health": 7
		},
		{
			"artist": "Chippy",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "If an Amani berserker asks \"Joo lookin' at me?!\", the correct response is \"Nah, mon\".",
			"cost": 2,
			"id": "EX1_393",
			"mechanics": [
				"ENRAGED"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Amani Berserker",
			"text": "<b>Enrage:</b> +3 Attack",
			"health": 3
		},
		{
			"artist": "Dan Brereton",
			"type": "SPELL",
			"text": "<b>Choose One</b> - Deal $2 damage; or Summon two 1/1 Saplings.",
			"playerClass": "DRUID",
			"cost": 1,
			"name": "Living Roots",
			"rarity": "COMMON",
			"set": "TGT",
			"flavor": "2 out of 2 saplings recommend that you summon the saplings.",
			"collectible": true,
			"id": "AT_037"
		},
		{
			"artist": "Jomaro Kindred",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "PREPARE PARTY SERVOS FOR IMMEDIATE DEPLOYMENT.",
			"cost": 5,
			"id": "GVG_119",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Blingtron 3000",
			"text": "<b>Battlecry:</b> Equip a random weapon for each player.",
			"health": 4,
			"race": "MECHANICAL"
		},
		{
			"artist": "Tyler Walpole",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 1,
			"flavor": "Mass production of warbots was halted when it was discovered that they were accidentally being produced at \"sample size.\"",
			"cost": 1,
			"id": "GVG_051",
			"mechanics": [
				"ENRAGED"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Warbot",
			"text": "<b>Enrage:</b> +1 Attack.",
			"collectible": true,
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Ralph Horsley",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "This spell is useful for burning things.  If you're looking for spells that toast things, or just warm them a little, you're in the wrong place.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_029",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Fireball",
			"howToEarnGolden": "Unlocked at Level 44.",
			"text": "Deal $6 damage.",
			"collectible": true
		},
		{
			"artist": "Ben Olson",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "For when you didn’t combobulate quite right the first time around.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"id": "GVG_108",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Recombobulator",
			"text": "<b>Battlecry:</b> Transform a friendly minion into a random minion with the same Cost.",
			"health": 2,
			"targetingArrowText": "Transform!"
		},
		{
			"artist": "Todd Lockwood",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "A veteran of a number of crusades, she is a force for light and goodness.  Her latest crusade is against goblin telemarketers.",
			"cost": 6,
			"id": "AT_118",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Grand Crusader",
			"text": "<b>Battlecry:</b> Add a random Paladin card to your hand.",
			"health": 5
		},
		{
			"artist": "Linggar Bramanty",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "You must read the name of this card out loud each time you play it.",
			"cost": 3,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 1,
				"REQ_NUM_MINION_SLOTS": 1
			},
			"id": "EX1_538",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Unleash the Hounds",
			"text": "For each enemy minion, summon a 1/1 Hound with <b>Charge</b>.",
			"collectible": true
		},
		{
			"artist": "Wayne Reynolds",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 9,
			"flavor": "Mal'Ganis doesn't like being betrayed, so if you discard him, watch out.",
			"cost": 9,
			"id": "GVG_021",
			"mechanics": [
				"AURA"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Mal'Ganis",
			"text": "Your other Demons have +2/+2.\nYour hero is <b>Immune</b>.",
			"collectible": true,
			"health": 7,
			"race": "DEMON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 7,
			"flavor": "He's recently recovered from being a \"scurvy dog.\"",
			"cost": 5,
			"id": "GVG_070",
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Salty Dog",
			"health": 4,
			"race": "PIRATE"
		},
		{
			"artist": "Zero Yue",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "There was some hard talk between gnome magi and engineers about inventing this mech.",
			"cost": 4,
			"id": "GVG_091",
			"mechanics": [
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Arcane Nullifier X-21",
			"text": "<b>Taunt</b>\nCan't be targeted by spells or Hero Powers.",
			"health": 5,
			"race": "MECHANICAL"
		},
		{
			"artist": "Robb Shoberg",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "\"Void!  Here, void!  Here, buddy!\"",
			"cost": 4,
			"howToEarn": "Unlocked by completing the Warlock Class Challenge in Naxxramas.",
			"id": "FP1_022",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Voidcaller",
			"howToEarnGolden": "Can be crafted after completing the Warlock Class Challenge in Naxxramas.",
			"text": "<b>Deathrattle:</b> Put a random Demon from your hand into the battlefield.",
			"collectible": true,
			"health": 4,
			"race": "DEMON"
		},
		{
			"type": "HERO",
			"set": "HERO_SKINS",
			"playerClass": "WARRIOR",
			"health": 30,
			"rarity": "EPIC",
			"name": "Magni Bronzebeard",
			"collectible": true,
			"id": "HERO_01a"
		},
		{
			"artist": " James Ryman",
			"type": "MINION",
			"playerClass": "PALADIN",
			"attack": 3,
			"flavor": "Nobody rocks a monocle like Eadric.",
			"cost": 7,
			"id": "AT_081",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Eadric the Pure",
			"text": "<b>Battlecry:</b> Change all enemy minions'\nAttack to 1.",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Lars Grant-West",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "The Sholazar Basin is home to a lot of really horrible things. If you're going to visit, wear bug spray.  And plate armor.",
			"cost": 3,
			"id": "EX1_170",
			"mechanics": [
				"POISONOUS"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Emperor Cobra",
			"textInPlay": "Fanged",
			"text": "Destroy any minion damaged by this minion.",
			"health": 3,
			"race": "BEAST"
		},
		{
			"artist": "Kerem Beyit",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "Virtually every member of the pro demon lobby is a warlock. Weird.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_019",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Demonheart",
			"text": "Deal $5 damage to a minion.  If it's a friendly Demon, give it +5/+5 instead.",
			"collectible": true
		},
		{
			"artist": "Phill Gonzales",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"That's a 50 DKP minus!\"",
			"cost": 3,
			"id": "CS2_122",
			"mechanics": [
				"AURA"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Raid Leader",
			"howToEarnGolden": "Unlocked at Warrior Level 57.",
			"text": "Your other minions have +1 Attack.",
			"health": 2
		},
		{
			"artist": "John Polidora",
			"type": "WEAPON",
			"playerClass": "SHAMAN",
			"attack": 2,
			"flavor": "Orgrim Doomhammer gave this legendary weapon to Thrall.  His name is a total coincidence.",
			"collectible": true,
			"id": "EX1_567",
			"mechanics": [
				"OVERLOAD",
				"WINDFURY"
			],
			"set": "EXPERT1",
			"cost": 5,
			"rarity": "EPIC",
			"name": "Doomhammer",
			"durability": 8,
			"text": "<b>Windfury, Overload:</b> (2)"
		},
		{
			"artist": "Eva Widermann",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "Turns out the tuskarr aren't real choosy about their totems.",
			"cost": 3,
			"id": "AT_046",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"entourage": [
				"CS2_052",
				"NEW1_009",
				"CS2_050",
				"CS2_051",
				"EX1_565",
				"GVG_039",
				"EX1_575",
				"AT_052"
			],
			"rarity": "COMMON",
			"name": "Tuskarr Totemic",
			"text": "<b>Battlecry:</b> Summon ANY random Totem.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Dany Orizio",
			"type": "WEAPON",
			"playerClass": "PALADIN",
			"attack": 2,
			"flavor": "So you ripped this out of a machine, carved some runes on it, stuck it on a handle, and now it's a weapon of great divine power? Seems legit.",
			"collectible": true,
			"id": "GVG_059",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"cost": 3,
			"rarity": "EPIC",
			"name": "Coghammer",
			"durability": 3,
			"text": "<b>Battlecry:</b> Give a random friendly minion <b>Divine Shield</b> and <b>Taunt</b>."
		},
		{
			"artist": "Tom Fleming",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"You'll <i>love</i> my new recipe!\" he says... especially if you're not happy with your current number of limbs.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_059",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Crazed Alchemist",
			"text": "<b>Battlecry:</b> Swap the Attack and Health of a minion.",
			"health": 2,
			"targetingArrowText": "Swap Attack and Health of a minion."
		},
		{
			"artist": "Trevor Jacobs",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "\"I think I'll just nap under these trees. Wait... AAAAAHHH!\" - Blinkfizz, the Unfortunate Gnome",
			"cost": 6,
			"playRequirements": {
				"REQ_NUM_MINION_SLOTS": 1
			},
			"id": "EX1_571",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Force of Nature",
			"text": "Summon three 2/2 Treants with <b>Charge</b> that die at the end of the turn.",
			"collectible": true
		},
		{
			"artist": "Dave Rapoza",
			"type": "SPELL",
			"playerClass": "DRUID",
			"flavor": "It is true that some druids are savage, but others still enjoy a quiet moment and a spot of tea.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_578",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Savagery",
			"text": "Deal damage equal to your hero's Attack to a minion.",
			"collectible": true
		},
		{
			"artist": "Andrea Uderzo",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "She doesn’t ACTUALLY walk on the Sun.  It's just a name.  Don’t worry!",
			"cost": 6,
			"id": "EX1_032",
			"mechanics": [
				"DIVINE_SHIELD",
				"TAUNT"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Sunwalker",
			"text": "<b>Taunt</b>\n<b>Divine Shield</b>",
			"faction": "ALLIANCE",
			"health": 5
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "MOMMMMMYYYYYYYYY!!!",
			"cost": 2,
			"id": "AT_053",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Ancestral Knowledge",
			"text": "Draw 2 cards. <b>Overload: (2)</b>",
			"collectible": true
		},
		{
			"artist": "Daren Bader",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "This card makes something really damp.  Oh wait.  That's \"Humidity.\"",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 6.",
			"id": "EX1_360",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Humility",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Change a minion's Attack to 1.",
			"collectible": true
		},
		{
			"artist": "Gabe from Penny Arcade",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "\"Kill!\", he commanded.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 10.",
			"id": "EX1_539",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Kill Command",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "Deal $3 damage. If you have a Beast, deal $5 damage instead.",
			"collectible": true
		},
		{
			"artist": "Jesper Ejsing",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Goes by \"MC ElfyElf\".",
			"cost": 3,
			"id": "AT_117",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Master of Ceremonies",
			"text": "<b>Battlecry:</b> If you have a minion with <b>Spell Damage</b>, gain +2/+2.",
			"health": 2
		},
		{
			"artist": "Brian Despain",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Sen'jin Villiage is nice, if you like trolls and dust.",
			"cost": 4,
			"id": "CS2_179",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Sen'jin Shieldmasta",
			"howToEarnGolden": "Unlocked at Rogue Level 59.",
			"text": "<b>Taunt</b>",
			"faction": "HORDE",
			"health": 5
		},
		{
			"artist": "Jakub Kasper",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "He just wants a hug.   A sloppy... slimy... hug.",
			"cost": 2,
			"id": "CS2_173",
			"mechanics": [
				"CHARGE"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Bluegill Warrior",
			"howToEarnGolden": "Unlocked at Paladin Level 53.",
			"text": "<b>Charge</b>",
			"health": 1,
			"race": "MURLOC"
		},
		{
			"artist": "Greg Staples",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "Don't ask him about the beard.  JUST DON'T.",
			"cost": 10,
			"id": "AT_120",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Frost Giant",
			"text": "Costs (1) less for each time you used your Hero Power this game.",
			"health": 8
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "The trick is not to break the lance.  Otherwise, you have \"Ice Pieces.\"  Ice Pieces aren't as effective.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "CS2_031",
			"mechanics": [
				"FREEZE"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Ice Lance",
			"text": "<b>Freeze</b> a character. If it was already <b>Frozen</b>, deal $4 damage instead.",
			"collectible": true
		},
		{
			"artist": "Leo Che",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Mind Control technology is getting better, but that's not saying much.",
			"cost": 3,
			"id": "EX1_085",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Mind Control Tech",
			"text": "<b>Battlecry:</b> If your opponent has 4 or more minions, take control of one at random.",
			"faction": "ALLIANCE",
			"health": 3
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Something about power converters.",
			"cost": 6,
			"id": "GVG_115",
			"mechanics": [
				"BATTLECRY",
				"DEATHRATTLE"
			],
			"set": "GVG",
			"entourage": [
				"PART_003",
				"PART_006",
				"PART_007",
				"PART_001",
				"PART_004",
				"PART_005",
				"PART_002"
			],
			"rarity": "LEGENDARY",
			"name": "Toshley",
			"text": "<b>Battlecry and Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.",
			"health": 7
		},
		{
			"artist": "RK Post",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 4,
			"flavor": "It's nice to find a real craftsman in this day and age of mass-produced totems.",
			"cost": 4,
			"id": "AT_047",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Draenei Totemcarver",
			"text": "<b>Battlecry:</b> Gain +1/+1 for each friendly Totem.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Jaemin Kim",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Stranglethorn is a beautiful place to visit, but you wouldn't want to live there.",
			"cost": 3,
			"id": "EX1_017",
			"mechanics": [
				"STEALTH"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Jungle Panther",
			"text": "<b>Stealth</b>",
			"faction": "HORDE",
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Matt Dixon",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "* Not actually Jaraxxus' fist.",
			"cost": 4,
			"id": "AT_022",
			"mechanics": [
				"InvisibleDeathrattle"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Fist of Jaraxxus",
			"text": "When you play or discard this, deal $4 damage to a random enemy.",
			"collectible": true
		},
		{
			"artist": "Greg Hildebrandt",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "They were the inspiration for the championship Taurenball team: The Dragonhawks.",
			"cost": 1,
			"id": "CS2_169",
			"mechanics": [
				"WINDFURY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Young Dragonhawk",
			"text": "<b>Windfury</b>",
			"faction": "HORDE",
			"health": 1,
			"race": "BEAST"
		},
		{
			"artist": "Ariel Olivetti",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "There is a high cost to Eviscerating your opponent:  It takes a long time to get blood stains out of leather armor.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_124",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Eviscerate",
			"text": "Deal $2 damage. <b>Combo:</b> Deal $4 damage instead.",
			"collectible": true
		},
		{
			"artist": "Paul Mafayon",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "A prime example of lose-lose negotiating.",
			"cost": 6,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 2
			},
			"id": "AT_025",
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Dark Bargain",
			"text": "Destroy 2 random enemy minions. Discard 2 random cards.",
			"collectible": true
		},
		{
			"artist": "Jim Pavelec",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Double the trouble. Double the fun!",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_236",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Divine Spirit",
			"howToEarnGolden": "Unlocked at Level 28.",
			"text": "Double a minion's Health.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "You wouldn’t think that Argus would need this much defending.  But it does.",
			"cost": 4,
			"id": "EX1_093",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Defender of Argus",
			"text": "<b>Battlecry:</b> Give adjacent minions +1/+1 and <b>Taunt</b>.",
			"faction": "ALLIANCE",
			"health": 3
		},
		{
			"artist": "Dan Scott",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "It's like an ocean of liquid magma in your mouth!",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "EX1_241",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Lava Burst",
			"text": "Deal $5 damage. <b>Overload:</b> (2)",
			"collectible": true
		},
		{
			"artist": "Tooth",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 4,
			"flavor": "I have great deal for you... for 4 damage to your face!",
			"cost": 3,
			"id": "AT_032",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Shady Dealer",
			"text": "<b>Battlecry:</b> If you have a Pirate, gain +1/+1.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Cyril Van Der Haegen",
			"type": "WEAPON",
			"playerClass": "HUNTER",
			"attack": 3,
			"flavor": "First Lesson: Put the pointy end in the other guy.",
			"collectible": true,
			"id": "EX1_536",
			"set": "EXPERT1",
			"cost": 3,
			"rarity": "RARE",
			"name": "Eaglehorn Bow",
			"durability": 2,
			"text": "Whenever a friendly <b>Secret</b> is revealed, gain +1 Durability."
		},
		{
			"artist": "Chris Rahn",
			"type": "MINION",
			"playerClass": "PRIEST",
			"attack": 5,
			"flavor": "She sees into your past and makes you face your fears.  Most common fear:  Getting Majordomo out of Sneed's Old Shredder.",
			"cost": 7,
			"id": "AT_018",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Confessor Paletress",
			"text": "<b>Inspire:</b> Summon a random <b>Legendary</b> minion.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "James Zhang",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 3,
			"flavor": "Elekk jousting is AWESOME.",
			"cost": 2,
			"id": "AT_058",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "King's Elekk",
			"text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, draw it.",
			"collectible": true,
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Lucas Graciano",
			"type": "WEAPON",
			"playerClass": "WARRIOR",
			"attack": 3,
			"flavor": "During times of tranquility and harmony, this weapon was called by its less popular name, Chilly Peace Axe.",
			"collectible": true,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_106",
			"howToEarnGolden": "Unlocked at Level 49.",
			"set": "CORE",
			"cost": 2,
			"rarity": "FREE",
			"name": "Fiery War Axe",
			"durability": 2
		},
		{
			"artist": "Andrew Hou",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "An elegant gorilla, for a more civilized age.",
			"cost": 5,
			"id": "AT_090",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Mukla's Champion",
			"text": "<b>Inspire:</b> Give your other minions +1/+1.",
			"health": 3,
			"race": "BEAST"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "This would be real handy if your enemy is made of rock.",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_045",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Rockbiter Weapon",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Give a friendly character +3 Attack this turn.",
			"collectible": true
		},
		{
			"artist": "Samwise",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "His mother said that he was just big boned.",
			"cost": 12,
			"id": "EX1_105",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Mountain Giant",
			"text": "Costs (1) less for each other card in your hand.",
			"health": 8
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Feugen is sad because everyone likes Stalagg better.",
			"cost": 5,
			"howToEarn": "Unlocked by completing the Construct Quarter.",
			"id": "FP1_015",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "LEGENDARY",
			"name": "Feugen",
			"howToEarnGolden": "Can be crafted after completing the Construct Quarter.",
			"text": "<b>Deathrattle:</b> If Stalagg also died this game, summon Thaddius.",
			"health": 7
		},
		{
			"artist": "Warren Mahy",
			"type": "SPELL",
			"playerClass": "SHAMAN",
			"flavor": "Snap! This card! Pop!",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"id": "GVG_038",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Crackle",
			"text": "Deal $3-$6 damage. <b>Overload:</b> (1)",
			"collectible": true
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "We will always remember you, \"Defender!\"",
			"cost": 1,
			"id": "EX1_130",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Noble Sacrifice",
			"text": "<b>Secret:</b> When an enemy attacks, summon a 2/1 Defender as the new target.",
			"collectible": true
		},
		{
			"artist": "Christopher Moeller",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 6,
			"flavor": "The Grand Tournament has a \"No dragons allowed\" policy, but it's rarely enforced.",
			"cost": 6,
			"id": "AT_008",
			"mechanics": [
				"AURA"
			],
			"set": "TGT",
			"rarity": "EPIC",
			"name": "Coldarra Drake",
			"text": "You can use your Hero Power any number of times.",
			"collectible": true,
			"health": 6,
			"race": "DRAGON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "\"I've just sucked one year of your life away.\"",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0
			},
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_061",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Drain Life",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "Deal $2 damage. Restore #2 Health to your hero.",
			"collectible": true
		},
		{
			"artist": "Mauro Cascioli",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.",
			"cost": 4,
			"id": "CS2_182",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Chillwind Yeti",
			"howToEarnGolden": "Unlocked at Warrior Level 55.",
			"health": 5
		},
		{
			"artist": "Sean McNally",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "Allowing totems to attack is not cheating.  I mean, there isn't anything in the rule books about it.",
			"cost": 5,
			"id": "AT_049",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Thunder Bluff Valiant",
			"text": "<b>Inspire:</b> Give your Totems +2 Attack.",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Nutthapon Petchthai",
			"type": "WEAPON",
			"playerClass": "ROGUE",
			"attack": 1,
			"flavor": "How much more poisoned can a blade get?  The answer is a lot.  A lot more poisoned.",
			"collectible": true,
			"id": "AT_034",
			"set": "TGT",
			"cost": 4,
			"rarity": "EPIC",
			"name": "Poisoned Blade",
			"durability": 3,
			"text": "Your Hero Power gives this weapon +1 Attack instead of replacing it."
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "If she threatens to \"moon\" you, it's not what you think.",
			"cost": 6,
			"id": "EX1_583",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Priestess of Elune",
			"text": "<b>Battlecry:</b> Restore 4 Health to your hero.",
			"health": 4
		},
		{
			"artist": "E.M. Gist",
			"type": "MINION",
			"collectible": true,
			"attack": 9,
			"flavor": "You don’t tame a Core Hound. You just train it to eat someone else before it eats you.",
			"cost": 7,
			"id": "CS2_201",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Core Hound",
			"howToEarnGolden": "Unlocked at Hunter Level 51.",
			"health": 5,
			"race": "BEAST"
		},
		{
			"artist": "Vance Kovacs",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "Is there anything worse than a Windspeaker with halitosis?",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_FRIENDLY_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 8.",
			"id": "EX1_587",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Windspeaker",
			"howToEarnGolden": "Unlocked at Level 45.",
			"text": "<b>Battlecry:</b> Give a friendly minion <b>Windfury</b>.",
			"collectible": true,
			"health": 3,
			"targetingArrowText": "Give <b>Windfury</b>."
		},
		{
			"artist": "Steve Prescott",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 3,
			"flavor": "What happens when you glue a buncha totems together.",
			"cost": 2,
			"id": "AT_052",
			"mechanics": [
				"OVERLOAD"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Totem Golem",
			"text": "<b>Overload: (1)</b>",
			"collectible": true,
			"health": 4,
			"race": "TOTEM"
		},
		{
			"artist": "Kev Walker",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "The Stormpike Commandos are demolition experts.  They also bake a mean cupcake.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0
			},
			"id": "CS2_150",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Stormpike Commando",
			"howToEarnGolden": "Unlocked at Paladin Level 51.",
			"text": "<b>Battlecry:</b> Deal 2 damage.",
			"faction": "ALLIANCE",
			"health": 2,
			"targetingArrowText": "Deal 2 damage."
		},
		{
			"artist": "Samwise Didier",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.",
			"cost": 5,
			"id": "PRO_001",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "PROMO",
			"entourage": [
				"PRO_001a",
				"PRO_001b",
				"PRO_001c"
			],
			"rarity": "LEGENDARY",
			"name": "Elite Tauren Chieftain",
			"howToEarnGolden": "Awarded at BlizzCon 2013.",
			"text": "<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)",
			"health": 5
		},
		{
			"artist": "Michael Phillippi",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "The pinnacle of goblin engineering. Includes an espresso machine and foot massager.",
			"cost": 6,
			"id": "GVG_105",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Piloted Sky Golem",
			"text": "<b>Deathrattle:</b> Summon a random 4-Cost minion.",
			"health": 4,
			"race": "MECHANICAL"
		},
		{
			"artist": "Arthur Gimaldinov",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 2,
			"flavor": "That's saberTEETH, not like curved pirate blades.  That's a different kind of druid.  Druid of the Curved Pirate Blades.",
			"cost": 2,
			"id": "AT_042",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Druid of the Saber",
			"text": "<b>Choose One -</b> Transform to gain <b>Charge</b>; or +1/+1 and <b>Stealth</b>.",
			"collectible": true,
			"health": 1
		},
		{
			"artist": "Michael Franchina",
			"type": "WEAPON",
			"playerClass": "WARRIOR",
			"attack": 3,
			"flavor": "\"King's Attacker\" is a shield.  Funny, huh?",
			"collectible": true,
			"id": "AT_065",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"cost": 3,
			"rarity": "RARE",
			"name": "King's Defender",
			"durability": 2,
			"text": "<b>Battlecry</b>: If you have a minion with <b>Taunt</b>,  gain +1 Durability."
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"I only plunder on days that end in 'y'.\"",
			"cost": 2,
			"id": "NEW1_018",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Bloodsail Raider",
			"text": "<b>Battlecry:</b> Gain Attack equal to the Attack of your weapon.",
			"health": 3,
			"race": "PIRATE"
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "The gnomes are valiant and ready to return to their irradiated, poorly ventilated homeland!",
			"cost": 3,
			"id": "GVG_098",
			"mechanics": [
				"CHARGE",
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Gnomeregan Infantry",
			"text": "<b>Charge</b>\n<b>Taunt</b>",
			"health": 4
		},
		{
			"artist": "Dave Allsop",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 8,
			"flavor": "I <i>dare</i> you to attack Darnassus.",
			"cost": 8,
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_232",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Ironbark Protector",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "<b>Taunt</b>",
			"collectible": true,
			"health": 8
		},
		{
			"artist": "Tom Baxa",
			"type": "SPELL",
			"text": "Give your hero +4 Attack this turn and 4 Armor.",
			"playerClass": "DRUID",
			"cost": 4,
			"name": "Bite",
			"rarity": "RARE",
			"set": "EXPERT1",
			"flavor": "Chew your food!",
			"collectible": true,
			"id": "EX1_570"
		},
		{
			"artist": "Tooth",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Burning man, brah.",
			"cost": 3,
			"id": "AT_002",
			"mechanics": [
				"SECRET"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Effigy",
			"text": "<b>Secret:</b> When a friendly minion dies, summon a random minion with the same Cost.",
			"collectible": true
		},
		{
			"artist": "Gabe from Penny Arcade",
			"type": "MINION",
			"collectible": true,
			"attack": 6,
			"flavor": "At least he has Angry Chicken.",
			"cost": 5,
			"id": "EX1_116",
			"mechanics": [
				"BATTLECRY",
				"CHARGE"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Leeroy Jenkins",
			"text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Ruan Jia",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 7,
			"flavor": "Neptulon is \"The Tidehunter\". He’s one of the four elemental lords. And he and Ragnaros get together and make really amazing saunas.",
			"cost": 7,
			"id": "GVG_042",
			"mechanics": [
				"BATTLECRY",
				"OVERLOAD"
			],
			"set": "GVG",
			"rarity": "LEGENDARY",
			"name": "Neptulon",
			"text": "<b>Battlecry:</b> Add 4 random Murlocs to your hand. <b>Overload:</b> (3)",
			"collectible": true,
			"health": 7
		},
		{
			"artist": "Warren Mahy",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "She is still working on installing the rocket launcher add-on for Mr. Bitey.",
			"cost": 4,
			"id": "EX1_025",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Dragonling Mechanic",
			"howToEarnGolden": "Unlocked at Mage Level 53.",
			"text": "<b>Battlecry:</b> Summon a 2/1 Mechanical Dragonling.",
			"faction": "ALLIANCE",
			"health": 4
		},
		{
			"artist": "Josh Tallman",
			"type": "SPELL",
			"playerClass": "MAGE",
			"flavor": "Hey man, that's cold.  Literally and metaphorically.",
			"cost": 3,
			"howToEarn": "Unlocked at Level 6.",
			"id": "CS2_026",
			"mechanics": [
				"FREEZE"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Frost Nova",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "<b>Freeze</b> all enemy minions.",
			"collectible": true
		},
		{
			"artist": "Luca Zontini",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "ADD ME TO YOUR DECK, MAGGOT!",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "CS2_188",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Abusive Sergeant",
			"text": "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
			"faction": "ALLIANCE",
			"health": 1,
			"targetingArrowText": "Grant +2 Attack."
		},
		{
			"artist": "Anton Zemskov",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "Check it out.  You can do barrel rolls on this thing.",
			"cost": 3,
			"id": "AT_083",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Dragonhawk Rider",
			"text": "<b>Inspire:</b> Gain <b>Windfury</b>\nthis turn.",
			"health": 3
		},
		{
			"artist": "Tyler Walpole",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "This card causes double the trouble AND double the fun.",
			"cost": 5,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_355",
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Blessed Champion",
			"text": "Double a minion's Attack.",
			"collectible": true
		},
		{
			"artist": "José Ladrönn",
			"type": "MINION",
			"playerClass": "SHAMAN",
			"attack": 5,
			"flavor": "He just closes his eyes and goes for it. Raarararrrarar!",
			"cost": 4,
			"id": "GVG_066",
			"mechanics": [
				"FORGETFUL",
				"OVERLOAD",
				"WINDFURY"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Dunemaul Shaman",
			"text": "<b>Windfury, Overload: (1)</b>\n50% chance to attack the wrong enemy.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Matt Gaser",
			"type": "SPELL",
			"playerClass": "HUNTER",
			"flavor": "\"Dang, that's cold.\" - appropriate response to Freezing Trap, or a mean joke.",
			"cost": 2,
			"id": "EX1_611",
			"mechanics": [
				"SECRET"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Freezing Trap",
			"text": "<b>Secret:</b> When an enemy minion attacks, return it to its owner's hand and it costs (2) more.",
			"collectible": true
		},
		{
			"artist": "Matt Dixon",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Clockwork gnomes are always asking what time it is.",
			"cost": 1,
			"id": "GVG_082",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "GVG",
			"entourage": [
				"PART_003",
				"PART_001",
				"PART_007",
				"PART_006",
				"PART_005",
				"PART_002",
				"PART_004"
			],
			"rarity": "COMMON",
			"name": "Clockwork Gnome",
			"text": "<b>Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.",
			"health": 1,
			"race": "MECHANICAL"
		},
		{
			"artist": "Raymond Swanland",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "\"What is a better weapon? The sharp one your enemies expect, or the blunt one they ignore?\" - The Art of Warrior, Chapter 9",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_410",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Shield Slam",
			"text": "Deal 1 damage to a minion for each Armor you have.",
			"collectible": true
		},
		{
			"artist": "James Zhang",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "When all else fails, nothing beats a swift whack upside the head.",
			"cost": 3,
			"id": "EX1_137",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Headcrack",
			"text": "Deal $2 damage to the enemy hero. <b>Combo:</b> Return this to your hand next turn.",
			"collectible": true
		},
		{
			"artist": "Zolton Boros",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 3,
			"flavor": "This guy is excellent at adjusting your haircut and/or height.",
			"cost": 2,
			"id": "GVG_023",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "GVG",
			"rarity": "COMMON",
			"name": "Goblin Auto-Barber",
			"text": "<b>Battlecry</b>: Give your weapon +1 Attack.",
			"collectible": true,
			"health": 2,
			"race": "MECHANICAL"
		},
		{
			"artist": "Lucas Graciano",
			"type": "SPELL",
			"playerClass": "PALADIN",
			"flavor": "Given the number of kings who have been assassinated, are you sure you want their blessing?",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_092",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Blessing of Kings",
			"howToEarnGolden": "Unlocked at Level 49.",
			"text": "Give a minion +4/+4. <i>(+4 Attack/+4 Health)</i>",
			"collectible": true
		},
		{
			"artist": "Jaemin Kim",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "The shrapnel is waaaaay worse than the explosion.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "GVG_045",
			"set": "GVG",
			"rarity": "RARE",
			"name": "Imp-losion",
			"text": "Deal $2-$4 damage to a minion. Summon a 1/1 Imp for each damage dealt.",
			"collectible": true
		},
		{
			"artist": "Ittoku",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "His dreams of flying and breathing fire like his idol will never be realized.",
			"cost": 4,
			"id": "CS2_119",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Oasis Snapjaw",
			"howToEarnGolden": "Unlocked at Druid Level 51.",
			"health": 7,
			"race": "BEAST"
		},
		{
			"artist": "E.M. Gist",
			"type": "SPELL",
			"text": "Draw a card.\nIf it's a Beast, it costs (4) less.",
			"playerClass": "HUNTER",
			"cost": 2,
			"name": "Call Pet",
			"rarity": "RARE",
			"set": "GVG",
			"flavor": "Real hunters tame hungry crabs.",
			"collectible": true,
			"id": "GVG_017"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 1,
			"flavor": "No relation to \"The Voidsteppers\", the popular Void-based dance troupe.",
			"cost": 1,
			"howToEarn": "Unlocked at Level 1.",
			"id": "CS2_065",
			"mechanics": [
				"TAUNT"
			],
			"set": "CORE",
			"rarity": "FREE",
			"name": "Voidwalker",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "<b>Taunt</b>",
			"collectible": true,
			"health": 3,
			"race": "DEMON"
		},
		{
			"artist": "Froilan Gardner",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Not a good basis for a system of government.",
			"cost": 4,
			"id": "AT_085",
			"mechanics": [
				"AURA"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Maiden of the Lake",
			"text": "Your Hero Power costs (1).",
			"health": 6
		},
		{
			"artist": "Sunny Gho",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "King Mukla wanders Jaguero Isle, searching for love.",
			"cost": 3,
			"id": "EX1_014",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "King Mukla",
			"text": "<b>Battlecry:</b> Give your opponent 2 Bananas.",
			"health": 5,
			"race": "BEAST"
		},
		{
			"artist": "Dany Orizio",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 2,
			"flavor": "He stole the deed to town years ago, so technically the town <i>is</i> his. He just calls people Scrub to be mean.",
			"cost": 2,
			"id": "EX1_131",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Defias Ringleader",
			"text": "<b>Combo:</b> Summon a 2/1 Defias Bandit.",
			"collectible": true,
			"health": 2
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 6,
			"flavor": "\"INFERNOOOOOOOOOO!\" - Jaraxxus, Eredar Lord of the Burning Legion",
			"cost": 6,
			"howToEarn": "Unlocked at Level 10.",
			"id": "CS2_064",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Dread Infernal",
			"howToEarnGolden": "Unlocked at Level 23.",
			"text": "<b>Battlecry:</b> Deal 1 damage to ALL other characters.",
			"collectible": true,
			"health": 6,
			"race": "DEMON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 3,
			"flavor": "Imps like being on fire.  They just do.",
			"cost": 1,
			"id": "EX1_319",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Flame Imp",
			"text": "<b>Battlecry:</b> Deal 3 damage to your hero.",
			"collectible": true,
			"health": 2,
			"race": "DEMON"
		},
		{
			"artist": "Bernie Kang",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 0,
			"flavor": "Imps are content to hide and viciously taunt everyone nearby.",
			"cost": 1,
			"id": "CS2_059",
			"mechanics": [
				"STEALTH"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Blood Imp",
			"text": "<b>Stealth</b>. At the end of your turn, give another random friendly minion +1 Health.",
			"collectible": true,
			"health": 1,
			"race": "DEMON"
		},
		{
			"artist": "Jim Nelson",
			"type": "WEAPON",
			"playerClass": "WARRIOR",
			"mechanics": [
				"DEATHRATTLE"
			],
			"attack": 4,
			"flavor": "\"Take a bite outta Death.\" - McScruff the Deathlord",
			"collectible": true,
			"howToEarn": "Unlocked by completing the Warrior Class Challenge in Naxxramas.",
			"id": "FP1_021",
			"howToEarnGolden": "Can be crafted after completing the Warrior Class Challenge in Naxxramas.",
			"set": "NAXX",
			"cost": 4,
			"rarity": "COMMON",
			"name": "Death's Bite",
			"durability": 2,
			"text": "<b>Deathrattle:</b> Deal 1 damage to all minions."
		},
		{
			"artist": "Ron Spears",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "She's quite jealous of the Gallon-Sized Summoner.",
			"cost": 2,
			"id": "EX1_076",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Pint-Sized Summoner",
			"textInPlay": "Ritual",
			"text": "The first minion you play each turn costs (1) less.",
			"faction": "ALLIANCE",
			"health": 2
		},
		{
			"artist": "Ken Steacy",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "When he saves enough plunder, he's going to commission an enormous captain's hat.  He has hat envy.",
			"cost": 3,
			"id": "NEW1_027",
			"mechanics": [
				"AURA"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Southsea Captain",
			"text": "Your other Pirates have +1/+1.",
			"health": 3,
			"race": "PIRATE"
		},
		{
			"artist": "Josh Harris",
			"type": "MINION",
			"playerClass": "WARLOCK",
			"attack": 9,
			"flavor": "The Dark Animus is evil and mysterious and huge and unable to write sentences that utilize proper grammar.",
			"cost": 6,
			"id": "GVG_077",
			"set": "GVG",
			"rarity": "EPIC",
			"name": "Anima Golem",
			"text": "At the end of each turn, destroy this minion if it's your only one.",
			"collectible": true,
			"health": 9,
			"race": "MECHANICAL"
		},
		{
			"artist": "Brandon Kitkouski",
			"type": "MINION",
			"playerClass": "HUNTER",
			"attack": 3,
			"flavor": "Not getting trampled is really the trick here.",
			"cost": 5,
			"id": "AT_010",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "TGT",
			"rarity": "RARE",
			"name": "Ram Wrangler",
			"text": "<b>Battlecry:</b> If you have a Beast, summon a\nrandom Beast.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Zoltan & Gabor",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "Sometimes it feels like this is all a game.",
			"cost": 4,
			"playRequirements": {
				"REQ_NUM_MINION_SLOTS": 1
			},
			"id": "EX1_345",
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Mindgames",
			"text": "Put a copy of a random minion from your opponent's deck into the battlefield.",
			"collectible": true
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "\"I'm cold blooded, check it and see!\"",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "CS2_073",
			"mechanics": [
				"COMBO"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Cold Blood",
			"text": "Give a minion +2 Attack. <b>Combo:</b> +4 Attack instead.",
			"collectible": true
		},
		{
			"artist": "Phil Saunders",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "The inventor of the goblin shredder is involved in several patent disputes with the inventor of the soot spewer.",
			"cost": 3,
			"id": "GVG_123",
			"mechanics": [
				"SPELLPOWER"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Soot Spewer",
			"text": "<b>Spell Damage +1</b>",
			"targetingArrowText": "Give <b>Spell Damage +2</b>.",
			"collectible": true,
			"health": 3,
			"race": "MECHANICAL"
		},
		{
			"artist": "Daarken",
			"type": "SPELL",
			"text": "Restore #4 Health to ALL minions.",
			"playerClass": "PRIEST",
			"cost": 0,
			"name": "Circle of Healing",
			"rarity": "COMMON",
			"set": "EXPERT1",
			"flavor": "It isn't really a circle.",
			"collectible": true,
			"id": "EX1_621"
		},
		{
			"artist": "Jim Nelson",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "Warlocks have the town exorcist on speed dial in case they unleash the wrong demon.",
			"cost": 3,
			"id": "GVG_097",
			"mechanics": [
				"BATTLECRY",
				"TAUNT"
			],
			"set": "GVG",
			"rarity": "RARE",
			"name": "Lil' Exorcist",
			"text": "<b>Taunt</b>\n<b>Battlecry:</b> Gain +1/+1 for each enemy <b>Deathrattle</b> minion.",
			"health": 3
		},
		{
			"artist": "Ralph Horsley",
			"type": "MINION",
			"playerClass": "DRUID",
			"attack": 6,
			"flavor": "He gets a discount on the tournament entry fee because he is his own horse.",
			"cost": 7,
			"id": "AT_041",
			"set": "TGT",
			"rarity": "RARE",
			"name": "Knight of the Wild",
			"text": "Whenever you summon a Beast, reduce the Cost of this card by (1).",
			"collectible": true,
			"health": 6
		},
		{
			"artist": "Dan Scott",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 3,
			"flavor": "Is he aspiring or inspiring?  Make up your mind!",
			"cost": 4,
			"id": "AT_006",
			"mechanics": [
				"INSPIRE"
			],
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Dalaran Aspirant",
			"text": "<b>Inspire:</b> Gain <b>Spell Damage +1</b>.",
			"collectible": true,
			"health": 5
		},
		{
			"artist": "Jeremy Cranford",
			"type": "MINION",
			"collectible": true,
			"attack": 1,
			"flavor": "Arachnofauxbia: Fear of fake spiders.",
			"cost": 2,
			"howToEarn": "Unlocked by defeating Anub'Rekhan in the Arachnid Quarter.",
			"id": "FP1_002",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "NAXX",
			"rarity": "COMMON",
			"name": "Haunted Creeper",
			"howToEarnGolden": "Can be crafted after defeating Anub'Rekhan in the Arachnid Quarter.",
			"text": "<b>Deathrattle:</b> Summon two 1/1 Spectral Spiders.",
			"health": 2,
			"race": "BEAST"
		},
		{
			"artist": "Chris Seaman",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Mere devilsaurs no longer excite him.  Soon he'll be trying to catch Onyxia with only a dull Krol Blade.",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_MIN_ATTACK": 7,
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_005",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "EPIC",
			"name": "Big Game Hunter",
			"text": "<b>Battlecry:</b> Destroy a minion with an Attack of 7 or more.",
			"health": 2,
			"targetingArrowText": "Destroy a minion with an Attack of 7 or more."
		},
		{
			"artist": "Tooth",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "\"Ready! Aim! Drink!\"",
			"cost": 3,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_NONSELF_TARGET": 0
			},
			"id": "CS2_141",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Ironforge Rifleman",
			"howToEarnGolden": "Unlocked at Mage Level 55.",
			"text": "<b>Battlecry:</b> Deal 1 damage.",
			"faction": "ALLIANCE",
			"health": 2,
			"targetingArrowText": "Deal 1 damage."
		},
		{
			"artist": "Phroilan Gardner",
			"type": "SPELL",
			"playerClass": "WARRIOR",
			"flavor": "Hey you two…could you stand next to each other for a second…",
			"cost": 2,
			"playRequirements": {
				"REQ_MINIMUM_ENEMY_MINIONS": 2
			},
			"howToEarn": "Unlocked at Level 2.",
			"id": "CS2_114",
			"set": "CORE",
			"rarity": "COMMON",
			"name": "Cleave",
			"howToEarnGolden": "Unlocked at Level 40.",
			"text": "Deal $2 damage to two random enemy minions.",
			"collectible": true
		},
		{
			"artist": "James Ryman",
			"type": "MINION",
			"collectible": true,
			"attack": 2,
			"flavor": "She carries a shield, but only so she can give it to someone she can stand behind.",
			"cost": 2,
			"id": "EX1_058",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "RARE",
			"name": "Sunfury Protector",
			"text": "<b>Battlecry:</b> Give adjacent minions <b>Taunt</b>.",
			"faction": "ALLIANCE",
			"health": 3
		},
		{
			"type": "HERO",
			"set": "CORE",
			"playerClass": "PALADIN",
			"health": 30,
			"rarity": "FREE",
			"name": "Uther Lightbringer",
			"collectible": true,
			"id": "HERO_04"
		},
		{
			"artist": "Samwise",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 3,
			"flavor": "50% off fist weapons, limited time only!",
			"cost": 4,
			"id": "EX1_398",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Arathi Weaponsmith",
			"text": "<b>Battlecry:</b> Equip a 2/2 weapon.",
			"collectible": true,
			"health": 3
		},
		{
			"artist": "Lucas Graciano",
			"type": "SPELL",
			"playerClass": "ROGUE",
			"flavor": "Everyone has a price. Gnomes, for example, can be persuaded by stuffed animals and small amounts of chocolate.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0,
				"REQ_ENEMY_TARGET": 0
			},
			"id": "EX1_126",
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Betrayal",
			"text": "Force an enemy minion to deal its damage to the minions next to it.",
			"collectible": true
		},
		{
			"artist": "Danny Beck",
			"type": "MINION",
			"playerClass": "ROGUE",
			"attack": 4,
			"flavor": "When pirates say there is no \"Eye\" in \"team,\" they are very literal about it.",
			"cost": 2,
			"id": "GVG_025",
			"set": "GVG",
			"rarity": "RARE",
			"name": "One-eyed Cheat",
			"text": "Whenever you summon a Pirate, gain <b>Stealth</b>.",
			"collectible": true,
			"health": 1,
			"race": "PIRATE"
		},
		{
			"artist": "Richard Wright",
			"type": "WEAPON",
			"playerClass": "WARRIOR",
			"attack": 4,
			"flavor": "Simple, misguided, and incredibly dangerous. You know, like most things ogre.",
			"collectible": true,
			"id": "GVG_054",
			"set": "GVG",
			"cost": 3,
			"rarity": "COMMON",
			"name": "Ogre Warmaul",
			"durability": 2,
			"text": "50% chance to attack the wrong enemy."
		},
		{
			"artist": "Mike Sass",
			"type": "SPELL",
			"playerClass": "PRIEST",
			"flavor": "The promise of glory is a powerful tool to get minions to do your bidding.  Only slightly less powerful than the promise of an ice cream bar!",
			"cost": 1,
			"playRequirements": {
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_013",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Power Word: Glory",
			"text": "Choose a minion. Whenever it attacks, restore 4 Health to\nyour hero.",
			"collectible": true
		},
		{
			"artist": "Ben Thompson",
			"type": "MINION",
			"collectible": true,
			"attack": 3,
			"flavor": "HATES being called \"the wonder twins\".",
			"cost": 3,
			"id": "AT_131",
			"set": "TGT",
			"rarity": "LEGENDARY",
			"name": "Eydis Darkbane",
			"text": "Whenever <b>you</b> target this minion with a spell, deal 3 damage to a random enemy.",
			"health": 4
		},
		{
			"artist": "Glenn Rane",
			"type": "MINION",
			"collectible": true,
			"attack": 5,
			"flavor": "Sylvanas was turned into the Banshee Queen by Arthas, but he probably should have just killed her because it just pissed her off.",
			"cost": 6,
			"id": "EX1_016",
			"mechanics": [
				"DEATHRATTLE"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Sylvanas Windrunner",
			"text": "<b>Deathrattle:</b> Take control of a random enemy minion.",
			"health": 5
		},
		{
			"artist": "Raymond Swanland",
			"type": "MINION",
			"collectible": true,
			"attack": 8,
			"flavor": "Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.",
			"cost": 9,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_HERO_TARGET": 0
			},
			"id": "EX1_561",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "LEGENDARY",
			"name": "Alexstrasza",
			"text": "<b>Battlecry:</b> Set a hero's remaining Health to 15.",
			"targetingArrowText": "Set Health to 15.",
			"health": 8,
			"race": "DRAGON"
		},
		{
			"artist": "Kevin Chen",
			"type": "SPELL",
			"playerClass": "WARLOCK",
			"flavor": "Very dangerous when attached to a demonbomb.",
			"cost": 2,
			"playRequirements": {
				"REQ_TARGET_WITH_RACE": 15,
				"REQ_TARGET_TO_PLAY": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "AT_024",
			"set": "TGT",
			"rarity": "COMMON",
			"name": "Demonfuse",
			"text": "Give a Demon +3/+3. Give your opponent a Mana Crystal.",
			"collectible": true,
			"race": "DEMON"
		},
		{
			"artist": "Alex Horley Orlandelli",
			"type": "MINION",
			"playerClass": "MAGE",
			"attack": 2,
			"flavor": "Flamewakers HATE being confused for Flamewalkers. They just wake up fire, they don’t walk on it. Walking on fire is CRAZY.",
			"cost": 3,
			"howToEarn": "Unlocked by defeating Vaelastrasz in Blackwing Lair.",
			"id": "BRM_002",
			"set": "BRM",
			"rarity": "RARE",
			"name": "Flamewaker",
			"howToEarnGolden": "Can be crafted after defeating Vaelastrasz in Blackwing Lair.",
			"text": "After you cast a spell, deal 2 damage randomly split among all enemies.",
			"collectible": true,
			"health": 4
		},
		{
			"artist": "Scott Hampton",
			"type": "MINION",
			"collectible": true,
			"attack": 4,
			"flavor": "Guardians of Dark Iron Ore.  Perhaps the most annoying ore, given where you have to forge it.",
			"cost": 4,
			"playRequirements": {
				"REQ_TARGET_IF_AVAILABLE": 0,
				"REQ_MINION_TARGET": 0
			},
			"id": "EX1_046",
			"mechanics": [
				"BATTLECRY"
			],
			"set": "EXPERT1",
			"rarity": "COMMON",
			"name": "Dark Iron Dwarf",
			"text": "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
			"faction": "ALLIANCE",
			"health": 4,
			"targetingArrowText": "Give +2 Attack."
		},
		{
			"artist": "Wei Wang",
			"type": "MINION",
			"playerClass": "WARRIOR",
			"attack": 2,
			"flavor": "The Warsong clan is <i>such drama</i>. It's really not worth it to become a commander.",
			"cost": 3,
			"howToEarn": "Unlocked at Level 1.",
			"id": "EX1_084",
			"set": "CORE",
			"rarity": "FREE",
			"name": "Warsong Commander",
			"howToEarnGolden": "Unlocked at Level 36.",
			"text": "Whenever you summon a minion with 3 or less Attack, give it <b>Charge</b>.",
			"collectible": true,
			"health": 3
		}
	];

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(cards) {
	  var CardSearcher;
	  return CardSearcher = (function() {
	    function CardSearcher() {
	      this.cards = cards;
	    }

	    CardSearcher.prototype.search = function(text) {
	      text = text.toLowerCase();
	      return this.cards.filter(function(card) {
	        return card.name.toLowerCase().includes(text) || (card.race && card.race.toLowerCase().includes(text)) || (card.text && card.text.toLowerCase().includes(text));
	      });
	    };

	    return CardSearcher;

	  })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  var CardNode;
	  return CardNode = (function() {
	    function CardNode(rawCardInfo) {
	      this.id = rawCardInfo.id;
	    }

	    CardNode.prototype.build = function() {
	      var el;
	      el = document.createElement("img");
	      el.setAttribute("src", "http://wow.zamimg.com/images/hearthstone/cards/enus/original/" + this.id + ".png?4973");
	      return el;
	    };

	    return CardNode;

	  })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);