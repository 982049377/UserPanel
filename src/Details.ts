class Details extends egret.DisplayObjectContainer {
    background: egret.Bitmap;
    role: egret.Bitmap;
    contentField: egret.DisplayObjectContainer;
    constructor() {
        super();
        this.contentField = new egret.DisplayObjectContainer();
    }
    setInformation(content: any) {
        var background = new egret.Bitmap();
        background.texture = RES.getRes("detailbg_png");
        background.scaleX = 1.2;
        background.scaleY = 1.3;
        background.y = -20;
        tool.anch(background);
        this.addChild(background);

        var quality = new egret.TextField();
        quality.text = "Quality:  " + content.getQualityDescript();
        quality.textColor = 0X000000;
        quality.x = -80;
        quality.y = 50;
        quality.scaleX = 0.7;
        quality.scaleY = 0.7;
        this.contentField.addChild(quality);

        var atk = new egret.TextField();
        atk.text = content.properties.atkDiscript + content.Atk.toString();
        atk.textColor = 0X000000;
        atk.x = -80;
        atk.y = -100;
        atk.scaleX = 0.7;
        atk.scaleY = 0.7;
        this.contentField.addChild(atk);

        var def = new egret.TextField();
        def.text = content.properties.defDiscript + content.Def.toString();
        def.textColor = 0X000000;
        def.x = -80;
        def.y = -50;
        def.scaleX = 0.7;
        def.scaleY = 0.7;
        this.contentField.addChild(def);

        var FightPower = new egret.TextField();
        FightPower.text = "FighrPower:   " + content.fightPower.toString();
        FightPower.textColor = 0X000000;
        FightPower.x = -80;
        FightPower.y = 0;
        FightPower.scaleX = 0.7;
        FightPower.scaleY = 0.7;
        this.contentField.addChild(FightPower);

        LayoutController.getIntance().addLayer(LayerType.DetailLayer, this.contentField);
        //this.addChild(this.contentField);
    }
}