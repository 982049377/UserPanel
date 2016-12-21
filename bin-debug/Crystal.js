var Crystal = (function () {
    function Crystal() {
        this.identityID = 0;
        this.atk = 0;
        this.def = 0;
        this.configId = "";
        this.name = "";
        Crystal.Id++;
        this.identityID = Crystal.Id;
        this._bitmap = new egret.Bitmap();
    }
    var d = __define,c=Crystal,p=c.prototype;
    d(p, "Atk"
        ,function () {
            return this.atk;
        }
    );
    d(p, "Def"
        ,function () {
            return this.def;
        }
    );
    d(p, "fightPower"
        // private _cacheCrystalFightPower = 0;
        ,function () {
            // if (!this._cacheCrystalFightPower) {
            var result = this.atk * 1.2 + this.def * 0.8;
            // this._cacheCrystalFightPower=result;
            // }
            // return this._cacheCrystalFightPower;
            return result;
        }
    );
    p.setinformation = function (id, atk, def, name, bitmap) {
        this.configId = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
        this._bitmap.texture = bitmap.texture;
    };
    Crystal.Id = 0;
    return Crystal;
}());
egret.registerClass(Crystal,'Crystal');
//# sourceMappingURL=Crystal.js.map