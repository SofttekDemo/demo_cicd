/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"softtek/demo_cicd_github/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
