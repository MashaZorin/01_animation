var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d')

var clear = document.getElementById("clear");
var stop = document.getElementById('stop');

var requestId;


var clear_canvas = function(e){
    ctx.clearRect(0,0,500,500);
    ctx.closePath();
    stop_animation();
}

var stop_animation = function() {
    window.cancelAnimationFrame(requestId);
}

var animation = function(){
    stop_animation();
    
    var radius = 0;
    var mode = 0; //expanding circle is 0, contracting circle is 1
    
    var draw_circle = function(){
	clear_canvas();
	ctx.beginPath();
	ctx.arc(250, 250, radius, 0, 2*Math.PI);
	ctx.fill();
	if (mode == 0){
	    if (radius > 249){
		radius = radius - 1;
		mode = 1;
	    }
	    else{
		radius ++;
	    }
	}
	else{
	    if (radius < 1){
		radius ++;
		mode = 0;
	    }
	    else{
		radius = radius - 1;
	    }
	}
	requestId = window.requestAnimationFrame(draw_circle);
	
	//draw_circle();
		
    }
    draw_circle();
}

window.requestAnimationFrame(animation);


canvas.addEventListener('click', animation);
clear.addEventListener('click', clear_canvas);
stop.addEventListener('click', stop_animation);
