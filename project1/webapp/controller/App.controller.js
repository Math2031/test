sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Log, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("opensap.project1.controller.App", {
            formatter: formatter,

            onInit: function () {
                Log.info("Init");
            },
            onPress: function (sValue) {
                sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
                    oMessage.show("Searching..." + " " + sValue);
                });
                let sCity = this.byId('city').getValue();
                let sGenre = this.byId('genre').getSelectedKey();
                let oFilterGenre = sGenre ? new Filter("genre", FilterOperator.EQ, sGenre) : null;
                let oFilterCity = sCity ? new Filter("info", FilterOperator.Contains, sCity) : null;
                this.byId('calendar').getBinding('rows').filter(oFilterGenre);
                this.byId('calendar').getAggregation('rows').forEach(oItem => {
                    oItem.getBinding('appointments').filter(oFilterCity);
                })
            },
            onAppointmentSelect(oAppointment) {
                let sPath = oAppointment.getBindingContext("movies").getPath()

                let aParameters = sPath.split("/");
                this.getOwnerComponent().getRouter().navTo("Detail", {
                    movieId: aParameters[2],
                    appointmentId: aParameters[4]
                });
            }
        });
    });
