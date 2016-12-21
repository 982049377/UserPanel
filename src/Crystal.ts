class Crystal {
    configId: string;

    static Id = 0;
    identityID: number = 0;

    atk: number = 0;

    def: number = 0;

    name: string;

    _bitmap: egret.Bitmap;
    constructor() {
        this.configId = "";
        this.name = "";
        Crystal.Id++;
        this.identityID = Crystal.Id;
        this._bitmap = new egret.Bitmap();
    }
    get Atk() {
        return this.atk;
    }
    get Def() {
        return this.def;
    }
    // private _cacheCrystalFightPower = 0;

    get fightPower() {
        // if (!this._cacheCrystalFightPower) {
        var result = this.atk * 1.2 + this.def * 0.8;
        // this._cacheCrystalFightPower=result;
        // }
        // return this._cacheCrystalFightPower;
        return result;
    }
    setinformation(id: string, atk: number, def: number, name: string, bitmap: egret.Bitmap) {
        this.configId = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
        this._bitmap.texture = bitmap.texture;
    }

}