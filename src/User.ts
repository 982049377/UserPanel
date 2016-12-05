class User {
    id: string;

    level: number = 0;

    exp: Bignumber;

    gold: number = 0;

    cash: Bignumber;

    heros: Hero[];


    get heroesInTeam() {
        return this.heros.filter(hero => hero.isInTeam)
    }
    private _cacheFightPower = 0;
    public flag: boolean = false;
    get fightPower() {
        if (this._cacheFightPower && !this.flag) {
            console.log("User.flag" + this.flag);
            return this._cacheFightPower;
        }
        // if (!this._cacheFightPower || User.flag) {
        var result = 0;
        this.heroesInTeam.forEach(hero => result += hero.fightPower);
        this._cacheFightPower = result;
        console.log("User.flag" + this.flag);
        this.flag = false;
        // }
        return this._cacheFightPower;
    }
    constructor() {
        this.id = "";
        this.exp = new Bignumber();
        this.cash = new Bignumber();
        this.heros = [];
    }
    setinformation(id: string) {
        this.id = id;
    }
    addHero(hero: Hero) {
        this.heros.push(hero);
    }
    inToTeam(hero: Hero) {
        if (this.heros.filter(temphero => temphero.id == hero.id)) {
            var i = this.heros.indexOf(hero);
            this.heros[i].isInTeam == true;
            if (this.heros[i].isInTeam == true) {
                console.warn(hero.name + "已经上阵");
                return;
            } else {
                this.heros[i].isInTeam = true;
            }
        }
    }
    outToTean(hero: Hero) {
        if (this.heros.filter(temphero => temphero.id == hero.id)) {
            if (hero.isInTeam == false) {
                console.warn(hero.name + "没有上阵");
                return;
            } else {
                hero.isInTeam = false;
            }
        }
    }
}