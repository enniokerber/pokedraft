import {IPokemon} from "../models/api";

export const pokedex: IPokemon[] = [
  {
    "nr": 1,
    "id": "bulbasaur",
    "name": {
      "english": "Bulbasaur",
      "german": "Bisasam",
      "french": "Bulbizarre"
    },
    "imgSrc": "001.png",
    "types": [
      "Grass",
      "Poison"
    ],
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "atk": 49,
      "def": 49,
      "spatk": 65,
      "spdef": 65,
      "speed": 45
    },
    "weight": 6.9,
    "tier": "LC"
  },
  {
    "nr": 2,
    "id": "ivysaur",
    "name": {
      "english": "Ivysaur",
      "german": "Bisaknosp",
      "french": "Herbizarre"
    },
    "imgSrc": "002.png",
    "types": [
      "Grass",
      "Poison"
    ],
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 60,
      "atk": 62,
      "def": 63,
      "spatk": 80,
      "spdef": 80,
      "speed": 60
    },
    "weight": 13,
    "tier": "NFE"
  },
  {
    "nr": 3,
    "id": "venusaur",
    "name": {
      "english": "Venusaur",
      "german": "Bisaflor",
      "french": "Florizarre"
    },
    "imgSrc": "003.png",
    "types": [
      "Grass",
      "Poison"
    ],
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 80,
      "atk": 82,
      "def": 83,
      "spatk": 100,
      "spdef": 100,
      "speed": 80
    },
    "weight": 100,
    "tier": "UUBL"
  },
  {
    "nr": 3,
    "id": "venusaurmega",
    "name": {
      "english": "Venusaur-Mega",
      "german": "Bisaflor",
      "french": "Florizarre"
    },
    "imgSrc": "003.png",
    "types": [
      "Grass",
      "Poison"
    ],
    "abilities": [
      "Thick Fat"
    ],
    "stats": {
      "hp": 80,
      "atk": 100,
      "def": 123,
      "spatk": 122,
      "spdef": 120,
      "speed": 80
    },
    "weight": 155.5,
    "tier": "Illegal",
    "form": "Mega",
    "requiredItem": "Venusaurite",
    "originalSpecies": "Venusaur"
  },
  {
    "nr": 4,
    "id": "charmander",
    "name": {
      "english": "Charmander",
      "german": "Glumanda",
      "french": "Salamèche"
    },
    "imgSrc": "004.png",
    "types": [
      "Fire"
    ],
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spatk": 60,
      "spdef": 50,
      "speed": 65
    },
    "weight": 8.5,
    "tier": "LC"
  },
  {
    "nr": 5,
    "id": "charmeleon",
    "name": {
      "english": "Charmeleon",
      "german": "Glutexo",
      "french": "Reptincel"
    },
    "imgSrc": "005.png",
    "types": [
      "Fire"
    ],
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spatk": 80,
      "spdef": 65,
      "speed": 80
    },
    "weight": 19,
    "tier": "NFE"
  },
  {
    "nr": 6,
    "id": "charizard",
    "name": {
      "english": "Charizard",
      "german": "Glurak",
      "french": "Dracaufeu"
    },
    "imgSrc": "006.png",
    "types": [
      "Fire",
      "Flying"
    ],
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spatk": 109,
      "spdef": 85,
      "speed": 100
    },
    "weight": 90.5,
    "tier": "RU"
  },
  {
    "nr": 6,
    "id": "charizardmegax",
    "name": {
      "english": "Charizard-Mega-X",
      "german": "Glurak X",
      "french": "Dracaufeu"
    },
    "imgSrc": "006.png",
    "types": [
      "Fire",
      "Dragon"
    ],
    "abilities": [
      "Tough Claws"
    ],
    "stats": {
      "hp": 78,
      "atk": 130,
      "def": 111,
      "spatk": 130,
      "spdef": 85,
      "speed": 100
    },
    "weight": 110.5,
    "tier": "Illegal",
    "form": "Mega-X",
    "requiredItem": "Charizardite X",
    "originalSpecies": "Charizard"
  },
  {
    "nr": 6,
    "id": "charizardmegay",
    "name": {
      "english": "Charizard-Mega-Y",
      "german": "Glurak Y",
      "french": "Dracaufeu"
    },
    "imgSrc": "006.png",
    "types": [
      "Fire",
      "Flying"
    ],
    "abilities": [
      "Drought"
    ],
    "stats": {
      "hp": 78,
      "atk": 104,
      "def": 78,
      "spatk": 159,
      "spdef": 115,
      "speed": 100
    },
    "weight": 100.5,
    "tier": "Illegal",
    "form": "Mega-Y",
    "requiredItem": "Charizardite Y",
    "originalSpecies": "Charizard"
  },
  {
    "nr": 6,
    "id": "charizardgmax",
    "name": {
      "english": "Charizard-Gmax",
      "german": "Glurak",
      "french": "Dracaufeu"
    },
    "imgSrc": "006.png",
    "types": [
      "Fire",
      "Flying"
    ],
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spatk": 109,
      "spdef": 85,
      "speed": 100
    },
    "weight": 0,
    "tier": "(Uber)",
    "form": "Gmax",
    "originalSpecies": "Charizard"
  },
  {
    "nr": 7,
    "id": "squirtle",
    "name": {
      "english": "Squirtle",
      "german": "Schiggy",
      "french": "Carapuce"
    },
    "imgSrc": "007.png",
    "types": [
      "Water"
    ],
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 44,
      "atk": 48,
      "def": 65,
      "spatk": 50,
      "spdef": 64,
      "speed": 43
    },
    "weight": 9,
    "tier": "LC"
  },
  {
    "nr": 8,
    "id": "wartortle",
    "name": {
      "english": "Wartortle",
      "german": "Schillok",
      "french": "Carabaffe"
    },
    "imgSrc": "008.png",
    "types": [
      "Water"
    ],
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 59,
      "atk": 63,
      "def": 80,
      "spatk": 65,
      "spdef": 80,
      "speed": 58
    },
    "weight": 22.5,
    "tier": "NFE"
  },
  {
    "nr": 9,
    "id": "blastoise",
    "name": {
      "english": "Blastoise",
      "german": "Turtok",
      "french": "Tortank"
    },
    "imgSrc": "009.png",
    "types": [
      "Water"
    ],
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 79,
      "atk": 83,
      "def": 100,
      "spatk": 85,
      "spdef": 105,
      "speed": 78
    },
    "weight": 85.5,
    "tier": "UU"
  },
  {
    "nr": 9,
    "id": "blastoisemega",
    "name": {
      "english": "Blastoise-Mega",
      "german": "Turtok",
      "french": "Tortank"
    },
    "imgSrc": "009.png",
    "types": [
      "Water"
    ],
    "abilities": [
      "Mega Launcher"
    ],
    "stats": {
      "hp": 79,
      "atk": 103,
      "def": 120,
      "spatk": 135,
      "spdef": 115,
      "speed": 78
    },
    "weight": 101.1,
    "tier": "Illegal",
    "form": "Mega",
    "requiredItem": "Blastoisinite",
    "originalSpecies": "Blastoise"
  },
  {
    "nr": 10,
    "id": "caterpie",
    "name": {
      "english": "Caterpie",
      "german": "Raupy",
      "french": "Chenipan"
    },
    "imgSrc": "010.png",
    "types": [
      "Bug"
    ],
    "abilities": [
      "Shield Dust",
      "Run Away"
    ],
    "stats": {
      "hp": 45,
      "atk": 30,
      "def": 35,
      "spatk": 20,
      "spdef": 20,
      "speed": 45
    },
    "weight": 2.9,
    "tier": "LC"
  },
  {
    "nr": 11,
    "id": "metapod",
    "name": {
      "english": "Metapod",
      "german": "Safcon",
      "french": "Chrysacier"
    },
    "imgSrc": "011.png",
    "types": [
      "Bug"
    ],
    "abilities": [
      "Shed Skin"
    ],
    "stats": {
      "hp": 50,
      "atk": 20,
      "def": 55,
      "spatk": 25,
      "spdef": 25,
      "speed": 30
    },
    "weight": 9.9,
    "tier": "NFE"
  },
  {
    "nr": 12,
    "id": "butterfree",
    "name": {
      "english": "Butterfree",
      "german": "Smettbo",
      "french": "Papilusion"
    },
    "imgSrc": "012.png",
    "types": [
      "Bug",
      "Flying"
    ],
    "abilities": [
      "Compound Eyes",
      "Tinted Lens"
    ],
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spatk": 90,
      "spdef": 80,
      "speed": 70
    },
    "weight": 32,
    "tier": "NU"
  },
  {
    "nr": 12,
    "id": "butterfreegmax",
    "name": {
      "english": "Butterfree-Gmax",
      "german": "Smettbo",
      "french": "Papilusion"
    },
    "imgSrc": "012.png",
    "types": [
      "Bug",
      "Flying"
    ],
    "abilities": [
      "Compound Eyes",
      "Tinted Lens"
    ],
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spatk": 90,
      "spdef": 80,
      "speed": 70
    },
    "weight": 0,
    "tier": "(Uber)",
    "form": "Gmax",
    "originalSpecies": "Butterfree"
  },
  {
    "nr": 13,
    "id": "weedle",
    "name": {
      "english": "Weedle",
      "german": "Hornliu",
      "french": "Aspicot"
    },
    "imgSrc": "013.png",
    "types": [
      "Bug",
      "Poison"
    ],
    "abilities": [
      "Shield Dust",
      "Run Away"
    ],
    "stats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spatk": 20,
      "spdef": 20,
      "speed": 50
    },
    "weight": 3.2,
    "tier": "Illegal"
  },
  {
    "nr": 14,
    "id": "kakuna",
    "name": {
      "english": "Kakuna",
      "german": "Kokuna",
      "french": "Coconfort"
    },
    "imgSrc": "014.png",
    "types": [
      "Bug",
      "Poison"
    ],
    "abilities": [
      "Shed Skin"
    ],
    "stats": {
      "hp": 45,
      "atk": 25,
      "def": 50,
      "spatk": 25,
      "spdef": 25,
      "speed": 35
    },
    "weight": 10,
    "tier": "Illegal"
  },
  {
    "nr": 15,
    "id": "beedrill",
    "name": {
      "english": "Beedrill",
      "german": "Bibor",
      "french": "Dardargnan"
    },
    "imgSrc": "015.png",
    "types": [
      "Bug",
      "Poison"
    ],
    "abilities": [
      "Swarm",
      "Sniper"
    ],
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 40,
      "spatk": 45,
      "spdef": 80,
      "speed": 75
    },
    "weight": 29.5,
    "tier": "Illegal"
  },
  {
    "nr": 16,
    "id": "pidgey",
    "name": {
      "english": "Pidgey",
      "german": "Taubsi",
      "french": "Roucool"
    },
    "imgSrc": "016.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ],
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spatk": 35,
      "spdef": 35,
      "speed": 56
    },
    "weight": 1.8,
    "tier": "Illegal"
  },
  {
    "nr": 17,
    "id": "pidgeotto",
    "name": {
      "english": "Pidgeotto",
      "german": "Tauboga",
      "french": "Roucoups"
    },
    "imgSrc": "017.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ],
    "stats": {
      "hp": 63,
      "atk": 60,
      "def": 55,
      "spatk": 50,
      "spdef": 50,
      "speed": 71
    },
    "weight": 30,
    "tier": "Illegal"
  },
  {
    "nr": 18,
    "id": "pidgeot",
    "name": {
      "english": "Pidgeot",
      "german": "Tauboss",
      "french": "Roucarnage"
    },
    "imgSrc": "018.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ],
    "stats": {
      "hp": 83,
      "atk": 80,
      "def": 75,
      "spatk": 70,
      "spdef": 70,
      "speed": 101
    },
    "weight": 39.5,
    "tier": "Illegal"
  },
]
