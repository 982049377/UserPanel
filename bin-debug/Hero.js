var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        //console.log(target);//引用时的类
        //console.log(propertyName)//接下来的函数
        //console.log(this);
        if (this["fightHeroPowerCache"] != null && !this["flag"]) {
            return this["fightHeroPowerCache"];
        }
        else {
            this["fightHeroPowerCache"] = getter.apply(this);
        }
        //console.log(this["fightHeroPowerCache"]);
        return this["fightHeroPowerCache"];
    };
    return desc;
};
var heroQualitySort;
(function (heroQualitySort) {
    heroQualitySort[heroQualitySort["C"] = 0] = "C";
    heroQualitySort[heroQualitySort["B"] = 1] = "B";
    heroQualitySort[heroQualitySort["A"] = 2] = "A";
    heroQualitySort[heroQualitySort["S"] = 3] = "S"; //传说
})(heroQualitySort || (heroQualitySort = {}));
var Hero = (function () {
    function Hero() {
        this.identityID = 0;
        this.level = 0;
        this.initialAtk = 0;
        this.physique = 0; //体质
        this.initialDef = 0;
        // get Atk() {
        //     var result = 0;
        //     this.equipments.forEach(equipment => result += equipment.Atk)
        //     return result;
        // }
        this._cacheHeroFightPower = 0;
        this.flag = false;
        this.configId = "";
        this.name = "";
        this.exp = new Bignumber();
        this.isInTeam = false;
        this.equipments = [];
        Hero.Id++;
        this.identityID = Hero.Id;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHP"
        ,function () {
            var maxhp;
            switch (this.quality) {
                case heroQualitySort.A:
                    maxhp = this.physique * 0.7;
                    break;
                case heroQualitySort.B:
                    maxhp = this.physique * 0.6;
                    break;
                case heroQualitySort.C:
                    maxhp = this.physique * 0.5;
                    break;
                case heroQualitySort.S:
                    maxhp = this.physique * 0.8;
                    break;
            }
            return maxhp;
        }
    );
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
        ,function () {
            // if (this._cacheHeroFightPower && !Hero.flag) {
            //     console.log("Hero.flag" + Hero.flag);
            //     return this._cacheHeroFightPower;
            // }
            // if (!this._cacheHeroFightPower) {
            var result = this.Atk * 1.2 + this.Def * 0.8; //攻击防御已经计算到hero中了
            //this.equipments.forEach(equipment => result += equipment.fightPower);
            // this._cacheHeroFightPower = result;
            // }
            //console.log(result);
            return result;
        }
    );
    p.setinformation = function (id, name, atk, def, quality) {
        this.configId = id;
        this.name = name;
        this.initialAtk = atk;
        this.initialDef = def;
        this.quality = quality;
    };
    p.addEquipment = function (user, equipment) {
        this.equipments.push(equipment);
        user.flag = true;
        this.flag = true;
    };
    p.removeEquipment = function (user, equipment) {
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index);
        user.flag = true;
        this.flag = true;
    };
    Hero.Id = 0;
    __decorate([
        Cache
    ], p, "fightPower", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map