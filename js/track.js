(function (d) {
	var cursorX;
	var cursorY;

	var logNo = 0;
	var fingerprint = new Fingerprint({screen_resolution: true}).get();
	var date = new Date().getTime();
	var token = Math.random().toString(36).substr(2);
	
	if (navigator.geolocation){
    	console.log('Your current position is:');
    	
    	function success(pos) {
			var crd = pos.coords;

			console.log('Your current position is:');
			console.log('Latitude : ' + crd.latitude);
			console.log('Longitude: ' + crd.longitude);
			console.log('More or less ' + crd.accuracy + ' meters.');
		};

		function error(err) {
  			console.warn('ERROR(' + err.code + '): ' + err.message);
		};

		var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};		

    	navigator.geolocation.getCurrentPosition(success, error, options);
    }

	var xInfo = d.getElementById("x-info");
	var yInfo = d.getElementById("y-info");
	var eInfo = d.getElementById("e-info");



	d.onmousemove = function(e){
	    cursorX = e.pageX;
	    cursorY = e.pageY;
	    updateInfo(cursorX,cursorY,"mv");
	}

	d.onclick = function(e){
	    cursorX = e.pageX;
	    cursorY = e.pageY;
	    updateInfo(cursorX,cursorY, "cl");
	}

	d.onmousedown = function(e){
	    cursorX = e.pageX;
	    cursorY = e.pageY;
	    updateInfo(cursorX,cursorY, "dw");
	}

	d.onmouseup = function(e){
	    cursorX = e.pageX;
	    cursorY = e.pageY;
	    updateInfo(cursorX,cursorY, "up");
	}

	function updateInfo(x,y,e){
		xInfo.innerHTML = x;
		yInfo.innerHTML = y;
		eInfo.innerHTML = e;
		logNo++;
		var data = {
			x : x,
			y : y,
			e : e,
			n : logNo,
			fp : fingerprint,
			d : date,
			t : token
		}
		console.log(data)
	}
}(document));




