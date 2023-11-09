sap.ui.define([
    "./BaseController",
    "../model/formatter"
], function (BaseController, formatter) {
    "use strict";
    return BaseController.extend("opensap.orders.orders.controller.Info", {
        formatter: formatter,
        onInit: function(){
            this.getRouter().getRoute("info").attachPatternMatched(this._onInfoMatched,this);
        },
        _onInfoMatched : function(oEvent){
            var sObjectId = oEvent.getParameter("arguments").objectId,
            sItemPosition = oEvent.getParameter("arguments").itemPosition;

        this.getModel("appView").setProperty("/selectedItemId", sItemPosition);
        this.getModel("appView").setProperty("/layout", "ThreeColumnsEndExpanded");
        this.getModel().metadataLoaded().then(function () {
            var sObjectPath = this.getModel().createKey("SalesOrderLineItemSet", {
                SalesOrderID: sObjectId,
                ItemPosition: sItemPosition
            });
            this.getView().bindElement({
                path: "/" + sObjectPath,
                parameters: {
                    'expand': 'ToHeader'
                }
            });
        }.bind(this));
        }
    });

});