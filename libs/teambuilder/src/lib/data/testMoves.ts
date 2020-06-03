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
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
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
    "shortDescription": {
      "english": "Usually goes first.",
      "german": "Dieser Angriff hat eine erhöhte Priorität."
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
    "shortDescription": {
      "english": "10% chance to lower the foe(s) Sp. Def by 1."
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
    "shortDescription": {
      "english": "Raises the user´s Defense by 2."
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
    "shortDescription": {
      "english": "100% chance to lower the target´s Sp. Def by 2."
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
      "english": ""
    },
    "shortDescription": {
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
    "shortDescription": {
      "english": "Raises a random stat of the user or an ally by 2."
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
      "english": ""
    },
    "shortDescription": {
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
    "shortDescription": {
      "english": "High critical hit ratio."
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
    "shortDescription": {
      "english": "The target makes its move right after the user."
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
    "shortDescription": {
      "english": "Raises the user´s Speed by 2."
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
    "shortDescription": {
      "english": "High critical hit ratio. Hits adjacent foes."
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
    "shortDescription": {
      "english": "30% chance to flinch the target."
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
    "shortDescription": {
      "english": "The user swaps positions with its ally."
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
    "shortDescription": {
      "english": "Raises the user´s Sp. Def by 2."
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
  },
  {
    "name": {
      "english": "Anchor Shot"
    },
    "description": {
      "english": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field."
    },
    "shortDescription": {
      "english": "Prevents the target from switching out."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Ancient Power"
    },
    "description": {
      "english": "Has a 10% chance to raise the user´s Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to raise all stats by 1 (not acc/eva)."
    },
    "category": "Special",
    "type": "Rock",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  {
    "name": {
      "english": "Aqua Jet"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Physical",
    "type": "Water",
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
      "english": "Aqua Ring"
    },
    "description": {
      "english": "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. If the user uses Baton Pass, the replacement will receive the healing effect."
    },
    "shortDescription": {
      "english": "User recovers 1/16 max HP per turn."
    },
    "category": "Status",
    "type": "Water",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true
    }
  },
  {
    "name": {
      "english": "Aqua Tail"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 90,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  {
    "name": {
      "english": "Arm Thrust"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 15,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
]
