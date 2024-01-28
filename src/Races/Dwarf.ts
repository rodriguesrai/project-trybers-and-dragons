// src/Races/Dwarf.ts
import Race from './Race';

class Dwarf extends Race {
  private static _createdRacesInstances = 0;

  constructor(
    protected _name: string,
    protected _dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(_name, _dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
