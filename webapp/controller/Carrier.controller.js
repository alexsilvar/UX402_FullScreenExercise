sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Carrier", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Carrier
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Carrier
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Carrier
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Carrier
		 */
		//	onExit: function() {
		//
		//	}
		
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			var sCarrid = oCtx.getProperty("AirLineID");

			this.getRouter().navTo("flights", {
				carrierId: sCarrid
			}, false);
		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}

	});

});