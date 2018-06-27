# Aurora-Effect
[Demo](https://havorax.github.io/Aurora-Effect/): JavaScript generated Aurora Effect, using value noise

---

## [Value Noise](https://en.wikipedia.org/wiki/Value_noise)

Multiple noise objects (found in js/Perlin.js) are used to generate the 4 RGBA values for each Aurora particle.

Value noise is used, because it produces a smooth ~~enough~~ transition between the aurora colors and is simple to implement.

## Aurora

The aurora effect is produced with multiple particles, rendered in HTML Canvas, so performance may be an issue. All particles are generated at the top of the screen and slowly fade away, as they fall downwards. As a result, something that looks like an aurora is produced.

Since many particles are used, it's not ~~at all~~ the most efficient method for creating such an effect, but it does have the advantage of having color changes both vertically and horizontally.

The [demo](https://havorax.github.io/Aurora-Effect/) runs best on desktop devices.
