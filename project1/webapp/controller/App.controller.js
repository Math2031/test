sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Log) {
        "use strict";

        return Controller.extend("opensap.project1.controller.App", {
            onInit: function () {
                Log.info("Init");
            },
            onPress: function (sValue) {
                sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
                    oMessage.show("Searching..." + " " + sValue);
                });
            }
        });
    });
