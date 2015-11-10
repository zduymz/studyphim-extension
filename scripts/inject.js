$(document).ready(function() {
	var n = setInterval(function(){
		if ($('div.overlay')) {
			clearInterval(n);
			$('div.overlay').remove();
			console.log('[+] INJECTED');
			chrome.extension.sendMessage({},null);
		}
	},10);
});