# Perlin-Aurora-Effect
[Demo](https://havorax.github.io/Perlin-Aurora-Effect/): JavaScript generated Aurora Effect, using Perlin noise

---

## Perlin Noise

Multiple Perlin noise objects (found in js/Perlin.js) are used to generate the 4 RGBA values for each Aurora particle.

Perlin noise is used, because it produces a smooth transition between the aurora colors.

## Aurora

The aurora effect is produced with multiple particles, rendered in HTML Canvas, so performance may be an issue. All particles are generated at the top of the screen and slowly fade away, as they fall downwards. As a result, something that looks like an aurora is produced.

Since many particles are used, it's not the most efficient method for creating such an effect, but it does have the advantage of having color changes both vertically and horizontally.
