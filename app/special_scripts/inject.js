'use strict';
$(document).ready(function() {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    $(document).on('click', '.add', function() {
		chrome.extension.sendMessage({
		   	action : 'add',
		   	data: {
				title: tabs[0].title,
				url: tabs[0].url
			}
		});
        $('p').css({"opacity": "0"});

        location.reload();
	});

});
});

