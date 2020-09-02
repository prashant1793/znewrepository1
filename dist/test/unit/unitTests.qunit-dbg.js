/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"znewrepository1/znewrepository1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});