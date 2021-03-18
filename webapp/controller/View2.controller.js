sap.ui.define([
    "oft/fiori/controller/BaseController",
    "sap/m/MessageBox", "sap/m/MessageToast"

],
    function (Controller, MessageAPI, StatusMessage) {
        "use strict";
        return Controller.extend("oft.fiori.Conroller.View2", {

            onBack: function () {
                //get the app object
                //step2 navigate to another view
                this.getAppObject().to("idView1");

            },
            popupClose: function (choice) {
                if (choice === "OK") {
                    var oFirstTab = this.getView().byId("Zumba");
                    oFirstTab.setVisible(false);
                    StatusMessage.show("your request has beeen approved");
                }
            },
            onAccept: function () {
                MessageAPI.confirm("would you like to approve sir?", {
                    title: "Anubhav",
                    onClose: this.popupClose.bind(this)

                });
            },
            cityPopup: null,
            countryPopup: null,
            inputFieldIdOnwhichF4TableWasPressed: null,
            onCityConfirm:function(oEvent){
                var oItem= oEvent.getParameter("selectedItem");
                sap.ui.getCore()
                       .byId(this.inputFieldIdOnwhichF4TableWasPressed)
                       .setValue(oItem.getTitle());

            },
            onF4Help: function (oEvent) {
                this.inputFieldIdOnwhichF4TableWasPressed= oEvent.getSource().getId();
                // StatusMessage.show("This page is under construction");
                if(this.cityPopup== null){
                this.cityPopup = new sap.ui.xmlfragment("oft.fiori.fragments.Popup", this);
                this.getView().addDependent(this.cityPopup);

                this.cityPopup.bindAggregation("items", {
                    path: "/cities",
                    template: new sap.m.StandardListItem({
                        title: "{city}",
                        description: "{famousFor}"
                    })
                });
                this.cityPopup.attachConfirm(this.onCityConfirm,this);
            }
                
                this.cityPopup.open();
            },

            onFilter: function () {
                // StatusMessage.show("This page is under construction");
                this.countryPopup = new sap.ui.xmlfragment("oft.fiori.fragments.Popup", this);
                //  this statement will give access to all what view knows-all the models
                // which are available at view level
                this.getView().addDependent(this.countryPopup);

                this.countryPopup.bindAggregation("items", {
                    path: "/countries",
                    template: new sap.m.StandardListItem({
                        title: "{name}",
                        description: "{code}"
                    })
                });
                this.countryPopup.open();

            }
        });
    });