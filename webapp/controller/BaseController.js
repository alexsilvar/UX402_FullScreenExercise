sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Carrier", {

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}

	});

});