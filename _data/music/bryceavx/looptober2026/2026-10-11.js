// @title Looptober 11 - Wavetable Testing
// @by bryce.avx
setcpm(170/4)
samples('github:BryceStevenWilley/bryce.avx.samples')
samples('github:bubobubobubobubo/dough-waveforms')

setScale("B:minor")

$: n1("3 1 1 5 1 1 6 1")
    .sometimesBy(0.2,x => x.add(n("0,[6|3|5]")))
    .sc().s("wt_digital:3")
    .wt("<0 0.25 0.5 0.75>")
    .wtrate("0.4")
    .warp("0.1")
    .warpmode("fractal")
    .warpdepth("3")

$: n1("<6 <5 7> <2 9> <7o [1,8]>>").ply(8)
  .sc().s("wt_10")
  .wt("<0 0.25 0.5 0.75>")
  .trans(-24).dec("0.3").unison(16).detune(-0.7)
  .lpf("200").lpenv("1").lpa("0.2").distort("3:0.5")
  .pan(sine.range(0.2, 0.8).slow(2.4))

$: s("mysterytheatre:1").scrub("<0!2 0.47!2>")
  .gain(1.3)

$: stack(
  s("~ [sd ~ ~ sd] [sd sd] [sd ~ ~ sd]").hpf(1000),
  s("<[~ oh ~ oh]!3 ~>"),
  s("<~!3 [misc:3!4]>"),
  s("[bd bd] ~ ~ [~ bd ~ bd]").gain(1.6)
).bank("jd990")

await initHydra();

voronoi(10, 1, 0.6)
  .diff(voronoi(11, 0.2, 0.6), 0.2)
  .blend(osc(1, 1, 0.4)).luma(0.2)
  .hue(0.2)
  .scale(2, 1)
  .out()
