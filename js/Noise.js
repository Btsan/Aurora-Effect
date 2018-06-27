function getNoise() {
	var Noise = {
		noise: [[], [], [], [], [], [], [], [], [], []],
		initialize: function() {
			for (var i = 0; i < this.noise.length; ++i) {
				this.noise[i].length = 10;
				for (var j = 0; j < this.noise[i].length; ++j) {
					this.noise[i][j] = Math.random();
				}
			}
		},
		lerp: function(a, b, t) {
			if (t < 0) t = 0;
			else if (t > 1) t = 1;
			return (1.0 - t) * a + b * t;
		},
		sample: function(x, y) {
			var dx = 9.0 * x / 1.0;
			var dy = 9.0 * y / 1.0;
			const x_index = Math.floor(Math.abs(dx - 0.0001));
			const y_index = Math.floor(Math.abs(dy - 0.0001));
			dx = Math.abs(dx - x_index);
			dy = Math.abs(dy - y_index);
			const top = this.lerp(this.noise[y_index][x_index], this.noise[y_index][x_index + 1], dx);
			const bot = this.lerp(this.noise[y_index + 1][x_index], this.noise[y_index + 1][x_index + 1], dx);
			return this.lerp(top, bot, dy);
		},
		wrapd: function(){
			var temp = this.noise.pop();
			this.noise.splice(0, 0, temp);
		}
	};
	Noise.initialize();
	return Noise;
}