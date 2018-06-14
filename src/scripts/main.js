"use strict";

import { displayMessage } from "./helper";

const googleSheet = document.getElementById("messageSheet");
const message = document.getElementById("message");

window.addEventListener("WebComponentsReady", e => {

	googleSheet.addEventListener("rise-google-sheet-response", e => {
	  if (e.detail && e.detail.results) {
	  	console.log(e.detail.results);
	    displayMessage(e.detail.results, message);
	  }
	});
});

googleSheet.go();