sap.ui.define([
    "oft/fiori/controller/BaseController"
], 
function(Controller){
    "use strict";
return Controller.extend("oft.fiori.Conroller.View1",{
 onNext:function(){
     var oApp= this.getAppObject();
     oApp.to("idView2");
 }
});
});