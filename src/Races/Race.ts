abstract class Race {
  constructor(protected _name: string, protected _dexterity: number) { 
    this._name = _name;
    this._dexterity = _dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;