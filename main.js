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
	
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( 800, 600 );
	document.body.appendChild( renderer.domElement );
	
	var scene = new THREE.Scene();
	
	var camera = new THREE.PerspectiveCamera(
		35,            	// Field of view
		800 / 600, 		// Aspect ratio
		0.1,     	    // Near plane
		10000     	    // Far plane
	);
	camera.position.set(-15, 10, 10);
	camera.lookAt(scene.position);
	
    var geom = new THREE.BoxGeometry( 5, 5, 5 );
    var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
    var box = new THREE.Mesh( geom, material );
    scene.add( box );
	
	var loader = new THREE.STLLoader();
	loader.load('pen.stl', function(geometry) {
		// var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
		var mesh = new THREE.Mesh(geometry, material);
		
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();
		
		
		mesh.position.set( 0, - 0.25, 0.6 );
		mesh.rotation.set( 0, - Math.PI / 2, 0 );
		mesh.scale.set( 0.5, 0.5, 0.5 );
 
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );
		
// geometry.computeFaceNormals();
// geometry.computeVertexNormals();
// model.model = new THREE.Mesh(geometry, material);
// model.model.rotation.x = -90 * (Math.PI / 180.0);
// model.model.scale.set(0.15, 0.15, 0.15);
// model.model.position.y = -4;

// scene.add(model);
		
	});

    var light = new THREE.PointLight( 0xFFFF00 );
    light.position.set( 10, 0, 10 );
    scene.add( light );

    renderer.setClearColor( 0xdddddd, 1);
    renderer.render( scene, camera );
	
	
	
	

	
	
	
	
	
	
	
	
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

