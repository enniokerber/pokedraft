import {IMove} from "../models/api";

export const testMoves: IMove[] = [
  {
    "name": {
      "english": "Absorb",
      "german": "Absorber"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 20,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true
    }
  },
  {
    "name": {
      "english": "Accelerock",
      "german": "Turbofelsen"
    },
    "description": {
      "english": "Usually goes first.",
      "german": "Wird normalerweise zuerst ausgeführt."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Acid"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  {
    "name": {
      "english": "Acid Armor"
    },
    "description": {
      "english": "Raises the user´s Defense by 2 stages."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  {
    "name": {
      "english": "Acid Spray"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Special Defense by 2 stages."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Acrobatics"
    },
    "description": {
      "english": "Power doubles if the user has no held item."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 55,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Acupressure"
    },
    "description": {
      "english": "Raises a random stat by 2 stages as long as the stat is not already at stage 6. The user can choose to use this move on itself or an adjacent ally. Fails if no stat stage can be raised or if used on an ally with a substitute."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "adjacentAllyOrSelf",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {}
  },
  {
    "name": {
      "english": "Aerial Ace"
    },
    "description": {
      "english": "This move does not check accuracy."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Aeroblast"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 100,
    "accuracy": 95,
    "priority": 0,
    "target": "any",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "After You"
    },
    "description": {
      "english": "The target makes its move immediately after the user this turn, no matter the priority of its selectedTeamPokemon move. Fails if the target would have moved next anyway, or if the target already moved this turn."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {}
  },
  {
    "name": {
      "english": "Agility"
    },
    "description": {
      "english": "Raises the user´s Speed by 2 stages."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Air Cutter"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 60,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true
    }
  },
  {
    "name": {
      "english": "Air Slash"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 75,
    "accuracy": 95,
    "priority": 0,
    "target": "any",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Ally Switch"
    },
    "description": {
      "english": "The user swaps positions with its ally. Fails if the user is the only Pokemon on its side."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 2,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {}
  },
  {
    "name": {
      "english": "Amnesia"
    },
    "description": {
      "english": "Raises the user´s Special Defense by 2 stages."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  }
]
