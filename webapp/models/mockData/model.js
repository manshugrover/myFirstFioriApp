sap.ui.define(["sap/ui/model/json/JSONModel"],function(JSONMODEL){
    return{
        createFruitModel:function(){
            var oModel= new JSONMODEL();
            oModel.loadData("models/mockData/fruit.json");
            return oModel;
        }

    };
});