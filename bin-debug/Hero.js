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
        this._cacheHeroFightPower = 0;
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
        //private flag:boolean=false;
        ,function () {
            if (!this._cacheHeroFightPower) {
                var result = this.atk * 1.2 + this.def * 0.8;
                this.equipments.forEach(function (equipment) { return result += equipment.fightPower; });
                this._cacheHeroFightPower = result;
            }
            return this._cacheHeroFightPower;
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
    };
    p.removeEquipment = function (equipment) {
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index);
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map