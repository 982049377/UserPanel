var heroQualitySort;
(function (heroQualitySort) {
    heroQualitySort[heroQualitySort["C"] = 0] = "C";
    heroQualitySort[heroQualitySort["B"] = 1] = "B";
    heroQualitySort[heroQualitySort["A"] = 2] = "A";
    heroQualitySort[heroQualitySort["S"] = 3] = "S"; //传说
})(heroQualitySort || (heroQualitySort = {}));
var Hero = (function () {
    function Hero() {
        this.level = 0;
        this.initialAtk = 0;
        this.initialDef = 0;
        this.id = "";
        this.name = "";
        this.exp = new Bignumber();
        this.isInTeam = false;
        this.equipments = [];
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "Atk"
        ,function () {
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
            this.equipments.forEach(function (equipment) { return atk += equipment.Atk; });
            return atk;
        }
    );
    d(p, "Def"
        ,function () {
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
            this.equipments.forEach(function (equipment) { return def += equipment.Def; });
            return def;
        }
    );
    d(p, "fightPower"
        // get Atk() {
        //     var result = 0;
        //     this.equipments.forEach(equipment => result += equipment.Atk)
        //     return result;
        // }
        // private _cacheHeroFightPower = 0;
        // public static flag: boolean = false;
        ,function () {
            // if (this._cacheHeroFightPower && !Hero.flag) {
            //     console.log("Hero.flag" + Hero.flag);
            //     return this._cacheHeroFightPower;
            // }
            // if (!this._cacheHeroFightPower) {
            var result = this.Atk * 1.2 + this.Def * 0.8;
            this.equipments.forEach(function (equipment) { return result += equipment.fightPower; });
            // this._cacheHeroFightPower = result;
            // }
            return result;
        }
    );
    p.setinformation = function (id, name, atk, def, quality) {
        this.id = id;
        this.name = name;
        this.initialAtk = atk;
        this.initialDef = def;
        this.quality = quality;
    };
    p.addEquipment = function (user, equipment) {
        this.equipments.push(equipment);
        user.flag = true;
    };
    p.removeEquipment = function (user, equipment) {
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index);
        user.flag = true;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map