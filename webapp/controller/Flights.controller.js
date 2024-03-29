sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Flights", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("flights").attachMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			var oArgs = oEvent.getParameter("arguments");
			this._sCarrierId = oArgs.carrierId;
			var oView = this.getView();
			oView.bindElement({
				path: "/CarrierCollection('" + this._sCarrierId + "')",
				events: {
					dataRequested: function () {
						oView.setBusy(true);
					},
					dataReceived: function () {
						oView.setBusy(false);
					}
				}
			});
		},
		onNavBack: function () {
			var oHistory, sPreviousHash, oRouter;
			oHistory = sap.ui.core.routing.History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== 'undefined') {
				window.history.go(-1);
			} else {
				oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true /*no history*/ );
			}
		}

	});

});