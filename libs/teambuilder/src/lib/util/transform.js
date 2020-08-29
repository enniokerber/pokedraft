
const testAbilities = {
  "0": {
    "name": {
      "english": "No Ability"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Does nothing."
    }
  },
  "1": {
    "name": {
      "english": "Stench"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch."
    }
  },
  "2": {
    "name": {
      "english": "Drizzle"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Rain Dance."
    }
  },
  "3": {
    "name": {
      "english": "Speed Boost"
    },
    "description": {
      "english": "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field."
    },
    "shortDescription": {
      "english": "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field."
    }
  },
  "4": {
    "name": {
      "english": "Battle Armor"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be struck by a critical hit."
    }
  },
  "5": {
    "name": {
      "english": "Sturdy"
    },
    "description": {
      "english": "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon."
    },
    "shortDescription": {
      "english": "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO."
    }
  },
  "6": {
    "name": {
      "english": "Damp"
    },
    "description": {
      "english": "While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect."
    },
    "shortDescription": {
      "english": "Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active."
    }
  },
  "7": {
    "name": {
      "english": "Limber"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it."
    }
  },
  "8": {
    "name": {
      "english": "Sand Veil"
    },
    "description": {
      "english": "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm."
    },
    "shortDescription": {
      "english": "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm."
    }
  },
  "9": {
    "name": {
      "english": "Static"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "30% chance a Pokemon making contact with this Pokemon will be paralyzed."
    }
  },
  "10": {
    "name": {
      "english": "Volt Absorb"
    },
    "description": {
      "english": "This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move."
    },
    "shortDescription": {
      "english": "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity."
    }
  },
  "11": {
    "name": {
      "english": "Water Absorb"
    },
    "description": {
      "english": "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move."
    },
    "shortDescription": {
      "english": "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity."
    }
  },
  "12": {
    "name": {
      "english": "Oblivious"
    },
    "description": {
      "english": "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate."
    },
    "shortDescription": {
      "english": "This Pokemon cannot be infatuated or taunted. Immune to Intimidate."
    }
  },
  "13": {
    "name": {
      "english": "Cloud Nine"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "While this Pokemon is active, the effects of weather conditions are disabled."
    }
  },
  "14": {
    "name": {
      "english": "Compound Eyes"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves have their accuracy multiplied by 1.3."
    }
  },
  "15": {
    "name": {
      "english": "Insomnia"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it."
    }
  },
  "16": {
    "name": {
      "english": "Color Change"
    },
    "description": {
      "english": "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect."
    },
    "shortDescription": {
      "english": "This Pokemon's type changes to the type of a move it's hit by, unless it has the type."
    }
  },
  "17": {
    "name": {
      "english": "Immunity"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it."
    }
  },
  "18": {
    "name": {
      "english": "Flash Fire"
    },
    "description": {
      "english": "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks."
    },
    "shortDescription": {
      "english": "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity."
    }
  },
  "19": {
    "name": {
      "english": "Shield Dust"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon is not affected by the secondary effect of another Pokemon's attack."
    }
  },
  "20": {
    "name": {
      "english": "Own Tempo"
    },
    "description": {
      "english": "This Pokemon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate."
    },
    "shortDescription": {
      "english": "This Pokemon cannot be confused. Immune to Intimidate."
    }
  },
  "21": {
    "name": {
      "english": "Suction Cups"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be forced to switch out by another Pokemon's attack or item."
    }
  },
  "22": {
    "name": {
      "english": "Intimidate"
    },
    "description": {
      "english": "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokemon behind a substitute are immune."
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage."
    }
  },
  "23": {
    "name": {
      "english": "Shadow Tag"
    },
    "description": {
      "english": "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability."
    },
    "shortDescription": {
      "english": "Prevents adjacent foes from choosing to switch unless they also have this Ability."
    }
  },
  "24": {
    "name": {
      "english": "Rough Skin"
    },
    "description": {
      "english": "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down."
    },
    "shortDescription": {
      "english": "Pokemon making contact with this Pokemon lose 1/8 of their max HP."
    }
  },
  "25": {
    "name": {
      "english": "Wonder Guard"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon can only be damaged by supereffective moves and indirect damage."
    }
  },
  "26": {
    "name": {
      "english": "Levitate"
    },
    "description": {
      "english": "This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity."
    },
    "shortDescription": {
      "english": "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it."
    }
  },
  "27": {
    "name": {
      "english": "Effect Spore"
    },
    "description": {
      "english": "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep."
    },
    "shortDescription": {
      "english": "30% chance of poison/paralysis/sleep on others making contact with this Pokemon."
    }
  },
  "28": {
    "name": {
      "english": "Synchronize"
    },
    "description": {
      "english": "If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition."
    },
    "shortDescription": {
      "english": "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status."
    }
  },
  "29": {
    "name": {
      "english": "Clear Body"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Prevents other Pokemon from lowering this Pokemon's stat stages."
    }
  },
  "30": {
    "name": {
      "english": "Natural Cure"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon has its major status condition cured when it switches out."
    }
  },
  "31": {
    "name": {
      "english": "Lightning Rod"
    },
    "description": {
      "english": "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move."
    },
    "shortDescription": {
      "english": "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity."
    }
  },
  "32": {
    "name": {
      "english": "Serene Grace"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves have their secondary effect chance doubled."
    }
  },
  "33": {
    "name": {
      "english": "Swift Swim"
    },
    "description": {
      "english": "If Rain Dance is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled."
    },
    "shortDescription": {
      "english": "If Rain Dance is active, this Pokemon's Speed is doubled."
    }
  },
  "34": {
    "name": {
      "english": "Chlorophyll"
    },
    "description": {
      "english": "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled."
    },
    "shortDescription": {
      "english": "If Sunny Day is active, this Pokemon's Speed is doubled."
    }
  },
  "35": {
    "name": {
      "english": "Illuminate"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    }
  },
  "36": {
    "name": {
      "english": "Trace"
    },
    "description": {
      "english": "On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon's Ability. However, if one or more adjacent Pokemon has the Ability \"No Ability\", Trace won't copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned \"No Ability\", as well as Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode."
    },
    "shortDescription": {
      "english": "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability."
    }
  },
  "37": {
    "name": {
      "english": "Huge Power"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is doubled."
    }
  },
  "38": {
    "name": {
      "english": "Poison Point"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "30% chance a Pokemon making contact with this Pokemon will be poisoned."
    }
  },
  "39": {
    "name": {
      "english": "Inner Focus"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be made to flinch. Immune to Intimidate."
    }
  },
  "40": {
    "name": {
      "english": "Magma Armor"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it."
    }
  },
  "41": {
    "name": {
      "english": "Water Veil"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be burned. Gaining this Ability while burned cures it."
    }
  },
  "42": {
    "name": {
      "english": "Magnet Pull"
    },
    "description": {
      "english": "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping."
    },
    "shortDescription": {
      "english": "Prevents adjacent Steel-type foes from choosing to switch."
    }
  },
  "43": {
    "name": {
      "english": "Soundproof"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon is immune to sound-based moves, including Heal Bell."
    }
  },
  "44": {
    "name": {
      "english": "Rain Dish"
    },
    "description": {
      "english": "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored."
    },
    "shortDescription": {
      "english": "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn."
    }
  },
  "45": {
    "name": {
      "english": "Sand Stream"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Sandstorm."
    }
  },
  "46": {
    "name": {
      "english": "Pressure"
    },
    "description": {
      "english": "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP."
    },
    "shortDescription": {
      "english": "If this Pokemon is the target of a foe's move, that move loses one additional PP."
    }
  },
  "47": {
    "name": {
      "english": "Thick Fat"
    },
    "description": {
      "english": "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon."
    },
    "shortDescription": {
      "english": "Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat."
    }
  },
  "48": {
    "name": {
      "english": "Early Bird"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's sleep counter drops by 2 instead of 1."
    }
  },
  "49": {
    "name": {
      "english": "Flame Body"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "30% chance a Pokemon making contact with this Pokemon will be burned."
    }
  },
  "50": {
    "name": {
      "english": "Run Away"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    }
  },
  "51": {
    "name": {
      "english": "Keen Eye"
    },
    "description": {
      "english": "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage."
    },
    "shortDescription": {
      "english": "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat."
    }
  },
  "52": {
    "name": {
      "english": "Hyper Cutter"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Prevents other Pokemon from lowering this Pokemon's Attack stat stage."
    }
  },
  "53": {
    "name": {
      "english": "Pickup"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn."
    }
  },
  "54": {
    "name": {
      "english": "Truant"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon skips every other turn instead of using a move."
    }
  },
  "55": {
    "name": {
      "english": "Hustle"
    },
    "description": {
      "english": "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8."
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x."
    }
  },
  "56": {
    "name": {
      "english": "Cute Charm"
    },
    "description": {
      "english": "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender."
    },
    "shortDescription": {
      "english": "30% chance of infatuating Pokemon of the opposite gender if they make contact."
    }
  },
  "57": {
    "name": {
      "english": "Plus"
    },
    "description": {
      "english": "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5."
    },
    "shortDescription": {
      "english": "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x."
    }
  },
  "58": {
    "name": {
      "english": "Minus"
    },
    "description": {
      "english": "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5."
    },
    "shortDescription": {
      "english": "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x."
    }
  },
  "59": {
    "name": {
      "english": "Forecast"
    },
    "description": {
      "english": "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types."
    },
    "shortDescription": {
      "english": "Castform's type changes to the current weather condition's type, except Sandstorm."
    }
  },
  "60": {
    "name": {
      "english": "Sticky Hold"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot lose its held item due to another Pokemon's attack."
    }
  },
  "61": {
    "name": {
      "english": "Shed Skin"
    },
    "description": {
      "english": "This Pokemon has a 33% chance to have its major status condition cured at the end of each turn."
    },
    "shortDescription": {
      "english": "This Pokemon has a 33% chance to have its status cured at the end of each turn."
    }
  },
  "62": {
    "name": {
      "english": "Guts"
    },
    "description": {
      "english": "If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored."
    },
    "shortDescription": {
      "english": "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage."
    }
  },
  "63": {
    "name": {
      "english": "Marvel Scale"
    },
    "description": {
      "english": "If this Pokemon has a major status condition, its Defense is multiplied by 1.5."
    },
    "shortDescription": {
      "english": "If this Pokemon is statused, its Defense is 1.5x."
    }
  },
  "64": {
    "name": {
      "english": "Liquid Ooze"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon damages those draining HP from it for as much as they would heal."
    }
  },
  "65": {
    "name": {
      "english": "Overgrow"
    },
    "description": {
      "english": "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack."
    },
    "shortDescription": {
      "english": "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks."
    }
  },
  "66": {
    "name": {
      "english": "Blaze"
    },
    "description": {
      "english": "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack."
    },
    "shortDescription": {
      "english": "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks."
    }
  },
  "67": {
    "name": {
      "english": "Torrent"
    },
    "description": {
      "english": "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack."
    },
    "shortDescription": {
      "english": "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks."
    }
  },
  "68": {
    "name": {
      "english": "Swarm"
    },
    "description": {
      "english": "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack."
    },
    "shortDescription": {
      "english": "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks."
    }
  },
  "69": {
    "name": {
      "english": "Rock Head"
    },
    "description": {
      "english": "This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage."
    },
    "shortDescription": {
      "english": "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage."
    }
  },
  "70": {
    "name": {
      "english": "Drought"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Sunny Day."
    }
  },
  "71": {
    "name": {
      "english": "Arena Trap"
    },
    "description": {
      "english": "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne."
    },
    "shortDescription": {
      "english": "Prevents adjacent foes from choosing to switch unless they are airborne."
    }
  },
  "72": {
    "name": {
      "english": "Vital Spirit"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it."
    }
  },
  "73": {
    "name": {
      "english": "White Smoke"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Prevents other Pokemon from lowering this Pokemon's stat stages."
    }
  },
  "74": {
    "name": {
      "english": "Pure Power"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is doubled."
    }
  },
  "75": {
    "name": {
      "english": "Shell Armor"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon cannot be struck by a critical hit."
    }
  },
  "76": {
    "name": {
      "english": "Air Lock"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "While this Pokemon is active, the effects of weather conditions are disabled."
    }
  },
  "77": {
    "name": {
      "english": "Tangled Feet"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's evasiveness is doubled as long as it is confused."
    }
  },
  "78": {
    "name": {
      "english": "Motor Drive"
    },
    "description": {
      "english": "This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move."
    },
    "shortDescription": {
      "english": "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity."
    }
  },
  "79": {
    "name": {
      "english": "Rivalry"
    },
    "description": {
      "english": "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless."
    },
    "shortDescription": {
      "english": "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender."
    }
  },
  "80": {
    "name": {
      "english": "Steadfast"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon flinches, its Speed is raised by 1 stage."
    }
  },
  "81": {
    "name": {
      "english": "Snow Cloak"
    },
    "description": {
      "english": "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail."
    },
    "shortDescription": {
      "english": "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail."
    }
  },
  "82": {
    "name": {
      "english": "Gluttony"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early."
    }
  },
  "83": {
    "name": {
      "english": "Anger Point"
    },
    "description": {
      "english": "If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages."
    },
    "shortDescription": {
      "english": "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages."
    }
  },
  "84": {
    "name": {
      "english": "Unburden"
    },
    "description": {
      "english": "If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability."
    },
    "shortDescription": {
      "english": "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability."
    }
  },
  "85": {
    "name": {
      "english": "Heatproof"
    },
    "description": {
      "english": "The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved."
    },
    "shortDescription": {
      "english": "The power of Fire-type attacks against this Pokemon is halved; burn damage halved."
    }
  },
  "86": {
    "name": {
      "english": "Simple"
    },
    "description": {
      "english": "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used."
    },
    "shortDescription": {
      "english": "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead."
    }
  },
  "87": {
    "name": {
      "english": "Dry Skin"
    },
    "description": {
      "english": "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokemon is holding Utility Umbrella, the effects of weather are nullified."
    },
    "shortDescription": {
      "english": "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun."
    }
  },
  "88": {
    "name": {
      "english": "Download"
    },
    "description": {
      "english": "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower."
    },
    "shortDescription": {
      "english": "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense."
    }
  },
  "89": {
    "name": {
      "english": "Iron Fist"
    },
    "description": {
      "english": "This Pokemon's punch-based attacks have their power multiplied by 1.2."
    },
    "shortDescription": {
      "english": "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted."
    }
  },
  "90": {
    "name": {
      "english": "Poison Heal"
    },
    "description": {
      "english": "If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP."
    },
    "shortDescription": {
      "english": "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss."
    }
  },
  "91": {
    "name": {
      "english": "Adaptability"
    },
    "description": {
      "english": "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5."
    },
    "shortDescription": {
      "english": "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5."
    }
  },
  "92": {
    "name": {
      "english": "Skill Link"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's multi-hit attacks always hit the maximum number of times."
    }
  },
  "93": {
    "name": {
      "english": "Hydration"
    },
    "description": {
      "english": "This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active. If this Pokemon is holding Utility Umbrella, its major status condition will not be cured."
    },
    "shortDescription": {
      "english": "This Pokemon has its status cured at the end of each turn if Rain Dance is active."
    }
  },
  "94": {
    "name": {
      "english": "Solar Power"
    },
    "description": {
      "english": "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP."
    },
    "shortDescription": {
      "english": "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn."
    }
  },
  "95": {
    "name": {
      "english": "Quick Feet"
    },
    "description": {
      "english": "If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored."
    },
    "shortDescription": {
      "english": "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis."
    }
  },
  "96": {
    "name": {
      "english": "Normalize"
    },
    "description": {
      "english": "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type."
    },
    "shortDescription": {
      "english": "This Pokemon's moves are changed to be Normal type and have 1.2x power."
    }
  },
  "97": {
    "name": {
      "english": "Sniper"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5."
    }
  },
  "98": {
    "name": {
      "english": "Magic Guard"
    },
    "description": {
      "english": "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage."
    },
    "shortDescription": {
      "english": "This Pokemon can only be damaged by direct attacks."
    }
  },
  "99": {
    "name": {
      "english": "No Guard"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Every move used by or against this Pokemon will always hit."
    }
  },
  "100": {
    "name": {
      "english": "Stall"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon moves last among Pokemon using the same or greater priority moves."
    }
  },
  "101": {
    "name": {
      "english": "Technician"
    },
    "description": {
      "english": "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle."
    },
    "shortDescription": {
      "english": "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle."
    }
  },
  "102": {
    "name": {
      "english": "Leaf Guard"
    },
    "description": {
      "english": "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a major status condition and Rest will fail for it."
    },
    "shortDescription": {
      "english": "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it."
    }
  },
  "103": {
    "name": {
      "english": "Klutz"
    },
    "description": {
      "english": "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects."
    },
    "shortDescription": {
      "english": "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used."
    }
  },
  "104": {
    "name": {
      "english": "Mold Breaker"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."
    }
  },
  "105": {
    "name": {
      "english": "Super Luck"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's critical hit ratio is raised by 1 stage."
    }
  },
  "106": {
    "name": {
      "english": "Aftermath"
    },
    "description": {
      "english": "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented."
    },
    "shortDescription": {
      "english": "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP."
    }
  },
  "107": {
    "name": {
      "english": "Anticipation"
    },
    "description": {
      "english": "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves."
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move."
    }
  },
  "108": {
    "name": {
      "english": "Forewarn"
    },
    "description": {
      "english": "On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon."
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon is alerted to the foes' move with the highest power."
    }
  },
  "109": {
    "name": {
      "english": "Unaware"
    },
    "description": {
      "english": "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage."
    },
    "shortDescription": {
      "english": "This Pokemon ignores other Pokemon's stat stages when taking or doing damage."
    }
  },
  "110": {
    "name": {
      "english": "Tinted Lens"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacks that are not very effective on a target deal double damage."
    }
  },
  "111": {
    "name": {
      "english": "Filter"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon receives 3/4 damage from supereffective attacks."
    }
  },
  "112": {
    "name": {
      "english": "Slow Start"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns."
    }
  },
  "113": {
    "name": {
      "english": "Scrappy"
    },
    "description": {
      "english": "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate."
    },
    "shortDescription": {
      "english": "Fighting, Normal moves hit Ghost. Immune to Intimidate."
    }
  },
  "114": {
    "name": {
      "english": "Storm Drain"
    },
    "description": {
      "english": "This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move."
    },
    "shortDescription": {
      "english": "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity."
    }
  },
  "115": {
    "name": {
      "english": "Ice Body"
    },
    "description": {
      "english": "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail."
    },
    "shortDescription": {
      "english": "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail."
    }
  },
  "116": {
    "name": {
      "english": "Solid Rock"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon receives 3/4 damage from supereffective attacks."
    }
  },
  "117": {
    "name": {
      "english": "Snow Warning"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Hail."
    }
  },
  "118": {
    "name": {
      "english": "Honey Gather"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    }
  },
  "119": {
    "name": {
      "english": "Frisk"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon identifies the held items of all opposing Pokemon."
    }
  },
  "120": {
    "name": {
      "english": "Reckless"
    },
    "description": {
      "english": "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle."
    },
    "shortDescription": {
      "english": "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle."
    }
  },
  "121": {
    "name": {
      "english": "Multitype"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal."
    }
  },
  "122": {
    "name": {
      "english": "Flower Gift"
    },
    "description": {
      "english": "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts."
    },
    "shortDescription": {
      "english": "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x."
    }
  },
  "123": {
    "name": {
      "english": "Bad Dreams"
    },
    "description": {
      "english": "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep."
    },
    "shortDescription": {
      "english": "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn."
    }
  },
  "124": {
    "name": {
      "english": "Pickpocket"
    },
    "description": {
      "english": "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect."
    },
    "shortDescription": {
      "english": "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item."
    }
  },
  "125": {
    "name": {
      "english": "Sheer Force"
    },
    "description": {
      "english": "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed."
    },
    "shortDescription": {
      "english": "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects."
    }
  },
  "126": {
    "name": {
      "english": "Contrary"
    },
    "description": {
      "english": "If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used."
    },
    "shortDescription": {
      "english": "If this Pokemon has a stat stage raised it is lowered instead, and vice versa."
    }
  },
  "127": {
    "name": {
      "english": "Unnerve"
    },
    "description": {
      "english": "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon's Speed tiers."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, it prevents opposing Pokemon from using their Berries."
    }
  },
  "128": {
    "name": {
      "english": "Defiant"
    },
    "description": {
      "english": "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon."
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe."
    }
  },
  "129": {
    "name": {
      "english": "Defeatist"
    },
    "description": {
      "english": "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved."
    },
    "shortDescription": {
      "english": "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved."
    }
  },
  "130": {
    "name": {
      "english": "Cursed Body"
    },
    "description": {
      "english": "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled."
    },
    "shortDescription": {
      "english": "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled."
    }
  },
  "131": {
    "name": {
      "english": "Healer"
    },
    "description": {
      "english": "There is a 30% chance of curing an adjacent ally's major status condition at the end of each turn."
    },
    "shortDescription": {
      "english": "30% chance of curing an adjacent ally's status at the end of each turn."
    }
  },
  "132": {
    "name": {
      "english": "Friend Guard"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks."
    }
  },
  "133": {
    "name": {
      "english": "Weak Armor"
    },
    "description": {
      "english": "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages."
    },
    "shortDescription": {
      "english": "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2."
    }
  },
  "134": {
    "name": {
      "english": "Heavy Metal"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's weight is doubled."
    }
  },
  "135": {
    "name": {
      "english": "Light Metal"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's weight is halved."
    }
  },
  "136": {
    "name": {
      "english": "Multiscale"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon is at full HP, damage taken from attacks is halved."
    }
  },
  "137": {
    "name": {
      "english": "Toxic Boost"
    },
    "description": {
      "english": "While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5."
    },
    "shortDescription": {
      "english": "While this Pokemon is poisoned, its physical attacks have 1.5x power."
    }
  },
  "138": {
    "name": {
      "english": "Flare Boost"
    },
    "description": {
      "english": "While this Pokemon is burned, the power of its special attacks is multiplied by 1.5."
    },
    "shortDescription": {
      "english": "While this Pokemon is burned, its special attacks have 1.5x power."
    }
  },
  "139": {
    "name": {
      "english": "Harvest"
    },
    "description": {
      "english": "If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%."
    },
    "shortDescription": {
      "english": "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun."
    }
  },
  "140": {
    "name": {
      "english": "Telepathy"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon does not take damage from attacks made by its allies."
    }
  },
  "141": {
    "name": {
      "english": "Moody"
    },
    "description": {
      "english": "This Pokemon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn."
    },
    "shortDescription": {
      "english": "Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn."
    }
  },
  "142": {
    "name": {
      "english": "Overcoat"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon is immune to powder moves and damage from Sandstorm or Hail."
    }
  },
  "143": {
    "name": {
      "english": "Poison Touch"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's contact moves have a 30% chance of poisoning."
    }
  },
  "144": {
    "name": {
      "english": "Regenerator"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out."
    }
  },
  "145": {
    "name": {
      "english": "Big Pecks"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Prevents other Pokemon from lowering this Pokemon's Defense stat stage."
    }
  },
  "146": {
    "name": {
      "english": "Sand Rush"
    },
    "description": {
      "english": "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm."
    },
    "shortDescription": {
      "english": "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm."
    }
  },
  "147": {
    "name": {
      "english": "Wonder Skin"
    },
    "description": {
      "english": "All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects."
    },
    "shortDescription": {
      "english": "Status moves with accuracy checks are 50% accurate when used on this Pokemon."
    }
  },
  "148": {
    "name": {
      "english": "Analytic"
    },
    "description": {
      "english": "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight."
    },
    "shortDescription": {
      "english": "This Pokemon's attacks have 1.3x power if it is the last to move in a turn."
    }
  },
  "149": {
    "name": {
      "english": "Illusion"
    },
    "description": {
      "english": "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon."
    },
    "shortDescription": {
      "english": "This Pokemon appears as the last Pokemon in the party until it takes direct damage."
    }
  },
  "150": {
    "name": {
      "english": "Imposter"
    },
    "description": {
      "english": "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform."
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it."
    }
  },
  "151": {
    "name": {
      "english": "Infiltrator"
    },
    "description": {
      "english": "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil."
    },
    "shortDescription": {
      "english": "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil."
    }
  },
  "152": {
    "name": {
      "english": "Mummy"
    },
    "description": {
      "english": "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities."
    },
    "shortDescription": {
      "english": "Pokemon making contact with this Pokemon have their Ability changed to Mummy."
    }
  },
  "153": {
    "name": {
      "english": "Moxie"
    },
    "description": {
      "english": "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon."
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon."
    }
  },
  "154": {
    "name": {
      "english": "Justified"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move."
    }
  },
  "155": {
    "name": {
      "english": "Rattled"
    },
    "description": {
      "english": "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate."
    },
    "shortDescription": {
      "english": "Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated."
    }
  },
  "156": {
    "name": {
      "english": "Magic Bounce"
    },
    "description": {
      "english": "This Pokemon blocks certain status moves and instead uses the move against the original user."
    },
    "shortDescription": {
      "english": "This Pokemon blocks certain status moves and bounces them back to the user."
    }
  },
  "157": {
    "name": {
      "english": "Sap Sipper"
    },
    "description": {
      "english": "This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move."
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity."
    }
  },
  "158": {
    "name": {
      "english": "Prankster"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Status moves have priority raised by 1, but Dark types are immune."
    }
  },
  "159": {
    "name": {
      "english": "Sand Force"
    },
    "description": {
      "english": "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm."
    },
    "shortDescription": {
      "english": "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it."
    }
  },
  "160": {
    "name": {
      "english": "Iron Barbs"
    },
    "description": {
      "english": "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down."
    },
    "shortDescription": {
      "english": "Pokemon making contact with this Pokemon lose 1/8 of their max HP."
    }
  },
  "161": {
    "name": {
      "english": "Zen Mode"
    },
    "description": {
      "english": "If this Pokemon is a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed."
    },
    "shortDescription": {
      "english": "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen."
    }
  },
  "162": {
    "name": {
      "english": "Victory Star"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon and its allies' moves have their accuracy multiplied by 1.1."
    }
  },
  "163": {
    "name": {
      "english": "Turboblaze"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."
    }
  },
  "164": {
    "name": {
      "english": "Teravolt"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."
    }
  },
  "165": {
    "name": {
      "english": "Aroma Veil"
    },
    "description": {
      "english": "This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment."
    },
    "shortDescription": {
      "english": "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment."
    }
  },
  "166": {
    "name": {
      "english": "Flower Veil"
    },
    "description": {
      "english": "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon."
    },
    "shortDescription": {
      "english": "This side's Grass types can't have stats lowered or status inflicted by other Pokemon."
    }
  },
  "167": {
    "name": {
      "english": "Cheek Pouch"
    },
    "description": {
      "english": "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect."
    },
    "shortDescription": {
      "english": "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect."
    }
  },
  "168": {
    "name": {
      "english": "Protean"
    },
    "description": {
      "english": "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type."
    },
    "shortDescription": {
      "english": "This Pokemon's type changes to match the type of the move it is about to use."
    }
  },
  "169": {
    "name": {
      "english": "Fur Coat"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Defense is doubled."
    }
  },
  "170": {
    "name": {
      "english": "Magician"
    },
    "description": {
      "english": "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight."
    },
    "shortDescription": {
      "english": "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack."
    }
  },
  "171": {
    "name": {
      "english": "Bulletproof"
    },
    "description": {
      "english": "This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name."
    },
    "shortDescription": {
      "english": "Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc)."
    }
  },
  "172": {
    "name": {
      "english": "Competitive"
    },
    "description": {
      "english": "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon."
    },
    "shortDescription": {
      "english": "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe."
    }
  },
  "173": {
    "name": {
      "english": "Strong Jaw"
    },
    "description": {
      "english": "This Pokemon's bite-based attacks have their power multiplied by 1.5."
    },
    "shortDescription": {
      "english": "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted."
    }
  },
  "174": {
    "name": {
      "english": "Refrigerate"
    },
    "description": {
      "english": "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."
    },
    "shortDescription": {
      "english": "This Pokemon's Normal-type moves become Ice type and have 1.2x power."
    }
  },
  "175": {
    "name": {
      "english": "Sweet Veil"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon and its allies cannot fall asleep."
    }
  },
  "176": {
    "name": {
      "english": "Stance Change"
    },
    "description": {
      "english": "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield."
    },
    "shortDescription": {
      "english": "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield."
    }
  },
  "177": {
    "name": {
      "english": "Gale Wings"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1."
    }
  },
  "178": {
    "name": {
      "english": "Mega Launcher"
    },
    "description": {
      "english": "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down."
    },
    "shortDescription": {
      "english": "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP."
    }
  },
  "179": {
    "name": {
      "english": "Grass Pelt"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5."
    }
  },
  "180": {
    "name": {
      "english": "Symbiosis"
    },
    "description": {
      "english": "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off."
    },
    "shortDescription": {
      "english": "If an ally uses its item, this Pokemon gives its item to that ally immediately."
    }
  },
  "181": {
    "name": {
      "english": "Tough Claws"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's contact moves have their power multiplied by 1.3."
    }
  },
  "182": {
    "name": {
      "english": "Pixilate"
    },
    "description": {
      "english": "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."
    },
    "shortDescription": {
      "english": "This Pokemon's Normal-type moves become Fairy type and have 1.2x power."
    }
  },
  "183": {
    "name": {
      "english": "Gooey"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage."
    }
  },
  "184": {
    "name": {
      "english": "Parental Bond"
    },
    "description": {
      "english": "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets."
    },
    "shortDescription": {
      "english": "This Pokemon's damaging moves hit twice. The second hit has its damage quartered."
    }
  },
  "185": {
    "name": {
      "english": "Aerilate"
    },
    "description": {
      "english": "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."
    },
    "shortDescription": {
      "english": "This Pokemon's Normal-type moves become Flying type and have 1.2x power."
    }
  },
  "186": {
    "name": {
      "english": "Dark Aura"
    },
    "description": {
      "english": "While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power."
    }
  },
  "187": {
    "name": {
      "english": "Fairy Aura"
    },
    "description": {
      "english": "While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power."
    }
  },
  "188": {
    "name": {
      "english": "Aura Break"
    },
    "description": {
      "english": "While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x."
    }
  },
  "189": {
    "name": {
      "english": "Primordial Sea"
    },
    "description": {
      "english": "On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land."
    },
    "shortDescription": {
      "english": "On switch-in, heavy rain begins until this Ability is not active in battle."
    }
  },
  "190": {
    "name": {
      "english": "Desolate Land"
    },
    "description": {
      "english": "On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea."
    },
    "shortDescription": {
      "english": "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle."
    }
  },
  "191": {
    "name": {
      "english": "Delta Stream"
    },
    "description": {
      "english": "On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea."
    },
    "shortDescription": {
      "english": "On switch-in, strong winds begin until this Ability is not active in battle."
    }
  },
  "192": {
    "name": {
      "english": "Stamina"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Defense is raised by 1 stage after it is damaged by a move."
    }
  },
  "193": {
    "name": {
      "english": "Wimp Out"
    },
    "description": {
      "english": "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage."
    },
    "shortDescription": {
      "english": "This Pokemon switches out when it reaches 1/2 or less of its maximum HP."
    }
  },
  "194": {
    "name": {
      "english": "Emergency Exit"
    },
    "description": {
      "english": "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage."
    },
    "shortDescription": {
      "english": "This Pokemon switches out when it reaches 1/2 or less of its maximum HP."
    }
  },
  "195": {
    "name": {
      "english": "Water Compaction"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move."
    }
  },
  "196": {
    "name": {
      "english": "Merciless"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacks are critical hits if the target is poisoned."
    }
  },
  "197": {
    "name": {
      "english": "Shields Down"
    },
    "description": {
      "english": "If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability."
    },
    "shortDescription": {
      "english": "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor."
    }
  },
  "198": {
    "name": {
      "english": "Stakeout"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacking stat is doubled against a target that switched in this turn."
    }
  },
  "199": {
    "name": {
      "english": "Water Bubble"
    },
    "description": {
      "english": "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it."
    },
    "shortDescription": {
      "english": "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved."
    }
  },
  "200": {
    "name": {
      "english": "Steelworker"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack."
    }
  },
  "201": {
    "name": {
      "english": "Berserk"
    },
    "description": {
      "english": "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect."
    },
    "shortDescription": {
      "english": "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP."
    }
  },
  "202": {
    "name": {
      "english": "Slush Rush"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If Hail is active, this Pokemon's Speed is doubled."
    }
  },
  "203": {
    "name": {
      "english": "Long Reach"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacks do not make contact with the target."
    }
  },
  "204": {
    "name": {
      "english": "Liquid Voice"
    },
    "description": {
      "english": "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."
    },
    "shortDescription": {
      "english": "This Pokemon's sound-based moves become Water type."
    }
  },
  "205": {
    "name": {
      "english": "Triage"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's healing moves have their priority increased by 3."
    }
  },
  "206": {
    "name": {
      "english": "Galvanize"
    },
    "description": {
      "english": "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."
    },
    "shortDescription": {
      "english": "This Pokemon's Normal-type moves become Electric type and have 1.2x power."
    }
  },
  "207": {
    "name": {
      "english": "Surge Surfer"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If Electric Terrain is active, this Pokemon's Speed is doubled."
    }
  },
  "208": {
    "name": {
      "english": "Schooling"
    },
    "description": {
      "english": "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form."
    },
    "shortDescription": {
      "english": "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form."
    }
  },
  "209": {
    "name": {
      "english": "Disguise"
    },
    "description": {
      "english": "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise."
    },
    "shortDescription": {
      "english": "(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead."
    }
  },
  "210": {
    "name": {
      "english": "Battle Bond"
    },
    "description": {
      "english": "If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times."
    },
    "shortDescription": {
      "english": "After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x."
    }
  },
  "211": {
    "name": {
      "english": "Power Construct"
    },
    "description": {
      "english": "If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn."
    },
    "shortDescription": {
      "english": "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn."
    }
  },
  "212": {
    "name": {
      "english": "Corrosion"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon can poison or badly poison other Pokemon regardless of their typing."
    }
  },
  "213": {
    "name": {
      "english": "Comatose"
    },
    "description": {
      "english": "This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability."
    },
    "shortDescription": {
      "english": "This Pokemon cannot be statused, and is considered to be asleep."
    }
  },
  "214": {
    "name": {
      "english": "Queenly Majesty"
    },
    "description": {
      "english": "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, allies are protected from opposing priority moves."
    }
  },
  "215": {
    "name": {
      "english": "Innards Out"
    },
    "description": {
      "english": "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon."
    },
    "shortDescription": {
      "english": "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP."
    }
  },
  "216": {
    "name": {
      "english": "Dancer"
    },
    "description": {
      "english": "After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again."
    },
    "shortDescription": {
      "english": "After another Pokemon uses a dance move, this Pokemon uses the same move."
    }
  },
  "217": {
    "name": {
      "english": "Battery"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's allies have the power of their special attacks multiplied by 1.3."
    }
  },
  "218": {
    "name": {
      "english": "Fluffy"
    },
    "description": {
      "english": "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves."
    },
    "shortDescription": {
      "english": "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves."
    }
  },
  "219": {
    "name": {
      "english": "Dazzling"
    },
    "description": {
      "english": "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, allies are protected from opposing priority moves."
    }
  },
  "220": {
    "name": {
      "english": "Soul-Heart"
    },
    "description": {
      "english": "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints."
    },
    "shortDescription": {
      "english": "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints."
    }
  },
  "221": {
    "name": {
      "english": "Tangling Hair"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage."
    }
  },
  "222": {
    "name": {
      "english": "Receiver"
    },
    "description": {
      "english": "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Stance Change, Trace, Wonder Guard, and Zen Mode."
    },
    "shortDescription": {
      "english": "This Pokemon copies the Ability of an ally that faints."
    }
  },
  "223": {
    "name": {
      "english": "Power of Alchemy"
    },
    "description": {
      "english": "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode."
    },
    "shortDescription": {
      "english": "This Pokemon copies the Ability of an ally that faints."
    }
  },
  "224": {
    "name": {
      "english": "Beast Boost"
    },
    "description": {
      "english": "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon."
    },
    "shortDescription": {
      "english": "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon."
    }
  },
  "225": {
    "name": {
      "english": "RKS System"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If this Pokemon is a Silvally, its type changes to match its held Memory."
    }
  },
  "226": {
    "name": {
      "english": "Electric Surge"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Electric Terrain."
    }
  },
  "227": {
    "name": {
      "english": "Psychic Surge"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Psychic Terrain."
    }
  },
  "228": {
    "name": {
      "english": "Misty Surge"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Misty Terrain."
    }
  },
  "229": {
    "name": {
      "english": "Grassy Surge"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon summons Grassy Terrain."
    }
  },
  "230": {
    "name": {
      "english": "Full Metal Body"
    },
    "description": {
      "english": "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability."
    },
    "shortDescription": {
      "english": "Prevents other Pokemon from lowering this Pokemon's stat stages."
    }
  },
  "231": {
    "name": {
      "english": "Shadow Shield"
    },
    "description": {
      "english": "If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability."
    },
    "shortDescription": {
      "english": "If this Pokemon is at full HP, damage taken from attacks is halved."
    }
  },
  "232": {
    "name": {
      "english": "Prism Armor"
    },
    "description": {
      "english": "This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability."
    },
    "shortDescription": {
      "english": "This Pokemon receives 3/4 damage from supereffective attacks."
    }
  },
  "233": {
    "name": {
      "english": "Neuroforce"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's attacks that are super effective against the target do 1.25x damage."
    }
  },
  "234": {
    "name": {
      "english": "Intrepid Sword"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon's Attack is raised by 1 stage."
    }
  },
  "235": {
    "name": {
      "english": "Dauntless Shield"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, this Pokemon's Defense is raised by 1 stage."
    }
  },
  "236": {
    "name": {
      "english": "Libero"
    },
    "description": {
      "english": "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type."
    },
    "shortDescription": {
      "english": "This Pokemon's type changes to match the type of the move it is about to use."
    }
  },
  "237": {
    "name": {
      "english": "Ball Fetch"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "No competitive use."
    }
  },
  "238": {
    "name": {
      "english": "Cotton Down"
    },
    "description": {
      "english": "When this Pokemon is hit by an attack, the Speed of all other Pokemon on the field is lowered by 1 stage."
    },
    "shortDescription": {
      "english": "If this Pokemon is hit, it lowers the Speed of all other Pokemon on the field 1 stage."
    }
  },
  "239": {
    "name": {
      "english": "Propeller Tail"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves cannot be redirected to a different target by any effect."
    }
  },
  "240": {
    "name": {
      "english": "Mirror Armor"
    },
    "description": {
      "english": "When one of this Pokemon's stat stages would be lowered by another Pokemon, that Pokemon's stat stage is lowered instead. This effect does not happen if this Pokemon's stat stage was already -6."
    },
    "shortDescription": {
      "english": "If this Pokemon's stat stages would be lowered, the attacker's are lowered instead."
    }
  },
  "241": {
    "name": {
      "english": "Gulp Missile"
    },
    "description": {
      "english": "If this Pokemon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes."
    },
    "shortDescription": {
      "english": "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis."
    }
  },
  "242": {
    "name": {
      "english": "Stalwart"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's moves cannot be redirected to a different target by any effect."
    }
  },
  "243": {
    "name": {
      "english": "Steam Engine"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves."
    }
  },
  "244": {
    "name": {
      "english": "Punk Rock"
    },
    "description": {
      "english": "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves."
    },
    "shortDescription": {
      "english": "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power."
    }
  },
  "245": {
    "name": {
      "english": "Sand Spit"
    },
    "description": {
      "english": "When this Pokemon is hit by an attack, Sandstorm begins. This effect happens after the effects of Max and G-Max Moves."
    },
    "shortDescription": {
      "english": "When this Pokemon is hit, Sandstorm begins."
    }
  },
  "246": {
    "name": {
      "english": "Ice Scales"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon receives 1/2 damage from special attacks."
    }
  },
  "247": {
    "name": {
      "english": "Ripen"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "When this Pokemon eats a Berry, its effect is doubled."
    }
  },
  "248": {
    "name": {
      "english": "Ice Face"
    },
    "description": {
      "english": "If this Pokemon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Hail begins or when Eiscue switches in while Hail is active. Confusion damage also breaks the ice face."
    },
    "shortDescription": {
      "english": "If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail."
    }
  },
  "249": {
    "name": {
      "english": "Power Spot"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's allies have the power of their moves multiplied by 1.3."
    }
  },
  "250": {
    "name": {
      "english": "Mimicry"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's type changes to match the Terrain. Type reverts when Terrain ends."
    }
  },
  "251": {
    "name": {
      "english": "Screen Cleaner"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides."
    }
  },
  "252": {
    "name": {
      "english": "Steely Spirit"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon and its allies' Steel-type moves have their power multiplied by 1.5."
    }
  },
  "253": {
    "name": {
      "english": "Perish Body"
    },
    "description": {
      "english": "Making contact with this Pokemon starts the Perish Song effect for it and the attacker. This effect does not happen if this Pokemon already has a perish count."
    },
    "shortDescription": {
      "english": "Making contact with this Pokemon starts the Perish Song effect for it and the attacker."
    }
  },
  "254": {
    "name": {
      "english": "Wandering Spirit"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "Pokemon making contact with this Pokemon have their Ability swapped with this one."
    }
  },
  "255": {
    "name": {
      "english": "Gorilla Tactics"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon's Attack is 1.5x, but it can only select the first move it executes."
    }
  },
  "256": {
    "name": {
      "english": "Neutralizing Gas"
    },
    "description": {
      "english": "While this Pokemon is active, Abilities have no effect. Does not affect the Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities."
    },
    "shortDescription": {
      "english": "While this Pokemon is active, Abilities have no effect."
    }
  },
  "257": {
    "name": {
      "english": "Pastel Veil"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "This Pokemon and its allies cannot be poisoned. On switch-in, cures poisoned allies."
    }
  },
  "258": {
    "name": {
      "english": "Hunger Switch"
    },
    "description": {
      "english": ""
    },
    "shortDescription": {
      "english": "If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn."
    }
  }
};

(function addId() {
  Object.keys(testAbilities)
    .forEach(id => {
      testAbilities[id].id = Number(id);
    });
  console.log(JSON.stringify(testAbilities));
})();
