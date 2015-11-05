window.onload = function onLoad() {
	
	var startColor = '#FC5B3F';
	var endColor = '#6FD57F';
	// var Firebase = require("firebase");
	var fire =  new Firebase("https://blistering-inferno-4694.firebaseio.com/quaternions/");
	//
	
	
	
	fire.child("w/").on("value", function(snapshot) {
		var sinu = snapshot.val().toPrecision(3);
		document.getElementById("label").innerHTML = sinu;
		circle.animate(sinu, {
		    from: {color: startColor},
		    to: {color: endColor}
			// circle.setText(2);
		});
	});
	
	fire.child("x/").on("value", function(snapshot) {
		var qX = snapshot.val().toPrecision(3);
		document.getElementById("labelX").innerHTML = qX;
		circleX.animate(qX, {
		    from: {color: startColor},
		    to: {color: endColor}
			// circle.setText(2);
		});
	});

	fire.child("y/").on("value", function(snapshot) {
		var qY = snapshot.val().toPrecision(3);
		document.getElementById("labelY").innerHTML = qY;
		circleY.animate(qY, {
		    from: {color: startColor},
		    to: {color: endColor}
			// circle.setText(2);
		});
	});

	fire.child("z/").on("value", function(snapshot) {
		var qZ = snapshot.val().toPrecision(3);
		document.getElementById("labelZ").innerHTML = qZ;
		circleZ.animate(qZ, {
		    from: {color: startColor},
		    to: {color: endColor}
			// circle.setText(2);
		});
	});
	
	
    var circle = new ProgressBar.Circle('#progress', {
        // color: '#3ca8fc',
		color: startColor,
		trailColor: '#eee',
		strokeWidth: 6,
		trailWidth: 1,
        duration: 5,
		fill: '#b9e0fe',
        easing: 'easeInOut',
		text: {
			value: '0'
		},
		step: function(state, circle) {
		        // circle.setText((bar.value() * 100).toFixed(0));
				circle.path.setAttribute('stroke', state.color);
				circle.setText((circle.value() * 100).toFixed(0));
				
		    }
    });
	
	
    // circle.animate(1);
	circle.animate(sinu/100, {
	    from: {color: startColor},
	    to: {color: endColor}
		// circle.setText(2);
	});
	
	
	
	
	
		//
	//

	//
	//
	    var circleX = new ProgressBar.Circle('#progressX', {
	        // color: '#3ca8fc',
		color: startColor,
		trailColor: '#eee',
		strokeWidth: 6,
		trailWidth: 1,
	        duration: 5,
		fill: '#b9e0fe',
	        easing: 'easeInOut',
		text: {
			value: '0'
		},
		step: function(state, circle) {
		        // circle.setText((bar.value() * 100).toFixed(0));
				circleX.path.setAttribute('stroke', state.color);
				circleX.setText((circle.value() * 100).toFixed(0));

		    }
	    });


	    // circle.animate(1);
	circleX.animate(qX/100, {
	    from: {color: startColor},
	    to: {color: endColor}
		// circle.setText(2);
	});
	
	
	
	

};

