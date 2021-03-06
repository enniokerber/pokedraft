
const moves = {
  "1": {
    "name": {
      "english": "Pound"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "2": {
    "name": {
      "english": "Karate Chop"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "3": {
    "name": {
      "english": "Double Slap"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 15,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "4": {
    "name": {
      "english": "Comet Punch"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 18,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "5": {
    "name": {
      "english": "Mega Punch"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "6": {
    "name": {
      "english": "Pay Day"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Scatters coins."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "7": {
    "name": {
      "english": "Fire Punch"
    },
    "description": {
      "english": "Has a 10% chance to burn the target."
    },
    "shortDescription": {
      "english": "10% chance to burn the target."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "8": {
    "name": {
      "english": "Ice Punch"
    },
    "description": {
      "english": "Has a 10% chance to freeze the target."
    },
    "shortDescription": {
      "english": "10% chance to freeze the target."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "9": {
    "name": {
      "english": "Thunder Punch"
    },
    "description": {
      "english": "Has a 10% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "10% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "10": {
    "name": {
      "english": "Scratch"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "12": {
    "name": {
      "english": "Guillotine"
    },
    "description": {
      "english": "Deals damage to the target equal to the target´s maximum HP. Ignores accuracy and evasiveness modifiers. This attack´s accuracy is equal to (user´s level - target´s level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune."
    },
    "shortDescription": {
      "english": "OHKOs the target. Fails if user is a lower level."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 30,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "13": {
    "name": {
      "english": "Razor Wind"
    },
    "description": {
      "english": "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges, then hits foe(s) turn 2. High crit ratio."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "canBeProtected": true
    }
  },
  "14": {
    "name": {
      "english": "Swords Dance"
    },
    "description": {
      "english": "Raises the user´s Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "15": {
    "name": {
      "english": "Cut"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 50,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "16": {
    "name": {
      "english": "Gust"
    },
    "description": {
      "english": "Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop."
    },
    "shortDescription": {
      "english": "Power doubles during Bounce, Fly, and Sky Drop."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "canBeProtected": true
    }
  },
  "17": {
    "name": {
      "english": "Wing Attack"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "18": {
    "name": {
      "english": "Whirlwind"
    },
    "description": {
      "english": "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability."
    },
    "shortDescription": {
      "english": "Forces the target to switch to a random ally."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": -6,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true
    },
    "viable": true
  },
  "19": {
    "name": {
      "english": "Fly"
    },
    "description": {
      "english": "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Flies up on first turn, then strikes the next turn."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 90,
    "accuracy": 95,
    "priority": 0,
    "target": "any",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "mustBeCharged": true,
      "isAffectedByGravity": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "20": {
    "name": {
      "english": "Bind"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 15,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "21": {
    "name": {
      "english": "Slam"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "22": {
    "name": {
      "english": "Vine Whip"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 45,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "23": {
    "name": {
      "english": "Stomp"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "24": {
    "name": {
      "english": "Double Kick"
    },
    "description": {
      "english": "Hits twice. If the first hit breaks the target´s substitute, it will take damage for the second hit."
    },
    "shortDescription": {
      "english": "Hits 2 times in one turn."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 30,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "25": {
    "name": {
      "english": "Mega Kick"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 120,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "26": {
    "name": {
      "english": "Jump Kick"
    },
    "description": {
      "english": "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage."
    },
    "shortDescription": {
      "english": "User is hurt by 50% of its max HP if it misses."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 100,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isAffectedByGravity": true,
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "27": {
    "name": {
      "english": "Rolling Kick"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 60,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "28": {
    "name": {
      "english": "Sand Attack"
    },
    "description": {
      "english": "Lowers the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s accuracy by 1."
    },
    "category": "Status",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "29": {
    "name": {
      "english": "Headbutt"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "30": {
    "name": {
      "english": "Horn Attack"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "31": {
    "name": {
      "english": "Fury Attack"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 15,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "32": {
    "name": {
      "english": "Horn Drill"
    },
    "description": {
      "english": "Deals damage to the target equal to the target´s maximum HP. Ignores accuracy and evasiveness modifiers. This attack´s accuracy is equal to (user´s level - target´s level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune."
    },
    "shortDescription": {
      "english": "OHKOs the target. Fails if user is a lower level."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 30,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "33": {
    "name": {
      "english": "Tackle"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "34": {
    "name": {
      "english": "Body Slam"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "30% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 85,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "35": {
    "name": {
      "english": "Wrap"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 15,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "36": {
    "name": {
      "english": "Take Down"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 1/4 recoil."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 90,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "37": {
    "name": {
      "english": "Thrash"
    },
    "description": {
      "english": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user."
    },
    "shortDescription": {
      "english": "Lasts 2-3 turns. Confuses the user afterwards."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "randomNormal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "38": {
    "name": {
      "english": "Double-Edge"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 33% recoil."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "39": {
    "name": {
      "english": "Tail Whip"
    },
    "description": {
      "english": "Lowers the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the foe(s) Defense by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "40": {
    "name": {
      "english": "Poison Sting"
    },
    "description": {
      "english": "Has a 30% chance to poison the target."
    },
    "shortDescription": {
      "english": "30% chance to poison the target."
    },
    "category": "Physical",
    "type": "Poison",
    "basePower": 15,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "41": {
    "name": {
      "english": "Twineedle"
    },
    "description": {
      "english": "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target´s substitute, it will take damage for the second hit."
    },
    "shortDescription": {
      "english": "Hits 2 times. Each hit has 20% chance to poison."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 25,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "42": {
    "name": {
      "english": "Pin Missile"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 25,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "43": {
    "name": {
      "english": "Leer"
    },
    "description": {
      "english": "Lowers the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the foe(s) Defense by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "44": {
    "name": {
      "english": "Bite"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "45": {
    "name": {
      "english": "Growl"
    },
    "description": {
      "english": "Lowers the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the foe(s) Attack by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "46": {
    "name": {
      "english": "Roar"
    },
    "description": {
      "english": "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability."
    },
    "shortDescription": {
      "english": "Forces the target to switch to a random ally."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": -6,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true
    },
    "viable": true
  },
  "47": {
    "name": {
      "english": "Sing"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to fall asleep."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 55,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "48": {
    "name": {
      "english": "Supersonic"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to become confused."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 55,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "49": {
    "name": {
      "english": "Sonic Boom"
    },
    "description": {
      "english": "Deals 20 HP of damage to the target."
    },
    "shortDescription": {
      "english": "Always does 20 HP of damage."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "50": {
    "name": {
      "english": "Disable"
    },
    "description": {
      "english": "For 4 turns, the target´s last move used becomes disabled. Fails if one of the target´s moves is already disabled, if the target has not made a move, or if the target no longer knows the move."
    },
    "shortDescription": {
      "english": "For 4 turns, disables the target´s last move used."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "51": {
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
  "52": {
    "name": {
      "english": "Ember"
    },
    "description": {
      "english": "Has a 10% chance to burn the target."
    },
    "shortDescription": {
      "english": "10% chance to burn the target."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "53": {
    "name": {
      "english": "Flamethrower"
    },
    "description": {
      "english": "Has a 10% chance to burn the target."
    },
    "shortDescription": {
      "english": "10% chance to burn the target."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "54": {
    "name": {
      "english": "Mist"
    },
    "description": {
      "english": "For 5 turns, the user and its party members are protected from having their stat stages lowered by other Pokemon. Fails if the effect is already active on the user´s side."
    },
    "shortDescription": {
      "english": "For 5 turns, protects user´s party from stat drops."
    },
    "category": "Status",
    "type": "Ice",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true
    }
  },
  "55": {
    "name": {
      "english": "Water Gun"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true
    }
  },
  "56": {
    "name": {
      "english": "Hydro Pump"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 110,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "57": {
    "name": {
      "english": "Surf"
    },
    "description": {
      "english": "Damage doubles if the target is using Dive."
    },
    "shortDescription": {
      "english": "Hits adjacent Pokemon. Double damage on Dive."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "58": {
    "name": {
      "english": "Ice Beam"
    },
    "description": {
      "english": "Has a 10% chance to freeze the target."
    },
    "shortDescription": {
      "english": "10% chance to freeze the target."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "59": {
    "name": {
      "english": "Blizzard"
    },
    "description": {
      "english": "Has a 10% chance to freeze the target. If the weather is Hail, this move does not check accuracy."
    },
    "shortDescription": {
      "english": "10% chance to freeze foe(s). Can´t miss in hail."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 110,
    "accuracy": 70,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "60": {
    "name": {
      "english": "Psybeam"
    },
    "description": {
      "english": "Has a 10% chance to confuse the target."
    },
    "shortDescription": {
      "english": "10% chance to confuse the target."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "61": {
    "name": {
      "english": "Bubble Beam"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Speed by 1."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "62": {
    "name": {
      "english": "Aurora Beam"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Attack by 1."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "63": {
    "name": {
      "english": "Hyper Beam"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "64": {
    "name": {
      "english": "Peck"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 35,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "65": {
    "name": {
      "english": "Drill Peck"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 80,
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
  "66": {
    "name": {
      "english": "Submission"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 1/4 recoil."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 80,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "67": {
    "name": {
      "english": "Low Kick"
    },
    "description": {
      "english": "This move´s power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg."
    },
    "shortDescription": {
      "english": "More power the heavier the target."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "68": {
    "name": {
      "english": "Counter"
    },
    "description": {
      "english": "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon´s position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon´s physical attack this turn."
    },
    "shortDescription": {
      "english": "If hit by physical attack, returns double damage."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": -5,
    "target": "scripted",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "69": {
    "name": {
      "english": "Seismic Toss"
    },
    "description": {
      "english": "Deals damage to the target equal to the user´s level."
    },
    "shortDescription": {
      "english": "Does damage equal to the user´s level."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "70": {
    "name": {
      "english": "Strength"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "71": {
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
  "72": {
    "name": {
      "english": "Mega Drain"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "73": {
    "name": {
      "english": "Leech Seed"
    },
    "description": {
      "english": "The Pokemon at the user´s position steals 1/8 of the target´s maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect."
    },
    "shortDescription": {
      "english": "1/8 of target´s HP is restored to user every turn."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "74": {
    "name": {
      "english": "Growth"
    },
    "description": {
      "english": "Raises the user´s Attack and Special Attack by 1 stage. If the weather is Sunny Day, raises the user´s Attack and Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Raises user´s Attack and Sp. Atk by 1; 2 in Sun."
    },
    "category": "Status",
    "type": "Normal",
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
  "75": {
    "name": {
      "english": "Razor Leaf"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio. Hits adjacent foes."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 55,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true
    }
  },
  "76": {
    "name": {
      "english": "Solar Beam"
    },
    "description": {
      "english": "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges turn 1. Hits turn 2. No charge in sunlight."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "canBeProtected": true
    }
  },
  "77": {
    "name": {
      "english": "Poison Powder"
    },
    "description": {
      "english": "Poisons the target."
    },
    "shortDescription": {
      "english": "Poisons the target."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "78": {
    "name": {
      "english": "Stun Spore"
    },
    "description": {
      "english": "Paralyzes the target."
    },
    "shortDescription": {
      "english": "Paralyzes the target."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "79": {
    "name": {
      "english": "Sleep Powder"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to fall asleep."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "80": {
    "name": {
      "english": "Petal Dance"
    },
    "description": {
      "english": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user."
    },
    "shortDescription": {
      "english": "Lasts 2-3 turns. Confuses the user afterwards."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "randomNormal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "81": {
    "name": {
      "english": "String Shot"
    },
    "description": {
      "english": "Lowers the target´s Speed by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the foe(s) Speed by 2."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "82": {
    "name": {
      "english": "Dragon Rage"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Deals 40 HP of damage to the target."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "83": {
    "name": {
      "english": "Fire Spin"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 35,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "84": {
    "name": {
      "english": "Thunder Shock"
    },
    "description": {
      "english": "Has a 10% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "10% chance to paralyze the target."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "85": {
    "name": {
      "english": "Thunderbolt"
    },
    "description": {
      "english": "Has a 10% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "10% chance to paralyze the target."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "86": {
    "name": {
      "english": "Thunder Wave"
    },
    "description": {
      "english": "Paralyzes the target. This move does not ignore type immunity."
    },
    "shortDescription": {
      "english": "Paralyzes the target."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "87": {
    "name": {
      "english": "Thunder"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move´s accuracy is 50%."
    },
    "shortDescription": {
      "english": "30% chance to paralyze. Can´t miss in rain."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 110,
    "accuracy": 70,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "88": {
    "name": {
      "english": "Rock Throw"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 50,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "89": {
    "name": {
      "english": "Earthquake"
    },
    "description": {
      "english": "Damage doubles if the target is using Dig."
    },
    "shortDescription": {
      "english": "Hits adjacent Pokemon. Double damage on Dig."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "90": {
    "name": {
      "english": "Fissure"
    },
    "description": {
      "english": "Deals damage to the target equal to the target´s maximum HP. Ignores accuracy and evasiveness modifiers. This attack´s accuracy is equal to (user´s level - target´s level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune."
    },
    "shortDescription": {
      "english": "OHKOs the target. Fails if user is a lower level."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 30,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "91": {
    "name": {
      "english": "Dig"
    },
    "description": {
      "english": "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Digs underground turn 1, strikes turn 2."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "92": {
    "name": {
      "english": "Toxic"
    },
    "description": {
      "english": "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move."
    },
    "shortDescription": {
      "english": "Badly poisons the target. Poison types can´t miss."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "93": {
    "name": {
      "english": "Confusion"
    },
    "description": {
      "english": "Has a 10% chance to confuse the target."
    },
    "shortDescription": {
      "english": "10% chance to confuse the target."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "94": {
    "name": {
      "english": "Psychic"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "95": {
    "name": {
      "english": "Hypnosis"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to fall asleep."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 60,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "96": {
    "name": {
      "english": "Meditate"
    },
    "description": {
      "english": "Raises the user´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack by 1."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "97": {
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
  "98": {
    "name": {
      "english": "Quick Attack"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "99": {
    "name": {
      "english": "Rage"
    },
    "description": {
      "english": "Once this move is successfully used, the user´s Attack is raised by 1 stage every time it is hit by another Pokemon´s attack as long as this move is chosen for use."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack by 1 if hit during use."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 20,
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
  "100": {
    "name": {
      "english": "Teleport"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Fails when used."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "101": {
    "name": {
      "english": "Night Shade"
    },
    "description": {
      "english": "Deals damage to the target equal to the user´s level."
    },
    "shortDescription": {
      "english": "Does damage equal to the user´s level."
    },
    "category": "Special",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "102": {
    "name": {
      "english": "Mimic"
    },
    "description": {
      "english": "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Chatter, Mimic, Sketch, Struggle, Transform, or any Z-Move."
    },
    "shortDescription": {
      "english": "The last move the target used replaces this one."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "103": {
    "name": {
      "english": "Screech"
    },
    "description": {
      "english": "Lowers the target´s Defense by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Defense by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "104": {
    "name": {
      "english": "Double Team"
    },
    "description": {
      "english": "Raises the user´s evasiveness by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s evasiveness by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "105": {
    "name": {
      "english": "Recover"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half up."
    },
    "shortDescription": {
      "english": "Heals the user by 50% of its max HP."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "106": {
    "name": {
      "english": "Harden"
    },
    "description": {
      "english": "Raises the user´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "107": {
    "name": {
      "english": "Minimize"
    },
    "description": {
      "english": "Raises the user´s evasiveness by 2 stages. Whether or not the user´s evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active."
    },
    "shortDescription": {
      "english": "Raises the user´s evasiveness by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "108": {
    "name": {
      "english": "Smokescreen"
    },
    "description": {
      "english": "Lowers the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s accuracy by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "109": {
    "name": {
      "english": "Confuse Ray"
    },
    "description": {
      "english": "Causes the target to become confused."
    },
    "shortDescription": {
      "english": "Confuses the target."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "110": {
    "name": {
      "english": "Withdraw"
    },
    "description": {
      "english": "Raises the user´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense by 1."
    },
    "category": "Status",
    "type": "Water",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "111": {
    "name": {
      "english": "Defense Curl"
    },
    "description": {
      "english": "Raises the user´s Defense by 1 stage. As long as the user remains active, the power of the user´s Ice Ball and Rollout will be doubled (this effect is not stackable)."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "112": {
    "name": {
      "english": "Barrier"
    },
    "description": {
      "english": "Raises the user´s Defense by 2 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense by 2."
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
  "113": {
    "name": {
      "english": "Light Screen"
    },
    "description": {
      "english": "For 5 turns, the user and its party members take 0.5x damage from special attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user´s side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user´s side."
    },
    "shortDescription": {
      "english": "For 5 turns, special damage to allies is halved."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "114": {
    "name": {
      "english": "Haze"
    },
    "description": {
      "english": "Resets the stat stages of all active Pokemon to 0."
    },
    "shortDescription": {
      "english": "Eliminates all stat changes."
    },
    "category": "Status",
    "type": "Ice",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {},
    "viable": true
  },
  "115": {
    "name": {
      "english": "Reflect"
    },
    "description": {
      "english": "For 5 turns, the user and its party members take 0.5x damage from physical attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user´s side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user´s side."
    },
    "shortDescription": {
      "english": "For 5 turns, physical damage to allies is halved."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "116": {
    "name": {
      "english": "Focus Energy"
    },
    "description": {
      "english": "Raises the user´s chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally."
    },
    "shortDescription": {
      "english": "Raises the user´s critical hit ratio by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true
    }
  },
  "117": {
    "name": {
      "english": "Bide"
    },
    "description": {
      "english": "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move´s use, the effect ends. This move does not check accuracy and does not ignore type immunity."
    },
    "shortDescription": {
      "english": "Waits 2 turns; deals double the damage taken."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 1,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "118": {
    "name": {
      "english": "Metronome"
    },
    "description": {
      "english": "A random move is selectedTeamPokemon for use, other than After You, Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Endure, Feint, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Hold Hands, Hyperspace Hole, Ice Burn, Instruct, King´s Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Nature Power, Photon Geyser, Plasma Fists, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spotlight, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard."
    },
    "shortDescription": {
      "english": "Picks a random move."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "119": {
    "name": {
      "english": "Mirror Move"
    },
    "description": {
      "english": "The user uses the last move used by the target. The copied move is used against that target, if possible. Fails if the target has not made a move, or if the last move used cannot be copied by this move."
    },
    "shortDescription": {
      "english": "User uses the target´s last used move against it."
    },
    "category": "Status",
    "type": "Flying",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "120": {
    "name": {
      "english": "Self-Destruct"
    },
    "description": {
      "english": "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability."
    },
    "shortDescription": {
      "english": "Hits adjacent Pokemon. The user faints."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 200,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "121": {
    "name": {
      "english": "Egg Bomb"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 100,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "122": {
    "name": {
      "english": "Lick"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "30% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 30,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "123": {
    "name": {
      "english": "Smog"
    },
    "description": {
      "english": "Has a 40% chance to poison the target."
    },
    "shortDescription": {
      "english": "40% chance to poison the target."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 30,
    "accuracy": 70,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "124": {
    "name": {
      "english": "Sludge"
    },
    "description": {
      "english": "Has a 30% chance to poison the target."
    },
    "shortDescription": {
      "english": "30% chance to poison the target."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "125": {
    "name": {
      "english": "Bone Club"
    },
    "description": {
      "english": "Has a 10% chance to flinch the target."
    },
    "shortDescription": {
      "english": "10% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 65,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "126": {
    "name": {
      "english": "Fire Blast"
    },
    "description": {
      "english": "Has a 10% chance to burn the target."
    },
    "shortDescription": {
      "english": "10% chance to burn the target."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 110,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "127": {
    "name": {
      "english": "Waterfall"
    },
    "description": {
      "english": "Has a 20% chance to flinch the target."
    },
    "shortDescription": {
      "english": "20% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "128": {
    "name": {
      "english": "Clamp"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 35,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "129": {
    "name": {
      "english": "Swift"
    },
    "description": {
      "english": "This move does not check accuracy."
    },
    "shortDescription": {
      "english": "This move does not check accuracy. Hits foes."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "130": {
    "name": {
      "english": "Skull Bash"
    },
    "description": {
      "english": "This attack charges on the first turn and executes on the second. Raises the user´s Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Raises user´s Defense by 1 on turn 1. Hits turn 2."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 130,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "131": {
    "name": {
      "english": "Spike Cannon"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 20,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "132": {
    "name": {
      "english": "Constrict"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Speed by 1."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 10,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "133": {
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
  "134": {
    "name": {
      "english": "Kinesis"
    },
    "description": {
      "english": "Lowers the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s accuracy by 1."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "135": {
    "name": {
      "english": "Soft-Boiled"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half up."
    },
    "shortDescription": {
      "english": "Heals the user by 50% of its max HP."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "136": {
    "name": {
      "english": "High Jump Kick"
    },
    "description": {
      "english": "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage."
    },
    "shortDescription": {
      "english": "User is hurt by 50% of its max HP if it misses."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 130,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isAffectedByGravity": true,
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "137": {
    "name": {
      "english": "Glare"
    },
    "description": {
      "english": "Paralyzes the target."
    },
    "shortDescription": {
      "english": "Paralyzes the target."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "138": {
    "name": {
      "english": "Dream Eater"
    },
    "description": {
      "english": "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User gains 1/2 HP inflicted. Sleeping target only."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "139": {
    "name": {
      "english": "Poison Gas"
    },
    "description": {
      "english": "Poisons the target."
    },
    "shortDescription": {
      "english": "Poisons the foe(s)."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 90,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "140": {
    "name": {
      "english": "Barrage"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 15,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "141": {
    "name": {
      "english": "Leech Life"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 80,
    "accuracy": 100,
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
  "142": {
    "name": {
      "english": "Lovely Kiss"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to fall asleep."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "143": {
    "name": {
      "english": "Sky Attack"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges, then hits turn 2. 30% flinch. High crit."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 140,
    "accuracy": 90,
    "priority": 0,
    "target": "any",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "mustBeCharged": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "144": {
    "name": {
      "english": "Transform"
    },
    "description": {
      "english": "The user transforms into the target. The target´s current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user´s level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion."
    },
    "shortDescription": {
      "english": "Copies target´s stats, moves, types, and Ability."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "145": {
    "name": {
      "english": "Bubble"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the foe(s) Speed by 1."
    },
    "category": "Special",
    "type": "Water",
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
  "146": {
    "name": {
      "english": "Dizzy Punch"
    },
    "description": {
      "english": "Has a 20% chance to confuse the target."
    },
    "shortDescription": {
      "english": "20% chance to confuse the target."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "147": {
    "name": {
      "english": "Spore"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to fall asleep."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "148": {
    "name": {
      "english": "Flash"
    },
    "description": {
      "english": "Lowers the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s accuracy by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "149": {
    "name": {
      "english": "Psywave"
    },
    "description": {
      "english": "Deals damage to the target equal to (user´s level) * (X + 50) / 100, where X is a random number from 0 to 100, rounded down, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Random damage equal to 0.5x-1.5x user´s level."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "150": {
    "name": {
      "english": "Splash"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "isAffectedByGravity": true
    }
  },
  "151": {
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
  "152": {
    "name": {
      "english": "Crabhammer"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 100,
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
  "153": {
    "name": {
      "english": "Explosion"
    },
    "description": {
      "english": "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability."
    },
    "shortDescription": {
      "english": "Hits adjacent Pokemon. The user faints."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 250,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "154": {
    "name": {
      "english": "Fury Swipes"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 18,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "155": {
    "name": {
      "english": "Bonemerang"
    },
    "description": {
      "english": "Hits twice. If the first hit breaks the target´s substitute, it will take damage for the second hit."
    },
    "shortDescription": {
      "english": "Hits 2 times in one turn."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 50,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "156": {
    "name": {
      "english": "Rest"
    },
    "description": {
      "english": "The user falls asleep for the next two turns and restores all of its HP, curing itself of any major status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep."
    },
    "shortDescription": {
      "english": "User sleeps 2 turns and restores HP and status."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "157": {
    "name": {
      "english": "Rock Slide"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the foe(s)."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 75,
    "accuracy": 90,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "158": {
    "name": {
      "english": "Hyper Fang"
    },
    "description": {
      "english": "Has a 10% chance to flinch the target."
    },
    "shortDescription": {
      "english": "10% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "159": {
    "name": {
      "english": "Sharpen"
    },
    "description": {
      "english": "Raises the user´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "160": {
    "name": {
      "english": "Conversion"
    },
    "description": {
      "english": "The user´s type changes to match the original type of the move in its first move slot. Fails if the user cannot change its type, or if the type is one of the user´s current types."
    },
    "shortDescription": {
      "english": "Changes user´s type to match its first move."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true
    }
  },
  "161": {
    "name": {
      "english": "Tri Attack"
    },
    "description": {
      "english": "Has a 20% chance to either burn, freeze, or paralyze the target."
    },
    "shortDescription": {
      "english": "20% chance to paralyze or burn or freeze target."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "162": {
    "name": {
      "english": "Super Fang"
    },
    "description": {
      "english": "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Does damage equal to 1/2 target´s current HP."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
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
  "163": {
    "name": {
      "english": "Slash"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
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
  "164": {
    "name": {
      "english": "Substitute"
    },
    "description": {
      "english": "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute."
    },
    "shortDescription": {
      "english": "User takes 1/4 its max HP to put in a substitute."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "165": {
    "name": {
      "english": "Struggle"
    },
    "description": {
      "english": "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user´s known moves can be selectedTeamPokemon."
    },
    "shortDescription": {
      "english": "User loses 1/4 of its max HP."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "randomNormal",
    "powerPoints": 1,
    "maxPowerPoints": 1,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "166": {
    "name": {
      "english": "Sketch"
    },
    "description": {
      "english": "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Chatter, Sketch, Struggle, or any move the user knows."
    },
    "shortDescription": {
      "english": "Permanently copies the last move target used."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 1,
    "maxPowerPoints": 1,
    "flags": {}
  },
  "167": {
    "name": {
      "english": "Triple Kick"
    },
    "description": {
      "english": "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times."
    },
    "shortDescription": {
      "english": "Hits 3 times. Each hit can miss, but power rises."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 10,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "168": {
    "name": {
      "english": "Thief"
    },
    "description": {
      "english": "If this attack was successful and the user has not fainted, it steals the target´s held item if the user is not holding one. The target´s item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability."
    },
    "shortDescription": {
      "english": "If the user has no item, it steals the target´s."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "169": {
    "name": {
      "english": "Spider Web"
    },
    "description": {
      "english": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field."
    },
    "shortDescription": {
      "english": "Prevents the target from switching out."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "170": {
    "name": {
      "english": "Mind Reader"
    },
    "description": {
      "english": "Until the end of the next turn, the target cannot avoid the user´s moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user."
    },
    "shortDescription": {
      "english": "User´s next move will not miss the target."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "171": {
    "name": {
      "english": "Nightmare"
    },
    "description": {
      "english": "Causes the target to lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep. This move does not affect the target unless it is asleep. The effect ends when the target wakes up, even if it falls asleep again in the same turn."
    },
    "shortDescription": {
      "english": "A sleeping target is hurt by 1/4 max HP per turn."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "172": {
    "name": {
      "english": "Flame Wheel"
    },
    "description": {
      "english": "Has a 10% chance to burn the target."
    },
    "shortDescription": {
      "english": "10% chance to burn the target. Thaws user."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "173": {
    "name": {
      "english": "Snore"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target. Fails if the user is not asleep."
    },
    "shortDescription": {
      "english": "User must be asleep. 30% chance to flinch target."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "174": {
    "name": {
      "english": "Curse"
    },
    "description": {
      "english": "If the user is not a Ghost type, lowers the user´s Speed by 1 stage and raises the user´s Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected."
    },
    "shortDescription": {
      "english": "Curses if Ghost, else -1 Spe, +1 Atk, +1 Def."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "175": {
    "name": {
      "english": "Flail"
    },
    "description": {
      "english": "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user´s current HP * 48 / user´s maximum HP), rounded down."
    },
    "shortDescription": {
      "english": "More power the less HP the user has left."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "176": {
    "name": {
      "english": "Conversion 2"
    },
    "description": {
      "english": "The user´s type changes to match a type that resists or is immune to the type of the last move used by the target, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the target has not made a move, if the user cannot change its type, or if this move would only be able to select one of the user´s current types."
    },
    "shortDescription": {
      "english": "Changes user´s type to resist target´s last move."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {}
  },
  "177": {
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
  "178": {
    "name": {
      "english": "Cotton Spore"
    },
    "description": {
      "english": "Lowers the target´s Speed by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Speed by 2."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "179": {
    "name": {
      "english": "Reversal"
    },
    "description": {
      "english": "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user´s current HP * 48 / user´s maximum HP), rounded down."
    },
    "shortDescription": {
      "english": "More power the less HP the user has left."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "180": {
    "name": {
      "english": "Spite"
    },
    "description": {
      "english": "Causes the target´s last move used to lose 4 PP. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move."
    },
    "shortDescription": {
      "english": "Lowers the PP of the target´s last move by 4."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "181": {
    "name": {
      "english": "Powder Snow"
    },
    "description": {
      "english": "Has a 10% chance to freeze the target."
    },
    "shortDescription": {
      "english": "10% chance to freeze the foe(s)."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "182": {
    "name": {
      "english": "Protect"
    },
    "description": {
      "english": "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn."
    },
    "shortDescription": {
      "english": "Prevents moves from affecting the user this turn."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {},
    "viable": true
  },
  "183": {
    "name": {
      "english": "Mach Punch"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "184": {
    "name": {
      "english": "Scary Face"
    },
    "description": {
      "english": "Lowers the target´s Speed by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Speed by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "185": {
    "name": {
      "english": "Feint Attack"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 60,
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
  "186": {
    "name": {
      "english": "Sweet Kiss"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to become confused."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "187": {
    "name": {
      "english": "Belly Drum"
    },
    "description": {
      "english": "Raises the user´s Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6."
    },
    "shortDescription": {
      "english": "User loses 50% max HP. Maximizes Attack."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "188": {
    "name": {
      "english": "Sludge Bomb"
    },
    "description": {
      "english": "Has a 30% chance to poison the target."
    },
    "shortDescription": {
      "english": "30% chance to poison the target."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "189": {
    "name": {
      "english": "Mud-Slap"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s accuracy by 1."
    },
    "category": "Special",
    "type": "Ground",
    "basePower": 20,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "190": {
    "name": {
      "english": "Octazooka"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s accuracy by 1."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 65,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "191": {
    "name": {
      "english": "Spikes"
    },
    "description": {
      "english": "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog."
    },
    "shortDescription": {
      "english": "Hurts grounded foes on switch-in. Max 3 layers."
    },
    "category": "Status",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "foeSide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true
    },
    "viable": true
  },
  "192": {
    "name": {
      "english": "Zap Cannon"
    },
    "description": {
      "english": "Has a 100% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "100% chance to paralyze the target."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 120,
    "accuracy": 50,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "193": {
    "name": {
      "english": "Foresight"
    },
    "description": {
      "english": "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth."
    },
    "shortDescription": {
      "english": "Fighting, Normal hit Ghost. Evasiveness ignored."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "194": {
    "name": {
      "english": "Destiny Bond"
    },
    "description": {
      "english": "Until the user´s next move, if an opposing Pokemon´s attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability."
    },
    "shortDescription": {
      "english": "If an opponent knocks out the user, it also faints."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {},
    "viable": true
  },
  "195": {
    "name": {
      "english": "Perish Song"
    },
    "description": {
      "english": "Each active Pokemon receives a perish count of 4 if it doesn´t already have a perish count. At the end of each turn including the turn used, the perish count of all active Pokemon lowers by 1 and Pokemon faint if the number reaches 0. The perish count is removed from Pokemon that switch out. If a Pokemon uses Baton Pass while it has a perish count, the replacement will gain the perish count and continue to count down."
    },
    "shortDescription": {
      "english": "All active Pokemon will faint in 3 turns."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {},
    "viable": true
  },
  "196": {
    "name": {
      "english": "Icy Wind"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the foe(s) Speed by 1."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 55,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "197": {
    "name": {
      "english": "Detect"
    },
    "description": {
      "english": "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn."
    },
    "shortDescription": {
      "english": "Prevents moves from affecting the user this turn."
    },
    "category": "Status",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {},
    "viable": true
  },
  "198": {
    "name": {
      "english": "Bone Rush"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 25,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "199": {
    "name": {
      "english": "Lock-On"
    },
    "description": {
      "english": "Until the end of the next turn, the target cannot avoid the user´s moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user."
    },
    "shortDescription": {
      "english": "User´s next move will not miss the target."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "200": {
    "name": {
      "english": "Outrage"
    },
    "description": {
      "english": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user."
    },
    "shortDescription": {
      "english": "Lasts 2-3 turns. Confuses the user afterwards."
    },
    "category": "Physical",
    "type": "Dragon",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "randomNormal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "201": {
    "name": {
      "english": "Sandstorm"
    },
    "description": {
      "english": "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard, Overcoat, Sand Force, Sand Rush, or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm."
    },
    "shortDescription": {
      "english": "For 5 turns, a sandstorm rages."
    },
    "category": "Status",
    "type": "Rock",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "202": {
    "name": {
      "english": "Giga Drain"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "203": {
    "name": {
      "english": "Endure"
    },
    "description": {
      "english": "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn."
    },
    "shortDescription": {
      "english": "User survives attacks this turn with at least 1 HP."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "204": {
    "name": {
      "english": "Charm"
    },
    "description": {
      "english": "Lowers the target´s Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack by 2."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "205": {
    "name": {
      "english": "Rollout"
    },
    "description": {
      "english": "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user´s next move after this effect ends."
    },
    "shortDescription": {
      "english": "Power doubles with each hit. Repeats for 5 turns."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 30,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "206": {
    "name": {
      "english": "False Swipe"
    },
    "description": {
      "english": "Leaves the target with at least 1 HP."
    },
    "shortDescription": {
      "english": "Always leaves the target with at least 1 HP."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "207": {
    "name": {
      "english": "Swagger"
    },
    "description": {
      "english": "Raises the target´s Attack by 2 stages and confuses it."
    },
    "shortDescription": {
      "english": "Raises the target´s Attack by 2 and confuses it."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "208": {
    "name": {
      "english": "Milk Drink"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half up."
    },
    "shortDescription": {
      "english": "Heals the user by 50% of its max HP."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "209": {
    "name": {
      "english": "Spark"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "30% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "210": {
    "name": {
      "english": "Fury Cutter"
    },
    "description": {
      "english": "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used."
    },
    "shortDescription": {
      "english": "Power doubles with each hit, up to 160."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 40,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "211": {
    "name": {
      "english": "Steel Wing"
    },
    "description": {
      "english": "Has a 10% chance to raise the user´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to raise the user´s Defense by 1."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 70,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "212": {
    "name": {
      "english": "Mean Look"
    },
    "description": {
      "english": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field."
    },
    "shortDescription": {
      "english": "Prevents the target from switching out."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeReflected": true
    }
  },
  "213": {
    "name": {
      "english": "Attract"
    },
    "description": {
      "english": "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune."
    },
    "shortDescription": {
      "english": "A target of the opposite gender gets infatuated."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "214": {
    "name": {
      "english": "Sleep Talk"
    },
    "description": {
      "english": "One of the user´s known moves, besides this move, is selectedTeamPokemon for use at random. Fails if the user is not asleep. The selectedTeamPokemon move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Z-Move."
    },
    "shortDescription": {
      "english": "User must be asleep. Uses another known move."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {},
    "viable": true
  },
  "215": {
    "name": {
      "english": "Heal Bell"
    },
    "description": {
      "english": "Every Pokemon in the user´s party is cured of its major status condition. Active Pokemon with the Soundproof Ability are not cured."
    },
    "shortDescription": {
      "english": "Cures the user´s party of all status conditions."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allyTeam",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "216": {
    "name": {
      "english": "Return"
    },
    "description": {
      "english": "Power is equal to the greater of (user´s Happiness * 2/5), rounded down, or 1."
    },
    "shortDescription": {
      "english": "Max 102 power at maximum Happiness."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "217": {
    "name": {
      "english": "Present"
    },
    "description": {
      "english": "If this move is successful, it deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down."
    },
    "shortDescription": {
      "english": "40, 80, 120 power, or heals target 1/4 max HP."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "218": {
    "name": {
      "english": "Frustration"
    },
    "description": {
      "english": "Power is equal to the greater of ((255 - user´s Happiness) * 2/5), rounded down, or 1."
    },
    "shortDescription": {
      "english": "Max 102 power at minimum Happiness."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "219": {
    "name": {
      "english": "Safeguard"
    },
    "description": {
      "english": "For 5 turns, the user and its party members cannot have major status conditions or confusion inflicted on them by other Pokemon. It is removed from the user´s side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user´s side."
    },
    "shortDescription": {
      "english": "For 5 turns, protects user´s party from status."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "canBeSnatched": true
    }
  },
  "220": {
    "name": {
      "english": "Pain Split"
    },
    "description": {
      "english": "The user and the target´s HP become the average of their current HP, rounded down, but not more than the maximum HP of either one."
    },
    "shortDescription": {
      "english": "Shares HP of user and target equally."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "221": {
    "name": {
      "english": "Sacred Fire"
    },
    "description": {
      "english": "Has a 50% chance to burn the target."
    },
    "shortDescription": {
      "english": "50% chance to burn the target. Thaws user."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 100,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "222": {
    "name": {
      "english": "Magnitude"
    },
    "description": {
      "english": "The power of this move varies; 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Damage doubles if the target is using Dig."
    },
    "shortDescription": {
      "english": "Hits adjacent Pokemon. Power varies; 2x on Dig."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true
    }
  },
  "223": {
    "name": {
      "english": "Dynamic Punch"
    },
    "description": {
      "english": "Has a 100% chance to confuse the target."
    },
    "shortDescription": {
      "english": "100% chance to confuse the target."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 100,
    "accuracy": 50,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "224": {
    "name": {
      "english": "Megahorn"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 120,
    "accuracy": 85,
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
  "225": {
    "name": {
      "english": "Dragon Breath"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "30% chance to paralyze the target."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "226": {
    "name": {
      "english": "Baton Pass"
    },
    "description": {
      "english": "The user is replaced with another Pokemon in its party. The selectedTeamPokemon Pokemon has the user´s stat stage changes, confusion, and certain move effects transferred to it."
    },
    "shortDescription": {
      "english": "User switches, passing stat changes and more."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {},
    "viable": true
  },
  "227": {
    "name": {
      "english": "Encore"
    },
    "description": {
      "english": "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Assist, Copycat, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, Transform, or any Z-Move."
    },
    "shortDescription": {
      "english": "Target repeats its last move for its next 3 turns."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "228": {
    "name": {
      "english": "Pursuit"
    },
    "description": {
      "english": "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Parting Shot, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user´s turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn."
    },
    "shortDescription": {
      "english": "Power doubles if a foe is switching out."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "229": {
    "name": {
      "english": "Rapid Spin"
    },
    "description": {
      "english": "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user´s side of the field."
    },
    "shortDescription": {
      "english": "Frees user from hazards, binding, Leech Seed."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 20,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "230": {
    "name": {
      "english": "Sweet Scent"
    },
    "description": {
      "english": "Lowers the target´s evasiveness by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the foe(s) evasiveness by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "231": {
    "name": {
      "english": "Iron Tail"
    },
    "description": {
      "english": "Has a 30% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "30% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 100,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "232": {
    "name": {
      "english": "Metal Claw"
    },
    "description": {
      "english": "Has a 10% chance to raise the user´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to raise the user´s Attack by 1."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 50,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 35,
    "maxPowerPoints": 56,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "233": {
    "name": {
      "english": "Vital Throw"
    },
    "description": {
      "english": "This move does not check accuracy."
    },
    "shortDescription": {
      "english": "This move does not check accuracy. Goes last."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 70,
    "accuracy": 100,
    "priority": -1,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "234": {
    "name": {
      "english": "Morning Sun"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down."
    },
    "shortDescription": {
      "english": "Heals the user by a weather-dependent amount."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "235": {
    "name": {
      "english": "Synthesis"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down."
    },
    "shortDescription": {
      "english": "Heals the user by a weather-dependent amount."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "236": {
    "name": {
      "english": "Moonlight"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down."
    },
    "shortDescription": {
      "english": "Heals the user by a weather-dependent amount."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "237": {
    "name": {
      "english": "Hidden Power Water"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": ""
    },
    "category": "Special",
    "type": "Water",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "238": {
    "name": {
      "english": "Cross Chop"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 100,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "239": {
    "name": {
      "english": "Twister"
    },
    "description": {
      "english": "Has a 20% chance to flinch the target. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop."
    },
    "shortDescription": {
      "english": "20% chance to flinch the foe(s)."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "240": {
    "name": {
      "english": "Rain Dance"
    },
    "description": {
      "english": "For 5 turns, the weather becomes Rain Dance. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain Dance."
    },
    "shortDescription": {
      "english": "For 5 turns, heavy rain powers Water moves."
    },
    "category": "Status",
    "type": "Water",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {}
  },
  "241": {
    "name": {
      "english": "Sunny Day"
    },
    "description": {
      "english": "For 5 turns, the weather becomes Sunny Day. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sunny Day."
    },
    "shortDescription": {
      "english": "For 5 turns, intense sunlight powers Fire moves."
    },
    "category": "Status",
    "type": "Fire",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {}
  },
  "242": {
    "name": {
      "english": "Crunch"
    },
    "description": {
      "english": "Has a 20% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "20% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "243": {
    "name": {
      "english": "Mirror Coat"
    },
    "description": {
      "english": "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon´s position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon´s special attack this turn."
    },
    "shortDescription": {
      "english": "If hit by special attack, returns double damage."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": -5,
    "target": "scripted",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "244": {
    "name": {
      "english": "Psych Up"
    },
    "description": {
      "english": "The user copies all of the target´s current stat stage changes."
    },
    "shortDescription": {
      "english": "Copies the target´s current stat stages."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "245": {
    "name": {
      "english": "Extreme Speed"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Nearly always goes first."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 80,
    "accuracy": 100,
    "priority": 2,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "246": {
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
  "247": {
    "name": {
      "english": "Shadow Ball"
    },
    "description": {
      "english": "Has a 20% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "20% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Ghost",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "249": {
    "name": {
      "english": "Rock Smash"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "250": {
    "name": {
      "english": "Whirlpool"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 35,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "251": {
    "name": {
      "english": "Beat Up"
    },
    "description": {
      "english": "Hits one time for the user and one time for each unfainted Pokemon without a major status condition in the user´s party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon´s base Attack; each hit is considered to come from the user."
    },
    "shortDescription": {
      "english": "All healthy allies aid in damaging the target."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "252": {
    "name": {
      "english": "Fake Out"
    },
    "description": {
      "english": "Has a 100% chance to flinch the target. Fails unless it is the user´s first turn on the field."
    },
    "shortDescription": {
      "english": "Hits first. First turn out only. 100% flinch chance."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 3,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "253": {
    "name": {
      "english": "Uproar"
    },
    "description": {
      "english": "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends."
    },
    "shortDescription": {
      "english": "Lasts 3 turns. Active Pokemon cannot fall asleep."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "randomNormal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "254": {
    "name": {
      "english": "Stockpile"
    },
    "description": {
      "english": "Raises the user´s Defense and Special Defense by 1 stage. The user´s Stockpile count increases by 1. Fails if the user´s Stockpile count is 3. The user´s Stockpile count is reset to 0 when it is no longer active."
    },
    "shortDescription": {
      "english": "Raises user´s Defense, Sp. Def by 1. Max 3 uses."
    },
    "category": "Status",
    "type": "Normal",
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
  "255": {
    "name": {
      "english": "Spit Up"
    },
    "description": {
      "english": "Power is equal to 100 times the user´s Stockpile count. Fails if the user´s Stockpile count is 0. Whether or not this move is successful, the user´s Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user´s Stockpile count resets to 0."
    },
    "shortDescription": {
      "english": "More power with more uses of Stockpile."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "256": {
    "name": {
      "english": "Swallow"
    },
    "description": {
      "english": "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it´s 1, 1/2 of its maximum HP if it´s 2, both rounded half down, and all of its HP if it´s 3. Fails if the user´s Stockpile count is 0. The user´s Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user´s Stockpile count resets to 0."
    },
    "shortDescription": {
      "english": "Heals the user based on uses of Stockpile."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "257": {
    "name": {
      "english": "Heat Wave"
    },
    "description": {
      "english": "Has a 10% chance to burn the target."
    },
    "shortDescription": {
      "english": "10% chance to burn the foe(s)."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 95,
    "accuracy": 90,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "258": {
    "name": {
      "english": "Hail"
    },
    "description": {
      "english": "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, Overcoat, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail."
    },
    "shortDescription": {
      "english": "For 5 turns, hail crashes down."
    },
    "category": "Status",
    "type": "Ice",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "259": {
    "name": {
      "english": "Torment"
    },
    "description": {
      "english": "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active."
    },
    "shortDescription": {
      "english": "Target can´t select the same move twice in a row."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "260": {
    "name": {
      "english": "Flatter"
    },
    "description": {
      "english": "Raises the target´s Special Attack by 1 stage and confuses it."
    },
    "shortDescription": {
      "english": "Raises the target´s Sp. Atk by 1 and confuses it."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "261": {
    "name": {
      "english": "Will-O-Wisp"
    },
    "description": {
      "english": "Burns the target."
    },
    "shortDescription": {
      "english": "Burns the target."
    },
    "category": "Status",
    "type": "Fire",
    "basePower": 0,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "262": {
    "name": {
      "english": "Memento"
    },
    "description": {
      "english": "Lowers the target´s Attack and Special Attack by 2 stages. The user faints unless this move misses or there is no target. Fails entirely if this move hits a substitute, but does not fail if the target´s stats cannot be changed."
    },
    "shortDescription": {
      "english": "Lowers target´s Attack, Sp. Atk by 2. User faints."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "affectsStats": true
    },
    "viable": true
  },
  "263": {
    "name": {
      "english": "Facade"
    },
    "description": {
      "english": "Power doubles if the user is burned, paralyzed, or poisoned. The physical damage halving effect from the user´s burn is ignored."
    },
    "shortDescription": {
      "english": "Power doubles if user is burn/poison/paralyzed."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "264": {
    "name": {
      "english": "Focus Punch"
    },
    "description": {
      "english": "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move."
    },
    "shortDescription": {
      "english": "Fails if the user takes damage before it hits."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 150,
    "accuracy": 100,
    "priority": -3,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "265": {
    "name": {
      "english": "Smelling Salts"
    },
    "description": {
      "english": "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis."
    },
    "shortDescription": {
      "english": "Power doubles if target is paralyzed, and cures it."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "266": {
    "name": {
      "english": "Follow Me"
    },
    "description": {
      "english": "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop."
    },
    "shortDescription": {
      "english": "The foes´ moves target the user on the turn used."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 2,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "267": {
    "name": {
      "english": "Nature Power"
    },
    "description": {
      "english": "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, Energy Ball during Grassy Terrain, and Psychic during Psychic Terrain."
    },
    "shortDescription": {
      "english": "Attack depends on terrain (default Tri Attack)."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {},
    "viable": true
  },
  "268": {
    "name": {
      "english": "Charge"
    },
    "description": {
      "english": "Raises the user´s Special Defense by 1 stage. If the user uses an Electric-type attack on the next turn, its power will be doubled."
    },
    "shortDescription": {
      "english": "+1 SpD, user´s Electric move next turn 2x power."
    },
    "category": "Status",
    "type": "Electric",
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
  "269": {
    "name": {
      "english": "Taunt"
    },
    "description": {
      "english": "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune."
    },
    "shortDescription": {
      "english": "Target can´t use status moves its next 3 turns."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "270": {
    "name": {
      "english": "Helping Hand"
    },
    "description": {
      "english": "The power of the target´s attack this turn is multiplied by 1.5 (this effect is stackable). Fails if there is no ally adjacent to the user or if the ally already moved this turn, but does not fail if the ally is using a two-turn move."
    },
    "shortDescription": {
      "english": "One adjacent ally´s move power is 1.5x this turn."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 5,
    "target": "adjacentAlly",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "271": {
    "name": {
      "english": "Trick"
    },
    "description": {
      "english": "The user swaps its held item with the target´s held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability."
    },
    "shortDescription": {
      "english": "User switches its held item with the target´s."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "272": {
    "name": {
      "english": "Role Play"
    },
    "description": {
      "english": "The user´s Ability changes to match the target´s Ability. Fails if the user´s Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or already matches the target, or if the target´s Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode."
    },
    "shortDescription": {
      "english": "User replaces its Ability with the target´s."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "273": {
    "name": {
      "english": "Wish"
    },
    "description": {
      "english": "At the end of the next turn, the Pokemon at the user´s position has 1/2 of the user´s maximum HP restored to it, rounded half up. Fails if this move is already in effect for the user´s position."
    },
    "shortDescription": {
      "english": "Next turn, 50% of the user´s max HP is restored."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "274": {
    "name": {
      "english": "Assist"
    },
    "description": {
      "english": "A random move among those known by the user´s party members is selectedTeamPokemon for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King´s Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move."
    },
    "shortDescription": {
      "english": "Uses a random move known by a team member."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "275": {
    "name": {
      "english": "Ingrain"
    },
    "description": {
      "english": "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability."
    },
    "shortDescription": {
      "english": "Traps/grounds user; heals 1/16 max HP per turn."
    },
    "category": "Status",
    "type": "Grass",
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
  "276": {
    "name": {
      "english": "Superpower"
    },
    "description": {
      "english": "Lowers the user´s Attack and Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Attack and Defense by 1."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "277": {
    "name": {
      "english": "Magic Coat"
    },
    "description": {
      "english": "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability´s effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability´s effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect."
    },
    "shortDescription": {
      "english": "Bounces back certain non-damaging moves."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {},
    "viable": true
  },
  "278": {
    "name": {
      "english": "Recycle"
    },
    "description": {
      "english": "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained."
    },
    "shortDescription": {
      "english": "Restores the item the user last used."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "279": {
    "name": {
      "english": "Revenge"
    },
    "description": {
      "english": "Power doubles if the user was hit by the target this turn."
    },
    "shortDescription": {
      "english": "Power doubles if user is damaged by the target."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 60,
    "accuracy": 100,
    "priority": -4,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "280": {
    "name": {
      "english": "Brick Break"
    },
    "description": {
      "english": "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target´s side of the field before damage is calculated."
    },
    "shortDescription": {
      "english": "Destroys screens, unless the target is immune."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "281": {
    "name": {
      "english": "Yawn"
    },
    "description": {
      "english": "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a major status condition. At the end of the next turn, if the target is still active, does not have a major status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect."
    },
    "shortDescription": {
      "english": "Puts the target to sleep after 1 turn."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "282": {
    "name": {
      "english": "Knock Off"
    },
    "description": {
      "english": "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move´s power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot remove Z-Crystals, cause Pokemon with the Sticky Hold Ability to lose their held item, cause Pokemon that can Mega Evolve to lose the Mega Stone for their species, or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability."
    },
    "shortDescription": {
      "english": "1.5x damage if foe holds an item. Removes item."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "283": {
    "name": {
      "english": "Endeavor"
    },
    "description": {
      "english": "Deals damage to the target equal to (target´s current HP - user´s current HP). The target is unaffected if its current HP is less than or equal to the user´s current HP."
    },
    "shortDescription": {
      "english": "Lowers the target´s HP to the user´s HP."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "284": {
    "name": {
      "english": "Eruption"
    },
    "description": {
      "english": "Power is equal to (user´s current HP * 150 / user´s maximum HP), rounded down, but not less than 1."
    },
    "shortDescription": {
      "english": "Less power as user´s HP decreases. Hits foe(s)."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 150,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "285": {
    "name": {
      "english": "Skill Swap"
    },
    "description": {
      "english": "The user swaps its Ability with the target´s Ability. Fails if either the user or the target´s Ability is Battle Bond, Comatose, Disguise, Illusion, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode."
    },
    "shortDescription": {
      "english": "The user and the target trade Abilities."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "286": {
    "name": {
      "english": "Imprison"
    },
    "description": {
      "english": "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active."
    },
    "shortDescription": {
      "english": "No foe can use any move known by the user."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "287": {
    "name": {
      "english": "Refresh"
    },
    "description": {
      "english": "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed."
    },
    "shortDescription": {
      "english": "User cures its burn, poison, or paralysis."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "288": {
    "name": {
      "english": "Grudge"
    },
    "description": {
      "english": "Until the user´s next turn, if an opposing Pokemon´s attack knocks the user out, that move loses all its remaining PP."
    },
    "shortDescription": {
      "english": "If the user faints, the attack used loses all its PP."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {}
  },
  "289": {
    "name": {
      "english": "Snatch"
    },
    "description": {
      "english": "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop."
    },
    "shortDescription": {
      "english": "User steals certain support moves to use itself."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "290": {
    "name": {
      "english": "Secret Power"
    },
    "description": {
      "english": "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, causes sleep during Grassy Terrain and lowers Speed by 1 stage during Psychic Terrain."
    },
    "shortDescription": {
      "english": "Effect varies with terrain. (30% paralysis chance)"
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "291": {
    "name": {
      "english": "Dive"
    },
    "description": {
      "english": "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Dives underwater turn 1, strikes turn 2."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "292": {
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
  "293": {
    "name": {
      "english": "Camouflage"
    },
    "description": {
      "english": "The user´s type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, Grass type during Grassy Terrain, and Psychic type during Psychic Terrain. Fails if the user´s type cannot be changed or if the user is already purely that type."
    },
    "shortDescription": {
      "english": "Changes user´s type by terrain (default Normal)."
    },
    "category": "Status",
    "type": "Normal",
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
  "294": {
    "name": {
      "english": "Tail Glow"
    },
    "description": {
      "english": "Raises the user´s Special Attack by 3 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Sp. Atk by 3."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "295": {
    "name": {
      "english": "Luster Purge"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 70,
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
  "296": {
    "name": {
      "english": "Mist Ball"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 70,
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
  "297": {
    "name": {
      "english": "Feather Dance"
    },
    "description": {
      "english": "Lowers the target´s Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack by 2."
    },
    "category": "Status",
    "type": "Flying",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "298": {
    "name": {
      "english": "Teeter Dance"
    },
    "description": {
      "english": "Causes the target to become confused."
    },
    "shortDescription": {
      "english": "Confuses adjacent Pokemon."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "299": {
    "name": {
      "english": "Blaze Kick"
    },
    "description": {
      "english": "Has a 10% chance to burn the target and a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio. 10% chance to burn."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 85,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "300": {
    "name": {
      "english": "Mud Sport"
    },
    "description": {
      "english": "For 5 turns, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active."
    },
    "shortDescription": {
      "english": "For 5 turns, Electric-type attacks have 1/3 power."
    },
    "category": "Status",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {}
  },
  "301": {
    "name": {
      "english": "Ice Ball"
    },
    "description": {
      "english": "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user´s next move after this effect ends."
    },
    "shortDescription": {
      "english": "Power doubles with each hit. Repeats for 5 turns."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 30,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "302": {
    "name": {
      "english": "Needle Arm"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "303": {
    "name": {
      "english": "Slack Off"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half up."
    },
    "shortDescription": {
      "english": "Heals the user by 50% of its max HP."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "304": {
    "name": {
      "english": "Hyper Voice"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent foes."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "305": {
    "name": {
      "english": "Poison Fang"
    },
    "description": {
      "english": "Has a 50% chance to badly poison the target."
    },
    "shortDescription": {
      "english": "50% chance to badly poison the target."
    },
    "category": "Physical",
    "type": "Poison",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "306": {
    "name": {
      "english": "Crush Claw"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 75,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "307": {
    "name": {
      "english": "Blast Burn"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot make a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "308": {
    "name": {
      "english": "Hydro Cannon"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "309": {
    "name": {
      "english": "Meteor Mash"
    },
    "description": {
      "english": "Has a 20% chance to raise the user´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "20% chance to raise the user´s Attack by 1."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 90,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "310": {
    "name": {
      "english": "Astonish"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 30,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "311": {
    "name": {
      "english": "Weather Ball"
    },
    "description": {
      "english": "Power doubles if a weather condition other than Delta Stream is active, and this move´s type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day."
    },
    "shortDescription": {
      "english": "Power doubles and type varies in each weather."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "312": {
    "name": {
      "english": "Aromatherapy"
    },
    "description": {
      "english": "Every Pokemon in the user´s party is cured of its major status condition. Active Pokemon with the Sap Sipper Ability are not cured, unless they are the user."
    },
    "shortDescription": {
      "english": "Cures the user´s party of all status conditions."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allyTeam",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "313": {
    "name": {
      "english": "Fake Tears"
    },
    "description": {
      "english": "Lowers the target´s Special Defense by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Sp. Def by 2."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "314": {
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
  "315": {
    "name": {
      "english": "Overheat"
    },
    "description": {
      "english": "Lowers the user´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the user´s Sp. Atk by 2."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 130,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "316": {
    "name": {
      "english": "Odor Sleuth"
    },
    "description": {
      "english": "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Foresight or Miracle Eye."
    },
    "shortDescription": {
      "english": "Fighting, Normal hit Ghost. Evasiveness ignored."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "317": {
    "name": {
      "english": "Rock Tomb"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Speed by 1."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 60,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "318": {
    "name": {
      "english": "Silver Wind"
    },
    "description": {
      "english": "Has a 10% chance to raise the user´s Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to raise all stats by 1 (not acc/eva)."
    },
    "category": "Special",
    "type": "Bug",
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
  "319": {
    "name": {
      "english": "Metal Sound"
    },
    "description": {
      "english": "Lowers the target´s Special Defense by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Sp. Def by 2."
    },
    "category": "Status",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "320": {
    "name": {
      "english": "Grass Whistle"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Causes the target to fall asleep."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 55,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "321": {
    "name": {
      "english": "Tickle"
    },
    "description": {
      "english": "Lowers the target´s Attack and Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack and Defense by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "322": {
    "name": {
      "english": "Cosmic Power"
    },
    "description": {
      "english": "Raises the user´s Defense and Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense and Sp. Def by 1."
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
  "323": {
    "name": {
      "english": "Water Spout"
    },
    "description": {
      "english": "Power is equal to (user´s current HP * 150 / user´s maximum HP), rounded down, but not less than 1."
    },
    "shortDescription": {
      "english": "Less power as user´s HP decreases. Hits foe(s)."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 150,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "324": {
    "name": {
      "english": "Signal Beam"
    },
    "description": {
      "english": "Has a 10% chance to confuse the target."
    },
    "shortDescription": {
      "english": "10% chance to confuse the target."
    },
    "category": "Special",
    "type": "Bug",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "325": {
    "name": {
      "english": "Shadow Punch"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "326": {
    "name": {
      "english": "Extrasensory"
    },
    "description": {
      "english": "Has a 10% chance to flinch the target."
    },
    "shortDescription": {
      "english": "10% chance to flinch the target."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 80,
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
  "327": {
    "name": {
      "english": "Sky Uppercut"
    },
    "description": {
      "english": "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop."
    },
    "shortDescription": {
      "english": "Can hit Pokemon using Bounce, Fly, or Sky Drop."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 85,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "328": {
    "name": {
      "english": "Sand Tomb"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 35,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "329": {
    "name": {
      "english": "Sheer Cold"
    },
    "description": {
      "english": "Deals damage to the target equal to the target´s maximum HP. Ignores accuracy and evasiveness modifiers. This attack´s accuracy is equal to (user´s level - target´s level + X)%, where X is 30 if the user is an Ice type and 20 otherwise, and fails if the target is at a higher level. Ice-type Pokemon and Pokemon with the Sturdy Ability are immune."
    },
    "shortDescription": {
      "english": "OHKOs non-Ice targets. Fails if user´s lower level."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 0,
    "accuracy": 30,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "330": {
    "name": {
      "english": "Muddy Water"
    },
    "description": {
      "english": "Has a 30% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "30% chance to lower the foe(s) accuracy by 1."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 90,
    "accuracy": 85,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "331": {
    "name": {
      "english": "Bullet Seed"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 25,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "332": {
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
  "333": {
    "name": {
      "english": "Icicle Spear"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 25,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "334": {
    "name": {
      "english": "Iron Defense"
    },
    "description": {
      "english": "Raises the user´s Defense by 2 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense by 2."
    },
    "category": "Status",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "335": {
    "name": {
      "english": "Block"
    },
    "description": {
      "english": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field."
    },
    "shortDescription": {
      "english": "Prevents the target from switching out."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeReflected": true
    }
  },
  "336": {
    "name": {
      "english": "Howl"
    },
    "description": {
      "english": "Raises the user´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "337": {
    "name": {
      "english": "Dragon Claw"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Dragon",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "338": {
    "name": {
      "english": "Frenzy Plant"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "339": {
    "name": {
      "english": "Bulk Up"
    },
    "description": {
      "english": "Raises the user´s Attack and Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack and Defense by 1."
    },
    "category": "Status",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "340": {
    "name": {
      "english": "Bounce"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Bounces turn 1. Hits turn 2. 30% paralyze."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 85,
    "accuracy": 85,
    "priority": 0,
    "target": "any",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "mustBeCharged": true,
      "isAffectedByGravity": true,
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "341": {
    "name": {
      "english": "Mud Shot"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Speed by 1."
    },
    "category": "Special",
    "type": "Ground",
    "basePower": 55,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "342": {
    "name": {
      "english": "Poison Tail"
    },
    "description": {
      "english": "Has a 10% chance to poison the target and a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio. 10% chance to poison."
    },
    "category": "Physical",
    "type": "Poison",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "343": {
    "name": {
      "english": "Covet"
    },
    "description": {
      "english": "If this attack was successful and the user has not fainted, it steals the target´s held item if the user is not holding one. The target´s item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability."
    },
    "shortDescription": {
      "english": "If the user has no item, it steals the target´s."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "344": {
    "name": {
      "english": "Volt Tackle"
    },
    "description": {
      "english": "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 33% recoil. 10% chance to paralyze target."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "345": {
    "name": {
      "english": "Magical Leaf"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "346": {
    "name": {
      "english": "Water Sport"
    },
    "description": {
      "english": "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active."
    },
    "shortDescription": {
      "english": "For 5 turns, Fire-type attacks have 1/3 power."
    },
    "category": "Status",
    "type": "Water",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {}
  },
  "347": {
    "name": {
      "english": "Calm Mind"
    },
    "description": {
      "english": "Raises the user´s Special Attack and Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Sp. Atk and Sp. Def by 1."
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
    },
    "viable": true
  },
  "348": {
    "name": {
      "english": "Leaf Blade"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "349": {
    "name": {
      "english": "Dragon Dance"
    },
    "description": {
      "english": "Raises the user´s Attack and Speed by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack and Speed by 1."
    },
    "category": "Status",
    "type": "Dragon",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "350": {
    "name": {
      "english": "Rock Blast"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 25,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "351": {
    "name": {
      "english": "Shock Wave"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "352": {
    "name": {
      "english": "Water Pulse"
    },
    "description": {
      "english": "Has a 20% chance to confuse the target."
    },
    "shortDescription": {
      "english": "20% chance to confuse the target."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true,
      "isPulseMove": true
    }
  },
  "354": {
    "name": {
      "english": "Psycho Boost"
    },
    "description": {
      "english": "Lowers the user´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the user´s Sp. Atk by 2."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 140,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "355": {
    "name": {
      "english": "Roost"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half up. Until the end of the turn, Flying-type users lose their Flying type and pure Flying-type users become Normal type. Does nothing if the user´s HP is full."
    },
    "shortDescription": {
      "english": "Heals 50% HP. Flying-type removed ´til turn ends."
    },
    "category": "Status",
    "type": "Flying",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "356": {
    "name": {
      "english": "Gravity"
    },
    "description": {
      "english": "For 5 turns, the evasiveness of all active Pokemon is multiplied by 0.6. At the time of use, Bounce, Fly, Magnet Rise, Sky Drop, and Telekinesis end immediately for all active Pokemon. During the effect, Bounce, Fly, Flying Press, High Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash, and Telekinesis are prevented from being used by all active Pokemon. Ground-type attacks, Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability can affect Flying types or Pokemon with the Levitate Ability. Fails if this move is already in effect."
    },
    "shortDescription": {
      "english": "For 5 turns, negates all Ground immunities."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {}
  },
  "357": {
    "name": {
      "english": "Miracle Eye"
    },
    "description": {
      "english": "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Psychic-type attacks can hit the target if it is a Dark type. Fails if the target is already affected, or affected by Foresight or Odor Sleuth."
    },
    "shortDescription": {
      "english": "Psychic hits Dark. Evasiveness ignored."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "358": {
    "name": {
      "english": "Wake-Up Slap"
    },
    "description": {
      "english": "Power doubles if the target is asleep. If the user has not fainted, the target wakes up."
    },
    "shortDescription": {
      "english": "Power doubles if target is asleep, and wakes it."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "359": {
    "name": {
      "english": "Hammer Arm"
    },
    "description": {
      "english": "Lowers the user´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Speed by 1."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 100,
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
  "360": {
    "name": {
      "english": "Gyro Ball"
    },
    "description": {
      "english": "Power is equal to (25 * target´s current Speed / user´s current Speed) + 1, rounded down, but not more than 150. If the user´s current Speed is 0, this move´s power is 1."
    },
    "shortDescription": {
      "english": "More power the slower the user than the target."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "361": {
    "name": {
      "english": "Healing Wish"
    },
    "description": {
      "english": "The user faints and the Pokemon brought out to replace it has its HP fully restored along with having any major status condition cured. The new Pokemon is sent out at the end of the turn, and the healing happens before hazards take effect. Fails if the user is the last unfainted Pokemon in its party."
    },
    "shortDescription": {
      "english": "User faints. Replacement is fully healed."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "362": {
    "name": {
      "english": "Brine"
    },
    "description": {
      "english": "Power doubles if the target has less than or equal to half of its maximum HP remaining."
    },
    "shortDescription": {
      "english": "Power doubles if the target´s HP is 50% or less."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "363": {
    "name": {
      "english": "Natural Gift"
    },
    "description": {
      "english": "The type and power of this move depend on the user´s held Berry, and the Berry is lost. Fails if the user is not holding a Berry, if the user has the Klutz Ability, or if Embargo or Magic Room is in effect for the user."
    },
    "shortDescription": {
      "english": "Power and type depends on the user´s Berry."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "364": {
    "name": {
      "english": "Feint"
    },
    "description": {
      "english": "If this move is successful, it breaks through the target´s Baneful Bunker, Detect, King´s Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target´s side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target´s side normally."
    },
    "shortDescription": {
      "english": "Nullifies Detect, Protect, and Quick/Wide Guard."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 30,
    "accuracy": 100,
    "priority": 2,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "365": {
    "name": {
      "english": "Pluck"
    },
    "description": {
      "english": "If this move is successful and the user has not fainted, it steals the target´s held Berry if it is holding one and eats it immediately, gaining its effects even if the user´s item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability."
    },
    "shortDescription": {
      "english": "User steals and eats the target´s Berry."
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
    }
  },
  "366": {
    "name": {
      "english": "Tailwind"
    },
    "description": {
      "english": "For 4 turns, the user and its party members have their Speed doubled. Fails if this move is already in effect for the user´s side."
    },
    "shortDescription": {
      "english": "For 4 turns, allies´ Speed is doubled."
    },
    "category": "Status",
    "type": "Flying",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "367": {
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
  "368": {
    "name": {
      "english": "Metal Burst"
    },
    "description": {
      "english": "Deals damage to the last opposing Pokemon to hit the user with an attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon´s position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon´s attack this turn."
    },
    "shortDescription": {
      "english": "If hit by an attack, returns 1.5x damage."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "scripted",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "369": {
    "name": {
      "english": "U-turn"
    },
    "description": {
      "english": "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selectedTeamPokemon party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities."
    },
    "shortDescription": {
      "english": "User switches out after damaging the target."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "370": {
    "name": {
      "english": "Close Combat"
    },
    "description": {
      "english": "Lowers the user´s Defense and Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Defense and Sp. Def by 1."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "371": {
    "name": {
      "english": "Payback"
    },
    "description": {
      "english": "Power doubles if the user moves after the target this turn, including actions taken through Instruct or the Dancer Ability. Switching in does not count as an action."
    },
    "shortDescription": {
      "english": "Power doubles if the user moves after the target."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "372": {
    "name": {
      "english": "Assurance"
    },
    "description": {
      "english": "Power doubles if the target has already taken damage this turn, other than direct damage from Belly Drum, confusion, Curse, or Pain Split."
    },
    "shortDescription": {
      "english": "Power doubles if target was damaged this turn."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "373": {
    "name": {
      "english": "Embargo"
    },
    "description": {
      "english": "For 5 turns, the target´s held item has no effect. An item´s effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by the target. Items thrown at the target with Fling will still activate for it. If the target uses Baton Pass, the replacement will remain unable to use items."
    },
    "shortDescription": {
      "english": "For 5 turns, the target´s item has no effect."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "374": {
    "name": {
      "english": "Fling"
    },
    "description": {
      "english": "The power of this move is based on the user´s held item. The held item is lost and it activates for the target if applicable. If there is no target or the target avoids this move by protecting itself, the user´s held item is still lost. The user can regain a thrown item with Recycle or the Harvest Ability. Fails if the user has no held item, if the held item cannot be thrown, if the user is under the effect of Embargo or Magic Room, or if the user has the Klutz Ability."
    },
    "shortDescription": {
      "english": "Flings the user´s item at the target. Power varies."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "375": {
    "name": {
      "english": "Psycho Shift"
    },
    "description": {
      "english": "The user´s major status condition is transferred to the target, and the user is then cured. Fails if the user has no major status condition or if the target already has one."
    },
    "shortDescription": {
      "english": "Transfers the user´s status ailment to the target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "376": {
    "name": {
      "english": "Trump Card"
    },
    "description": {
      "english": "The power of this move is based on the amount of PP remaining after normal PP reduction and the Pressure Ability resolve. 200 power for 0 PP, 80 power for 1 PP, 60 power for 2 PP, 50 power for 3 PP, and 40 power for 4 or more PP."
    },
    "shortDescription": {
      "english": "More power the fewer PP this move has left."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "377": {
    "name": {
      "english": "Heal Block"
    },
    "description": {
      "english": "For 5 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected."
    },
    "shortDescription": {
      "english": "For 5 turns, the foe(s) is prevented from healing."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "378": {
    "name": {
      "english": "Wring Out"
    },
    "description": {
      "english": "Power is equal to 120 * (target´s current HP / target´s maximum HP), rounded half down, but not less than 1."
    },
    "shortDescription": {
      "english": "More power the more HP the target has left."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "379": {
    "name": {
      "english": "Power Trick"
    },
    "description": {
      "english": "The user swaps its Attack and Defense stats, and stat stage changes remain on their respective stats. This move can be used again to swap the stats back. If the user uses Baton Pass, the replacement will have its Attack and Defense stats swapped if the effect is active. If the user has its stats recalculated by changing forme while its stats are swapped, this effect is ignored but is still active for the purposes of Baton Pass."
    },
    "shortDescription": {
      "english": "Switches user´s Attack and Defense stats."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "380": {
    "name": {
      "english": "Gastro Acid"
    },
    "description": {
      "english": "Causes the target´s Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target´s Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this move fails, and receiving the effect through Baton Pass ends the effect immediately."
    },
    "shortDescription": {
      "english": "Nullifies the target´s Ability."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "381": {
    "name": {
      "english": "Lucky Chant"
    },
    "description": {
      "english": "For 5 turns, the user and its party members cannot be struck by a critical hit. Fails if the effect is already active on the user´s side."
    },
    "shortDescription": {
      "english": "For 5 turns, shields user´s party from critical hits."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true
    }
  },
  "382": {
    "name": {
      "english": "Me First"
    },
    "description": {
      "english": "The user uses the move the target chose for use this turn against it, if possible, with its power multiplied by 1.5. The move must be a damaging move other than Beak Blast, Chatter, Counter, Covet, Focus Punch, Me First, Metal Burst, Mirror Coat, Shell Trap, Struggle, Thief, or any Z-Move. Fails if the target moves before the user. Ignores the target´s substitute for the purpose of copying the move."
    },
    "shortDescription": {
      "english": "Copies a foe at 1.5x power. User must be faster."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "adjacentFoe",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "383": {
    "name": {
      "english": "Copycat"
    },
    "description": {
      "english": "The user uses the last move used by any Pokemon, including itself. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dragon Tail, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King´s Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move."
    },
    "shortDescription": {
      "english": "Uses the last move used in the battle."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "384": {
    "name": {
      "english": "Power Swap"
    },
    "description": {
      "english": "The user swaps its Attack and Special Attack stat stage changes with the target."
    },
    "shortDescription": {
      "english": "Swaps Attack and Sp. Atk stat stages with target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "385": {
    "name": {
      "english": "Guard Swap"
    },
    "description": {
      "english": "The user swaps its Defense and Special Defense stat stage changes with the target."
    },
    "shortDescription": {
      "english": "Swaps Defense and Sp. Def changes with target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "386": {
    "name": {
      "english": "Punishment"
    },
    "description": {
      "english": "Power is equal to 60+(X*20), where X is the target´s total stat stage changes that are greater than 0, but not more than 200 power."
    },
    "shortDescription": {
      "english": "60 power +20 for each of the target´s stat boosts."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "387": {
    "name": {
      "english": "Last Resort"
    },
    "description": {
      "english": "This move fails unless the user knows this move and at least one other move, and has used all the other moves it knows at least once each since it became active or Transformed."
    },
    "shortDescription": {
      "english": "Fails unless each known move has been used."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 140,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "388": {
    "name": {
      "english": "Worry Seed"
    },
    "description": {
      "english": "Causes the target´s Ability to become Insomnia. Fails if the target´s Ability is Battle Bond, Comatose, Disguise, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode."
    },
    "shortDescription": {
      "english": "The target´s Ability becomes Insomnia."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "389": {
    "name": {
      "english": "Sucker Punch"
    },
    "description": {
      "english": "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user."
    },
    "shortDescription": {
      "english": "Usually goes first. Fails if target is not attacking."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 70,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "390": {
    "name": {
      "english": "Toxic Spikes"
    },
    "description": {
      "english": "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not."
    },
    "shortDescription": {
      "english": "Poisons grounded foes on switch-in. Max 2 layers."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "foeSide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true
    },
    "viable": true
  },
  "391": {
    "name": {
      "english": "Heart Swap"
    },
    "description": {
      "english": "The user swaps all its stat stage changes with the target."
    },
    "shortDescription": {
      "english": "Swaps all stat changes with target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "392": {
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
  "393": {
    "name": {
      "english": "Magnet Rise"
    },
    "description": {
      "english": "For 5 turns, the user is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the user uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the user is under any of their effects. Fails if the user is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows."
    },
    "shortDescription": {
      "english": "For 5 turns, the user has immunity to Ground."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isAffectedByGravity": true,
      "canBeSnatched": true
    }
  },
  "394": {
    "name": {
      "english": "Flare Blitz"
    },
    "description": {
      "english": "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 33% recoil. 10% chance to burn. Thaws user."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "395": {
    "name": {
      "english": "Force Palm"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "30% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "396": {
    "name": {
      "english": "Aura Sphere"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Special",
    "type": "Fighting",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "isPulseMove": true
    },
    "viable": true
  },
  "397": {
    "name": {
      "english": "Rock Polish"
    },
    "description": {
      "english": "Raises the user´s Speed by 2 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Speed by 2."
    },
    "category": "Status",
    "type": "Rock",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "398": {
    "name": {
      "english": "Poison Jab"
    },
    "description": {
      "english": "Has a 30% chance to poison the target."
    },
    "shortDescription": {
      "english": "30% chance to poison the target."
    },
    "category": "Physical",
    "type": "Poison",
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
  "399": {
    "name": {
      "english": "Dark Pulse"
    },
    "description": {
      "english": "Has a 20% chance to flinch the target."
    },
    "shortDescription": {
      "english": "20% chance to flinch the target."
    },
    "category": "Special",
    "type": "Dark",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true,
      "isPulseMove": true
    },
    "viable": true
  },
  "400": {
    "name": {
      "english": "Night Slash"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "401": {
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
  "402": {
    "name": {
      "english": "Seed Bomb"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "403": {
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
  "404": {
    "name": {
      "english": "X-Scissor"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "405": {
    "name": {
      "english": "Bug Buzz"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Bug",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "406": {
    "name": {
      "english": "Dragon Pulse"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 85,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "isPulseMove": true
    },
    "viable": true
  },
  "407": {
    "name": {
      "english": "Dragon Rush"
    },
    "description": {
      "english": "Has a 20% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "20% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Dragon",
    "basePower": 100,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "408": {
    "name": {
      "english": "Power Gem"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Special",
    "type": "Rock",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "409": {
    "name": {
      "english": "Drain Punch"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 75,
    "accuracy": 100,
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
  "410": {
    "name": {
      "english": "Vacuum Wave"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Special",
    "type": "Fighting",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true
    }
  },
  "411": {
    "name": {
      "english": "Focus Blast"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Fighting",
    "basePower": 120,
    "accuracy": 70,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "412": {
    "name": {
      "english": "Energy Ball"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "413": {
    "name": {
      "english": "Brave Bird"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 33% recoil."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 120,
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
  "414": {
    "name": {
      "english": "Earth Power"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Ground",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "415": {
    "name": {
      "english": "Switcheroo"
    },
    "description": {
      "english": "The user swaps its held item with the target´s held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability."
    },
    "shortDescription": {
      "english": "User switches its held item with the target´s."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "416": {
    "name": {
      "english": "Giga Impact"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "417": {
    "name": {
      "english": "Nasty Plot"
    },
    "description": {
      "english": "Raises the user´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Sp. Atk by 2."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "418": {
    "name": {
      "english": "Bullet Punch"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "419": {
    "name": {
      "english": "Avalanche"
    },
    "description": {
      "english": "Power doubles if the user was hit by the target this turn."
    },
    "shortDescription": {
      "english": "Power doubles if user is damaged by the target."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 60,
    "accuracy": 100,
    "priority": -4,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "420": {
    "name": {
      "english": "Ice Shard"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "421": {
    "name": {
      "english": "Shadow Claw"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "422": {
    "name": {
      "english": "Thunder Fang"
    },
    "description": {
      "english": "Has a 10% chance to paralyze the target and a 10% chance to flinch it."
    },
    "shortDescription": {
      "english": "10% chance to paralyze. 10% chance to flinch."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 65,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "423": {
    "name": {
      "english": "Ice Fang"
    },
    "description": {
      "english": "Has a 10% chance to freeze the target and a 10% chance to flinch it."
    },
    "shortDescription": {
      "english": "10% chance to freeze. 10% chance to flinch."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 65,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "424": {
    "name": {
      "english": "Fire Fang"
    },
    "description": {
      "english": "Has a 10% chance to burn the target and a 10% chance to flinch it."
    },
    "shortDescription": {
      "english": "10% chance to burn. 10% chance to flinch."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 65,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "425": {
    "name": {
      "english": "Shadow Sneak"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "Usually goes first."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 40,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "426": {
    "name": {
      "english": "Mud Bomb"
    },
    "description": {
      "english": "Has a 30% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "30% chance to lower the target´s accuracy by 1."
    },
    "category": "Special",
    "type": "Ground",
    "basePower": 65,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "427": {
    "name": {
      "english": "Psycho Cut"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Psychic",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "428": {
    "name": {
      "english": "Zen Headbutt"
    },
    "description": {
      "english": "Has a 20% chance to flinch the target."
    },
    "shortDescription": {
      "english": "20% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Psychic",
    "basePower": 80,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "429": {
    "name": {
      "english": "Mirror Shot"
    },
    "description": {
      "english": "Has a 30% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "30% chance to lower the target´s accuracy by 1."
    },
    "category": "Special",
    "type": "Steel",
    "basePower": 65,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "430": {
    "name": {
      "english": "Flash Cannon"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Sp. Def by 1."
    },
    "category": "Special",
    "type": "Steel",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "431": {
    "name": {
      "english": "Rock Climb"
    },
    "description": {
      "english": "Has a 20% chance to confuse the target."
    },
    "shortDescription": {
      "english": "20% chance to confuse the target."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 90,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "432": {
    "name": {
      "english": "Defog"
    },
    "description": {
      "english": "Lowers the target´s evasiveness by 1 stage. If this move is successful and whether or not the target´s evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target´s side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user´s side. Ignores a target´s substitute, although a substitute will still block the lowering of evasiveness."
    },
    "shortDescription": {
      "english": "-1 evasion; clears user and target side´s hazards."
    },
    "category": "Status",
    "type": "Flying",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "433": {
    "name": {
      "english": "Trick Room"
    },
    "description": {
      "english": "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon´s Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends."
    },
    "shortDescription": {
      "english": "Goes last. For 5 turns, turn order is reversed."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": -7,
    "target": "all",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {}
  },
  "434": {
    "name": {
      "english": "Draco Meteor"
    },
    "description": {
      "english": "Lowers the user´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the user´s Sp. Atk by 2."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 130,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "435": {
    "name": {
      "english": "Discharge"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "30% chance to paralyze adjacent Pokemon."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "436": {
    "name": {
      "english": "Lava Plume"
    },
    "description": {
      "english": "Has a 30% chance to burn the target."
    },
    "shortDescription": {
      "english": "30% chance to burn adjacent Pokemon."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "437": {
    "name": {
      "english": "Leaf Storm"
    },
    "description": {
      "english": "Lowers the user´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the user´s Sp. Atk by 2."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 130,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "438": {
    "name": {
      "english": "Power Whip"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 120,
    "accuracy": 85,
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
  "439": {
    "name": {
      "english": "Rock Wrecker"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "440": {
    "name": {
      "english": "Cross Poison"
    },
    "description": {
      "english": "Has a 10% chance to poison the target and a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio. 10% chance to poison."
    },
    "category": "Physical",
    "type": "Poison",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "441": {
    "name": {
      "english": "Gunk Shot"
    },
    "description": {
      "english": "Has a 30% chance to poison the target."
    },
    "shortDescription": {
      "english": "30% chance to poison the target."
    },
    "category": "Physical",
    "type": "Poison",
    "basePower": 120,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "442": {
    "name": {
      "english": "Iron Head"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "443": {
    "name": {
      "english": "Magnet Bomb"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "444": {
    "name": {
      "english": "Stone Edge"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 100,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "445": {
    "name": {
      "english": "Captivate"
    },
    "description": {
      "english": "Lowers the target´s Special Attack by 2 stages. The target is unaffected if both the user and the target are the same gender, or if either is genderless. Pokemon with the Oblivious Ability are immune."
    },
    "shortDescription": {
      "english": "Lowers the foe(s) Sp. Atk by 2 if opposite gender."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "446": {
    "name": {
      "english": "Stealth Rock"
    },
    "description": {
      "english": "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog."
    },
    "shortDescription": {
      "english": "Hurts foes on switch-in. Factors Rock weakness."
    },
    "category": "Status",
    "type": "Rock",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "foeSide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true
    },
    "viable": true
  },
  "447": {
    "name": {
      "english": "Grass Knot"
    },
    "description": {
      "english": "This move´s power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg."
    },
    "shortDescription": {
      "english": "More power the heavier the target."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "448": {
    "name": {
      "english": "Chatter"
    },
    "description": {
      "english": "Has a 100% chance to confuse the target."
    },
    "shortDescription": {
      "english": "100% chance to confuse the target."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "449": {
    "name": {
      "english": "Judgment"
    },
    "description": {
      "english": "This move´s type depends on the user´s held Plate."
    },
    "shortDescription": {
      "english": "Type varies based on the held Plate."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "450": {
    "name": {
      "english": "Bug Bite"
    },
    "description": {
      "english": "If this move is successful and the user has not fainted, it steals the target´s held Berry if it is holding one and eats it immediately, gaining its effects even if the user´s item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability."
    },
    "shortDescription": {
      "english": "User steals and eats the target´s Berry."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 60,
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
  "451": {
    "name": {
      "english": "Charge Beam"
    },
    "description": {
      "english": "Has a 70% chance to raise the user´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "70% chance to raise the user´s Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 50,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "452": {
    "name": {
      "english": "Wood Hammer"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 33% recoil."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "453": {
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
  "454": {
    "name": {
      "english": "Attack Order"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "455": {
    "name": {
      "english": "Defend Order"
    },
    "description": {
      "english": "Raises the user´s Defense and Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense and Sp. Def by 1."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "456": {
    "name": {
      "english": "Heal Order"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half up."
    },
    "shortDescription": {
      "english": "Heals the user by 50% of its max HP."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "457": {
    "name": {
      "english": "Head Smash"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 1/2 recoil."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 150,
    "accuracy": 80,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "458": {
    "name": {
      "english": "Double Hit"
    },
    "description": {
      "english": "Hits twice. If the first hit breaks the target´s substitute, it will take damage for the second hit."
    },
    "shortDescription": {
      "english": "Hits 2 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 35,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "459": {
    "name": {
      "english": "Roar of Time"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 150,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "460": {
    "name": {
      "english": "Spacial Rend"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 100,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "461": {
    "name": {
      "english": "Lunar Dance"
    },
    "description": {
      "english": "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. The new Pokemon is sent out at the end of the turn, and the healing happens before hazards take effect. Fails if the user is the last unfainted Pokemon in its party."
    },
    "shortDescription": {
      "english": "User faints. Replacement is fully healed, with PP."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "462": {
    "name": {
      "english": "Crush Grip"
    },
    "description": {
      "english": "Power is equal to 120 * (target´s current HP / target´s maximum HP), rounded half down, but not less than 1."
    },
    "shortDescription": {
      "english": "More power the more HP the target has left."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "463": {
    "name": {
      "english": "Magma Storm"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 100,
    "accuracy": 75,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "464": {
    "name": {
      "english": "Dark Void"
    },
    "description": {
      "english": "Causes the target to fall asleep. This move cannot be used successfully unless the user´s current form, while considering Transform, is Darkrai."
    },
    "shortDescription": {
      "english": "Darkrai: Causes the foe(s) to fall asleep."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 50,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "465": {
    "name": {
      "english": "Seed Flare"
    },
    "description": {
      "english": "Has a 40% chance to lower the target´s Special Defense by 2 stages."
    },
    "shortDescription": {
      "english": "40% chance to lower the target´s Sp. Def by 2."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 120,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "466": {
    "name": {
      "english": "Ominous Wind"
    },
    "description": {
      "english": "Has a 10% chance to raise the user´s Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to raise all stats by 1 (not acc/eva)."
    },
    "category": "Special",
    "type": "Ghost",
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
  "467": {
    "name": {
      "english": "Shadow Force"
    },
    "description": {
      "english": "If this move is successful, it breaks through the target´s Baneful Bunker, Detect, King´s Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target´s side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target´s side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Disappears turn 1. Hits turn 2. Breaks protection."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "mustBeCharged": true,
      "isContactMove": true
    },
    "viable": true
  },
  "468": {
    "name": {
      "english": "Hone Claws"
    },
    "description": {
      "english": "Raises the user´s Attack and accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack and accuracy by 1."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "469": {
    "name": {
      "english": "Wide Guard"
    },
    "description": {
      "english": "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user´s side."
    },
    "shortDescription": {
      "english": "Protects allies from multi-target moves this turn."
    },
    "category": "Status",
    "type": "Rock",
    "basePower": 0,
    "accuracy": 100,
    "priority": 3,
    "target": "allySide",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "470": {
    "name": {
      "english": "Guard Split"
    },
    "description": {
      "english": "The user and the target have their Defense and Special Defense stats change to be equal to the average of the user and the target´s Defense and Special Defense stats, respectively, rounded down. Stat stage changes are unaffected."
    },
    "shortDescription": {
      "english": "Averages Defense and Sp. Def stats with target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "471": {
    "name": {
      "english": "Power Split"
    },
    "description": {
      "english": "The user and the target have their Attack and Special Attack stats change to be equal to the average of the user and the target´s Attack and Special Attack stats, respectively, rounded down. Stat stage changes are unaffected."
    },
    "shortDescription": {
      "english": "Averages Attack and Sp. Atk stats with target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "472": {
    "name": {
      "english": "Wonder Room"
    },
    "description": {
      "english": "For 5 turns, all active Pokemon have their Defense and Special Defense stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends."
    },
    "shortDescription": {
      "english": "For 5 turns, all Defense and Sp. Def stats switch."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "473": {
    "name": {
      "english": "Psyshock"
    },
    "description": {
      "english": "Deals damage to the target based on its Defense instead of Special Defense."
    },
    "shortDescription": {
      "english": "Damages target based on Defense, not Sp. Def."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "474": {
    "name": {
      "english": "Venoshock"
    },
    "description": {
      "english": "Power doubles if the target is poisoned."
    },
    "shortDescription": {
      "english": "Power doubles if the target is poisoned."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "475": {
    "name": {
      "english": "Autotomize"
    },
    "description": {
      "english": "Raises the user´s Speed by 2 stages. If the user´s Speed was changed, the user´s weight is reduced by 100 kg as long as it remains active. This effect is stackable but cannot reduce the user´s weight to less than 0.1 kg."
    },
    "shortDescription": {
      "english": "Raises the user´s Speed by 2; user loses 100 kg."
    },
    "category": "Status",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "476": {
    "name": {
      "english": "Rage Powder"
    },
    "description": {
      "english": "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop."
    },
    "shortDescription": {
      "english": "The foes´ moves target the user on the turn used."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 2,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {}
  },
  "477": {
    "name": {
      "english": "Telekinesis"
    },
    "description": {
      "english": "For 3 turns, the target cannot avoid any attacks made against it, other than OHKO moves, as long as it remains active. During the effect, the target is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the target uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the target is under any of their effects. Fails if the target is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows. The target is immune to this move on use if its species is Diglett, Dugtrio, Alolan Diglett, Alolan Dugtrio, Sandygast, Palossand, or Gengar while Mega-Evolved. Mega Gengar cannot be under this effect by any means."
    },
    "shortDescription": {
      "english": "For 3 turns, target floats but moves can´t miss it."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isAffectedByGravity": true,
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "478": {
    "name": {
      "english": "Magic Room"
    },
    "description": {
      "english": "For 5 turns, the held items of all active Pokemon have no effect. An item´s effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by all active Pokemon. If this move is used during the effect, the effect ends."
    },
    "shortDescription": {
      "english": "For 5 turns, all held items have no effect."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "479": {
    "name": {
      "english": "Smack Down"
    },
    "description": {
      "english": "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target."
    },
    "shortDescription": {
      "english": "Removes the target´s Ground immunity."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "480": {
    "name": {
      "english": "Storm Throw"
    },
    "description": {
      "english": "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities."
    },
    "shortDescription": {
      "english": "Always results in a critical hit."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "alwaysCrits": true
    },
    "viable": true
  },
  "481": {
    "name": {
      "english": "Flame Burst"
    },
    "description": {
      "english": "If this move is successful, the target´s ally loses 1/16 of its maximum HP, rounded down, unless it has the Magic Guard Ability."
    },
    "shortDescription": {
      "english": "Damages Pokemon next to the target as well."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "482": {
    "name": {
      "english": "Sludge Wave"
    },
    "description": {
      "english": "Has a 10% chance to poison the target."
    },
    "shortDescription": {
      "english": "10% chance to poison adjacent Pokemon."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 95,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "483": {
    "name": {
      "english": "Quiver Dance"
    },
    "description": {
      "english": "Raises the user´s Special Attack, Special Defense, and Speed by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Sp. Atk, Sp. Def, Speed by 1."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "484": {
    "name": {
      "english": "Heavy Slam"
    },
    "description": {
      "english": "The power of this move depends on (user´s weight / target´s weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "More power the heavier the user than the target."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
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
  "485": {
    "name": {
      "english": "Synchronoise"
    },
    "description": {
      "english": "The target is immune if it does not share a type with the user."
    },
    "shortDescription": {
      "english": "Hits adjacent Pokemon sharing the user´s type."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "486": {
    "name": {
      "english": "Electro Ball"
    },
    "description": {
      "english": "The power of this move depends on (user´s current Speed / target´s current Speed), rounded down. Power is equal to 150 if the result is 4 or more, 120 if 3, 80 if 2, 60 if 1, 40 if less than 1. If the target´s current Speed is 0, this move´s power is 40."
    },
    "shortDescription": {
      "english": "More power the faster the user is than the target."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "487": {
    "name": {
      "english": "Soak"
    },
    "description": {
      "english": "Causes the target to become a Water type. Fails if the target is an Arceus or a Silvally, or if the target is already purely Water type."
    },
    "shortDescription": {
      "english": "Changes the target´s type to Water."
    },
    "category": "Status",
    "type": "Water",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "488": {
    "name": {
      "english": "Flame Charge"
    },
    "description": {
      "english": "Has a 100% chance to raise the user´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to raise the user´s Speed by 1."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 50,
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
  "489": {
    "name": {
      "english": "Coil"
    },
    "description": {
      "english": "Raises the user´s Attack, Defense, and accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "Raises user´s Attack, Defense, accuracy by 1."
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
    },
    "viable": true
  },
  "490": {
    "name": {
      "english": "Low Sweep"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Speed by 1."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "491": {
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
  "492": {
    "name": {
      "english": "Foul Play"
    },
    "description": {
      "english": "Damage is calculated using the target´s Attack stat, including stat stage changes. The user´s Ability, item, and burn are used as normal."
    },
    "shortDescription": {
      "english": "Uses target´s Attack stat in damage calculation."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 95,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "493": {
    "name": {
      "english": "Simple Beam"
    },
    "description": {
      "english": "Causes the target´s Ability to become Simple. Fails if the target´s Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Truant, or Zen Mode."
    },
    "shortDescription": {
      "english": "The target´s Ability becomes Simple."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "494": {
    "name": {
      "english": "Entrainment"
    },
    "description": {
      "english": "Causes the target´s Ability to become the same as the user´s. Fails if the target´s Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or the same Ability as the user, or if the user´s Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, or Zen Mode."
    },
    "shortDescription": {
      "english": "The target´s Ability changes to match the user´s."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "495": {
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
  "496": {
    "name": {
      "english": "Round"
    },
    "description": {
      "english": "If there are other active Pokemon that chose this move for use this turn, those Pokemon take their turn immediately after the user, in Speed order, and this move´s power is 120 for each other user."
    },
    "shortDescription": {
      "english": "Power doubles if others used Round this turn."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "497": {
    "name": {
      "english": "Echoed Voice"
    },
    "description": {
      "english": "For every consecutive turn that this move is used by at least one Pokemon, this move´s power is multiplied by the number of turns to pass, but not more than 5."
    },
    "shortDescription": {
      "english": "Power increases when used on consecutive turns."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "498": {
    "name": {
      "english": "Chip Away"
    },
    "description": {
      "english": "Ignores the target´s stat stage changes, including evasiveness."
    },
    "shortDescription": {
      "english": "Ignores the target´s stat stage changes."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
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
  "499": {
    "name": {
      "english": "Clear Smog"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Resets all of the target´s stat stages to 0."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "500": {
    "name": {
      "english": "Stored Power"
    },
    "description": {
      "english": "Power is equal to 20+(X*20), where X is the user´s total stat stage changes that are greater than 0."
    },
    "shortDescription": {
      "english": " + 20 power for each of the user´s stat boosts."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 20,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "501": {
    "name": {
      "english": "Quick Guard"
    },
    "description": {
      "english": "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokemon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user´s side."
    },
    "shortDescription": {
      "english": "Protects allies from priority attacks this turn."
    },
    "category": "Status",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 3,
    "target": "allySide",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true
    }
  },
  "502": {
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
  "503": {
    "name": {
      "english": "Scald"
    },
    "description": {
      "english": "Has a 30% chance to burn the target. The target thaws out if it is frozen."
    },
    "shortDescription": {
      "english": "30% chance to burn the target. Thaws target."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "504": {
    "name": {
      "english": "Shell Smash"
    },
    "description": {
      "english": "Lowers the user´s Defense and Special Defense by 1 stage. Raises the user´s Attack, Special Attack, and Speed by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "505": {
    "name": {
      "english": "Heal Pulse"
    },
    "description": {
      "english": "The target restores 1/2 of its maximum HP, rounded half up. If the user has the Mega Launcher Ability, the target instead restores 3/4 of its maximum HP, rounded half down."
    },
    "shortDescription": {
      "english": "Heals the target by 50% of its max HP."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "isPulseMove": true
    }
  },
  "506": {
    "name": {
      "english": "Hex"
    },
    "description": {
      "english": "Power doubles if the target has a major status condition."
    },
    "shortDescription": {
      "english": "Power doubles if the target has a status ailment."
    },
    "category": "Special",
    "type": "Ghost",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "507": {
    "name": {
      "english": "Sky Drop"
    },
    "description": {
      "english": "This attack takes the target into the air with the user on the first turn and executes on the second. Pokemon weighing 200 kg or more cannot be lifted. On the first turn, the user and the target avoid all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister. The user and the target cannot make a move between turns, but the target can select a move to use. This move cannot damage Flying-type Pokemon. Fails on the first turn if the target is an ally, if the target has a substitute, or if the target is using Bounce, Dig, Dive, Fly, Phantom Force, Shadow Force, or Sky Drop."
    },
    "shortDescription": {
      "english": "User and foe fly up turn 1. Damages on turn 2."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "isAffectedByGravity": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "508": {
    "name": {
      "english": "Shift Gear"
    },
    "description": {
      "english": "Raises the user´s Speed by 2 stages and its Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Speed by 2 and Attack by 1."
    },
    "category": "Status",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "509": {
    "name": {
      "english": "Circle Throw"
    },
    "description": {
      "english": "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target is under the effect of Ingrain, has the Suction Cups Ability, or this move hit a substitute."
    },
    "shortDescription": {
      "english": "Forces the target to switch to a random ally."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 60,
    "accuracy": 90,
    "priority": -6,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "510": {
    "name": {
      "english": "Incinerate"
    },
    "description": {
      "english": "The target loses its held item if it is a Berry or a Gem. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item. Items lost to this move cannot be regained with Recycle or the Harvest Ability."
    },
    "shortDescription": {
      "english": "Destroys the foe(s) Berry/Gem."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "511": {
    "name": {
      "english": "Quash"
    },
    "description": {
      "english": "Causes the target to take its turn after all other Pokemon this turn, no matter the priority of its selectedTeamPokemon move. Fails if the target already moved this turn."
    },
    "shortDescription": {
      "english": "Forces the target to move last this turn."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "512": {
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
  "513": {
    "name": {
      "english": "Reflect Type"
    },
    "description": {
      "english": "Causes the user´s types to become the same as the current types of the target. If the target´s current types include typeless and a non-added type, typeless is ignored. If the target´s current types include typeless and an added type from Forest´s Curse or Trick-or-Treat, typeless is copied as the Normal type instead. Fails if the user is an Arceus or a Silvally, or if the target´s current type is typeless alone."
    },
    "shortDescription": {
      "english": "User becomes the same type as the target."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "514": {
    "name": {
      "english": "Retaliate"
    },
    "description": {
      "english": "Power doubles if one of the user´s party members fainted last turn."
    },
    "shortDescription": {
      "english": "Power doubles if an ally fainted last turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "515": {
    "name": {
      "english": "Final Gambit"
    },
    "description": {
      "english": "Deals damage to the target equal to the user´s current HP. If this move is successful, the user faints."
    },
    "shortDescription": {
      "english": "Does damage equal to the user´s HP. User faints."
    },
    "category": "Special",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "516": {
    "name": {
      "english": "Bestow"
    },
    "description": {
      "english": "The target receives the user´s held item. Fails if the user has no item or is holding a Mail or Z-Crystal, if the target is already holding an item, if the user is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, a Pokemon that can Mega Evolve holding the Mega Stone for its species, or if the target is one of those Pokemon and the user is holding the respective item."
    },
    "shortDescription": {
      "english": "User passes its held item to the target."
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
  "517": {
    "name": {
      "english": "Inferno"
    },
    "description": {
      "english": "Has a 100% chance to burn the target."
    },
    "shortDescription": {
      "english": "100% chance to burn the target."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 100,
    "accuracy": 50,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "518": {
    "name": {
      "english": "Water Pledge"
    },
    "description": {
      "english": "If one of the user´s allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user´s move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user´s side for 4 turns, which doubles secondary effect chances but does not stack with the Serene Grace Ability. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target´s side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user´s type is. This move does not consume the user´s Water Gem, and cannot be redirected by the Storm Drain Ability."
    },
    "shortDescription": {
      "english": "Use with Grass or Fire Pledge for added effect."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "519": {
    "name": {
      "english": "Fire Pledge"
    },
    "description": {
      "english": "If one of the user´s allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user´s move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target´s side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user´s side for 4 turns, which doubles secondary effect chances but does not stack with the Serene Grace Ability. When used as a combined move, this move gains STAB no matter what the user´s type is. This move does not consume the user´s Fire Gem."
    },
    "shortDescription": {
      "english": "Use with Grass or Water Pledge for added effect."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "520": {
    "name": {
      "english": "Grass Pledge"
    },
    "description": {
      "english": "If one of the user´s allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user´s move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target´s side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target´s side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user´s type is. This move does not consume the user´s Grass Gem."
    },
    "shortDescription": {
      "english": "Use with Fire or Water Pledge for added effect."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "521": {
    "name": {
      "english": "Volt Switch"
    },
    "description": {
      "english": "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selectedTeamPokemon party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities."
    },
    "shortDescription": {
      "english": "User switches out after damaging the target."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "522": {
    "name": {
      "english": "Struggle Bug"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the foe(s) Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Bug",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "523": {
    "name": {
      "english": "Bulldoze"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance lower adjacent Pkmn Speed by 1."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "524": {
    "name": {
      "english": "Frost Breath"
    },
    "description": {
      "english": "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities."
    },
    "shortDescription": {
      "english": "Always results in a critical hit."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 60,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "alwaysCrits": true
    }
  },
  "525": {
    "name": {
      "english": "Dragon Tail"
    },
    "description": {
      "english": "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Suction Cups Ability, or this move hit a substitute."
    },
    "shortDescription": {
      "english": "Forces the target to switch to a random ally."
    },
    "category": "Physical",
    "type": "Dragon",
    "basePower": 60,
    "accuracy": 90,
    "priority": -6,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "526": {
    "name": {
      "english": "Work Up"
    },
    "description": {
      "english": "Raises the user´s Attack and Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Raises the user´s Attack and Sp. Atk by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    }
  },
  "527": {
    "name": {
      "english": "Electroweb"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the foe(s) Speed by 1."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 55,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "528": {
    "name": {
      "english": "Wild Charge"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 1/4 recoil."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "529": {
    "name": {
      "english": "Drill Run"
    },
    "description": {
      "english": "Has a higher chance for a critical hit."
    },
    "shortDescription": {
      "english": "High critical hit ratio."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 80,
    "accuracy": 95,
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
  "530": {
    "name": {
      "english": "Dual Chop"
    },
    "description": {
      "english": "Hits twice. If the first hit breaks the target´s substitute, it will take damage for the second hit."
    },
    "shortDescription": {
      "english": "Hits 2 times in one turn."
    },
    "category": "Physical",
    "type": "Dragon",
    "basePower": 40,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "531": {
    "name": {
      "english": "Heart Stamp"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Psychic",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "532": {
    "name": {
      "english": "Horn Leech"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 75,
    "accuracy": 100,
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
  "533": {
    "name": {
      "english": "Sacred Sword"
    },
    "description": {
      "english": "Ignores the target´s stat stage changes, including evasiveness."
    },
    "shortDescription": {
      "english": "Ignores the target´s stat stage changes."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "534": {
    "name": {
      "english": "Razor Shell"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 75,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "535": {
    "name": {
      "english": "Heat Crash"
    },
    "description": {
      "english": "The power of this move depends on (user´s weight / target´s weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "More power the heavier the user than the target."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "536": {
    "name": {
      "english": "Leaf Tornado"
    },
    "description": {
      "english": "Has a 50% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to lower the target´s accuracy by 1."
    },
    "category": "Special",
    "type": "Grass",
    "basePower": 65,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "537": {
    "name": {
      "english": "Steamroller"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "538": {
    "name": {
      "english": "Cotton Guard"
    },
    "description": {
      "english": "Raises the user´s Defense by 3 stages."
    },
    "shortDescription": {
      "english": "Raises the user´s Defense by 3."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true,
      "affectsStats": true
    },
    "viable": true
  },
  "539": {
    "name": {
      "english": "Night Daze"
    },
    "description": {
      "english": "Has a 40% chance to lower the target´s accuracy by 1 stage."
    },
    "shortDescription": {
      "english": "40% chance to lower the target´s accuracy by 1."
    },
    "category": "Special",
    "type": "Dark",
    "basePower": 85,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "540": {
    "name": {
      "english": "Psystrike"
    },
    "description": {
      "english": "Deals damage to the target based on its Defense instead of Special Defense."
    },
    "shortDescription": {
      "english": "Damages target based on Defense, not Sp. Def."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "541": {
    "name": {
      "english": "Tail Slap"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times."
    },
    "shortDescription": {
      "english": "Hits 2-5 times in one turn."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 25,
    "accuracy": 85,
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
  "542": {
    "name": {
      "english": "Hurricane"
    },
    "description": {
      "english": "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move´s accuracy is 50%."
    },
    "shortDescription": {
      "english": "30% chance to confuse target. Can´t miss in rain."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 110,
    "accuracy": 70,
    "priority": 0,
    "target": "any",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "543": {
    "name": {
      "english": "Head Charge"
    },
    "description": {
      "english": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP."
    },
    "shortDescription": {
      "english": "Has 1/4 recoil."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "544": {
    "name": {
      "english": "Gear Grind"
    },
    "description": {
      "english": "Hits twice. If the first hit breaks the target´s substitute, it will take damage for the second hit."
    },
    "shortDescription": {
      "english": "Hits 2 times in one turn."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 50,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "545": {
    "name": {
      "english": "Searing Shot"
    },
    "description": {
      "english": "Has a 30% chance to burn the target."
    },
    "shortDescription": {
      "english": "30% chance to burn adjacent Pokemon."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "546": {
    "name": {
      "english": "Techno Blast"
    },
    "description": {
      "english": "This move´s type depends on the user´s held Drive."
    },
    "shortDescription": {
      "english": "Type varies based on the held Drive."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "547": {
    "name": {
      "english": "Relic Song"
    },
    "description": {
      "english": "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active."
    },
    "shortDescription": {
      "english": "10% chance to sleep foe(s). Meloetta transforms."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "548": {
    "name": {
      "english": "Secret Sword"
    },
    "description": {
      "english": "Deals damage to the target based on its Defense instead of Special Defense."
    },
    "shortDescription": {
      "english": "Damages target based on Defense, not Sp. Def."
    },
    "category": "Special",
    "type": "Fighting",
    "basePower": 85,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "549": {
    "name": {
      "english": "Glaciate"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the foe(s) Speed by 1."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 65,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "550": {
    "name": {
      "english": "Bolt Strike"
    },
    "description": {
      "english": "Has a 20% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "20% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 130,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "551": {
    "name": {
      "english": "Blue Flare"
    },
    "description": {
      "english": "Has a 20% chance to burn the target."
    },
    "shortDescription": {
      "english": "20% chance to burn the target."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 130,
    "accuracy": 85,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "552": {
    "name": {
      "english": "Fiery Dance"
    },
    "description": {
      "english": "Has a 50% chance to raise the user´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "50% chance to raise the user´s Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "553": {
    "name": {
      "english": "Freeze Shock"
    },
    "description": {
      "english": "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges turn 1. Hits turn 2. 30% paralyze."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 140,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "mustBeCharged": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "554": {
    "name": {
      "english": "Ice Burn"
    },
    "description": {
      "english": "Has a 30% chance to burn the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges turn 1. Hits turn 2. 30% burn."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 140,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "mustBeCharged": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "555": {
    "name": {
      "english": "Snarl"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the foe(s) Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Dark",
    "basePower": 55,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "556": {
    "name": {
      "english": "Icicle Crash"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 85,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "557": {
    "name": {
      "english": "V-create"
    },
    "description": {
      "english": "Lowers the user´s Speed, Defense, and Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Defense, Sp. Def, Speed by 1."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 180,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "558": {
    "name": {
      "english": "Fusion Flare"
    },
    "description": {
      "english": "Power doubles if the last move used by any Pokemon this turn was Fusion Bolt."
    },
    "shortDescription": {
      "english": "Power doubles if used after Fusion Bolt."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "559": {
    "name": {
      "english": "Fusion Bolt"
    },
    "description": {
      "english": "Power doubles if the last move used by any Pokemon this turn was Fusion Flare."
    },
    "shortDescription": {
      "english": "Power doubles if used after Fusion Flare."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "560": {
    "name": {
      "english": "Flying Press"
    },
    "description": {
      "english": "This move combines Flying in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active."
    },
    "shortDescription": {
      "english": "Combines Flying in its type effectiveness."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 100,
    "accuracy": 95,
    "priority": 0,
    "target": "any",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isAffectedByGravity": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "561": {
    "name": {
      "english": "Mat Block"
    },
    "description": {
      "english": "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn. Fails unless it is the user´s first turn on the field, if the user moves last this turn, or if this move is already in effect for the user´s side."
    },
    "shortDescription": {
      "english": "Protects allies from attacks. First turn out only."
    },
    "category": "Status",
    "type": "Fighting",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    }
  },
  "562": {
    "name": {
      "english": "Belch"
    },
    "description": {
      "english": "This move cannot be selectedTeamPokemon until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokemon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selectedTeamPokemon and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one."
    },
    "shortDescription": {
      "english": "Cannot be selectedTeamPokemon until the user eats a Berry."
    },
    "category": "Special",
    "type": "Poison",
    "basePower": 120,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "563": {
    "name": {
      "english": "Rototiller"
    },
    "description": {
      "english": "Raises the Attack and Special Attack of all grounded Grass-type Pokemon on the field by 1 stage."
    },
    "shortDescription": {
      "english": "Raises Atk/Sp. Atk of grounded Grass types by 1."
    },
    "category": "Status",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "564": {
    "name": {
      "english": "Sticky Web"
    },
    "description": {
      "english": "Sets up a hazard on the opposing side of the field, lowering the Speed by 1 stage of each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog."
    },
    "shortDescription": {
      "english": "Lowers Speed of grounded foes by 1 on switch-in."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "foeSide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true
    },
    "viable": true
  },
  "565": {
    "name": {
      "english": "Fell Stinger"
    },
    "description": {
      "english": "Raises the user´s Attack by 3 stages if this move knocks out the target."
    },
    "shortDescription": {
      "english": "Raises user´s Attack by 3 if this KOes the target."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "566": {
    "name": {
      "english": "Phantom Force"
    },
    "description": {
      "english": "If this move is successful, it breaks through the target´s Baneful Bunker, Detect, King´s Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target´s side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target´s side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Disappears turn 1. Hits turn 2. Breaks protection."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "isContactMove": true
    }
  },
  "567": {
    "name": {
      "english": "Trick-or-Treat"
    },
    "description": {
      "english": "Causes the Ghost type to be added to the target, effectively making it have two or three types. Fails if the target is already a Ghost type. If Forest´s Curse adds a type to the target, it replaces the type added by this move and vice versa."
    },
    "shortDescription": {
      "english": "Adds Ghost to the target´s type(s)."
    },
    "category": "Status",
    "type": "Ghost",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "568": {
    "name": {
      "english": "Noble Roar"
    },
    "description": {
      "english": "Lowers the target´s Attack and Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack and Sp. Atk by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "569": {
    "name": {
      "english": "Ion Deluge"
    },
    "description": {
      "english": "Causes Normal-type moves to become Electric type this turn. The effect happens after other effects that change a move´s type."
    },
    "shortDescription": {
      "english": "Normal moves become Electric type this turn."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 1,
    "target": "all",
    "powerPoints": 25,
    "maxPowerPoints": 40,
    "flags": {}
  },
  "570": {
    "name": {
      "english": "Parabolic Charge"
    },
    "description": {
      "english": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 50% of the damage dealt."
    },
    "category": "Special",
    "type": "Electric",
    "basePower": 65,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "572": {
    "name": {
      "english": "Petal Blizzard"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent Pokemon."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "573": {
    "name": {
      "english": "Freeze-Dry"
    },
    "description": {
      "english": "Has a 10% chance to freeze the target. This move´s type effectiveness against Water is changed to be super effective no matter what this move´s type is."
    },
    "shortDescription": {
      "english": "10% chance to freeze. Super effective on Water."
    },
    "category": "Special",
    "type": "Ice",
    "basePower": 70,
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
  "574": {
    "name": {
      "english": "Disarming Voice"
    },
    "description": {
      "english": "This move does not check accuracy."
    },
    "shortDescription": {
      "english": "This move does not check accuracy. Hits foes."
    },
    "category": "Special",
    "type": "Fairy",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "575": {
    "name": {
      "english": "Parting Shot"
    },
    "description": {
      "english": "Lowers the target´s Attack and Special Attack by 1 stage. If this move is successful, the user switches out even if it is trapped and is replaced immediately by a selectedTeamPokemon party member. The user does not switch out if the target´s Attack and Special Attack stat stages were both unchanged, or if there are no unfainted party members."
    },
    "shortDescription": {
      "english": "Lowers target´s Atk, Sp. Atk by 1. User switches."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    },
    "viable": true
  },
  "576": {
    "name": {
      "english": "Topsy-Turvy"
    },
    "description": {
      "english": "The target´s positive stat stages become negative and vice versa. Fails if all of the target´s stat stages are 0."
    },
    "shortDescription": {
      "english": "Inverts the target´s stat stages."
    },
    "category": "Status",
    "type": "Dark",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "577": {
    "name": {
      "english": "Draining Kiss"
    },
    "description": {
      "english": "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 75% of the damage dealt."
    },
    "category": "Special",
    "type": "Fairy",
    "basePower": 50,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "578": {
    "name": {
      "english": "Crafty Shield"
    },
    "description": {
      "english": "The user and its party members are protected from non-damaging attacks made by other Pokemon, including allies, during this turn. Fails if the user moves last this turn or if this move is already in effect for the user´s side."
    },
    "shortDescription": {
      "english": "Protects allies from Status moves this turn."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 3,
    "target": "allySide",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "579": {
    "name": {
      "english": "Flower Shield"
    },
    "description": {
      "english": "Raises the Defense of all active Grass-type Pokemon by 1 stage. Fails if there are no active Grass-type Pokemon."
    },
    "shortDescription": {
      "english": "Raises Defense by 1 of all active Grass types."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "580": {
    "name": {
      "english": "Grassy Terrain"
    },
    "description": {
      "english": "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.5, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain."
    },
    "shortDescription": {
      "english": "5 turns. Grounded: +Grass power, +1/16 max HP."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "581": {
    "name": {
      "english": "Misty Terrain"
    },
    "description": {
      "english": "For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokemon is multiplied by 0.5 and grounded Pokemon cannot be inflicted with a major status condition nor confusion. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain."
    },
    "shortDescription": {
      "english": "5 turns. Can´t status,-Dragon power vs grounded."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "582": {
    "name": {
      "english": "Electrify"
    },
    "description": {
      "english": "Causes the target´s move to become Electric type this turn. Among effects that can change a move´s type, this effect happens last. Fails if the target already moved this turn."
    },
    "shortDescription": {
      "english": "Changes the target´s move to Electric this turn."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    }
  },
  "583": {
    "name": {
      "english": "Play Rough"
    },
    "description": {
      "english": "Has a 10% chance to lower the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "10% chance to lower the target´s Attack by 1."
    },
    "category": "Physical",
    "type": "Fairy",
    "basePower": 90,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "584": {
    "name": {
      "english": "Fairy Wind"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Special",
    "type": "Fairy",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true
    }
  },
  "585": {
    "name": {
      "english": "Moonblast"
    },
    "description": {
      "english": "Has a 30% chance to lower the target´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "30% chance to lower the target´s Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Fairy",
    "basePower": 95,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "586": {
    "name": {
      "english": "Boomburst"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent Pokemon."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 140,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "587": {
    "name": {
      "english": "Fairy Lock"
    },
    "description": {
      "english": "Prevents all active Pokemon from switching next turn. A Pokemon can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. Fails if the effect is already active."
    },
    "shortDescription": {
      "english": "Prevents all Pokemon from switching next turn."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "589": {
    "name": {
      "english": "Play Nice"
    },
    "description": {
      "english": "Lowers the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "590": {
    "name": {
      "english": "Confide"
    },
    "description": {
      "english": "Lowers the target´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s Sp. Atk by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "591": {
    "name": {
      "english": "Diamond Storm"
    },
    "description": {
      "english": "Has a 50% chance to raise the user´s Defense by 2 stages."
    },
    "shortDescription": {
      "english": "50% chance to raise user´s Def by 2 for each hit."
    },
    "category": "Physical",
    "type": "Rock",
    "basePower": 100,
    "accuracy": 95,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "592": {
    "name": {
      "english": "Steam Eruption"
    },
    "description": {
      "english": "Has a 30% chance to burn the target. The target thaws out if it is frozen."
    },
    "shortDescription": {
      "english": "30% chance to burn the target."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 110,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "593": {
    "name": {
      "english": "Hyperspace Hole"
    },
    "description": {
      "english": "If this move is successful, it breaks through the target´s Baneful Bunker, Detect, King´s Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target´s side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target´s side normally."
    },
    "shortDescription": {
      "english": "Breaks the target´s protection for this turn."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {}
  },
  "594": {
    "name": {
      "english": "Water Shuriken"
    },
    "description": {
      "english": "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target´s substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times."
    },
    "shortDescription": {
      "english": "Usually goes first. Hits 2-5 times in one turn."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 15,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "595": {
    "name": {
      "english": "Mystical Fire"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Sp. Atk by 1."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "596": {
    "name": {
      "english": "Spiky Shield"
    },
    "description": {
      "english": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn."
    },
    "shortDescription": {
      "english": "Protects from moves. Contact: loses 1/8 max HP."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {},
    "viable": true
  },
  "597": {
    "name": {
      "english": "Aromatic Mist"
    },
    "description": {
      "english": "Raises the target´s Special Defense by 1 stage. Fails if there is no ally adjacent to the user."
    },
    "shortDescription": {
      "english": "Raises an ally´s Sp. Def by 1."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "adjacentAlly",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "affectsStats": true
    }
  },
  "598": {
    "name": {
      "english": "Eerie Impulse"
    },
    "description": {
      "english": "Lowers the target´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the target´s Sp. Atk by 2."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "599": {
    "name": {
      "english": "Venom Drench"
    },
    "description": {
      "english": "Lowers the target´s Attack, Special Attack, and Speed by 1 stage if the target is poisoned. Fails if the target is not poisoned."
    },
    "shortDescription": {
      "english": "Lowers Atk/Sp. Atk/Speed of poisoned foes by 1."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "600": {
    "name": {
      "english": "Powder"
    },
    "description": {
      "english": "If the target uses a Fire-type move this turn, it is prevented from executing and the target loses 1/4 of its maximum HP, rounded half up. This effect does not happen if the Fire-type move is prevented by Primordial Sea."
    },
    "shortDescription": {
      "english": "If using a Fire move, target loses 1/4 max HP."
    },
    "category": "Status",
    "type": "Bug",
    "basePower": 0,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "601": {
    "name": {
      "english": "Geomancy"
    },
    "description": {
      "english": "Raises the user´s Special Attack, Special Defense, and Speed by 2 stages. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges, then raises SpA, SpD, Spe by 2 turn 2."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "affectsStats": true
    },
    "viable": true
  },
  "602": {
    "name": {
      "english": "Magnetic Flux"
    },
    "description": {
      "english": "Raises the Defense and Special Defense of Pokemon on the user´s side with the Plus or Minus Abilities by 1 stage."
    },
    "shortDescription": {
      "english": "Raises Def, Sp. Def of allies with Plus/Minus by 1."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true
    }
  },
  "603": {
    "name": {
      "english": "Happy Hour"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {}
  },
  "604": {
    "name": {
      "english": "Electric Terrain"
    },
    "description": {
      "english": "For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.5 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain."
    },
    "shortDescription": {
      "english": "5 turns. Grounded: +Electric power, can´t sleep."
    },
    "category": "Status",
    "type": "Electric",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "605": {
    "name": {
      "english": "Dazzling Gleam"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent foes."
    },
    "category": "Special",
    "type": "Fairy",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "606": {
    "name": {
      "english": "Celebrate"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {}
  },
  "608": {
    "name": {
      "english": "Baby-Doll Eyes"
    },
    "description": {
      "english": "Lowers the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack by 1."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 1,
    "target": "normal",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "609": {
    "name": {
      "english": "Nuzzle"
    },
    "description": {
      "english": "Has a 100% chance to paralyze the target."
    },
    "shortDescription": {
      "english": "100% chance to paralyze the target."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 20,
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
  "610": {
    "name": {
      "english": "Hold Back"
    },
    "description": {
      "english": "Leaves the target with at least 1 HP."
    },
    "shortDescription": {
      "english": "Always leaves the target with at least 1 HP."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "611": {
    "name": {
      "english": "Infestation"
    },
    "description": {
      "english": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move."
    },
    "shortDescription": {
      "english": "Traps and damages the target for 4-5 turns."
    },
    "category": "Special",
    "type": "Bug",
    "basePower": 20,
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
  "612": {
    "name": {
      "english": "Power-Up Punch"
    },
    "description": {
      "english": "Has a 100% chance to raise the user´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to raise the user´s Attack by 1."
    },
    "category": "Physical",
    "type": "Fighting",
    "basePower": 40,
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
  "613": {
    "name": {
      "english": "Oblivion Wing"
    },
    "description": {
      "english": "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down."
    },
    "shortDescription": {
      "english": "User recovers 75% of the damage dealt."
    },
    "category": "Special",
    "type": "Flying",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "614": {
    "name": {
      "english": "Thousand Arrows"
    },
    "description": {
      "english": "This move can hit airborne Pokemon, which includes Flying-type Pokemon, Pokemon with the Levitate Ability, Pokemon holding an Air Balloon, and Pokemon under the effect of Magnet Rise or Telekinesis. If the target is a Flying type and is not already grounded, this move deals neutral damage regardless of its other type(s). This move can hit a target using Bounce, Fly, or Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target."
    },
    "shortDescription": {
      "english": "Grounds adjacent foes. First hit neutral on Flying."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "615": {
    "name": {
      "english": "Thousand Waves"
    },
    "description": {
      "english": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field."
    },
    "shortDescription": {
      "english": "Hits adjacent foes. Prevents them from switching."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "618": {
    "name": {
      "english": "Origin Pulse"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent foes."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 110,
    "accuracy": 85,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "isPulseMove": true
    },
    "viable": true
  },
  "619": {
    "name": {
      "english": "Precipice Blades"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent foes."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 120,
    "accuracy": 85,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "620": {
    "name": {
      "english": "Dragon Ascent"
    },
    "description": {
      "english": "Lowers the user´s Defense and Special Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Defense and Sp. Def by 1."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 120,
    "accuracy": 100,
    "priority": 0,
    "target": "any",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "621": {
    "name": {
      "english": "Hyperspace Fury"
    },
    "description": {
      "english": "Lowers the user´s Defense by 1 stage. This move cannot be used successfully unless the user´s current form, while considering Transform, is Hoopa Unbound. If this move is successful, it breaks through the target´s Baneful Bunker, Detect, King´s Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target´s side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target´s side normally."
    },
    "shortDescription": {
      "english": "Hoopa-U: Lowers user´s Def by 1; breaks protect."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {},
    "viable": true
  },
  "659": {
    "name": {
      "english": "Shore Up"
    },
    "description": {
      "english": "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Sandstorm, the user instead restores 2/3 of its maximum HP, rounded half down."
    },
    "shortDescription": {
      "english": "User restores 1/2 its max HP; 2/3 in Sandstorm."
    },
    "category": "Status",
    "type": "Ground",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "660": {
    "name": {
      "english": "First Impression"
    },
    "description": {
      "english": "Fails unless it is the user´s first turn on the field."
    },
    "shortDescription": {
      "english": "Hits first. First turn out only."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 90,
    "accuracy": 100,
    "priority": 2,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "661": {
    "name": {
      "english": "Baneful Bunker"
    },
    "description": {
      "english": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user´s last move used is not Baneful Bunker, Detect, Endure, King´s Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user´s protection was broken. Fails if the user moves last this turn."
    },
    "shortDescription": {
      "english": "Protects from moves. Contact: poison."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 4,
    "target": "self",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {},
    "viable": true
  },
  "662": {
    "name": {
      "english": "Spirit Shackle"
    },
    "description": {
      "english": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field."
    },
    "shortDescription": {
      "english": "Prevents the target from switching out."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "663": {
    "name": {
      "english": "Darkest Lariat"
    },
    "description": {
      "english": "Ignores the target´s stat stage changes, including evasiveness."
    },
    "shortDescription": {
      "english": "Ignores the target´s stat stage changes."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 85,
    "accuracy": 100,
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
  "664": {
    "name": {
      "english": "Sparkling Aria"
    },
    "description": {
      "english": "If the user has not fainted, the target is cured of its burn."
    },
    "shortDescription": {
      "english": "The target is cured of its burn."
    },
    "category": "Special",
    "type": "Water",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "665": {
    "name": {
      "english": "Ice Hammer"
    },
    "description": {
      "english": "Lowers the user´s Speed by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Speed by 1."
    },
    "category": "Physical",
    "type": "Ice",
    "basePower": 100,
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
  "666": {
    "name": {
      "english": "Floral Healing"
    },
    "description": {
      "english": "The target restores 1/2 of its maximum HP, rounded half up. If the terrain is Grassy Terrain, the target instead restores 2/3 of its maximum HP, rounded half down."
    },
    "shortDescription": {
      "english": "Heals the target by 50% of its max HP."
    },
    "category": "Status",
    "type": "Fairy",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "667": {
    "name": {
      "english": "High Horsepower"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 95,
    "accuracy": 95,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "668": {
    "name": {
      "english": "Strength Sap"
    },
    "description": {
      "english": "Lowers the target´s Attack by 1 stage. The user restores its HP equal to the target´s Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Fails if the target´s Attack stat stage is -6."
    },
    "shortDescription": {
      "english": "User heals HP=target´s Atk stat. Lowers Atk by 1."
    },
    "category": "Status",
    "type": "Grass",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    },
    "viable": true
  },
  "669": {
    "name": {
      "english": "Solar Blade"
    },
    "description": {
      "english": "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn."
    },
    "shortDescription": {
      "english": "Charges turn 1. Hits turn 2. No charge in sunlight."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 125,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "mustBeCharged": true,
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "670": {
    "name": {
      "english": "Leafage"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 40,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 40,
    "maxPowerPoints": 64,
    "flags": {
      "canBeProtected": true
    }
  },
  "671": {
    "name": {
      "english": "Spotlight"
    },
    "description": {
      "english": "Until the end of the turn, all single-target attacks from opponents of the target are redirected to the target. Such attacks are redirected to the target before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal."
    },
    "shortDescription": {
      "english": "Target´s foes´ moves are redirected to it this turn."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 3,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "672": {
    "name": {
      "english": "Toxic Thread"
    },
    "description": {
      "english": "Lowers the target´s Speed by 1 stage and poisons it."
    },
    "shortDescription": {
      "english": "Lowers the target´s Speed by 1 and poisons it."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true,
      "affectsStats": true
    },
    "viable": true
  },
  "673": {
    "name": {
      "english": "Laser Focus"
    },
    "description": {
      "english": "Until the end of the next turn, the user´s attacks will be critical hits."
    },
    "shortDescription": {
      "english": "Until the end of the next turn, user´s moves crit."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "self",
    "powerPoints": 30,
    "maxPowerPoints": 48,
    "flags": {
      "canBeSnatched": true
    }
  },
  "674": {
    "name": {
      "english": "Gear Up"
    },
    "description": {
      "english": "Raises the Attack and Special Attack of Pokemon on the user´s side with the Plus or Minus Abilities by 1 stage."
    },
    "shortDescription": {
      "english": "Raises Atk, Sp. Atk of allies with Plus/Minus by 1."
    },
    "category": "Status",
    "type": "Steel",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true
    }
  },
  "675": {
    "name": {
      "english": "Throat Chop"
    },
    "description": {
      "english": "For 2 turns, the target cannot use sound-based moves."
    },
    "shortDescription": {
      "english": "For 2 turns, the target cannot use sound moves."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "676": {
    "name": {
      "english": "Pollen Puff"
    },
    "description": {
      "english": "If the target is an ally, this move restores 1/2 of its maximum HP, rounded down, instead of dealing damage."
    },
    "shortDescription": {
      "english": "If the target is an ally, heals 50% of its max HP."
    },
    "category": "Special",
    "type": "Bug",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "677": {
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
  "678": {
    "name": {
      "english": "Psychic Terrain"
    },
    "description": {
      "english": "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokemon is multiplied by 1.5 and grounded Pokemon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target´s Speed by 1 stage. Fails if the current terrain is Psychic Terrain."
    },
    "shortDescription": {
      "english": "5 turns. Grounded: +Psychic power, priority-safe."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "all",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {}
  },
  "679": {
    "name": {
      "english": "Lunge"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Attack by 1."
    },
    "category": "Physical",
    "type": "Bug",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "680": {
    "name": {
      "english": "Fire Lash"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Fire",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "681": {
    "name": {
      "english": "Power Trip"
    },
    "description": {
      "english": "Power is equal to 20+(X*20), where X is the user´s total stat stage changes that are greater than 0."
    },
    "shortDescription": {
      "english": " + 20 power for each of the user´s stat boosts."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 20,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "682": {
    "name": {
      "english": "Burn Up"
    },
    "description": {
      "english": "Fails unless the user is a Fire type. If this move is successful, the user´s Fire type becomes typeless as long as it remains active."
    },
    "shortDescription": {
      "english": "User´s Fire type becomes typeless; must be Fire."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 130,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "683": {
    "name": {
      "english": "Speed Swap"
    },
    "description": {
      "english": "The user swaps its Speed stat with the target. Stat stage changes are unaffected."
    },
    "shortDescription": {
      "english": "Swaps Speed stat with target."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "684": {
    "name": {
      "english": "Smart Strike"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This move does not check accuracy."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "685": {
    "name": {
      "english": "Purify"
    },
    "description": {
      "english": "The target is cured if it has a major status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded half up."
    },
    "shortDescription": {
      "english": "Cures target´s status; heals user 1/2 max HP if so."
    },
    "category": "Status",
    "type": "Poison",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeProtected": true,
      "canBeReflected": true
    }
  },
  "686": {
    "name": {
      "english": "Revelation Dance"
    },
    "description": {
      "english": "This move´s type depends on the user´s primary type. If the user´s primary type is typeless, this move´s type is the user´s secondary type if it has one, otherwise the added type from Forest´s Curse or Trick-or-Treat. This move is typeless if the user´s type is typeless alone."
    },
    "shortDescription": {
      "english": "Type varies based on the user´s primary type."
    },
    "category": "Special",
    "type": "Normal",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "687": {
    "name": {
      "english": "Core Enforcer"
    },
    "description": {
      "english": "If the user moves after the target, the target´s Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target´s Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately."
    },
    "shortDescription": {
      "english": "Nullifies the foe(s) Ability if the foe(s) move first."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "688": {
    "name": {
      "english": "Trop Kick"
    },
    "description": {
      "english": "Has a 100% chance to lower the target´s Attack by 1 stage."
    },
    "shortDescription": {
      "english": "100% chance to lower the target´s Attack by 1."
    },
    "category": "Physical",
    "type": "Grass",
    "basePower": 70,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    }
  },
  "689": {
    "name": {
      "english": "Instruct"
    },
    "description": {
      "english": "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Celebrate, Copycat, Focus Punch, Ice Ball, Instruct, King´s Shield, Me First, Metronome, Mimic, Mirror Move, Nature Power, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, any two-turn move, any recharge move, or any Z-Move."
    },
    "shortDescription": {
      "english": "The target immediately uses its last used move."
    },
    "category": "Status",
    "type": "Psychic",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    }
  },
  "690": {
    "name": {
      "english": "Beak Blast"
    },
    "description": {
      "english": "If the user is hit by a contact move this turn before it can execute this move, the attacker is burned."
    },
    "shortDescription": {
      "english": "Burns on contact with the user before it moves."
    },
    "category": "Physical",
    "type": "Flying",
    "basePower": 100,
    "accuracy": 100,
    "priority": -3,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "691": {
    "name": {
      "english": "Clanging Scales"
    },
    "description": {
      "english": "Lowers the user´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the user´s Defense by 1."
    },
    "category": "Special",
    "type": "Dragon",
    "basePower": 110,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacentFoes",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "692": {
    "name": {
      "english": "Dragon Hammer"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No additional effect."
    },
    "category": "Physical",
    "type": "Dragon",
    "basePower": 90,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "693": {
    "name": {
      "english": "Brutal Swing"
    },
    "description": {
      "english": "No additional effect."
    },
    "shortDescription": {
      "english": "No additional effect. Hits adjacent Pokemon."
    },
    "category": "Physical",
    "type": "Dark",
    "basePower": 60,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "694": {
    "name": {
      "english": "Aurora Veil"
    },
    "description": {
      "english": "For 5 turns, the user and its party members take 0.5x damage from physical and special attacks, or 0.66x damage if in a Double Battle; does not reduce damage further with Reflect or Light Screen. Critical hits ignore this protection. It is removed from the user´s side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Brick Break and Psychic Fangs remove the effect before damage is calculated. Lasts for 8 turns if the user is holding Light Clay. Fails unless the weather is Hail."
    },
    "shortDescription": {
      "english": "For 5 turns, damage to allies is halved. Hail only."
    },
    "category": "Status",
    "type": "Ice",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "allySide",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeSnatched": true
    },
    "viable": true
  },
  "704": {
    "name": {
      "english": "Shell Trap"
    },
    "description": {
      "english": "Fails unless the user is hit by a physical attack from an opponent this turn before it can execute the move. If the user was hit and has not fainted, it attacks immediately after being hit, and the effect ends. If the opponent´s physical attack had a secondary effect removed by the Sheer Force Ability, it does not count for the purposes of this effect."
    },
    "shortDescription": {
      "english": "User must take physical damage before moving."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 150,
    "accuracy": 100,
    "priority": -3,
    "target": "allAdjacentFoes",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    }
  },
  "705": {
    "name": {
      "english": "Fleur Cannon"
    },
    "description": {
      "english": "Lowers the user´s Special Attack by 2 stages."
    },
    "shortDescription": {
      "english": "Lowers the user´s Sp. Atk by 2."
    },
    "category": "Special",
    "type": "Fairy",
    "basePower": 130,
    "accuracy": 90,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "706": {
    "name": {
      "english": "Psychic Fangs"
    },
    "description": {
      "english": "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target´s side of the field before damage is calculated."
    },
    "shortDescription": {
      "english": "Destroys screens, unless the target is immune."
    },
    "category": "Physical",
    "type": "Psychic",
    "basePower": 85,
    "accuracy": 100,
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
  "707": {
    "name": {
      "english": "Stomping Tantrum"
    },
    "description": {
      "english": "Power doubles if the user´s last move on the previous turn, including moves called by other moves or those used through Instruct, Magic Coat, Snatch, or the Dancer or Magic Bounce Abilities, failed to do any of its normal effects, not including damage from an unsuccessful High Jump Kick, Jump Kick, or Mind Blown, or if the user was prevented from moving by any effect other than recharging or Sky Drop. A move that was blocked by Baneful Bunker, Detect, King´s Shield, Protect, Spiky Shield, Crafty Shield, Mat Block, Quick Guard, or Wide Guard will not double this move´s power, nor will Bounce or Fly ending early due to the effect of Gravity, Smack Down, or Thousand Arrows."
    },
    "shortDescription": {
      "english": "Power doubles if the user´s last move failed."
    },
    "category": "Physical",
    "type": "Ground",
    "basePower": 75,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    }
  },
  "708": {
    "name": {
      "english": "Shadow Bone"
    },
    "description": {
      "english": "Has a 20% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "20% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 85,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "709": {
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
  "710": {
    "name": {
      "english": "Liquidation"
    },
    "description": {
      "english": "Has a 20% chance to lower the target´s Defense by 1 stage."
    },
    "shortDescription": {
      "english": "20% chance to lower the target´s Defense by 1."
    },
    "category": "Physical",
    "type": "Water",
    "basePower": 85,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "711": {
    "name": {
      "english": "Prismatic Laser"
    },
    "description": {
      "english": "If this move is successful, the user must recharge on the following turn and cannot select a move."
    },
    "shortDescription": {
      "english": "User cannot move next turn."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 160,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "canBeProtected": true
    }
  },
  "712": {
    "name": {
      "english": "Spectral Thief"
    },
    "description": {
      "english": "The target´s stat stages greater than 0 are stolen from it and applied to the user before dealing damage."
    },
    "shortDescription": {
      "english": "Steals target´s boosts before dealing damage."
    },
    "category": "Physical",
    "type": "Ghost",
    "basePower": 90,
    "accuracy": 100,
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
  "713": {
    "name": {
      "english": "Sunsteel Strike"
    },
    "description": {
      "english": "This move and its effects ignore the Abilities of other Pokemon."
    },
    "shortDescription": {
      "english": "Ignores the Abilities of other Pokemon."
    },
    "category": "Physical",
    "type": "Steel",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "714": {
    "name": {
      "english": "Moongeist Beam"
    },
    "description": {
      "english": "This move and its effects ignore the Abilities of other Pokemon."
    },
    "shortDescription": {
      "english": "Ignores the Abilities of other Pokemon."
    },
    "category": "Special",
    "type": "Ghost",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "715": {
    "name": {
      "english": "Tearful Look"
    },
    "description": {
      "english": "Lowers the target´s Attack and Special Attack by 1 stage."
    },
    "shortDescription": {
      "english": "Lowers the target´s Attack and Sp. Atk by 1."
    },
    "category": "Status",
    "type": "Normal",
    "basePower": 0,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 20,
    "maxPowerPoints": 32,
    "flags": {
      "canBeReflected": true,
      "affectsStats": true
    }
  },
  "716": {
    "name": {
      "english": "Zing Zap"
    },
    "description": {
      "english": "Has a 30% chance to flinch the target."
    },
    "shortDescription": {
      "english": "30% chance to flinch the target."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 80,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 10,
    "maxPowerPoints": 16,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true,
      "hasSecondaryEffect": true
    },
    "viable": true
  },
  "718": {
    "name": {
      "english": "Multi-Attack"
    },
    "description": {
      "english": "This move´s type depends on the user´s held Memory."
    },
    "shortDescription": {
      "english": "Type varies based on the held Memory."
    },
    "category": "Physical",
    "type": "Normal",
    "basePower": 90,
    "accuracy": 100,
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
  "720": {
    "name": {
      "english": "Mind Blown"
    },
    "description": {
      "english": "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability. This move is prevented from executing and the user does not lose HP if any active Pokemon has the Damp Ability, or if this move is Fire type and the user is affected by Powder or the weather is Primordial Sea."
    },
    "shortDescription": {
      "english": "User loses 50% max HP. Hits adjacent Pokemon."
    },
    "category": "Special",
    "type": "Fire",
    "basePower": 150,
    "accuracy": 100,
    "priority": 0,
    "target": "allAdjacent",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  },
  "721": {
    "name": {
      "english": "Plasma Fists"
    },
    "description": {
      "english": "If this move is successful, causes Normal-type moves to become Electric type this turn."
    },
    "shortDescription": {
      "english": "Normal moves become Electric type this turn."
    },
    "category": "Physical",
    "type": "Electric",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 15,
    "maxPowerPoints": 24,
    "flags": {
      "isContactMove": true,
      "canBeProtected": true
    },
    "viable": true
  },
  "722": {
    "name": {
      "english": "Photon Geyser"
    },
    "description": {
      "english": "This move becomes a physical attack if the user´s Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon."
    },
    "shortDescription": {
      "english": "Physical if user´s Atk > Sp. Atk. Ignores Abilities."
    },
    "category": "Special",
    "type": "Psychic",
    "basePower": 100,
    "accuracy": 100,
    "priority": 0,
    "target": "normal",
    "powerPoints": 5,
    "maxPowerPoints": 8,
    "flags": {
      "canBeProtected": true
    },
    "viable": true
  }
};

(function addId() {

  Object.keys(moves).forEach(id => {
    moves[id].id = Number(id);
  })

  console.log(JSON.stringify(moves));

})();
