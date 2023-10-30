sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log",
    "../model/formatter",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Log, formatter) {
        "use strict";

        return Controller.extend("opensap.project1.controller.Detail", {
            formatter: formatter,

            onInit: function () {
                Log.info("Init");
                this.getOwnerComponent().getRouter().getRoute("Detail").attachPatternMatched(this._onDetailMatched, this);
            },
            _onDetailMatched: function (oEvent) {
                var oView = this.getView(),
                    sMovieIndex = oEvent.getParameter("arguments")["movieId"],
                    sAppointmentIndex = oEvent.getParameter("arguments")["appointmentId"];

                oView.bindElement({
                    path: "/movies/" + sMovieIndex + "/appointments/" + sAppointmentIndex,
                    model: "movies",
                    events: {
                        change: this._onBindingChange.bind(this)
                    }
                });

            },
            _onBindingChange: function () {
                var oView = this.getView(),
                    oElementBinding = oView.getElementBinding("movies"),
                    sPath = oElementBinding.getPath();

                // if the path to the data does not exist we navigate to the not found page
                if (!oView.getModel("movies").getObject(sPath)) {
                    this.getOwnerComponent().getRouter().getTargets().display("NotFound");
                }
            },
            onNavBack: function () {
                this.getOwnerComponent().getRouter().navTo("Home");
            }
        });
    });
