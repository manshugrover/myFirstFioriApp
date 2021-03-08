sap.ui.define([
    "oft/fiori/controller/BaseController",
    "oft/fiori/models/mockData/model"

], 
function(Controller, model){
    "use strict";
return Controller.extend("oft.fiori.Conroller.App",{
    onInit:function(){
        var oModel= model.createFruitModel();
        this.getView().setModel(oModel);
        // step-1 get the object of app control
        var oApp = this.getView().byId("myApp");
        // create the object of both views
        var oView1 = new sap.ui.view({
            id:"idView1",
            viewName:"oft.fiori.view.View1",
            type:sap.ui.core.mvc.ViewType.XML
        });
        var oView2= new sap.ui.view({
            id:"idView2",
            viewName:"oft.fiori.view.View2",
            type:sap.ui.core.mvc.ViewType.XML
        });
        //add these views as part of app control
        oApp.addMasterPage(oView1);
        oApp.addDetailPage(oView2);
    }

});
});