sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller){
    return Controller.extend("oft.fiori.controller.BaseController",{
        getAppObject:function(){
            // return sap.ui.getCore().byId("idAppView--myApp");

            return this.getView().getParent().getParent();
        }

    });
});