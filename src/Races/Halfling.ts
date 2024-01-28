// src/Races/Halfling.ts
import Race from './Race';

class Halfling extends Race {
  private static _createdRacesInstances = 0;

  constructor(
    protected _name: string,
    protected _dexterity: number,
    private _maxLifePoints: number = 60,
  ) {
    super(_name, _dexterity);
    Halfling._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
