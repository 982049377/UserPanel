var equipmentQualitySort;
(function (equipmentQualitySort) {
    equipmentQualitySort[equipmentQualitySort["Common"] = 0] = "Common";
    equipmentQualitySort[equipmentQualitySort["Rare"] = 1] = "Rare";
    equipmentQualitySort[equipmentQualitySort["Epic"] = 2] = "Epic";
    equipmentQualitySort[equipmentQualitySort["Story"] = 3] = "Story"; //传说
})(equipmentQualitySort || (equipmentQualitySort = {}));
var Equipment = (function () {
    function Equipment() {
        this.identityID = 0;
        this.atkItSelf = 0;
        this.defItSelf = 0;
        this.configId = "";
        this.name = "";
        this.crystals = [];
        Equipment.Id++;
        this.identityID = Equipment.Id;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "Atk"
        ,function () {
            var result = 0;
            this.crystals.forEach(function (crystal) { return result += crystal.Atk; });
            switch (this.quality) {
                case equipmentQualitySort.Common:
                    result = result * 0.8;
                    break;
                case equipmentQualitySort.Rare:
                    result = result * 0.9;
                    break;
                case equipmentQualitySort.Epic:
                    result = result * 1.0;
                    break;
                case equipmentQualitySort.Story:
                    result = result * 1.2;
                    break;
            }
            result += this.atkItSelf;
            return result;
        }
    );
    d(p, "Def"
        ,function () {
            var result = 0;
            this.crystals.forEach(function (crystal) { return result += crystal.Def; });
            switch (this.quality) {
                case equipmentQualitySort.Common:
                    result = result * 0.8;
                    break;
                case equipmentQualitySort.Rare:
                    result = result * 0.9;
                    break;
                case equipmentQualitySort.Epic:
                    result = result * 1.0;
                    break;
                case equipmentQualitySort.Story:
                    result = result * 1.2;
                    break;
            }
            result += this.defItSelf;
            return result;
        }
    );
    d(p, "fightPower"
        // private _cacheEquipmentFightPower = 0;
        ,function () {
            // if (!this._cacheEquipmentFightPower) {
            var result = this.Atk * 1.2 + this.Def * 0.8;
            //this.crystals.forEach(crystal => result += crystal.fightPower);
            // this._cacheEquipmentFightPower = result;
            // }
            // return this._cacheEquipmentFightPower;
            console.log(result);
            return result;
        }
    );
    p.setinformation = function (id, atk, def, name, quality) {
        this.configId = id;
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
    Equipment.Id = 0;
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map