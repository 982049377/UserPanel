var Check: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    console.log(target);
    console.log(propertyName);
    console.log(desc);
    const getter = desc.value;

    console.log("desc.get" + desc.get);
    console.log("desc.set" + desc.set);
    return getter.apply(this);
    //return target["inToTeam(hero: Hero)"];
    //return desc;
}



class User {
    id: string;

    level: number = 0;

    exp: Bignumber;

    gold: number = 0;

    cash: Bignumber;

    heros: Hero[];

    static heroesInTeamLimit = 5;

    role: Role;

    constructor() {
        this.role=new Role();
        this.id = "";
        this.exp = new Bignumber();
        this.cash = new Bignumber();
        this.heros = [];
    }
    get heroesInTeam() {
        return this.heros.filter(hero => hero.isInTeam)
    }
    private _cacheFightPower = 0;
    public flag: boolean = false;
    @Cache
    get fightPower() {
        var result = 0;
        this.heroesInTeam.forEach(hero => result += hero.fightPower);
        this._cacheFightPower = result;
        this.flag = false;
        return this._cacheFightPower;
    }

    setinformation(id: string) {
        this.id = id;
    }
    addHero(hero: Hero) {
        this.heros.push(hero);
    }
    //@Check
    inToTeam(hero: Hero) {
        if (this.checkHero(hero)) {
            var i = this.heros.indexOf(hero);
            this.heros[i].isInTeam == true;
            if (this.heros[i].isInTeam == true) {
                console.warn(hero.name + "已经上阵");
                return;
            } else {
                this.heros[i].isInTeam = true;
            }
            this.flag = true;
        }
    }
    //@Check
    checkHero(hero: Hero) {
        if (this.heros.filter(temphero => (temphero.properties.configId == hero.properties.configId) && (temphero.properties.identityID == hero.properties.identityID))) {
            return true;
        }
        return false;
    }
    outToTean(hero: Hero) {
        if (this.checkHero(hero)) {
            if (hero.isInTeam == false) {
                console.warn(hero.name + "没有上阵");
                return;
            } else {
                hero.isInTeam = false;
            }
            this.flag = true;
        }
    }

}
