import {IItem} from "../models/api/IItem";

export const testItems: IItem[] = [
  {
    "id": "abomasite",
    "name": {"english": "Abomasite", "german": "Rexblisarnit"},
    "description": {"english": "If held by an Abomasnow, this item allows it to Mega Evolve in battle.", "german": ""},
    "imgSrc": "abomasite.png",
    "flingBasePower": 0
  }, {
    "id": "absolite",
    "name": {"english": "Absolite", "german": ""},
    "description": {"english": "If held by an Absol, this item allows it to Mega Evolve in battle.", "german": ""},
    "imgSrc": "absolite.png",
    "flingBasePower": 0
  }, {
    "id": "absorbbulb",
    "name": {"english": "Absorb Bulb", "german": "Knolle"},
    "description": {
      "english": "Raises holder's Sp. Atk by 1 stage if hit by a Water-type attack. Single use.",
      "german": ""
    },
    "imgSrc": "absorb-bulb.png",
    "flingBasePower": 30
  }, {
    "id": "adamantorb",
    "name": {"english": "Adamant Orb", "german": "Adamant Orb"},
    "description": {"english": "If held by a Dialga, its Steel- and Dragon-type attacks have 1.2x power.", "german": ""},
    "imgSrc": "adamant-orb.png",
    "flingBasePower": 60
  }, {
    "id": "adrenalineorb",
    "name": {"english": "Adrenaline Orb", "german": "Adrenalin Orb"},
    "description": {
      "english": "Raises holder's Speed by 1 stage if it gets affected by Intimidate. Single use.",
      "german": ""
    },
    "imgSrc": "adrenaline-orb.png",
    "flingBasePower": 30
  }, {
    "id": "aerodactylite",
    "name": {"english": "Aerodactylite", "german": ""},
    "description": {"english": "If held by an Aerodactyl, this item allows it to Mega Evolve in battle.", "german": ""},
    "imgSrc": "aerodactylite.png",
    "flingBasePower": 0
  }, {
    "id": "aggronite",
    "name": {"english": "Aggronite", "german": ""},
    "description": {"english": "If held by an Aggron, this item allows it to Mega Evolve in battle.", "german": ""},
    "imgSrc": "aggronite.png",
    "flingBasePower": 0
  }, {
    "id": "aguavberry",
    "name": {"english": "Aguav Berry", "german": "Gauvebeere"},
    "description": {
      "english": "Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.",
      "german": ""
    },
    "imgSrc": "aguav-berry.png",
    "flingBasePower": 0,
    "berry": {"naturalGift": {"basePower": 80, "type": "Dragon"}},
    "popular": true
  }, {
    "id": "airballoon",
    "name": {"english": "Air Balloon", "german": "Luftballon"},
    "description": {"english": "Holder is immune to Ground-type attacks. Pops when holder is hit.", "german": ""},
    "imgSrc": "air-balloon.png",
    "flingBasePower": 10,
    "popular": true
  },
];
