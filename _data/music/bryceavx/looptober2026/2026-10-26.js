// @title Looptober 26 - Chromatic Chords
// @by bryce.avx
set(180/4)

$: stack(
  s("bd bd bd [bd bd]"),
  s("[~ [hh hh?]] * 4"),
  s("~ cp"),
  s("[~ perc] ~ [~ [~ perc]] perc")
    .n(perlin.range(0, 4)),
  s("perc:10?"),
  s("~ [~ sd ~ ~] ~ [sd ~ sd sd]").n(1).startFrom(8)
).bank("tr808")
 ._punchcard()

$: note("<g1 ab1 a1 bb1>")
  .sometimes(x => x.add(n("0,-12")))
  .s("sine,square")
  .lpf(200).lpenv("2").lpa("0.2").chebyshev("2:0.1")
  .gain(0.3).lfo({s: "<12 16>"})
  .startFrom(4)

$: chord("<G7 Ab A Bb6>").offset("<1 1 2 2>").voicing().s("supersaw")
  .trans("-12")
  .struct("x - - x x - x x").delay(0.4).gain(0.5)
  .startFrom(8)
  ._punchcard({labels: true})

$: note(`<[g5 [f5 g5] [- a5] g5]
[[ab5 c6 eb6 -] c6 - [f5 db6 bb5 gb5]]
[ab5 a5 bb5 b5 c6 cs6 c6 b5]
[[bb5,bb4] [bb4,bb3] [bb5,f5] [bb4,f5]]
>`).s("gm_clavinet")
  .penv("<-0.5 0 0 0>")
  .hpf(100).lfo({s: 0.7, da: 7000})
  .startFrom(12)