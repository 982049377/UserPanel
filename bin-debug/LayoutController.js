var LayerType;
(function (LayerType) {
    LayerType[LayerType["UILayer"] = 0] = "UILayer";
    LayerType[LayerType["DetailLayer"] = 1] = "DetailLayer";
})(LayerType || (LayerType = {}));
var LayoutController = (function (_super) {
    __extends(LayoutController, _super);
    function LayoutController() {
        _super.call(this);
        LayoutController.count++;
        if (LayoutController.count > 1)
            throw 'singleton!!';
        this.UILayer = new egret.DisplayObjectContainer();
        this.DetailLayer = new egret.DisplayObjectContainer();
        this.addChild(this.UILayer);
        this.addChild(this.DetailLayer);
    }
    var d = __define,c=LayoutController,p=c.prototype;
    LayoutController.getIntance = function () {
        if (LayoutController.instance == null) {
            LayoutController.instance = new LayoutController();
        }
        return LayoutController.instance;
    };
    // public constructor() {
    //     super();
    //     this.UILayer = new egret.DisplayObjectContainer();
    //     this.DetailLayer = new egret.DisplayObjectContainer();
    //     this.addChild(this.UILayer);
    //     this.addChild(this.DetailLayer);
    // }
    p.addLayer = function (whichType, addWhat) {
        switch (whichType) {
            case LayerType.DetailLayer:
                this.DetailLayer.addChild(addWhat);
                break;
            case LayerType.UILayer:
                this.UILayer.addChild(addWhat);
                break;
        }
    };
    p.switchIndex = function (swithchFrom, switchTo) {
        //this.swapChildren(LayerType,)
        var from = this.find(swithchFrom);
        var to = this.find(switchTo);
        this.swapChildren(from, to);
    };
    p.find = function (temp) {
        var container = new egret.DisplayObjectContainer();
        switch (temp) {
            case LayerType.DetailLayer:
                container = this.DetailLayer;
                break;
            case LayerType.UILayer:
                container = this.UILayer;
                break;
        }
        return container;
    };
    p.getIndex = function () {
        return 1;
    };
    LayoutController.count = 0;
    return LayoutController;
}(egret.DisplayObjectContainer));
egret.registerClass(LayoutController,'LayoutController');
//# sourceMappingURL=LayoutController.js.map