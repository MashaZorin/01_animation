var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d')

var clear = document.getElementById("clear");
var stop = document.getElementById('stop');
var start_circle = document.getElementById('start_circle');
var start_dvd = document.getElementById('start_dvd');

var requestId;


var clear_canvas = function(e){
    ctx.clearRect(0,0,500,500);
    //ctx.closePath();
    stop_animation();
}

var stop_animation = function() {
    window.cancelAnimationFrame(requestId);
}

var circle_animation = function(){
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

var dvd_animation = function(){
    stop_animation();

    var rect_x = 100;
    var rect_y = 50;

    var x = 0;
    var y = 0;
    var mode_x = 1; //1 if increasing, -1 if decreasing
    var mode_y = 1;
    
    var draw_dvd =function(){
	clear_canvas();
	ctx.fillRect(x, y, rect_x, rect_y);
	if (x > 500 - rect_x || x < 0){
	    if (mode_x == 1){
		mode_x = -1;
	    }
	    else{
		mode_x = 1;
	    }
	}
	if (y > 500 - rect_y || y < 0){
	    if (mode_y == 1){
		mode_y = -1;
	    }
	    else{
		mode_y = 1;
	    }
	}
	x += mode_x;
	y += mode_y;

	requestId = window.requestAnimationFrame(draw_dvd);
	    
    }
    draw_dvd();
}

//window.requestAnimationFrame(circle_animation);

start_circle.addEventListener('click', circle_animation);
start_dvd.addEventListener('click', dvd_animation);
clear.addEventListener('click', clear_canvas);
stop.addEventListener('click', stop_animation);
