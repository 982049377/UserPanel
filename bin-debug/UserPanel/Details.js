var Details = (function (_super) {
    __extends(Details, _super);
    function Details() {
        _super.call(this);
        this.contentField = new egret.DisplayObjectContainer();
    }
    var d = __define,c=Details,p=c.prototype;
    p.setInformation = function (content) {
        var _this = this;
        var background = new egret.Bitmap();
        background.texture = RES.getRes("detailbg_png");
        background.scaleX = 1.2;
        background.scaleY = 1.3;
        background.y = 190;
        background.x = 220;
        //tool.anch(background);
        this.contentField.addChild(background);
        var quality = new egret.TextField();
        quality.text = "Quality:  " + content.getQualityDescript();
        quality.textColor = 0X000000;
        quality.x = 220;
        quality.y = 350;
        quality.scaleX = 0.7;
        quality.scaleY = 0.7;
        this.contentField.addChild(quality);
        var atk = new egret.TextField();
        atk.text = content.properties.atkDiscript + content.Atk.toString();
        atk.textColor = 0X000000;
        atk.x = 220;
        atk.y = 200;
        atk.scaleX = 0.7;
        atk.scaleY = 0.7;
        this.contentField.addChild(atk);
        var def = new egret.TextField();
        def.text = content.properties.defDiscript + content.Def.toString();
        def.textColor = 0X000000;
        def.x = 220;
        def.y = 250;
        def.scaleX = 0.7;
        def.scaleY = 0.7;
        this.contentField.addChild(def);
        var FightPower = new egret.TextField();
        FightPower.text = "FighrPower:   " + content.fightPower.toString();
        FightPower.textColor = 0X000000;
        FightPower.x = 220;
        FightPower.y = 300;
        FightPower.scaleX = 0.7;
        FightPower.scaleY = 0.7;
        this.contentField.addChild(FightPower);
        var returnButton = new egret.Bitmap();
        returnButton.texture = RES.getRes("return_png");
        tool.anch(returnButton);
        returnButton.x = 370;
        returnButton.y = 210;
        this.contentField.addChild(returnButton);
        //LayoutController.getIntance().addLayer(LayerType.DetailLayer, this.contentField);
        this.addChild(this.contentField);
        returnButton.touchEnabled = true;
        returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.removeChild(_this.contentField);
        }, this);
    };
    return Details;
}(egret.DisplayObjectContainer));
egret.registerClass(Details,'Details');
//# sourceMappingURL=Details.js.map