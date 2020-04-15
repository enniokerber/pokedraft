
export interface Label {
  abbr: string;
  name: string;
}

export interface NameWithTitle {
  name: string;
  title: string;
}

export interface StatLabels {
  HP: Label;
  Atk: Label;
  Def: Label;
  SpAtk: Label;
  SpDef: Label;
  Speed: Label;
  BaseStatTotal: Label;
}

export interface OtherPokemonListColumns {
  Types: string;
  Abilities: string;
}

export const StatLabelsGerman: StatLabels = {
  HP: {
    abbr: 'KP',
    name: 'Kraftpunkte'
  },
  Atk: {
    abbr: 'Ang',
    name: 'Angriff'
  },
  Def: {
    abbr: 'Vert',
    name: 'Verteidigung'
  },
  SpAtk: {
    abbr: 'SpA',
    name: 'Spezial-Angriff'
  },
  SpDef: {
    abbr: 'SpV',
    name: 'Spezial-Verteidigung'
  },
  Speed: {
    abbr: 'Init',
    name: 'Initiative'
  },
  BaseStatTotal: {
    abbr: 'Bws',
    name: 'Basiswertsumme (Summe der anderen Stats)'
  }
};

export const StatLabelsEnglish: StatLabels = {
  HP: {
    abbr: 'HP',
    name: 'Health Points'
  },
  Atk: {
    abbr: 'Atk',
    name: 'Attack'
  },
  Def: {
    abbr: 'Def',
    name: 'Defense'
  },
  SpAtk: {
    abbr: 'SpA',
    name: 'Special-Attack'
  },
  SpDef: {
    abbr: 'SpD',
    name: 'Special-Defense'
  },
  Speed: {
    abbr: 'Spe',
    name: 'Speed'
  },
  BaseStatTotal: {
    abbr: 'Bst',
    name: 'Base Stat Total (Sum of the other Stats)'
  }
};

export const OtherPokemonColumnLabelsGerman: OtherPokemonListColumns = {
  Types: 'Typen',
  Abilities: 'Fähigkeiten'
};

export const OtherPokemonColumnLabelsEnglish: OtherPokemonListColumns = {
  Types: 'Types',
  Abilities: 'Abilities'
};

export interface PokemonListLabels {
  Other: OtherPokemonListColumns;
  Stats: StatLabels;
}

export const PokemonListLabelsGerman: PokemonListLabels = {
  Other: OtherPokemonColumnLabelsGerman,
  Stats: StatLabelsGerman
};

export const PokemonListLabelsEnglish: PokemonListLabels = {
  Other: OtherPokemonColumnLabelsEnglish,
  Stats: StatLabelsEnglish
};


export interface MoveListLabels {
  Type: Label;
  Category: Label;
  Power: Label;
  Accuracy: Label;
  PowerPoints: Label;
  Description: Label;
  CommonMoves: NameWithTitle;
  UsuallyUselessMoves: NameWithTitle;
  LoadingError: string;
  LoadingText: string;
  ReloadButtonText: string;
}

export const MoveListLabelsEnglish: MoveListLabels = {
  Type: {
    name: 'Type',
    abbr: 'Type'
  },
  Category: {
    name: 'Category',
    abbr: 'Cat'
  },
  Power: {
    name: 'Power',
    abbr: 'Pow'
  },
  Accuracy: {
    name: 'Accuracy',
    abbr: 'Acc'
  },
  PowerPoints: {
    name: 'PowerPoints',
    abbr: 'PP'
  },
  Description: {
    name: 'Description',
    abbr: 'Desc'
  },
  CommonMoves: {
    name: 'Common Moves',
    title: 'These are common moves that many people like to use on this Pokémon.'
  },
  UsuallyUselessMoves: {
    name: 'Usually Useless Moves',
    title: 'These moves are usually not used by the majority of players, but sometimes they can be used for unique strategies.'
  },
  LoadingError: 'An error occurred while fetching the Pokémon´s moves.',
  LoadingText: 'Loading Moves',
  ReloadButtonText: 'Load Moves'
};

export const MoveListLabelsGerman: MoveListLabels = {
  Type: {
    name: 'Typ',
    abbr: 'Typ'
  },
  Category: {
    name: 'Kategorie',
    abbr: 'Kat.'
  },
  Power: {
    name: 'Stärke',
    abbr: 'Strk.'
  },
  Accuracy: {
    name: 'Genauigkeit',
    abbr: 'Gen.'
  },
  PowerPoints: {
    name: 'Angriffspunkte',
    abbr: 'AP'
  },
  Description: {
    name: 'Beschreibung',
    abbr: 'Beschr.'
  },
  CommonMoves: {
    name: 'Beliebte Attacken',
    title: 'Das sind beliebte Attacken, die von vielen Spieler gerne auf diesem Pokémon verwendet werden.'
  },
  UsuallyUselessMoves: {
    name: 'Normalerweise unnütze Attacken',
    title: 'Diese Attacken werden vom Pokémon zwar beherrscht, aber vom Großteil der Spieler nicht genutzt. Manchmal werden diese Attacken jedoch für einzigartige Strategien verwendet oder werden durch bestimmte Items oder Fähigkeiten spielbar.'
  },
  LoadingError: 'Fehler beim Laden der Attacken',
  LoadingText: 'Lade Attacken',
  ReloadButtonText: 'Lade Attacken'
};


export interface PokemonFormLabels {
  nickname: string;
  ability: string;
  item: string;
  gender: string;
  move: string;
  happiness: string;
}

export const PokemonFormLabelsEnglish: PokemonFormLabels = {
  nickname: 'Nickname',
  ability: 'Ability',
  item: 'Item',
  gender: 'Gender',
  move: 'Move ',
  happiness: 'Happiness'
};

export const PokemonFormLabelsGerman: PokemonFormLabels = {
  nickname: 'Spitzname',
  ability: 'Fähigkeit',
  item: 'Item',
  gender: 'Geschl.',
  move: 'Attacke ',
  happiness: 'Freundsch.'
};





