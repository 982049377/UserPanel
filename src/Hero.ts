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

    initialAtk: number = 0;
    get Atk() {
        var atk = 0;
        switch (this.quality) {
            case heroQualitySort.A:
                atk = this.initialAtk + this.level * 0.7;
                break;
            case heroQualitySort.B:
                atk = this.initialAtk + this.level * 0.6;
                break;
            case heroQualitySort.C:
                atk = this.initialAtk + this.level * 0.5;
                break;
            case heroQualitySort.S:
                atk = this.initialAtk + this.level * 0.8;
                break;
        }
        this.equipments.forEach(equipment => atk += equipment.Atk);
        return atk;
    }

    initialDef: number = 0;
    //@Cache
    get Def() {
        var def = 0;
        switch (this.quality) {
            case heroQualitySort.A:
                def = this.initialDef + this.level * 0.7;
                break;
            case heroQualitySort.B:
                def = this.initialDef + this.level * 0.6;
                break;
            case heroQualitySort.C:
                def = this.initialDef + this.level * 0.5;
                break;
            case heroQualitySort.S:
                def = this.initialDef + this.level * 0.8;
                break;
        }
        this.equipments.forEach(equipment => def += equipment.Def);
        return def;
    }


    quality: heroQualitySort;

    equipments: Equipment[];

    isInTeam: boolean;

    // get Atk() {
    //     var result = 0;
    //     this.equipments.forEach(equipment => result += equipment.Atk)
    //     return result;
    // }
    // private _cacheHeroFightPower = 0;
    // public static flag: boolean = false;
    get fightPower() {
        // if (this._cacheHeroFightPower && !Hero.flag) {
        //     console.log("Hero.flag" + Hero.flag);
        //     return this._cacheHeroFightPower;
        // }
        // if (!this._cacheHeroFightPower) {
        var result = this.Atk * 1.2 + this.Def * 0.8;
        this.equipments.forEach(equipment => result += equipment.fightPower);
        // this._cacheHeroFightPower = result;
        // }
        return result;
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
        this.initialAtk = atk;
        this.initialDef = def;
        this.quality = quality;
    }
    addEquipment(user: User, equipment: Equipment) {
        this.equipments.push(equipment);
        user.flag = true;
    }
    removeEquipment(user: User, equipment: Equipment) {
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index);
        user.flag = true;
    }
}
