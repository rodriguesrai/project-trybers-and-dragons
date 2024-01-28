import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';
  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;