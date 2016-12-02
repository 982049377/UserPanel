var equipmentQualitySort;
(function (equipmentQualitySort) {
    equipmentQualitySort[equipmentQualitySort["Common"] = 0] = "Common";
    equipmentQualitySort[equipmentQualitySort["Rare"] = 1] = "Rare";
    equipmentQualitySort[equipmentQualitySort["Epic"] = 2] = "Epic";
    equipmentQualitySort[equipmentQualitySort["Story"] = 3] = "Story"; //传说
})(equipmentQualitySort || (equipmentQualitySort = {}));
var Equipment = (function () {
    function Equipment() {
        this.atk = 0;
        this.def = 0;
        this._cacheEquipmentFightPower = 0;
        this.id = "";
        this.name = "";
        this.crystals = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "Atk"
        ,function () {
            var result = 0;
            this.crystals.forEach(function (crystal) { return result += crystal.Atk; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            if (!this._cacheEquipmentFightPower) {
                var result = this.atk * 1.2 + this.def * 0.8;
                this.crystals.forEach(function (crystal) { return result += crystal.fightPower; });
                this._cacheEquipmentFightPower = result;
            }
            return this._cacheEquipmentFightPower;
        }
    );
    p.setinformation = function (id, atk, def, name, quality) {
        this.id = id;
        this.atk = atk;
        this.def = def;
        this.name = name;
        this.quality = quality;
    };
    p.addCrystal = function (crystal) {
        this.crystals.push(crystal);
    };
    p.removeCrystal = function (crystal) {
        var index = this.crystals.indexOf(crystal);
        this.crystals.splice(index);
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map