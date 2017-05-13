// // Listen to all CamanJS instances
// Caman.Event.listen("processStart"), function (job){
// 	var loadingFilter = document.getElementById	
// 	console.log("Start:", job.name);
// });

// // Listen to a single instance only
// c = Caman ("#image");
// Caman.Event.listen(c, "processComplete", function (job){
// 	console.log("Finished:", job.name);
// });


function revertFilter() {
	Caman('#my-image', function () {
	    this.reset()
	  });
}

function applyCustomFilter1() {
	Caman('#my-image', function () {
	    this.brightness(0);
	    this.contrast(30);
	    this.noise(60);
	    this.sepia(60);
	    this.saturation(60);
	    this.hue(50);
	    this.render();
	  });
}

function applyCustomFilter2() {
	Caman('#my-image', function () {
	    this.brightness(30);
	    this.contrast(15);
	    this.noise(20);
	    this.sepia(30);
	    this.saturation(20);
	    this.hue(90);
	    this.render();
	  });
}
function applyPremadeFilter1() {
	Caman('#my-image', function () {
	    this['orangePeel']();
	    this.render();
	  });
}

function applyPremadeFilter2() {
	Caman('#my-image', function () {
	    this['lomo']();
	    this.render();
	  });
}

function applyCrop() {
		Caman("#my-image", function () {
			// width, height, x, y
			this.crop(400, 500, 0, 500);

			// Still have to call render!
			this.render();
		});
}



