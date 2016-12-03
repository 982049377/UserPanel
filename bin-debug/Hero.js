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
        this.atk = 0;
        this.def = 0;
        this.id = "";
        this.name = "";
        this.exp = new Bignumber();
        this.isInTeam = false;
        this.equipments = [];
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "Atk"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) { return result += equipment.Atk; });
            return result;
        }
    );
    d(p, "fightPower"
        // private _cacheHeroFightPower = 0;
        // public static flag: boolean = false;
        ,function () {
            // if (this._cacheHeroFightPower && !Hero.flag) {
            //     console.log("Hero.flag" + Hero.flag);
            //     return this._cacheHeroFightPower;
            // }
            // if (!this._cacheHeroFightPower) {
            var result = this.atk * 1.2 + this.def * 0.8;
            this.equipments.forEach(function (equipment) { return result += equipment.fightPower; });
            // this._cacheHeroFightPower = result;
            // }
            return result;
        }
    );
    p.setinformation = function (id, name, atk, def, quality) {
        this.id = id;
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.quality = quality;
    };
    p.addEquipment = function (equipment) {
        this.equipments.push(equipment);
        User.flag = true;
    };
    p.removeEquipment = function (equipment) {
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index);
        User.flag = true;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map