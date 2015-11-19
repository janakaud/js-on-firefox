window.toggleService.toggle('rw', function(channel) {
	url = channel.URI.spec;
	cached = window.forcedCache.find(url);
	if(cached) {
		channel.URI.spec = cached;
		return;
	}
	if(url.match(/\bhackerrank\.com\b/))
		channel.URI.spec = url.replace(/&?_=\d+/, '').replace(/\?$/, '');
	if(!url.match(/\b\.(js|css)\?\b/))
		return;
	param = url.match(/\b(date|v|ver|version|_|_v|t|_t|timestamp|build|b)\b=[-a-z_0-9.]{2,}&?|\?_?[a-z_0-9]+$/);
	if(!param)
		return;
	url = url.replace(param[0], '');
	if(url.endsWith('?'))
		url = url.substring(0, url.length - 1);
	channel.URI.spec = url;
}, {
	title: "URL Rewriter On",
	body: "Chosen URLs will be remapped to cache."
}, {
	title: "URL Rewriter Off",
	body: "Chosen URLs will load normally."
});
