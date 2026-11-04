// @title Looptober 7 - Microtonal Study
// @by bryce.avx
setcpm(130/4)

$: i(`<
[[9 4 1 4]*2 [12 17 15 13]*2]
[[9 4 1 4]*2 [12 17 15 13]*2]
[[9 4 0 4]*2 [12 18 15 13]*2]
[[9 4 0 3]*2 [10 18 15 13]*2]
[[9 3 0 3]*2 [10 18 16 13]*2]

[[6 3 0 3]*2 [10 18 16 10]*2]
[[6 3 0 3]*2 [10 18 16 10]*2]
[[6 3 1 3]*2 [10 17 16 10]*2]
[[6 3 1 4]*2 [12 17 16 10]*2]
[[6 4 1 4]*2 [12 17 16 13]*2]
  >`).xen("sims").ftrans("-12").s("saw")
.pitchwheel({hapRadius:0, thickness:10})

$: i(`<
[[4]*4 [8]*4]!5
[[3]*4 [6]*4]!5
  >`).xen("sims")
  .s("saw").dec(0.35)
  .ftrans("-24")
  .ph(2).phc("500").phc("1000")

$: stack(
  "[bd bd] [~ ~ bd bd] ~ ~",
  "<~ sd> ~ [~ sd] <[~ sd] [sd ~ ~]>",
  "[rd ~]*4".gain(1.3),
  "[~ rd]*4".gain(0.8),
  "oh*8".dec(0.3).gain(0.2),
).s().diode("2:0.4")

await initHydra({feedStrudel: 1});
src(s0).scale(2, 1)
  .mask(shape(4, 0.7).rotate(3.14159/2))
  .diff(o0, 0.8).scale(0.95).scrollY(0.005)
  .color(1.0, 0.0, 1.0).out();


