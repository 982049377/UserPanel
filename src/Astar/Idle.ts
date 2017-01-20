class Idle implements State{
        public constructor(pperson:Role) {
            this.person=pperson;
        }
        private person:Role=new Role();;
        private Idlelist=["Idle0_png","Idle1_png","Idle2_png","Idle3_png"];
        private count:number=-1;
        private i:number=0;

        public onEnter(){
            egret.startTick(this.PlayIdle,this);
        }

        public onExit(){
            egret.stopTick(this.PlayIdle,this);
            //console.log("IdleExit");
        }

        private PlayIdle():boolean{
          this.count++;
          this.i++;
          if(this.count>=this.Idlelist.length)
              this.count=0;
          //var na=(i+10000).toString()+"_png";
          //console.log("Idle");
          if(this.i==10){
             this.person._role.texture=RES.getRes(this.Idlelist[this.count]);
             this.i=0;
          }
          return true;
        }
}