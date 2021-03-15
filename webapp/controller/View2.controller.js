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
                    var oFirstTab=this.getView().byId("Zumba");
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
            cityPopup:null,
            countryPopup:null,
            onF4Help:function(){
                StatusMessage.show("This page is under construction");
                // this.cityPopup=new sap.ui.xmlfragment("oft.fiori.fragments.Popup", this);
                // this.cityPopup.open();
            },
            onFilter:function(){
                StatusMessage.show("This page is under construction");
            //     this.countryPopup=new sap.ui.xmlfragment("oft.fiori.fragments.Popup", this);
            //    this.countryPopup.bindAggrigation("items",{
            //        path:"/countries",
            //        template: new sap.m.StandardListItem({
            //            title:"{name}",
            //            description:"{code}"
            //        })
            //    })
            //     this.countryPopup.open();

            }
        });
    });