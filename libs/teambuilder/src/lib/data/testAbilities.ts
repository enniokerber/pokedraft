import {AbilityRecord} from "../models/api";

export const testAbilities: AbilityRecord = {
    '0': {
      'name': { 'english': 'No Ability' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Does nothing.' },
      'id': 0
    },
    '1': {
      'name': { 'english': 'Stench' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks without a chance to flinch have a 10% chance to flinch.' },
      'id': 1
    },
    '2': {
      'name': { 'english': 'Drizzle' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Rain Dance.' },
      'id': 2
    },
    '3': {
      'name': { 'english': 'Speed Boost' },
      'description': { 'english': 'This Pokemon\'s Speed is raised by 1 stage at the end of each full turn it has been on the field.' },
      'shortDescription': { 'english': 'This Pokemon\'s Speed is raised 1 stage at the end of each full turn on the field.' },
      'id': 3
    },
    '4': {
      'name': { 'english': 'Battle Armor' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be struck by a critical hit.' },
      'id': 4
    },
    '5': {
      'name': { 'english': 'Sturdy' },
      'description': { 'english': 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.' },
      'shortDescription': { 'english': 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.' },
      'id': 5
    },
    '6': {
      'name': { 'english': 'Damp' },
      'description': { 'english': 'While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.' },
      'shortDescription': { 'english': 'Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.' },
      'id': 6
    },
    '7': {
      'name': { 'english': 'Limber' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.' },
      'id': 7
    },
    '8': {
      'name': { 'english': 'Sand Veil' },
      'description': { 'english': 'If Sandstorm is active, this Pokemon\'s evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.' },
      'shortDescription': { 'english': 'If Sandstorm is active, this Pokemon\'s evasiveness is 1.25x; immunity to Sandstorm.' },
      'id': 8
    },
    '9': {
      'name': { 'english': 'Static' },
      'description': { 'english': '' },
      'shortDescription': { 'english': '30% chance a Pokemon making contact with this Pokemon will be paralyzed.' },
      'id': 9
    },
    '10': {
      'name': { 'english': 'Volt Absorb' },
      'description': { 'english': 'This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.' },
      'shortDescription': { 'english': 'This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.' },
      'id': 10
    },
    '11': {
      'name': { 'english': 'Water Absorb' },
      'description': { 'english': 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.' },
      'shortDescription': { 'english': 'This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.' },
      'id': 11
    },
    '12': {
      'name': { 'english': 'Oblivious' },
      'description': { 'english': 'This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate.' },
      'shortDescription': { 'english': 'This Pokemon cannot be infatuated or taunted. Immune to Intimidate.' },
      'id': 12
    },
    '13': {
      'name': { 'english': 'Cloud Nine' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'While this Pokemon is active, the effects of weather conditions are disabled.' },
      'id': 13
    },
    '14': {
      'name': { 'english': 'Compound Eyes' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves have their accuracy multiplied by 1.3.' },
      'id': 14
    },
    '15': {
      'name': { 'english': 'Insomnia' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.' },
      'id': 15
    },
    '16': {
      'name': { 'english': 'Color Change' },
      'description': { 'english': 'This Pokemon\'s type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.' },
      'shortDescription': { 'english': 'This Pokemon\'s type changes to the type of a move it\'s hit by, unless it has the type.' },
      'id': 16
    },
    '17': {
      'name': { 'english': 'Immunity' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.' },
      'id': 17
    },
    '18': {
      'name': { 'english': 'Flash Fire' },
      'description': { 'english': 'This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.' },
      'shortDescription': { 'english': 'This Pokemon\'s Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.' },
      'id': 18
    },
    '19': {
      'name': { 'english': 'Shield Dust' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon is not affected by the secondary effect of another Pokemon\'s attack.' },
      'id': 19
    },
    '20': {
      'name': { 'english': 'Own Tempo' },
      'description': { 'english': 'This Pokemon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate.' },
      'shortDescription': { 'english': 'This Pokemon cannot be confused. Immune to Intimidate.' },
      'id': 20
    },
    '21': {
      'name': { 'english': 'Suction Cups' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be forced to switch out by another Pokemon\'s attack or item.' },
      'id': 21
    },
    '22': {
      'name': { 'english': 'Intimidate' },
      'description': { 'english': 'On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokemon behind a substitute are immune.' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.' },
      'id': 22
    },
    '23': {
      'name': { 'english': 'Shadow Tag' },
      'description': { 'english': 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.' },
      'shortDescription': { 'english': 'Prevents adjacent foes from choosing to switch unless they also have this Ability.' },
      'id': 23
    },
    '24': {
      'name': { 'english': 'Rough Skin' },
      'description': { 'english': 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.' },
      'shortDescription': { 'english': 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.' },
      'id': 24
    },
    '25': {
      'name': { 'english': 'Wonder Guard' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon can only be damaged by supereffective moves and indirect damage.' },
      'id': 25
    },
    '26': {
      'name': { 'english': 'Levitate' },
      'description': { 'english': 'This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.' },
      'shortDescription': { 'english': 'This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.' },
      'id': 26
    },
    '27': {
      'name': { 'english': 'Effect Spore' },
      'description': { 'english': '30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.' },
      'shortDescription': { 'english': '30% chance of poison/paralysis/sleep on others making contact with this Pokemon.' },
      'id': 27
    },
    '28': {
      'name': { 'english': 'Synchronize' },
      'description': { 'english': 'If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.' },
      'shortDescription': { 'english': 'If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.' },
      'id': 28
    },
    '29': {
      'name': { 'english': 'Clear Body' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s stat stages.' },
      'id': 29
    },
    '30': {
      'name': { 'english': 'Natural Cure' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon has its major status condition cured when it switches out.' },
      'id': 30
    },
    '31': {
      'name': { 'english': 'Lightning Rod' },
      'description': { 'english': 'This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.' },
      'shortDescription': { 'english': 'This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.' },
      'id': 31
    },
    '32': {
      'name': { 'english': 'Serene Grace' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves have their secondary effect chance doubled.' },
      'id': 32
    },
    '33': {
      'name': { 'english': 'Swift Swim' },
      'description': { 'english': 'If Rain Dance is active and this Pokemon is not holding Utility Umbrella, this Pokemon\'s Speed is doubled.' },
      'shortDescription': { 'english': 'If Rain Dance is active, this Pokemon\'s Speed is doubled.' },
      'id': 33
    },
    '34': {
      'name': { 'english': 'Chlorophyll' },
      'description': { 'english': 'If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon\'s Speed is doubled.' },
      'shortDescription': { 'english': 'If Sunny Day is active, this Pokemon\'s Speed is doubled.' },
      'id': 34
    },
    '35': {
      'name': { 'english': 'Illuminate' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'No competitive use.' },
      'id': 35
    },
    '36': {
      'name': { 'english': 'Trace' },
      'description': { 'english': 'On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon\'s Ability. However, if one or more adjacent Pokemon has the Ability "No Ability", Trace won\'t copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned "No Ability", as well as Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode.' },
      'shortDescription': { 'english': 'On switch-in, or when it can, this Pokemon copies a random adjacent foe\'s Ability.' },
      'id': 36
    },
    '37': {
      'name': { 'english': 'Huge Power' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is doubled.' },
      'id': 37
    },
    '38': {
      'name': { 'english': 'Poison Point' },
      'description': { 'english': '' },
      'shortDescription': { 'english': '30% chance a Pokemon making contact with this Pokemon will be poisoned.' },
      'id': 38
    },
    '39': {
      'name': { 'english': 'Inner Focus' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be made to flinch. Immune to Intimidate.' },
      'id': 39
    },
    '40': {
      'name': { 'english': 'Magma Armor' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.' },
      'id': 40
    },
    '41': {
      'name': { 'english': 'Water Veil' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be burned. Gaining this Ability while burned cures it.' },
      'id': 41
    },
    '42': {
      'name': { 'english': 'Magnet Pull' },
      'description': { 'english': 'Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.' },
      'shortDescription': { 'english': 'Prevents adjacent Steel-type foes from choosing to switch.' },
      'id': 42
    },
    '43': {
      'name': { 'english': 'Soundproof' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon is immune to sound-based moves, including Heal Bell.' },
      'id': 43
    },
    '44': {
      'name': { 'english': 'Rain Dish' },
      'description': { 'english': 'If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.' },
      'shortDescription': { 'english': 'If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.' },
      'id': 44
    },
    '45': {
      'name': { 'english': 'Sand Stream' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Sandstorm.' },
      'id': 45
    },
    '46': {
      'name': { 'english': 'Pressure' },
      'description': { 'english': 'If this Pokemon is the target of an opposing Pokemon\'s move, that move loses one additional PP.' },
      'shortDescription': { 'english': 'If this Pokemon is the target of a foe\'s move, that move loses one additional PP.' },
      'id': 46
    },
    '47': {
      'name': { 'english': 'Thick Fat' },
      'description': { 'english': 'If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon\'s attacking stat is halved when calculating the damage to this Pokemon.' },
      'shortDescription': { 'english': 'Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.' },
      'id': 47
    },
    '48': {
      'name': { 'english': 'Early Bird' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s sleep counter drops by 2 instead of 1.' },
      'id': 48
    },
    '49': {
      'name': { 'english': 'Flame Body' },
      'description': { 'english': '' },
      'shortDescription': { 'english': '30% chance a Pokemon making contact with this Pokemon will be burned.' },
      'id': 49
    },
    '50': {
      'name': { 'english': 'Run Away' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'No competitive use.' },
      'id': 50
    },
    '51': {
      'name': { 'english': 'Keen Eye' },
      'description': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s accuracy stat stage. This Pokemon ignores a target\'s evasiveness stat stage.' },
      'shortDescription': { 'english': 'This Pokemon\'s accuracy can\'t be lowered by others; ignores their evasiveness stat.' },
      'id': 51
    },
    '52': {
      'name': { 'english': 'Hyper Cutter' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s Attack stat stage.' },
      'id': 52
    },
    '53': {
      'name': { 'english': 'Pickup' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.' },
      'id': 53
    },
    '54': {
      'name': { 'english': 'Truant' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon skips every other turn instead of using a move.' },
      'id': 54
    },
    '55': {
      'name': { 'english': 'Hustle' },
      'description': { 'english': 'This Pokemon\'s Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is 1.5x and accuracy of its physical attacks is 0.8x.' },
      'id': 55
    },
    '56': {
      'name': { 'english': 'Cute Charm' },
      'description': { 'english': 'There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.' },
      'shortDescription': { 'english': '30% chance of infatuating Pokemon of the opposite gender if they make contact.' },
      'id': 56
    },
    '57': {
      'name': { 'english': 'Plus' },
      'description': { 'english': 'If an active ally has this Ability or the Minus Ability, this Pokemon\'s Special Attack is multiplied by 1.5.' },
      'shortDescription': { 'english': 'If an active ally has this Ability or the Minus Ability, this Pokemon\'s Sp. Atk is 1.5x.' },
      'id': 57
    },
    '58': {
      'name': { 'english': 'Minus' },
      'description': { 'english': 'If an active ally has this Ability or the Plus Ability, this Pokemon\'s Special Attack is multiplied by 1.5.' },
      'shortDescription': { 'english': 'If an active ally has this Ability or the Plus Ability, this Pokemon\'s Sp. Atk is 1.5x.' },
      'id': 58
    },
    '59': {
      'name': { 'english': 'Forecast' },
      'description': { 'english': 'If this Pokemon is a Castform, its type changes to the current weather condition\'s type, except Sandstorm. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types.' },
      'shortDescription': { 'english': 'Castform\'s type changes to the current weather condition\'s type, except Sandstorm.' },
      'id': 59
    },
    '60': {
      'name': { 'english': 'Sticky Hold' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot lose its held item due to another Pokemon\'s attack.' },
      'id': 60
    },
    '61': {
      'name': { 'english': 'Shed Skin' },
      'description': { 'english': 'This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.' },
      'shortDescription': { 'english': 'This Pokemon has a 33% chance to have its status cured at the end of each turn.' },
      'id': 61
    },
    '62': {
      'name': { 'english': 'Guts' },
      'description': { 'english': 'If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn\'s physical damage halving is ignored.' },
      'shortDescription': { 'english': 'If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.' },
      'id': 62
    },
    '63': {
      'name': { 'english': 'Marvel Scale' },
      'description': { 'english': 'If this Pokemon has a major status condition, its Defense is multiplied by 1.5.' },
      'shortDescription': { 'english': 'If this Pokemon is statused, its Defense is 1.5x.' },
      'id': 63
    },
    '64': {
      'name': { 'english': 'Liquid Ooze' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon damages those draining HP from it for as much as they would heal.' },
      'id': 64
    },
    '65': {
      'name': { 'english': 'Overgrow' },
      'description': { 'english': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.' },
      'shortDescription': { 'english': 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Grass attacks.' },
      'id': 65
    },
    '66': {
      'name': { 'english': 'Blaze' },
      'description': { 'english': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.' },
      'shortDescription': { 'english': 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Fire attacks.' },
      'id': 66
    },
    '67': {
      'name': { 'english': 'Torrent' },
      'description': { 'english': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.' },
      'shortDescription': { 'english': 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Water attacks.' },
      'id': 67
    },
    '68': {
      'name': { 'english': 'Swarm' },
      'description': { 'english': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.' },
      'shortDescription': { 'english': 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Bug attacks.' },
      'id': 68
    },
    '69': {
      'name': { 'english': 'Rock Head' },
      'description': { 'english': 'This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.' },
      'shortDescription': { 'english': 'This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.' },
      'id': 69
    },
    '70': {
      'name': { 'english': 'Drought' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Sunny Day.' },
      'id': 70
    },
    '71': {
      'name': { 'english': 'Arena Trap' },
      'description': { 'english': 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.' },
      'shortDescription': { 'english': 'Prevents adjacent foes from choosing to switch unless they are airborne.' },
      'id': 71
    },
    '72': {
      'name': { 'english': 'Vital Spirit' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.' },
      'id': 72
    },
    '73': {
      'name': { 'english': 'White Smoke' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s stat stages.' },
      'id': 73
    },
    '74': {
      'name': { 'english': 'Pure Power' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is doubled.' },
      'id': 74
    },
    '75': {
      'name': { 'english': 'Shell Armor' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon cannot be struck by a critical hit.' },
      'id': 75
    },
    '76': {
      'name': { 'english': 'Air Lock' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'While this Pokemon is active, the effects of weather conditions are disabled.' },
      'id': 76
    },
    '77': {
      'name': { 'english': 'Tangled Feet' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s evasiveness is doubled as long as it is confused.' },
      'id': 77
    },
    '78': {
      'name': { 'english': 'Motor Drive' },
      'description': { 'english': 'This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.' },
      'shortDescription': { 'english': 'This Pokemon\'s Speed is raised 1 stage if hit by an Electric move; Electric immunity.' },
      'id': 78
    },
    '79': {
      'name': { 'english': 'Rivalry' },
      'description': { 'english': 'This Pokemon\'s attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks do 1.25x on same gender targets; 0.75x on opposite gender.' },
      'id': 79
    },
    '80': {
      'name': { 'english': 'Steadfast' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon flinches, its Speed is raised by 1 stage.' },
      'id': 80
    },
    '81': {
      'name': { 'english': 'Snow Cloak' },
      'description': { 'english': 'If Hail is active, this Pokemon\'s evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.' },
      'shortDescription': { 'english': 'If Hail is active, this Pokemon\'s evasiveness is 1.25x; immunity to Hail.' },
      'id': 81
    },
    '82': {
      'name': { 'english': 'Gluttony' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.' },
      'id': 82
    },
    '83': {
      'name': { 'english': 'Anger Point' },
      'description': { 'english': 'If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.' },
      'shortDescription': { 'english': 'If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.' },
      'id': 83
    },
    '84': {
      'name': { 'english': 'Unburden' },
      'description': { 'english': 'If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.' },
      'shortDescription': { 'english': 'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.' },
      'id': 84
    },
    '85': {
      'name': { 'english': 'Heatproof' },
      'description': { 'english': 'The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.' },
      'shortDescription': { 'english': 'The power of Fire-type attacks against this Pokemon is halved; burn damage halved.' },
      'id': 85
    },
    '86': {
      'name': { 'english': 'Simple' },
      'description': { 'english': 'When this Pokemon\'s stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.' },
      'shortDescription': { 'english': 'When this Pokemon\'s stat stages are raised or lowered, the effect is doubled instead.' },
      'id': 86
    },
    '87': {
      'name': { 'english': 'Dry Skin' },
      'description': { 'english': 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokemon is holding Utility Umbrella, the effects of weather are nullified.' },
      'shortDescription': { 'english': 'This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.' },
      'id': 87
    },
    '88': {
      'name': { 'english': 'Download' },
      'description': { 'english': 'On switch-in, this Pokemon\'s Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.' },
      'shortDescription': { 'english': 'On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes\' weaker Defense.' },
      'id': 88
    },
    '89': {
      'name': { 'english': 'Iron Fist' },
      'description': { 'english': 'This Pokemon\'s punch-based attacks have their power multiplied by 1.2.' },
      'shortDescription': { 'english': 'This Pokemon\'s punch-based attacks have 1.2x power. Sucker Punch is not boosted.' },
      'id': 89
    },
    '90': {
      'name': { 'english': 'Poison Heal' },
      'description': { 'english': 'If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.' },
      'shortDescription': { 'english': 'This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.' },
      'id': 90
    },
    '91': {
      'name': { 'english': 'Adaptability' },
      'description': { 'english': 'This Pokemon\'s moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.' },
      'shortDescription': { 'english': 'This Pokemon\'s same-type attack bonus (STAB) is 2 instead of 1.5.' },
      'id': 91
    },
    '92': {
      'name': { 'english': 'Skill Link' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s multi-hit attacks always hit the maximum number of times.' },
      'id': 92
    },
    '93': {
      'name': { 'english': 'Hydration' },
      'description': { 'english': 'This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active. If this Pokemon is holding Utility Umbrella, its major status condition will not be cured.' },
      'shortDescription': { 'english': 'This Pokemon has its status cured at the end of each turn if Rain Dance is active.' },
      'id': 93
    },
    '94': {
      'name': { 'english': 'Solar Power' },
      'description': { 'english': 'If Sunny Day is active, this Pokemon\'s Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.' },
      'shortDescription': { 'english': 'If Sunny Day is active, this Pokemon\'s Sp. Atk is 1.5x; loses 1/8 max HP per turn.' },
      'id': 94
    },
    '95': {
      'name': { 'english': 'Quick Feet' },
      'description': { 'english': 'If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.' },
      'shortDescription': { 'english': 'If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.' },
      'id': 95
    },
    '96': {
      'name': { 'english': 'Normalize' },
      'description': { 'english': 'This Pokemon\'s moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move\'s type.' },
      'shortDescription': { 'english': 'This Pokemon\'s moves are changed to be Normal type and have 1.2x power.' },
      'id': 96
    },
    '97': {
      'name': { 'english': 'Sniper' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.' },
      'id': 97
    },
    '98': {
      'name': { 'english': 'Magic Guard' },
      'description': { 'english': 'This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.' },
      'shortDescription': { 'english': 'This Pokemon can only be damaged by direct attacks.' },
      'id': 98
    },
    '99': {
      'name': { 'english': 'No Guard' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Every move used by or against this Pokemon will always hit.' },
      'id': 99
    },
    '100': {
      'name': { 'english': 'Stall' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon moves last among Pokemon using the same or greater priority moves.' },
      'id': 100
    },
    '101': {
      'name': { 'english': 'Technician' },
      'description': { 'english': 'This Pokemon\'s moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.' },
      'shortDescription': { 'english': 'This Pokemon\'s moves of 60 power or less have 1.5x power. Includes Struggle.' },
      'id': 101
    },
    '102': {
      'name': { 'english': 'Leaf Guard' },
      'description': { 'english': 'If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a major status condition and Rest will fail for it.' },
      'shortDescription': { 'english': 'If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.' },
      'id': 102
    },
    '103': {
      'name': { 'english': 'Klutz' },
      'description': { 'english': 'This Pokemon\'s held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.' },
      'shortDescription': { 'english': 'This Pokemon\'s held item has no effect, except Macho Brace. Fling cannot be used.' },
      'id': 103
    },
    '104': {
      'name': { 'english': 'Mold Breaker' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves and their effects ignore the Abilities of other Pokemon.' },
      'id': 104
    },
    '105': {
      'name': { 'english': 'Super Luck' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s critical hit ratio is raised by 1 stage.' },
      'id': 105
    },
    '106': {
      'name': { 'english': 'Aftermath' },
      'description': { 'english': 'If this Pokemon is knocked out with a contact move, that move\'s user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.' },
      'shortDescription': { 'english': 'If this Pokemon is KOed with a contact move, that move\'s user loses 1/4 its max HP.' },
      'id': 106
    },
    '107': {
      'name': { 'english': 'Anticipation' },
      'description': { 'english': 'On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.' },
      'id': 107
    },
    '108': {
      'name': { 'english': 'Forewarn' },
      'description': { 'english': 'On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon is alerted to the foes\' move with the highest power.' },
      'id': 108
    },
    '109': {
      'name': { 'english': 'Unaware' },
      'description': { 'english': 'This Pokemon ignores other Pokemon\'s Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon\'s Defense, Special Defense, and evasiveness stat stages when dealing damage.' },
      'shortDescription': { 'english': 'This Pokemon ignores other Pokemon\'s stat stages when taking or doing damage.' },
      'id': 109
    },
    '110': {
      'name': { 'english': 'Tinted Lens' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks that are not very effective on a target deal double damage.' },
      'id': 110
    },
    '111': {
      'name': { 'english': 'Filter' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon receives 3/4 damage from supereffective attacks.' },
      'id': 111
    },
    '112': {
      'name': { 'english': 'Slow Start' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon\'s Attack and Speed are halved for 5 turns.' },
      'id': 112
    },
    '113': {
      'name': { 'english': 'Scrappy' },
      'description': { 'english': 'This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate.' },
      'shortDescription': { 'english': 'Fighting, Normal moves hit Ghost. Immune to Intimidate.' },
      'id': 113
    },
    '114': {
      'name': { 'english': 'Storm Drain' },
      'description': { 'english': 'This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.' },
      'shortDescription': { 'english': 'This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.' },
      'id': 114
    },
    '115': {
      'name': { 'english': 'Ice Body' },
      'description': { 'english': 'If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.' },
      'shortDescription': { 'english': 'If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.' },
      'id': 115
    },
    '116': {
      'name': { 'english': 'Solid Rock' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon receives 3/4 damage from supereffective attacks.' },
      'id': 116
    },
    '117': {
      'name': { 'english': 'Snow Warning' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Hail.' },
      'id': 117
    },
    '118': {
      'name': { 'english': 'Honey Gather' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'No competitive use.' },
      'id': 118
    },
    '119': {
      'name': { 'english': 'Frisk' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon identifies the held items of all opposing Pokemon.' },
      'id': 119
    },
    '120': {
      'name': { 'english': 'Reckless' },
      'description': { 'english': 'This Pokemon\'s attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks with recoil or crash damage have 1.2x power; not Struggle.' },
      'id': 120
    },
    '121': {
      'name': { 'english': 'Multitype' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.' },
      'id': 121
    },
    '122': {
      'name': { 'english': 'Flower Gift' },
      'description': { 'english': 'If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts.' },
      'shortDescription': { 'english': 'If user is Cherrim and Sunny Day is active, it and allies\' Attack and Sp. Def are 1.5x.' },
      'id': 122
    },
    '123': {
      'name': { 'english': 'Bad Dreams' },
      'description': { 'english': 'Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.' },
      'shortDescription': { 'english': 'Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.' },
      'id': 123
    },
    '124': {
      'name': { 'english': 'Pickpocket' },
      'description': { 'english': 'If this Pokemon has no item and is hit by a contact move, it steals the attacker\'s item. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.' },
      'shortDescription': { 'english': 'If this Pokemon has no item and is hit by a contact move, it steals the attacker\'s item.' },
      'id': 124
    },
    '125': {
      'name': { 'english': 'Sheer Force' },
      'description': { 'english': 'This Pokemon\'s attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks with secondary effects have 1.3x power; nullifies the effects.' },
      'id': 125
    },
    '126': {
      'name': { 'english': 'Contrary' },
      'description': { 'english': 'If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.' },
      'shortDescription': { 'english': 'If this Pokemon has a stat stage raised it is lowered instead, and vice versa.' },
      'id': 126
    },
    '127': {
      'name': { 'english': 'Unnerve' },
      'description': { 'english': 'While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon\'s Speed tiers.' },
      'shortDescription': { 'english': 'While this Pokemon is active, it prevents opposing Pokemon from using their Berries.' },
      'id': 127
    },
    '128': {
      'name': { 'english': 'Defiant' },
      'description': { 'english': 'This Pokemon\'s Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is raised by 2 for each of its stats that is lowered by a foe.' },
      'id': 128
    },
    '129': {
      'name': { 'english': 'Defeatist' },
      'description': { 'english': 'While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.' },
      'shortDescription': { 'english': 'While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.' },
      'id': 129
    },
    '130': {
      'name': { 'english': 'Cursed Body' },
      'description': { 'english': 'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker\'s moves is already disabled.' },
      'shortDescription': { 'english': 'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.' },
      'id': 130
    },
    '131': {
      'name': { 'english': 'Healer' },
      'description': { 'english': 'There is a 30% chance of curing an adjacent ally\'s major status condition at the end of each turn.' },
      'shortDescription': { 'english': '30% chance of curing an adjacent ally\'s status at the end of each turn.' },
      'id': 131
    },
    '132': {
      'name': { 'english': 'Friend Guard' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s allies receive 3/4 damage from other Pokemon\'s attacks.' },
      'id': 132
    },
    '133': {
      'name': { 'english': 'Weak Armor' },
      'description': { 'english': 'If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.' },
      'shortDescription': { 'english': 'If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.' },
      'id': 133
    },
    '134': {
      'name': { 'english': 'Heavy Metal' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s weight is doubled.' },
      'id': 134
    },
    '135': {
      'name': { 'english': 'Light Metal' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s weight is halved.' },
      'id': 135
    },
    '136': {
      'name': { 'english': 'Multiscale' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon is at full HP, damage taken from attacks is halved.' },
      'id': 136
    },
    '137': {
      'name': { 'english': 'Toxic Boost' },
      'description': { 'english': 'While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.' },
      'shortDescription': { 'english': 'While this Pokemon is poisoned, its physical attacks have 1.5x power.' },
      'id': 137
    },
    '138': {
      'name': { 'english': 'Flare Boost' },
      'description': { 'english': 'While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.' },
      'shortDescription': { 'english': 'While this Pokemon is burned, its special attacks have 1.5x power.' },
      'id': 138
    },
    '139': {
      'name': { 'english': 'Harvest' },
      'description': { 'english': 'If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.' },
      'shortDescription': { 'english': 'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.' },
      'id': 139
    },
    '140': {
      'name': { 'english': 'Telepathy' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon does not take damage from attacks made by its allies.' },
      'id': 140
    },
    '141': {
      'name': { 'english': 'Moody' },
      'description': { 'english': 'This Pokemon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn.' },
      'shortDescription': { 'english': 'Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn.' },
      'id': 141
    },
    '142': {
      'name': { 'english': 'Overcoat' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon is immune to powder moves and damage from Sandstorm or Hail.' },
      'id': 142
    },
    '143': {
      'name': { 'english': 'Poison Touch' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s contact moves have a 30% chance of poisoning.' },
      'id': 143
    },
    '144': {
      'name': { 'english': 'Regenerator' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.' },
      'id': 144
    },
    '145': {
      'name': { 'english': 'Big Pecks' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s Defense stat stage.' },
      'id': 145
    },
    '146': {
      'name': { 'english': 'Sand Rush' },
      'description': { 'english': 'If Sandstorm is active, this Pokemon\'s Speed is doubled. This Pokemon takes no damage from Sandstorm.' },
      'shortDescription': { 'english': 'If Sandstorm is active, this Pokemon\'s Speed is doubled; immunity to Sandstorm.' },
      'id': 146
    },
    '147': {
      'name': { 'english': 'Wonder Skin' },
      'description': { 'english': 'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.' },
      'shortDescription': { 'english': 'Status moves with accuracy checks are 50% accurate when used on this Pokemon.' },
      'id': 147
    },
    '148': {
      'name': { 'english': 'Analytic' },
      'description': { 'english': 'The power of this Pokemon\'s move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks have 1.3x power if it is the last to move in a turn.' },
      'id': 148
    },
    '149': {
      'name': { 'english': 'Illusion' },
      'description': { 'english': 'When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon\'s attack. This Pokemon\'s actual level and HP are displayed instead of those of the mimicked Pokemon.' },
      'shortDescription': { 'english': 'This Pokemon appears as the last Pokemon in the party until it takes direct damage.' },
      'id': 149
    },
    '150': {
      'name': { 'english': 'Imposter' },
      'description': { 'english': 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.' },
      'id': 150
    },
    '151': {
      'name': { 'english': 'Infiltrator' },
      'description': { 'english': 'This Pokemon\'s moves ignore substitutes and the opposing side\'s Reflect, Light Screen, Safeguard, Mist and Aurora Veil.' },
      'shortDescription': { 'english': 'Moves ignore substitutes and foe\'s Reflect/Light Screen/Safeguard/Mist/Aurora Veil.' },
      'id': 151
    },
    '152': {
      'name': { 'english': 'Mummy' },
      'description': { 'english': 'Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.' },
      'shortDescription': { 'english': 'Pokemon making contact with this Pokemon have their Ability changed to Mummy.' },
      'id': 152
    },
    '153': {
      'name': { 'english': 'Moxie' },
      'description': { 'english': 'This Pokemon\'s Attack is raised by 1 stage if it attacks and knocks out another Pokemon.' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is raised by 1 stage if it attacks and KOes another Pokemon.' },
      'id': 153
    },
    '154': {
      'name': { 'english': 'Justified' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is raised by 1 stage after it is damaged by a Dark-type move.' },
      'id': 154
    },
    '155': {
      'name': { 'english': 'Rattled' },
      'description': { 'english': 'This Pokemon\'s Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate.' },
      'shortDescription': { 'english': 'Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.' },
      'id': 155
    },
    '156': {
      'name': { 'english': 'Magic Bounce' },
      'description': { 'english': 'This Pokemon blocks certain status moves and instead uses the move against the original user.' },
      'shortDescription': { 'english': 'This Pokemon blocks certain status moves and bounces them back to the user.' },
      'id': 156
    },
    '157': {
      'name': { 'english': 'Sap Sipper' },
      'description': { 'english': 'This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is raised 1 stage if hit by a Grass move; Grass immunity.' },
      'id': 157
    },
    '158': {
      'name': { 'english': 'Prankster' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Status moves have priority raised by 1, but Dark types are immune.' },
      'id': 158
    },
    '159': {
      'name': { 'english': 'Sand Force' },
      'description': { 'english': 'If Sandstorm is active, this Pokemon\'s Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.' },
      'shortDescription': { 'english': 'This Pokemon\'s Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.' },
      'id': 159
    },
    '160': {
      'name': { 'english': 'Iron Barbs' },
      'description': { 'english': 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.' },
      'shortDescription': { 'english': 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.' },
      'id': 160
    },
    '161': {
      'name': { 'english': 'Zen Mode' },
      'description': { 'english': 'If this Pokemon is a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan\'s HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.' },
      'shortDescription': { 'english': 'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.' },
      'id': 161
    },
    '162': {
      'name': { 'english': 'Victory Star' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon and its allies\' moves have their accuracy multiplied by 1.1.' },
      'id': 162
    },
    '163': {
      'name': { 'english': 'Turboblaze' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves and their effects ignore the Abilities of other Pokemon.' },
      'id': 163
    },
    '164': {
      'name': { 'english': 'Teravolt' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves and their effects ignore the Abilities of other Pokemon.' },
      'id': 164
    },
    '165': {
      'name': { 'english': 'Aroma Veil' },
      'description': { 'english': 'This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.' },
      'shortDescription': { 'english': 'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.' },
      'id': 165
    },
    '166': {
      'name': { 'english': 'Flower Veil' },
      'description': { 'english': 'Grass-type Pokemon on this Pokemon\'s side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.' },
      'shortDescription': { 'english': 'This side\'s Grass types can\'t have stats lowered or status inflicted by other Pokemon.' },
      'id': 166
    },
    '167': {
      'name': { 'english': 'Cheek Pouch' },
      'description': { 'english': 'If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry\'s effect.' },
      'shortDescription': { 'english': 'If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry\'s effect.' },
      'id': 167
    },
    '168': {
      'name': { 'english': 'Protean' },
      'description': { 'english': 'This Pokemon\'s type changes to match the type of the move it is about to use. This effect comes after all effects that change a move\'s type.' },
      'shortDescription': { 'english': 'This Pokemon\'s type changes to match the type of the move it is about to use.' },
      'id': 168
    },
    '169': {
      'name': { 'english': 'Fur Coat' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Defense is doubled.' },
      'id': 169
    },
    '170': {
      'name': { 'english': 'Magician' },
      'description': { 'english': 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.' },
      'shortDescription': { 'english': 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.' },
      'id': 170
    },
    '171': {
      'name': { 'english': 'Bulletproof' },
      'description': { 'english': 'This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.' },
      'shortDescription': { 'english': 'Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).' },
      'id': 171
    },
    '172': {
      'name': { 'english': 'Competitive' },
      'description': { 'english': 'This Pokemon\'s Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.' },
      'shortDescription': { 'english': 'This Pokemon\'s Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.' },
      'id': 172
    },
    '173': {
      'name': { 'english': 'Strong Jaw' },
      'description': { 'english': 'This Pokemon\'s bite-based attacks have their power multiplied by 1.5.' },
      'shortDescription': { 'english': 'This Pokemon\'s bite-based attacks have 1.5x power. Bug Bite is not boosted.' },
      'id': 173
    },
    '174': {
      'name': { 'english': 'Refrigerate' },
      'description': { 'english': 'This Pokemon\'s Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.' },
      'shortDescription': { 'english': 'This Pokemon\'s Normal-type moves become Ice type and have 1.2x power.' },
      'id': 174
    },
    '175': {
      'name': { 'english': 'Sweet Veil' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon and its allies cannot fall asleep.' },
      'id': 175
    },
    '176': {
      'name': { 'english': 'Stance Change' },
      'description': { 'english': 'If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King\'s Shield.' },
      'shortDescription': { 'english': 'If Aegislash, changes Forme to Blade before attacks and Shield before King\'s Shield.' },
      'id': 176
    },
    '177': {
      'name': { 'english': 'Gale Wings' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.' },
      'id': 177
    },
    '178': {
      'name': { 'english': 'Mega Launcher' },
      'description': { 'english': 'This Pokemon\'s pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target\'s maximum HP, rounded half down.' },
      'shortDescription': { 'english': 'This Pokemon\'s pulse moves have 1.5x power. Heal Pulse heals 3/4 target\'s max HP.' },
      'id': 178
    },
    '179': {
      'name': { 'english': 'Grass Pelt' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If Grassy Terrain is active, this Pokemon\'s Defense is multiplied by 1.5.' },
      'id': 179
    },
    '180': {
      'name': { 'english': 'Symbiosis' },
      'description': { 'english': 'If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally\'s item was stolen or knocked off.' },
      'shortDescription': { 'english': 'If an ally uses its item, this Pokemon gives its item to that ally immediately.' },
      'id': 180
    },
    '181': {
      'name': { 'english': 'Tough Claws' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s contact moves have their power multiplied by 1.3.' },
      'id': 181
    },
    '182': {
      'name': { 'english': 'Pixilate' },
      'description': { 'english': 'This Pokemon\'s Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.' },
      'shortDescription': { 'english': 'This Pokemon\'s Normal-type moves become Fairy type and have 1.2x power.' },
      'id': 182
    },
    '183': {
      'name': { 'english': 'Gooey' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.' },
      'id': 183
    },
    '184': {
      'name': { 'english': 'Parental Bond' },
      'description': { 'english': 'This Pokemon\'s damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.' },
      'shortDescription': { 'english': 'This Pokemon\'s damaging moves hit twice. The second hit has its damage quartered.' },
      'id': 184
    },
    '185': {
      'name': { 'english': 'Aerilate' },
      'description': { 'english': 'This Pokemon\'s Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.' },
      'shortDescription': { 'english': 'This Pokemon\'s Normal-type moves become Flying type and have 1.2x power.' },
      'id': 185
    },
    '186': {
      'name': { 'english': 'Dark Aura' },
      'description': { 'english': 'While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.' },
      'shortDescription': { 'english': 'While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.' },
      'id': 186
    },
    '187': {
      'name': { 'english': 'Fairy Aura' },
      'description': { 'english': 'While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.' },
      'shortDescription': { 'english': 'While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.' },
      'id': 187
    },
    '188': {
      'name': { 'english': 'Aura Break' },
      'description': { 'english': 'While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.' },
      'shortDescription': { 'english': 'While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.' },
      'id': 188
    },
    '189': {
      'name': { 'english': 'Primordial Sea' },
      'description': { 'english': 'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.' },
      'shortDescription': { 'english': 'On switch-in, heavy rain begins until this Ability is not active in battle.' },
      'id': 189
    },
    '190': {
      'name': { 'english': 'Desolate Land' },
      'description': { 'english': 'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.' },
      'shortDescription': { 'english': 'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.' },
      'id': 190
    },
    '191': {
      'name': { 'english': 'Delta Stream' },
      'description': { 'english': 'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.' },
      'shortDescription': { 'english': 'On switch-in, strong winds begin until this Ability is not active in battle.' },
      'id': 191
    },
    '192': {
      'name': { 'english': 'Stamina' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Defense is raised by 1 stage after it is damaged by a move.' },
      'id': 192
    },
    '193': {
      'name': { 'english': 'Wimp Out' },
      'description': { 'english': 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.' },
      'shortDescription': { 'english': 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.' },
      'id': 193
    },
    '194': {
      'name': { 'english': 'Emergency Exit' },
      'description': { 'english': 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.' },
      'shortDescription': { 'english': 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.' },
      'id': 194
    },
    '195': {
      'name': { 'english': 'Water Compaction' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Defense is raised 2 stages after it is damaged by a Water-type move.' },
      'id': 195
    },
    '196': {
      'name': { 'english': 'Merciless' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks are critical hits if the target is poisoned.' },
      'id': 196
    },
    '197': {
      'name': { 'english': 'Shields Down' },
      'description': { 'english': 'If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.' },
      'shortDescription': { 'english': 'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.' },
      'id': 197
    },
    '198': {
      'name': { 'english': 'Stakeout' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacking stat is doubled against a target that switched in this turn.' },
      'id': 198
    },
    '199': {
      'name': { 'english': 'Water Bubble' },
      'description': { 'english': 'This Pokemon\'s attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon\'s attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.' },
      'shortDescription': { 'english': 'This Pokemon\'s Water power is 2x; it can\'t be burned; Fire power against it is halved.' },
      'id': 199
    },
    '200': {
      'name': { 'english': 'Steelworker' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacking stat is multiplied by 1.5 while using a Steel-type attack.' },
      'id': 200
    },
    '201': {
      'name': { 'english': 'Berserk' },
      'description': { 'english': 'When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.' },
      'shortDescription': { 'english': 'This Pokemon\'s Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.' },
      'id': 201
    },
    '202': {
      'name': { 'english': 'Slush Rush' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If Hail is active, this Pokemon\'s Speed is doubled.' },
      'id': 202
    },
    '203': {
      'name': { 'english': 'Long Reach' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks do not make contact with the target.' },
      'id': 203
    },
    '204': {
      'name': { 'english': 'Liquid Voice' },
      'description': { 'english': 'This Pokemon\'s sound-based moves become Water-type moves. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.' },
      'shortDescription': { 'english': 'This Pokemon\'s sound-based moves become Water type.' },
      'id': 204
    },
    '205': {
      'name': { 'english': 'Triage' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s healing moves have their priority increased by 3.' },
      'id': 205
    },
    '206': {
      'name': { 'english': 'Galvanize' },
      'description': { 'english': 'This Pokemon\'s Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.' },
      'shortDescription': { 'english': 'This Pokemon\'s Normal-type moves become Electric type and have 1.2x power.' },
      'id': 206
    },
    '207': {
      'name': { 'english': 'Surge Surfer' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If Electric Terrain is active, this Pokemon\'s Speed is doubled.' },
      'id': 207
    },
    '208': {
      'name': { 'english': 'Schooling' },
      'description': { 'english': 'On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.' },
      'shortDescription': { 'english': 'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.' },
      'id': 208
    },
    '209': {
      'name': { 'english': 'Disguise' },
      'description': { 'english': 'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.' },
      'shortDescription': { 'english': '(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.' },
      'id': 209
    },
    '210': {
      'name': { 'english': 'Battle Bond' },
      'description': { 'english': 'If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.' },
      'shortDescription': { 'english': 'After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.' },
      'id': 210
    },
    '211': {
      'name': { 'english': 'Power Construct' },
      'description': { 'english': 'If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.' },
      'shortDescription': { 'english': 'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.' },
      'id': 211
    },
    '212': {
      'name': { 'english': 'Corrosion' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon can poison or badly poison other Pokemon regardless of their typing.' },
      'id': 212
    },
    '213': {
      'name': { 'english': 'Comatose' },
      'description': { 'english': 'This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.' },
      'shortDescription': { 'english': 'This Pokemon cannot be statused, and is considered to be asleep.' },
      'id': 213
    },
    '214': {
      'name': { 'english': 'Queenly Majesty' },
      'description': { 'english': 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.' },
      'shortDescription': { 'english': 'While this Pokemon is active, allies are protected from opposing priority moves.' },
      'id': 214
    },
    '215': {
      'name': { 'english': 'Innards Out' },
      'description': { 'english': 'If this Pokemon is knocked out with a move, that move\'s user loses HP equal to the amount of damage inflicted on this Pokemon.' },
      'shortDescription': { 'english': 'If this Pokemon is KOed with a move, that move\'s user loses an equal amount of HP.' },
      'id': 215
    },
    '216': {
      'name': { 'english': 'Dancer' },
      'description': { 'english': 'After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.' },
      'shortDescription': { 'english': 'After another Pokemon uses a dance move, this Pokemon uses the same move.' },
      'id': 216
    },
    '217': {
      'name': { 'english': 'Battery' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s allies have the power of their special attacks multiplied by 1.3.' },
      'id': 217
    },
    '218': {
      'name': { 'english': 'Fluffy' },
      'description': { 'english': 'This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.' },
      'shortDescription': { 'english': 'This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.' },
      'id': 218
    },
    '219': {
      'name': { 'english': 'Dazzling' },
      'description': { 'english': 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.' },
      'shortDescription': { 'english': 'While this Pokemon is active, allies are protected from opposing priority moves.' },
      'id': 219
    },
    '220': {
      'name': { 'english': 'Soul-Heart' },
      'description': { 'english': 'This Pokemon\'s Special Attack is raised by 1 stage when another Pokemon faints.' },
      'shortDescription': { 'english': 'This Pokemon\'s Sp. Atk is raised by 1 stage when another Pokemon faints.' },
      'id': 220
    },
    '221': {
      'name': { 'english': 'Tangling Hair' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.' },
      'id': 221
    },
    '222': {
      'name': { 'english': 'Receiver' },
      'description': { 'english': 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Stance Change, Trace, Wonder Guard, and Zen Mode.' },
      'shortDescription': { 'english': 'This Pokemon copies the Ability of an ally that faints.' },
      'id': 222
    },
    '223': {
      'name': { 'english': 'Power of Alchemy' },
      'description': { 'english': 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.' },
      'shortDescription': { 'english': 'This Pokemon copies the Ability of an ally that faints.' },
      'id': 223
    },
    '224': {
      'name': { 'english': 'Beast Boost' },
      'description': { 'english': 'This Pokemon\'s highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.' },
      'shortDescription': { 'english': 'This Pokemon\'s highest stat is raised by 1 if it attacks and KOes another Pokemon.' },
      'id': 224
    },
    '225': {
      'name': { 'english': 'RKS System' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If this Pokemon is a Silvally, its type changes to match its held Memory.' },
      'id': 225
    },
    '226': {
      'name': { 'english': 'Electric Surge' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Electric Terrain.' },
      'id': 226
    },
    '227': {
      'name': { 'english': 'Psychic Surge' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Psychic Terrain.' },
      'id': 227
    },
    '228': {
      'name': { 'english': 'Misty Surge' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Misty Terrain.' },
      'id': 228
    },
    '229': {
      'name': { 'english': 'Grassy Surge' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon summons Grassy Terrain.' },
      'id': 229
    },
    '230': {
      'name': { 'english': 'Full Metal Body' },
      'description': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.' },
      'shortDescription': { 'english': 'Prevents other Pokemon from lowering this Pokemon\'s stat stages.' },
      'id': 230
    },
    '231': {
      'name': { 'english': 'Shadow Shield' },
      'description': { 'english': 'If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.' },
      'shortDescription': { 'english': 'If this Pokemon is at full HP, damage taken from attacks is halved.' },
      'id': 231
    },
    '232': {
      'name': { 'english': 'Prism Armor' },
      'description': { 'english': 'This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.' },
      'shortDescription': { 'english': 'This Pokemon receives 3/4 damage from supereffective attacks.' },
      'id': 232
    },
    '233': {
      'name': { 'english': 'Neuroforce' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s attacks that are super effective against the target do 1.25x damage.' },
      'id': 233
    },
    '234': {
      'name': { 'english': 'Intrepid Sword' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon\'s Attack is raised by 1 stage.' },
      'id': 234
    },
    '235': {
      'name': { 'english': 'Dauntless Shield' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, this Pokemon\'s Defense is raised by 1 stage.' },
      'id': 235
    },
    '236': {
      'name': { 'english': 'Libero' },
      'description': { 'english': 'This Pokemon\'s type changes to match the type of the move it is about to use. This effect comes after all effects that change a move\'s type.' },
      'shortDescription': { 'english': 'This Pokemon\'s type changes to match the type of the move it is about to use.' },
      'id': 236
    },
    '237': {
      'name': { 'english': 'Ball Fetch' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'No competitive use.' },
      'id': 237
    },
    '238': {
      'name': { 'english': 'Cotton Down' },
      'description': { 'english': 'When this Pokemon is hit by an attack, the Speed of all other Pokemon on the field is lowered by 1 stage.' },
      'shortDescription': { 'english': 'If this Pokemon is hit, it lowers the Speed of all other Pokemon on the field 1 stage.' },
      'id': 238
    },
    '239': {
      'name': { 'english': 'Propeller Tail' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves cannot be redirected to a different target by any effect.' },
      'id': 239
    },
    '240': {
      'name': { 'english': 'Mirror Armor' },
      'description': { 'english': 'When one of this Pokemon\'s stat stages would be lowered by another Pokemon, that Pokemon\'s stat stage is lowered instead. This effect does not happen if this Pokemon\'s stat stage was already -6.' },
      'shortDescription': { 'english': 'If this Pokemon\'s stat stages would be lowered, the attacker\'s are lowered instead.' },
      'id': 240
    },
    '241': {
      'name': { 'english': 'Gulp Missile' },
      'description': { 'english': 'If this Pokemon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target\'s maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target\'s Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes.' },
      'shortDescription': { 'english': 'When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis.' },
      'id': 241
    },
    '242': {
      'name': { 'english': 'Stalwart' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s moves cannot be redirected to a different target by any effect.' },
      'id': 242
    },
    '243': {
      'name': { 'english': 'Steam Engine' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Speed is raised by 6 stages after it is damaged by Fire/Water moves.' },
      'id': 243
    },
    '244': {
      'name': { 'english': 'Punk Rock' },
      'description': { 'english': 'This Pokemon\'s sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.' },
      'shortDescription': { 'english': 'This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.' },
      'id': 244
    },
    '245': {
      'name': { 'english': 'Sand Spit' },
      'description': { 'english': 'When this Pokemon is hit by an attack, Sandstorm begins. This effect happens after the effects of Max and G-Max Moves.' },
      'shortDescription': { 'english': 'When this Pokemon is hit, Sandstorm begins.' },
      'id': 245
    },
    '246': {
      'name': { 'english': 'Ice Scales' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon receives 1/2 damage from special attacks.' },
      'id': 246
    },
    '247': {
      'name': { 'english': 'Ripen' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'When this Pokemon eats a Berry, its effect is doubled.' },
      'id': 247
    },
    '248': {
      'name': { 'english': 'Ice Face' },
      'description': { 'english': 'If this Pokemon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Hail begins or when Eiscue switches in while Hail is active. Confusion damage also breaks the ice face.' },
      'shortDescription': { 'english': 'If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail.' },
      'id': 248
    },
    '249': {
      'name': { 'english': 'Power Spot' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s allies have the power of their moves multiplied by 1.3.' },
      'id': 249
    },
    '250': {
      'name': { 'english': 'Mimicry' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s type changes to match the Terrain. Type reverts when Terrain ends.' },
      'id': 250
    },
    '251': {
      'name': { 'english': 'Screen Cleaner' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides.' },
      'id': 251
    },
    '252': {
      'name': { 'english': 'Steely Spirit' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon and its allies\' Steel-type moves have their power multiplied by 1.5.' },
      'id': 252
    },
    '253': {
      'name': { 'english': 'Perish Body' },
      'description': { 'english': 'Making contact with this Pokemon starts the Perish Song effect for it and the attacker. This effect does not happen if this Pokemon already has a perish count.' },
      'shortDescription': { 'english': 'Making contact with this Pokemon starts the Perish Song effect for it and the attacker.' },
      'id': 253
    },
    '254': {
      'name': { 'english': 'Wandering Spirit' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'Pokemon making contact with this Pokemon have their Ability swapped with this one.' },
      'id': 254
    },
    '255': {
      'name': { 'english': 'Gorilla Tactics' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon\'s Attack is 1.5x, but it can only select the first move it executes.' },
      'id': 255
    },
    '256': {
      'name': { 'english': 'Neutralizing Gas' },
      'description': { 'english': 'While this Pokemon is active, Abilities have no effect. Does not affect the Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.' },
      'shortDescription': { 'english': 'While this Pokemon is active, Abilities have no effect.' },
      'id': 256
    },
    '257': {
      'name': { 'english': 'Pastel Veil' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'This Pokemon and its allies cannot be poisoned. On switch-in, cures poisoned allies.' },
      'id': 257
    },
    '258': {
      'name': { 'english': 'Hunger Switch' },
      'description': { 'english': '' },
      'shortDescription': { 'english': 'If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn.' },
      'id': 258
    }
  }
;

