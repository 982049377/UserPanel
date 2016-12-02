var Crystal = (function () {
    function Crystal() {
        this.atk = 0;
        this.def = 0;
        this._cacheCrystalFightPower = 0;
        this.id = "";
        this.name = "";
    }
    var d = __define,c=Crystal,p=c.prototype;
    d(p, "Atk"
        ,function () {
            return this.atk;
        }
    );
    d(p, "fightPower"
        ,function () {
            if (!this._cacheCrystalFightPower) {
                var result = this.atk * 1.2 + this.def * 0.8;
                this._cacheCrystalFightPower = result;
            }
            return this._cacheCrystalFightPower;
        }
    );
    p.setinformation = function (id, atk, def, name) {
        this.id = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
    };
    return Crystal;
}());
egret.registerClass(Crystal,'Crystal');
//# sourceMappingURL=Crystal.js.map