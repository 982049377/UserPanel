enum LayerType {
    UILayer,
    DetailLayer
}

class LayoutController extends egret.DisplayObjectContainer {

    private UILayer: egret.DisplayObjectContainer;
    private DetailLayer: egret.DisplayObjectContainer;
    public static instance;// = new LayoutController;
    private static count = 0;

    constructor() {
        super();
        LayoutController.count++;
        if (LayoutController.count > 1)
            throw 'singleton!!';
        this.UILayer = new egret.DisplayObjectContainer();
        this.DetailLayer = new egret.DisplayObjectContainer();
        this.addChild(this.UILayer);
        this.addChild(this.DetailLayer);
    }
    public static getIntance() {
        if (LayoutController.instance == null) {
            LayoutController.instance = new LayoutController();
        }
        return LayoutController.instance;
    }
    // public constructor() {
    //     super();
    //     this.UILayer = new egret.DisplayObjectContainer();
    //     this.DetailLayer = new egret.DisplayObjectContainer();
    //     this.addChild(this.UILayer);
    //     this.addChild(this.DetailLayer);
    // }

    public addLayer(whichType: LayerType, addWhat: any) {
        switch (whichType) {
            case LayerType.DetailLayer:
                this.DetailLayer.addChild(addWhat);
                break;
            case LayerType.UILayer:
                this.UILayer.addChild(addWhat);
                break;
        }
    }

    public switchIndex(swithchFrom: LayerType, switchTo: LayerType) {
        //this.swapChildren(LayerType,)
        var from = this.find(swithchFrom);
        var to = this.find(switchTo);
        this.swapChildren(from, to);
    }

    private find(temp: LayerType): egret.DisplayObjectContainer {
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
    }


    private getIndex() {
        return 1;
    }

}