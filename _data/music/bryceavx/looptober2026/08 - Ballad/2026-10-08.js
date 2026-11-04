// @title Looptober 8 - Ballad
// @by bryce.avx
setcpm(60/4)

samples('github:yaxu/clean-breaks')
$: i(`<
[10,16,18]*8 [7,13,18]*8
[10,16,18]*8 [7,13,18]*8
[3,9,16]*8 [3,13,17]*8 
[7,18,24]*8 [7,18,24]*8 
>`).xen("sims").s("piano")

$: i("<~ [-2 -5] ~ [-2 -5] [-5] [0] [3,-15]!2>")
  .xen("sims").s("gm_tremolo_strings")
  .release("<[0] [0.2 1]>")
  .startFrom("8")
$: s("action").loopAt("1").lpf("800").spread(0.8)
  .startFrom("8")

$: i(`<
[10 [~ ~ ~ 7] 6 _] [3 6 _ [~ ~ -2 -1]]
[0 _ ~ [3 6]] [3 [7 _ _ 3] 0 _]
[-2 _ ~] [3]
[7 _ ~ ~] [7,18]
>
`).xen("sims").s("gm_lead_3_calliope:1").room(0.5)
  .startFrom("16")

$: s("action").loopAt("1").hpf("8000").spread(0.8)
  .startFrom("16")

await initHydra();

voronoi(
  H("[13 [13!3 16] 16!2]"),
    0.2, 6)
  .color(0.0, 1.0, 1.0)
  .modulateScale(noise(6, 0.1).rotate(0, 0.03))
  .rotate(0, -0.05)
  .out();