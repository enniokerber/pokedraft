import {IAbility} from '../../models/teambuilder/interfaces/IAbility';

export const TEST_ABILITIES: IAbility[] = [
  {
    'id': 1,
    'name': 'No Ability',
    'german': 'Keine Fähigkeit',
    'description': '',
    'descriptionGerman': 'Macht nichts.',
    'shortDescription': 'Does nothing.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 2,
    'name': 'Adaptability',
    'german': 'Anpassung',
    'description': 'This Pokemon´s moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s same-type attack bonus (STAB) is 2 instead of 1.5.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 3,
    'name': 'Aftermath',
    'german': '',
    'description': 'If this Pokemon is knocked out with a contact move, that move´s user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is KOed with a contact move, that move´s user loses 1/4 its max HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 4,
    'name': 'Aerilate',
    'german': '',
    'description': 'This Pokemon´s Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move´s type, but before Ion Deluge and Electrify´s effects.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Normal-type moves become Flying type and have 1.2x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 5,
    'name': 'Air Lock',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, the effects of weather conditions are disabled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 6,
    'name': 'Analytic',
    'german': 'Analyse',
    'description': 'The power of this Pokemon´s move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.',
    'descriptionGerman': 'Die Attacken dieses Pokémon werden um 30% verstärkt, sofern es als letztes in der Runde angreift. Ausgenommen: Kismetwunsch und Seher.',
    'shortDescription': 'This Pokemon´s attacks have 1.3x power if it is the last to move in a turn.',
    'shortDescriptionGerman': 'Die Attacken dieses Pokémon werden um 30% verstärkt, sofern es als letztes in der Runde angreift.'
  },
  {
    'id': 7,
    'name': 'Anger Point',
    'german': '',
    'description': 'If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 8,
    'name': 'Anticipation',
    'german': '',
    'description': 'On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 9,
    'name': 'Arena Trap',
    'german': '',
    'description': 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.',
    'descriptionGerman': '',
    'shortDescription': 'Prevents adjacent foes from choosing to switch unless they are airborne.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 10,
    'name': 'Aroma Veil',
    'german': '',
    'description': 'This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.',
    'descriptionGerman': '',
    'shortDescription': 'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 11,
    'name': 'Aura Break',
    'german': '',
    'description': 'While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 12,
    'name': 'Bad Dreams',
    'german': '',
    'description': 'Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.',
    'descriptionGerman': '',
    'shortDescription': 'Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 13,
    'name': 'Battery',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s allies have the power of their special attacks multiplied by 1.3.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 14,
    'name': 'Battle Armor',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be struck by a critical hit.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 15,
    'name': 'Battle Bond',
    'german': '',
    'description': 'If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.',
    'descriptionGerman': '',
    'shortDescription': 'After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 16,
    'name': 'Beast Boost',
    'german': '',
    'description': 'This Pokemon´s highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s highest stat is raised by 1 if it attacks and KOes another Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 17,
    'name': 'Berserk',
    'german': '',
    'description': 'When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 18,
    'name': 'Big Pecks',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Prevents other Pokemon from lowering this Pokemon´s Defense stat stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 19,
    'name': 'Blaze',
    'german': '',
    'description': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.',
    'descriptionGerman': '',
    'shortDescription': 'At 1/3 or less of its max HP, this Pokemon´s attacking stat is 1.5x with Fire attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 20,
    'name': 'Bulletproof',
    'german': '',
    'description': 'This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.',
    'descriptionGerman': '',
    'shortDescription': 'Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).',
    'shortDescriptionGerman': ''
  },
  {
    'id': 21,
    'name': 'Cheek Pouch',
    'german': '',
    'description': 'If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry´s effect.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry´s effect.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 22,
    'name': 'Chlorophyll',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If Sunny Day is active, this Pokemon´s Speed is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 23,
    'name': 'Clear Body',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Prevents other Pokemon from lowering this Pokemon´s stat stages.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 24,
    'name': 'Cloud Nine',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, the effects of weather conditions are disabled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 25,
    'name': 'Color Change',
    'german': '',
    'description': 'This Pokemon´s type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s type changes to the type of a move it´s hit by, unless it has the type.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 26,
    'name': 'Comatose',
    'german': '',
    'description': 'This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be statused, and is considered to be asleep.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 27,
    'name': 'Competitive',
    'german': '',
    'description': 'This Pokemon´s Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 28,
    'name': 'Compound Eyes',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves have their accuracy multiplied by 1.3.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 29,
    'name': 'Contrary',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon has a stat stage raised it is lowered instead, and vice versa.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 30,
    'name': 'Corrosion',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon can poison or badly poison other Pokemon regardless of their typing.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 31,
    'name': 'Cursed Body',
    'german': '',
    'description': 'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker´s moves is already disabled.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 32,
    'name': 'Cute Charm',
    'german': '',
    'description': 'There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.',
    'descriptionGerman': '',
    'shortDescription': '30% chance of infatuating Pokemon of the opposite gender if they make contact.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 33,
    'name': 'Damp',
    'german': '',
    'description': 'While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.',
    'descriptionGerman': '',
    'shortDescription': 'Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 34,
    'name': 'Dancer',
    'german': '',
    'description': 'After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.',
    'descriptionGerman': '',
    'shortDescription': 'After another Pokemon uses a dance move, this Pokemon uses the same move.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 35,
    'name': 'Dark Aura',
    'german': '',
    'description': 'While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 36,
    'name': 'Dazzling',
    'german': '',
    'description': 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, allies are protected from opposing priority moves.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 37,
    'name': 'Defeatist',
    'german': '',
    'description': 'While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 38,
    'name': 'Defiant',
    'german': '',
    'description': 'This Pokemon´s Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is raised by 2 for each of its stats that is lowered by a foe.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 39,
    'name': 'Delta Stream',
    'german': '',
    'description': 'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, strong winds begin until this Ability is not active in battle.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 40,
    'name': 'Desolate Land',
    'german': '',
    'description': 'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 41,
    'name': 'Disguise',
    'german': '',
    'description': 'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 42,
    'name': 'Download',
    'german': '',
    'description': 'On switch-in, this Pokemon´s Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes´ weaker Defense.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 43,
    'name': 'Drizzle',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Rain Dance.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 44,
    'name': 'Drought',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Sunny Day.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 45,
    'name': 'Dry Skin',
    'german': '',
    'description': 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 46,
    'name': 'Early Bird',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s sleep counter drops by 2 instead of 1.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 47,
    'name': 'Effect Spore',
    'german': '',
    'description': '30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.',
    'descriptionGerman': '',
    'shortDescription': '30% chance of poison/paralysis/sleep on others making contact with this Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 48,
    'name': 'Electric Surge',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Electric Terrain.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 49,
    'name': 'Emergency Exit',
    'german': '',
    'description': 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 50,
    'name': 'Fairy Aura',
    'german': '',
    'description': 'While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 51,
    'name': 'Filter',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon receives 3/4 damage from supereffective attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 52,
    'name': 'Flame Body',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': '30% chance a Pokemon making contact with this Pokemon will be burned.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 53,
    'name': 'Flare Boost',
    'german': '',
    'description': 'While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is burned, its special attacks have 1.5x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 54,
    'name': 'Flash Fire',
    'german': '',
    'description': 'This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 55,
    'name': 'Flower Gift',
    'german': '',
    'description': 'If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'If user is Cherrim and Sunny Day is active, it and allies´ Attack and Sp. Def are 1.5x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 56,
    'name': 'Flower Veil',
    'german': '',
    'description': 'Grass-type Pokemon on this Pokemon´s side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'This side´s Grass types can´t have stats lowered or status inflicted by other Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 57,
    'name': 'Fluffy',
    'german': '',
    'description': 'This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 58,
    'name': 'Forecast',
    'german': '',
    'description': 'If this Pokemon is a Castform, its type changes to the current weather condition´s type, except Sandstorm.',
    'descriptionGerman': '',
    'shortDescription': 'Castform´s type changes to the current weather condition´s type, except Sandstorm.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 59,
    'name': 'Forewarn',
    'german': '',
    'description': 'On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon is alerted to the foes´ move with the highest power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 60,
    'name': 'Friend Guard',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s allies receive 3/4 damage from other Pokemon´s attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 61,
    'name': 'Frisk',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon identifies the held items of all opposing Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 62,
    'name': 'Full Metal Body',
    'german': '',
    'description': 'Prevents other Pokemon from lowering this Pokemon´s stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    'descriptionGerman': '',
    'shortDescription': 'Prevents other Pokemon from lowering this Pokemon´s stat stages.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 63,
    'name': 'Fur Coat',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Defense is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 64,
    'name': 'Gale Wings',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 65,
    'name': 'Galvanize',
    'german': '',
    'description': 'This Pokemon´s Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move´s type, but before Ion Deluge and Electrify´s effects.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Normal-type moves become Electric type and have 1.2x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 66,
    'name': 'Gluttony',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 67,
    'name': 'Gooey',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 68,
    'name': 'Grass Pelt',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If Grassy Terrain is active, this Pokemon´s Defense is multiplied by 1.5.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 69,
    'name': 'Grassy Surge',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Grassy Terrain.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 70,
    'name': 'Guts',
    'german': '',
    'description': 'If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn´s physical damage halving is ignored.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 71,
    'name': 'Harvest',
    'german': '',
    'description': 'If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.',
    'descriptionGerman': '',
    'shortDescription': 'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 72,
    'name': 'Healer',
    'german': '',
    'description': 'There is a 30% chance of curing an adjacent ally´s major status condition at the end of each turn.',
    'descriptionGerman': '',
    'shortDescription': '30% chance of curing an adjacent ally´s status at the end of each turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 73,
    'name': 'Heatproof',
    'german': '',
    'description': 'The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.',
    'descriptionGerman': '',
    'shortDescription': 'The power of Fire-type attacks against this Pokemon is halved; burn damage halved.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 74,
    'name': 'Heavy Metal',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s weight is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 75,
    'name': 'Honey Gather',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'No competitive use.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 76,
    'name': 'Huge Power',
    'german': 'Kraftkoloss',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 77,
    'name': 'Hustle',
    'german': '',
    'description': 'This Pokemon´s Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is 1.5x and accuracy of its physical attacks is 0.8x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 78,
    'name': 'Hydration',
    'german': '',
    'description': 'This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon has its status cured at the end of each turn if Rain Dance is active.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 79,
    'name': 'Hyper Cutter',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Prevents other Pokemon from lowering this Pokemon´s Attack stat stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 80,
    'name': 'Ice Body',
    'german': '',
    'description': 'If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.',
    'descriptionGerman': '',
    'shortDescription': 'If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 81,
    'name': 'Illuminate',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'No competitive use.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 82,
    'name': 'Illusion',
    'german': '',
    'description': 'When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon´s attack. This Pokemon´s actual level and HP are displayed instead of those of the mimicked Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon appears as the last Pokemon in the party until it takes direct damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 83,
    'name': 'Immunity',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 84,
    'name': 'Imposter',
    'german': '',
    'description': 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 85,
    'name': 'Infiltrator',
    'german': '',
    'description': 'This Pokemon´s moves ignore substitutes and the opposing side´s Reflect, Light Screen, Safeguard, Mist and Aurora Veil.',
    'descriptionGerman': '',
    'shortDescription': 'Moves ignore substitutes and foe´s Reflect/Light Screen/Safeguard/Mist/Aurora Veil.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 86,
    'name': 'Innards Out',
    'german': '',
    'description': 'If this Pokemon is knocked out with a move, that move´s user loses HP equal to the amount of damage inflicted on this Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is KOed with a move, that move´s user loses an equal amount of HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 87,
    'name': 'Inner Focus',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be made to flinch.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 88,
    'name': 'Insomnia',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 89,
    'name': 'Intimidate',
    'german': '',
    'description': 'On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 90,
    'name': 'Iron Barbs',
    'german': '',
    'description': 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
    'descriptionGerman': '',
    'shortDescription': 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 91,
    'name': 'Iron Fist',
    'german': '',
    'description': 'This Pokemon´s punch-based attacks have their power multiplied by 1.2.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s punch-based attacks have 1.2x power. Sucker Punch is not boosted.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 92,
    'name': 'Justified',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is raised by 1 stage after it is damaged by a Dark-type move.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 93,
    'name': 'Keen Eye',
    'german': '',
    'description': 'Prevents other Pokemon from lowering this Pokemon´s accuracy stat stage. This Pokemon ignores a target´s evasiveness stat stage.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s accuracy can´t be lowered by others; ignores their evasiveness stat.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 94,
    'name': 'Klutz',
    'german': '',
    'description': 'This Pokemon´s held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s held item has no effect, except Macho Brace. Fling cannot be used.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 95,
    'name': 'Leaf Guard',
    'german': '',
    'description': 'If Sunny Day is active, this Pokemon cannot gain a major status condition and Rest will fail for it.',
    'descriptionGerman': '',
    'shortDescription': 'If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 96,
    'name': 'Levitate',
    'german': '',
    'description': 'This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 97,
    'name': 'Light Metal',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s weight is halved.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 98,
    'name': 'Lightning Rod',
    'german': '',
    'description': 'This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 99,
    'name': 'Limber',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 100,
    'name': 'Liquid Ooze',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon damages those draining HP from it for as much as they would heal.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 101,
    'name': 'Liquid Voice',
    'german': '',
    'description': 'This Pokemon´s sound-based moves become Water-type moves. This effect comes after other effects that change a move´s type, but before Ion Deluge and Electrify´s effects.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s sound-based moves become Water type.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 102,
    'name': 'Long Reach',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks do not make contact with the target.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 103,
    'name': 'Magic Bounce',
    'german': '',
    'description': 'This Pokemon blocks certain status moves and instead uses the move against the original user.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon blocks certain status moves and bounces them back to the user.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 104,
    'name': 'Magic Guard',
    'german': '',
    'description': 'This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon can only be damaged by direct attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 105,
    'name': 'Magician',
    'german': '',
    'description': 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 106,
    'name': 'Magma Armor',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 107,
    'name': 'Magnet Pull',
    'german': '',
    'description': 'Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.',
    'descriptionGerman': '',
    'shortDescription': 'Prevents adjacent Steel-type foes from choosing to switch.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 108,
    'name': 'Marvel Scale',
    'german': '',
    'description': 'If this Pokemon has a major status condition, its Defense is multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is statused, its Defense is 1.5x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 109,
    'name': 'Mega Launcher',
    'german': '',
    'description': 'This Pokemon´s pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target´s maximum HP, rounded half down.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s pulse moves have 1.5x power. Heal Pulse heals 3/4 target´s max HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 110,
    'name': 'Merciless',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks are critical hits if the target is poisoned.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 111,
    'name': 'Minus',
    'german': '',
    'description': 'If an active ally has this Ability or the Plus Ability, this Pokemon´s Special Attack is multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'If an active ally has this Ability or the Plus Ability, this Pokemon´s Sp. Atk is 1.5x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 112,
    'name': 'Misty Surge',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Misty Terrain.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 113,
    'name': 'Mold Breaker',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves and their effects ignore the Abilities of other Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 114,
    'name': 'Moody',
    'german': '',
    'description': 'This Pokemon has a random stat raised by 2 stages and another stat lowered by 1 stage at the end of each turn.',
    'descriptionGerman': '',
    'shortDescription': 'Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 115,
    'name': 'Motor Drive',
    'german': '',
    'description': 'This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Speed is raised 1 stage if hit by an Electric move; Electric immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 116,
    'name': 'Moxie',
    'german': '',
    'description': 'This Pokemon´s Attack is raised by 1 stage if it attacks and knocks out another Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is raised by 1 stage if it attacks and KOes another Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 117,
    'name': 'Multiscale',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is at full HP, damage taken from attacks is halved.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 118,
    'name': 'Multitype',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 119,
    'name': 'Mummy',
    'german': '',
    'description': 'Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.',
    'descriptionGerman': '',
    'shortDescription': 'Pokemon making contact with this Pokemon have their Ability changed to Mummy.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 120,
    'name': 'Natural Cure',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon has its major status condition cured when it switches out.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 121,
    'name': 'Neuroforce',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks that are super effective against the target do 1.25x damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 122,
    'name': 'No Guard',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Every move used by or against this Pokemon will always hit.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 123,
    'name': 'Normalize',
    'german': '',
    'description': 'This Pokemon´s moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move´s type.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves are changed to be Normal type and have 1.2x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 124,
    'name': 'Oblivious',
    'german': '',
    'description': 'This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 125,
    'name': 'Overcoat',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon is immune to powder moves and damage from Sandstorm or Hail.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 126,
    'name': 'Overgrow',
    'german': '',
    'description': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.',
    'descriptionGerman': '',
    'shortDescription': 'At 1/3 or less of its max HP, this Pokemon´s attacking stat is 1.5x with Grass attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 127,
    'name': 'Own Tempo',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be confused. Gaining this Ability while confused cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 128,
    'name': 'Parental Bond',
    'german': '',
    'description': 'This Pokemon´s damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s damaging moves hit twice. The second hit has its damage quartered.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 129,
    'name': 'Pickup',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 130,
    'name': 'Pickpocket',
    'german': '',
    'description': 'If this Pokemon has no item, it steals the item off a Pokemon that makes contact with it. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon has no item, it steals the item off a Pokemon making contact with it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 131,
    'name': 'Pixilate',
    'german': '',
    'description': 'This Pokemon´s Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move´s type, but before Ion Deluge and Electrify´s effects.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Normal-type moves become Fairy type and have 1.2x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 132,
    'name': 'Plus',
    'german': '',
    'description': 'If an active ally has this Ability or the Minus Ability, this Pokemon´s Special Attack is multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'If an active ally has this Ability or the Minus Ability, this Pokemon´s Sp. Atk is 1.5x.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 133,
    'name': 'Poison Heal',
    'german': '',
    'description': 'If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 134,
    'name': 'Poison Point',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': '30% chance a Pokemon making contact with this Pokemon will be poisoned.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 135,
    'name': 'Poison Touch',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s contact moves have a 30% chance of poisoning.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 136,
    'name': 'Power Construct',
    'german': '',
    'description': 'If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.',
    'descriptionGerman': '',
    'shortDescription': 'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 137,
    'name': 'Power of Alchemy',
    'german': '',
    'description': 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon copies the Ability of an ally that faints.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 138,
    'name': 'Prankster',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Status moves have priority raised by 1, but Dark types are immune.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 139,
    'name': 'Pressure',
    'german': '',
    'description': 'If this Pokemon is the target of an opposing Pokemon´s move, that move loses one additional PP.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is the target of a foe´s move, that move loses one additional PP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 140,
    'name': 'Primordial Sea',
    'german': '',
    'description': 'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, heavy rain begins until this Ability is not active in battle.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 141,
    'name': 'Prism Armor',
    'german': '',
    'description': 'This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon receives 3/4 damage from supereffective attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 142,
    'name': 'Protean',
    'german': '',
    'description': 'This Pokemon´s type changes to match the type of the move it is about to use. This effect comes after all effects that change a move´s type.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s type changes to match the type of the move it is about to use.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 143,
    'name': 'Psychic Surge',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Psychic Terrain.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 144,
    'name': 'Pure Power',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 145,
    'name': 'Queenly Majesty',
    'german': '',
    'description': 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, allies are protected from opposing priority moves.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 146,
    'name': 'Quick Feet',
    'german': '',
    'description': 'If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 147,
    'name': 'Rain Dish',
    'german': '',
    'description': 'If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.',
    'descriptionGerman': '',
    'shortDescription': 'If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 148,
    'name': 'Rattled',
    'german': '',
    'description': 'This Pokemon´s Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 149,
    'name': 'Receiver',
    'german': '',
    'description': 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon copies the Ability of an ally that faints.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 150,
    'name': 'Reckless',
    'german': '',
    'description': 'This Pokemon´s attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks with recoil or crash damage have 1.2x power; not Struggle.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 151,
    'name': 'Refrigerate',
    'german': '',
    'description': 'This Pokemon´s Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move´s type, but before Ion Deluge and Electrify´s effects.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Normal-type moves become Ice type and have 1.2x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 152,
    'name': 'Regenerator',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 153,
    'name': 'Rivalry',
    'german': '',
    'description': 'This Pokemon´s attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks do 1.25x on same gender targets; 0.75x on opposite gender.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 154,
    'name': 'RKS System',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is a Silvally, its type changes to match its held Memory.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 155,
    'name': 'Rock Head',
    'german': '',
    'description': 'This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 156,
    'name': 'Rough Skin',
    'german': '',
    'description': 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
    'descriptionGerman': '',
    'shortDescription': 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 157,
    'name': 'Run Away',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'No competitive use.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 158,
    'name': 'Sand Force',
    'german': '',
    'description': 'If Sandstorm is active, this Pokemon´s Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 159,
    'name': 'Sand Rush',
    'german': '',
    'description': 'If Sandstorm is active, this Pokemon´s Speed is doubled. This Pokemon takes no damage from Sandstorm.',
    'descriptionGerman': '',
    'shortDescription': 'If Sandstorm is active, this Pokemon´s Speed is doubled; immunity to Sandstorm.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 160,
    'name': 'Sand Stream',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Sandstorm.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 161,
    'name': 'Sand Veil',
    'german': '',
    'description': 'If Sandstorm is active, this Pokemon´s evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.',
    'descriptionGerman': '',
    'shortDescription': 'If Sandstorm is active, this Pokemon´s evasiveness is 1.25x; immunity to Sandstorm.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 162,
    'name': 'Sap Sipper',
    'german': '',
    'description': 'This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Attack is raised 1 stage if hit by a Grass move; Grass immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 163,
    'name': 'Schooling',
    'german': '',
    'description': 'On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.',
    'descriptionGerman': '',
    'shortDescription': 'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 164,
    'name': 'Scrappy',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon can hit Ghost types with Normal- and Fighting-type moves.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 165,
    'name': 'Serene Grace',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves have their secondary effect chance doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 166,
    'name': 'Shadow Shield',
    'german': '',
    'description': 'If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is at full HP, damage taken from attacks is halved.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 167,
    'name': 'Shadow Tag',
    'german': '',
    'description': 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.',
    'descriptionGerman': '',
    'shortDescription': 'Prevents adjacent foes from choosing to switch unless they also have this Ability.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 168,
    'name': 'Shed Skin',
    'german': '',
    'description': 'This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon has a 33% chance to have its status cured at the end of each turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 169,
    'name': 'Sheer Force',
    'german': '',
    'description': 'This Pokemon´s attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks with secondary effects have 1.3x power; nullifies the effects.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 170,
    'name': 'Shell Armor',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be struck by a critical hit.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 171,
    'name': 'Shield Dust',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon is not affected by the secondary effect of another Pokemon´s attack.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 172,
    'name': 'Shields Down',
    'german': '',
    'description': 'If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    'descriptionGerman': '',
    'shortDescription': 'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 173,
    'name': 'Simple',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'When this Pokemon´s stat stages are raised or lowered, the effect is doubled instead.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 174,
    'name': 'Skill Link',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s multi-hit attacks always hit the maximum number of times.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 175,
    'name': 'Slow Start',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon´s Attack and Speed are halved for 5 turns.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 176,
    'name': 'Slush Rush',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If Hail is active, this Pokemon´s Speed is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 177,
    'name': 'Sniper',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 178,
    'name': 'Snow Cloak',
    'german': '',
    'description': 'If Hail is active, this Pokemon´s evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.',
    'descriptionGerman': '',
    'shortDescription': 'If Hail is active, this Pokemon´s evasiveness is 1.25x; immunity to Hail.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 179,
    'name': 'Snow Warning',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, this Pokemon summons Hail.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 180,
    'name': 'Solar Power',
    'german': '',
    'description': 'If Sunny Day is active, this Pokemon´s Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.',
    'descriptionGerman': '',
    'shortDescription': 'If Sunny Day is active, this Pokemon´s Sp. Atk is 1.5x; loses 1/8 max HP per turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 181,
    'name': 'Solid Rock',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon receives 3/4 damage from supereffective attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 182,
    'name': 'Soul-Heart',
    'german': '',
    'description': 'This Pokemon´s Special Attack is raised by 1 stage when another Pokemon faints.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Sp. Atk is raised by 1 stage when another Pokemon faints.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 183,
    'name': 'Soundproof',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon is immune to sound-based moves, including Heal Bell.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 184,
    'name': 'Speed Boost',
    'german': '',
    'description': 'This Pokemon´s Speed is raised by 1 stage at the end of each full turn it has been on the field.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Speed is raised 1 stage at the end of each full turn on the field.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 185,
    'name': 'Stakeout',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacking stat is doubled against a target that switched in this turn.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 186,
    'name': 'Stall',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon moves last among Pokemon using the same or greater priority moves.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 187,
    'name': 'Stamina',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Defense is raised by 1 stage after it is damaged by a move.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 188,
    'name': 'Stance Change',
    'german': '',
    'description': 'If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King´s Shield.',
    'descriptionGerman': '',
    'shortDescription': 'If Aegislash, changes Forme to Blade before attacks and Shield before King´s Shield.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 189,
    'name': 'Static',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': '30% chance a Pokemon making contact with this Pokemon will be paralyzed.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 190,
    'name': 'Steadfast',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon flinches, its Speed is raised by 1 stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 191,
    'name': 'Steelworker',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacking stat is multiplied by 1.5 while using a Steel-type attack.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 192,
    'name': 'Stench',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks without a chance to flinch have a 10% chance to flinch.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 193,
    'name': 'Sticky Hold',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot lose its held item due to another Pokemon´s attack.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 194,
    'name': 'Storm Drain',
    'german': '',
    'description': 'This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 195,
    'name': 'Strong Jaw',
    'german': '',
    'description': 'This Pokemon´s bite-based attacks have their power multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s bite-based attacks have 1.5x power. Bug Bite is not boosted.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 196,
    'name': 'Sturdy',
    'german': '',
    'description': 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 197,
    'name': 'Suction Cups',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be forced to switch out by another Pokemon´s attack or item.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 198,
    'name': 'Super Luck',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s critical hit ratio is raised by 1 stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 199,
    'name': 'Surge Surfer',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If Electric Terrain is active, this Pokemon´s Speed is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 200,
    'name': 'Swarm',
    'german': '',
    'description': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.',
    'descriptionGerman': '',
    'shortDescription': 'At 1/3 or less of its max HP, this Pokemon´s attacking stat is 1.5x with Bug attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 201,
    'name': 'Sweet Veil',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon and its allies cannot fall asleep.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 202,
    'name': 'Swift Swim',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'If Rain Dance is active, this Pokemon´s Speed is doubled.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 203,
    'name': 'Symbiosis',
    'german': '',
    'description': 'If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally´s item was stolen or knocked off.',
    'descriptionGerman': '',
    'shortDescription': 'If an ally uses its item, this Pokemon gives its item to that ally immediately.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 204,
    'name': 'Synchronize',
    'german': '',
    'description': 'If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.',
    'descriptionGerman': '',
    'shortDescription': 'If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 205,
    'name': 'Tangled Feet',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s evasiveness is doubled as long as it is confused.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 206,
    'name': 'Tangling Hair',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 207,
    'name': 'Technician',
    'german': '',
    'description': 'This Pokemon´s moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves of 60 power or less have 1.5x power. Includes Struggle.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 208,
    'name': 'Telepathy',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon does not take damage from attacks made by its allies.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 209,
    'name': 'Teravolt',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves and their effects ignore the Abilities of other Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 210,
    'name': 'Thick Fat',
    'german': 'Speckschicht',
    'description': 'If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon´s attacking stat is halved when calculating the damage to this Pokemon.',
    'descriptionGerman': '',
    'shortDescription': 'Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 211,
    'name': 'Tinted Lens',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s attacks that are not very effective on a target deal double damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 212,
    'name': 'Torrent',
    'german': '',
    'description': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.',
    'descriptionGerman': '',
    'shortDescription': 'At 1/3 or less of its max HP, this Pokemon´s attacking stat is 1.5x with Water attacks.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 213,
    'name': 'Toxic Boost',
    'german': '',
    'description': 'While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is poisoned, its physical attacks have 1.5x power.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 214,
    'name': 'Tough Claws',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s contact moves have their power multiplied by 1.3.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 215,
    'name': 'Trace',
    'german': 'Fährte',
    'description': 'On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon´s Ability. However, if one or more adjacent Pokemon has the Ability "No Ability", Trace won´t copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned "No Ability", as well as Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Schooling, Stance Change, Trace, and Zen Mode.',
    'descriptionGerman': '',
    'shortDescription': 'On switch-in, or when it can, this Pokemon copies a random adjacent foe´s Ability.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 216,
    'name': 'Triage',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s healing moves have their priority increased by 3.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 217,
    'name': 'Truant',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon skips every other turn instead of using a move.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 218,
    'name': 'Turboblaze',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s moves and their effects ignore the Abilities of other Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 219,
    'name': 'Unaware',
    'german': '',
    'description': 'This Pokemon ignores other Pokemon´s Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon´s Defense, Special Defense, and evasiveness stat stages when dealing damage.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon ignores other Pokemon´s stat stages when taking or doing damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 220,
    'name': 'Unburden',
    'german': '',
    'description': 'If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.',
    'descriptionGerman': '',
    'shortDescription': 'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 221,
    'name': 'Unnerve',
    'german': '',
    'description': 'While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon´s Speed tiers.',
    'descriptionGerman': '',
    'shortDescription': 'While this Pokemon is active, it prevents opposing Pokemon from using their Berries.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 222,
    'name': 'Victory Star',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon and its allies´ moves have their accuracy multiplied by 1.1.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 223,
    'name': 'Vital Spirit',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 224,
    'name': 'Volt Absorb',
    'german': '',
    'description': 'This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 225,
    'name': 'Water Absorb',
    'german': '',
    'description': 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 226,
    'name': 'Water Bubble',
    'german': '',
    'description': 'This Pokemon´s attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon´s attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Water power is 2x; it can´t be burned; Fire power against it is halved.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 227,
    'name': 'Water Compaction',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon´s Defense is raised 2 stages after it is damaged by a Water-type move.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 228,
    'name': 'Water Veil',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon cannot be burned. Gaining this Ability while burned cures it.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 229,
    'name': 'Weak Armor',
    'german': '',
    'description': 'If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.',
    'descriptionGerman': '',
    'shortDescription': 'If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 230,
    'name': 'White Smoke',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'Prevents other Pokemon from lowering this Pokemon´s stat stages.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 231,
    'name': 'Wimp Out',
    'german': '',
    'description': 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 232,
    'name': 'Wonder Guard',
    'german': '',
    'description': '',
    'descriptionGerman': '',
    'shortDescription': 'This Pokemon can only be damaged by supereffective moves and indirect damage.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 233,
    'name': 'Wonder Skin',
    'german': '',
    'description': 'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.',
    'descriptionGerman': '',
    'shortDescription': 'Status moves with accuracy checks are 50% accurate when used on this Pokemon.',
    'shortDescriptionGerman': ''
  },
  {
    'id': 234,
    'name': 'Zen Mode',
    'german': '',
    'description': 'If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan´s HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.',
    'descriptionGerman': '',
    'shortDescription': 'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.',
    'shortDescriptionGerman': ''
  }
];
