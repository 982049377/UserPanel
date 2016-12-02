enum heroQualitySort {
    C,//普通
    B,//稀有
    A,//史诗
    S//传说
}

class Hero {
    id: string;

    exp: Bignumber;

    level: number = 0;

    name: string;

    atk: number = 0;

    def: number = 0;

    quality: heroQualitySort;

    equipments: Equipment[];

    isInTeam: boolean;

    get Atk() {
        var result = 0;
        this.equipments.forEach(equipment => result += equipment.Atk)
        return result;
    }
    private _cacheHeroFightPower = 0;
    //private flag:boolean=false;
    get fightPower() {
        if (!this._cacheHeroFightPower) {
            var result = this.atk * 1.2 + this.def * 0.8;
            this.equipments.forEach(equipment => result += equipment.fightPower);
            this._cacheHeroFightPower = result;
        }
        return this._cacheHeroFightPower;
    }
    constructor() {
        this.id = "";
        this.name = "";
        this.exp = new Bignumber();
        this.isInTeam = false;
        this.equipments = [];
    }

    setinformation(id: string, name: string, atk: number, def: number, quality: heroQualitySort) {
        this.id = id;
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.quality = quality;
    }
    addEquipment(equipment: Equipment) {
        this.equipments.push(equipment);
    }
    removeEquipment(equipment: Equipment) {
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index);
    }
}
