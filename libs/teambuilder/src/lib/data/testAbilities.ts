import {IAbility} from "../models/api";

export const testAbilities: IAbility[] = [
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
    'id': 200,
    'name': 'Swarm',
    'german': '',
    'description': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.',
    'descriptionGerman': '',
    'shortDescription': 'At 1/3 or less of its max HP, this Pokemon´s attacking stat is 1.5x with Bug attacks.',
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
]
