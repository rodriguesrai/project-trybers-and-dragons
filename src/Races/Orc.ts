// src/Races/Halfling.ts
import Race from './Race';

class Orc extends Race {
  private static _createdRacesInstances = 0;

  constructor(
    protected _name: string,
    protected _dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(_name, _dexterity);
    Orc._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
