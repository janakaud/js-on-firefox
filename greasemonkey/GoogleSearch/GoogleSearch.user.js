// ==UserScript==
// @name		GoogleSearchDirect
// @namespace	com.tuna
// @include		https://www.google.lk/search*
// @description Convert Google Search redirect URLs to direct URLs by DOM manipulation
// @version		1
// @grant		none
// ==/UserScript==

setTimeout(function(e) {
	for (var i = 0; i < document.links.length; i++) {
		var url = document.links[i].href;
		var start = url.indexOf('q=');
		if (start > 0) {
			var end = url.indexOf('&sa=');
			url = decodeURIComponent(url.substring(start + 2, end));
			start = url.indexOf('u=');
			if (start > 0) {
				end = url.indexOf('&source=');
				url = decodeURIComponent(url.substring(start + 2, end));
			}
			url = url.replace(/\/en.wikipedia.org\//, '/en.m.wikipedia.org/')
			document.links[i].href = url;
		}
	}
}, 500);