class HeroBar extends egret.DisplayObjectContainer {
    background: egret.Bitmap;
    container: egret.DisplayObjectContainer;

    constructor() {
        super();
        this.container = new egret.DisplayObjectContainer();
        //this.addChild(this.container);

        this.background = new egret.Bitmap();
        this.scaleX = 1.2;
        this.scaleY = 1.2;
        this.container.addChild(this.background);
       
        var returnButton = new egret.Bitmap();
        returnButton.texture = RES.getRes("return_png");
        tool.anch(returnButton);
        returnButton.x = 370;
        returnButton.y = 210;
        this.container.addChild(returnButton);

        returnButton.touchEnabled = true;
        returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.removeChild(this.container);
        }, this);

    }
    private grids: HeroGrid[];
    private gridX = 90;
    private gridY = 60;
    private gridOffset = 10;
    private inithero() {
        this.grids = [];
        for (var i = 0; i < User.heroesInTeamLimit; i++) {
            var grid = new HeroGrid();
            this.grids.push(grid);
        }
        this.grids[0].x = this.gridX;
        this.grids[0].y = this.gridY;
        this.container.addChild(this.grids[0]);
        for (var i = 1; i <  User.heroesInTeamLimit; i++) {
            this.grids[i].x = this.grids[i - 1].x + this.grids[i].width + this.gridOffset;
            this.grids[i].y = this.gridY;
            this.container.addChild(this.grids[i]);
        }
    }


    setInformation(user: User) {
        this.background.texture = RES.getRes("bg_png");
        for (var i = 0; i <  User.heroesInTeamLimit; i++) {
            this.grids[i].call(user.heroesInTeam[i]);
        }
        for (var i = 0; i <  User.heroesInTeamLimit; i++) {
            this.grids[i].Tap();
        }
        this.addChild(this.container);
    }

}

class HeroGrid extends egret.DisplayObjectContainer {
    border: egret.Bitmap;

    contentBitmap: egret.Bitmap;

    content: any;
    constructor() {
        super();
        this.border = new egret.Bitmap();
        this.addChild(this.border);
        this.contentBitmap = new egret.Bitmap();
        this.addChild(this.contentBitmap);
        this.border.texture = RES.getRes("Border_png");
        tool.anch(this.border);
    }
    call(content: any) {
        this.content = content;
        this.contentBitmap.texture = content.properties._bitmap.texture;
        tool.anch(this.contentBitmap);
        var scale = this.border.texture.textureWidth / this.contentBitmap.texture.textureWidth;
        this.contentBitmap.scaleX = scale;
        this.contentBitmap.scaleY = scale;
    }
    Tap() {
        var details = new Details();
        this.contentBitmap.touchEnabled = true;
        this.contentBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            details.setInformation(this.content);
            LayoutController.getIntance().addLayer(LayerType.DetailLayer, details);
        }, this);
    }


}