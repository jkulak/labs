jQuery.support.cors = true; // force cross-site scripting (as of jQuery 1.5)

var module = namespace('jkl.infinity');

module.apihandler = function() {

	// api settings
	var _settings = {
		api_url: 'https://api.soundcloud.com',
		client_id: '59570769cb4121a0582c05646324ba47',
		offset: 0,
		limit: 15
	}

	var _page = 0;

	// Handle requests
	function _doRequest(requestUrl, onsuccess) {
		_showLoader();

		// build requestUrl
		var requestUrl = _settings.api_url + requestUrl + '?client_id=' + _settings.client_id + '&offset='  + (_settings.offset + _settings.limit * _page) + '&limit='  + _settings.limit + '&callback=jkl';

		// request handler
		$.ajax({
			dataType: 'jsonp',
			url: requestUrl,
			success: function (data) {
				_page = _page + 1;
				onsuccess(data);
			},
			error: function(a, b, c) {
				console.log('We got error from server ' + c, a, b, this);
				
			},
			complete: function() {
				_hideLoader();
			},
			statusCode: {
				200: function() {
					console.log('Server says everythig`s fine! :)', this);
			    },
			    304: function() {
			    	// not workifn?
					console.log('Server says data was not modified since :)', this);
			    },
			    401: function() {
					console.log('Server says we are unauthorized :/', this);
			    },
			    404: function() {
					console.log('Server says it didnt found a page :/', this);
			    }
			}
		});

		return true;
	}

	function _showLoader() {
		$('#apihandler-loader').show();
	}

	function _hideLoader() {
		$('#apihandler-loader').hide();
	}

	return {

		init: function (elem) {
			$(elem).append('<div id="apihandler-loader"><img src="s/loader5.gif" />Loading...</div>');	
		},
		
		getTracks: function() {

			console.log('GettingTracks', this);
			_doRequest('/tracks.json', function (data) {
				$.publish('apihandler:gettracks:success', [data]);
			});
		},

		destroy: function () {
			$('#apihandler-loader').destroy();
		}
	};

}();