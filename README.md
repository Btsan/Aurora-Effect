# Aurora-Effect
[Demo](https://havorax.github.io/Aurora-Effect/): JavaScript generated Aurora Effect, using value noise

---

## [Value Noise](https://en.wikipedia.org/wiki/Value_noise)

Multiple noise objects (found in js/Noise.js) are used to generate the 4 *RGBA* values for each Aurora particle.

Value noise is used, because it produces a *seemingly* smooth ~~enough~~ transition between the aurora colors and is simple to implement. In truth, value noise isn't smooth, but that probably can't be seen [here](https://havorax.github.io/Aurora-Effect/).

## Aurora

The aurora effect is produced with multiple particles, rendered in HTML Canvas, so performance may be an issue. All particles are generated at the top of the screen and slowly fade away, as they fall downwards. As a result, something that looks like an aurora is produced.

Since many particles are used, it's not ~~at all~~ the most efficient method for creating such an effect, but it does have the advantage of having color changes both vertically and horizontally.

Smoother color changes could be performed using gradient noise, but the current demo seems fine, so the computationally cheaper value noise is used. Additionally, colors are currently chosen by iterpolating between RGB channels, but can also be represented as hue, as in HSL values. Using HSL values would produce color transitions that are more *logical* to humans, yet that doesn't mean RGB values are inferior. RGB values are used, because the effect is more vivid than the *overly* smooth HSL transitions.

---

The [demo](https://havorax.github.io/Aurora-Effect/) runs best on desktop devices.
