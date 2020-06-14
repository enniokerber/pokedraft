import {IMMUNE, RESISTED, SUPER_EFFECTIVE, TypeChart} from "../models/api/TypeChart";

// the type chart used for statistics
// it is a plain JavaScript-Object because of its good performance

/*
export const typeChart: TypeChart = {
  [PokemonTypes.Normal]: {
    atk: {
      [PokemonTypes.Rock]: RESISTED,
      [PokemonTypes.Steel]: RESISTED,
      [PokemonTypes.Ghost]: IMMUNE
    },
    def: {
      [PokemonTypes.Fighting]: SUPER_EFFECTIVE,
      [PokemonTypes.Ghost]: IMMUNE
    }
  },
  [PokemonTypes.Fire]: {
    atk: {
      ...effective(PokemonTypes.Grass, PokemonTypes.Bug, PokemonTypes.Ice, PokemonTypes.Steel),
      ...resisted(PokemonTypes.Water, PokemonTypes.Fire, PokemonTypes.Rock, PokemonTypes.Dragon)
    },
    def: {
      ...effective(PokemonTypes.Water, PokemonTypes.Rock, PokemonTypes.Ground),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Grass, PokemonTypes.Ice, PokemonTypes.Fairy, PokemonTypes.Bug)
    }
  },
  [PokemonTypes.Water]: {
    atk: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Ground, PokemonTypes.Rock),
      ...resisted(PokemonTypes.Water, PokemonTypes.Grass, PokemonTypes.Dragon)
    },
    def: {
      ...effective(PokemonTypes.Grass, PokemonTypes.Electric),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Water, PokemonTypes.Ice)
    }
  },
  [PokemonTypes.Grass]: {
    atk: {
      ...effective(PokemonTypes.Water, PokemonTypes.Ground, PokemonTypes.Rock),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Grass, PokemonTypes.Bug, PokemonTypes.Flying, PokemonTypes.Steel, PokemonTypes.Poison, PokemonTypes.Dragon)
    },
    def: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Bug, PokemonTypes.Flying, PokemonTypes.Ice),
      ...resisted(PokemonTypes.Grass, PokemonTypes.Ground)
    }
  },
  [PokemonTypes.Bug]: {
    atk: {
      ...effective(PokemonTypes.Grass, PokemonTypes.Dark, PokemonTypes.Psychic),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Fighting, PokemonTypes.Poison, PokemonTypes.Ghost, PokemonTypes.Fairy)
    },
    def: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Rock),
      ...effective(PokemonTypes.Grass, PokemonTypes.Fighting, PokemonTypes.Ground)
    }
  },
  [PokemonTypes.Poison]: {
    atk: {
      ...effective(PokemonTypes.Grass, PokemonTypes.Fairy),
      ...resisted(PokemonTypes.Poison, PokemonTypes.Ground, PokemonTypes.Rock, PokemonTypes.Ghost),
      ...immune(PokemonTypes.Steel)
    },
    def: {
      ...effective(PokemonTypes.Ground, PokemonTypes.Psychic),
      ...resisted(PokemonTypes.Poison, PokemonTypes.Grass, PokemonTypes.Bug, PokemonTypes.Fighting, PokemonTypes.Fairy)
    }
  },
  [PokemonTypes.Flying]: {
    atk: {
      ...effective(PokemonTypes.Grass, PokemonTypes.Bug, PokemonTypes.Fighting),
      ...resisted(PokemonTypes.Electric, PokemonTypes.Rock, PokemonTypes.Steel)
    },
    def: {

    }
  },
  [PokemonTypes.Electric]: {
    atk: {
      ...effective(PokemonTypes.Water, PokemonTypes.Flying),
      ...resisted(PokemonTypes.Grass, PokemonTypes.Electric, PokemonTypes.Dragon),
      ...immune(PokemonTypes.Ground)
    },
    def: {
      ...effective(PokemonTypes.Ground),
      ...resisted(PokemonTypes.Electric, PokemonTypes.Flying, PokemonTypes.Steel)
    }
  },
  [PokemonTypes.Ground]: {
    atk: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Electric, PokemonTypes.Rock, PokemonTypes.Poison, PokemonTypes.Steel),
      ...resisted(PokemonTypes.Grass, PokemonTypes.Bug),
      ...immune(PokemonTypes.Flying)
    },
    def: {
      ...effective(PokemonTypes.Water, PokemonTypes.Grass, PokemonTypes.Ice),
      ...resisted(PokemonTypes.Rock, PokemonTypes.Poison),
      ...immune(PokemonTypes.Electric)
    }
  },
  [PokemonTypes.Rock]: {
    atk: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Bug),
      ...resisted(PokemonTypes.Ground, PokemonTypes.Steel, PokemonTypes.Fighting)
    },
    def: {
      ...effective(PokemonTypes.Water, PokemonTypes.Grass, PokemonTypes.Ground, PokemonTypes.Steel),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Flying, PokemonTypes.Normal, PokemonTypes.Poison)
    }
  },
  [PokemonTypes.Fighting]: {
    atk: {
      ...effective(PokemonTypes.Normal, PokemonTypes.Rock, PokemonTypes.Steel, PokemonTypes.Dark),
      ...resisted(PokemonTypes.Flying, PokemonTypes.Poison, PokemonTypes.Psychic, PokemonTypes.Fairy),
      ...immune(PokemonTypes.Ghost)
    },
    def: {
      ...effective(PokemonTypes.Flying, PokemonTypes.Psychic, PokemonTypes.Fairy),
      ...resisted(PokemonTypes.Bug, PokemonTypes.Rock, PokemonTypes.Dark)
    }
  },
  [PokemonTypes.Psychic]: {
    atk: {
      ...effective(PokemonTypes.Fighting, PokemonTypes.Poison),
      ...resisted(PokemonTypes.Psychic, PokemonTypes.Steel),
      ...immune(PokemonTypes.Dark)
    },
    def: {
      ...effective(PokemonTypes.Bug, PokemonTypes.Dark, PokemonTypes.Ghost),
      ...resisted(PokemonTypes.Fighting, PokemonTypes.Psychic)
    }
  },
  [PokemonTypes.Dark]: {
    atk: {
      ...effective(PokemonTypes.Ghost, PokemonTypes.Psychic),
      ...resisted(PokemonTypes.Fighting, PokemonTypes.Dark, PokemonTypes.Fairy)
    },
    def: {
      ...effective(PokemonTypes.Fighting, PokemonTypes.Bug, PokemonTypes.Fairy),
      ...resisted(PokemonTypes.Dark, PokemonTypes.Ghost),
      ...immune(PokemonTypes.Psychic)
    }
  },
  [PokemonTypes.Ghost]: {
    atk: {
      ...effective(PokemonTypes.Ghost, PokemonTypes.Psychic),
      ...resisted(PokemonTypes.Dark),
      ...immune(PokemonTypes.Normal)
    },
    def: {
      ...effective(PokemonTypes.Dark, PokemonTypes.Ghost),
      ...resisted(PokemonTypes.Bug, PokemonTypes.Poison),
      ...immune(PokemonTypes.Normal, PokemonTypes.Fighting)
    }
  },
  [PokemonTypes.Ice]: {
    atk: {
      ...effective(PokemonTypes.Grass, PokemonTypes.Flying, PokemonTypes.Ground, PokemonTypes.Dragon),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Water, PokemonTypes.Ice, PokemonTypes.Steel)
    },
    def: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Fighting, PokemonTypes.Rock, PokemonTypes.Steel),
      ...resisted(PokemonTypes.Ice)
    }
  },
  [PokemonTypes.Steel]: {
    atk: {
      ...effective(PokemonTypes.Rock, PokemonTypes.Ice, PokemonTypes.Fairy),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Water, PokemonTypes.Steel)
    },
    def: {
      ...effective(PokemonTypes.Fire, PokemonTypes.Fighting, PokemonTypes.Ground),
      ...resisted(PokemonTypes.Normal, PokemonTypes.Grass, PokemonTypes.Bug, PokemonTypes.Flying, PokemonTypes.Rock, PokemonTypes.Psychic, PokemonTypes.Steel, PokemonTypes.Ice, PokemonTypes.Dragon, PokemonTypes.Fairy),
      ...immune(PokemonTypes.Poison)
    }
  },
  [PokemonTypes.Dragon]: {
    atk: {
      ...effective(PokemonTypes.Dragon),
      ...resisted(PokemonTypes.Steel),
      ...immune(PokemonTypes.Fairy)
    },
    def: {
      ...effective(PokemonTypes.Dragon, PokemonTypes.Ice, PokemonTypes.Fairy),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Water, PokemonTypes.Grass, PokemonTypes.Electric)
    }
  },
  [PokemonTypes.Fairy]: {
    atk: {
      ...effective(PokemonTypes.Fighting, PokemonTypes.Dark, PokemonTypes.Dragon),
      ...resisted(PokemonTypes.Fire, PokemonTypes.Poison, PokemonTypes.Steel)
    },
    def: {
      ...effective(PokemonTypes.Poison, PokemonTypes.Steel),
      ...resisted(PokemonTypes.Bug, PokemonTypes.Dark, PokemonTypes.Fighting),
      ...immune(PokemonTypes.Dragon)
    }
  },
};

export function effective(...types) {
  const chart = { };
  types.forEach(type => chart[type] = SUPER_EFFECTIVE);
  return chart;
}

export function resisted(...types) {
  const chart = { };
  types.forEach(type => chart[type] = RESISTED);
  return chart;
}

export function immune(...types) {
  const chart = { };
  types.forEach(type => chart[type] = IMMUNE);
  return chart;
}
 */


export const TYPE_CHART: TypeChart = {"Normal":{"atk":{"Rock":0.5,"Steel":0.5,"Ghost":0},"def":{"Fighting":2,"Ghost":0}},"Fire":{"atk":{"Grass":2,"Bug":2,"Ice":2,"Steel":2,"Water":0.5,"Fire":0.5,"Rock":0.5,"Dragon":0.5},"def":{"Water":2,"Rock":2,"Ground":2,"Fire":0.5,"Grass":0.5,"Ice":0.5,"Fairy":0.5,"Bug":0.5}},"Water":{"atk":{"Fire":2,"Ground":2,"Rock":2,"Water":0.5,"Grass":0.5,"Dragon":0.5},"def":{"Grass":2,"Electric":2,"Fire":0.5,"Water":0.5,"Ice":0.5}},"Grass":{"atk":{"Water":2,"Ground":2,"Rock":2,"Fire":0.5,"Grass":0.5,"Bug":0.5,"Flying":0.5,"Steel":0.5,"Poison":0.5,"Dragon":0.5},"def":{"Fire":2,"Bug":2,"Flying":2,"Ice":2,"Grass":0.5,"Ground":0.5}},"Bug":{"atk":{"Grass":2,"Dark":2,"Psychic":2,"Fire":0.5,"Flying":0.5,"Fighting":0.5,"Poison":0.5,"Ghost":0.5,"Fairy":0.5},"def":{"Fire":2,"Flying":2,"Rock":2,"Grass":2,"Fighting":2,"Ground":2}},"Poison":{"atk":{"Grass":2,"Fairy":2,"Poison":0.5,"Ground":0.5,"Rock":0.5,"Ghost":0.5,"Steel":0},"def":{"Ground":2,"Psychic":2,"Poison":0.5,"Grass":0.5,"Bug":0.5,"Fighting":0.5,"Fairy":0.5}},"Flying":{"atk":{"Grass":2,"Bug":2,"Fighting":2,"Electric":0.5,"Rock":0.5,"Steel":0.5},"def":{}},"Electric":{"atk":{"Water":2,"Flying":2,"Grass":0.5,"Electric":0.5,"Dragon":0.5,"Ground":0},"def":{"Ground":2,"Electric":0.5,"Flying":0.5,"Steel":0.5}},"Ground":{"atk":{"Fire":2,"Electric":2,"Rock":2,"Poison":2,"Steel":2,"Grass":0.5,"Bug":0.5,"Flying":0},"def":{"Water":2,"Grass":2,"Ice":2,"Rock":0.5,"Poison":0.5,"Electric":0}},"Rock":{"atk":{"Fire":2,"Flying":2,"Bug":2,"Ground":0.5,"Steel":0.5,"Fighting":0.5},"def":{"Water":2,"Grass":2,"Ground":2,"Steel":2,"Fire":0.5,"Flying":0.5,"Normal":0.5,"Poison":0.5}},"Fighting":{"atk":{"Normal":2,"Rock":2,"Steel":2,"Dark":2,"Flying":0.5,"Poison":0.5,"Psychic":0.5,"Fairy":0.5,"Ghost":0},"def":{"Flying":2,"Psychic":2,"Fairy":2,"Bug":0.5,"Rock":0.5,"Dark":0.5}},"Psychic":{"atk":{"Fighting":2,"Poison":2,"Psychic":0.5,"Steel":0.5,"Dark":0},"def":{"Bug":2,"Dark":2,"Ghost":2,"Fighting":0.5,"Psychic":0.5}},"Dark":{"atk":{"Ghost":2,"Psychic":2,"Fighting":0.5,"Dark":0.5,"Fairy":0.5},"def":{"Fighting":2,"Bug":2,"Fairy":2,"Dark":0.5,"Ghost":0.5,"Psychic":0}},"Ghost":{"atk":{"Ghost":2,"Psychic":2,"Dark":0.5,"Normal":0},"def":{"Dark":2,"Ghost":2,"Bug":0.5,"Poison":0.5,"Normal":0,"Fighting":0}},"Ice":{"atk":{"Grass":2,"Flying":2,"Ground":2,"Dragon":2,"Fire":0.5,"Water":0.5,"Ice":0.5,"Steel":0.5},"def":{"Fire":2,"Fighting":2,"Rock":2,"Steel":2,"Ice":0.5}},"Steel":{"atk":{"Rock":2,"Ice":2,"Fairy":2,"Fire":0.5,"Water":0.5,"Steel":0.5},"def":{"Fire":2,"Fighting":2,"Normal":0.5,"Ground":2,"Grass":0.5,"Bug":0.5,"Flying":0.5,"Rock":0.5,"Psychic":0.5,"Steel":0.5,"Ice":0.5,"Dragon":0.5,"Fairy":0.5,"Poison":0}},"Dragon":{"atk":{"Dragon":2,"Steel":0.5,"Fairy":0},"def":{"Dragon":2,"Ice":2,"Fairy":2,"Fire":0.5,"Water":0.5,"Grass":0.5,"Electric":0.5}},"Fairy":{"atk":{"Fighting":2,"Dark":2,"Dragon":2,"Fire":0.5,"Poison":0.5,"Steel":0.5},"def":{"Poison":2,"Steel":2,"Bug":0.5,"Dark":0.5,"Fighting":0.5,"Dragon":0}}};
