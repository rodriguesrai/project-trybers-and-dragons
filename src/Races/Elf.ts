// src/Races/Elf.ts
import Race from './Race';

class Elf extends Race {
  private static _createdRacesInstances = 0;

  constructor(
    protected _name: string,
    protected _dexterity: number,
    private _maxLifePoints: number = 99,
  ) {
    super(_name, _dexterity);
    Elf._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
