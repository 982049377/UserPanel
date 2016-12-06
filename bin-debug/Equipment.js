var equipmentQualitySort;
(function (equipmentQualitySort) {
    equipmentQualitySort[equipmentQualitySort["Common"] = 0] = "Common";
    equipmentQualitySort[equipmentQualitySort["Rare"] = 1] = "Rare";
    equipmentQualitySort[equipmentQualitySort["Epic"] = 2] = "Epic";
    equipmentQualitySort[equipmentQualitySort["Story"] = 3] = "Story"; //传说
})(equipmentQualitySort || (equipmentQualitySort = {}));
var Equipment = (function () {
    function Equipment() {
        this.atkItSelf = 0;
        this.defItSelf = 0;
        this.id = "";
        this.name = "";
        this.crystals = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "Atk"
        ,function () {
            var result = this.atkItSelf;
            this.crystals.forEach(function (crystal) { return result += crystal.Atk; });
            return result;
        }
    );
    d(p, "Def"
        ,function () {
            var result = this.defItSelf;
            this.crystals.forEach(function (crystal) { return result += crystal.Def; });
            return result;
        }
    );
    d(p, "fightPower"
        // private _cacheEquipmentFightPower = 0;
        ,function () {
            // if (!this._cacheEquipmentFightPower) {
            var result = this.Atk * 1.2 + this.Def * 0.8;
            this.crystals.forEach(function (crystal) { return result += crystal.fightPower; });
            // this._cacheEquipmentFightPower = result;
            // }
            // return this._cacheEquipmentFightPower;
            return result;
        }
    );
    p.setinformation = function (id, atk, def, name, quality) {
        this.id = id;
        this.atkItSelf = atk;
        this.defItSelf = def;
        this.name = name;
        this.quality = quality;
    };
    p.addCrystal = function (user, crystal) {
        this.crystals.push(crystal);
        user.flag = true;
    };
    p.removeCrystal = function (user, crystal) {
        var index = this.crystals.indexOf(crystal);
        this.crystals.splice(index);
        user.flag = true;
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map