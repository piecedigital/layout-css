$(document).ready(function() {
	document.onwheel = function(e) {
		if(e.deltaY > 0) {
			var scrollDown = function(ind, inc, max, retract) {
				ind = ind || 0;
				retract = retract || 0;
				if(ind < max) {
					setTimeout(function() {
						var num = inc //* /*( (ind < max / 2) ? ind * .05;/* : (ind - (retract)) * .05);*/
						document.body.scrollTop += num;

						//console.log(num);

						scrollDown(ind+1, inc, max, retract + 1);
					}, 0);
				}
			};
			scrollDown(0, 20, 10);
		} else {
			var scrollUp = function(ind, inc, max, retract) {
				ind = ind || 0;
				retract = retract || 0;
				if(ind < max) {
					setTimeout(function() {
						var num = inc //* /*( (ind < max / 2) ? ind * .05;/* : (ind - (retract)) * .05);*/
						document.body.scrollTop -= num;

						//console.log(num);

						scrollUp(ind+1, inc, max, retract + 1);
					}, 0);
				}
			};
			scrollUp(0, 20, 10);
		}
		return false;
	};

	$(document).on("click", "a", function(e) {
		var id = $(this).attr("href");
		if(id.match(/#[a-z0-9\-_]*/i)) {
			document.body.offsetHeight = document.body.offsetHeight ||
																	document.body.innerHeight ||
																	document.getElementsByTagName("body")[0].offsetHeight;

			document.body.clientHeight = document.body.clientHeight ||
																	document.getElementsByTagName("body")[0].clientHeight;

			//console.log(document.body.scrollTop, document.body.offsetHeight, document.body.clientHeight)
			if($(id).offset().top > document.body.scrollTop + 100) {
				var scrollDown = function(ind, inc, max) {
					ind = ind || 0;

					if(document.body.scrollTop < $(id).offset().top - 50 &&
					document.body.scrollTop < (document.body.offsetHeight - document.body.clientHeight) - 50) {
						setTimeout(function() {
							var num = inc;
							document.body.scrollTop += num;

							//console.log(num);

							scrollDown(ind+1, inc, max);
						}, 0);
					} else {
						scrollDown = null;
					}
				};

				var dist = $(id).offset().top - document.body.scrollTop;
				scrollDown(0, dist / 20, 200);
			} else
			if($(id).offset().top < document.body.scrollTop + 100) {
				var scrollUp = function(ind, inc, max) {
					ind = ind || 0;

					if(document.body.scrollTop > $(id).offset().top + 50 &&
					document.body.scrollTop > 0 + 50) {
						setTimeout(function() {
							var num = inc;
							document.body.scrollTop -= num;

							//console.log(num);

							scrollUp(ind+1, inc, max);
						}, 0);
					} else {
						scrollUp = null;
					}
				};

				var dist = document.body.scrollTop - $(id).offset().top;
				scrollUp(0, dist / 20, 200);
			}
			return false;
		};
	});
});