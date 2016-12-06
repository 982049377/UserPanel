var Crystal = (function () {
    function Crystal() {
        this.identityID = 0;
        this.atk = 0;
        this.def = 0;
        this.configId = "";
        this.name = "";
        Crystal.Id++;
        this.identityID = Crystal.Id;
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
    p.setinformation = function (id, atk, def, name) {
        this.configId = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
    };
    Crystal.Id = 0;
    return Crystal;
}());
egret.registerClass(Crystal,'Crystal');
//# sourceMappingURL=Crystal.js.map