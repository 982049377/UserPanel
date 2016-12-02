enum equipmentQualitySort {
    Common,//普通
    Rare,//稀有
    Epic,//史诗
    Story//传说
}

class Equipment {
    id: string;

    atk: number = 0;

    def: number = 0;

    name: string;

    quality: equipmentQualitySort;

    crystals: Crystal[];
    get Atk() {
        var result = 0;
        this.crystals.forEach(crystal => result += crystal.Atk)
        return result;
    }

    private _cacheEquipmentFightPower = 0;

    get fightPower() {
        if (!this._cacheEquipmentFightPower) {
            var result = this.atk * 1.2 + this.def * 0.8;
            this.crystals.forEach(crystal => result += crystal.fightPower);
            this._cacheEquipmentFightPower = result;
        }
        return this._cacheEquipmentFightPower;
    }
    constructor() {
        this.id = "";
        this.name = "";
        this.crystals = [];
    }
    setinformation(id: string, atk: number, def: number, name: string, quality: equipmentQualitySort) {
        this.id = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
        this.quality = quality;
    }
    addCrystal(crystal: Crystal) {
        this.crystals.push(crystal);
    }
    removeCrystal(crystal: Crystal) {
        var index = this.crystals.indexOf(crystal);
        this.crystals.splice(index);
    }
}

