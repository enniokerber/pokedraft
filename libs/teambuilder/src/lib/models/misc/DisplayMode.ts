
export interface TeambuilderDisplayMode {
  showForm?: boolean;
  showPokemonList?: boolean;
  showMoveList?: boolean;
  showAbilitiesList?: boolean;
  showItemList?: boolean;
  showStats?: boolean;
  showStatistics: boolean;
  showImport?: boolean;
}

export class DisplayModeBuilder {

  private readonly _configurationObject: TeambuilderDisplayMode;

  public static fromExistingDisplayMode(dm: TeambuilderDisplayMode): DisplayModeBuilder {
    return new DisplayModeBuilder(dm);
  }

  public static buildFormView(): DisplayModeBuilder {
    return new DisplayModeBuilder()
      .displayForm()
      .displayStatistics();
  }

  constructor(dm?: TeambuilderDisplayMode) {
    this._configurationObject = dm || {
      showForm: false,
      showPokemonList: false,
      showMoveList: false,
      showAbilitiesList: false,
      showItemList: false,
      showStats: false,
      showStatistics: true,
      showImport: false
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

  displayStatistics(): DisplayModeBuilder {
    this._configurationObject.showStatistics = true;
    this._configurationObject.showImport = false;
    return this;
  }

  displayImport(): DisplayModeBuilder {
    this._configurationObject.showImport = true;
    this._configurationObject.showStatistics = false;
    return this;
  }

  build(): TeambuilderDisplayMode { return this._configurationObject; }
}
