var User = (function () {
    function User() {
        this.level = 0;
        this.gold = 0;
        this._cacheFightPower = 0;
        this.flag = false;
        this.id = "";
        this.exp = new Bignumber();
        this.cash = new Bignumber();
        this.heros = [];
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        ,function () {
            return this.heros.filter(function (hero) { return hero.isInTeam; });
        }
    );
    d(p, "fightPower"
        ,function () {
            if (this._cacheFightPower && !this.flag) {
                //console.log("User.flag" + this.flag);
                return this._cacheFightPower;
            }
            // if (!this._cacheFightPower || User.flag) {
            var result = 0;
            this.heroesInTeam.forEach(function (hero) { return result += hero.fightPower; });
            this._cacheFightPower = result;
            //console.log(this.id+"flag" + this.flag);
            this.flag = false;
            // }
            return this._cacheFightPower;
        }
    );
    p.setinformation = function (id) {
        this.id = id;
    };
    p.addHero = function (hero) {
        this.heros.push(hero);
    };
    p.inToTeam = function (hero) {
        if (this.heros.filter(function (temphero) { return temphero.id == hero.id; })) {
            var i = this.heros.indexOf(hero);
            this.heros[i].isInTeam == true;
            if (this.heros[i].isInTeam == true) {
                console.warn(hero.name + "已经上阵");
                return;
            }
            else {
                this.heros[i].isInTeam = true;
            }
            this.flag = true;
        }
    };
    p.outToTean = function (hero) {
        if (this.heros.filter(function (temphero) { return temphero.id == hero.id; })) {
            if (hero.isInTeam == false) {
                console.warn(hero.name + "没有上阵");
                return;
            }
            else {
                hero.isInTeam = false;
            }
            this.flag = true;
        }
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map