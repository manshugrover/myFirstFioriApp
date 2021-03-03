sap.ui.define([
    "oft/fiori/controller/BaseController"
], 
function(Controller){
    "use strict";
return Controller.extend("oft.fiori.Conroller.View2",{

    onBack:function(){
        //get the app object
        //step2 navigate to another view
        this.getAppObject().to("idView1");
        
    }
});
});