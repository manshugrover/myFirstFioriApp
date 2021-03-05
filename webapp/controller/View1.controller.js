sap.ui.define([
    "oft/fiori/controller/BaseController"
],
    function (Controller) {
        "use strict";
        return Controller.extend("oft.fiori.Conroller.View1", {
            onPressItem:function(oEvent){
                // here we get the obj of the item selected by user
                var oItem= oEvent.getParameter("listItem");
            },
            onSearch: function (oEvent) {
                var queryString = oEvent.getParameter("query");
                if(!queryString){
                    queryString = oEvent.getParameter("newValue");
                }
                var oFilter = new sap.ui.model.Filter("name",
                    sap.ui.model.FilterOperator.Contains,
                    queryString);
                var oFilter1= new sap.ui.model.Filter("benefit",
                                                      sap.ui.model.FilterOperator.Contains,
                                                      queryString);
                var oMainFilter= new sap.ui.model.Filter({
                    filters:[oFilter, oFilter1],
                    and: false
                })                                      

                var aFilter = [oMainFilter];
                var oList = this.getView().byId("fruits");
                oList.getBinding("items").filter(aFilter);

            },


                onNext: function () {
                    var oApp = this.getAppObject();
                    oApp.to("idView2");
                }
            
            });
    });