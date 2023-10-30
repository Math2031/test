sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("opensap.project1.controller.NotFound", {

		onNavBack : function () {
			this.getOwnerComponent().getRouter().navTo("Home");
		}

	});

});