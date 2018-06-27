const canvas = document.getElementById("mCanvas");
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext("2d");

function clear() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, width, height);
}

const Noise = getNoise();
const r_ch = getNoise();
const g_ch = getNoise();
const b_ch = getNoise();

var t = 0;
var snow = [];
function init () {
	for (var i = 0; i < width; i += 2.5) {
		const alpha = Noise.sample(i/width, t);
		if (alpha > 0){
			const red = r_ch.sample(i/width, t)*255;
			const green = g_ch.sample(i/width, t)*255;
			const blue = b_ch.sample(i/width, t)*255;
			snow.push(
				{
					x: i,
					y: 0,
					color: "rgba("+ red.toString() + "," + green.toString() + "," + blue.toString() + ",",
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

const circle = 2 * Math.PI;
function draw_frame() {
	clear();
	for (var i = 0; i < snow.length; ++i) {
		ctx.beginPath();
		ctx.arc(snow[i].x, snow[i].y, 1.5, 0, circle);
		ctx.fillStyle = snow[i].color + snow[i].a.toString() + ")";
		ctx.fill();
		snow[i].y += 1;
		snow[i].a -= 0.01;
		if (snow[i].y > height || snow[i].a < 0) {
			snow.splice(i, 1);
			i--;
		}
	}
	init();
	window.requestAnimationFrame(draw_frame);
}

window.requestAnimationFrame(draw_frame);