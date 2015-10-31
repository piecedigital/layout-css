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

						console.log(num);

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

						console.log(num);

						scrollUp(ind+1, inc, max, retract + 1);
					}, 0);
				}
			};
			scrollUp(0, 20, 10);
		}
		return false;
	};

	$(document).on("click", function(e) {

		/*var scroll = $(this).scrollTop();
		$(this).scrollTop( scroll + 800);*/

		//document.body.scrollTop = 500;
		console.log(document.body.scrollTop);
	});
});