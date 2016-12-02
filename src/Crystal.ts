
class Crystal {
    id: string;

    atk: number = 0;

    def: number = 0;

    name: string;
    constructor() {
        this.id = "";
        this.name = "";
    }
    get Atk() {
        return this.atk;
    }
    private _cacheCrystalFightPower = 0;

    get fightPower() {
        if (!this._cacheCrystalFightPower) {
            var result = this.atk * 1.2 + this.def * 0.8;
            this._cacheCrystalFightPower=result;
        }
        return this._cacheCrystalFightPower;
    }
    setinformation(id: string, atk: number, def: number, name: string) {
        this.id = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
    }

}