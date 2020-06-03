
export interface TeambuilderDisplayMode {
  showForm?: boolean;
  showPokemonList?: boolean;
  showMoveList?: boolean;
  showAbilitiesList?: boolean;
  showItemList?: boolean;
  showStats?: boolean;
}

export class DisplayModeBuilder {

  private readonly _configurationObject: TeambuilderDisplayMode;

  public static buildFormView(): DisplayModeBuilder {
    return new DisplayModeBuilder().displayForm();
  }

  constructor() {
    this._configurationObject = {
      showForm: false,
      showPokemonList: false,
      showMoveList: false,
      showAbilitiesList: false,
      showItemList: false,
      showStats: false
    };
  }

  displayPokemonList(): DisplayModeBuilder {
    this._configurationObject.showPokemonList = true;
    return this;
  }

  displayItemList(): DisplayModeBuilder {
    this._configurationObject.showItemList = true;
    return this;
  }

  displayMoveList(): DisplayModeBuilder {
    this._configurationObject.showMoveList = true;
    return this;
  }

  displayAbilitiesList(): DisplayModeBuilder {
    this._configurationObject.showAbilitiesList = true;
    return this;
  }

  displayForm(): DisplayModeBuilder {
    this._configurationObject.showForm = true;
    return this;
  }

  displayStats(): DisplayModeBuilder {
    this._configurationObject.showStats = true;
    return this;
  }

  get(): TeambuilderDisplayMode { return this._configurationObject; }
}
