var canvas = document.getElementById("mCanvas");
const width = canvas.width;
const height = canvas.height;
var ctx = canvas.getContext("2d");

function clear() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, width, height);
}

var Noise = getNoise();
var r_ch = getNoise();
var g_ch = getNoise();
var b_ch = getNoise();

var t = 0;
var snow = [];
function init () {
	for (var i = 0; i < width; i += 2) {
		let alpha = Noise.sample(i/width, t);
		if (alpha > 0){
			var red = r_ch.sample(i/width, t)*255;
			var green = g_ch.sample(i/width, t)*255;
			var blue = b_ch.sample(i/width, t)*255;
			snow.push(
				{
					x: i,
					y: 0,
					r: red.toString(),
					g: green.toString(),
					b: blue.toString(),
					a: alpha
				});
		}
	}
	t += 0.002;
	if (t > 1) {
		t -= 1;
		Noise.wrapd();
		r_ch.wrapd();
		g_ch.wrapd();
		b_ch.wrapd();
	}
}
init();

function draw_frame() {
	clear();
	for (var i = 0; i < snow.length; ++i) {
		ctx.beginPath();
		ctx.arc(snow[i].x, snow[i].y, 1, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba("+ snow[i].r + "," + snow[i].g + "," + snow[i].b + "," + snow[i].a.toString() + ")";
		ctx.fill();
		snow[i].y += 1;
		snow[i].a -= 0.01;
		if (snow[i].y > height || snow[i].alpha < 0) {
			snow.splice(i, 1);
			i--;
		}
	}
	window.requestAnimationFrame(draw_frame);
	init();
}

window.requestAnimationFrame(draw_frame);