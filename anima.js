var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d')

var clear = document.getElementById("clear");
var stop = document.getElementById('stop');



var clear_canvas = function(e){
    ctx.clearRect(0,0,500,500);
}

var animation = function(){

    var radius = 0;
    var mode = 0; //expanding circle is 0, contracting circle is 1
    
    var draw_circle = function(){
	ctx.beginPath();
	ctx.arc(250, 250, radius, 0, 2*Math.PI);
	ctx.fill();
	if (mode == 0){
	    if (radius >= 250){
		radius = radius - 1;
		mode = 1;
	    }
	    else{
		radius ++;
	    }
	}
	else{
	    if (radius <= 0){
		radius ++;
		mode = 0;
	    }
	    else{
		radius = radius - 1;
	    }
	}
	
	draw_circle();
		
    }
}
